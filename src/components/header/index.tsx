import "./style.scss";

function Header(){
    function handleClickClose() {
        const menu = document.querySelector('.header-mobile')as HTMLElement;
        const body = document.body;
        menu.style.display = 'none';
        body.style.overflow = 'auto';
      }


    function handleClickOpen() {
        const menu = document.querySelector('.header-mobile')as HTMLElement;
        const body = document.body;
        menu.style.display = 'flex';
        body.style.overflow = 'hidden';
      }
    
    return (
        <div>
            <header>
                <div className="logo">
                    <a href="#home"><span>Jupiter Agência</span></a>
                </div>
                <div className="menu-btn-mobile" onClick={handleClickOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                </div>
                <ul>
                <a href="#home"><li>Início</li></a>
                <a href="#about"><li>Sobre nós</li></a>
                <a href="#virtual_office"><li>Escritório Virtual</li></a>
                <a href="#contact"><li>Contato</li></a>
                <a href="#plataforms"><li>Plataformas</li></a>
                </ul>
            </header>
            <div className="header-mobile">
                    <div className="btn-close-header" onClick={handleClickClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    </div>
                    <ul>
                        <a href="#home" onClick={handleClickClose}>
                            <li>Início</li>
                        </a>
                        <a href="#about" onClick={handleClickClose}>
                            <li>Sobre nós</li>
                        </a>
                        <a href="#virtual_office" onClick={handleClickClose}>
                            <li>Escritório Virtual</li>
                        </a>
                        <a href="#contact" onClick={handleClickClose}>
                            <li>Contato</li>
                        </a>
                        <a href="#plataforms" onClick={handleClickClose}>
                            <li>Plataformas</li>
                        </a>
                    </ul>
                </div>
        </div>
    )
}

export default Header;