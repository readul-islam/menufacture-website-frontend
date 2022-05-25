import React from 'react';
// import { DiJavascript1 } from "react-icons/di";
// import { DiNodejsSmall } from "react-icons/di";
// import { DiMongodb } from "react-icons/di";

const Blogs = () => {
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-[22px] pt-2 md:pt-8 md:text-3xl lg:text-4xl font-semibold'>Frequently Asked Questions</h3>
            </div>
            
            <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-2 p-2 md:gap-3 sm:px-6 sm:gap-6 md:px-14 lg:gap-6 lg:px-20'>

                
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 p-2 font-semibold text-center text-[18px]">
                        When should you use nodejs and when should you use mongodb?
                        </div>
                        
                        <div className="shadow-2xl rounded-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                                {/* <span className='text-red-500 inline-block'><DiNodejsSmall/></span> */}
                                {/* <span className=''>vs</span> */}
                                {/* <span className='text-red-500 inline-block'><DiMongodb/></span> */}
                            </h5>
                            <p className="text-gray-700 text-base">
                            The Node.JS is a Server side language. Node.js is primarily used for non-blocking, event driven server, due to its single-threaded nature. it's used for traditional web site and back-end api sevices. But was designed with real time push-based architectures in mind. On the other hand the MongoDB is a NoSQL database. NoSQL database like MongoDB are a good choice when your data is document centric and does not fit well into the schema of a relational database.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 p-2 font-semibold text-center text-[18px]">
                        Differences between sql and nosql databases?

                        </div>
                        
                        <div className="rounded-2xl shadow-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                                {/* <span className='text-red-500 inline-block'><DiJavascript1/></span> */}
                                {/* <span className=''>vs</span> */}
                                {/* <span className='text-red-500 inline-block'><DiNodejsSmall/></span> */}
                            </h5>
                            <p className="text-gray-700 text-base">
                            Comparing SQL vs NoSQL database. SQL is a relational database. are vertically scalable and table based. SQL database have fixed or static or predefined schema. SQL database better for multi-row transactions. On the Other hand NoSQL non-relational database. NoSQL database have dynamic schemas for unstructured data. and horizontally scalable are document key-value and wide-column stores. it's better for unstructured data like document or JSON.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 font-semibold text-center text-[18px]">
                        What is the Difference between javascript and nodejs?
                        </div>
                        
                        <div className="rounded-2xl shadow-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                                {/* <span className='text-red-500 inline-block'><DiJavascript1/></span> */}
                                {/* <span className=''>vs</span> */}
                                {/* <span className='text-red-500 inline-block'><DiNodejsSmall/></span> */}
                            </h5>
                            <p className="text-gray-700 text-base">
                            Node.JS and JavaScript both of these are used for Programming. But there is a significant difference between Node.JS and JavaScript. 
                            JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with 
                            interactive effects on a Webpage. Node.js usually represents a list of objects and methods accessible to 
                            JavaScript code when run in the V8 engine or via the node interpreter. 
                            Javascript is used in frontend And Node.js is used in server-side.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 p-2 font-semibold text-center text-[18px]">
                        What is the purpose of jwt and how does it work?
                        </div>
                        
                        <div className="rounded-2xl shadow-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                                {/* <span className='text-red-500 inline-block'><DiJavascript1/></span> */}
                                {/* <span className=''>vs</span> */}
                                {/* <span className='text-red-500 inline-block'><DiNodejsSmall/></span> */}
                            </h5>
                            <p className="text-gray-700 text-base">
                            JWT Means JSON Web Token. is an open standard used to share security information between two  parties a client and server. Each JWT contains encoded Json objects including a set of claims. JWTs are signed using a cryptographic algorighm to ensure that claims can not be altered after the token is issued. And Specialy a JWT is string made up of three parts separated by dots. and serialized using base 64. (Header and the payload) and The signature. Every developer shoul know how does it jwt works.

                            </p>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Blogs;