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
            <div className="containerGather">
            <div className="containerGather_left">
              <p>A Jupiter Agência é uma empresa tão moderna, inovadora e digital que até seu espaço é 100% virtual. Além de atuar 100% em home office, agora temos um espaço virtual onde são realizas as dailys, reuniões com o time e até mesmo com os clientes convidados.</p>
            </div>
            <div className="containerGather_right">
                <video src="https://assets-global.website-files.com/60ca686c96b42034829a80d3/6334652d0cb5c3fa361eb33c_Gather-Spontaneous-Conversations-transcode.mp4" autoPlay loop muted></video>
            </div>
            </div>
        </>
    )
}