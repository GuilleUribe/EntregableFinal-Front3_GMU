import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {

    const { Theme, handleThemeChange } = useContext(ContextGlobal)

    return (
        <nav className='navbar' style={{background:Theme.backgroundNav, color:Theme.color}}>
            <Link to={'/'}><h2>DH Odontología</h2></Link>
            <div>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/contact'}>Contacto</Link>
                <Link to={'/favorites'}>Favoritos</Link>
                <button className={`themeButton ${Theme.color === 'white' && 'darkBtn'}`} onClick={handleThemeChange}>{Theme.themeButtonIcon}</button>
            </div>
        </nav>
    )
}

export default Navbar