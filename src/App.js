import { BsBoxArrowRight } from "react-icons/bs";
import "./style.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerItems">
        <input type="text" placeholder="Digite o CEP" />
        <button className="buttonSearch">
          <BsBoxArrowRight size={25} color="#eee" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 74 578 027</h2>

        <span> Rua teste algum</span>
        <span>Complemento: algum</span>
        <span>Planaltina</span>
        <span>Brasilia-DF</span>
      </main>
    </div>
  );
}

export default App;
