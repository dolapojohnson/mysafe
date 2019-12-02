import React from 'react';
import './signout.styles.scss';

const SignOut = ({ onRouteChange }) => {
  return(
    <div className='mt0 pointer signout_style shadow-5 dim calisto'>
      <p onClick={() => onRouteChange('signin')}>Sign Out</p>
    </div>
  );
}

export default SignOut;
