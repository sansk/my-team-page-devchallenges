import React from 'react';

const TopSection = () => {
    return(
        <div className="md:grid md:grid-cols-2 md:mx-10 md:my-16">
            <h1 className="font-ptserif font-bold text-4xl my-10 md:my-1 cursor-pointer animate-pulse">The creative crew.</h1>
            <div className="md:my-1">
                <h3 className="font-poppins font-semibold text-lg uppercase">Who We Are</h3>
                <p className="font-poppins text-sm sm:text-lg my-5 leading-6">We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</p>
            </div>
        </div>
    );
};

export default TopSection;