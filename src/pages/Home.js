import { Header } from "../components/Header";
import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";

import '../styles/pages/Home.css';

export function Home() {
  return (
    <>
      <Header />
      <Bio />
      <Footer />
    </>    
  );
}