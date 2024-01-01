import React from "react";

function CardProfile(props) {
    return (
        <div className="p-2">
            {/* logo CArd */}
            <img className="mx-auto dark:invert" src={props.icon} alt="Icons" />
            {/* Descrp Card */}
            <div className="text-center text-sm p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
                provident.
            </div>
        </div>
    );
}

export default CardProfile;
