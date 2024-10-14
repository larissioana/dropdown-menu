import './navbar.scss'
import searchIcon from '../../assets/search(1).png'
import favoriteIcon from '../../assets/favorite(1).png'
import personIcon from '../../assets/person(1).png'
import { useState, useEffect } from 'react'
import { navItems } from '../../utils/navLinks'

const Navbar = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Women");
    const [hoveredLink, setHoveredLink] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
    const [expandedLink, setExpandedLink] = useState<number | null>(null); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleCategory = (category: string) => {
        setActiveCategory(category);
        setExpandedLink(null);
        setHoveredLink(null)
    };

    const handleMouseEnter = (linkId: number) => {
        setHoveredLink(linkId);
    };

    const handleMobileSubLinks = (linkId: number) => {
        setExpandedLink(prev => (prev === linkId ? null : linkId));
    };

    return (
        <>
            {!isMobile ? (
                <div className="nav">
                    <nav className="navbar" onClick={()=> setHoveredLink(null)}>
                        <div className="logo">
                            <h1>Desigual.</h1>
                        </div>
                        <div className="nav-center">
                            <ul className="main-navbar">
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleCategory(item.category)}
                                        style={{
                                            borderBottom: activeCategory === item.category ? '1px solid #17181a' : 'none',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {item.category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav-icons">
                            <img src={searchIcon} alt="search" />
                            <img src={personIcon} alt="person" />
                            <img src={favoriteIcon} alt="favorite" />
                        </div>
                    </nav>
                    <ul className="secondary-navbar">
                        {navItems
                            .find(item => item.category === activeCategory)
                            ?.links.map((link) => (
                                <li
                                    key={link.id}
                                    onMouseEnter={() => handleMouseEnter(link.id)}
                                    className="subcategory"
                                >
                                    {link.name}
                                    {/* Sub Links */}
                                    {link.sublinks.length > 0 && hoveredLink === link.id && (
                                        <ul className="sublinks">
                                            {link.sublinks.map((sublink, subIndex) => (
                                                <li key={subIndex}>{sublink}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            ) : (
                <div className="mobile-container">
                    <div className="mobile-nav">
                        <div className="mobile-left">
                            <h1>Menu</h1>
                        </div>
                        <div className="nav-icons">
                            <img src={searchIcon} alt="search" />
                            <img src={personIcon} alt="person" />
                            <img src={favoriteIcon} alt="favorite" />
                        </div>
                    </div>
                    <div className="logo">
                        <h1>Desigual.</h1>
                    </div>
                    <ul className="main-navbar">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleCategory(item.category)}
                                style={{
                                    borderBottom: activeCategory === item.category ? '1px solid #17181a' : 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {item.category}
                            </li>
                        ))}
                    </ul>
                    <ul className="secondary-navbar">
                        {navItems
                            .find(item => item.category === activeCategory)
                            ?.links.map((link) => (
                                <li
                                    key={link.id}
                                    onClick={() => handleMobileSubLinks(link.id)} 
                                    className="subcategory"
                                >
                                    {link.name}
                                    {/* Sub Links */}
                                    {expandedLink === link.id && ( 
                                        <ul className="sublinks">
                                            {link.sublinks.map((sublink, subIndex) => (
                                                <li key={subIndex}>{sublink}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar
