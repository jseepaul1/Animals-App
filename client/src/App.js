import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DisplayAllAnimals from "./components/DisplayAllAnimals";
import CreateAnimal from "./components/CreateAnimal";
import DisplayOneAnimal from "./components/DisplayOneAnimal";
import UpdateAnimal from "./components/UpdateAnimal";
import Links from "./components/Links";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/allAnimals" element={<DisplayAllAnimals />} />
          <Route path="/new" element={<CreateAnimal />} />
          <Route path="/animal/:id" element={<DisplayOneAnimal />} />
          <Route path="/animal/edit/:id" element={<UpdateAnimal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
