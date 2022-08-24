// import logo from './logo.svg';
import './App.css';
import { ItemCard } from './ui-components';
import { NavBar } from "./ui-components";
import { SideBar } from "./ui-components";


<SideBar />

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <header className="App-header">
      </header> */}

      <aside>
        <SideBar></SideBar>
      </aside>
      <ItemCard />
    
    </div>
  );
}

export default App;
