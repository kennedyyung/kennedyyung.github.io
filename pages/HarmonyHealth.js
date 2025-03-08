import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HarmonyHealth = () => {
    return (
        <div className="container min-h-screen overflow-auto-y bg-base dark:bg-dark-base flex flex-col items-center mt-10">
        <h1 className="font-bold text-2xl text-black dark:text-dark-text mt-10">Harmony Health</h1>
        <div>
        {/* <Image
                                src="/calendar-1.png"
                                height={170}
                                width={170}
                                alt="ubc image"
                            /> */}
        </div>




        <div className="card w-3/4 bg-txt text-white mt-5 overflow-auto-y">
<div className="card-body items-center text-center">
<p>Harmony Health was created during NWHacks 2024. It is a mobile application designed to help users keep track of their own, and loved one&apos;s daily health conditions. This application was inspired by our experiences at the doctors office where we cannot remember all of our symptoms from the past week. On top of this shared experience, we recognized that parents or people who are taking care of others in their family are tasked to remember symptoms for more than one person, which created the idea to implement the multiple user function. The app was created on a React app, utilizing React.js, TailwindCSS, and TypeScript.</p>

  <div className="flex flex-row">
    <Link href="https://github.com/kennedyyung/Nwhacks2024"rel="noopener noreferrer" target="_blank" className="font-bold underline mr-10">
      Github
    </Link>
    <Link href="https://devpost.com/software/harmony-health-qkhbgw?ref_content=user-portfolio&ref_feature=in_progress" rel="noopener noreferrer" target="_blank" className="font-bold underline">
      Devpost
    </Link>
  </div>
<div className="card-actions justify-end">
</div>
</div>
</div>
<div style={{ marginTop: '25px' }}></div>

    </div>
    
    );
}

export default HarmonyHealth;