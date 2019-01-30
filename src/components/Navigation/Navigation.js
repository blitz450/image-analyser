import React from 'react';
import logo from './logo.svg';

const Navigation = ({onRouteChange, isSignedIn})=>{
 return(
 	<nav className="flex justify-between bb bg-black b--white-10 " >
 		<div className='flex justify-start items-center'>
	 		<img src={logo} className=" App-logo pa2 " alt="logo"/>
	 		<p className='f4 white ph1' > Image Analyser </p>
	 	</div>
 		{isSignedIn?
	 	<div className="flex-grow flex justify-end items-center">
 			<p onClick={()=>onRouteChange('signout')} 
 				className='f6 pointer dib white bg-animate hover-bg-white hover-black no-underline pv2 ph3 mh1 br-pill ba b--white-20'>Sign Out</p>
 		</div>
 		:
 		<div className="flex-grow flex items-center ">
	 		<p onClick={()=>onRouteChange('about')}className='f6 pointer underline link dib white dim ml4 mr3'>About</p>
		 	<p onClick={()=>onRouteChange('signin')} className='f6 pointer dib white bg-animate hover-bg-white hover-black no-underline pa2 mh1 br-pill ba b--white-20'>Sign In</p>
		 	<p onClick={()=>onRouteChange('register')} className='f6 pointer dib white bg-animate hover-bg-white hover-black no-underline pa2 mh1 br-pill ba b--white-20'>Register</p>
		</div>
		 
 	}
 	</nav>
 	);
} 

export default Navigation;