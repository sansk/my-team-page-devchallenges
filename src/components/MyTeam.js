import React from 'react';
import photo1 from '../images/photo1.png'
import photo2 from '../images/photo2.png'
import photo3 from '../images/photo3.png'
import photo4 from '../images/photo4.png'
import photo5 from '../images/photo5.png'
import photo6 from '../images/photo6.png'

const MyTeam = () => {
    return(
        <div className="grid grid-cols-2 gap-4 m-auto my-10 w-11/12 md:grid-cols-3 md:my-24">
            <div className="relative w-5/6 xl:w-3/4 even:mt-14 transform transition hover:scale-105 duration-500 ease-in-out">
                <p className="uppercase absolute right-1 z-10 writingmode font-ptserif text-xs">Product Owner</p>
                <div className="mr-5 hover:shadow-2xl rounded-md">
                    <img src= {photo1} alt="Bill Mahoney" className="w-auto rounded-md shadow-lg" />
                    <p className="font-semibold font-poppins mt-2">Bill Mahoney</p>
                </div>
            </div>
            <div className="relative w-5/6 xl:w-3/4 even:mt-14 transform transition hover:scale-105 duration-500 ease-in-out">
                <p className="uppercase absolute right-1 z-10 writingmode font-ptserif text-xs">Art Director</p>
                <div className="mr-5  hover:shadow-2xl rounded-md">
                    <img src= {photo2} alt="Saba Cabrera" className="w-auto rounded-md shadow-lg" />
                    <p className="font-semibold font-poppins mt-2">Saba Cabrera</p>
                </div>
            </div>
            <div className="relative w-5/6 xl:w-3/4 even:mt-14 transform transition hover:scale-105 duration-500 ease-in-out">
                <p className="uppercase absolute right-1 z-10 writingmode font-ptserif text-xs">Tech Lead</p>
                <div className="mr-5 hover:shadow-2xl rounded-md">
                    <img src= {photo3} alt="Shae Le" className="w-auto rounded-md shadow-lg" />
                    <p className="font-semibold font-poppins mt-2">Shae Le</p>
                </div>
            </div>
            <div className="relative w-5/6 xl:w-3/4 even:mt-14 transform transition hover:scale-105 duration-500 ease-in-out">
                <p className="uppercase absolute right-1 z-10 writingmode font-ptserif text-xs">Art Designer</p>
                <div className="mr-5 hover:shadow-2xl rounded-md">
                    <img src= {photo4} alt="Skylah Lu" className="w-auto rounded-md shadow-lg" />
                    <p className="font-semibold font-poppins mt-2">Skylah Lu</p>
                </div>
            </div>
            <div className="relative w-5/6 xl:w-3/4 even:mt-14 md:mt-28 transform transition hover:scale-105 duration-500 ease-in-out">
                <p className="uppercase absolute right-1 z-10 writingmode font-ptserif text-xs">Developer</p>
                <div className="mr-5 hover:shadow-2xl rounded-md">
                    <img src= {photo5} alt="Griff Richards" className="w-auto rounded-md shadow-lg" />
                    <p className="font-semibold font-poppins mt-2">Griff Richards</p>
                </div>
            </div>
            <div className="relative w-5/6 xl:w-3/4 even:mt-14 transform transition hover:scale-105 duration-500 ease-in-out">
                <p className="uppercase absolute right-1 z-10 writingmode font-ptserif text-xs">Developer</p>
                <div className="mr-5 hover:shadow-2xl rounded-md">
                    <img src= {photo6} alt="Stan John" className="w-auto rounded-md shadow-lg" />
                    <p className="font-semibold font-poppins mt-2">Stan John</p>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;