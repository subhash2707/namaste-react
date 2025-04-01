import { getImageUrl } from "../utils/constants";
import RestaurantImage from "./RestaurantImage";

const FALLBACK_IMAGE = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ien3yl3fgf6vpiratiea"; // Default fallback image

const RestaurantCard = ({ resData }) => {
    if (!resData || !resData.card || !resData.card.info) {
        return <p>Invalid restaurant data</p>;
    }

    const { name, cloudinaryImageId, costForTwo, cuisines = [], avgRating, sla } = resData.card.info;

    // Set the image source; fallback if `cloudinaryImageId` is invalid
    const imageUrl = cloudinaryImageId 
        ? getImageUrl(cloudinaryImageId) 
        : FALLBACK_IMAGE;

    return (
        <div className="card">
            <img 
                className="res-image"
                src={imageUrl}
                alt={name}
                onError={(e) => { e.target.src = FALLBACK_IMAGE; }} // Fallback on error
            />
            <h3 className="res-title">{name}</h3>
            <p className="res-cuisine">{cuisines.length ? cuisines.join(", ") : "Cuisine not available"}</p>
            <p className="res-cost">{costForTwo || "Cost not available"}</p>
            <p className="res-rating">⭐ {avgRating ?? "N/A"} | {sla?.deliveryTime ?? "N/A"} mins</p>
        </div>
    );
};

export default RestaurantCard;
