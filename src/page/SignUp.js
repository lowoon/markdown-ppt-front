import React from 'react';

function SignUp(props) {
  return (
    <div className="sign-up-main">
      <div className="explanation">
        <span>Welcome!</span>
        <br/>
        <span>Make Your Perfect Presentation</span>
      </div>
      <div className="content">
        <button className="sign-up">Log in with GitHub</button>
        <button className="sign-up">Log in with Google</button>
      </div>
    </div>
  );
}

export default SignUp;
