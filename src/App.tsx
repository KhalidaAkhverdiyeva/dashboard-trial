import Dashboard from "./components/Dashboard/dashboard";
import Header from "./components/Header/header";
import Table from "./components/Table/table";

function App() {
  return (
    <div className="flex foto-sans">
      <Dashboard />
      <div className="ml-[10px] pl-[40px] mt-[50px] mr-[50px] w-[100vw]">
        <Header />
        <Table />
      </div>
    </div>
  );
}

export default App;
