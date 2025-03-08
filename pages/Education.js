import React from "react";
import Link from "next/link";
import Image from "next/image";

const Education = () => {
    return (
        <div className="flex bg-base dark:bg-dark-base">
            <div className="grid mb-20">
                <div className="py-15 text-black dark:text-dark-text" id="education">
                    <div className="grid place-items-center">
                        <div className="font-extrabold text-5xl mb-10">Education</div>
                    </div>
                    <hr />


                    <div className="card-body px-10 grid grid-cols-6 gap-2 text-black dark:text-dark-text">
                        <div className="col-start-2 col-span-2 ">
                            <Image
                                src="/ubc.png"
                                height={145}
                                width={145}
                                alt="ubc image"
                            />
                        </div>
                        <div className="col-start-4 col-span-2 ">
                            <h1 className="font-bold text-2xl mt-9">Bachelors of Science </h1>
                            <h2 className="text-xl italic">Major in Mathematics</h2>
                            <p>University of British Columbia</p>
                            <p>2021-2026</p>
                        </div>
                    </div>

                    <h3 className="font-bold text-2xl ml-10 text-black dark:text-dark-text mb-2">Relevant Courses</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-black dark:text-dark-text mb-5">
                        <div>
                            <p className="ml-10 font-bold italic">CPSC 330: Applied Machine Learning</p>
                            <ul className="list-disc list-inside ml-10">
                                <li>Description Application of machine learning tools, with an emphasis on solving practical problems</li>
                                <li>Topics include: Data cleaning, feature extraction, supervised and un-supervised machine learning, reproducible workflows, and communicating results</li>
                                <li>Language: Python (Pandas and MatplotLib)</li>
                            </ul>
                        </div>

                        <div>
                            <p className="ml-10 font-bold italic">CPSC 320: Intermediate Algorithm and Design</p>
                            <ul className="list-disc list-inside ml-10">
                                <li>Systematic study of basic concepts and techniques in the design and analysis of algorithms</li>
                                <li>Topics include: models of computation, choice of data structures, graph-theoretic, algebraic, and text processing algorithms.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-black dark:text-dark-text mb-5">
                        <div>
                            <p className="ml-10 font-bold italic">CPSC 304: Introduction to Relational Databases</p>
                            <ul className="list-disc list-inside ml-10">
                                <li>Overview of database systems, ER models, logical database design and normalization,formal relational query languages, SQL, and data warehouses</li>
                                <li>Languages: SQL, PHP</li>
                                <li>Database System: Oracle</li>
                            </ul>
                        </div>
                        <div>
                            <p className="ml-10 font-bold italic">CPSC 213: Introduction to Computer Systems</p>
                            <ul className="list-disc list-inside ml-10">
                                <li>Software architecture, operating systems, and I/O architectures</li>
                                <li>Relationships between application software, operating systems, and computing hardware</li>
                                <li>Language: C</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-black dark:text-dark-text mb-5">
                        <div>
                            <p className="ml-10 font-bold italic">CPSC 221: Basic Algorithms and Data Structures</p>
                            <ul className="list-disc list-inside ml-10">
                                <li>Algorithm analysis methods, serarching and sorting algorithms, basic data structures, graphs and concurrency</li>
                                <li>Language: C++</li>
                            </ul>
                        </div>
                        <div>
                            <p className="ml-10 font-bold italic">CPSC 210: Software Construction</p>
                            <ul className="list-disc list-inside ml-10">
                                <li>Design, development, and analysis of robust software components</li>
                                <li>Computational models, data structures, debugging, and testing</li>
                                <li>Language: Java</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        //     </div >

        // </div >
    );
};

export default Education;