import "./style.scss";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="left">
                    <p>Site construído pela Jupiter Agência®2023</p>

                    <span>
                        Créditos pela imagem: 
                        <a href="https://www.flaticon.com/free-icons/planet" title="planet icons">Planet icons created by Freepik - Flaticon</a>
                    </span>
                    <span>
                        Créditos pelo vídeo Gather: 
                        <a href="https://www.gather.town/" title="Gather Town">Gather Town</a>
                    </span>
                </div>
               
               <div className="right">
                <p>CNPJ: 49.805.085/0001-74</p>
                <p>Fone: (11) 94569-1430</p>
                <p>Email: atendimento@jupiteragencia.com</p>
               </div>
               
            </footer>
        </div>
    )
}

