import './style.scss';
import { Repository } from './components/repository';
import { Repo } from './components/repository/types';
import { useRepositoriesController } from './useRepositoriesController';
import { Pagination } from '../../components/Pagination';

export function Repositories() {
  const { repositories, handleNextPage, handlePreviousPage, page } = useRepositoriesController();

  return (
    <div className='repositories-container'>
      <ul>
        {repositories?.map((repository: Repo) => (
          <Repository
            key={repository.id}
            repository={repository}
          />
        ))}
      </ul>

      {repositories?.length === 0 && <p>Nenhum repositório encontrado</p>}

      {repositories && repositories.length > 0 && (
        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          page={page}
          data={repositories}
        />
      )}
    </div>
  );
}