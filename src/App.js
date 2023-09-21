import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/button/Button";
import Card from "./components/carrd/Card";

function App() {
  return (
    <div className="App container">
      <Button value="FER201m" />
      <Button value="FER201m" />
      <Button value="FER201m" />
      <Button value="FER201m" />
      <hr />
      <div className="row" style={{padding: "30px"}}>
      <div className="col-md-6 col-lg-4">
        <Card/>
      </div>
      <div className="col-md-6 col-lg-4">
        <Card/>
      </div>
      <div className="col-md-6 col-lg-4">
        <Card />
        </div>
        <div className="col-md-6 col-lg-4">
        <Card />
        </div>
        <div className="col-md-6 col-lg-4">
        <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
