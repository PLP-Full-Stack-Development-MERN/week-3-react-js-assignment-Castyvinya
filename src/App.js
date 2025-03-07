import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="p-4">
      <Header />
      <Profile name="John Doe" email="johndoe@example.com" />
      <Counter />
    </div>
  );
}

export default App;
