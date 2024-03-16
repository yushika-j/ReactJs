import React,{ useState, useRef } from 'react'
import './ImageGenerator.css'
import default_image from './assets/default_image.jpeg'


const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);
    const[loading,setLoading] = useState(false);

    const ImageGenerator = async async => {
        if(inputRef.current.value===""){
            return 0;
        }
        setLoading(true);
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                    "Bearer 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",
                    "User-Agent": "Chrome",
                },
                body:JSON.stringify(
                    {
                        prompt: inputRef.current.value,
                        n:1,
                        size: "512x512",
                    })
                }
            );
            let data = await response.json();
            let data_array = data.data;
            if (data && data.data && data.data.length > 0) {
                const imageUrl = data.data[0].url;
                setImage_url(imageUrl);
            } else {
                console.error("Invalid data format:", data);
                alert("Failed to generate image. Please try again later.");
            }
            setLoading(false);
    }

    return (
        <div className= "ai-img-generator">
            <div className='header'>
                AI image <span>generator</span>
            </div>
            <div className="img-loading">
                <div className="image"><img src={image_url==="/"?default_image:image_url} alt='default_image' /></div>
                <div className="loading">
                    <div className={loading?"loading-bar-full":"loading-bar"}></div>
                    <div className={loading?"loading-text":"display-none"}>Loading....</div>
                </div>
            </div>
            <div className= "searchBox">
                <input type="text" ref={inputRef} placeholder="Describe what you want to see" />
                <div className="generate-btn" onClick={()=>(ImageGenerator())}>Generate</div>
            </div>
        </div>
    )

}

export default ImageGenerator