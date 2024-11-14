import { useState } from "react";
import Dashboard from "./components/Dashboard/dashboard";
import Header from "./components/Header/header";
import MainTable from "./components/Table/mainTable";
import TableDetail from "./components/Table/tableDetail";

function App() {
  const [activeTable, setActiveTable] = useState("mainTable");

  const handleTableChange = (tableName: string) => {
    setActiveTable(tableName);
  };
  return (
    <div className="flex foto-sans">
      <Dashboard />
      <div className=" pl-[50px] pr-[50px] mt-[50px] w-[100%] ">
        <Header onTableChange={handleTableChange} activeTable={activeTable} />

        {activeTable === "planTable" && <TableDetail />}
        {activeTable === "mainTable" && <MainTable />}
      </div>
    </div>
  );
}

export default App;
