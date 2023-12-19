import React from "react";
import CardProfile from "@/Components/About/CardProfile";

function ContainerCards() {
    return (
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row">
            <CardProfile icon="/images/icon_profile.svg" />
            <CardProfile icon="/images/icon_profile2.svg" />
            <CardProfile icon="/images/icon_profile3.svg" />
        </div>
    );
}
export default ContainerCards;
