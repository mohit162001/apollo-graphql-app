exports.products  = [{
    id: "1",
    name:'Nexon',
    image: '/image/product1.jpeg',
    description: 'A 5 star rated Mini SUV',
    quantity:5,
    price: 10.3,
    isAvailable: true,
    categoryID:"d423434-54366-21332",
    reviewId: "9801-3567-7654"
},
{
    id: "2",
    name:'Harrier',
    image: '/image/product2.jpeg',
    description: 'A 5 star rated SUV',
    quantity:2,
    price: 17.5,
    isAvailable: false,
    categoryID:"e00344-344241-45235",
    reviewId: "3442-9021-2134"
}, 
{
    id: "3",
    name:'Saffari',
    image: '/image/product3.jpeg',
    description: 'A 5 star rated SUV',
    quantity:3,
    price: 20.8,
    isAvailable: false,
    categoryID:"e00344-344241-45235",
    reviewId: "7832-9886-5341"
},
{
    id: "4",
    name:'Ciaz',
    image: '/image/product4.jpeg',
    description: "Highly in comfert sedan",
    quantity:10,
    price: 8.4,
    isAvailable: true,
    categoryID:"f434334-43244-76887",
    reviewId: "2356-5665-3244"
},
{
    id: "5",
    name:'Verna',
    image: '/image/product5.jpeg',
    description: 'A classic  sedan',
    quantity:10,
    price: 9.8,
    isAvailable: true,
    categoryID:"f434334-43244-76887",
    reviewId: "1001-3567-7654"
},
{
    id: "6",
    name:'Venu',
    image: '/image/product6.jpeg',
    description: 'Hyundai best Mini SUV',
    quantity:10,
    price: 9.2,
    isAvailable: true,
    categoryID:"d423434-54366-21332",
    reviewId: "5342-9021-2134"
},
{
    id: "7",
    name:'Elentra',
    image: '/image/product7.jpeg',
    description: 'A nightlove sedan',
    quantity:10,
    price: 11.3,
    isAvailable: false,
    categoryID:"f434334-43244-76887",
    reviewId: "1232-9886-5341"
},
{
    id: "8",
    name:'Scarpio',
    image: '/image/product8.jpeg',
    description: 'A Mahinra product',
    quantity:10,
    price: 12.8,
    isAvailable: true,
    categoryID:"e00344-344241-45235",
    reviewId: "3456-5665-3244"
},
]


exports.categories = [
    {
        id:'e00344-344241-45235',
        type: 'SUV'
    },
    {
        id:'d423434-54366-21332',
        type: 'MSUV'
    },
    {
        id:'f434334-43244-76887',
        type: 'SEDAN'
    }
]

exports.reviews = [
    {
        id: "3456-5665-3244",
        name: "Jhon",
        rating: 4,
        date: "10/02/2024",
        comment: "Nice features and speed",
        productId: "1"
    },
    {
        id:"1232-9886-5341",
        name: "Jack",
        rating: 4,
        date: "23/05/2024",
        comment: "Wooo amaizing",
        productId: "1"
    },
    {
        id:"5342-9021-2134",
        name: "Julie",
        rating: 3,
        date: "12/12/2024",
        comment: "Give it a try",
        productId: "2"
    },
    {
        id:"1001-3567-7654",
        name: "Alice",
        rating: 5,
        date: "20/1/2024",
        comment: "Gonna love this....mindblowing",
        productId: "3"
    },
    {
        id: "2356-5665-3244",
        name: "Anthony",
        rating: 1,
        date: "1/08/2024",
        comment: "Good mileage but bad features",
        productId: "4"
    },
    {
        id:"7832-9886-5341",
        name: "Max",
        rating: 2,
        date: "16/03/2024",
        comment: "Not recommend this",
        productId: "5"
    },
    {
        id:"3442-9021-2134",
        name: "Charlie",
        rating: 5,
        date: "25/05/2024",
        comment: "You goining to love this one",
        productId: "6"
    },
    {
        id:"9801-3567-7654",
        name: "Dustin",
        rating: 3,
        date: "07/09/2024",
        comment: "Nice car with awsome features",
        productId: "7"
    },
    {
        id:"4301-3567-7654",
        name: "Dustin",
        rating: 3,
        date: "27/10/2024",
        comment: "Nice and awsome ",
        productId: "7"
    },
    {
        id:"6701-3567-7654",
        name: "Berline",
        rating: 1,
        date: "17/09/2024",
        comment: "Bad features",
        productId: "3"
    },

]