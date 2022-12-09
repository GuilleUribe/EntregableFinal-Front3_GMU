import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {

    const { Theme } = useContext(ContextGlobal)
    
    return (
        <div className='contact' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h2>¿Quieres saber más?</h2>
            <p>Envíanos tus preguntas y nos pondremos en contacto con usted</p>
            <Form/>
        </div>
    )
}

export default Contact