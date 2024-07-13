import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/css/index.css";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <section className="container-home" id="inicio">
          <div className="container-texts">
              <h1 className="container-title">👋 Caynnan Martins</h1>
              <span className="container-span">Olá Me chamo Caynnan, Sou Programador FullStack, Tenho 17 Anos, Campeão de Robotica Regional De Barretos. Atualmente classificado para a segunda fase O.B.I e Fase Estadual da: O.B.R</span>
          </div>
          <div>
            <img className="container-avatar" src="https://cdn.discordapp.com/attachments/1261533224690253935/1261535188169789540/IMG-20231208-WA0120.jpg?ex=66934fb3&is=6691fe33&hm=1d6117778690dfa3bd3ce9736f708f6bb622de73db4c32c9e5b9e27d8cffd902&"></img>
          </div>

          <i class='bx bx-down-arrow-alt'></i>
      </section>
      <section className="container-tecnologia" id="tecnologias">
          <div className="containers-tech">
            <div className="tech">
              <h1>Web</h1>
              <span>Desenvolvo a parte back-end e front-end com as mais novas tecnologias do mercado!</span>
                <div className="container-icons">
                <i class='bx bxl-html5'></i>
                <i class='bx bxl-css3' ></i>
                <i class='bx bxl-tailwind-css' ></i>
                <i class='bx bxl-react' ></i>
                <i class='bx bxl-nodejs' ></i>
                <i class='bx bxl-php' ></i>
                <i class='bx bxl-python'></i>
                <i class='bx bxl-github' ></i>
                <i class='bx bxl-git' ></i>
                <i class='bx bxs-file-js' ></i>
                <i class='bx bxl-vuejs' ></i>
                </div>
            </div>
            <div>
            <div className="tech">
              <h1>Robótica</h1>
              <span>Desenvolvo a parte mecanica e de desenvolvimento! Atualmente utilizo arduino e até IA!</span>
                <div className="container-icons">
                <i class='bx bx-bot'></i>
                </div>
            </div>
            </div>
            <div>
            <div className="tech">
              <h1>Database</h1>
              <span>Tanto a parte de conexões, modelagem, criações e edição!</span>
                <div className="container-icons">
                <i class='bx bxl-postgresql' ></i>
                <i class='bx bxl-mongodb' ></i>
                <i class='bx bxs-file-json' ></i>
                </div>
            </div>
            </div>
          </div>
      </section>
      <Footer/>
    </main>
  );
}
