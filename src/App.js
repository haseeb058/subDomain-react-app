import React from "react";

import { getApp } from "./utils/helper";

const App = () => {
  const App = getApp();
  console.log({ App });
  return (
    <div className="App">
      <App />
    </div>
  );
};

export default App;
