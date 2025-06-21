import { useEffect, useState } from "react";
import './app.css';

const backgrounds = [
  "/images/image1.jpg",
  "/images/image2.jpg"
  , "/images/image3.jpg",
  // Puedes agregar más imágenes aquí
];

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

function App() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000); // Cambia cada 4 segundos
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
    <div>
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
    </div>
  );
}

export default App;