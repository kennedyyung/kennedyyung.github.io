import React from "react";
import Image from "next/image";
import Link from "next/link";

const HarvestHub = () => {
    return (
        <div className="container min-h-screen bg-base dark:bg-dark-base flex flex-col items-center mt-10">
            <h1 className="font-bold text-2xl text-black dark:text-dark-text mt-10">Harvest Hub</h1>

            <div className="card w-3/4 bg-txt text-white mt-5 overflow-auto-y">
                <div className="card-body items-center text-center">
                    <p>HarvestHub was created during UX-athon 2024 using Figma. The aims of this application was to tackle the issue of food waste </p>
            
                    <div className="flex flex-row">
                        <Link href="https://devpost.com/software/harvest-hub-uz1fhq" rel="noopener noreferrer" target="_blank" className="underline font-bold mr-10">
                            Devpost
                        </Link>
                        <Link href="https://www.figma.com/proto/hwkU4pbmkUJ4fNahmi1vWR/Untitled?type=design&node-id=21-314&t=hE7X80I3sAtObDar-1&scaling=scale-down&page-id=0%3A1&mode=design" rel="noopener noreferrer" target="_blank" className="font-bold underline">
                            Figma
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HarvestHub;