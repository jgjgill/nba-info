interface ITeam {
  id: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
}

export interface INbaGame {
  id: number
  date: string
  home_team: ITeam
  home_team_score: number
  period: number
  postseason: boolean
  season: number
  status: string
  time: string
  visitor_team: ITeam
  visitor_team_score: number
}

export interface INbaGamesApi {
  data: INbaGame[]
  meta: {
    current_page: number
    next_page: number
    per_page: number
    total_count: number
    total_pages: number
  }
}

export interface INbaTeam {
  id: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
}

export interface INbaTeamsApi {
  data: INbaTeam[]
}
