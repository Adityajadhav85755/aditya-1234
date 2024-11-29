import React from 'react'
import Inventory from './components/Inventory'
import { useState } from 'react'
import bg from './assets/images/shifting.jpg'
export let ListContext = React.createContext()
export default function Shop() {
    // let inventoryItem=[
    //     {
    //         "mainItem": "Shop Furniture",
    //         "subItem": [
    //           {
    //             "Item": "Display Furniture",
    //             "options": [
    //               { "name": "Glass Display Cabinet", "quantity": 0 },
    //               { "name": "Wooden Display Rack", "quantity": 0 },
    //               { "name": "Countertop Display Case", "quantity": 0 },
    //               { "name": "Showcase Cabinet", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Shelving and Storage",
    //             "options": [
    //               { "name": "Wall Shelves", "quantity": 0 },
    //               { "name": "Freestanding Shelves", "quantity": 0 },
    //               { "name": "Storage Cabinets", "quantity": 0 },
    //               { "name": "Stockroom Shelves", "quantity": 0 },
    //               { "name": "Metal Shelving Units", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           },
    //           {
    //             "Item": "Counters & Desks",
    //             "options": [
    //               { "name": "Cashier Counter", "quantity": 0 },
    //               { "name": "Checkout Desk", "quantity": 0 },
    //               { "name": "Sales Counter", "quantity": 0 },
    //               { "name": "Reception Desk", "quantity": 0 },
    //               { "name": "Service Counter", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 3
    //           },
    //           {
    //             "Item": "Seating Furniture",
    //             "options": [
    //               { "name": "Chairs (Plastic, Metal, or Wooden)", "quantity": 0 },
    //               { "name": "Bar Stools", "quantity": 0 },
    //               { "name": "Waiting Area Chairs", "quantity": 0 },
    //               { "name": "Lounge Seating", "quantity": 0 },
    //               { "name": "Benches", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 4
    //           }
    //         ],
    //         "active": true
    //       },      
          
          
    //       {
    //         "mainItem": "Shop Electronics & Appliances",
    //         "subItem": [
    //           {
    //             "Item": "Point of Sale (POS) Equipment",
    //             "options": [
    //               { "name": "POS Machine", "quantity": 0 },
    //               { "name": "Receipt Printer", "quantity": 0 },
    //               { "name": "Barcode Scanner", "quantity": 0 },
    //               { "name": "Cash Drawer", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Lighting & Fixtures",
    //             "options": [
    //               { "name": "LED Lights", "quantity": 0 },
    //               { "name": "Track Lighting", "quantity": 0 },
    //               { "name": "Hanging Light Fixtures", "quantity": 0 },
    //               { "name": "Display Light Fixtures", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           },
    //           {
    //             "Item": "Cooling & Heating",
    //             "options": [
    //               { "name": "Air Conditioner", "quantity": 0 },
    //               { "name": "Electric Fans", "quantity": 0 },
    //               { "name": "Space Heaters", "quantity": 0 },
    //               { "name": "Refrigerators (for perishable goods in retail shops)", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 3
    //           },
    //           {
    //             "Item": "Appliances for Shop Use",
    //             "options": [
    //               { "name": "Coffee Machine", "quantity": 0 },
    //               { "name": "Microwave Oven", "quantity": 0 },
    //               { "name": "Water Cooler", "quantity": 0 },
    //               { "name": "Refrigerator (for staff or customer use)", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 4
    //           }
    //         ],
    //         "active": false
    //       },


    //       {
    //         "mainItem": "Inventory & Stock",
    //         "subItem": [
    //           {
    //             "Item": "Retail Stock",
    //             "options": [
    //               { "name": "Apparel/Clothing (in boxes, bags, or shelves)", "quantity": 0 },
    //               { "name": "Electronic Gadgets & Accessories", "quantity": 0 },
    //               { "name": "Books/Stationery", "quantity": 0 },
    //               { "name": "Shoes/Footwear", "quantity": 0 },
    //               { "name": "Toys and Games", "quantity": 0 },
    //               { "name": "Groceries (Canned goods, packaging)", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Packing Materials",
    //             "options": [
    //               { "name": "Bubble Wrap", "quantity": 0 },
    //               { "name": "Cardboard Boxes", "quantity": 0 },
    //               { "name": "Stretch Film", "quantity": 0 },
    //               { "name": "Packing Paper", "quantity": 0 },
    //               { "name": "Foam Packaging", "quantity": 0 },
    //               { "name": "Shrink Wrap", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           },
    //           {
    //             "Item": "Bulk Items",
    //             "options": [
    //               { "name": "Large Orders or Bulk Inventory", "quantity": 0 },
    //               { "name": "Seasonal Items (Christmas Trees, Halloween Decorations)", "quantity": 0 },
    //               { "name": "Large Appliances or Furniture", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 3
    //           }
    //         ],
    //         "active": false
    //       },
    //       {
    //         "mainItem": "Shop Signage & Branding",
    //         "subItem": [
    //           {
    //             "Item": "Outdoor Signs",
    //             "options": [
    //               { "name": "Storefront Signage", "quantity": 0 },
    //               { "name": "LED or Neon Signs", "quantity": 0 },
    //               { "name": "Sandwich Boards", "quantity": 0 },
    //               { "name": "Banner Flags", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Indoor Signage",
    //             "options": [
    //               { "name": "Aisle Signs", "quantity": 0 },
    //               { "name": "Window Decals", "quantity": 0 },
    //               { "name": "Promotional Posters", "quantity": 0 },
    //               { "name": "Directional Signs", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           },
    //           {
    //             "Item": "Branding Materials",
    //             "options": [
    //               { "name": "Wall Graphics", "quantity": 0 },
    //               { "name": "Branding Posters", "quantity": 0 },
    //               { "name": "Printed Materials (Brochures, Flyers)", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 3
    //           }
    //         ],
    //         "active": false
    //       },
    //       {
    //         "mainItem": "Shop Fixtures & Equipment",
    //         "subItem": [
    //           {
    //             "Item": "Racks and Hangers",
    //             "options": [
    //               { "name": "Clothing Racks", "quantity": 0 },
    //               { "name": "Product Hangers", "quantity": 0 },
    //               { "name": "Display Hooks", "quantity": 0 },
    //               { "name": "Hat Racks", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Storage Containers",
    //             "options": [
    //               { "name": "Bins and Baskets", "quantity": 0 },
    //               { "name": "Storage Totes", "quantity": 0 },
    //               { "name": "Crates", "quantity": 0 },
    //               { "name": "Drawers", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           },
    //           {
    //             "Item": "Checkout Equipment",
    //             "options": [
    //               { "name": "Cash Register", "quantity": 0 },
    //               { "name": "Receipt Holders", "quantity": 0 },
    //               { "name": "Credit Card Machine", "quantity": 0 },
    //               { "name": "Money Tray", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 3
    //           }
    //         ],
    //         "active": false
    //       },
    //       {
    //         "mainItem": "Shop Miscellaneous Items",
    //         "subItem": [
    //           {
    //             "Item": "Packaging Materials",
    //             "options": [
    //               { "name": "Gift Boxes", "quantity": 0 },
    //               { "name": "Gift Wrap", "quantity": 0 },
    //               { "name": "Tape Dispensers", "quantity": 0 },
    //               { "name": "Ribbons", "quantity": 0 },
    //               { "name": "Stickers/Seals", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Shop Supplies",
    //             "options": [
    //               { "name": "Paper Towels", "quantity": 0 },
    //               { "name": "Cleaning Supplies", "quantity": 0 },
    //               { "name": "Office Supplies (pens, staplers, etc.)", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           },
    //           {
    //             "Item": "Display Items",
    //             "options": [
    //               { "name": "Mannequins", "quantity": 0 },
    //               { "name": "Display Stands", "quantity": 0 },
    //               { "name": "Product Holders", "quantity": 0 },
    //               { "name": "Floor Mats", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 3
    //           }
    //         ],
    //         "active": false
    //       },
    //       {
    //         "mainItem": "Transportation & Logistics",
    //         "subItem": [
    //           {
    //             "Item": "Packing Equipment",
    //             "options": [
    //               { "name": "Pallet Jack", "quantity": 0 },
    //               { "name": "Hand Trolley", "quantity": 0 },
    //               { "name": "Dollies", "quantity": 0 },
    //               { "name": "Carton Labels", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Shipping Materials",
    //             "options": [
    //               { "name": "Shipping Pallets", "quantity": 0 },
    //               { "name": "Shipping Containers", "quantity": 0 },
    //               { "name": "Moving Blankets", "quantity": 0 },
    //               { "name": "Strapping Materials", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           },
    //           {
    //             "Item": "Moving Tools",
    //             "options": [
    //               { "name": "Furniture Pads", "quantity": 0 },
    //               { "name": "Stretch Wrap Roll", "quantity": 0 },
    //               { "name": "Tape Guns", "quantity": 0 },
    //               { "name": "Carton/Box Cutter", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 3
    //           }
    //         ],
    //         "active": false
    //       },
    //       {
    //         "mainItem": "Shop Decorations & Fixtures",
    //         "subItem": [
    //           {
    //             "Item": "Decorative Items",
    //             "options": [
    //               { "name": "Wall Art/Artwork", "quantity": 0 },
    //               { "name": "Decorative Plants", "quantity": 0 },
    //               { "name": "Indoor Fountains", "quantity": 0 },
    //               { "name": "Rugs and Carpets", "quantity": 0 },
    //               { "name": "Window Treatments (Curtains/Blinds)", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Seasonal Displays",
    //             "options": [
    //               { "name": "Seasonal Decoration Pieces", "quantity": 0 },
    //               { "name": "Festive Displays (e.g., Christmas, Halloween)", "quantity": 0 },
    //               { "name": "Promotional Display Stands", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           },
    //           {
    //             "Item": "Window Displays",
    //             "options": [
    //               { "name": "Display Mannequins", "quantity": 0 },
    //               { "name": "Storefront Windows", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 3
    //           }
    //         ],
    //         "active": false
    //       },
    //       {
    //         "mainItem": "Shop Safety & Security",
    //         "subItem": [
    //           {
    //             "Item": "Safety Equipment",
    //             "options": [
    //               { "name": "Fire Extinguishers", "quantity": 0 },
    //               { "name": "First Aid Kit", "quantity": 0 },
    //               { "name": "Emergency Exit Sign", "quantity": 0 },
    //               { "name": "Fire Blanket", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           },
    //           {
    //             "Item": "Security Devices",
    //             "options": [
    //               { "name": "Security Cameras", "quantity": 0 },
    //               { "name": "Alarm Systems", "quantity": 0 },
    //               { "name": "Motion Sensors", "quantity": 0 },
    //               { "name": "Security Safes", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 2
    //           }
    //         ],
    //         "active": false
    //       },
    //       {
    //         "mainItem": "Moving/Relocation Services",
    //         "subItem": [
    //           {
    //             "Item": "Packers & Movers Services",
    //             "options": [
    //               { "name": "Furniture Moving", "quantity": 0 },
    //               { "name": "Electronics Relocation", "quantity": 0 },
    //               { "name": "Full Shop Relocation", "quantity": 0 },
    //               { "name": "Stock Relocation (Including Bulk Items)", "quantity": 0 },
    //               { "name": "Inventory Packing", "quantity": 0 },
    //               { "name": "Temporary Storage", "quantity": 0 },
    //               { "name": "Vehicle Transportation for Equipment", "quantity": 0 },
    //               { "name": "Professional Unpacking & Setup", "quantity": 0 }
    //             ],
    //             "open": false,
    //             "id": 1
    //           }
    //         ],
    //         "active": false
    //       }
          
          
          
          
          
          
          
          
          
    // ]


    let inventoryItem=[
        {
          "mainItem": "Shop Furniture",
          "subItem": [
            {
              "Item": "Display Furniture",
              "options": [
                { "name": "Glass Display Cabinet", "quantity": 0 },
                { "name": "Wooden Display Rack", "quantity": 0 },
                { "name": "Countertop Display Case", "quantity": 0 },
                { "name": "Showcase Cabinet", "quantity": 0 }
              ],
              "open": false,
              "id": 101
            },
            {
              "Item": "Shelving and Storage",
              "options": [
                { "name": "Wall Shelves", "quantity": 0 },
                { "name": "Freestanding Shelves", "quantity": 0 },
                { "name": "Storage Cabinets", "quantity": 0 },
                { "name": "Stockroom Shelves", "quantity": 0 },
                { "name": "Metal Shelving Units", "quantity": 0 }
              ],
              "open": false,
              "id": 102
            },
            {
              "Item": "Counters & Desks",
              "options": [
                { "name": "Cashier Counter", "quantity": 0 },
                { "name": "Checkout Desk", "quantity": 0 },
                { "name": "Sales Counter", "quantity": 0 },
                { "name": "Reception Desk", "quantity": 0 },
                { "name": "Service Counter", "quantity": 0 }
              ],
              "open": false,
              "id": 103
            },
            {
              "Item": "Seating Furniture",
              "options": [
                { "name": "Chairs (Plastic, Metal, or Wooden)", "quantity": 0 },
                { "name": "Bar Stools", "quantity": 0 },
                { "name": "Waiting Area Chairs", "quantity": 0 },
                { "name": "Lounge Seating", "quantity": 0 },
                { "name": "Benches", "quantity": 0 }
              ],
              "open": false,
              "id": 104
            }
          ],
          "active": true
        },
        {
          "mainItem": "Shop Electronics & Appliances",
          "subItem": [
            {
              "Item": "Point of Sale (POS) Equipment",
              "options": [
                { "name": "POS Machine", "quantity": 0 },
                { "name": "Receipt Printer", "quantity": 0 },
                { "name": "Barcode Scanner", "quantity": 0 },
                { "name": "Cash Drawer", "quantity": 0 }
              ],
              "open": false,
              "id": 201
            },
            {
              "Item": "Lighting & Fixtures",
              "options": [
                { "name": "LED Lights", "quantity": 0 },
                { "name": "Track Lighting", "quantity": 0 },
                { "name": "Hanging Light Fixtures", "quantity": 0 },
                { "name": "Display Light Fixtures", "quantity": 0 }
              ],
              "open": false,
              "id": 202
            },
            {
              "Item": "Cooling & Heating",
              "options": [
                { "name": "Air Conditioner", "quantity": 0 },
                { "name": "Electric Fans", "quantity": 0 },
                { "name": "Space Heaters", "quantity": 0 },
                { "name": "Refrigerators (for perishable goods in retail shops)", "quantity": 0 }
              ],
              "open": false,
              "id": 203
            },
            {
              "Item": "Appliances for Shop Use",
              "options": [
                { "name": "Coffee Machine", "quantity": 0 },
                { "name": "Microwave Oven", "quantity": 0 },
                { "name": "Water Cooler", "quantity": 0 },
                { "name": "Refrigerator (for staff or customer use)", "quantity": 0 }
              ],
              "open": false,
              "id": 204
            }
          ],
          "active": false
        },
        {
          "mainItem": "Inventory & Stock",
          "subItem": [
            {
              "Item": "Retail Stock",
              "options": [
                { "name": "Apparel/Clothing (in boxes, bags, or shelves)", "quantity": 0 },
                { "name": "Electronic Gadgets & Accessories", "quantity": 0 },
                { "name": "Books/Stationery", "quantity": 0 },
                { "name": "Shoes/Footwear", "quantity": 0 },
                { "name": "Toys and Games", "quantity": 0 },
                { "name": "Groceries (Canned goods, packaging)", "quantity": 0 }
              ],
              "open": false,
              "id": 301
            },
            {
              "Item": "Packing Materials",
              "options": [
                { "name": "Bubble Wrap", "quantity": 0 },
                { "name": "Cardboard Boxes", "quantity": 0 },
                { "name": "Stretch Film", "quantity": 0 },
                { "name": "Packing Paper", "quantity": 0 },
                { "name": "Foam Packaging", "quantity": 0 },
                { "name": "Shrink Wrap", "quantity": 0 }
              ],
              "open": false,
              "id": 302
            },
            {
              "Item": "Bulk Items",
              "options": [
                { "name": "Large Orders or Bulk Inventory", "quantity": 0 },
                { "name": "Seasonal Items (Christmas Trees, Halloween Decorations)", "quantity": 0 },
                { "name": "Large Appliances or Furniture", "quantity": 0 }
              ],
              "open": false,
              "id": 303
            }
          ],
          "active": false
        },
        {
          "mainItem": "Shop Signage & Branding",
          "subItem": [
            {
              "Item": "Outdoor Signs",
              "options": [
                { "name": "Storefront Signage", "quantity": 0 },
                { "name": "LED or Neon Signs", "quantity": 0 },
                { "name": "Sandwich Boards", "quantity": 0 },
                { "name": "Banner Flags", "quantity": 0 }
              ],
              "open": false,
              "id": 401
            },
            {
              "Item": "Indoor Signage",
              "options": [
                { "name": "Aisle Signs", "quantity": 0 },
                { "name": "Window Decals", "quantity": 0 },
                { "name": "Promotional Posters", "quantity": 0 },
                { "name": "Directional Signs", "quantity": 0 }
              ],
              "open": false,
              "id": 402
            },
            {
              "Item": "Branding Materials",
              "options": [
                { "name": "Wall Graphics", "quantity": 0 },
                { "name": "Branding Posters", "quantity": 0 },
                { "name": "Printed Materials (Brochures, Flyers)", "quantity": 0 }
              ],
              "open": false,
              "id": 403
            }
          ],
          "active": false
        },
        {
          "mainItem": "Shop Fixtures & Equipment",
          "subItem": [
            {
              "Item": "Racks and Hangers",
              "options": [
                { "name": "Clothing Racks", "quantity": 0 },
                { "name": "Product Hangers", "quantity": 0 },
                { "name": "Display Hooks", "quantity": 0 },
                { "name": "Hat Racks", "quantity": 0 }
              ],
              "open": false,
              "id": 501
            },
            {
              "Item": "Storage Containers",
              "options": [
                { "name": "Bins and Baskets", "quantity": 0 },
                { "name": "Storage Totes", "quantity": 0 },
                { "name": "Crates", "quantity": 0 },
                { "name": "Drawers", "quantity": 0 }
              ],
              "open": false,
              "id": 502
            },
            {
              "Item": "Checkout Equipment",
              "options": [
                { "name": "Cash Register", "quantity": 0 },
                { "name": "Receipt Holders", "quantity": 0 },
                { "name": "Credit Card Machine", "quantity": 0 },
                { "name": "Money Tray", "quantity": 0 }
              ],
              "open": false,
              "id": 503
            }
          ],
          "active": false
        }
      ]
      
      let [customerList, setCustomerList] = useState([]);
      let [customerInventoryDisplay, setcustomerInventoryDisplay] = useState(false);
      return (
    
        <div className='h-screen w-full bg-gradient-to-b from-blue-100 to-primary flex justify-center items-center bg-center bg-cover bg-no-repeat ' style={{backgroundImage:`url(${bg})`}}>
          <ListContext.Provider value={[customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay]}>
            <Inventory inventoryItem={inventoryItem} context={ListContext} />
            {/* <Inventory inventoryItem={inventoryItem}/> */}
            {/* {customerInventoryDisplay && <CustomerInventory />} */}
          </ListContext.Provider>
        </div>
      )
}
