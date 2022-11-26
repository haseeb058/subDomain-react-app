import React from "react";

import { getApp } from "./utils/helper";

const App = () => {
  const DomainApp = getApp();

  return (
    <div className="App">
      <DomainApp />
    </div>
  );
};

export default App;
