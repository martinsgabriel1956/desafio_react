import React from 'react';

import { Header } from '../components/Header';
import { Repository } from '../components/Repository';
import { Footer } from "../components/Footer";

import '../styles/pages/Repositories.css'


export function Repositories() {
  return (
    <>
      <Header />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Footer />
    </>
  );
}