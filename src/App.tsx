import Dashboard from "./components/Dashboard/dashboard";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="flex foto-sans">
      <Dashboard />
      <div className="ml-[10px] mt-[50px] mr-[50px] w-[100vw]">
        <Header />
      </div>
    </div>
  );
}

export default App;
