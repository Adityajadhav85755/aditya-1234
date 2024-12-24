import React from 'react'
import Inventory from './components/Inventory'
import { useState } from 'react'
import bg from './assets/images/shifting.jpg'
export let ListContext = React.createContext()
export default function Shop() {
    let inventoryItem=[
        {
          "mainItem": "Shop Categories",
          "subItem": [
            {
              "Item": "Retail Shops",
              "options": [
                { "name": "Electronics", "quantity": 0 },
                { "name": "Clothing", "quantity": 0 },
                { "name": "Footwear", "quantity": 0 },
                { "name": "Jewelry", "quantity": 0 },
                { "name": "Books", "quantity": 0 }
              ],
              "open": false,
              "id": 101
            },
            {
              "Item": "Food and Drinks Shops",
              "options": [
                { "name": "Restaurants", "quantity": 0 },
                { "name": "Bakeries", "quantity": 0 },
                { "name": "Grocery Stores", "quantity": 0 }
              ],
              "open": false,
              "id": 102
            },
            {
              "Item": "Furniture and Home Decorations Shops",
              "options": [
                { "name": "Furniture Stores", "quantity": 0 },
                { "name": "Home Decor", "quantity": 0 }
              ],
              "open": false,
              "id": 103
            },
            {
              "Item": "Health and Beauty Shops",
              "options": [
                { "name": "Pharmacies", "quantity": 0 },
                { "name": "Medicals Stores", "quantity": 0 },
                { "name": "Beauty Stores", "quantity": 0 }
              ],
              "open": false,
              "id": 104
            },
            {
              "Item": "Repair Stores Shops",
              "options": [
                { "name": "Computer Accessories", "quantity": 0 },
                { "name": "Mobile Accessories", "quantity": 0 }
              ],
              "open": false,
              "id": 105
            },
            {
              "Item": "Sports and Entertainment Shops",
              "options": [
                { "name": "Sports Shops", "quantity": 0 },
                { "name": "Music Stores", "quantity": 0 }
                
              ],
              "open": false,
              "id": 106
            },
            {
              "Item": "Pet and Gardening Shops",
              "options": [
                { "name": "Pet Stores", "quantity": 0 },
                { "name": "Nurseries", "quantity": 0 }
              ],
              "open": false,
              "id": 107
            },
            
          ],
          "active": true
        },
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
