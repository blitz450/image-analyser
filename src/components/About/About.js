import React from 'react';

const About = ({ onRouteChange})=>{
 return (
    <div>
      <article className="bg-light-blue helvetica pb5">
  			<header className="vh-100  dt w-100">
		    <div className="dtc cover ph3 ph4-m ph5-l">
		      <h1 className=" center f2 f-subheadline-s measure lh-title fw6">Face Detection App that keeps count of entires made by a user. Please register if you are a new user.</h1>
		      <p onClick={()=>onRouteChange('signin')} className='f6 pointer dib black bg-animate hover-bg-black hover-white no-underline pa2 mh1 br-pill ba b--black-20'>BACK</p>
		      <h2 className="f6 fw6 black">App Designed by Saurabh Chauhan</h2>
		    </div>
		  </header>
		</article>
    </div>
  );
}

export default About;