import bmw from "../../assets/shopimg/bluebmw.jpeg";
import ferari from "../../assets/shopimg/ferari.jpeg";
import mercedes from "../../assets/shopimg/greymerc.jpeg";
import honda from "../../assets/shopimg/honda.jpeg";
import jeep from "../../assets/shopimg/jeep.jpeg";
import lambo from "../../assets/shopimg/lambo.jpeg";
import nissan from "../../assets/shopimg/nissan.jpeg";
import rover from "../../assets/shopimg/whiterover.jpeg";

const carData = [
  { name: "BMW", source: bmw, price: 200000, id: 1, productName: "bmw" },
  {
    name: "Ferari",
    source: ferari,
    price: 250000,
    id: 2,
    productName: "ferari",
  },
  {
    name: "Mercedes",
    source: mercedes,
    price: 300000,
    id: 3,
    productName: "mercedes",
  },
  {
    name: "Honda Civic",
    source: honda,
    price: 220000,
    id: 4,
    productName: "honda-civic",
  },
  { name: "Jeep", source: jeep, price: 150000, id: 5, productName: "jeep" },
  {
    name: "Lamborghini",
    source: lambo,
    price: 500000,
    id: 6,
    productName: "lambo",
  },
  {
    name: "Nissan Corvet",
    source: nissan,
    price: 200000,
    id: 7,
    productName: "nissan",
  },
  {
    name: "Range Rover",
    source: rover,
    price: 200000,
    id: 8,
    productName: "rover",
  },
];
export default carData;
