import bcrypt from "bcrypt";

const data = {
    users : [
        {
            name: "Tiya",
            email: "123@456",
            password: bcrypt.hashSync("1234",8),
            isAdmin: true

        },
        {
            name: "Riya",
            email: "456@123",
            password: bcrypt.hashSync("4321",8),
            isAdmin: false

        }
    ],
    products: [
        {
            name : "Full Sleeves Red Tee",
            category : "Tops",
            brand : "Babyhug",
            img : "https://cdn.fcglcdn.com/brainbees/images/products/438x531/3629142a.jpg",
            rating : 4.5,
            numReviews : 10,
            des : "3 to 6 Months, round neck tee with back button closure for girls",
            price : "399",
            countInStock: 5
        },
        {
            name : "Navy Blue Winter Wear Tee",
            category : "Tops",
            brand : "Olio",
            img : "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8267698a.jpg",
            rating : 4.7,
            numReviews : 5,
            des : "2 to 3 Years, Snug round neck pullover tee for girls",
            price : "349",
            countInStock: 5
        },
        {
            name : "Red Checkered Tee",
            category : "Tops",
            brand : "Babyhug",
            img : "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8113273a.jpg",
            rating : 4.3,
            numReviews : 8,
            des : "9 to 12 Months, round neck top with pullover Style for girls",
            price : "399",
            countInStock: 5
        },
        {
            name : "Blue Printed Skirt",
            category : "Skirts",
            brand : "Ed-a-Mamma",
            img : "https://cdn.fcglcdn.com/brainbees/images/products/438x531/3767987a.jpg",
            rating : 4.9,
            numReviews : 3,
            des : "6-7 Y, Playfully Stylish Chambray Skorts With Beach-Inspired Print For Girls",
            price : "549",
            countInStock: 5
        },
        {
            name : "Yellow Polka Dotted Skirt",
            category : "Skirts",
            brand : "Kookie",
            img : "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8154847a.jpg",
            rating : 4.2,
            numReviews : 6,
            des : "5 to 6 Years, stylish elasticated waist skirt with pockets for girls",
            price : "749",
            countInStock: 5
        },
        {
            name : "Red Denim Skirt",
            category : "Skirts",
            brand : "Babyhug",
            img : "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2388959a.jpg",
            rating : 4.8,
            numReviews : 8,
            des : "2 to 3 Years, stylish denim skirt with 5 pockets for girls",
            price : "510",
            countInStock: 5
        },
        {
            name : "Red Denim Skirt",
            category : "Skirts",
            brand : "Babyhug",
            img : "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2388959a.jpg",
            rating : 4.8,
            numReviews : 8,
            des : "2 to 3 Years, stylish denim skirt with 5 pockets for girls",
            price : "510",
            countInStock: 5
        },
        {
            name : "Red Denim Skirt",
            category : "Skirts",
            brand : "Babyhug",
            img : "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2388959a.jpg",
            rating : 4.8,
            numReviews : 8,
            des : "2 to 3 Years, stylish denim skirt with 5 pockets for girls",
            price : "510",
            countInStock: 5
        }
    ]
}

export default data;