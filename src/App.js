import logo from "./logo.svg";
import "./App.css";
import "./css/214.css";
import Header from "./js/Header.js";
import Intro from "./js/Intro.js";
import Main from "./js/Main.js";
import Sidebar from "./js/Sidebar.js";

function App() {
  return (
    <body id="css-zen-garden">
      <div class="page-wrapper">
        <Header />
        <Intro />
        <Main />
        <Sidebar />
      </div>
    </body>
  );
}

export default App;
