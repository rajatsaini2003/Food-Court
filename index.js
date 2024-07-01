
const heading=React.createElement(
    "h1",
    {id:"heading"},
    "hello from react"
);
const second=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"ch1"},"this is heading"),
        React.createElement("h2",{id:"ch2"},"this is heading")
        ])
);
console.log(second);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(second);