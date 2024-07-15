import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Third() {
    const [formdata, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        
    });
    function handlesubmit(e) {
        e.preventDefault();
        console.log(formdata);
    }

    function handelchange(e) {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    }

    const apple = () =>{
        if (formdata.username =="" || formdata.password == "" || formdata.email == "" )
        {
            alert("Please fill the form");
        }
        else{
            alert("login success");
        }
    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className="container-md flex flex-col items-center mt-8 justify-center">
                    <h1 className="text-3xl text-blue-600 m-2">Sign Up</h1>
                    <input
                        id="username"
                        onChange={handelchange}
                        value={formdata.username}
                        className="border border-black w-1/3 m-3 p-3 rounded  "
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                    />
                    <input
                        id="email"
                        onChange={handelchange}
                        value={formdata.email}
                        className="border border-black w-1/3 m-3 p-3 rounded  "
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                    <input
                        id="password"
                        onChange={handelchange}
                        value={formdata.password}
                        className="border border-black w-1/3 m-3 p-3 rounded"
                        type="password"
                        placeholder="password "
                        name="password"
                        required
                    />
                    <input
                        id="cpassword"
                        className="border border-black w-1/3 m-3 p-3 rounded"
                        type="password"
                        placeholder="Confirm password"
                        name="cpassword"
                        required
                    />
                    <div className="flex ">
                        <input id="agree" className="m-2" type="Checkbox" required />
                        <label>I agree to the Terms of Service</label>
                    </div>
                    <button
                        id="signup"
                        className="text-white bg-blue-600 p-3 rounded-md w-1/6 m-3"
                        onClick = {apple}
                    >
                        Sign Up
                    </button>

                    <div className="flex ">
                        <p>Already have a Account ? </p>
                        <Link
                            className="text-md text-blue-700 ml-3 "
                            to="/Second"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Third;
