import React  from 'react';

const Preloader = () => {


  
    return (
        <div>
            <div className="fixed inset-0 flex justify-center items-center bg-amber-50">
                <div className="animate-pulse h-10 w-10 bg-amber-500 rounded-full"> </div>
            </div>

        </div>
    );
};

export default Preloader;