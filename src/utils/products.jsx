import Pozole_rojo from "../assets/Pozole_rojo.jpg";
import tacos from "../assets/tacos.jpg";
import tamales from "../assets/tamales.jpg";

const productsMx = [
    {
        id: 1,
        name: 'Pozole Rojo',
        price: '8 USD',
        category: 'food',
        img: {Pozole_rojo},
        stock: 50,
        description: 'Caldo con maíz, cerdo suave y una sabrosa salsa hecha con chile pasilla ancho y chile guajillo'

    },
    {
        id: 2,
        name: 'Tacos',
        price: '6 USD',
        category: 'food',
        img: {tacos},
        stock: 140,
        description: 'Tortilla, generalmente de maíz, que se dobla o se enrolla para contener dentro diversos ingredientes y algún tipo de salsa.'

    },
    {
        id: 3,
        name: 'Tamales',
        price: '6 USD',
        category: 'food',
        img: {tamales},
        stock: 140,
        description: 'Masa de maíz o de arroz rellena de carnes, vegetales, salsas y otros ingredientes.'

    }
]

export default productsMx;