import "@/css/globals.css";
import "@/css/navbar.css";

export default function Navbar(){
    console.log("[+] Navbar")
    return(
        <nav>
            <ul>
                <h3>Caynnan</h3>
            </ul>
            <ul class="container-links">
                <li>
                    <a href="#inicio">Inicio</a>
                </li>
                <li>
                    <a href="#tecnologias">Tecnologias</a>
                </li>
            </ul>
        </nav>
    )
}