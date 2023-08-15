import "./style.scss";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="left">
                    <p>Site construído pela ExpanseX®2023</p>

                    <span>
                        Créditos pelo vídeo Gather: 
                        <a href="https://www.gather.town/" title="Gather Town">Gather Town</a>
                    </span>
                </div>
               
               <div className="right">
                <p>CNPJ: 49.805.085/0001-74</p>
                <p>Fone: (11) 94569-1430</p>
                <p>Email: atendimento@expanse_x.com</p>
               </div>
               
            </footer>
        </div>
    )
}

