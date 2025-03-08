import React from "react";
import Image from "next/image";
import Link from "next/link";

const PC_Parts = () => {
    return (
        <div className="container bg-base min-h-screen dark:bg-dark-base flex flex-col items-center mt-10">
            <h1 className="font-bold text-2xl text-white dark:text-dark-text mt-10">PC Parts Database</h1>

            <div className="card w-3/4 bg-txt text-white">
                <div className="card-body ote,s-center text-center">
                    <p>PC Parts Database was created in my Introduction to Relational Database course at UBC. My two teammates and I developed this in PHP and SQL, using Oracle database. This was our first times using SQL, PHP, and Oracle!</p>
                    <div className="flex flex-row">
                        <Link href="https://github.com/kennedyyung/PC-Parts-Organizer"rel="noopener noreferrer" target="_blank" className="font-bold texxt-black underline mr-10">
                            Github
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PC_Parts;