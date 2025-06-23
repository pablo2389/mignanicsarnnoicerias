import { useEffect, useState } from "react";
import './app.css';

const backgrounds = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MIGNANI</div>
      <ul className="navbar-links">
        <li><a href="#lunes-jueves">Lunes a Jueves</a></li>
        <li><a href="#viernes-domingo">Viernes a Domingo</a></li>
        <li><a href="#asados">Asados</a></li>
        <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

function ListaOfertas({ titulo, listaOfertas, descripcion, id }) {
  const [mostrar, setMostrar] = useState(false);
  return (
    <section id={id} className="offer-section">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Ofertas" : "Ver Ofertas"}
      </button>
      {mostrar && (
        <ul>
          {listaOfertas.map((oferta, index) => (
            <li key={index}>
              {oferta.nombre} - <strong>{oferta.precio}</strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function SobreNosotros() {
  return (
    <section className="offer-section" id="sobre-nosotros">
      <h2>Sobre Nosotros</h2>
      <p>
        Somos la Carnicería Mignani, con más de 20 años ofreciendo los mejores cortes de carne
        de la región, comprometidos con la calidad y el sabor tradicional.
      </p>
    </section>
  );
}

function Contacto() {
  return (
    <section className="offer-section" id="contacto">
      <h2>Contacto</h2>
      <p>Teléfono: <strong>0261 123-4567</strong></p>
      <p>Email: <strong>contacto@mignani.com.ar</strong></p>
      <p>Dirección: <strong>Av. Principal 123, Guaymallén, Mendoza</strong></p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Gracias por contactarnos. ¡Pronto te responderemos!');
          e.target.reset();
        }}
      >
        <label htmlFor="nombre">Nombre:</label><br />
        <input type="text" id="nombre" name="nombre" required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="mensaje">Mensaje:</label><br />
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br /><br />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

function App() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
  }, [bgIndex]);

  const ofertasLunesJueves = [
    { nombre: "Blanda", precio: "$10000" },
    { nombre: "Paleta", precio: "$10000" },
    { nombre: "Bola de Lomo", precio: "$1000" },
    { nombre: "Nalga", precio: "$11000" },
    { nombre: "Cuadril", precio: "$12000" }
  ];
  const ofertasViernesDomingo = [
    { nombre: "Matambre", precio: "$12000" },
    { nombre: "Tapa de Asado", precio: "$12000" },
    { nombre: "Pechito de Cerdo", precio: "$12800" },
    { nombre: "Costillas", precio: "$13600" },
    { nombre: "Entraña", precio: "$13900" }
  ];
  const ofertasAsados = [
    { nombre: "Chorizo", precio: "$7200" },
    { nombre: "Morcilla", precio: "$7100" },
    { nombre: "Provoleta", precio: "$6500" },
    { nombre: "Chinchulines", precio: "$7900" },
    { nombre: "Riñones", precio: "$5950" }
  ];

  return (
    <>
      <Navbar />
      <h1>BIENVENIDOS A LA CARNICERIA MIGNANI</h1>
      <ListaOfertas
        titulo="Ofertas de Lunes a Jueves"
        descripcion="Aprovechá estas ofertas especiales de lunes a jueves."
        listaOfertas={ofertasLunesJueves}
        id="lunes-jueves"
      />
      <ListaOfertas
        titulo="Ofertas de Viernes a Domingo"
        descripcion="Disfrutá de nuestras ofertas especiales de viernes a domingo."
        listaOfertas={ofertasViernesDomingo}
        id="viernes-domingo"
      />
      <ListaOfertas
        titulo="Ofertas de Asados"
        descripcion="No te pierdas nuestras ofertas especiales para asados."
        listaOfertas={ofertasAsados}
        id="asados"
      />
      <SobreNosotros />
      <Contacto />
    </>
  );
}

export default App;
