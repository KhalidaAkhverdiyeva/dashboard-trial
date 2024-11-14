import Dashboard from "./components/Dashboard/dashboard";
import Header from "./components/Header/header";
import MainTable from "./components/Table/mainTable";
// import TableDetail from "./components/Table/tableDetail";

function App() {
  return (
    <div className="flex foto-sans">
      <Dashboard />
      <div className="ml-[10px] pl-[40px] mt-[50px] mr-[50px] w-[100%] ">
        <Header />
        {/* <TableDetail /> */}
        <MainTable />
      </div>
    </div>
  );
}

export default App;
