import React, { useState } from "react";
import { useEffect } from "react";
function TopDestination() {
    const [destination, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const retrive = async () => {
            try {
                const api = await fetch("http://localhost:3000/destination/");
                const data = await api.json();
                console.log(data);
                setDestinations(data);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            } finally {
                setLoading(false);
            }
        };
        retrive();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <ul className="space-y-6">
            {destination.map((hotel) => 
            (
                <li key={hotel.id} className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-semibold mb-2">
                        {hotel.name}
                    </h1>
                    <p className="text-lg font-bold text-black-700 mb-4"> Place: {hotel.title}</p>
                    <p className="text-lg font-bold text-gray-700 mb-4"> Weather: {hotel.weather}  </p>
                    <div className="flex">
                        <img
                            src={hotel.img}
                            alt={hotel.name}
                            className="w-full h-60 object-fill rounded-md mb-4 mr-5"
                        />
                        <p className="text-gray-600 ml-3 w-full text-lg">{hotel.desc}</p>
                    </div>
                </li>
            )
            )}
        </ul>
    );
}

export default TopDestination;