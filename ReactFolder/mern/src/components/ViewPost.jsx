import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewPost = () => {
    const { id } = useParams(); 
    const [item, setItem] = useState(null);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:3000/items/${id}`);
                if (!response.ok) {
                    throw new Error('Post not found');
                }
                const data = await response.json();
                setItem(data);  
                setLoading(false);  
            } catch (error) {
                console.error('Error fetching post:', error);
                setError(error.message); 
                setLoading(false);  
            }
        };

        fetchPost(); 
    }, [id]); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!item) {
        return <div>Post not found.</div>;
    }

    // Handle delete action
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:3000/delete/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    alert('Post deleted successfully');
                    // Redirect to home or another page after deletion
                    window.location.href = '/';
                } else {
                    alert('Error deleting post');
                }
            } catch (error) {
                console.error('Error deleting post:', error);
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">View Post</h1>
            
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

                {/* Update and Delete Buttons */}
                <div className="flex justify-between gap-4 mt-6">
                    <Link 
                        to={`/update/${id}`} 
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Update
                    </Link>
                    <button 
                        onClick={handleDelete} 
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewPost;
