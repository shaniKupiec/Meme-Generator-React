import { useState } from "react";
import memsData from "../assets/data/memsData";
import getRandomInt from "../services/helpers";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memsData);

  function getRandomMeme() {
    const randomInt = getRandomInt(0, allMemeImages.data.memes.length);
    setMeme((prevState) => ({ ...prevState, randomImage: allMemeImages.data.memes[randomInt].url }));
  }

  // getRandomMeme();

  return (
    <main className="main">
      <section className="main__form">
        <input type="text" placeholder="Top Text" />
        {/* value={meme.topText} */}
        <input type="text" placeholder="Bottom Text" />
        <button onClick={getRandomMeme}>Get a new meme image 🖼️</button>
      </section>
      <img src={meme.randomImage} className="main__img" alt="" />
    </main>
  );
}

export default Meme;
