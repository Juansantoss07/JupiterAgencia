import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import typeWriter from '../../js/typeWriter';
import "./style.scss";

export function ContainerHome(){
    useEffect(() => {
        ScrollReveal().reveal('.containerHome_img', { origin:'right', distance:'100%', duration:2500 , mobile:false});
        ScrollReveal().reveal('.containerHome_text', { origin:'left', distance:'100%', duration:2500 , mobile:false});
        typeWriter(document.querySelector('.maquina-escrever') as HTMLElement);
      }, []);
    
      const linkContact = () => {
        window.open('https://api.whatsapp.com/send?phone=13134707492&text=Ol%C3%A1%2C%20quero%20conhecer%20os%20planos%20da%20Jupiter%20Ag%C3%AAncia!')
      }
    return (
        
        <>
            <section className="containerHome" id='home'>
                <div className="containerHome_text">
                    <h1>Jupiter Agência</h1>
                    <p className='maquina-escrever'>
                        O futuro é digital - e nós o construímos.
                    </p>
                    <button onClick={linkContact} className="btn-default btn-home btn-mobile">
                        Entre em contato
                    </button>
                </div>
                <div className="containerHome_img">
                    <img src="/jupiter1.png" alt="Planet icons created by Freepik - Flaticon" />
                </div>
            </section>
        </>
    )
}