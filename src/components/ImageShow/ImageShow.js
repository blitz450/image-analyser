import React from 'react';
import './ImageShow.css';

const ImageShow = ({imageUrl, faceBoxes})=>{
 return(
 	<div className=' center ma'>
 		<div className='absolute mt2'>
 			{(!imageUrl.length)
 				? <img  alt='' width='700px' height='auto' src='https://santoshanand.me/gallery/welcome.jpg'/>
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