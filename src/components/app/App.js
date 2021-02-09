import '../../css/style.css';

import Header from "../header/Header";
import Main from "../main/Main";
import Features from "../features/Features";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Features />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
