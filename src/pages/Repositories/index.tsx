import { Suspense } from 'react';
import { Repository } from './components/repository';
import { Repo } from './components/repository/types';
import { useRepositoriesController } from './useRepositoriesController';
import { Loading } from '../../components/Loading';

export function Repositories() {
  const { repositories, handleNextPage, handlePreviousPage, page } = useRepositoriesController();

  return (
    <Suspense fallback={<Loading />}>
      <ul className='repository-container'>
        {repositories?.map((repository: Repo) => (
          <Repository
            key={repository.id}
            repository={repository}
          />
        ))}
      </ul>

      <div className="">
        <button
          onClick={handlePreviousPage}
          disabled={page <= 1}
        >
          Anterior
        </button>
        <span>{page}</span>
        <button
          onClick={handleNextPage}
          disabled={!repositories}
        >
          Proximo
        </button>
      </div>
    </Suspense>
  );
}