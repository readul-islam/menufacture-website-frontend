import React from 'react';
import { Link } from 'react-router-dom';
// import clients from '../../assets/icons/cliennts.png';
// import flag from '../../assets/icons/flag.png';
// import project from '../../assets/icons/projects.png';
// import rating from '../../assets/icons/rating.png';

const BusinessSummary = () => {
    return (
        <div className="p-3 md:py-7 md:px-10">
            <div className="text-center">
                <h2 className="uppercase md:mb-3 font-bold text-[20px] md:text-5xl text-[#2BAAA9]">Millions Business Trust Us</h2>
                <span className="uppercase text-[#00033E] text-sm md:text-[20px] font-semibold">Try to understand users expectation</span>

                <div className="space-x-2 flex justify-center items-center mt-2">
                    <div className='bg-[#2BAAA9] w-16 h-[4px] rounded'></div>
                    <div className='bg-gradient-to-r  from-[#2BAAA9] to-[#1f4255] w-12 h-[4px] rounded'></div>
                    <div className='bg-gradient-to-r  from-[#1f6f6f] to-[#00033E] w-12 h-[4px] rounded'></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 py-4 md:py-16">
                <div className='flex flex-col items-center justify-center'>
                    {/* <img className="w-28 text-green-500 mb-10" src={flag} alt="" /> */}
                    <div className="text-4xl text-[#00033E] font-bold">
                        75
                        {/* <span className="countdown font-mono text-6xl">
                            <span style="--value:49;"></span>
                        </span> */}
                    </div>
                    <div className="text-2xl font-semibold text-[#2BAAA9]">Countries</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    {/* <img className="w-28 text-green-500 mb-10" src={project} alt="" /> */}
                    <div className="text-4xl text-[#00033E] font-bold">450+</div>
                    <div className="text-2xl font-semibold text-[#2BAAA9]">Complete Projects</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    {/* <img className="w-28 text-green-500 mb-10" src={clients} alt="" /> */}
                    <div className="text-4xl text-[#00033E] font-bold">295+</div>
                    <div className="text-2xl font-semibold text-[#2BAAA9]">Happy Clients</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    {/* <img className="w-28 text-green-500 mb-10" src={rating} alt="" /> */}
                    <div className="text-4xl text-[#00033E] font-bold">482+</div>
                    <div className="text-2xl font-semibold text-[#2BAAA9]">Feedbacks</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center md:px-10 md:py-12">
                <div className="flex-1">
                    <h2 className="text-xl md:text-3xl text-[#2BAAA9] font-semibold">Have any question about us or get a products request ?</h2>
                    <h3 className="text-md md:text-[20px]">Don't hesitate to contact us.</h3>
                </div>
                <div className="flex-1 flex justify-center space-x-2 mt-2 md:space-x-3 text-center">
                    <Link to="/"  className='btn bg-[#2BAAA9] hover:bg-[#0f8686] border-none'>Request For Quote</Link>
                    <Link to="/" className='btn bg-[#00033E] hover:bg-[#0c0e34] border-none'>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;