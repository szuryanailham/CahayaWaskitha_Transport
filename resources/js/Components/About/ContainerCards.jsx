import React from "react";
import CardProfile from "@/Components/About/CardProfile";

function ContainerCards() {
    return (
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row">
            <CardProfile
                text="mudahkan diri anda keliling jogja bersama kami"
                icon="/images/icon_profile.svg"
            />
            <CardProfile
                text="nikmati perjanan anda dengan mudah dan menyenangkan"
                icon="/images/icon_profile2.svg"
            />
            <CardProfile
                text="Unit berkualitas dan terawat dengan baik"
                icon="/images/icon_profile3.svg"
            />
        </div>
    );
}
export default ContainerCards;
