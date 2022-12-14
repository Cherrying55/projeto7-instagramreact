import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario imagem={"images/catanacomics.svg"} username={"Catana"} nome={"catanacomics"}/>
            <Sugestoes />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}