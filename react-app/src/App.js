import logo from './logo.svg';
import './App.css';

import { BloccoFoto } from "./components/Header/BloccoFoto";
import { BloccoDescription } from "./components/Header/BloccoDescription";
import { SectionVoci } from "./components/Main/SectionVoci";
import { SectionContatti } from "./components/Main/SectionContatti";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BloccoFoto></BloccoFoto>
        <BloccoDescription></BloccoDescription>

      </header>
      <main className="App-main">
        <div className="section_voci">
          <SectionVoci title="Esperienza Lavorativa"></SectionVoci>
          <SectionVoci title="Lingue"></SectionVoci>
          <SectionVoci title="Hobby"></SectionVoci>
        </div>
        <div className="section_contatti">
          <SectionContatti title="Contatti"></SectionContatti>
        </div>

      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
