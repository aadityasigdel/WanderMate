import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Second() {
    const [formdata, setFormData] = useState({
        username: "",
        password: "",
    });
    const handlesubmit = (e) => {
    e.preventDefault();
        console.log( formdata);
    };
    const handelchange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };
    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className="flex flex-col justify-center  items-center mt-8 inset-y-px container-md">
                    <h1 className="text-3xl m-3 text-blue-400 ">Sign In</h1>
                    <input
                        type="text "
                        className="border  border-black w-1/3 m-3 p-3 rounded-md focus:bg-blue-50"
                        name="username"
                        value={formdata.username}
                        onChange={handelchange}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        className=" border  border-black w-1/3 m-3 p-3 focus:bg-blue-50"
                        name="password"
                        value={formdata.password}
                        onChange={handelchange}
                        placeholder="password"
                    />
                    <div className="flex">
                        <label htmlFor="Remember-me" className="m-3 ">
                            Remember me
                        </label>
                        <input type="Checkbox" />
                    </div>
                    <button className="bg-blue-400 border-1 p-3 text-white rounded-md w-1/6 m-3">
                        Sign In
                    </button>
                    <div className="flex m-3">
                        <label htmlFor="New">New Here ?</label>{" "}
                        <Link to="/Third" className="text-blue-500 ml-2">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Second;
