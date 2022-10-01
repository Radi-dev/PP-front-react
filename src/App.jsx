import { useState } from "react";
// import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import FoodItemsSection from "./components/FoodItemsSection";
import FoodItemsMobileSection from "./components/FoodItemsMobileSection";
import PartnerAndMedia from "./components/PartnerAndMedia";
import DownloadAppSection from "./components/DownloadAppSection";
import DownloadBottomSection from "./components/DownloadBottomSection";
import FooterSection from "./components/FooterSection";
import PreorderModal from "./components/PreorderModal";
import FilterModal from "./components/FilterModal";
import MobileLoader from "./components/MobileLoader";
import MobileFooterCss from "./components/MobileFooterCss";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroSection />
      <CategoriesSection />
      <FoodItemsSection />
      <FoodItemsMobileSection />
      <PartnerAndMedia />
      <DownloadAppSection />
      <DownloadBottomSection />
      <FooterSection />
      <PreorderModal />
      <FilterModal />
      <MobileLoader />
      <MobileFooterCss />
    </div>
  );
}

export default App;
