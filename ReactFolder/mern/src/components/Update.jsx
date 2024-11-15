import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [item, setItem] = useState({
        src: '',
        type: '',
    });
    const [loading, setLoading] = useState(true);  // To manage loading state
    const [isUpdated, setIsUpdated] = useState(false);  // To track if the update was successful
    const navigate = useNavigate();

    // Fetch current item details
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:5000/items/${id}`);
                const data = await response.json();
                setItem(data);  // Pre-fill the form with current data
                setLoading(false);  // Stop loading after data is fetched
            } catch (error) {
                console.error("Error fetching item:", error);
                setLoading(false);  // Stop loading if there's an error
            }
        };
        fetchItem();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    // Handle form submission to update item
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/items/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });

            if (response.ok) {
                const updatedItem = await response.json();  // Get updated item data
                setItem(updatedItem);  // Update the state with the new data
                setIsUpdated(true);  // Set updated flag
                alert("Item updated successfully!");
            } else {
                alert("Error updating item.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Loading spinner or message while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">Update Post</h1>
            
            {/* Display current item details */}
            <div className="mb-6">
                <h2 className="text-lg font-medium">Current Post Details</h2>
                <div className="space-y-2">
                    <div>
                        <label className="block text-gray-700 font-medium">Image:</label>
                        <img src={item.src} alt="Item" className="w-full h-64 object-cover rounded-md" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Type:</label>
                        <p>{item.type}</p>
                    </div>
                    {/* Add more fields if needed, like name, likes, etc. */}
                </div>
            </div>

            {/* Update form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                    <input
                        type="text"
                        name="src"
                        value={item.src}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter new image URL"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Type</label>
                    <input
                        type="text"
                        name="type"
                        value={item.type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter type (e.g., Web Design)"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Save Changes
                </button>
            </form>

            {/* Show confirmation message after update */}
            {isUpdated && (
                <div className="mt-6 text-green-500 text-center">
                    <p>Post updated successfully!</p>
                </div>
            )}
        </div>
    );
};

export default Update;
