import React from 'react'
import './ImageGenerator.css'
import default_image from './assets/default_image.jpeg'


const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);

    const ImageGenerator = async => {
        if(inputRef.current.value===""){
            return 0;
        }
        //const response = await fetch();

    return (
        <div className= "ai-img-generator">
            <div className='header'>
                AI image <span>generator</span>
            </div>
            <div className="img-loading">
                <div className="image"><img src={image_url==="/"?default_image:image_url} alt='default_image' /></div>
            </div>
            <div className= "searchBox">
                <input type="text" ref={inputRef} placeholder="Describe what you want to see" />
                <button>Generate</button>
            </div>
        </div>
    )

}

export default ImageGenerator