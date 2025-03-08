import React from "react";
import Image from "next/image";
import Link from "next/link";

const EcoChef = () => {
    return (
        <div className="container min-h-screen bg-base dark:bg-dark-base flex flex-col items-center mt-10">
            <h1 className="font-bold text-2xl text-black dark:text-dark-text mt-10">EcoChef</h1>

            <div className="card w-3/4 bg-txt text-white mt-5 overflow-auto-y">
                <div className="card-body items-center text-center">
                    <p>EcoChef is a mobile app developed during UBC CIC Hackathon 2024 with React Native for the frontend and Python Flask for the backend. The app leverages AWS Bedrock and DynamoDB to analyze the user&apos;s nutritional preferences and generate customized recipe options. Additionally, it provides insights into the carbon emissions and water consumption savings based on the chosen meals. EcoChef is designed to contribute to the United Nations Sustainable Development Goal (SDG) #12: Responsible Consumption and Production.</p>
            
                    <div className="flex flex-row">
                        <Link href="https://github.com/kennedyyung/CIC_Hackathon2024" rel="noopener noreferrer" target="_blank" className="font-bold underline">
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoChef;