import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex bg-base dark:bg-dark-base">
      <div className="grid mb-20">
        <div className="py-19 text-black dark:text-dark-text" id="experience">
          <div className="grid place-items-center">
            <div className="font-extrabold text-5xl mb-10">Experience</div>
          </div>
          <hr />

          <div>
            <div className="grid grid-cols-2">
              <h1 className="font-bold text-2xl ml-10 mt-5 ">
                Information Systems Intern
              </h1>
              <p className="flex justify-end mr-10 mt-5 text-lg">
                January 2025 - present
              </p>
            </div>
            <p className="font-bold italic ml-10 text-lg">
              Engineers and Geoscientists BC
            </p>

            <ul className="list-disc list-inside ml-10 text-norm">
              <li> Technology Stack: C#, KendoUI, JavaScript, React.Js, SQL</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-2xl ml-10 mt-5 ">
              UBC BEST Design Team
            </h1>
            <ul className="list-disc list-inside ml-10 ">
              <li>
                {" "}
                Biomedical engineering team developing a data-driven
                hand-assisting device, along with a companion app and games, to
                enhance hand rehabilitation for neurodivergent patients and
                provide progress tracking for both patients and physicians
              </li>
              <li> Secured second place at Simon Cox Competition 2024</li>
            </ul>

            <div className="grid grid-cols-2 mt-2">
              <p className="font-bold text-lg italic ml-10">M2M: Co-Lead</p>
              <p className="flex justify-end mr-10 text-lg ">
                September 2024 - present
              </p>
            </div>

            <ul className="list-disc list-inside ml-10">
              <li>
                {" "}
                Overseeing the team&apos;s software and hardware development,
                and external relations
              </li>
              <li>
                {" "}
                Lead the design and development of our games, ensuring high-quality gameplay and seamless user experience
              </li>
              <li>
                {" "}
                Leading the redesign and migration of our React Native app to Flutter while maintaining existing functionality, improving performance and ensuring cross-platform consistency
              </li>
              <li>
                {" "}
                Implemented agile methodologies using Jira as co-lead,
                optimizing task tracking and team efficiency
              </li>
              <li>
                {" "}
                Engage with entrepreneurship@UBC through workshops and mentorship to explore commercialization opportunities for our product
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <p className="text-lg font-bold italic ml-10 mt-2">
                M2M: Software Engineer
              </p>
              <p className="flex justify-end mr-10 text-lg">October 2023 - Sept 2024</p>
            </div>

            <ul className="list-disc list-inside ml-10">
              <li>
                {" "}
                Established a modular UI component library with React Native for
                the application, improving development speed
              </li>
              <li>
                {" "}
                Enhanced functionality and resolved technical problems within
                the games coded in C# through Unity{" "}
              </li>
              <li>
                {" "}
                Designed and created vectors and a background image for one of
                the games{" "}
              </li>
              <li>
                {" "}
                Technology Stack: React Native, C# and used Unity3D application
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <h1 className="font-bold text-2xl ml-10 mt-5 ">
                Front-End Web Developer
              </h1>
              <p className="flex justify-end mr-10 mt-5 text-lg">
                May 2024 - December 2024
              </p>
            </div>
            <p className="text-lg font-bold italic ml-10">
              UBC Faculty of Applied Science
            </p>

            <ul className="list-disc list-inside ml-10">
              <li>
                {" "}
                Developed and maintained 5 websites using PHP, CSS, Node.js,
                MariaDB, and Drupal{" "}
              </li>
              <li>
                {" "}
                Collaborated with developers, designers, and project managers
                using Agile methodologies to efficiently manage timelines{" "}
              </li>
              <li>
                {" "}
                Streamlined workflow with Atlassian Confluence, Jira, and Git,
                following Software Development Life Cycle(SDLC) practices{" "}
              </li>
              <li>
                {" "}
                Reviewed peer code submissions, implementing a feedback loop;
                resulted in improved code and expedited timelines
              </li>
              <li>
                {" "}
                Led client meetings to ensure alignment with their needs
                throughout the website development process{" "}
              </li>
              <li>
                {" "}
                Increased engagement across multiple faculty websites by 15%
                through targeted improvements
              </li>
              <li>
                {" "}
                Developed customizable Twig templates for website content in
                Drupal, reducing website creation time
              </li>
              <li>
                {" "}
                Technology Stack: PHP and Twig templates, CSS and TailwindCSS,
                Node.js, MariaDB, Drupal, Atlassian products
              </li>
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-2">
              <h1 className="font-bold ml-10 mt-5 text-2xl">
                Student Developer
              </h1>
              <p className="flex justify-end mr-10 mt-5 text-lg">
                November 2023 - April 2024
              </p>
            </div>
            <p className="font-bold italic ml-10 text-lg">
              UBC Computer Science Society
            </p>
            <ul className="list-disc list-inside ml-10">
              <li>
                Collaborating within a team to develop a website for UBC Tennis
                Circle Club
              </li>
              <li>
                Programmed using Next.js and Typescript, with MongoDB for the
                database, and ChakraUI for UI framework
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
