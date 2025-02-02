import React from 'react';

const SkeletonLoader: React.FC = () => {
    return (
        <div role="status" className="w-full h-full flex flex-col space-y-4 p-4 animate-pulse">
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-4"></div>
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
            ))}
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default SkeletonLoader;