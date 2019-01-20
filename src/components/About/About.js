import React from 'react';

const About = ({ onRouteChange})=>{
 return (
    <div>
      <article className="bg-light-blue pb5 vh-100  dt w-100">
		    <div className="dtc cover ph3 ph4-m ph5-l">
		      <h1 className=" center f2 f-subheadline-s measure lh-title fw6 helvetica">
		      	Face Detection App that keeps count of entries made by a user. Please register if you are a new user.
		      </h1>
		      <p className="f5 fw2">
		      	This is a Single Page App(SPA) built with react.js in the frontend and node.js/postgresql in the backend. Documentation and source code can be found <a href="https://github.com/blitz450/image-analyser" target="_blank" rel="noopener noreferrer" 
		      		className='pointer dib'> here</a> .
		      </p>
		      <p onClick={()=>onRouteChange('signin')} className='f6 pointer dib black bg-animate hover-bg-black hover-white no-underline pa2 mh1 br-pill ba b--black-20'>
		      	BACK
		      </p>
		      <p className="f6 fw6 black helvetica">App Designed by <a href="https://blitz450.github.io" target="_blank" rel="noopener noreferrer" 
		      		className='pointer dib hover-gray black no-underline ' > Saurabh Chauhan</a>
		      </p>
		    </div>
		</article>
    </div>
  );
}

export default About;