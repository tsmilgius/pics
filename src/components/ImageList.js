import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
    const img = props.images.map(img => { 
        return <img key={img.id} alt= {img.urls.description} src={img.urls.regular}/> 
    })
    return(
        <div className="image-list">{img}</div>
    );
}

export default ImageList;