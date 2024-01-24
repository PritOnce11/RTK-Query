import { useSelector } from 'react-redux';
import { useGetPokemonByPageQuery } from '../store/apis/PokemonApi'
import { RootState } from '../store/store';

import '../store/css/Main.css'
import Buttons from './Buttons';

export default function Pokemon() {

  const count = useSelector((state: RootState) => state.counter.value)

  const { data, error, isLoading } = useGetPokemonByPageQuery(count)

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>Pokémon List:</h1>
          <ul className="list-group">
            {data.results.map((pokemon, index) => (
              <li className="list-group-item" key={index}>{pokemon.name}</li>
            ))}
          </ul>
        </>
      ) : null}

      <Buttons value={10}></Buttons>
    </>
  )
}
