import { useEffect, useState } from "react";
import memsData from "../assets/data/memsData";
import getRandomInt from "../services/helpers";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => res.data.memes)
      .then((mems) => setAllMemeImages(mems));
  }, []);

  function getRandomMeme() {
    const randomInt = getRandomInt(0, allMemeImages.length);
    setMeme((prevState) => ({ ...prevState, randomImage: allMemeImages[randomInt].url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("meme", meme);
  }

  return (
    <main className="main">
      <section className="main__form">
        <input type="text" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange} />
        <input type="text" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
        <button onClick={getRandomMeme}>Get a new meme image 🖼️</button>
      </section>
      <section className="main__meme">
        <img src={meme.randomImage} className="main__meme__img" alt="" />
        <div className="main__meme__topTxt">{meme.topText}</div>
        <div className="main__meme__bottomTxt">{meme.bottomText}</div>
      </section>
    </main>
  );
}

export default Meme;
