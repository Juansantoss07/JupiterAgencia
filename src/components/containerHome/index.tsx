import "./style.scss";

export function ContainerHome(){
    return (
        <>
            <section className="containerHome">
                <div className="containerHome_text">
                    <h1>Jupiter Agência</h1>
                    <p>
                    A Jupiter é uma empresa de tecnologia especializada no desenvolvimento de blogs, sites e e-commerce. Com uma equipe altamente qualificada, a empresa oferece soluções inovadoras e personalizadas para atender às necessidades específicas de cada cliente.
                    </p>

                    <p>
                    Com anos de experiência no mercado, a Jupiter tem um forte compromisso em fornecer serviços de alta qualidade, que incluem design e desenvolvimento web, gerenciamento de conteúdo, otimização de mecanismos de pesquisa, hospedagem e suporte técnico.
                    </p>

                  

                    <p>
                    Se você está procurando uma empresa confiável e experiente para desenvolver seu blog, site ou e-commerce, a Jupiter é a escolha certa. Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar a sua empresa a crescer online.
                    </p>
                    <button className="btn-default">
                        Entrar em contato
                    </button>
                </div>
                <div className="containerHome_img">
                    <img src="src/assets/imgs/mars.png" alt="Planet icons created by Freepik - Flaticon" />
                </div>
            </section>
        </>
    )
}