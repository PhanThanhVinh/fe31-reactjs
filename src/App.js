import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer, { name, className } from "./Footer";

function App() {
  const abc = "abc";
  const abc = "abc";
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
      {name} - {className}
    </div>
  );
}

export default App;
