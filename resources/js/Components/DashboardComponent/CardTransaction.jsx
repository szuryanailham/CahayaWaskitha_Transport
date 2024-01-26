import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Button } from "../ui/button";
function CardTransaction(props) {
    const {
        delete: destroy,
        put,
        get,
        data,
        setData,
    } = useForm({
        q: new URLSearchParams(window.location.search).get("q") || "",
    });
    const onHandleDelete = (id) => {
        const confirmation = window.confirm(
            `Are you sure you want to delete this data ? ${id}`
        );

        if (confirmation) {
            destroy(`/admin/order/${id}`);
        }
    };
    return (
        <div className="w-full h-fit rounded-md shadow-md divide-x divide-slate-400 p-2 flex justify-evenly gap-1 mb-5">
            {/* card photo  and kode transaction */}
            <div className="w-[20%] pt-5">
                <h1 className="mb-5 text-xs md:text-sm break-words">
                    {props.kode_unit}
                </h1>
                <img
                    className=" w-15 h-15 md:w-25 md:h-20"
                    src="/pngwing.com_3_1.png"
                    alt="car image"
                />
            </div>
            {/* info unit and  penyewa */}
            <div className="p-5 w-[40%]">
                <h2 className="font-bold text-md md:text-xl">
                    {props.nama_unit}
                </h2>
                <p className="text-sm md:text-xl">
                    <span className=" break-words p-2">
                        {props.pemesan_unit}
                    </span>
                    ||
                    <span className="text-sm p-2">{props.no_pemesan}</span>
                </p>
                <p>Alamat :{props.alamat}</p>
                {/* durasi dan harga */}
                <div className="mt-[30%] flex flex-col md:flex-row gap-5 text-sm md:text-2xl">
                    <p className=" w-20 font-bold text-xs md:text-sm">
                        {props.total_hari} hari/({props.total_hari * 24} jam)
                    </p>
                    <p className="mr-20 text-md md:text-xl font-bold">
                        <FormatRupiah value={props.total_harga} />
                    </p>
                </div>
            </div>
            {/* lokasi dan waktu  detail  */}
            <div className="w-[20%] p-3">
                {/* from date and time */}
                <div className="mt-10">
                    <p className=" w-15 md:w-24 break-words text-sm md:text-md">
                        {props.tgl_mulai}
                    </p>
                    {/* until date and time */}
                    <p className=" w-15 md:w-24 break-words mt-10 text-sm md:text-md">
                        {props.tgl_akhir}
                    </p>
                </div>
            </div>
            {/* location detail */}
            <div className=" w-[20%] flex  items-center gap-0 md:gap-3 border-black">
                <img
                    className="w-10 hidden md:block"
                    src="/images/dashboard/pin_location.svg"
                    alt=""
                />
                <p className="break-words md:w-20 text-xs md:text-sm font-bold">
                    {props.lokasi_penjemputan}
                </p>
            </div>
            {/* action */}

            <div className=" w-[30%]  flex justify-center m-auto">
                <div className="flex justify-evenly flex-col gap-2 md:flex-row">
                    {/* edit */}
                    <Link href={`/admin/order/${props.id}/edit`}>
                        <Button className="text-xs w-10 md:w-20 bg-yellow-400">
                            Edit
                        </Button>
                    </Link>

                    {/* delete */}
                    <Button
                        className={` bg-red-500 text-xs w-10 md:w-20 text-white hover:text-black ${
                            props.is_deleted ? "" : ""
                        }`}
                        onClick={() => {
                            props.is_deleted
                                ? put(`/admin/order/${order.id}/restore`)
                                : onHandleDelete(props.id);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CardTransaction;
