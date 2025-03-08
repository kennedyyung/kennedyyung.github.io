import React from "react";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import ContactForm from "./ContactForm";



const index = () => {
  return (

    <main className="bg-base dark:bg-dark-base overflow-hidden snap-y scroll-smooth">
      <HomePage/>
      <Experience/>
      <Projects/>
      <Education/>
      <ContactForm/>
    </main>


  );
};

export default index;
