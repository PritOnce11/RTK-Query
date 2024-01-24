import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import type { PokemonList } from './types/typePokemon'
import type { PokemonList } from './types/typePokemon'

export const PokemonApi = createApi({
    reducerPath: 'pokemonApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

    endpoints: (builder) => ({
        getPokemonByPage: builder.query<PokemonList, number>({
        query: (page) => `pokemon?limit=10&offset=${page}`,
        })
    })
})

export const { useGetPokemonByPageQuery } = PokemonApi;