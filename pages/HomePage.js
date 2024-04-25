import React from "react";
import Image from "next/image"
import ThemeSwitcher from "components/layout/ThemeSwitcher";
import Head from "next/head";

const HomePage = () => {
  return (
    <div className="container  bg-base dark:bg-dark_base">
            <Head>
        <title>Home Page</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-064E3270RM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-064E3270RM');
            `
          }}
        />
      </Head>
      <div className="py-20">
        <div className="font-extrabold text-5xl text-black dark:text-dark_text mb-10 ml-20">Hi, welcome to my website!</div>

        <div className="chat chat-start flex justify-start ml-20">
          <div className="justify-start chat-bubble bg-button text-black dark:bg-dark_button">
            <div className="text-xl font-bold">About me</div>
            <p>I&apos;m Kennedy, currently in my third year at the University of British Columbia pursuing a bachelors of science with a major in mathematics. When im not studying, I love playing basketball, drawing, baking, and playing video games. Right now I&apos;m still working on my Javascript skills, and I plan to learn Python this summer!</p>
            <p>This website is still under construction but I hope you enjoy what you see so far :)</p>
          </div>
        </div>



        <p className="ml-20 font-extrabold mt-5 text-black dark:text-dark_text mb-1">Languages and Frameworks I have experience in:</p>
        <div class="grid-flow-col ml-20 text-black dark:text-dark_text gap-1">
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">Java</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">CSS</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">C++</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">C</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">HTML</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">TailwindCSS</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">JavaScript</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">React.js</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">React Native</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">Next.js</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">SwiftUI</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">Swift</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">SQL</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">Node.js</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">PHP</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">R</div>
        </div>

        <p className="ml-20 font-extrabold mt-2 text-black dark:text-dark_text mb-1">Languages and Frameworks I&apos;m learning:</p>
        <div class="grid-flow-col ml-20 text-black dark:text-dark_text">
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 hover:bg-txt">C#</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 hover:bg-txt">React Native</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 hover:bg-txt">Chakra UI</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 mr-1 hover:bg-txt">TypeScript</div>
          <div className="badge text-sm badge-lg badge-outline border-txt border-2 hover:bg-txt">Python</div>
        </div>


      </div>
    </div>
  );

};


export default HomePage;




