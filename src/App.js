import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyLayout from "./components/Body/Body_layout";

function App() {
  return (
    <div className="root_body">
      <Header />
      <BodyLayout />
      <Footer />
    </div>
  );
}

export default App;
