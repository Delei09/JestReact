import React from 'react'
import Styles from '../style/cadastro.module.css'
import {AiOutlineUser , AiFillMail , AiFillLock , AiOutlineWhatsApp} from 'react-icons/ai'

const Cadastro = () => {
    return (
        <form className = {Styles.cadastro} >
            <div>
                <input type = 'text' required />
                <AiOutlineUser className = {Styles.icon} />
                <label >Nome</label>
            </div>
            <div>
                <input type = 'text' required />
                <AiFillMail className = {Styles.icon}  />
                <label >Email</label>
            </div>
            <div>
               
                <input type = 'tel' required />
                <AiOutlineWhatsApp className = {Styles.icon}  />
                <label >Whatsapp</label>
            </div>
            <div>
                <input type = 'password' required />
                <AiFillLock className = {Styles.icon}  />
                <label >Senha</label>
            </div>
            <button className = {Styles.button}>
                Salvar
            </button>
        </form>

    )
}

export default Cadastro