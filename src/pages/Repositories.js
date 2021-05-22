import React from 'react';

import { Header } from '../components/Header';
import { Repository } from '../components/Repository';
import { Footer } from "../components/Footer";

import '../styles/pages/Repositories.css'


export function Repositories() {
  return (
    <>
      <Header type="52 Repositórios" />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Footer />
    </>
  );
}