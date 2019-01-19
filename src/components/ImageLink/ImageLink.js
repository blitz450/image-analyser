import React from 'react';
import './ImageLink.css';

const ImageLink = ({ onInputChange, onPictureSubmit})=>{
 return (
    <div>
      <p className='f4'>
        {'This Image Analyser will detect faces in your pictures. Give it a try!'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 mb2 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' placeholder="Enter Image URL" onChange={onInputChange} />
          <button
            className='w-30 grow f4 link ph3 pv2 dib black bg-light-blue'
            onClick={onPictureSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLink;