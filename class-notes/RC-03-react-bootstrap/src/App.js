import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar";
import Slider from "./components/Slider";
import Card from "./components/Card";
import dataa from "./data"

function App() {
  return (
    <div>
      <MyNavbar/>

      <Slider/>

      <Card veri={dataa} />

    </div>
  );
}

export default App;