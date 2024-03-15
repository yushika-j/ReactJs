import React from 'react'
import './ImageGenerator.css'
import default_image from './assets/default_image.jpeg'


const ImageGenerator = () => {
    return (
        <div className= "ai-img-generator">
            <div className='header'>
                AI image <span>generator</span>
            </div>
            <div className="img-loading">
                <div className="image"><img src={default_image} alt='default_image' /></div>
            </div>
            <div className= "searchBox">
                <input type="text" placeholder="Describe what you want to see" />
                <button>Generate</button>
            </div>
        </div>
    )

}

export default ImageGenerator