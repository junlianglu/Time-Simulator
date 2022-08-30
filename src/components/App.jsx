import React from "react";

function App() {
  let [time, setTime] = React.useState(new Date().toLocaleTimeString("iT"));
  setInterval(() => setTime(new Date().toLocaleTimeString("iT")), 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
