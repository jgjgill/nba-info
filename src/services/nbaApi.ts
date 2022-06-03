import { axios } from 'hooks/worker'
import type { INbaGamesApi, INbaTeam, INbaTeamsApi } from 'types/nbaGames'

const GAMES_URL = `https://free-nba.p.rapidapi.com/games?per_page=25`
const TEAMS_URL = `https://free-nba.p.rapidapi.com/teams/`

interface GamesParams {
  page: number
  id?: number
}

export const getNbaGamesApi = (params: GamesParams) => {
  return axios.get<INbaGamesApi>(`${GAMES_URL}`, {
    params,
    headers: {
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      'X-RapidAPI-Key': `${process.env.REACT_APP_NBA_KEY}`,
    },
  })
}

export const getNbaTeamsApi = () => {
  return axios.get<INbaTeamsApi>(`${TEAMS_URL}`, {
    headers: {
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      'X-RapidAPI-Key': `${process.env.REACT_APP_NBA_KEY}`,
    },
  })
}

export const getNbaTeamApi = (id: number) => {
  return axios.get<INbaTeam>(`${TEAMS_URL}${id}`, {
    headers: {
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      'X-RapidAPI-Key': `${process.env.REACT_APP_NBA_KEY}`,
    },
  })
}
