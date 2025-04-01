/**
* Header
* - Logo
* - Nav Items
* Body
* - Search
*- RestaurantContainer
*- RestaurantCard
-  -img
--  name of res,rating,cuisines,delivery time
* Footer
* - Copyright
* - Links
- Address
* - Contact

*/

import React from "react";
import ReactDOM from "react-dom/client"; // React 18 import
import Header from "./components/Header";
import Body from "./components/Body";



// Header Component
const Header = () => {
    return (
        <div className="header">
            <img 
                className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
                alt="Logo"
            />
            <nav>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    );
};

// Helper function to generate image URL
const getImageUrl = (imageId) => 
    `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${imageId}`;

// Restaurant Card Component
const RestaurantCard = ({ resData }) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = resData.card.info;

    return (
        <div className="card">
            <img 
                className="res-image"
                src={getImageUrl(cloudinaryImageId)}
                alt={name}
                onError={(e) => e.target.src = "https://via.placeholder.com/400"} // Fallback image
            />
            <h3 className="res-title">{name}</h3>
            <p className="res-cuisine">{cuisines.join(", ")}</p>
            <p className="res-cost">{costForTwo}</p>
            <p className="res-rating">⭐ {avgRating} | {sla.deliveryTime} mins</p>
        </div>
    );
};

// Restaurant Data
const resList = [
    {
        "card": {
            "info": {
                "id": "361092A",
                "name": "Oven Story Pizza - Standout Toppings",
                "cloudinaryImageId": "266d4e8e-0ef7-4bf2-9a80-299b7d8c3209",
                "costForTwo": "₹400 for two",
                "cuisines": ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
                "avgRating": 4.7,
                "sla": { "deliveryTime": 27 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "299472A",
                "name": "La Pino'z Pizza",
                "cloudinaryImageId": "wsiozrbg3dmrfhsriiai",
                "costForTwo": "₹300 for two",
                "cuisines": ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
                "avgRating": 4.3,
                "sla": { "deliveryTime": 21 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "575821A",
                "name": "Le Vera Pizza",
                "cloudinaryImageId": "99e5aa7f-b06c-41c0-ab7b-05a3a7481e1c",
                "costForTwo": "₹300 for two",
                "cuisines": ["Pizzas"],
                "avgRating": 4.2,
                "sla": { "deliveryTime": 32 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "997511A",
                "name": "La Aromaz",
                "cloudinaryImageId": "980bb7f3-cbbe-40a0-be3e-671b45293d91",
                "costForTwo": "₹200 for two",
                "cuisines": ["Chinese", "Italian", "Indian", "Tandoor", "Snacks", "Pizzas", "Pastas", "Home Food", "Fast Food"],
                "avgRating": 4.4,
                "sla": { "deliveryTime": 33 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "927872A",
                "name": "Vishal Confectionery",
                "cloudinaryImageId": "f10f6913-7df4-4b40-a8b7-e255236af02d",
                "costForTwo": "₹200 for two",
                "cuisines": ["Snacks", "Pizzas", "Pastas", "Fast Food", "Burgers", "Cafe"],
                "avgRating": 5.0,
                "sla": { "deliveryTime": 23 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "861723A",
                "name": "Pastas By Pizza Hut",
                "cloudinaryImageId": "9b867d56f10ca8761ab6362cd4a5d423",
                "costForTwo": "₹400 for two",
                "cuisines": ["Pastas"],
                "avgRating": 3.8,
                "sla": { "deliveryTime": 27 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "543211B",
                "name": "The Burger Joint",
                "cloudinaryImageId": "b124ab9f-c1d2-4e58-93f0-d65a8e1c5c78",
                "costForTwo": "₹250 for two",
                "cuisines": ["Burgers", "Fast Food", "American"],
                "avgRating": 4.5,
                "sla": { "deliveryTime": 22 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "684321B",
                "name": "Spice House",
                "cloudinaryImageId": "c56d1a9e-d0f3-44d2-b8a1-6f6b32e6ad17",
                "costForTwo": "₹350 for two",
                "cuisines": ["Indian", "Chinese", "Thai"],
                "avgRating": 4.3,
                "sla": { "deliveryTime": 28 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "745631B",
                "name": "Green Leaf Salads",
                "cloudinaryImageId": "d23fa5a4-e7c2-471a-bc65-1b49b6851c2e",
                "costForTwo": "₹280 for two",
                "cuisines": ["Healthy", "Salads", "Vegan"],
                "avgRating": 4.6,
                "sla": { "deliveryTime": 18 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "856742B",
                "name": "Tandoori Nights",
                "cloudinaryImageId": "f57a3d7e-b2c3-487c-a8f3-11a2e3c99a81",
                "costForTwo": "₹500 for two",
                "cuisines": ["Tandoori", "Indian", "Kebabs"],
                "avgRating": 4.7,
                "sla": { "deliveryTime": 35 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "967853B",
                "name": "Bistro Bliss",
                "cloudinaryImageId": "e89c9f72-f8b0-487d-9e42-5a19f8b3a6f5",
                "costForTwo": "₹320 for two",
                "cuisines": ["Cafe", "Desserts", "Beverages"],
                "avgRating": 4.4,
                "sla": { "deliveryTime": 25 }
            }
        }
    },
    {
        "card": {
            "info": {
                "id": "109864B",
                "name": "Sushi & More",
                "cloudinaryImageId": "a09f8b57-7a23-4f3c-8146-9c48f564b6e1",
                "costForTwo": "₹600 for two",
                "cuisines": ["Japanese", "Sushi", "Asian"],
                "avgRating": 4.8,
                "sla": { "deliveryTime": 40 }
            }
        }
    }
];

 

// Body Component - Displays all restaurant cards
const Body = () => {
    return (
        <div className="container">
            {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.card.info.id} resData={restaurant} />
            ))}
        </div>
    );
};

// App Layout
const AppLayout = () => {
    // console.log(<Body/>);
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
