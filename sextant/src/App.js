import DataCard from "./components/DataCard";

function App() {
  return (
    <>
      <div className="banner">
        <h1 className="title">Sextant</h1>
      </div>
      <div className="contentContainer">
        <DataCard />
        <DataCard />
      </div>
    </>
  );
}

export default App;
