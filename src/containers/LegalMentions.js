// Init
import React from "react";

// Importing Components
import NavBar from "../components/Common/NavBar";
import LegalHeader from "../components/LegalMentions/LegalHeader";
import LegalList from "../components/LegalMentions/LegalList";
import LocationSection from "../components/Common/LocationSection";
import Footer from "../components/Common/Footer";
// Home Component
export default function LegalMentions() {
  return (
    <div className="HomeContainer">
      <NavBar />
      <LegalHeader />
      <LegalList />
      <LocationSection />
      <Footer />
    </div>
  );
}
