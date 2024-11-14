import PropTypes from 'prop-types';
import 'remixicon/fonts/remixicon.css'

const Card = ({imageDetails}) => {
  return (
    <>
      <div className="w-64 h-32 mb-32">
        <div>
          <img
            className="object-center object-cover rounded-lg"
            src={imageDetails?.src}
          />
        </div>
        <div className="text-sm flex gap-3 justify-start px-2 py-1 items-center">
          <img
            className="w-6 h-6 rounded-full"
            src={imageDetails?.authorImage}
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
      </div>
    </>
  );
};

Card.propTypes = {
  imageDetails: PropTypes.shape({
    src: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    views: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};


export default Card;

