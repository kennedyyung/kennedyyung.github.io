import Link from "next/link";

const BudgetBuddies = () => {
    return (
    <div className="container min-h-screen bg-base dark:bg-dark-base flex flex-col items-center mt-10">
    <h1 className="font-bold text-2xl text-black dark:text-dark-text mt-10">Arc&apos;Quest</h1>
    
    
    <div className="card w-3/4 bg-txt text-white mt-5">
     <div className="card-body items-center text-center">
     <p> Winner of YouCode x Arc&apos;teryx 2024🏆</p>
     <p> Arc&apos;Quest is an omnichannel mobile application designed for Arc&apos;teryx to increase user activity and promote wellness. Our application incentivizes and facilitates outdoor activities, wellness practices, and eco-friendly behaviors, while maintaining the shopping aspect of Arc&apos;teryx&apos;s current application. Users can explore personalized recommendations for different trails, yoga classes, community events, and clothing from Arc&apos;teryx. Our reward system allows users to gain points for participating in activities and can redeem them for rewards or donations to environmental causes. Additionally, the app fosters community engagement, allowing users to connect with like-minded adventurers and share their outdoor experiences. </p>
     <p>We utilized Google Maps API for users to search any location to view nearby trails and OpenWeather API to retrieve the current weather at the location searched to better prepare users, and with the idea for further implementation of a database to use AI to suggest clothing from Arc&apos;teryx&apos;s catalog to purchase.</p>
    <p>I was one of the 2 developers on the team, and I implemented the Google Maps API as well as integrating the user interface into the app using React Native.</p>

      <div className="flex flex-row">
        <Link href="https://github.com/ktran003/YouCode"rel="noopener noreferrer" target="_blank" className="font-bold underline mr-10">
          Github
        </Link>
        <Link href="https://devpost.com/software/arc-quest" rel="noopener noreferrer" target="_blank" className="font-bold underline">
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