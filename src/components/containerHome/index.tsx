import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import "./style.scss";

export function ContainerHome(){
    useEffect(() => {
        ScrollReveal().reveal('.containerHome_img', { origin:'right', distance:'100%', duration:2500 , mobile:false});
        ScrollReveal().reveal('.containerHome_text', { origin:'left', distance:'100%', duration:2500 , mobile:false});
      }, []);
    
    return (
        
        <>
            <section className="containerHome">
                <div className="containerHome_text">
                    <h1>Jupiter Agência</h1>
                    <p>
                        O futuro é digital - e nós o construímos.
                    </p>
                    <button className="btn-default">
                        Entre em contato
                    </button>
                </div>
                <div className="containerHome_img">
                    <img src="dist/mars.png" alt="Planet icons created by Freepik - Flaticon" />
                </div>
            </section>
        </>
    )
}