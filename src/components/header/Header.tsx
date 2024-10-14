import headerImage from '../../assets/header.webp';
import './header.scss'
import dress1 from '../../assets/dress1.png'
import dress2 from '../../assets/dress2.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="circle-div">
            <h2>Desigual.</h2>
            <p>Mini dress Lilies M. Christian Lacroix</p>
            <p>Mini dress with lily flower print and ruffled skirt designed by M. Christian Lacroix</p>
            <div className="flex-container">
            <img src={dress1} alt="dress"/>
            <div className="text-container">
            <p>Fit: Slim</p>
            <p>Length: Short</p>
            <p>Lily flower print</p>
            <p>Long sleeve</p>
            <p>Button and belt closure</p>
            </div>
            </div>
            <div className="text">
                <p>Founded in 1984 in Barcelona by Thomas Meyer, Desigual is celebrated for embracing creativity, individuality, and diversity in its clothing and accessories. </p>
                <p>The brand’s unique style is characterized by patchwork designs, vibrant patterns, asymmetrical cuts, and playful prints that reflect a carefree, optimistic approach to fashion.</p>
            </div>
        </div>
      </div>
      <div className="header-right">
        <img src={headerImage} alt="header"/>
      </div>
    </div>
  )
}

export default Header
