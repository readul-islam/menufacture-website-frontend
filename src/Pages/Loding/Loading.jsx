import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <div className="flex justify-center mt-[30vh]">
           < ClipLoader size={40}></ClipLoader>
        </div>
    );
};

export default Loading;