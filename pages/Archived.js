import React from "react";
import Image from "next/image";
import Link from "next/link";

const Archived = () => {
    return (
        <div className="container min-h-screen bg-base dark:bg-dark-base">
            <div className="grid min-h-screen">
                <div className="py-15"> 
                    <div className="font-extrabold text-5xl text-black dark:text-dark-text mb-10 ml-10">Projects</div>

                        <div className="grid grid-cols-2 grid-flow-row gap-5 ml-10">
                            <Link href="/PC_Parts">
                            <div className="card w-96 shadow-xl bg-txt hover:scale-110 text-white">
                                <figure><img src="/PCParts.png" alt="Inteflow" /></figure>
                                
                                <div className="card-body">
                                    <h2 className="card-title">PC Parts Database
                                        <div className="badge bg-white border-white text-black">Dec, 2023</div>
                                    </h2>
                                    <p></p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline badge-lg text-sm">SQL</div>
                                        <div className="badge badge-outline badge-lg text-sm">PHP</div>
                                    </div>
                                </div>
                            </div>
                            </Link>

                            <div className="card w-96 shadow-xl bg-txt hover:scale-110 text-white">
                            <figure><img src="/placesfordogs.PNG" alt="Inteflow" /></figure>
                                
                                <div className="card-body">
                                    <h2 className="card-title">Places For Dogs App
                                        <div className="badge bg-white border-white text-black ">Jan, 2022</div>
                                    </h2>
                                    <p></p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline badge-lg text-sm">Java</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Archived;