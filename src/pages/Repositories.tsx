import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { Footer, Header, Repository } from '../components';

import '../styles/pages/Repositories.css'

export function Repositories() {
  const { data } = useContext(UserContext);
  const { public_repos } = data;

  return (
    <>
      <Header type={`${public_repos} Repositórios`} />
      <Repository />
      <Footer />
    </>
  );
}