import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import FoodItemsSection from "../components/FoodItemsSection";
import PartnerAndMedia from "../components/PartnerAndMedia";
import DownloadAppSection from "../components/DownloadAppSection";
import DownloadBottomSection from "../components/DownloadBottomSection";
import PreorderModal from "../components/PreorderModal";
import FilterModal from "../components/FilterModal";
import MobileLoader from "../components/MobileLoader";

const Home = () => (
  <div className="App">
    <HeroSection />
    <CategoriesSection />
    <FoodItemsSection />
    <PartnerAndMedia />
    <DownloadAppSection />
    <DownloadBottomSection />
    <PreorderModal />
    <FilterModal />
    <MobileLoader />
  </div>
);

export default Home;
