import React, { useEffect, useState } from "react";

function Home() {
    const HotelList = () => {
        const [hotels, setHotels] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const fetchHotels = async () => {
                try {
                    const response = await fetch("http://localhost:3000/hotels/");
                    const data = await response.json();
                    setHotels(data);
                    console.log( data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching hotels:", error);
                    setLoading(false);
                }
            };

            fetchHotels();
        }, []);

        if (loading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h2 className="text-2xl font-semibold mb-4">Hotels</h2>
                <ul>
                    {hotels.map((hotel) => (
                        <li key={hotel.id}>{hotel.name}</li>
                    ))}
                </ul>
            </div>
        );
    };

    const slider = () => {
        // Slider logic here
    };

    return (
        <>
            <div className="overflow-hidden">
                <div className="flex justify-evenly items-center ml-5 w-full">
                    <h1 className="text-3xl font-bold text-blue-600 mt-5">
                        WanderMate
                    </h1>
                    <ul className="mt-5 flex justify-evenly w-full">
                        <li className="text-xl font-bold">Home</li>
                        <li className="text-xl font-bold">Destination</li>
                        <li className="text-xl font-bold">Travel package</li>
                        <li className="text-xl font-bold">Hotels</li>
                    </ul>
                    <div className="rounded-full bg-green-700 w-14 h-14 mr-5">
                        <img src="src/assets/userProfile.jpg" alt="User Profile" />
                    </div>
                </div>
            </div>

            <div
                id="1"
                className="w-full h-im pl-16 pr-16 pt-10 relative overflow-hidden"
            >
                <img
                    src="src/assets/solukhumbuXmt1.jpg"
                    className="w-full h-full rounded-xl text-4xl text-white p-4 bg-black bg-opacity-50"
                    alt="Solukhumbu"
                />
                <h1 className="absolute top-24 left-3/4 text-4xl text-black p-4 bg-white bg-opacity-90 rounded">
                    Explore <span className="text-yellow-700">Solukhumbu</span>
                </h1>
                <button onClick={slider}>Next</button>
            </div>

            <footer className="flex justify-center mt-4">
                <div className="w-5 h-5 rounded-full bg-orange-400 ml-2"></div>
                <div className="w-5 h-5 rounded-full border-orange-500 border ml-2"></div>
                <div className="w-5 h-5 rounded-full border-orange-500 border ml-2"></div>
                <div className="w-5 h-5 rounded-full border-orange-500 border ml-2"></div>
            </footer>

            <div className="max-w-7xl mx-auto p-4">
                <div className="text-2xl font-semibold mb-4">Things To Do</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="path/to/swimming.jpg"
                            alt="Swimming"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <div className="text-lg font-semibold">Swimming</div>
                            <div className="text-gray-500">$100</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="path/to/gym.jpg"
                            alt="Gym"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <div className="text-lg font-semibold">Gym</div>
                            <div className="text-gray-500">$50</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="path/to/spa.jpg"
                            alt="Spa"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <div className="text-lg font-semibold">Spa</div>
                            <div className="text-gray-500">$150</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="path/to/tennis.jpg"
                            alt="Tennis Court"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <div className="text-lg font-semibold">Tennis Court</div>
                            <div className="text-gray-500">$80</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm text-gray-500">
                    <div>
                        <div className="font-semibold mb-2">About WanderMate</div>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Destinations</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Tours</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Hotels</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-2">Explore</div>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">Flights</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Car Rentals</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Activities</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Deals</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-2">Trip-Advisor Sites</div>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms and Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm mt-8">
                    &copy; 2024 WanderMate LLC All rights reserved
                </div>
            </div>

            <HotelList />
        </>
    );
}

export default Home;
