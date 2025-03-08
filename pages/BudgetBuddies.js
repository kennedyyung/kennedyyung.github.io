import Link from "next/link";

const BudgetBuddies = () => {
    return (
    <div className="container min-h-screen bg-base dark:bg-dark-base flex flex-col items-center mt-10">
    <h1 className="font-bold text-2xl text-black dark:text-dark-text mt-10">Budget Buddies</h1>
    
    
    <div className="card w-3/4 bg-txt text-white mt-5">
     <div className="card-body items-center text-center">
     <p>Awarded sponsor prize of <i>Best DEI Hack</i> from MLH and Fidelity at cmd-F 2024🏆</p>
    <p> The ongoing issue of financial illiteracy among adults, primarily due to inadequate education on the topic in schools is the inspiration behind our app. Our goal was to make learning about financial management both fun and accessible, so we designed Budget Buddies as a gamified mobile application. We created Budget Buddies on a React app but desigend the UI for a mobile app using taiwindCSS. We implemented a chatbot using Cohere&apos;s API, and a passwordless login with 1Password&apos;s Passage API. </p>
    <p> I was one of the 2 developers on the team, and I was incharge of the implementation of Cohere&apos;s API as well as the text to speech tool. the other develoepr and I both worked on the front-end implementation together!</p>
      
      <div className="flex flex-row">
        <Link href="https://github.com/ktran003/cmdf"rel="noopener noreferrer" target="_blank" className="font-bold underline mr-10">
          Github
        </Link>
        <Link href="https://devpost.com/software/budget-buddies-18osn5?ref_content=user-portfolio&ref_feature=in_progress" rel="noopener noreferrer" target="_blank" className="font-bold underline">
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

export default BudgetBuddies;