import "./style.scss";

function Header(){
    return (
        <div>
            <header>
                <div className="logo">
                    <a href="#"><span>Jupiter Agência</span></a>
                </div>
                <ul>
                <a href="#"><li>Início</li></a>
                <a href="#"><li>Sobre nós</li></a>
                <a href="#"><li>Contato</li></a>
                </ul>
            </header>
        </div>
    )
}

export default Header;