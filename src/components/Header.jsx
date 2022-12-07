import img from '../../public/images/troll-face.png'

function Header() {  
  return (
    <header className="header">
        <img src={img} alt="" />
        <span>Meme Generator</span>
    </header>
  )
}

export default Header
