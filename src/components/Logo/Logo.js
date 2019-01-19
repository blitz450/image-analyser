import React from 'react';
import Tilt from 'react-tilt'
import logo from './logo.png'


const Logo = ()=>{
 return (
    <div className='ma1 mr4'>
      <Tilt className="Tilt shadow-5" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner pa3">
          <img alt='my logo' src={logo} width='120' height='auto'/>
        </div>
      </Tilt>
    </div>
  );
} 

export default Logo;