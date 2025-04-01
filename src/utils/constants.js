export const getImageUrl = (imageId) => 
    `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${imageId}`;

export const  LOGO_URL="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All";

//we cannot have multiple default export
// export default getImageUrl; USE named Export instead of default export
// export default LOGO_URL