import LangSwitch from "./components/LangSwitch";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Tabs from "./components/Tabs";
import TotalInformation from "./components/TotalInformation";

function App() {
  return (
    <>
      <LangSwitch />
      <Tabs/>
      <TotalInformation />
      <SearchBar/>
      <Table/>
    </>
  );
}

export default App;
