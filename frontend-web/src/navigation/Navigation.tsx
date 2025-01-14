import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen font-sans flex">
            {/* Sidebar */}
            <aside className="w-16 bg-white shadow-md flex flex-col items-center py-4 space-y-6">
                <button
                    onClick={() => navigate('/chose-game')}
                    className="p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                    <svg
                        className="w-8 h-8 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800">Endlesspedia</div>
                    <nav className="space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Explore</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Random</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Saved</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">
                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M12 8a4 4 0 11-8 0 4 4 0 018 0zm-7.45 5.96a7 7 0 1113.9 0A4 4 0 0114 18H6a4 4 0 01-3.45-4.04z" />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* Search Bar */}
                <div className="py-6 px-6">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Search for anything in the encyclopedia"
                        />
                        <button className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-600 hover:text-gray-800">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.93 10.607L5.657 7.336a.75.75 0 011.06-1.06L10 8.94l3.284-3.285a.75.75 0 011.06 1.06l-3.273 3.272L14.343 14a.75.75 0 01-1.06 1.06L10 11.06l-3.284 3.285a.75.75 0 01-1.06-1.06l3.273-3.272z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content Sections */}
                <main className="px-6 space-y-8">
                    {[
                        {
                            title: "United States",
                            content:
                                "The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America...",
                            image: "https://via.placeholder.com/150",
                        },
                        {
                            title: "Geography",
                            content:
                                "The United States is a diverse country with varied geography. It includes densely populated urban areas...",
                            image: "https://via.placeholder.com/150",
                        },
                        {
                            title: "Government and Politics",
                            content:
                                "The United States is a federal republic and a representative democracy. The president is both the head of state...",
                            image: "https://via.placeholder.com/150",
                        },
                        {
                            title: "Economy",
                            content:
                                "The United States has the world's largest economy, driven by a mix of natural resources, technology...",
                            image: "https://via.placeholder.com/150",
                        },
                    ].map((section, index) => (
                        <div key={index} className="flex items-start space-x-6">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-36 h-24 object-cover rounded-lg shadow-sm"
                            />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                                <p className="text-gray-600 mt-2">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default HomePage;
