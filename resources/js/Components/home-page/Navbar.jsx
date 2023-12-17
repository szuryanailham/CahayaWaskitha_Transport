import React from "react";
import NavLink from "../NavLink";
import ModeToggle from "../ModeToggle";
menubar;

function Navbar() {
    return (
        <nav className=" max-w-screen-xl h-[60px] flex justify-between bg-navcolor mb-2 p-2">
            {/* logo */}
            <NavLink>Logo</NavLink>
            {/* end logo */}
            {/* Link item nav*/}
            <div className="max-w-md flex h-10 gap-10 p-2 ">
                <NavLink>Home</NavLink>
                <NavLink>Profile</NavLink>
                <NavLink>Testimony</NavLink>
                {/* Toggle Mode */}
                <ModeToggle />
                {/* end Toggle Mode */}
            </div>
            {/* Link item nav */}
        </nav>
    );
    d;
}

export default Navbar;
