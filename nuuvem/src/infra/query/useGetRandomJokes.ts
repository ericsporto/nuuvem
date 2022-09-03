import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { IJokes } from '../../interfaces/jokes.interface'
import { api } from '../../services/api'


export function useGetRandomJokes(): UseQueryResult<IJokes> {
  return useQuery(['getJokes'], getRandomJokes, {
    refetchOnWindowFocus: false,
    enabled: false
  })
}

async function getRandomJokes() {
  const resp = await api.get<IJokes>('/random')

  return resp.data
}
