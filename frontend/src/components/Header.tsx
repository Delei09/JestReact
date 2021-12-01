import React from 'react'
import Logo from '../images/logo.png'
import Styles from '../style/header.module.css'

type propsType = {
    title : string
}

const Header : React.FC<propsType> = ({title} ) => {

    return(
        <header className = {Styles.header} >
            <div>
                <a href = 'w' className = {Styles.logoName}> <img className = {Styles.logo}  src = {Logo} alt = 'Logo' /> Planefinan   </a>
            </div>
            <div className = {Styles.divLogin} >
                <li>
                   <a href = 'w' >Login</a>
                </li>
                <button className = {Styles.button} >
                    Comece já
                </button>
            </div>
        </header>
    )
}

export default Header