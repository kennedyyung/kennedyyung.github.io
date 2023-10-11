import React from "react";
import Image from "next/image"

const HomePage = () => {
    return (
    <div className="container bg-base">
    <div className="grid min-h-screen">
      <div className="py-20"> 
        <div className="font-extrabold text-5xl text-black mb-10 ml-20">Hi, welcome to my website!</div>

        <div className="chat chat-start flex justify-start ml-20">
            <div className="justify-start chat-bubble bg-button text-white">
              <div className="text-xl font-bold">About me</div>
              <p>I&apos;m Kennedy, and I&apos;m currently in my third year at the University of British Columbia! I&apos;m pursuing a bachelors of science with a specialization in math. Aside from school I enjoy playing basketball, drawing, and playing video games. I am currently building on my CSS/Tailwind and Javascript skills, and am hoping to learn Python next!</p>
              <p>This website is still under construction but I hope you enjoy what I have so far :)</p>
            </div>
          </div>
        
          <p className="ml-20 font-extrabold mt-5 text-black">Languages I have experience in include:</p>  
          <div class="grid-flow-col ml-20 text-black">
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">Java</div>
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">CSS</div>
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">C++</div>
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">C</div>
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">HTML</div>
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">Tailwind</div>
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">JavaScript</div>
            <div className="badge badge-nav badge-outline hover:bg-txt">React.js</div>
          </div>

          <p className="ml-20 font-extrabold mt-5 text-black">Languages I&apos;m learning:</p>  
          <div class="grid-flow-col ml-20 text-black">
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">PHP</div>
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">SQL</div>
            <div className="badge badge-nav badge-outline mr-2 hover:bg-txt">C#</div>
          </div>
        <div className="flex flex-col items-center gap-4">

        <div className="card w-250 bg-nav text-white shadow-xl mt-10">
              <div className="card-body px-10 grid grid-cols-2 gap-2">
                <div>
                    <Image
                        src="/ubc.png" 
                        height={100}
                        width={100}
                        alt="ubc image"
                    />
                </div>
                    <div>
                        <h2 className="card-title text-xl font-bold">Education</h2>
                        <p>Bachelor of Science, Mathematics</p>
                        <p>University of British Columbia</p>
                        <p>2021-2025</p>
                    </div>
                <div className="card-actions justify-end"></div>
              </div>
        </div>
        
          {/* <div className="flex items-center justify-center">
            <div className="card w-150 bg-button text-white shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Hi, welcome to my website!</h2>
                <p>I&apos;m Kennedy :)</p>
                <p>I&apos;m currently a student at the University of British Columbia</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex items-center justify-center">
            <div className="card w-50  bg-base text-black shadow-xl">
              <div className="card-body flex items-center justify-center">
                <div className="flex justify-start">Some languages I have experience in include:</div>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  </div>
);

};

export default HomePage;



