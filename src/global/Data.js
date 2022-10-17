import { Park } from '@mui/icons-material';

export const filterData = [
    {name:"Fast food",image: require('../../assets/fastfood.jpg'), id:'0'},
    {name:"Burgers",image: require('../../assets/burger.jpg'), id:'1'},
    {name:"Salads",image: require('../../assets/salads.jpg'), id:'2'},
    {name:"Hotdog",image: require('../../assets/hotdog.jpg'), id:'3'},
    {name:"Chinese",image: require('../../assets/chinesefood.jpg'), id:'4'},
    {name:"Mexican",image: require('../../assets/mexicanfood.jpg'), id:'5'},
    {name:"Sea food",image: require('../../assets/seafood.jpg'), id:'6'},
    {name:"Drinks",image: require('../../assets/drinks.jpg'), id:'7'},
];

export const restaurantsData = [ 
{restaurantName: "Mc Donalds", farAway: "21.2",
businessAddress:"22 Bassie street, Midrand", images: require('../../assets/macdonalds.jpg'),
averageReview:4.9, numberOfReview:272,coordinates :{lat: -26.1888612, lng: 28.246325}, discount:10,deliveryTime:15,
collectTime:5, foodType:"Burgers, Wraps, Milkshakes...",
productData:[{name:"Hand cut chips", price:29.30,image: require('../../assets/handcutchips.jpg')},
{name:"Big Mac", price:50.80,image: require('../../assets/bigmac.jpg')},{name:"Chicken Burger",
price:70,image: require('../../assets/chickenburger.png'),}],
id:0},

{restaurantName: "KFC", farAway: "12.7",
businessAddress:"22 Bassie street, Midrand", images: require('../../assets/kfchome.jpg'),
averageReview:4.3, numberOfReview:306,coordinates :{lat: -26.1891648, lng: 28.2441808}, discount:20,deliveryTime:30,
collectTime:10, foodType:"Chicken, Chicken Wings, Street Wise...",
productData:[{name:"Chicken", price:169.80,image: require('../../assets/chicken.jpg')},
{name:"Chicken Wings", price:79.50,image: require('../../assets/chickenwings.jpg')},{name:"Street Wise",
price:29.90,image: require('../../assets/streetwise.png'),}],
id:1},

{restaurantName: "Steers", farAway: "5",
businessAddress:"17 Olivia Rd, Johannesburg", images: require('../../assets/steershome.jpg'),
averageReview:4.9, numberOfReview:1272,coordinates :{lat: -26.1886781, lng: 28.244879}, discount:12,deliveryTime:25,
collectTime:15, foodType:"Cheese Burger, Full Chicken, Pita Burgers...",
productData:[{name:"Cheese Burger", price:89.90,image: require('../../assets/cheeseburger.jpg')},
{name:"Full Chicken", price:149.90,image: require('../../assets/fullchicken.jpg')},{name:"Pita Burgers",
price:95.80,image: require('../../assets/pitaburgers.jpg'),}],
id:2},

{restaurantName: "Romans Pizza", farAway: "7",
businessAddress:"15 Atlasd Rd, Kempton Park", images: require('../../assets/romanspizza.jpg'),
averageReview:4.3, numberOfReview:700,coordinates :{lat: -26.1845336, lng: 28.2481691}, discount:null,deliveryTime:20,
collectTime:10, foodType:"Single Large Pizza, 2 Large Pizzas, Small Pizza...",
productData:[{name:"Single Large Pizza", price:69.90,image: require('../../assets/singlelargepizza.jpg')},
{name:"2 Large Pizzas", price:164.90,image: require('../../assets/2largepizzas.jpg')},{name:"Small Pizza",
price:29.90,image: require('../../assets/smallpizza.jpg'),}],
id:3},

]