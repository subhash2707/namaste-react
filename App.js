/** 
 * 
 * <div id="parent">
 * <div id="child">
 * <h1>i am h1 tag</h1>
 * <h2>i am h2 tag</h2>
 * </div>
 * </div>
 * 
 * 

*/
const parent =React.createElement("div",{id:"parent"},
    //place info i.e child stuff in third attribute space
    React.createElement("div",{id:"parent"},
        React.createElement("h1",{id:"child"},"i am an h1 tag"),
        React.createElement("h2",{id:"child"},"i am an h2 tag"),   
    )
);

const heading = React.createElement(
    "h1", 
    { id: "heading",xyz:"abc" }, 
    "Hello world from React!"
);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// console.log(heading);
// // react also need a root where it will do all this dom manipulations
// const root=ReactDOM.createRoot(document.getElementById("root"));
// //we will render heading inside react
// root.render(heading);


