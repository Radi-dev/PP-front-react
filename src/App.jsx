import HeaderComponent, {
  HeaderComponentMobile,
} from "./components/HeaderComponent";
import FooterSection from "./components/FooterSection";
import MobileFooterCss from "./components/MobileFooterCss";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HeaderComponentMobile />
      <Home />
      <FooterSection />
      <MobileFooterCss />
    </div>
  );
}

export default App;
