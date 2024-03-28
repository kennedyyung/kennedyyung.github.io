import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container bg-base dark:bg-dark_base">
      <div className="grid min-h-screen mt-10">
        <div className="py-15" id="projects">
          <div className="grid place-items-center">
            <div className="font-extrabold text-5xl text-black dark:text-dark_text mb-10">Projects</div>
          </div>
          <hr />

          <div className="grid grid-rows-3 grid-flow-row gap-5 mt-10 justify-center">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <Link href="/Inteflow">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white mr-10">
                  <figure><img src="/Inteflow.png" alt="Inteflow" /></figure>
                  <div className="card-body">
                    <h2 className="card-title ">Inteflow
                      <div className="badge border-white bg-white text-black">Aug, 2023</div>🏆
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline badge-lg text-sm">Swift</div>
                      <div className="badge badge-outline badge-lg text-sm">SwiftUI</div>
                    </div>

                  </div>
                </div>

              </Link>

              <Link href="/Kizuna">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white ml-10">
                  <figure><img src="/kizuna.jpg" alt="Kizuna" /></figure>

                  <div className="card-body">
                    <h2 className="card-title ">Kizuna
                      <div className="badge bg-white border-white text-black">Jan, 2023</div>🏆
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">

                      <div className="badge badge-outline badge-lg text-sm">React.js</div>
                      <div className="badge badge-outline badge-lg text-sm">CSS</div>
                      <div className="badge badge-outline badge-lg text-sm">HTML</div>

                    </div>
                  </div>

                </div>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href="/BudgetBuddies">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white mr-10">

                  <figure><img src="/BudgetBuddies.PNG" alt="BudgetBuddies" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Budget Buddies
                      <div className="badge bg-white border-white text-black">Mar, 2024</div>🏆
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline badge-lg text-sm">React.js</div>
                      <div className="badge badge-outline badge-lg text-sm">TailwindCSS</div>
                    </div>
                  </div>

                </div>
              </Link>
              <Link href="/HarmonyHealth">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white ml-10">

                  <figure><img src="/HarmonyHealth.png" alt="HarmonyHealth" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Harmony Health
                      <div className="badge bg-white border-white text-black">Jan, 2024</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline badge-lg text-sm">React.js</div>
                      <div className="badge badge-outline badge-lg text-sm">TailwindCSS</div>
                      <div className="badge badge-outline badge-lg text-sm">Typescript</div>
                    </div>
                  </div>

                </div>
              </Link>


            
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href="/HarvestHub">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white mr-10">

                  <figure><img src="/Harvesthub.png" alt="Harvesthub" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Harvest Hub
                      <div className="badge bg-white border-white text-black">Jan, 2024</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline badge-lg text-sm">Figma</div>
                    </div>
                  </div>

                </div>
              </Link>

              <Link href="/Pomo">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white ml-10">
                  <figure><img src="/pomo.PNG" alt="Inteflow" /></figure>

                  <div className="card-body">
                    <h2 className="card-title">Pomo&apos;s Paradise
                      <div className="badge bg-white border-white text-black">Feb, 2023</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">React.js</div>
                      <div className="badge badge-outline">CSS</div>
                      <div className="badge badge-outline">HTML</div>

                    </div>
                  </div>
                </div>

              </Link>
            </div>


          </div>

          <div className="flex flex-col items-center gap-4">

            <div>
              <Link href="/Archived">
                <h1 className=" mt-5 text-black dark:text-dark_text underline">School Projects</h1>
              </Link>

            </div>
            <p></p>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;