import "./App.css";
import SelectableBoxGrid from "./SelectableBoxGrid";

const App = () => {
  const inputList = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];

  return (
    <div className="m-10">
      <SelectableBoxGrid inputList={inputList} />
    </div>
  );
};

export default App;
