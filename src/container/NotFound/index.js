import React from 'react';
import './css/index.css';

const ErrorPage = (props) => {

  return (
    <div className='error-main-container'>
      <div className='errorContainer'>
        <div className='errorWrapper'>
          <div className='errorResponse'>
            Result not found
          </div>
          <div className='errorMessage'>
            Sorry. the shoes you’re looking for doesn’t exist.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
