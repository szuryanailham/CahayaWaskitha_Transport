import React from "react";

function CardProfile(props) {
    return (
        <div className="p-2">
            {/* logo CArd */}
            <img
                className="mx-auto mb-2 dark:invert"
                src={props.icon}
                alt="Icons"
            />
            {/* Descrp Card */}
            <div className="text-center text-md p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
                provident.
            </div>
        </div>
    );
}

export default CardProfile;
