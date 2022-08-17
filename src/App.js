import Sidebar from "./components/Sidebar";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero"
function App() {
  return (
    <div className="App container ">
      {/* flex container */}
      <div className=" flex ">
        {/* Sidebar */}
        <Sidebar />
        {/* main */}
        
          {/* flex container */}
          <div className="container flex flex-col space-y-2">
            <NavigationBar />
            <Hero/>
          </div>
        
      </div>
    </div>
  );
}

export default App;
