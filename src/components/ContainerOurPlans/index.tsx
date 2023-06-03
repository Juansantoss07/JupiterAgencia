import "./style.scss";

export default function ContainerOurPlans(){

    const linkConverto = () => {
        // window.open('https://api.whatsapp.com/send?phone=13134707492&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%3A%20*Converto*');
    }

    const linkPontoCom = () => {
        window.open('https://api.whatsapp.com/send?phone=13134707492&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%3A%20*PontoCom*');
    }

    const linkProductX = () => {
        // window.open('https://api.whatsapp.com/send?phone=13134707492&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%3A%20*ProductX*');
    }

    const linkPontoComPlataform = () => {
        window.open('https://pontocom.netlify.app');
    }

    const linkProductX_Plataform = () => {
        window.open('https://jupiteragencia-ecommerce.epizy.com');
    }

    return (
        <>
            <section className="container-ourplans" id="plataforms">
               <div className="container-ourplans_title">
                    <h2>Conheça nossas plataformas</h2>
               </div>

               <div className="container-ourplans_plans">

               <div className="container-ourplans_plan">
                    <h3>JupiWork</h3>
                   <video src="/pontocom.mp4" muted loop autoPlay></video>
                    <p>JupitWork é uma plataforma de portfolio que permite aos usuários criar um portfolio on-line personalizado, exibir e compartilhar facilmente seus trabalhos de forma elegante e profissional. 
                    </p>
                    <button onClick={linkPontoComPlataform} className="btn-default btn-plan view-product-btn">Vizualizar Plataforma</button>
                    <button onClick={linkPontoCom} className="btn-default btn-plan btn-compre">Comprar por R$ 1.999,90 <br></br> <br></br>ou em até 6x com juros</button>
                </div>



                <div className="container-ourplans_plan">
                    <h3>JupiShop</h3>
                    <video src="/productX.mp4" muted autoPlay loop></video>
                    <p>JupiShop é uma plataforma de ecommerce que permite ter uma loja virtual personalizada com gerenciamento de produtos, pagamentos e rastreamento de pedidos.</p>
                    <button onClick={linkProductX_Plataform}  className="btn-default btn-plan view-product-btn">Vizualizar Plataforma</button>
                    <button onClick={linkProductX} className="btn-default btn-plan btn-compre">Comprar por R$ 2.999,90 <br></br> <br />
                    ou em até 6x com juros</button>
                </div>

                <div className="container-ourplans_plan">
                    <h3>JupiConverto</h3>
                    <video src="/breve.mp4" muted autoPlay loop></video>
                    <p>JupitConverto é uma plataforma de landing pages que permite aos usuários ter páginas de destino personalizadas para campanhas de marketing on-line, com modelos, testes A/B e integração com outras ferramentas.</p>
                    <button  className="btn-default btn-plan view-product-btn">Vizualizar Plataforma</button>
                    <button onClick={linkConverto} className="btn-default btn-plan breve">Plataforma ainda em <br /> <br /> desenvolvimento...</button>
                </div>
               </div>
            </section>
        </>
    )
}