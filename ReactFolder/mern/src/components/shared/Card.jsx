import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'remixicon/fonts/remixicon.css';

const Card = ({ imageDetails }) => {
  return (
    <Link to={`/view/${imageDetails._id}`} className="w-64 h-32 mb-32 cursor-pointer">
      <div>
        <img
          className="object-center object-cover rounded-lg"
          src={imageDetails?.src}
          alt={imageDetails?.name}
        />
      </div>
      <div className="text-sm flex gap-3 justify-start px-2 py-1 items-center">
        <img
          className="w-6 h-6 rounded-full"
          src={imageDetails?.authorImage}
          alt="author"
        />
        <h1>{imageDetails?.name}</h1>
        <div className='flex gap-1'>
          <i className="ri-heart-fill flex "></i>
          <h1>{imageDetails?.likes}</h1>
        </div>
        <div className='flex gap-1'>
          <i className="ri-eye-fill"></i>
          <h1>{imageDetails?.views}</h1>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  imageDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,  
    id: PropTypes.string.isRequired, 
    src: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    views: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Card;
