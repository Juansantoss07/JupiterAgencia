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

    return (
        <>
            <section className="container-ourplans" id="plataforms">
               <div className="container-ourplans_title">
                    <h2>Conheça nossas plataformas</h2>
               </div>

               <div className="container-ourplans_plans">

               <div className="container-ourplans_plan">
                    <h3>PontoCom</h3>
                    <img src="/printPontocom.png" alt="imagem"/>
                    <p>PontoCom é uma plataforma de portfolio que permite aos usuários criar um portfolio on-line personalizado, exibir e compartilhar facilmente seus trabalhos de forma elegante e profissional. 
                    </p>
                    <button onClick={linkPontoComPlataform} className="btn-default btn-plan view-product-btn">Vizualizar Plataforma</button>
                    <button onClick={linkPontoCom} className="btn-default btn-plan">Quero esse</button>
                </div>

                <div className="container-ourplans_plan">
                    <h3>Converto</h3>
                    <img src="https://images.pexels.com/photos/8474472/pexels-photo-8474472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagem" />
                    <p>Converto é uma plataforma de criação de landing pages que permite aos usuários criar páginas de destino personalizadas para campanhas de marketing on-line, com modelos, testes A/B e integração com outras ferramentas.</p>
                    <button  className="btn-default btn-plan breve view-product-btn">Vizualizar Plataforma</button>
                    <button onClick={linkConverto} className="btn-default btn-plan breve">Em breve</button>
                </div>

                <div className="container-ourplans_plan">
                    <h3>ProductX</h3>
                    <img src="https://images.pexels.com/photos/7672263/pexels-photo-7672263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagem" />
                    <p>ProductX é uma plataforma de ecommerce que permite criar uma loja virtual personalizada com gerenciamento de produtos, pagamentos e rastreamento de pedidos.</p>
                    <button  className="btn-default btn-plan breve view-product-btn">Vizualizar Plataforma</button>
                    <button onClick={linkProductX} className="btn-default btn-plan breve">Em breve</button>
                </div>
               </div>
            </section>
        </>
    )
}