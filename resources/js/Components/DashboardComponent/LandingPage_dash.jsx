import React from "react";

function LandingPage_dash() {
    const CardInfo = (props) => {
        return (
            <div className="w-full md:w-[35%] max-h-[40%] bg-[#3D74B4] rounded-md p-5 text-white font-bold">
                <p className="text-3xl">{props.number}</p>
                <p className="text-xl mt-2">{props.desc}</p>
                {/* logo */}
                <img src={props.icon} alt="logo" className="mt-5 w-10 h-10" />
            </div>
        );
    };

    return (
        <>
            <section className="flex flex-col md:flex-row gap-3">
                {/* box conclusion */}
                <CardInfo
                    number={11}
                    desc="Detail Order"
                    icon="/images/dashboard/box.svg"
                />
                <CardInfo
                    number="Rp.300.000"
                    desc="Total Order"
                    icon="/images/dashboard/card_dash.svg"
                />
                <CardInfo
                    number={11}
                    desc="People Order"
                    icon="/images/dashboard/people.svg"
                />
            </section>
            <section>
                <h1 className="text-center mt-10 text-2xl font-bold">
                    Cahaya Waskitha Transport
                </h1>
                <p className="p-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui beatae iste tempora atque. Temporibus voluptatum
                    dignissimos vitae totam quas, quia fuga provident aperiam!
                    Accusantium, culpa!
                </p>
            </section>
        </>
    );
}

export default LandingPage_dash;
