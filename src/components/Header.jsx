import React from 'react'
import {DiJavascript1, DiCss3 } from 'react-icons/di'
import {FaNodeJs, FaReact} from 'react-icons/fa'
import code_development from './video/code_development.mp4'

const Header = () => {


    return (
        <div className="header" id="header">
            <div className="bg-video">
                <video className="bg-video__content"
                autoPlay
                muted
                loop>
                    <source src={code_development} type="video/mp4" />
                </video>
            </div>
            <div className="header__total">
                <div className="header__icons">
                    <div className="header__icons--group-1">
                        <DiJavascript1 className="header__icon icon-js" />
                        <FaNodeJs className="header__icon icon-node" />
                    </div>
                </div>
                <div className="header__img">
                    <img className="header__img--icon" src="./icons/png/001-desktop.png" alt=""/>
                </div>
                <div className="header__icons">
                    <div className="header__icons--group-2">
                        <FaReact className="header__icon icon-react" />
                        <DiCss3 className="header__icon icon-css" />
                    </div>
                </div>
            </div>
            <div className="header__title">
                <h1 data-text="alan bersia" className="heading--primary">alan bersia</h1>
            </div>
            <hr className="separator"/>
            <div className="header__comment">
                <h2 className="heading--secondary">Full-Stack Web Developer</h2>
            </div>
        </div>
    )
}

export default Header
