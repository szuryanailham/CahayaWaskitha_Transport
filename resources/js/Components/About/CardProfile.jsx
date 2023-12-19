import React from "react";

function CardProfile() {
    return (
        <div className="p-2">
            {/* logo CArd */}
            <img
                className="mx-auto"
                src="/images/icon_profile.svg"
                alt="icon_satu"
            />
            {/* Descrp Card */}
            <div className="text-center text-sm p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
                provident.
            </div>
        </div>
    );
}

export default CardProfile;
