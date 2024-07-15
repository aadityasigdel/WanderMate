import React from "react";

function NewHome() {
    return (
        <div>
            <div className="font-sans">
                <header className="flex justify-between items-center p-5 bg-white shadow-md">
                    <h1 className="text-3xl font-bold text-blue-600">
                        WanderMate
                    </h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li className="text-xl font-bold hover:text-blue-600 cursor-pointer">
                                Home
                            </li>
                            <li className="text-xl font-bold hover:text-blue-600 cursor-pointer">
                                Destination
                            </li>
                            <li className="text-xl font-bold hover:text-blue-600 cursor-pointer">
                                Travel Packages
                            </li>
                            <li className="text-xl font-bold hover:text-blue-600 cursor-pointer">
                                Hotels
                            </li>
                        </ul>
                    </nav>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-700">
                        <img src="src\assets\userProfile.jpg" alt="Profile" />
                    </div>
                </header>

                <section className="relative">
                    <img
                        src=""
                        alt="Background"
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="bg-white bg-opacity-75 p-4 rounded-full flex items-center">
                            <input
                                type="text"
                                placeholder="Search Your Places, Destination..."
                                className="p-2 w-64 rounded-l-full focus:outline-none"
                            />
                            <button className="bg-blue-500 p-2 rounded-r-full text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto p-4">
                    <h2 className="text-2xl font-semibold mb-4">
                        Top Destinations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src=""
                                alt="Swimming"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    Swimming
                                </h3>
                                <p className="text-gray-500">$100</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src=""
                                alt="Gym"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Gym</h3>
                                <p className="text-gray-500">$50</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src=""
                                alt="Spa"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Spa</h3>
                                <p className="text-gray-500">$150</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src=""
                                alt="Tennis Court"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    Tennis Court
                                </h3>
                                <p className="text-gray-500">$80</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="max-w-7xl mx-auto p-4 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                        <div>
                            <h4 className="font-semibold mb-2">
                                About WanderMate
                            </h4>
                            <ul>
                                <li className="hover:underline">
                                    <a href="#">About Us</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Home</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Destinations</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Tours</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Hotels</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Explore</h4>
                            <ul>
                                <li className="hover:underline">
                                    <a href="#">Flights</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Car Rentals</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Activities</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Deals</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                Trip-Advisor Sites
                            </h4>
                            <ul>
                                <li className="hover:underline">
                                    <a href="#">Contact Us</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Terms of Service</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="#">Terms and Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-gray-500 text-sm mt-8">
                        &copy; 2024 WanderMate LLC All rights reserved
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default NewHome;
