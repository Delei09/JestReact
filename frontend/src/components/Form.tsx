import React from 'react'
import Styles from '../style/form.module.css'
import {AiOutlineUser , AiFillMail , AiFillLock , AiOutlineWhatsApp} from 'react-icons/ai'

const Form = () => {
    return (
        <form className = {Styles.form}  >
            <div>
                <input type = 'text' required />
                <AiFillMail className = {Styles.icon}  />
                <label >Email</label>
            </div>
            <div>
                <input type = 'password' required />
                <AiFillLock className = {Styles.icon}  />
                <label >Senha</label>
            </div>
            <button className = {Styles.button}>
                Logar
            </button>
        </form>

    )
}

export default Form