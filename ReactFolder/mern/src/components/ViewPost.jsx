import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
    const { id } = useParams(); // Get post ID from the URL parameters
    const [item, setItem] = useState(null);  // State to hold the fetched post data
    const [loading, setLoading] = useState(true);  // State to handle loading indicator

    // Fetch the post details when the component is mounted
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/items/${id}`);
                const data = await response.json();
                setItem(data);  // Store the fetched data in state
                setLoading(false);  // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching post:', error);
                setLoading(false);  // Stop loading if there's an error
            }
        };

        fetchPost(); // Fetch the post details
    }, [id]); // Dependency array ensures this runs every time `id` changes

    // Show loading state if data is being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    // If no item is found, display an error message
    if (!item) {
        return <div>Post not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">View Post</h1>
            
            {/* Display post details */}
            <div className="space-y-4">
                <div>
                    <h2 className="text-lg font-medium">Post Details</h2>
                    <div className="space-y-2">
                        <div>
                            <label className="block text-gray-700 font-medium">Image:</label>
                            <img
                                src={item.src}
                                alt="Post"
                                className="w-full h-64 object-cover rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Type:</label>
                            <p>{item.type}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Likes:</label>
                            <p>{item.likes}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Views:</label>
                            <p>{item.views}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Author:</label>
                            <p>{item.username}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Location:</label>
                            <p>{item.location}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Rating:</label>
                            <p>{item.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPost;
