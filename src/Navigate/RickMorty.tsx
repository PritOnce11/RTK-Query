import { useSelector } from 'react-redux';
import '../store/css/Main.css'

import { useGetRickMortyByPageQuery } from '../store/apis/RickMortyApi'
import { RootState } from '../store/store';
import Buttons from './Buttons';

export default function RickMorty() {

    const count = useSelector((state: RootState) => state.counter.value)

    const { data, error, isLoading } = useGetRickMortyByPageQuery(count)

    return (
        <>

            {error ? (
                <h4>Oh no, there was an error</h4>
            ) : isLoading ? (
                <h4>Loading...</h4>
            ) : data ? (
                <>
                    <h1>Rick And Morty</h1>
                <div className="card-container">
                    {data.results.map((rickMorty, index) => (
                        <div className="card" style={{ width: '18rem' }} key={index}>
                            <div className="card-body">
                                <p className="card-text">{rickMorty.name}</p>
                            </div>
                            <img src={rickMorty.image} alt="IMG" className="card-img-top" />
                        </div>
                    ))}
                </div>
                </>

            ) : null}

            <Buttons value={1}></Buttons>
        </>
    )
}

