import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './header.scss'
import { BsSearch } from 'react-icons/bs'
import { useWindowSize } from 'react-use'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

const Header = () => {

    const headerRef = useRef(null);
    const navigate = useNavigate();
    const [isResponsive, setIsResponsive] = useState(true);
    const { width } = useWindowSize(0)

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchShow, setSearchShow] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (width <= 768) {
            setIsResponsive(false);
            setIsMenuOpen(false);
            setSearchShow(false);
        } else {
            setIsResponsive(true);
        }
    }, [width]);


    useEffect(() => {
        const shrinkHeader = () => {

            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                headerRef.current.classList.add('shrink');
            }
            else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    const handleSearch = (e) => {
        if (query == "") {
            e.preventDefault()
            return
        } else {
            navigate(`/search/${query}`)
            setIsMenuOpen(false)
            setSearchShow(false)
        }

        setQuery("")
    }


    const navigationHandler = (type) => {
        if (type == "movie") {
            navigate("/explore/movie")
            setIsMenuOpen(false)
            setSearchShow(false)
        } else {
            navigate("/explore/tv")
            setIsMenuOpen(false)
            setSearchShow(false)
        }
    }

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
        setSearchShow(false)
    }

    const searchHandler = () => {
        setSearchShow(!searchShow)
    }

    return (
        <div className='header' ref={headerRef} >
            <ContentWrapper>

                <div className="headerContainer">


                    <div className="itemWrapper">
                        {isResponsive ? (
                            <>
                                <div className="logo" onClick={() => navigate("/")}>
                                    <img src="src/assets/persona.jpg" alt="" />
                                </div>

                                <form className='headerSearchForm' onSubmit={handleSearch} >
                                    <div className="visibleSearch">
                                        <input type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
                                        <BsSearch className='searchIcon' size={20} onClick={handleSearch} />
                                    </div>
                                </form>

                                <ul className='headerItems'>
                                    <li className='item' onClick={() => navigate("/")}>Home</li>
                                    <li className='item' onClick={() => navigationHandler("movie")}>Movie</li>
                                    <li className='item' onClick={() => navigationHandler("tvshow")}>Tv Show</li>
                                </ul>
                            </>
                        ) : (
                            <div className="menuItem">
                                <AiOutlineMenu className='menuIcon' size={30} onClick={menuHandler} />

                                <div className="logo" onClick={() => navigate("/")}>
                                    <img src="src/assets/persona.jpg" alt="" />
                                </div>
                                {searchShow ? (
                                    <RxCross1 className='searchIcon' size={20} onClick={searchHandler} />
                                ) : (
                                    <BsSearch className='searchIcon' size={20} onClick={searchHandler} />
                                )}

                            </div>

                        )}



                    </div>


                </div>

            </ContentWrapper>


            {isMenuOpen && (
                <ul className="navMenuItems">
                    <li className='item' onClick={() => navigate("/")}>Home</li>
                    <li className='item' onClick={() => navigationHandler("movie")}>Movie</li>
                    <li className='item' onClick={() => navigationHandler("tvshow")}>Tv Show</li>
                </ul>


            )}

            {searchShow && (
                <form className="searchOpen" onSubmit={handleSearch}>
                    <input className='searchOpenInput' type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
                    <BsSearch className='searchIcon' size={18} onClick={handleSearch} />
                </form>
            )}
        </div>
    )
}

export default Header