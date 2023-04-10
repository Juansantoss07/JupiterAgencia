import "./style.scss";

export default function ContainerOurPlans(){

    const linkConverto = () => {
        window.open('https://api.whatsapp.com/send?phone=13134707492&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%3A%20*Converto*');
    }

    const linkPontoCom = () => {
        window.open('https://api.whatsapp.com/send?phone=13134707492&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%3A%20*PontoCom*');
    }

    const linkProductX = () => {
        window.open('https://api.whatsapp.com/send?phone=13134707492&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%3A%20*ProductX*');
    }

    return (
        <>
            <section className="container-ourplans" id="plataforms">
               <div className="container-ourplans_title">
                    <h2>Conheça nossas plataformas</h2>
               </div>

               <div className="container-ourplans_plans">
                <div className="container-ourplans_plan">
                    <h3>Converto</h3>
                    <img src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagem" />
                    <p>Converto é uma plataforma de criação de landing pages que permite aos usuários criar páginas de destino personalizadas para campanhas de marketing on-line, com modelos, testes A/B e integração com outras ferramentas.</p>
                    <button onClick={linkConverto} className="btn-default btn-plan">Quero esse</button>
                </div>
                <div className="container-ourplans_plan">
                    <h3>PontoCom</h3>
                    <img src="https://images.pexels.com/photos/6940093/pexels-photo-6940093.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="imagem" />
                    <p>PontoCom é uma plataforma de portfolio que permite aos usuários criar um portfolio on-line personalizado, exibir e compartilhar facilmente seus trabalhos de forma elegante e profissional.</p>
                    <button onClick={linkPontoCom} className="btn-default btn-plan">Quero esse</button>
                </div>
                <div className="container-ourplans_plan">
                    <h3>ProductX</h3>
                    <img src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="imagem" />
                    <p>ProductX é uma plataforma de ecommerce que permite criar uma loja virtual personalizada com gerenciamento de produtos, pagamentos e rastreamento de pedidos.</p>
                    <button onClick={linkProductX} className="btn-default btn-plan">Quero esse</button>
                </div>
               </div>
            </section>
        </>
    )
}