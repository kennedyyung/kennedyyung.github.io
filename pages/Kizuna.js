import React from "react";
import Image from "next/image";
import Link from "next/link";

const Kizuna = () => {
    return (
        <div className="container min-h-screen bg-base dark:bg-dark-base flex flex-col items-center mt-10">
            <h1 className="font-bold text-2xl text-black dark:text-dark-text mt-10">Kizuna</h1>




            <div className="card w-3/4 bg-txt text-white mt-5">
  <div className="card-body items-center text-center">
  <p>Awarded LivePeer Best Overall Video Application at nwHacks 2023🏆</p>
  <p>Kizuna is a livestreaming web application that 
                implements LivePeer Studio&apos;s API for video Livestream and on demand to help create stronger communities in real time. This was built with aims to increase exposure for small creators through alleviating the barriers of being a new streamer.</p>
                <p>This web application was constructed with React, incorporating React Router for seamless webpage navigation and leveraging Livepeer&apos;s API to enable users to upload content and host livestreams on our video platform. The UI design was crafted in Figma and drew inspiration from Twitch. Based on insights gathered from a user research survey, we made adjustments to the chat and sidebar to enhance the overall user experience. Notable design enhancements include the addition of a &quot;Friends&quot; page, introducing a social dimension that fosters interaction among platform users, both streamers and viewers, thereby cultivating more meaningful connections.</p>
      
      <div className="flex flex-row">
        <Link href="https://github.com/jn-han/NWHacks2023"rel="noopener noreferrer" target="_blank" className="font-bold underline mr-10">
          Github
        </Link>
        <Link href="https://devpost.com/software/kizuna-gevr8p" rel="noopener noreferrer" target="_blank" className="font-bold underline">
          Devpost
        </Link>
      </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

        </div>


    );
};

export default Kizuna;