import React from 'react'
import './ImageGenerator.css'
import default_image from './assets/image-ai.jpeg'


const ImageGenerator = () => {
    return (
        <div className= "ai-img-generator">
            <div className='header'>
                AI image <span>generator</span>
            </div>
            <div className="img-loading">
                <div className="image"><img src={default_image} alt='default_image' /></div>
            </div>
        </div>
    )

}

export default ImageGenerator