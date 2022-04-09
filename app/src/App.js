import "./App.css";

import Search from "./components/Nav/Search";
import InfoCard from "./components/BottomCards/Card";
import MapContainer from "./components/Map/Map";

function App() {
  return (
    <div style={{zIndex: 1}}>
      <Search />
      <div style={{ zIndex: 10, position: "fixed", bottom: 0, width: "100%" }}>
        <InfoCard />
      </div>
      <div style={{ zIndex: 0, postion: "fixed", top: 0 }}>
        <MapContainer />
      </div>
    </div>
  );
}

export default App;
