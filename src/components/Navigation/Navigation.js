import React from 'react';
import logo from './logo.svg';
import ProfileIcon from '../Profile/ProfileIcon';
const Navigation = ({onRouteChange, isSignedIn, toggleModal})=>{
 return(
 	<nav className="flex justify-between bb bg-black b--white-10 " >
 		<div className='flex justify-start items-center '>
	 		<img src={logo} className=" App-logo ma2 mb " alt="logo"/>
	 		<p className='f4 white mh1 ' > Image Analyser </p>
	 	</div>
 		{isSignedIn?
	 	<div className="flex-grow flex justify-end items-center">
 				<ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal}/>
 		</div>
 		:
 		<div className="flex-grow flex items-center ">
	 		<p onClick={()=>onRouteChange('about')}className='f6 pointer underline link dib white dim mh3'>About</p>
		 	<p onClick={()=>onRouteChange('signin')} className='f6 pointer dib white bg-animate hover-bg-white hover-black no-underline pa2 mh1 br-pill ba b--white-20'>Sign In</p>
		 	<p onClick={()=>onRouteChange('register')} className='f6 pointer dib white bg-animate hover-bg-white hover-black no-underline pa2 mh1 br-pill ba b--white-20'>Register</p>
		</div>
		 
 	}
 	</nav>
 	);
} 

export default Navigation;