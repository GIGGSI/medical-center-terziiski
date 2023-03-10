import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';
import { StaticImage } from "gatsby-plugin-image"


import './LogoLine.css'
const LogoLine = () => {
    let location = useLocation();
    return (
        <div className="logo-line-wrapper">
            <div className='logo-line-image-container'>
                <Link
                    to={location.pathname !== '/' ? '/' : ''}
                >
                    <StaticImage
                        onClick={() => location.pathname === '/' && window.scrollTo(0, 0)}
                        src="../../../../assets/images/logo-terziiski.webp"
                        alt="Medical Center Trinity"
                        placeholder="blurred"
                        layout="constrained"
                        width={200}
                    />
                </Link>
            </div>
        </div>

    )
}

export default LogoLine