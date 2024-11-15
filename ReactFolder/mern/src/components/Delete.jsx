import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Delete = () => {
    const { id } = useParams();  
    const [item, setItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:5000/items/${id}`);
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error fetching item:", error);
            }
        };
        fetchItem();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/items/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert("Item deleted successfully!");
                navigate('/');  
            } else {
                alert("Error deleting item.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">Confirm Delete</h1>
            <div className="text-center">
                <p>Are you sure you want to delete this item?</p>
                <div className="mt-4">
                    <img src={item.src} alt={item.name} className="w-full h-64 object-cover rounded-md" />
                    <h2 className="text-lg font-medium mt-4">{item.name}</h2>
                    <p>{item.type}</p>
                    <p>{item.location}</p>
                    <p>{item.likes} Likes | {item.views} Views | Rating: {item.rating}</p>
                </div>
                <button
                    onClick={handleDelete}
                    className="mt-6 py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Confirm Delete
                </button>
            </div>
        </div>
    );
};

export default Delete;
