import React from "react";
import "./App.css";
import Header from "./components/header";
import Counter from "./components/counter";
import ImageList from "./components/imageList";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <ImageList />
      <Footer />
    </div>
  );
}

export default App;
