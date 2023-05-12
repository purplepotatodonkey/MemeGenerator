import memesData from "../memesData"
import { useState } from "react"

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleClick() {
    let data=allMemeImages.data.memes;
    let randomIndex=Math.floor(Math.random() * data.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        imgUrl: data[randomIndex].url,
      }
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button
          className="form--button"
          onClick={handleClick}
        >
          Get a new meme image
        </button>
      </div>
      <img src={meme.imgUrl} id="meme--template" />
    </main>
  )
}