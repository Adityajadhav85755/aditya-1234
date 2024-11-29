import React, { useState } from 'react'
import Inventory from './components/Inventory'
// import Dropdown from './components/Dropdown'
import shifting from './assets/images/shifting.jpg'
// import CustomerInventory from './components/CustomerInventory'
export let ListContext=React.createContext()

export default function Household() {
//     let inventoryItem = [
//     {
//         "mainItem": "Furniture",
//         "subItem": [
//             {
//                 "Item": "Sofa",
//                 "options": [
//                     { "name": "1 Seater Sofa", "quantity": 0 },
//                     { "name": "2 Seater Sofa", "quantity": 0 },
//                     { "name": "3 Seater Sofa", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Bed",
//                 "options": [
//                     { "name": "King Bed", "quantity": 0 },
//                     { "name": "Single Bed", "quantity": 0 },
//                     { "name": "Double Bed", "quantity": 0 },
//                     { "name": "Queen Bed", "quantity": 0 },
//                     { "name": "Bunk Bed", "quantity": 0 },
//                     { "name": "Deewan", "quantity": 0 },
//                     { "name": "Metal Bed Frame", "quantity": 0 },
//                     { "name": "Roll Away Bed", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Mattress",
//                 "options": [
//                     { "name": "Mattress", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Futon",
//                 "options": [
//                     { "name": "Futon", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Craddle",
//                 "options": [
//                     { "name": "Craddle", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Table",
//                 "options": [
//                     { "name": "Round Table", "quantity": 0 },
//                     { "name": "Dining Table with 4 Chairs", "quantity": 0 },
//                     { "name": "Dining Table with 6 Chairs", "quantity": 0 },
//                     { "name": "Dining Table with 8 Chairs", "quantity": 0 },
//                     { "name": "Centre Table", "quantity": 0 },
//                     { "name": "Folding Table", "quantity": 0 },
//                     { "name": "Coffee Table Small", "quantity": 0 },
//                     { "name": "Console Table", "quantity": 0 },
//                     { "name": "Coffee Table Large", "quantity": 0 },
//                     { "name": "Study / Computer Table", "quantity": 0 },
//                     { "name": "Bed Side Table", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Chair",
//                 "options": [
//                     { "name": "Chairs", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Wardrobe",
//                 "options": [
//                     { "name": "Wardrobe", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Bookshelf",
//                 "options": [
//                     { "name": "Book Shelf", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Shoe Rack",
//                 "options": [
//                     { "name": "Shoe Rack", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "TV Cabinet",
//                 "options": [
//                     { "name": "TV Cabinet", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Temple",
//                 "options": [
//                     { "name": "Temple", "quantity": 0 }
//                 ],
//                 "open": false
//             }
//         ],
//         "active": true
//     },
//     {
//         "mainItem": "Other Large Items",
//         "subItem": [
//             {
//                 "Item": "Water Heater",
//                 "options": [
//                     { "name": "Water Heater", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Iron Board",
//                 "options": [
//                     { "name": "Iron Board", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Treadmill",
//                 "options": [
//                     { "name": "Treadmill", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Exercise Book",
//                 "options": [
//                     { "name": "Exercise Book", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Benches",
//                 "options": [
//                     { "name": "Benches", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Barbells",
//                 "options": [
//                     { "name": "Barbells", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Cricket Kit",
//                 "options": [
//                     { "name": "Cricket Kit", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Dumbbells",
//                 "options": [
//                     { "name": "Dumbbells", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Pool Table",
//                 "options": [
//                     { "name": "Pool Table", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Golf Kit",
//                 "options": [
//                     { "name": "Golf Kit", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Guitar",
//                 "options": [
//                     { "name": "Guitar", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Tabla",
//                 "options": [
//                     { "name": "Tabla", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Piano",
//                 "options": [
//                     { "name": "Piano", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Casio",
//                 "options": [
//                     { "name": "Casio", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Harmonium",
//                 "options": [
//                     { "name": "Harmonium", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Jhoomer / Chandelier",
//                 "options": [
//                     { "name": "Jhoomer / Chandelier", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Tube Lights",
//                 "options": [
//                     { "name": "Tube Lights", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Paintings",
//                 "options": [
//                     { "name": "Paintings", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Sewing Machine",
//                 "options": [
//                     { "name": "Sewing Machine", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Kids Tricycle",
//                 "options": [
//                     { "name": "Kids Tricycle", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Kids Bicycle",
//                 "options": [
//                     { "name": "Kids Bicycle", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Trolley / Suitcase",
//                 "options": [
//                     { "name": "Trolley / Suitcase", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Bi Cycle",
//                 "options": [
//                     { "name": "Bi Cycle", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Iron / Wooden Trunk (Small)",
//                 "options": [
//                     { "name": "Iron / Wooden Trunk Small", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Iron / Wooden Trunk (Medium)",
//                 "options": [
//                     { "name": "Iron / Wooden Trunk Medium", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Iron / Wooden Trunk (Big)",
//                 "options": [
//                     { "name": "Iron / Wooden Trunk Big", "quantity": 0 }
//                 ],
//                 "open": false
//             }
//         ],
//         "active": false
//     },
//     {
//         "mainItem": "Vehicles",
//         "subItem": [
//             {
//                 "Item": "Scooter",
//                 "options": [
//                     { "name": "Scooty / Scooter", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Bike",
//                 "options": [
//                     { "name": "Bike", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Premium / Sports Bike",
//                 "options": [
//                     { "name": "Premium / Sports Bike", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Car",
//                 "options": [
//                     { "name": "Hatchback Car", "quantity": 0 },
//                     { "name": "Sedan Car", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "Jeep",
//                 "options": [
//                     { "name": "Jeep", "quantity": 0 }
//                 ],
//                 "open": false
//             },
//             {
//                 "Item": "SUV / MUV",
//                 "options": [
//                     { "name": "SUV / MUV", "quantity": 0 }
//                 ],
//                 "open": false
//             }
//         ],
//         "active": false
//     }
// ]


let inventoryItem=[
    {
        "mainItem": "Furniture",
        "subItem": [
            {
                "Item": "Table",
                "options": [
                    { "name": "Centre Table", "quantity": 0 },
                    { "name": "Folding Table", "quantity": 0 },
                    { "name": "Coffee Table Small", "quantity": 0 },
                    { "name": "Console Table", "quantity": 0 },
                    { "name": "Coffee Table Large", "quantity": 0 },
                    { "name": "Study/Computer Table", "quantity": 0 },
                    { "name": "Bed Side Table", "quantity": 0 },
                    { "name": "Dinner table 4", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Bed",
                "options": [
                    { "name": "Baby Wooden Bed", "quantity": 0 },
                    { "name": "Single Bed Mattress-Foldable", "quantity": 0 },
                    { "name": "Single Bed Mattress-Non Foldable", "quantity": 0 },
                    { "name": "Double Bed-Dismantlable", "quantity": 0 },
                    { "name": "Cradle-Dismantleable", "quantity": 0 },
                    { "name": "Bunk Bed-Dismantieable", "quantity": 0 },
                    { "name": "Single bed storage dismantiable", "quantity": 0 },
                    { "name": "Single bed non storage dismantiable", "quantity": 0 },
                    { "name": "Single Bed Mattress-Thick", "quantity": 0 },
                    { "name": "Single Bed Mattress", "quantity": 0 },
                    { "name": "Double Bed Mattress-Foldable", "quantity": 0 },
                    { "name": "Double Bed Mattress Non Foldable", "quantity": 0 },
                    { "name": "Diwan cum Bed", "quantity": 0 },
                    { "name": "Queen Size Bed-Without Storage", "quantity": 0 },
                    { "name": "King Size Bed-Without Storage", "quantity": 0 },
                    { "name": "Queen Size Bed With Storage", "quantity": 0 },
                    { "name": "Single Bed-Foldable", "quantity": 0 },
                    { "name": "King Size Bed-With Storage", "quantity": 0 },
                    { "name": "Single Bed-With Storage", "quantity": 0 },
                    { "name": "Single Bed Without Storage", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Chair",
                "options": [
                    { "name": "Wooden Chair", "quantity": 0 },
                    { "name": "Plastic Chair", "quantity": 0 },
                    { "name": "High Chair", "quantity": 0 },
                    { "name": "Bean Bag/Pouffe", "quantity": 0 },
                    { "name": "Study Chair", "quantity": 0 },
                    { "name": "Bench", "quantity": 0 },
                    { "name": "Rocking Chair", "quantity": 0 },
                    { "name": "Stool", "quantity": 0 },
                    { "name": "Settee", "quantity": 0 },
                    { "name": "Folding Chair", "quantity": 0 },
                    { "name": "Arm Chair", "quantity": 0 },
                    { "name": "Office Chair", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Cabinet & Storage",
                "options": [
                    { "name": "Chest of Drawers Medium", "quantity": 0 },
                    { "name": "Prayer Unit/Mandir", "quantity": 0 },
                    { "name": "Display Cabinet Large", "quantity": 0 },
                    { "name": "Chest of Drawers Small", "quantity": 0 },
                    { "name": "Book Shelf Large", "quantity": 0 },
                    { "name": "Steel Almirah Medium", "quantity": 0 },
                    { "name": "Book Shelf Small", "quantity": 0 },
                    { "name": "Trunk", "quantity": 0 },
                    { "name": "Chest of Drawers Large", "quantity": 0 },
                    { "name": "Wall Shelf", "quantity": 0 },
                    { "name": "Shoe Rack", "quantity": 0 },
                    { "name": "Wardrobe Large Dismantlable", "quantity": 0 },
                    { "name": "Wardrobe Large Non dismantlable", "quantity": 0 },
                    { "name": "Wardrobe Medium Dismantlable", "quantity": 0 },
                    { "name": "Wardrobe Medium Non dismantlable", "quantity": 0 },
                    { "name": "Safe Small", "quantity": 0 },
                    { "name": "Entertainment/TV Unit", "quantity": 0 },
                    { "name": "Single door wardrobe", "quantity": 0 },
                    { "name": "Dressing Table", "quantity": 0 },
                    { "name": "Iron Locker Small", "quantity": 0 },
                    { "name": "Display Cabinet Small", "quantity": 0 },
                    { "name": "Book Shelf Medium", "quantity": 0 },
                    { "name": "TV Table", "quantity": 0 },
                    { "name": "Plastic Cupboard", "quantity": 0 },
                    { "name": "Sliding Door Wardrobe", "quantity": 0 },
                    { "name": "Shoe Rack Wooden", "quantity": 0 },
                    { "name": "Shoe Rack Metal", "quantity": 0 },
                    { "name": "Five Door Wardrobe", "quantity": 0 },
                    { "name": "Four Door Wardrobe", "quantity": 0 },
                    { "name": "Triple Door Wardrobe", "quantity": 0 },
                    { "name": "Double Door Wardrobe", "quantity": 0 },
                    { "name": "Single Door Wardrobe", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Kitchen Furniture",
                "options": [
                    { "name": "Side Table", "quantity": 0 },
                    { "name": "Serving Trolley", "quantity": 0 },
                    { "name": "Kitchen Rack", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Dining",
                "options": [
                    { "name": "Marble Top Dining Table Only - 8 Seater", "quantity": 0 },
                    { "name": "Marble Top Dining Table Only - 6 Seater", "quantity": 0 },
                    { "name": "Marble Top Dining Table Only - 4 Seater", "quantity": 0 },
                    { "name": "Dining Chair", "quantity": 0 },
                    { "name": "Dining Table Only - 8 Seater", "quantity": 0 },
                    { "name": "Glass Top Dining Table Only - 6 Seater", "quantity": 0 },
                    { "name": "Glass Top Dining Table Only - 4 Seater", "quantity": 0 },
                    { "name": "Glass Top Dining Table Only - 8 Seater", "quantity": 0 },
                    { "name": "Dining Table Only - 6 Seater", "quantity": 0 },
                    { "name": "Dining Table Only - 4 Seater", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Sofa",
                "options": [
                    { "name": "3 Seater Sofa - L Shape", "quantity": 0 },
                    { "name": "4 Seater Sofa", "quantity": 0 },
                    { "name": "3 Seater Sofa", "quantity": 0 },
                    { "name": "2 Seater Sofa", "quantity": 0 },
                    { "name": "1 Seater Sofa", "quantity": 0 },
                    { "name": "Recliner Sofa 1-seater", "quantity": 0 },
                    { "name": "Recliner Sofa 2-seater", "quantity": 0 },
                    { "name": "Recliner Sofa 3-seater", "quantity": 0 },
                    { "name": "5 Seater Sofa - L Shape", "quantity": 0 },
                    { "name": "1 Seater Sofa - Leather", "quantity": 0 },
                    { "name": "7 Seater Sofa - L Shape", "quantity": 0 },
                    { "name": "3 Seater Sofa - Leather", "quantity": 0 },
                    { "name": "2 Seater Sofa - Leather", "quantity": 0 },
                    { "name": "Sofa cum Bed", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Bar Furniture",
                "options": [
                    { "name": "Bar Cabinet Large", "quantity": 0 },
                    { "name": "Bar Cabinet", "quantity": 0 },
                    { "name": "Bar Unit", "quantity": 0 },
                    { "name": "Bar Trolley", "quantity": 0 },
                    { "name": "Bar Chair / Stool", "quantity": 0 },
                    { "name": "Wine Rack", "quantity": 0 }
                ],
                "open": false
            }
        ],
        "active":true,
    },
    {
        "mainItem": "Small Appliances",
        "subItem": [
            {
                "Item": "Kitchen Appliance",
                "options": [
                    { "name": "Holds 2-3 pressure cookers (5 litre) or equivalent", "quantity": 0 },
                    { "name": "Dish Washer", "quantity": 0 },
                    { "name": "Barbeque Grill Large", "quantity": 0 },
                    { "name": "Barbeque Grill Small", "quantity": 0 },
                    { "name": "Water Purifiers/RO unit", "quantity": 0 },
                    { "name": "Microwave Oven & OTG", "quantity": 0 },
                    { "name": "Electric Tandoor", "quantity": 0 },
                    { "name": "Mixer/Grinder", "quantity": 0 },
                    { "name": "Domestic flour mill/Atta chakki", "quantity": 0 },
                    { "name": "Hood Chimney", "quantity": 0 },
                    { "name": "Cooking range", "quantity": 0 },
                    { "name": "Wet grinder", "quantity": 0 },
                    { "name": "Food Processor", "quantity": 0 },
                    { "name": "Air Fryer", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "General Appliance",
                "options": [
                    { "name": "Garment Steamer", "quantity": 0 },
                    { "name": "Speaker", "quantity": 0 },
                    { "name": "Vacuum Cleaner", "quantity": 0 },
                    { "name": "Instant Geyser", "quantity": 0 },
                    { "name": "Music/Video System", "quantity": 0 },
                    { "name": "Sewing Machine", "quantity": 0 },
                    { "name": "Air Cooler", "quantity": 0 },
                    { "name": "Air Purifier", "quantity": 0 },
                    { "name": "Ceiling/Table Fan", "quantity": 0 },
                    { "name": "Pedestal / Wall Fan", "quantity": 0 },
                    { "name": "Voltage Stabilizer", "quantity": 0 },
                    { "name": "Radiator Heater", "quantity": 0 },
                    { "name": "UPS", "quantity": 0 },
                    { "name": "Inverter - With Battery", "quantity": 0 },
                    { "name": "DTH", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Computer System",
                "options": [
                    { "name": "Laptop", "quantity": 0 },
                    { "name": "Printer", "quantity": 0 },
                    { "name": "CPU", "quantity": 0 }
                ],
                "open": false
            }
        ],
        "active": false
    },
    {
        "mainItem": "Large Appliances",
        "subItem": [
            {
                "Item": "Refrigerator",
                "options": [
                    { "name": "Fridge Single Door", "quantity": 0 },
                    { "name": "Fridge 300-399 lts", "quantity": 0 },
                    { "name": "Fridge 400-499 lts", "quantity": 0 },
                    { "name": "Fridge Above 500 lts", "quantity": 0 },
                    { "name": "Fridge Upto 299 lts", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Air Conditioner",
                "options": [
                    { "name": "Window Air Conditioner", "quantity": 0 },
                    { "name": "Split Air Conditioner", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Washing Machine",
                "options": [
                    { "name": "Washing Machine 8kg+", "quantity": 0 },
                    { "name": "Washing Machine 7-7.9kg", "quantity": 0 },
                    { "name": "Dish washer", "quantity": 0 },
                    { "name": "Dryer", "quantity": 0 },
                    { "name": "Washing Machine <6.9kg", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Television",
                "options": [
                    { "name": "LCD/LED 65\" & above", "quantity": 0 },
                    { "name": "LCD/LED 52\" - 65", "quantity": 0 },
                    { "name": "LCD/LED 40\" & Below", "quantity": 0 },
                    { "name": "Regular tv (old model)", "quantity": 0 },
                    { "name": "LCD/LED 52\" & above", "quantity": 0 },
                    { "name": "LCD/LED 42\" - 50\"", "quantity": 0 }
                ],
                "open": false
            }
        ],
        "active": false
    },

    {
        "mainItem": "Smaller / Decoration Items",
        "subItem": [
            {
                "Item": "Carton",
                "options": [
                    { "name": "Small Carton (Cabin baggage equivalent)", "quantity": 0 },
                    { "name": "Medium Carton (1.5x Cabin baggage)", "quantity": 0 },
                    { "name": "Large Carton (2x Cabin baggage)", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Decorative Item",
                "options": [
                    { "name": "Pooja Lamp", "quantity": 0 },
                    { "name": "Painting / Photo Large", "quantity": 0 },
                    { "name": "Carpet Rolled", "quantity": 0 },
                    { "name": "Statue Large", "quantity": 0 },
                    { "name": "Painting / Photo Medium", "quantity": 0 },
                    { "name": "Clock / Time Piece", "quantity": 0 },
                    { "name": "Statue Small", "quantity": 0 },
                    { "name": "Indoor Fountain Large", "quantity": 0 },
                    { "name": "Indoor Fountain Small", "quantity": 0 },
                    { "name": "Mirror", "quantity": 0 },
                    { "name": "Statue Medium", "quantity": 0 },
                    { "name": "Wall Frames Large", "quantity": 0 },
                    { "name": "Vase Small", "quantity": 0 },
                    { "name": "Painting / Photo Small", "quantity": 0 },
                    { "name": "Aquarium Large", "quantity": 0 },
                    { "name": "Aquarium Small", "quantity": 0 },
                    { "name": "Wall Frames Medium", "quantity": 0 },
                    { "name": "Wall Frames Small", "quantity": 0 },
                    { "name": "Vase Large", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Toys",
                "options": [
                    { "name": "Carrom Board", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Suitcase",
                "options": [
                    { "name": "Suitcase Small", "quantity": 0 },
                    { "name": "Suitcase Medium", "quantity": 0 },
                    { "name": "Suitcase Large", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "House Keeping",
                "options": [
                    { "name": "Water Drum", "quantity": 0 },
                    { "name": "Storage/Laundry Basket", "quantity": 0 },
                    { "name": "Ironing Board Foldable", "quantity": 0 },
                    { "name": "Bucket / Tub / Dustbin", "quantity": 0 },
                    { "name": "Foldable Clothes Dryer", "quantity": 0 },
                    { "name": "Broom / Mop", "quantity": 0 },
                    { "name": "Tool Box", "quantity": 0 },
                    { "name": "Ladder", "quantity": 0 },
                    { "name": "Weighing Scale", "quantity": 0 },
                    { "name": "Step Ladder", "quantity": 0 }
                ],
                "open": false
            }
        ],
        "active": false
    },
    {
        "mainItem": "Kitchen Item",
        "subItem": [
            {
                "Item": "Kitchen Metal Rack",
                "options": [
                    { "name": "Kitchen Metal Rack", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "LPG Gas Cylinder",
                "options": [
                    { "name": "LPG Gas Cylinder", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Gas Stove / Hob",
                "options": [
                    { "name": "Gas Stove / Hob", "quantity": 0 }
                ],
                "open": false
            }
        ],
        "active": false
    },

    {
        "mainItem": "Vehicle",
        "subItem": [
            {
                "Item": "Car",
                "options": [
                    { "name": "Premium Hatchback Car", "quantity": 0 },
                    { "name": "Premium Sedan Car", "quantity": 0 },
                    { "name": "SUV Car", "quantity": 0 },
                    { "name": "Hatchback Car", "quantity": 0 },
                    { "name": "Sedan Car", "quantity": 0 },
                    { "name": "Luxury Car", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Bike",
                "options": [
                    { "name": "Bike - upto 350 cc", "quantity": 0 },
                    { "name": "Bike - upto 200 cc", "quantity": 0 },
                    { "name": "Luxury Bike", "quantity": 0 },
                    { "name": "Scooty / Scooter", "quantity": 0 }
                ],
                "open": false
            }
        ],
        "active": false
    },

    {
        "mainItem": "Miscellaneous",
        "subItem": [
            {
                "Item": "Kids Vehicle",
                "options": [
                    { "name": "Kids Three Wheeler", "quantity": 0 },
                    { "name": "Kids Four Wheeler", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Gym equipment",
                "options": [
                    { "name": "Tread Mill Foldable", "quantity": 0 },
                    { "name": "Exercise Cycle", "quantity": 0 },
                    { "name": "Weight/Dumbell", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Fire Extinguisher",
                "options": [
                    { "name": "Fire Extinguisher Small", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Bicycle",
                "options": [
                    { "name": "Bicycle Adult", "quantity": 0 },
                    { "name": "Bicycle Kids", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Musical Instruments",
                "options": [
                    { "name": "Guitar", "quantity": 0 },
                    { "name": "Synthesizer", "quantity": 0 },
                    { "name": "Drum Set - 5 piece", "quantity": 0 },
                    { "name": "Harmonium", "quantity": 0 },
                    { "name": "Table", "quantity": 0 },
                    { "name": "Electronic Keyboard", "quantity": 0 },
                    { "name": "Grand Piano", "quantity": 0 },
                    { "name": "Piano", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Flower Pots",
                "options": [
                    { "name": "Big pots", "quantity": 0 },
                    { "name": "Small pots", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Swing",
                "options": [
                    { "name": "Baby Swing Large", "quantity": 0 },
                    { "name": "Baby Swing Small", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Lamp & Lighting",
                "options": [
                    { "name": "Wall/Ceiling Light", "quantity": 0 },
                    { "name": "Floor/table lamp", "quantity": 0 }
                ],
                "open": false
            },
            {
                "Item": "Others",
                "options": [
                    { "name": "Gunny Bag", "quantity": 0 }
                ],
                "open": false
            }
        ],
        "active": false
    },
    
    
    
    
    
    
]





let [customerList,setCustomerList]=useState([]);
let [customerInventoryDisplay,setcustomerInventoryDisplay]=useState(false);
  return (

    <div style={{backgroundImage:`url(${shifting})`}} className='h-screen w-full flex justify-center items-center bg-center bg-cover  '>
    {/* <div className='h-screen w-full bg-gradient-to-b from-blue-100 to-primary flex justify-center items-center '> */}
      <ListContext.Provider value={[customerList,setCustomerList,customerInventoryDisplay,setcustomerInventoryDisplay]}>
        <Inventory inventoryItem={inventoryItem} context={ListContext}/>
      </ListContext.Provider>
    </div>
  )
}
