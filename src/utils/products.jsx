import Pozole_rojo from "../assets/Pozole_rojo.jpg";
import tacos from "../assets/tacos.jpg";
import tamales from "../assets/tamales.jpg";
import gordas from "../assets/gordas.jpg";
import michelada from "../assets/michelada.jpg";
import pico_de_gallo from "../assets/pico_de_gallo.jpg";
import salsa_chipotle from "../assets/salsa_chipotle.jpg";
import tequila from "../assets/tequila.jpg";
import carajillo from "../assets/carajillo.jpg";
import ranchera from "../assets/ranchera.jpg";

const productsMx = [
  {
    id: 1,
    name: "Pozole Rojo",
    price: "8 USD",
    category: 1,
    img: Pozole_rojo,
    stock: 9,
    description:
      "Caldo con maíz, cerdo suave y una sabrosa salsa hecha con chile pasilla ancho y chile guajillo",
  },
  {
    id: 2,
    name: "Tacos",
    price: "6 USD",
    category: 1,
    img: tacos,
    stock: 14,
    description:
      "Consiste en carne, generalmente de res o de pollo, cocinada junto a tomate y después introducida dentro de una Tortilla, generalmente de maíz, que se dobla o se enrolla. Finalmente se adereza con pico de gallo, una salsa típica mexicana. Un plato con mucha personalidad y que sin duda sabe a méxico.",
  },
  {
    id: 3,
    name: "Tamales",
    price: "6 USD",
    category: 1,
    img: tamales,
    stock: 10,
    description:
      "Masa de maíz o de arroz rellena de carnes, vegetales, salsas y otros ingredientes.",
  },
  {
    id: 4,
    name: "Gordas Pellizcadas",
    price: "5 USD",
    category: 1,
    img: gordas,
    stock: 12,
    description:
      "Llevan frijoles, salsa y queso, también pueden llevar guisados de distintos tipos.",
  },
  {
    id: 5,
    name: "Michelada",
    price: "4.50 USD",
    category: 2,
    img: michelada,
    stock: 35,
    description:
      "Cada michelada es una mezcla única de jugo de clamato y especias, combinadas con cerveza.",
  },
  {
    id: 6,
    name: "Pico de Gallo",
    price: "5 USD",
    category: 3,
    img: pico_de_gallo,
    stock: 12,
    description:
      "Se prepara con tomates rojos en cubitos, cebolla, chile serrano y cilantro picados, todo en crudo y muy fresco. Con un poquito de sal y de limón para darle un sabor más completo.",
  },
  {
    id: 7,
    name: "Tequila",
    price: "5 USD",
    category: 2,
    img: tequila,
    stock: 12,
    description:
      "Hay tres tipos principales de tequila: blanco, reposado y añejo. Cada uno envejece durante un tiempo diferente en barricas de madera.",
  },
  {
    id: 8,
    name: "Salsa chipotle",
    price: "5 USD",
    category: 3,
    img: salsa_chipotle,
    stock: 12,
    description:
      "Incluye chiles chipotles, que no son una variedad de chiles como tal, sino que se obtienen de diferentes variedades de chiles curados, ahumados y finalmente adobados, proceso que les aporta un sabor característico y diferente.",
  },
  {
    id: 9,
    name: "Salsa ranchera",
    price: "3 USD",
    category: 3,
    img: ranchera,
    stock: 24,
    description:
      "Famosa por ser la salsa que acompaña a uno de los mejores desayunos de México (y del mundo): los huevos rancheros. Con tomates rojos que aportan frescura, chile, cebolla, ajo, sal y aceite de oliva."
  },
  {
    id: 10,
    name: "Carajillo",
    price: "3.75 USD",
    category: 2,
    img: carajillo,
    stock: 12,
    description:
      "Esta bebida es una combinación simple de café recién hecho y Licor 43, un licor español con sabor a vainilla y cítricos. Mientras bebes esta popular bebida mexicana, podrás saborear la comida y disfrutar del tiempo con tus seres queridos."
  },
];

export default productsMx;
