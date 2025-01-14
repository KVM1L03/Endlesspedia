import React from 'react';

function HomePage() {
    return (
        <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-blue-500 text-white p-4 flex justify-between items-center shadow-md">
                <img
                    src="logo.png"
                    alt="Endlesspedia"
                    className="h-14 w-14 rounded-full bg-white p-1 shadow-lg"
                />
                <nav className="flex gap-4 text-lg font-bold">
                    <a href="#" className="hover:underline">
                        Explore
                    </a>
                    <a href="#" className="hover:underline">
                        Rant
                    </a>
                    <a href="#" className="hover:underline">
                        Saved
                    </a>
                </nav>
                <form className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 rounded-full bg-blue-400 text-white placeholder-white focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 rounded-full px-4 py-2 font-bold transition"
                    >
                        Search
                    </button>
                </form>
            </header>

            {/* Main Section */}
            <main className="w-11/12 md:w-3/4 lg:w-2/3 my-8 space-y-6">
                {/* Search Section */}
                <section className="bg-yellow-300 p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-3xl font-extrabold text-blue-900 mb-4">
                        Q: Search for anything in the encyclopedia!
                    </h1>
                    <form className="flex flex-col items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full md:w-1/2 p-3 rounded-full bg-yellow-200 text-blue-900 placeholder-blue-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white hover:bg-blue-400 rounded-full px-6 py-2 font-bold transition"
                        >
                            Search
                        </button>
                    </form>
                </section>

                {/* Content Sections */}
                <ContentSection
                    title="United States"
                    text="The United States of America (USA) or U.S.A., commonly known as the United States (U.S.) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, and two minor unincorporated territories. It is one of the world's most powerful nations."
                    image="usa.png"
                    alt="United States"
                />
                <ContentSection
                    title="Geography"
                    text="The United States is a diverse country with a varied geography. It includes densely populated urban areas, sprawling suburbs, and vast, sparsely populated wilderness areas. The Appalachian Mountains, the Rocky Mountains, and the Sierra Nevada are among the major mountain ranges. The Mississippi River, the Colorado River, and the Great Lakes are among the prominent bodies of water."
                    image="usa_map.png"
                    alt="United States Map"
                />
                <ContentSection
                    title="Government and Politics"
                    text="The United States is a federal republic and a democratic country. The president is both the head of state and government, and the members of the legislature are elected to represent the people. The country has a system of checks and balances, with three branches of government."
                    image="us_gov.png"
                    alt="United States Government"
                />
                <ContentSection
                    title="Economy"
                    text="The United States has a mixed economy, with a large service sector, a small industrial sector, and a small agricultural sector. The country's technology, innovation, and highly skilled labor, it is a leading producer of oil, natural gas, and coal."
                    image="us_economy.png"
                    alt="United States Economy"
                />
            </main>
        </div>
    );
}

function ContentSection({ title, text, image, alt }) {
    return (
        <section className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>
            <p className="text-blue-800 mb-4">{text}</p>
            <img
                src={image}
                alt={alt}
                className="rounded-lg border-4 border-blue-400 shadow-md"
            />
        </section>
    );
}

export default HomePage;
