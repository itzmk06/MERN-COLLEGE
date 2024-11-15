import React, { useState } from 'react';

const Create = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Image URL:', imageUrl);
        console.log('Type:', type);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6">Upload Image</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the image URL"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the type (e.g., Web Design)"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Create;
