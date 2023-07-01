import logo from "./images/logo192.png";
import "./App.css";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Welcome from "./components/welcome/Welcome";
import Aboutus from "./components/aboutus/Aboutus";
import SlideGallery from "./components/slidegallery/SlideGallery";
import Donate from "./components/donate/Donate";
import ContactUs from "./components/contactus/ContactUs";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Aboutus />
      <SlideGallery />
      <Donate />
      <ContactUs/>
      <Subscribe/>
      <Footer />
    </div>
  );
}

export default App;
