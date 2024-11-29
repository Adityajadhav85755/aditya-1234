import React from 'react'
import Inventory from './components/Inventory'
import { useState } from 'react'
import bg from './assets/images/shifting.jpg'
export let ListContext = React.createContext()

export default function Vehicle() {
    // let inventoryItem = [
    //     {
    //       "mainItem": "Furniture",
    //       "subItem": [
    //         {
    //           "Item": "Tables",
    //           "options": [
    //             { "name": "Office Desk", "quantity": 0 },
    //             { "name": "Conference Table", "quantity": 0 },
    //             { "name": "Executive Desk", "quantity": 0 },
    //             { "name": "Adjustable Standing Desk", "quantity": 0 },
    //             { "name": "Reception Desk", "quantity": 0 },
    //             { "name": "Meeting Table", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 1
    //         },
    //         {
    //           "Item": "Chairs",
    //           "options": [
    //             { "name": "Office Chair", "quantity": 0 },
    //             { "name": "Executive Chair", "quantity": 0 },
    //             { "name": "Conference Chair", "quantity": 0 },
    //             { "name": "Task Chair", "quantity": 0 },
    //             { "name": "Ergonomic Chair", "quantity": 0 },
    //             { "name": "Visitor Chair", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 2
    //         },
    //         {
    //           "Item": "Storage & Cabinets",
    //           "options": [
    //             { "name": "Filing Cabinet", "quantity": 0 },
    //             { "name": "Book Shelf", "quantity": 0 },
    //             { "name": "Storage Cabinet", "quantity": 0 },
    //             { "name": "Drawer Organizer", "quantity": 0 },
    //             { "name": "Computer Cabinet", "quantity": 0 },
    //             { "name": "Mobile Pedestal", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 3
    //         },
    //         {
    //           "Item": "Workstations",
    //           "options": [
    //             { "name": "Cubicle", "quantity": 0 },
    //             { "name": "Modular Office Workstation", "quantity": 0 },
    //             { "name": "Reception Counter", "quantity": 0 },
    //             { "name": "Work Desk with Storage", "quantity": 0 },
    //             { "name": "L-Shaped Desk", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 4
    //         },
    //         {
    //           "Item": "Office Accessories",
    //           "options": [
    //             { "name": "Paper Tray", "quantity": 0 },
    //             { "name": "Pen Holder", "quantity": 0 },
    //             { "name": "Monitor Stand", "quantity": 0 },
    //             { "name": "Cable Management Tray", "quantity": 0 },
    //             { "name": "Desk Organizer", "quantity": 0 },
    //             { "name": "Whiteboard/Blackboard", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 5
    //         }
    //       ],
    //       "active": true
    //     },
    //     {
    //       "mainItem": "Office Technology & Electronics",
    //       "subItem": [
    //         {
    //           "Item": "Computers & Laptops",
    //           "options": [
    //             { "name": "Desktop Computer", "quantity": 0 },
    //             { "name": "Laptop", "quantity": 0 },
    //             { "name": "All-in-One Desktop", "quantity": 0 },
    //             { "name": "Workstation Computer", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 1
    //         },
    //         {
    //           "Item": "Printers & Scanners",
    //           "options": [
    //             { "name": "Inkjet Printer", "quantity": 0 },
    //             { "name": "Laser Printer", "quantity": 0 },
    //             { "name": "All-in-One Printer", "quantity": 0 },
    //             { "name": "Scanner", "quantity": 0 },
    //             { "name": "3D Printer", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 2
    //         },
    //         {
    //           "Item": "Networking",
    //           "options": [
    //             { "name": "Wi-Fi Router", "quantity": 0 },
    //             { "name": "Switch", "quantity": 0 },
    //             { "name": "Modem", "quantity": 0 },
    //             { "name": "Network Cable", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 3
    //         },
    //         {
    //           "Item": "Projectors & Presentation Equipment",
    //           "options": [
    //             { "name": "Projector", "quantity": 0 },
    //             { "name": "Projector Screen", "quantity": 0 },
    //             { "name": "Conference Speakerphone", "quantity": 0 },
    //             { "name": "Interactive Whiteboard", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 4
    //         },
    //         {
    //           "Item": "Telecommunication",
    //           "options": [
    //             { "name": "Office Telephone", "quantity": 0 },
    //             { "name": "VoIP Phone", "quantity": 0 },
    //             { "name": "Headsets", "quantity": 0 },
    //             { "name": "Video Conferencing System", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 5
    //         },
    //         {
    //           "Item": "Audio & Visual",
    //           "options": [
    //             { "name": "Microphone", "quantity": 0 },
    //             { "name": "Speaker System", "quantity": 0 },
    //             { "name": "Conference Audio System", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 6
    //         }
    //       ],
    //       "active": false
    //     },
    
    //     {
    //       "mainItem": "Office Appliances & Small Electronics",
    //       "subItem": [
    //         {
    //           "Item": "Climate Control",
    //           "options": [
    //             { "name": "Air Conditioner (Window/ Split)", "quantity": 0 },
    //             { "name": "Electric Fan (Pedestal/ Ceiling)", "quantity": 0 },
    //             { "name": "Heater", "quantity": 0 },
    //             { "name": "Air Purifier", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 1
    //         },
    //         {
    //           "Item": "Kitchen & Breakroom Appliances",
    //           "options": [
    //             { "name": "Coffee Machine", "quantity": 0 },
    //             { "name": "Microwave Oven", "quantity": 0 },
    //             { "name": "Water Cooler", "quantity": 0 },
    //             { "name": "Fridge", "quantity": 0 },
    //             { "name": "Electric Kettle", "quantity": 0 },
    //             { "name": "Toaster", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 2
    //         },
    //         {
    //           "Item": "Other Appliances",
    //           "options": [
    //             { "name": "Vacuum Cleaner", "quantity": 0 },
    //             { "name": "Shredder", "quantity": 0 },
    //             { "name": "Humidifier", "quantity": 0 },
    //             { "name": "Electric Stapler", "quantity": 0 },
    //             { "name": "Lamination Machine", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 3
    //         }
    //       ],
    //       "active": false
    //     },
    //     {
    //       "mainItem": "Office Supplies",
    //       "subItem": [
    //         {
    //           "Item": "Stationery",
    //           "options": [
    //             { "name": "Notebooks", "quantity": 0 },
    //             { "name": "Paper", "quantity": 0 },
    //             { "name": "Pens", "quantity": 0 },
    //             { "name": "Pencils", "quantity": 0 },
    //             { "name": "Paper Clips", "quantity": 0 },
    //             { "name": "Staplers", "quantity": 0 },
    //             { "name": "Folders", "quantity": 0 },
    //             { "name": "Post-It Notes", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 1
    //         },
    //         {
    //           "Item": "Office Tools",
    //           "options": [
    //             { "name": "Scissors", "quantity": 0 },
    //             { "name": "Tape Dispenser", "quantity": 0 },
    //             { "name": "Rulers", "quantity": 0 },
    //             { "name": "Highlighters", "quantity": 0 },
    //             { "name": "Whiteboard Markers", "quantity": 0 },
    //             { "name": "Puncher", "quantity": 0 },
    //             { "name": "Binding Machine", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 2
    //         }
    //       ],
    //       "active": false
    //     },
    
    //     {
    //       "mainItem": "Office Decoration & Miscellaneous",
    //       "subItem": [
    //         {
    //           "Item": "Wall Decorations",
    //           "options": [
    //             { "name": "Wall Clocks", "quantity": 0 },
    //             { "name": "Paintings", "quantity": 0 },
    //             { "name": "Photos", "quantity": 0 },
    //             { "name": "Mirrors", "quantity": 0 },
    //             { "name": "Wall Frames", "quantity": 0 },
    //             { "name": "Bulletin Boards", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 1
    //         },
    //         {
    //           "Item": "Indoor Plants & Pots",
    //           "options": [
    //             { "name": "Office Flower Pots", "quantity": 0 },
    //             { "name": "Indoor Plant Stand", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 2
    //         },
    //         {
    //           "Item": "Lighting",
    //           "options": [
    //             { "name": "Desk Lamp", "quantity": 0 },
    //             { "name": "Floor Lamp", "quantity": 0 },
    //             { "name": "Ceiling Light", "quantity": 0 },
    //             { "name": "LED Panel Light", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 3
    //         },
    //         {
    //           "Item": "Miscellaneous",
    //           "options": [
    //             { "name": "Clocks", "quantity": 0 },
    //             { "name": "Carpet/Rugs", "quantity": 0 },
    //             { "name": "Office Curtains", "quantity": 0 },
    //             { "name": "Office Air Fresheners", "quantity": 0 },
    //             { "name": "Umbrella Stand", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 4
    //         }
    //       ],
    //       "active": false
    //     },
    
    
    //     {
    //       "mainItem": "Office Organization",
    //       "subItem": [
    //         {
    //           "Item": "File Storage",
    //           "options": [
    //             { "name": "File Rack", "quantity": 0 },
    //             { "name": "Document Box", "quantity": 0 },
    //             { "name": "Archive Box", "quantity": 0 },
    //             { "name": "File Folders", "quantity": 0 },
    //             { "name": "Letter Tray", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 1
    //         },
    //         {
    //           "Item": "Cable Management",
    //           "options": [
    //             { "name": "Cable Ties", "quantity": 0 },
    //             { "name": "Cable Organizer", "quantity": 0 },
    //             { "name": "Power Strips", "quantity": 0 },
    //             { "name": "Cable Sleeves", "quantity": 0 },
    //             { "name": "Desk Cable Tray", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 2
    //         }
    //       ],
    //       "active": false
    //     },
    
    //     {
    //       "mainItem": "Office Safety & Security",
    //       "subItem": [
    //         {
    //           "Item": "Fire Extinguishers",
    //           "options": [
    //             { "name": "Fire Extinguishers", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 1
    //         },
    //         {
    //           "Item": "First Aid Kit",
    //           "options": [
    //             { "name": "First Aid Kit", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 2
    //         },
    //         {
    //           "Item": "Lockers",
    //           "options": [
    //             { "name": "Lockers", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 3
    //         },
    //         {
    //           "Item": "Safe",
    //           "options": [
    //             { "name": "Safe", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 4
    //         },
    //         {
    //           "Item": "Smoke Detectors",
    //           "options": [
    //             { "name": "Smoke Detectors", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 5
    //         },
    //         {
    //           "Item": "Emergency Light",
    //           "options": [
    //             { "name": "Emergency Light", "quantity": 0 }
    //           ],
    //           "open": false,
    //           "id": 6
    //         }
    //       ],
    //       "active": false
    //     }
    
    
    
    
    
    
    //   ];

let inventoryItem=[
  
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
