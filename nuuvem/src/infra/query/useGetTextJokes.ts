import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { IJokes } from '../../interfaces/jokes.interface'
import { api } from '../../services/api'

export function useGetTextJokes(): UseQueryResult<IJokes> {
  return useQuery(['getTextJokes'], getTextJokes, {
    refetchOnWindowFocus: false,
    enabled: false
  })
}

async function getTextJokes(text) {
  const resp = await api.get<IJokes>(`/search?query=${text}`)

  return resp.data
}
