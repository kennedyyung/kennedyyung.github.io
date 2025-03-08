import React from "react";
import Head from "next/head";
import Typing from 'components/layout/Typing';


const currTech = [
  "Java", "CSS", "C++", "C", "HTML", "TailwindCSS", "JavaScript",
  "React.js", "React Native", "Next.js", "SwiftUI", "Swift",
  "SQL", "Node.js", "PHP", "C#", "R"
];

const learningTech = [
  "TypeScript", "Python", "AWS Services"
];

const HomePage = () => {
  return (
    <div className=" h-screen flex justify-center items-center bg-base dark:bg-dark-base ">
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
        <div className="font-extrabold text-6xl text-black dark:text-dark-text mb-10 ml-20">
          <Typing text="Hi, welcome to my website!" delay={100} />
        </div>

        <div className="chat chat-start flex justify-start ml-20">
          <div className="justify-start chat-bubble bg-button text-black dark:bg-dark-button w-3/4">
            <div className=" text-2xl font-bold mb-1">About me</div>
            <p className="text-lg mb-2">I&apos;m Kennedy! A fourth year at the University of British Columbia pursuing a bachelors of science with a major in mathematics. I have experience in both frontend and backend technologies and am always looking to learn more. When im not studying, I love playing basketball, going to the gym, baking, and playing video games. Right now I&apos;m working on my Python and JavaScript skills through projects and online courses!</p>
            <p className="text-lg">This website is still under construction and always changing but I hope you enjoy what you see so far :)</p>
          </div>
        </div>



        <p className="ml-20 text-lg font-extrabold mt-5 text-black dark:text-dark-text mb-1">Languages and Frameworks I have experience in:</p>
        <div className="grid-flow-col ml-20  text-black dark:text-dark-text gap-1">
          {currTech.map((tech, index) => (
            <div key={index} className="badge text-norm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">{tech}</div>
          ))}
        </div>
  
        <p className="ml-20 text-lg font-extrabold mt-2 text-black dark:text-dark-text mb-1">Languages and Frameworks I&apos;m currently working on:</p>
        <div className="grid-flow-col ml-20 text-black dark:text-dark-text">
        {learningTech.map((tech, index) => (
            <div key={index} className="badge text-norm badge-lg badge-outline border-txt border-2 mr-1 mb-1 hover:bg-txt">{tech}</div>
          ))}
        </div>


      </div>
    </div>
  );

};


export default HomePage;




