import FileExplorer from "./components/FileExplorer";
import fileExplorerData from "./assets/fileExplorer.json";

function App() {
  return (
    <div className="App">
      <FileExplorer explorer={fileExplorerData} />
    </div>
  );
}

export default App;
