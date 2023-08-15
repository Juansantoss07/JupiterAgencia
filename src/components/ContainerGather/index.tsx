import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import "./style.scss";

export default function ContainerGather(){
    useEffect(() => {
        ScrollReveal().reveal('.containerGather_left', { origin:'left', distance:'100%', duration:2500, mobile:false});
        ScrollReveal().reveal('.containerGather_right', { origin:'rigth', distance:'100%', duration:1500., mobile:false});
      }, []);

    return (
        <>
            <div className="containerGather" id='virtual_office'>
            <div className="containerGather_left">
              <p>Ao se tornar cliente da ExpanseX Agência, você receberá um link de acesso ao nosso escritório virtual. Com esse link você poderá entrar no escritório quando quiser em horário comercial para tirar dúvidas ou pedir algum suporte falando ao vivo diretamente com nossos desenvolvedores. <br /> <br /> Na ExpanseX você não precisa esperar seu e-mail ser repondido.</p>
            </div>
            <div className="containerGather_right">
                <video src="https://assets-global.website-files.com/60ca686c96b42034829a80d3/6334652d0cb5c3fa361eb33c_Gather-Spontaneous-Conversations-transcode.mp4" autoPlay loop muted></video>
            </div>
            </div>
        </>
    )
}