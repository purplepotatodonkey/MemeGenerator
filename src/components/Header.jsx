import troll from '../assets/Trollface_non-free.png';

export default function Header() {
  return (
    <>
      <header className="header">
        <img
          src={troll}
          className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">Joseph Wang</h4>
      </header>
    </>
  )
}