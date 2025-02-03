import React, { useState, createContext } from 'react';
import Inventory from './components/Inventory';
import shifting from './assets/images/shifting.jpg';
import PopupImage from './components/PopupImage';
export let ListContext = createContext();

export default function Household() {

  const importImages = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((key) => {
      const imageName = key.replace('./', '').split('.')[0];
      images[imageName.split('/')[1]] = requireContext(key); // Associate image with the name
    });
    return images;
  };

  const [PopupImageSrc, setPopupImageSrc] = useState(null);

  const openPopup = (image) => {
    setPopupImageSrc(image);
  };

  const closePopup = () => {
    setPopupImageSrc(null);
  };

  const Furnitureimg = importImages(
    require.context('./assets/Inventory/Household/Furniture', true, /\.(png|jpe?g|svg)$/)
  );

  const SmallApplianceImage = importImages(
    require.context('./assets/Inventory/Household/SmallAppliances', true, /\.(png|jpe?g|svg)$/)
  );

  const LargeApplianceImage = importImages(
    require.context('./assets/Inventory/Household/LargeAppliances', true, /\.(png|jpe?g|svg)$/)
  );

  const VehicleImage = importImages(
    require.context('./assets/Inventory/Household/Vehicle', true, /\.(png|jpe?g|svg)$/)
  );

  const DecorationImage = importImages(
    require.context('./assets/Inventory/Household/SmallDecorationItem', true, /\.(png|jpe?g|svg)$/)
  );

  const Micellaneous = importImages(
    require.context('./assets/Inventory/Household/Miscellaneous', true, /\.(png|jpe?g|svg)$/)
  );

  let inventoryItem=[
    {
        "mainItem": "Furniture",
        "subItem": [
            {
                "Item": "Table",
                "options": [
                    { "name": "Centre Table", "quantity": 0, src:Furnitureimg["CentreTable813CFT"] },
                    { "name": "Folding Table", "quantity": 0, src:Furnitureimg["FoldingTable"] },
                    { "name": "Coffee Table Small", "quantity": 0, src:Furnitureimg["CoffeeTableSmall"] },
                    { "name": "Console Table", "quantity": 0, src:Furnitureimg["ConsoleTable"] },
                    { "name": "Coffee Table Large", "quantity": 0, src:Furnitureimg["CoffeeTableLarge"] },
                    { "name": "Study/Computer Table", "quantity": 0, src:Furnitureimg["StudyComputerTable"] },
                    { "name": "Bed Side Table", "quantity": 0, src:Furnitureimg["BedSideTable"] },
                    { "name": "Dinner table 4", "quantity": 0, src:Furnitureimg["Dinnertable4"]}
                ],
                "open": false
            },
            {
                "Item": "Bed",
                "options": [
                    { "name": "Baby Wooden Bed", "quantity": 0, src:Furnitureimg["Baby Wooden Bed"] },
                    { "name": "Single Bed Mattress-Foldable", "quantity": 0, src:Furnitureimg["Single Bed Mattress Foldable"] },
                    { "name": "Single Bed Mattress-Non Foldable", "quantity": 0, src:Furnitureimg["Single Bed Mattress Non Foldable"] },
                    { "name": "Double Bed-Dismantlable", "quantity": 0, src:Furnitureimg["Double Bed Dismantlable"] },
                    { "name": "Cradle-Dismantleable", "quantity": 0, src:Furnitureimg["Cradle Dismantlable"] },
                    { "name": "Bunk Bed-Dismantieable", "quantity": 0, src:Furnitureimg["Bunk Bed Dismantieable"] },
                    { "name": "Single bed storage dismantiable", "quantity": 0, src:Furnitureimg["single bed storage dismantlable"] },
                    { "name": "Single bed non storage dismantiable", "quantity": 0, src:Furnitureimg["Single bed non storage dismantiable"] },
                    { "name": "Single Bed Mattress-Thick", "quantity": 0, src:Furnitureimg["Single Bed Mattress Thick"] },
                    { "name": "Single Bed Mattress", "quantity": 0, src:Furnitureimg["Single Bed Mattress"] },
                    { "name": "Double Bed Mattress-Foldable", "quantity": 0, src:Furnitureimg["Double Bed Mattress Foldable"] },
                    { "name": "Double Bed Mattress Non Foldable", "quantity": 0, src:Furnitureimg["Double Bed Mattress Non Foldable"] },
                    { "name": "Diwan cum Bed", "quantity": 0, src:Furnitureimg["Diwan cum Bed"] },
                    { "name": "Queen Size Bed-Without Storage", "quantity": 0, src:Furnitureimg["Queen Size Bed Without Storage"] },
                    { "name": "King Size Bed-Without Storage", "quantity": 0, src:Furnitureimg["King Size Bed Without Storage"] },
                    { "name": "Queen Size Bed With Storage", "quantity": 0, src:Furnitureimg["Queen Size Bed With Storage"] },
                    { "name": "Single Bed-Foldable", "quantity": 0, src:Furnitureimg["Single Bed Foldable"] },
                    { "name": "King Size Bed-With Storage", "quantity": 0, src:Furnitureimg["King Size Bed With Storage"] },
                    { "name": "Single Bed-With Storage", "quantity": 0, src:Furnitureimg["Single Bed With Storage"] },
                    { "name": "Single Bed-Without Storage", "quantity": 0, src:Furnitureimg["King Size Bed Without Storage"] }
                ],
                "open": false
            },
            {
                "Item": "Chair",
                "options": [
                    { "name": "Wooden Chair", "quantity": 0, src:Furnitureimg["woodenchair"]},
                    { "name": "Plastic Chair", "quantity": 0, src:Furnitureimg["PLASTIC CHAIR"] },
                    { "name": "High Chair", "quantity": 0, src:Furnitureimg["HIGH CHAIR"] },
                    { "name": "Bean Bag/Pouffe", "quantity": 0, src:Furnitureimg["BEAN BAG"] },
                    { "name": "Study Chair", "quantity": 0, src:Furnitureimg["study chair"] },
                    { "name": "Bench", "quantity": 0, src:Furnitureimg["BENCH BAG"] },
                    { "name": "Rocking Chair", "quantity": 0, src:Furnitureimg["ROCKING CHAIR"] },
                    { "name": "Stool", "quantity": 0, src:Furnitureimg["STOOL"] },
                    { "name": "Settee", "quantity": 0, src:Furnitureimg["SETEE"] },
                    { "name": "Folding Chair", "quantity": 0, src:Furnitureimg["FOLDING CHAIR"] },
                    { "name": "Arm Chair", "quantity": 0, src:Furnitureimg["ARM CHAIR"] },
                    { "name": "Office Chair", "quantity": 0, src:Furnitureimg["OFFICEE CHAIR"] }
                ],
                "open": false
            },
            {
                "Item": "Cabinet & Storage",
                "options": [
                    { "name": "Chest of Drawers Medium", "quantity": 0, src:Furnitureimg["chest drawer"] }, 
                    { "name": "Prayer Unit/Mandir", "quantity": 0, src:Furnitureimg["mandir"] },
                    { "name": "Display Cabinet Large", "quantity": 0, src:Furnitureimg["display cabinet large"] },
                    { "name": "Chest of Drawers Small", "quantity": 0, src:Furnitureimg["chest of drawers small"] },
                    { "name": "Book Shelf Large", "quantity": 0, src:Furnitureimg["book shelf large"] },
                    { "name": "Steel Almirah Medium", "quantity": 0, src:Furnitureimg["steel almari"] },
                    { "name": "Book Shelf Small", "quantity": 0, src:Furnitureimg["book shelf small"] },
                    { "name": "Trunk", "quantity": 0, src:Furnitureimg["trunk"] },
                    { "name": "Chest of Drawers Large", "quantity": 0, src:Furnitureimg["chestofdrawers"] },
                    { "name": "Wall Shelf", "quantity": 0, src:Furnitureimg["wall shelf"] },
                    { "name": "Shoe Rack", "quantity": 0, src:Furnitureimg["shoe rack metal"] },
                    { "name": "Wardrobe Large Dismantlable", "quantity": 0, src:Furnitureimg["Wardrobe-large dismantable"] },
                    { "name": "Wardrobe Large Non dismantlable", "quantity": 0, src:Furnitureimg["wardrobe large non dismantable"] },
                    { "name": "Wardrobe Medium Dismantlable", "quantity": 0, src:Furnitureimg["Wardrobe-medium dismantable"] },
                    { "name": "Wardrobe Medium Non dismantlable", "quantity": 0, src:Furnitureimg["wardrobe medium non dismantable"] },
                    { "name": "Safe Small", "quantity": 0, src:Furnitureimg["safe small"] },
                    { "name": "Entertainment/TV Unit", "quantity": 0, src:Furnitureimg["entertainment unit"] },
                    { "name": "Single door wardrobe", "quantity": 0, src:Furnitureimg["single door wardrobe"] },
                    { "name": "Dressing Table", "quantity": 0, src:Furnitureimg["dressing table"] },
                    { "name": "Iron Locker Small", "quantity": 0, src:Furnitureimg["iron locker small"] },
                    { "name": "Display Cabinet Small", "quantity": 0, src:Furnitureimg["display cabinet small"] },
                    { "name": "Book Shelf Medium", "quantity": 0, src:Furnitureimg["bookshelfmedium"] },
                    { "name": "TV Table", "quantity": 0, src:Furnitureimg["tv cABLE"] },
                    { "name": "Plastic Cupboard", "quantity": 0, src:Furnitureimg["plastic cupboard"] },
                    { "name": "Sliding Door Wardrobe", "quantity": 0, src:Furnitureimg["sliding door wardrobe"]},
                    { "name": "Shoe Rack Wooden", "quantity": 0, src:Furnitureimg["shoe rack wooden"] },
                    { "name": "Shoe Rack Metal", "quantity": 0, src:Furnitureimg["shoe rack metal"] },
                    { "name": "Five Door Wardrobe", "quantity": 0, src:Furnitureimg["5 door wardrobe"] },
                    { "name": "Four Door Wardrobe", "quantity": 0, src:Furnitureimg["4_door_wardrobe-removebg-preview"] },
                    { "name": "Triple Door Wardrobe", "quantity": 0, src:Furnitureimg["triple_door_wardrobe-removebg-preview"] },
                    { "name": "Double Door Wardrobe", "quantity": 0, src:Furnitureimg["double_door_wardrobe-removebg-preview"] },
                    { "name": "Single Door Wardrobe", "quantity": 0, src:Furnitureimg["singledoorwardrobe11"] }
                ],
                "open": false
            },
            {
                "Item": "Kitchen Furniture",
                "options": [
                    { "name": "Side Table", "quantity": 0, src:Furnitureimg["Side Table"] },
                    { "name": "Serving Trolley", "quantity": 0, src:Furnitureimg["Serving Trolley"] },
                    { "name": "Kitchen Rack", "quantity": 0, src:Furnitureimg["Kitchen Rack"] }
                ],
                "open": false
            },
            {
                "Item": "Dining",
                "options": [
                    { "name": "Marble Top Dining Table Only - 8 Seater", "quantity": 0, src:Furnitureimg["Marble Top Dining Table Only - 8 Seater"] },
                    { "name": "Marble Top Dining Table Only - 6 Seater", "quantity": 0, src:Furnitureimg["Marble Top Dining Table Only  6 Seater"]},
                    { "name": "Marble Top Dining Table Only - 4 Seater", "quantity": 0, src:Furnitureimg["Marble Top Dining Table Only  4 Seater"]},
                    { "name": "Dining Chair", "quantity": 0, src:Furnitureimg["Dining Chair"] },
                    { "name": "Dining Table Only - 8 Seater", "quantity": 0, src:Furnitureimg["Dining Table Only  8 Seater"] },
                    { "name": "Glass Top Dining Table Only - 6 Seater", "quantity": 0, src:Furnitureimg["Glass Top Dining Table Only - 6 Seater"]},
                    { "name": "Glass Top Dining Table Only - 4 Seater", "quantity": 0, src:Furnitureimg["Glass Top Dining Table Only - 4 Seater"] },
                    { "name": "Glass Top Dining Table Only - 8 Seater", "quantity": 0, src:Furnitureimg["Glass Top Dining Table Only  8 Seater"] },
                    { "name": "Dining Table Only - 6 Seater", "quantity": 0, src:Furnitureimg["Dining Table Only - 6 Seater"] },
                    { "name": "Dining Table Only - 4 Seater", "quantity": 0, src:Furnitureimg["Dining Table Only - 4 Seater"] }
                ],
                "open": false
            },
            {
                "Item": "Sofa",
                "options": [
                    { "name": "3 Seater Sofa - L Shape", "quantity": 0, src: Furnitureimg["3SeaterSofaLShape"] },
                    { "name": "4 Seater Sofa", "quantity": 0, src: Furnitureimg["4 Seater Sofa"] },
                    { "name": "3 Seater Sofa", "quantity": 0, src: Furnitureimg["3 SeaterSofa"] },
                    { "name": "2 Seater Sofa", "quantity": 0, src: Furnitureimg["2 Seater Sofa"]},
                    { "name": "1 Seater Sofa", "quantity": 0, src: Furnitureimg["1SeaterSofa"] },
                    { "name": "Recliner Sofa 1-seater", "quantity": 0, src:Furnitureimg["Recliner Sofa 1seater"] },
                    { "name": "Recliner Sofa 2-seater", "quantity": 0, src:Furnitureimg["Recliner Sofa 2-seater"] },
                    { "name": "Recliner Sofa 3-seater", "quantity": 0,  src:Furnitureimg["Recliner Sofa 3 -seater"] },
                    { "name": "5 Seater Sofa - L Shape", "quantity": 0,  src:Furnitureimg["5 Seater Sofa - L Shape"] },
                    { "name": "1 Seater Sofa - Leather", "quantity": 0,  src:Furnitureimg["1 Seater Sofa - Leather"]},
                    { "name": "7 Seater Sofa - L Shape", "quantity": 0, src:Furnitureimg["7 Seater Sofa - L Shape"] },
                    { "name": "3 Seater Sofa - Leather", "quantity": 0, src:Furnitureimg["3 Seater Sofa - Leather"]  },
                    { "name": "2 Seater Sofa - Leather", "quantity": 0,  src:Furnitureimg["2 Seater Sofa - Leather"] },
                    { "name": "Sofa cum Bed", "quantity": 0, src:Furnitureimg["Sofa cum Bed"] }
                ],
                "open": false
            },
            {
                "Item": "Bar Furniture",
                "options": [
                    { "name": "Bar Cabinet Large", "quantity": 0, src:Furnitureimg["Bar Cabinet Large"] },
                    { "name": "Bar Cabinet", "quantity": 0, src:Furnitureimg["BarCabinet"] },
                    { "name": "Bar Unit", "quantity": 0, src:Furnitureimg["Bar Unit"] },
                    { "name": "Bar Trolley", "quantity": 0, src:Furnitureimg["Bar Trolley"] },
                    { "name": "Bar Chair / Stool", "quantity": 0, src:Furnitureimg["Bar Chair  Stool"] },
                    { "name": "Wine Rack", "quantity": 0, src:Furnitureimg["Wine Rack"] }
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
              { "name": "Holds 2-3 pressure cookers (5 litre) or equivalent", "quantity": 0, "src": SmallApplianceImage["pressure cooker"] || null },
              { "name": "Dish Washer", "quantity": 0, "src": SmallApplianceImage["dish washer"] || null },
              { "name": "Barbeque Grill Large", "quantity": 0, "src": SmallApplianceImage["barbeque grill large"] || null },
              { "name": "Barbeque Grill Small", "quantity": 0, "src": SmallApplianceImage["barbeque grill small"] || null },
              { "name": "Water Purifiers/RO unit", "quantity": 0, "src": SmallApplianceImage["water purifiers"] || null },
              { "name": "Microwave Oven & OTG", "quantity": 0, "src": SmallApplianceImage["microwave oven"] || null },
              { "name": "Electric Tandoor", "quantity": 0, "src": SmallApplianceImage["Electric tandoor"] || null },
              { "name": "Mixer/Grinder", "quantity": 0, "src": SmallApplianceImage["mixer grinder"] || null },
              { "name": "Domestic flour mill/Atta chakki", "quantity": 0, "src": SmallApplianceImage["Atta Chakki"] || null },
              { "name": "Hood Chimney", "quantity": 0, "src": SmallApplianceImage["hood chimney"] || null },
              { "name": "Cooking range", "quantity": 0, "src": SmallApplianceImage["cooking range png"] || null },
              { "name": "Wet grinder", "quantity": 0, "src": SmallApplianceImage["wet grinder"] || null },
              { "name": "Food Processor", "quantity": 0, "src": SmallApplianceImage["wet grinder (1)"] || null },
              { "name": "Air Fryer", "quantity": 0, "src": SmallApplianceImage["air Fryer"] || null }
            ],
            "open": false
          },
          {
            "Item": "General Appliance",
            "options": [
              { "name": "Garment Steamer", "quantity": 0, "src": SmallApplianceImage["Garment steamer"] || null },
              { "name": "Speaker", "quantity": 0, "src": SmallApplianceImage["speaker"] || null },
              { "name": "Vacuum Cleaner", "quantity": 0, "src": SmallApplianceImage["Vaccum cleaner"] || null },
              { "name": "Instant Geyser", "quantity": 0, "src": SmallApplianceImage["Instant Geyser"] || null },
              { "name": "Music/Video System", "quantity": 0, "src": SmallApplianceImage["music video system"] || null },
              { "name": "Sewing Machine", "quantity": 0, "src": SmallApplianceImage["sewing machine"] || null },
              { "name": "Air Cooler", "quantity": 0, "src": SmallApplianceImage["Air cooler"] || null },
              { "name": "Air Purifier", "quantity": 0, "src": SmallApplianceImage["Air purifier"] || null },
              { "name": "Ceiling/Table Fan", "quantity": 0, "src": SmallApplianceImage["Ceiling Table fan"] || null },
              { "name": "Pedestal / Wall Fan", "quantity": 0, "src": SmallApplianceImage["pedestal wall fan"] || null },
              { "name": "Voltage Stabilizer", "quantity": 0, "src": SmallApplianceImage["voltage stabilizer"] || null },
              { "name": "Radiator Heater", "quantity": 0, "src": SmallApplianceImage["Radiator Heater"] || null },
              { "name": "UPS", "quantity": 0, "src": SmallApplianceImage["ups 2"] || null },
              { "name": "Inverter - With Battery", "quantity": 0, "src": SmallApplianceImage["Inverter With Battery"] || null },
              { "name": "DTH", "quantity": 0, "src": SmallApplianceImage["DTH"] || null }
            ],
            "open": false
          },
          {
            "Item": "Computer System",
            "options": [
              { "name": "Laptop", "quantity": 0, "src": SmallApplianceImage["laptop"] || null },
              { "name": "Printer", "quantity": 0, "src": SmallApplianceImage["Printer"] || null },
              { "name": "CPU", "quantity": 0, "src": SmallApplianceImage["cpu"] || null }
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
                    { "name": "Fridge Single Door", "quantity": 0, src:LargeApplianceImage["fridge single door"] },
                    { "name": "Fridge 300-399 lts", "quantity": 0, src:LargeApplianceImage["Fridge 300-399 lts"] },
                    { "name": "Fridge 400-499 lts", "quantity": 0, src:LargeApplianceImage["Fridge 400-499 lts"] },
                    { "name": "Fridge Above 500 lts", "quantity": 0, src:LargeApplianceImage["Fridge Above 500 lts"] },
                    { "name": "Fridge Upto 299 lts", "quantity": 0, src:LargeApplianceImage["Fridge Upto 299 lts"] }
                ],
                "open": false
            },
            {
                "Item": "Air Conditioner",
                "options": [
                    { "name": "Window Air Conditioner", "quantity": 0, src:LargeApplianceImage["Split Air Conditioner"] },
                    { "name": "Split Air Conditioner", "quantity": 0, src:LargeApplianceImage["Windows Air Conditioner"] }
                ],
                "open": false
            },
            {
                "Item": "Washing Machine",
                "options": [
                    { "name": "Washing Machine 8kg+", "quantity": 0, src:LargeApplianceImage["Washing Machine 8kg"] },
                    { "name": "Washing Machine 7-7.9kg", "quantity": 0, src:LargeApplianceImage["Washing Machine 7 to 79kg"] },
                    { "name": "Dish washer", "quantity": 0, src:LargeApplianceImage["Dish washer"] },
                    { "name": "Dryer", "quantity": 0, src:LargeApplianceImage["Dryer"] },
                    { "name": "Washing Machine <6.9kg", "quantity": 0, src:LargeApplianceImage["Washing Machine 69kg"] }
                ],
                "open": false
            },
            {
                "Item": "Television",
                "options": [
                    { "name": "LCD/LED 65\" & above", "quantity": 0, src:LargeApplianceImage["LCD LED 65 above"] },
                    { "name": "LCD/LED 52\" - 65", "quantity": 0, src:LargeApplianceImage["LCD LED 52 65"] },
                    { "name": "LCD/LED 40\" & Below", "quantity": 0, src:LargeApplianceImage["LCD LED 40 Below"] },
                    { "name": "Regular tv (old model)", "quantity": 0, src:LargeApplianceImage["Regular tv old model"] },
                    { "name": "LCD/LED 52\" & above", "quantity": 0, src:LargeApplianceImage["lcd led 52 above 11"] },
                    { "name": "LCD/LED 42\" - 50\"", "quantity": 0, src:LargeApplianceImage["LCD LED 52 65"] }
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
                    { "name": "Small Carton (Cabin baggage equivalent)", "quantity": 0, src:DecorationImage["smallcarton"] },
                    { "name": "Medium Carton (1.5x Cabin baggage)", "quantity": 0, src:DecorationImage["Medium Carton"] },
                    { "name": "Large Carton (2x Cabin baggage)", "quantity": 0, src:DecorationImage["Large Carton"] }
                ],
                "open": false,
            },
            {
                "Item": "Decorative Item",
                "options": [
                    { "name": "Pooja Lamp", "quantity": 0, src:DecorationImage["Pooja Lamp"] },
                    { "name": "Painting / Photo Large", "quantity": 0, src:DecorationImage["Painting Photo Large"] },
                    { "name": "Carpet Rolled", "quantity": 0, src:DecorationImage["Carpet Rolled"] },
                    { "name": "Statue Large", "quantity": 0, src:DecorationImage["Statue large"] },
                    { "name": "Painting / Photo Medium", "quantity": 0, src:DecorationImage["painting photo medium"] },
                    { "name": "Clock / Time Piece", "quantity": 0, src:DecorationImage["Clock Time Piece"] },
                    { "name": "Statue Small", "quantity": 0, src:DecorationImage["Statue small"] },
                    { "name": "Indoor Fountain Large", "quantity": 0, src:DecorationImage["Indoor fountain large"] },
                    { "name": "Indoor Fountain Small", "quantity": 0, src:DecorationImage["Indoor fountain small"] },
                    { "name": "Mirror", "quantity": 0, src:DecorationImage["MIRROR"] },
                    { "name": "Statue Medium", "quantity": 0, src:DecorationImage["Statue Medium"] },
                    { "name": "Wall Frames Large", "quantity": 0, src:DecorationImage["Wall Frames Large 333"] },
                    { "name": "Vase Small", "quantity": 0, src:DecorationImage["Vase Small"] },
                    { "name": "Painting / Photo Small", "quantity": 0, src:DecorationImage["Painting Photo Small"] },
                    { "name": "Aquarium Large", "quantity": 0, src:DecorationImage["Aquarium Large"] },
                    { "name": "Aquarium Small", "quantity": 0, src:DecorationImage["Aquarium Small"] },
                    { "name": "Wall Frames Medium", "quantity": 0, src:DecorationImage["Wall Frames Medium"] },
                    { "name": "Wall Frames Small", "quantity": 0, src:DecorationImage["Small Photo Frames"] },
                    { "name": "Vase Large", "quantity": 0, src:DecorationImage["Vase Large"] }
                ],
                "open": false
            },
            {
                "Item": "Toys",
                "options": [
                    { "name": "Carrom Board", "quantity": 0, src:DecorationImage["Carrom Board"] }
                ],
                "open": false
            },
            {
                "Item": "Suitcase",
                "options": [
                    { "name": "Suitcase Small", "quantity": 0, src:DecorationImage["Suitcase Small"] },
                    { "name": "Suitcase Medium", "quantity": 0, src:DecorationImage["Suitcase Medium"] },
                    { "name": "Suitcase Large", "quantity": 0, src:DecorationImage["Suitcase Large"] }
                ],
                "open": false
            },
            {
                "Item": "House Keeping",
                "options": [
                    { "name": "Water Drum", "quantity": 0, src:DecorationImage["Water Drum"] },
                    { "name": "Storage/Laundry Basket", "quantity": 0, src:DecorationImage["Storage Laundry Basket"] },
                    { "name": "Ironing Board Foldable", "quantity": 0, src:DecorationImage["Ironing Board foldable"] },
                    { "name": "Bucket / Tub / Dustbin", "quantity": 0, src:DecorationImage["bucket tub dustbin 222"] },
                    { "name": "Foldable Clothes Dryer", "quantity": 0, src:DecorationImage["Foldable Clothes Dryer"] },
                    { "name": "Broom / Mop", "quantity": 0, src:DecorationImage["Broom Mop"] },
                    { "name": "Tool Box", "quantity": 0, src:DecorationImage["Toolbox"] },
                    { "name": "Ladder", "quantity": 0, src:DecorationImage["Ladder"] },
                    { "name": "Weighing Scale", "quantity": 0, src:DecorationImage["Weighing Scale"] },
                    { "name": "Step Ladder", "quantity": 0, src:DecorationImage["Step Ladder"] }
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
                    { "name": "Kitchen Metal Rack", "quantity": 0, src:DecorationImage["Kitchen Metal Rack"] }
                ],
                "open": false
            },
            {
                "Item": "LPG Gas Cylinder",
                "options": [
                    { "name": "LPG Gas Cylinder", "quantity": 0, src:DecorationImage["LPG Gas Cylinder"] }
                ],
                "open": false
            },
            {
                "Item": "Gas Stove / Hob",
                "options": [
                    { "name": "Gas Stove / Hob", "quantity": 0, src:DecorationImage["Gas Stove Hob"] }
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
                    { "name": "Premium Hatchback Car", "quantity": 0, src:VehicleImage["Premium Hatchback Car"] },
                    { "name": "Premium Sedan Car", "quantity": 0, src:VehicleImage["Premium Sedan Car"] },
                    { "name": "SUV Car", "quantity": 0, src:VehicleImage["SUV Car"] },
                    { "name": "Hatchback Car", "quantity": 0, src:VehicleImage["Hatchback Car"] },
                    { "name": "Sedan Car", "quantity": 0, src:VehicleImage["Sedan Car"] },
                    { "name": "Luxury Car", "quantity": 0, src:VehicleImage["Luxury Car"] }
                ],
                "open": false
            },
            {
                "Item": "Bike",
                "options": [
                    { "name": "Bike - upto 350 cc", "quantity": 0, src:VehicleImage["Bike  upto 350 cc"] },
                    { "name": "Bike - upto 200 cc", "quantity": 0, src:VehicleImage["Bike - upto 200 cc"] },
                    { "name": "Luxury Bike", "quantity": 0, src:VehicleImage["Luxury Bike"] },
                    { "name": "Scooty / Scooter", "quantity": 0, src:VehicleImage["Scooty  Scooter"] }
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
                    { "name": "Kids Three Wheeler", "quantity": 0, src:Micellaneous["Kids four Wheeler"] },
                    { "name": "Kids Four Wheeler", "quantity": 0, src:Micellaneous["Kids three Wheeler"] }
                ],
                "open": false
            },
            {
                "Item": "Gym equipment",
                "options": [
                    { "name": "Tread Mill Foldable", "quantity": 0, src:Micellaneous["Exercise Cycle"] },
                    { "name": "Exercise Cycle", "quantity": 0, src:Micellaneous["Tread Mill Foldable"] },
                    { "name": "Weight/Dumbell", "quantity": 0, src:Micellaneous["Weight Dumbell"] }
                ],
                "open": false
            },
            {
                "Item": "Fire Extinguisher",
                "options": [
                    { "name": "Fire Extinguisher Small", "quantity": 0, src:Micellaneous["FireExtinguisherSmall"] },
                ],          
                "open": false
            },
            {
                "Item": "Bicycle",
                "options": [
                    { "name": "Bicycle Adult", "quantity": 0, src:Micellaneous["Bicycle Adult"] },
                    { "name": "Bicycle Kids", "quantity": 0, src:Micellaneous["Bicycle Kids"] }
                ],
                "open": false
            },
            {
                "Item": "Musical Instruments",
                "options": [
                    { "name": "Guitar", "quantity": 0, src:Micellaneous["Guitar"] },
                    { "name": "Synthesizer", "quantity": 0, src:Micellaneous["Synthesizer"] },
                    { "name": "Drum Set - 5 piece", "quantity": 0, src:Micellaneous["Drum Set"] },
                    { "name": "Harmonium", "quantity": 0, src:Micellaneous["Harmonium"] },
                    { "name": "Table", "quantity": 0, src:Micellaneous["table"] },
                    { "name": "Electronic Keyboard", "quantity": 0, src:Micellaneous["Electronic Keyboard"] },
                    { "name": "Grand Piano", "quantity": 0, src:Micellaneous["Grand Piano"] },
                    { "name": "Piano", "quantity": 0, src:Micellaneous["Piano"] }
                ],
                "open": false
            },
            {
                "Item": "Flower Pots",
                "options": [
                    { "name": "Big pots", "quantity": 0, src:Micellaneous["Big pots"] },
                    { "name": "Small pots", "quantity": 0, src:Micellaneous["Small pots"] }
                ],
                "open": false
            },
            {
                "Item": "Swing",
                "options": [
                    { "name": "Baby Swing Large", "quantity": 0, src:Micellaneous["baby swing large"] },
                    { "name": "Baby Swing Small", "quantity": 0, src:Micellaneous["Baby Swing small"] }
                ],
                "open": false
            },
            {
                "Item": "Lamp & Lighting",
                "options": [
                    { "name": "Wall/Ceiling Light", "quantity": 0, src:Micellaneous["Wall Ceiling Light 22"] },
                    { "name": "Floor/table lamp", "quantity": 0, src:Micellaneous["Floor table lamp"] }
                ],
                "open": false
            },
            {
                "Item": "Others",
                "options": [
                    { "name": "Gunny Bag", "quantity": 0, src:Micellaneous["Gunny Bag"] }
                ],
                "open": false
            }
        ],
        "active": false
    },
]
  let [customerList, setCustomerList] = useState([]);
  let [customerInventoryDisplay, setcustomerInventoryDisplay] = useState(false);

  return (
    <ListContext.Provider value={[customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay]}>
      <div style={{ backgroundImage: `url(${shifting})` }} className='h-screen w-screen flex justify-center items-center bg-center bg-cover bg-fixed '>
      <Inventory inventoryItem={inventoryItem} context={ListContext}  onClick={openPopup}/>
      </div>

      {PopupImageSrc && (
        <PopupImage src={PopupImageSrc} onClose={closePopup} />
      )}
    </ListContext.Provider>
  );
}

