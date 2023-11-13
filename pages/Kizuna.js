import React from "react";
import Image from "next/image";
import Link from "next/link"

const Kizuna = () => {
    return (
        <div className="container bg-base flex flex-col items-center">
            <h1 className="font-bold text-2xl text-black">Kizuna</h1>




            <div className="card w-3/4 bg-txt text-black">
  <div className="card-body">
    <p>Kizuna was created during NWHacks 2023, and is a livestreaming web application that 
                implements LivePeer Studio's API for video Livestream and on demand to help create stronger communities in real time. This was built with aims to increase exposure for small creators through alleviating the barriers of being a new streamer. The application was created using a React app, with UI implemented through CSS and HTML.</p>
    <Link href="https://github.com/jn-han/NWHacks2023"rel="noopener noreferrer" target="_blank">
        Open in new tab
      </Link>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

        </div>


    );
};

export default Kizuna;