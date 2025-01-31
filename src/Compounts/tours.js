import tourImg01 from "../assets/tour-img01.jpg";
import tourImg02 from"../assets/tour-img02.jpg";
import tourImg03 from "../assets/tour-img03.jpg";
import tourImg04 from "../assets/tour-img04.jpg";
import tourImg05 from"../assets/tour-img05.jpg";
import tourImg06 from "../assets/tour-img06.jpg";
import tourImg07 from "../assets/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    img:"tourImg01",
    rating: 4.9,
    reviews:[
      {
        name: "jhon doe",
       
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 78,
    maxGroupSize: 8,
    desc: "this is the description",
    rating: 4.3,
    reviews: [
      {
        name: "jhon doe",
       
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 69,
    maxGroupSize: 8,
    desc: "this is the description",
    rating: 3.6,
    reviews: [
      {
        name: "jhon doe",
       
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 89,
    maxGroupSize: 8,
    desc: "this is the description",
    rating: 4.3,
    reviews: [
      {
        name: "jhon doe",
       
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 46,
    maxGroupSize: 8,
    desc: "this is the description",
    rating: 4.9,
    reviews: [
      {
        name: "jhon doe",
        
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    rating: 4.8,
    reviews: [
      {
        name: "jhon doe",
        
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 79,
    maxGroupSize: 8,
    desc: "this is the description",
    rating: 2.6,
    reviews: [
      {
        name: "jhon doe",
     
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    rating: 4.6,
    reviews: [
      {
        name: "jhon doe",
       
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
