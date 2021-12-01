import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import celularImagem from '../images/imagemCelular.png'
import Styles from '../style/inicio.module.css'
import {AiFillLock , AiFillClockCircle} from 'react-icons/ai'
import Footer from '../components/Footer'

const Inicio = () => {
    return(
        <>
            <Header title = 'App de Planejamento Financeiro' />
            <Main >
                <div className = {Styles.main} >
                    <div className = {Styles.divTexto}>
                        <h2>Toda a praticidade que a planilha não te oferece</h2>
                        <h4>Organize seu dinheiro em tempo real em uma solução completa, prática e segura, e garanta o controle total das suas finanças.</h4>
                        <div>
                                <AiFillLock className = {Styles.icon} />
                                <h5>Segurança dos seus dados em primeiro lugar</h5>
                        </div>
                        <div>
                            <AiFillClockCircle className = {Styles.icon}  />
                            <h5>Acesse quando quiser, no celular ou computador</h5>
                        </div>
                    </div>
                    <div>
                        <img src  = {celularImagem} alt = 'celular' />
                    </div>
                </div>
            </Main>
            <Footer />

        </>
    )

}

export default Inicio