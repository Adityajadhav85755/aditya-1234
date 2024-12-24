import React from 'react'
import Inventory from './components/Inventory'
import { useState } from 'react'
import bg from "./assets/images/shifting.jpg"


export let ListContext = React.createContext()

export default function Office() {
  const [selectedImage, setSelectedImage] = useState(null); // New state for selected image
  const [withinForm, setWithinForm] = useState({});
  const [showPlan, setShowPlan] = useState(false);
   // Function to set the selected image
   const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowPlan(true); // Show the popup when an image is clicked
  };
  const importImages = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((key) => {
        const imageName = key.replace('./', '').split('.')[0];
        let keyName=imageName.replace("GeneralAppliance/","" );
        keyName=keyName.replace("kitchenAppliencess/","" );
        // console.log(imageName.split('/')[1])
        images[imageName.split('/')[1]] = requireContext(key); // Associate image with the name
        // images[keyName] = requireContext(key); // Associate image with the name
      });
    return images;
  };


//   Office Section 

let OfficeFuniture = importImages(
  require.context('./assets/Inventory/Office/OfficeFurniture', true, /\.(png|jpe?g|svg)$/) // Adjust path as needed
);

let OfficeTechImage = importImages(
  require.context('./assets/Inventory/Office/OfficeFurniture/Officetechnologyelectronics', true, /\.(png|jpe?g|svg)$/) // Adjust path as needed
);

let OffAplicationImage = importImages(
  require.context('./assets/Inventory/Household/Office Appliances & Small Electronics', true, /\.(png|jpe?g|svg)$/) // Adjust path as needed
);

let offstationeryImage = importImages(
  require.context('./assets/Inventory/Household/Office Appliances & Small Electronics/Office Supplies', true, /\.(png|jpe?g|svg)$/) // Adjust path as needed
);

let offdecorationImage = importImages(
  require.context('./assets/Inventory/Household/officedecoration/Office Decoration' , true, /\.(png|jpe?g|svg)$/) // Adjust path as needed
);


// console.log(OfficeTechImage)



  let inventoryItem = [
    {
      "mainItem": "Furniture",
      "subItem": [
        {
          "Item": "Tables",
          "options": [
            { "name": "Office Desk", "quantity": 0, src:OfficeFuniture["Office Desk"] },
            { "name": "Conference Table", "quantity": 0, src:OfficeFuniture["Conference Table"] },
            { "name": "Executive Desk", "quantity": 0, src:OfficeFuniture["Executive Desk"] },
            { "name": "Adjustable Standing Desk", "quantity": 0, src:OfficeFuniture[""] },
            { "name": "Reception Desk", "quantity": 0,src:OfficeFuniture["Reception Desk"] },
            { "name": "Meeting Table", "quantity": 0, src:OfficeFuniture["Meeting Table"] }
          ],
          "open": false,
          "id": 1
        },
        {
          "Item": "Chairs",
          "options": [
            { "name": "Office Chair", "quantity": 0 ,src:OfficeFuniture["Office_Chair"]},
            { "name": "Executive Chair", "quantity": 0, src:OfficeFuniture["Executive_Chair"] },
            { "name": "Conference Chair", "quantity": 0,src:OfficeFuniture["Conference Chair"] },
            { "name": "Task Chair", "quantity": 0, src:OfficeFuniture["Task Chair"] },
            { "name": "Ergonomic Chair", "quantity": 0, src:OfficeFuniture["Ergonomic_Chair"] },
            { "name": "Visitor Chair", "quantity": 0, src:OfficeFuniture["Visitor Chair"] }
          ],
          "open": false,
          "id": 2
        },
        {
          "Item": "Storage & Cabinets",
          "options": [
            { "name": "Filing Cabinet", "quantity": 0,src:OfficeFuniture["Conference Chair"]  },
            { "name": "Book Shelf", "quantity": 0,src:OfficeFuniture["Book Shelf"] },
            { "name": "Storage Cabinet", "quantity": 0 ,src:OfficeFuniture["Storage Cabinet"] },
            { "name": "Drawer Organizer", "quantity": 0, src:OfficeFuniture["Drawer Organizer"] },
            { "name": "Computer Cabinet", "quantity": 0, src:OfficeFuniture["Computer Cabinet"] },
            { "name": "Mobile Pedestal", "quantity": 0, src:OfficeFuniture["Mobile Pedestal"] }
          ],
          "open": false,
          "id": 3
        },
        {
          "Item": "Workstations",
          "options": [
            { "name": "Cubicle", "quantity": 0, src:OfficeFuniture["Cubicle"] },
            { "name": "Modular Office Workstation", "quantity": 0, src:OfficeFuniture["Modular Office Workstation"] },
            { "name": "Reception Counter", "quantity": 0, src:OfficeFuniture["Reception Counter"] },
            { "name": "Work Desk with Storage", "quantity": 0,src:OfficeFuniture["Work Desk with Storage"] },
            { "name": "L-Shaped Desk", "quantity": 0,src:OfficeFuniture["L-Shaped Desk"] }
          ],
          "open": false,
          "id": 4
        },
        {
          "Item": "Office Accessories",
          "options": [
            { "name": "Paper Tray", "quantity": 0,src:OfficeFuniture["Paper Tray"] },
            { "name": "Pen Holder", "quantity": 0,src:OfficeFuniture["Pen Holder"] },
            { "name": "Monitor Stand", "quantity": 0,src:OfficeFuniture["Monitor Stand"] },
            { "name": "Cable Management Tray", "quantity": 0,src:OfficeFuniture["Cable Management Tray"] },
            { "name": "Desk Organizer", "quantity": 0,src:OfficeFuniture["Desk Organizer"] },
            { "name": "Whiteboard/Blackboard", "quantity": 0,src:OfficeFuniture["Blackboard"] }
          ],
          "open": false,
          "id": 5
        }
      ],
      "active": true
    },
    {
      "mainItem": "Office Technology Electronics",
      "subItem": [
        {
          "Item": "Computers & Laptops",
          "options": [
            { "name": "Desktop Computer", "quantity": 0, src: OfficeTechImage["Desktop Computer"] },
            { "name": "Laptop", "quantity": 0 ,src: OfficeTechImage["Laptop"] },
            { "name": "All-in-One Desktop", "quantity": 0, src: OfficeTechImage["All-in-One Desktop"] },
            { "name": "Workstation Computer", "quantity": 0, src: OfficeTechImage["Workstation Computer"] }
          ],
          "open": false,
          "id": 1
        },
        {
          "Item": "Printers & Scanners",
          "options": [
            { "name": "Inkjet Printer", "quantity": 0, },
            { "name": "Laser Printer", "quantity": 0 },
            { "name": "All-in-One Printer", "quantity": 0 },
            { "name": "Scanner", "quantity": 0 },
            { "name": "3D Printer", "quantity": 0 }
          ],
          "open": false,
          "id": 2
        },
        {
          "Item": "Networking",
          "options": [
            { "name": "Wi-Fi Router", "quantity": 0 },
            { "name": "Switch", "quantity": 0 },
            { "name": "Modem", "quantity": 0 },
            { "name": "Network Cable", "quantity": 0 }
          ],
          "open": false,
          "id": 3
        },
        {
          "Item": "Projectors & Presentation Equipment",
          "options": [
            { "name": "Projector", "quantity": 0 },
            { "name": "Projector Screen", "quantity": 0 },
            { "name": "Conference Speakerphone", "quantity": 0 },
            { "name": "Interactive Whiteboard", "quantity": 0 }
          ],
          "open": false,
          "id": 4
        },
        {
          "Item": "Telecommunication",
          "options": [
            { "name": "Office Telephone", "quantity": 0 },
            { "name": "VoIP Phone", "quantity": 0 },
            { "name": "Headsets", "quantity": 0 },
            { "name": "Video Conferencing System", "quantity": 0 }
          ],
          "open": false,
          "id": 5
        },
        {
          "Item": "Audio & Visual",
          "options": [
            { "name": "Microphone", "quantity": 0 },
            { "name": "Speaker System", "quantity": 0 },
            { "name": "Conference Audio System", "quantity": 0 }
          ],
          "open": false,
          "id": 6
        }
      ],
      "active": false
    },

    {
      "mainItem": "Office Appliances & Small Electronics",
      "subItem": [
        {
          "Item": "Climate Control",
          "options": [
            { "name": "Air Conditioner (Window/ Split)", "quantity": 0,src : OffAplicationImage["Air Conditioner  Split"] },
            { "name": "Electric Fan (Pedestal/ Ceiling)", "quantity": 0,src : OffAplicationImage["Electric Fan  (Ceiling)"] },
            { "name": "Heater", "quantity": 0,src : OffAplicationImage["Heater"] },
            { "name": "Air Purifier", "quantity": 0,src : OffAplicationImage["Air Purifier"] }
          ],
          "open": false,
          "id": 1
        },
        {
          "Item": "Kitchen & Breakroom Appliances",
          "options": [
            { "name": "Coffee Machine", "quantity": 0,src : OffAplicationImage["Coffee Machine"] },
            { "name": "Microwave Oven", "quantity": 0,src : OffAplicationImage["Coffee Machine"] },
            { "name": "Water Cooler", "quantity": 0,src : OffAplicationImage["Water Cooler"] },
            { "name": "Fridge", "quantity": 0,src : OffAplicationImage["Fridge"] },
            { "name": "Electric Kettle", "quantity": 0,src : OffAplicationImage["Electric Kettle"] },
            { "name": "Toaster", "quantity": 0,src : OffAplicationImage["Toaster"] }
          ],
          "open": false,
          "id": 2
        },
        {
          "Item": "Other Appliances",
          "options": [
            { "name": "Vacuum Cleaner", "quantity": 0,src : OffAplicationImage["Vacuum Cleaner"] },
            { "name": "Shredder", "quantity": 0,src : OffAplicationImage["Shredder"] },
            { "name": "Humidifier", "quantity": 0,src : OffAplicationImage["Humidifier"] },
            { "name": "Electric Stapler", "quantity": 0,src :  OffAplicationImage["Electric Stapler"] },
            { "name": "Lamination Machine", "quantity": 0,src : OffAplicationImage["Lamination Machine"] }
          ],
          "open": false,
          "id": 3
        }
      ],
      "active": false
    },
    {
      "mainItem": "Office Supplies",
      "subItem": [
        {
          "Item": "Stationery",
          "options": [
            { "name": "Notebooks", "quantity": 0,src :offstationeryImage["Notebooks"] },
            { "name": "Paper", "quantity": 0,src :offstationeryImage["Paper"] },
            { "name": "Pens", "quantity": 0,src : offstationeryImage["Pens"] },
            { "name": "Pencils", "quantity": 0,src : offstationeryImage["Pencils"] },
            { "name": "Paper Clips", "quantity": 0,src : offstationeryImage["Paper Clips"] },
            { "name": "Staplers", "quantity": 0,src : offstationeryImage["Staplers"] },
            { "name": "Folders", "quantity": 0,src : offstationeryImage["Folders"]},
            { "name": "Post-It Notes", "quantity": 0,src : offstationeryImage["Post-It Notes"] }
          ],
          "open": false,
          "id": 1
        },
        {
          "Item": "Office Tools",
          "options": [
            { "name": "Scissors", "quantity": 0,src :offstationeryImage["Scissors"] },
            { "name": "Tape Dispenser", "quantity": 0,src :offstationeryImage["Tape Dispenser"] },
            { "name": "Rulers", "quantity": 0 ,src :offstationeryImage["Rulers"]},
            { "name": "Highlighters", "quantity": 0 ,src :offstationeryImage["Highlighters"]},
            { "name": "Whiteboard Markers", "quantity": 0 ,src :offstationeryImage[""]},
            { "name": "Puncher", "quantity": 0 ,src :offstationeryImage["Puncher"]},
            { "name": "Binding Machine", "quantity": 0 ,src :offstationeryImage["Binding Machine"]}
          ],
          "open": false,
          "id": 2
        }
      ],
      "active": false
    },

    {
      "mainItem": "Office Decoration & Miscellaneous",
      "subItem": [
        {
          "Item": "Wall Decorations",
          "options": [
            { "name": "Wall Clocks", "quantity": 0, src :offdecorationImage["Wall Clocks"] },
            { "name": "Paintings", "quantity": 0, src :offdecorationImage["Painting"]  },
            { "name": "Photos", "quantity": 0 , src :offdecorationImage[""] },
            { "name": "Mirrors", "quantity": 0 , src :offdecorationImage["Mirrors"] },
            { "name": "Wall Frames", "quantity": 0, src :offdecorationImage["Wall Frames"]  },
            { "name": "Bulletin Boards", "quantity": 0 , src :offdecorationImage["Bulletin Boards"] }
          ],
          "open": false,
          "id": 1
        },
        {
          "Item": "Indoor Plants & Pots",
          "options": [
            { "name": "Office Flower Pots", "quantity": 0, src :offdecorationImage["Office Flower Pots"]},
            { "name": "Indoor Plant Stand", "quantity": 0, src :offdecorationImage["Indoor Plant Stand"] }
          ],
          "open": false,
          "id": 2
        },
        {
          "Item": "Lighting",
          "options": [
            { "name": "Desk Lamp", "quantity": 0, src :offdecorationImage["Desk Lamp"] },
            { "name": "Floor Lamp", "quantity": 0,src :offdecorationImage["Floor Lamp"] },
            { "name": "Ceiling Light", "quantity": 0,src :offdecorationImage["Ceiling Light"] },
            { "name": "LED Panel Light", "quantity": 0,src :offdecorationImage["LED Panel Light"] }
          ],
          "open": false,
          "id": 3
        },
        {
          "Item": "Miscellaneous",
          "options": [
            { "name": "Clocks", "quantity": 0, src :offdecorationImage["Clocks"] },
            { "name": "Carpet/Rugs", "quantity": 0, src :offdecorationImage["Carpet Rugs"] },
            { "name": "Office Curtains", "quantity": 0, src :offdecorationImage["Office Curtains"] },
            { "name": "Office Air Fresheners", "quantity": 0, src :offdecorationImage["Office Air Fresheners"] },
            { "name": "Umbrella Stand", "quantity": 0, src :offdecorationImage["Umbrella Stand"] }
          ],
          "open": false,
          "id": 4
        }
      ],
      "active": false
    },
    
    {
      "mainItem": "Office Organization",
      "subItem": [
        {
          "Item": "File Storage",
          "options": [
            { "name": "File Rack", "quantity": 0, src :offdecorationImage["File Rack"] },
            { "name": "Document Box", "quantity": 0, src :offdecorationImage["Document Box"] },
            { "name": "Archive Box", "quantity": 0, src :offdecorationImage["Archive Box"] },
            { "name": "File Folders", "quantity": 0 , src :offdecorationImage["File Folders"]},
            { "name": "Letter Tray", "quantity": 0, src :offdecorationImage["Letter Tray"]}
          ],
          "open": false,
          "id": 1
        },
        {
          "Item": "Cable Management",
          "options": [
            { "name": "Cable Ties", "quantity": 0, src: offdecorationImage["CableTies"]},
            { "name": "Cable Organizer", "quantity": 0, src: offdecorationImage["CableOrganizer"] },
            { "name": "Power Strips", "quantity": 0, src: offdecorationImage["PowerStrips"] },
            { "name": "Cable Sleeves", "quantity": 0 , src: offdecorationImage["Cable Sleeves"]},
            { "name": "Desk Cable Tray", "quantity": 0, src: offdecorationImage["DeskCableTray"] }
          ],
          "open": false,
          "id": 2
        }
      ],
      "active": false
    },

    {
      "mainItem": "Office Safety & Security",
      "subItem": [
        {
          "Item": "Fire Extinguishers",
          "options": [
            { "name": "Fire Extinguishers", "quantity": 0,src:offdecorationImage["Fire Extinguisher Small"] }
          ],
          "open": false,
          "id": 1
        },
        {
          "Item": "First Aid Kit",
          "options": [
            { "name": "First Aid Kit", "quantity": 0,src:offdecorationImage["First Aid Kit"] }
          ],
          "open": false,
          "id": 2
        },
        {
          "Item": "Lockers",
          "options": [
            { "name": "Lockers", "quantity": 0,src:offdecorationImage["Lockers"] }
          ],
          "open": false,
          "id": 3
        },
        {
          "Item": "Safe",
          "options": [
            { "name": "Safe", "quantity": 0,src: offdecorationImage["Safe"] }
          ],
          "open": false,
          "id": 4
        },
        {
          "Item": "Smoke Detectors",
          "options": [
            { "name": "Smoke Detectors", "quantity": 0,src: offdecorationImage["Smoke Detectors"]}
          ],
          "open": false,
          "id": 5
        },
        {
          "Item": "Emergency Light",
          "options": [
            { "name": "Emergency Light", "quantity": 0, src: offdecorationImage["Emergency Light"] }
          ],
          "open": false,
          "id": 6
        }
      ],
      "active": false
    }






  ];



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
