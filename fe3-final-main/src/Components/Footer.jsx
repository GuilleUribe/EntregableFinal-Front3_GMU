import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

    const { Theme } = useContext(ContextGlobal)

    return (
        <footer style={{background:Theme.backgroundNav, color:Theme.color}}>
            <div>
                <p>Powered by</p>
                <img src="/images/DH.png" alt='DH-logo' style={{filter:Theme.inverted}}/>
            </div>
            <div>
                <a href="https://es-la.facebook.com/digitalhouseschool/" target="_blank" rel="noopener noreferrer" className="fa-brands fa-facebook face"></a>
                <a href="https://www.instagram.com/_digitalhouse/" target="_blank" rel="noopener noreferrer" className="fa-brands fa-instagram insta"></a>
                <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer" className="fa-brands fa-tiktok tiktok"></a>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="fa-brands fa-whatsapp wha"></a>
            </div>
        </footer>
    )
}

export default Footer
