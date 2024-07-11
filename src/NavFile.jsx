import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav>
                <ul className="flex justify-evenly bg-slate-500">
                    <li className="p-2  hover:bg-slate-100 text-blue border-2">
                        <Link to="/"> Landing </Link>
                    </li>
                    <li className="p-2  hover:bg-slate-100 text-blue border-2">
                        <Link to="/Second">Second</Link>
                    </li>
                    <li className="p-2  hover:bg-slate-100 text-blue border-2">
                        <Link to="/Third">Third</Link>
                    </li>
                    <li className="p-2  hover:bg-slate-100 text-blue border-2">
                        <Link to="/counter">Counter</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
