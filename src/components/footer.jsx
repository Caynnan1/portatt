import "@/css/globals.css";
import "@/css/footer.css";

export default function Footer(){
    console.log("[+] Footer")
    return(
        <footer>
            <div>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="https://discord.com/users/1260176143999438929">Discord</a></li>
                    <li><a href="https://wa.me/17992700548">WhatsApp</a></li>
                    <li><a href="#inicio">Sobre</a></li>
                </ul>
            </div>
        </footer>
    )
}