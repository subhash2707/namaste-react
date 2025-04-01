// Body Component - Displays all restaurant cards

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";// useState

// because we are using RestaurantCard in Body component



const Body = () => {

    
//Local State Variable-- Super powerful variable....(react Variable) use React HOok
const [listOfRestaurants, setListOfRestaurants] = useState(resList);//
//pass the whole reslist in usestate 
    
useEffect(()=>{
  //  console.log("useEffect Called"); 
  fetchData();
},[]);

const fetchData = async () => {
    try {
        const data = await fetch("http://localhost:5000/api/restaurants");
        const json = await data.json();
        console.log(json);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
    

//normal js variable
// let listOfRestaurants=

// normal Js variable
//     let listOfRestaurantsJS=[
//         {
            
//                 "card": {
//                     "info": {
//                         "id": "361092A",
//                         "name": "Oven Story Pizza - Standout Toppings",
//                         "cloudinaryImageId": "266d4e8e-0ef7-4bf2-9a80-299b7d8c3209",
//                         "costForTwo": "₹400 for two",
//                         "cuisines": ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
//                         "avgRating": 4.7,
//                         "sla": { "deliveryTime": 27 }
//                     }
//                 }
//         },
//         {
            
//             "card": {
//                 "info": {
//                     "id": "361092B",
//                     "name": "Dominos",
//                     "cloudinaryImageId": "266d4e8e-0ef7-4bf2-9a80-299b7d8c3209",
//                     "costForTwo": "₹400 for two",
//                     "cuisines": ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
//                     "avgRating": 3.4,
//                     "sla": { "deliveryTime": 27 }
//                 }
//             }
//     },
//     {
            
//         "card": {
//             "info": {
//                 "id": "361092C",
//                 "name": "Mcdonald's",
//                 "cloudinaryImageId": "266d4e8e-0ef7-4bf2-9a80-299b7d8c3209",
//                 "costForTwo": "₹400 for two",
//                 "cuisines": ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
//                 "avgRating": 4.2,
//                 "sla": { "deliveryTime": 27 }
//             }
//         }
// }
        
//     ];

    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
                //filter logic here
                // listOfRestaurants=listOfRestaurants.filter(res=>res.card.info.avgRating>4);
                // console.log(listOfRestaurants);

                //create a filtered list
                const filteredlist=listOfRestaurants.filter(res=>res.card.info.avgRating>4);
                setListOfRestaurants(filteredlist);
            }}>
       
            Top Rated Restaurant</button>
    
        </div>
        <div className="container"> 
            {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.card.info.id} resData={restaurant} />
            ))}
           
            </div>
        </div>
    );
};

//console.log("Total Restaurants:", resList.length);

console.log("he");
export default Body;