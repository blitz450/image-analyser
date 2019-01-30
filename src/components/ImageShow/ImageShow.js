import React from 'react';
import './ImageShow.css';
import welcome from './welcome.png'

const ImageShow = ({imageUrl, faceBoxes})=>{
 return(
 	<div className=' center ma'>
 		<div className='absolute mv2'>
 			{(!imageUrl.length)
 				? <img  alt='' width='700px' height='auto' src={welcome}/>
 				: <div>
 						<img id='inputimage' alt='' width='700px' height='auto' src={imageUrl}/>
 						{faceBoxes.map((faceBox,i)=>{
			 				return(
			 						<div key={i} className='bounding-box absolute' style={{top: faceBox.topRow, right: faceBox.rightCol, bottom:faceBox.bottomRow, left: faceBox.leftCol}}></div>
			 					);
 							})
 						}
					</div>
 			}
 		</div>
 	</div>
 	);
} 

export default ImageShow;