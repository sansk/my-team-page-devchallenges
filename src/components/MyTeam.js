import React from 'react';

const MyTeam = (props) => {
    return(
        <div className="grid grid-cols-2 gap-4 m-auto my-10 w-11/12 md:grid-cols-3 md:my-24">
            {
                props.userList.map(user=>{
                    return(
                        <div className="relative w-5/6 xl:w-3/4 even:mt-14 transform transition hover:scale-105 duration-500 ease-in-out" key={user.id}> 
                            <p className="uppercase absolute right-1 z-10 writingmode font-ptserif text-xs">{user.role}</p>
                            <div className="mr-5 hover:shadow-2xl rounded-md">
                                <img src={user.image} alt={user.name} className="w-auto rounded-md shadow-lg" />
                                <p className="font-semibold font-poppins mt-2">{user.name}</p>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default MyTeam;