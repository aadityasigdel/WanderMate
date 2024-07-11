import React from "react";
import backgroundImage from "./assets/bg.png";

function MyFirstComponent() {
    return (
        <>
            <div
                className="flex flex-col  h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="flex justify-center">
                    <div className="flex  justify-between text-white w-full ">
                        <div className="text-yellow-500 text-4xl mt-6 ml-6 font-bold  ">
                            Explore.
                        </div>
                        <nav
                            id="Navigation"
                            className="flex justify-center text-4xl  w-full "
                        >
                            <ul className="flex mt-4 space-x-8">
                                <li className="ml-2">About</li>
                                <li className="ml-2">Tour</li>
                                <li className="ml-2">Sales</li>
                                <li className="ml-2">Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center text-white h-full">
                    <h4 className="text-2xl">The contry of Himalayas </h4>
                    <h1 className=" text-9xl">
                        <span className="text-yellow-600">NEP</span>AL
                    </h1>
                </div>

                <div className="flex justify-between text-white  ">
                    <div className=" text-white w-1/6 ml-6 mb-4 text-2xl">
                        <p>
                            {" "}
                            Visit Nepal, and you'll never regret it. Experience
                            its breathtaking landscapes, rich cultural heritage,
                            and warm hospitality firsthand.{" "}
                        </p>
                    </div>
                </div>
                <div className="flex justify-evenly mb-2  ">
                    <ul className="flex justify-evenly w-1/2 ml-auto text-white text-2xl">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>Google</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MyFirstComponent;
