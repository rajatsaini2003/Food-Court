import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement =>ReactElement == JSobject =>HtmlElement(Render)
const heading=React.createElement("h1",{id:"heading"},"Namaste React 🚀");

//jsx is not html in js it is html like syntax
//jsx transpiled before it reaches the js by Babel (installed by parcel)
//Babel is a JavaScript compiler.
//JSX => React.createElement => ReactElement == JSobject =>HtmlElement(Render)
const jsxheading=(
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX 🚀
    </h1>
    //this is element
);
const HeadingComp=()=> <h1 className="heading">single component can also be written as this without return</h1>
const HeadingComp2=function(){
    return <h1 className="heading">Namaste React Using Functional Components 🚀</h1>
}
const HeadingComponenets=()=>(
    <div id="container">
        <h1 className="heading">
            Namaste React using Components🚀
        </h1>
        {jsxheading}
        {console.log("hello")}
        {HeadingComp()}
        <HeadingComp2></HeadingComp2>
        <HeadingComp2/>
    </div>
)
const jsxheading2=(
    <HeadingComponenets/>
    //this is element
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxheading);
root.render(<HeadingComponenets />);
