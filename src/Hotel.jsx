import React, { useEffect, useState } from "react";
function Hotel() {
    const HotelList = () => {
        const [hotels, setHotels] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const fetchHotels = async () => {
                try {
                    const response = await fetch(
                        "http://localhost:3000/hotels/"
                    );
                    const data = await response.json();
                    console.log(data);
                    setHotels(data);
                } catch (error) {
                    console.error("Error fetching hotels:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchHotels();
        }, []);

        if (loading) {
            return <p>Loading...</p>;
        }

        return (
            <ul className="space-y-6">
                {hotels.map((hotel) => (
                    <li
                        key={hotel.id}
                        className="bg-white rounded-lg shadow-md p-6"
                    >
                        <h1 className="text-2xl font-semibold mb-2">
                            {hotel.name}
                        </h1>
                        <p className="text-lg font-bold text-black-700 mb-4"> Price :Rs {hotel.price}</p>
                        <p className="text-lg font-bold text-gray-700 mb-4"> Rating : {hotel.rating} ★ </p>
                        <div className=" flex ">
                        <img
                            src={hotel.img}
                            alt={hotel.name}
                            className="w-full h-60 object-fill rounded-md mb-4 mr-5"
                        />
                        <p className="text-gray-600 ml-3 w-full text-lg">{hotel.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <h1>Hotels</h1>
            <HotelList />
        </div>
    );
}

export default Hotel;
