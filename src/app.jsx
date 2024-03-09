import Navbar from "./components/navbar";
import StorePage from "./pages/storePage";
import HomePage from "./pages/homePage";
import GlobalStyles from "./ui/globalStyles";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
