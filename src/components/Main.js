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
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }
    const [randomNumber, setRandomNumber] = React.useState({
        random: ""
    })
    function random() {
        setRandomNumber(prevRandomNumber => ({
            ...prevRandomNumber,
            random: Math.floor(Math.random() * 100) + 1,
        }))
    }
    return (
        <main>
            <div className="form">
                <label className="form-input">{meme.randomImage}</label>
                <label className="form-input">{randomNumber.random}</label>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
                <button className="form-button" onClick={random}>Random number</button>
            </div>
            <img src={meme.randomImage} alt="" className="form-image" />
        </main>
    )
}
