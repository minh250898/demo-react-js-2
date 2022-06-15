import React from "react"
import memesData from "../memesData";

export default function Main(props) {
    const [meme, setMeme] = React.useState({
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [memeImage] = React.useState(memesData);
    function getMemeImage() {
        const memesArray = memeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        const id = memesArray[randomNumber].id
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }
    return (
        <main>
            <div className="form">
                <label className="form-input">{meme.randomImage}</label>
                <label className="form-input">{props.randomNumber}</label>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} alt="" className="form-image" />
        </main>
    )
}
