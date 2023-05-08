import React from 'react'
import ImageShow from './ImageShow'

function ImageList({images}) {

    return (
        <div className='imagelist'>{
            images.length > 0 
                ?  images.map((image)=>{
                    return <ImageShow image={image}/>
                })
                :   <p>Search for an images above</p>
        }</div>
    )
}

export default ImageList