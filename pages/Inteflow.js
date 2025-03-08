import React from "react";
import Image from "next/image";
import Link from "next/link";

const Inteflow = () => {
    return (
        <div className="container min-h-screen bg-base dark:bg-dark-base flex flex-col items-center mt-10">
            <h1 className="font-bold text-2xl text-black dark:text-dark-text text-center mt-10">Inteflow</h1>

            {/* <div className="flex justify-center"> */}
            <div className="card w-3/4 bg-txt text-white mt-5">
                <div className="card-body items-center">
                <p>Awarded Third Best Overall Project at IgnitionHacks 2023🏆</p>
                    <p1 className="text-center">Inteflow is an iOS mobile app designed to streamline your math problem-solving experience. It&apos;s your personal problem-solving companion that scans both formula and text-based math problems. Once scanned, inteflow breaks down these problems, offering detailed explanations that guide you to the solution through a chatbot. It also offers a wide range of supplementary resources, curated practice problems and textbooks to aid in reinforcing your understanding. </p1>
                    
                    <p2>Our team consisted of 3 developers and I was tasked with the implementation of the UI design and page functionality using SwiftUI</p2>

                    <div className=" flex flex-row text-center">
                        <Link href="https://github.com/jn-han/IgnitionHacks2023"rel="noopener noreferrer" target="_blank" className="font-bold underline mr-10">
                            Github
                        </Link>
                        <Link href="https://devpost.com/software/inteflow" rel="noopener noreferrer" target="_blank" className="font-bold underline">
                            Devpost
                        </Link>
                    </div>
                </div>
            {/* </div> */}
            </div>

        </div>
    );
};

export default Inteflow;