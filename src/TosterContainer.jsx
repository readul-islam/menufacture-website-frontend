import React from 'react';
import { Toaster } from 'react-hot-toast';

const TosterContainer = () => {
    return (
        <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={8}
//   containerClassName=""
  containerStyle={{
    top: 80,
    
  }}
  toastOptions={{
    // Define default options
    className: '',
    duration: 3000,
    style: {
      background: '#363636',
      color: '#fff',
      padding: '16px',
    },
    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    );
};

export default TosterContainer;