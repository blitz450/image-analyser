import React from 'react';
import './ImageShow.css';

const ImageShow = ({imageUrl, faceBoxes})=>{
 return(
 	<div className='center ma'>
 		<div className='absolute mt2'>
 			<img id='inputimage' alt='' width='500' height='auto' src={imageUrl}/>
 			<div classname=''>
 			{faceBoxes.map((faceBox,i)=>{
 				return(
 						<div key={i} className='bounding-box' style={{top: faceBox.topRow, right: faceBox.rightCol, bottom:faceBox.bottomRow, left: faceBox.leftCol}}></div>
 					);
 				})
 			}
 			</div>
 		</div>
 	</div>
 	);
} 

export default ImageShow;