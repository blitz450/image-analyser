import React from 'react';
import './ImageShow.css';
import url from './url.png'

const ImageShow = ({imageUrl,faceBoxes})=>{
 let errorflag=true;
 return(
 	<div className=' center ma'>
 		<div className='absolute mv2'>
			<img id='inputimage' alt='' width='700px' height='auto' src={imageUrl} 
 					onError={(e)=>{ if (errorflag){ errorflag=false; e.target.src=url; } }} />
 			{faceBoxes.map((faceBox,i)=>{
 				return(
			 			<div key={i} className='bounding-box absolute' 
			 				style={{top: faceBox.topRow, right: faceBox.rightCol, bottom:faceBox.bottomRow, left: faceBox.leftCol}}></div>
			 			);
 					})
 			}
 		</div>
 	</div>
 	);
} 

export default ImageShow;