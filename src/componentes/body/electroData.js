import lavadora from './lavadora.jpg';
import refrigeradorlg from './refrigeradorlg.avif';
import AspiradoraDyson from './AspiradoraDyson.jpg';
import MicroondasPana from './MicroondasPana.jpg';
import TelevisorOLED from './TelevisorOLED.jpg';
import LicuadoraOster from './LicuadoraOster.jpg';
import CafeteraNespresso from './CafeteraNespresso.jpg'
import SecadoraW from './SecadoraW.jpg';
import Horno from './Horno.jpg';
import BatidoraKi from './BatidoraKi.jpg';
import Cocinadegas from './Cocinadegas.jpg';
import Robotaspirador from './Robotaspirador.jpg';
import Planchadevapor from './Planchadevapor.jpg';
import lavaVagillas from './lavaVagillas.jpg';

const electroData = [
    {   
      id: 1,
      title: "Lavadora Samsung",
      autor: "Samsung",
      fechaLanzamiento: "20-12-2010",
      description: "Lavadora de carga frontal con capacidad para 10 kg de ropa.",
      image: lavadora,
      precio: "$1000"
    },
    {
      id: 2,
      title: "Refrigerador LG",
      autor: "LG",
      fechaLanzamiento: "20-12-2015",
      description: "Refrigerador de acero inoxidable con dispensador de agua y hielo.",
      image: refrigeradorlg,
      precio: "$25000"
    },
    {
      id: 3,
      title: "Aspiradora Dyson",
      autor: "Dyson",
      fechaLanzamiento: "20-12-2020",
      description: "Aspiradora inalámbrica con tecnología ciclónica y filtro HEPA.",
      image: AspiradoraDyson,
      precio: "$399.99"
    },
    {   
      id: 4,
      title: "Microondas Panasonic",
      autor: "Panasonic",
      fechaLanzamiento: "20-12-2018",
      description: "Microondas con función grill y capacidad para 20 litros.",
      image: MicroondasPana,
      precio: "$500"
    },
    {   
      id: 5,
      title: "Televisor Sony OLED",
      autor: "Sony",
      fechaLanzamiento: "20-12-2022",
      description: "Televisor OLED de 55 pulgadas con resolución 4K y HDR.",
      image: TelevisorOLED,
      precio: "$1500"
    },
    {   
      id: 6,
      title: "Licuadora Oster",
      autor: "Oster",
      fechaLanzamiento: "20-12-2020",
      description: "Licuadora de alta potencia con cuchillas de acero inoxidable.",
      image: LicuadoraOster,
      precio: "$100"
    },
    {   
      id: 7,
      title: "Cafetera Nespresso",
      autor: "Nespresso",
      fechaLanzamiento: "20-12-2019",
      description: "Cafetera de cápsulas con sistema de extracción de alta presión.",
      image: CafeteraNespresso,
      precio: "$200"
    },
    {   
      id: 8,
      title: "Secadora Whirlpool",
      autor: "Whirlpool",
      fechaLanzamiento: "20-12-2021",
      description: "Secadora de ropa con múltiples programas de secado.",
      image: SecadoraW,
      precio: "$800"
    },
    {   
      id: 9,
      title: "Horno eléctrico Black+Decker",
      autor: "Black+Decker",
      fechaLanzamiento: "20-12-2017",
      description: "Horno eléctrico con capacidad para 6 rebanadas de pan o una pizza de 12 pulgadas.",
      image: Horno,
      precio: "$150"
    },
    {   
      id: 10,
      title: "Batidora KitchenAid",
      autor: "KitchenAid",
      fechaLanzamiento: "20-12-2019",
      description: "Batidora de pie con tazón de acero inoxidable y motor de alto rendimiento.",
      image:BatidoraKi,
      precio: "$300"
    },
    {   
      id: 11,
      title: "Cocina de gas Bosch",
      autor: "Bosch",
      fechaLanzamiento: "20-12-2016",
      description: "Cocina de gas con quemadores de alta eficiencia y horno con función de autolimpieza.",
      image:Cocinadegas,
      precio: "$1200"
    },
    {   
      id: 12,
      title: "Robot aspirador iRobot Roomba",
      autor: "iRobot",
      fechaLanzamiento: "20-12-2018",
      description: "Robot aspirador con sistema de limpieza en 3 fases y mapeo inteligente.",
      image: Robotaspirador,
      precio: "$400"
    },
    {   
      id: 13,
      title: "Plancha de vapor Philips",
      autor: "Philips",
      fechaLanzamiento: "20-12-2020",
      description: "Plancha de vapor con suela de cerámica y sistema anti-goteo.",
      image:Planchadevapor,
      precio: "$50"
    },
    {   
      id: 14,
      title: "Exprimidor eléctrico Moulinex",
      autor: "Moulinex",
      fechaLanzamiento: "20-12-2019",
      description: "Exprimidor eléctrico con sistema de rotación bidireccional y filtro de pulpa ajustable.",
      image: 'https://images.philips.com/is/image/PhilipsConsumer/HR2752_90-IMS-es_AR?wid=494&hei=435&$pnglarge$',
      precio: "$80"
    },
    {   
      id: 15,
      title: "Lavavajillas Siemens",
      autor: "Siemens",
      fechaLanzamiento: "20-12-2017",
      description: "Lavavajillas con capacidad para 12 servicios y varios programas de lavado.",
      image: lavaVagillas,
      precio: "$1000"
    }
  ];
  
  export default electroData;
