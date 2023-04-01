import "./style.scss";

export function ContainerHome(){
    return (
        <>
            <section className="containerHome">
                <div className="containerHome_text">
                    <h1>Jupiter Agência</h1>
                    <p>
                        O futuro é digital - e nós o construímos.
                    </p>
                    <button className="btn-default">
                        Entre em contato
                    </button>
                </div>
                <div className="containerHome_img">
                    <img src="public/mars.png" alt="Planet icons created by Freepik - Flaticon" />
                </div>
            </section>
        </>
    )
}