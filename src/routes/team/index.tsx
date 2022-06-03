import TeamList from 'components/team/TeamList'
import { useQuery } from 'react-query'
import { Outlet } from 'react-router-dom'
import { getNbaTeamsApi } from 'services/nbaApi'

import styles from './team.module.scss'

const Team = () => {
  const { data: teamsData = [] } = useQuery(['getNbaTeamsApi'], () => getNbaTeamsApi().then((res) => res.data.data), {
    staleTime: Infinity,
  })

  return (
    <div className={styles.subscribeWrapper}>
      <h1 className={styles.title}>NBA TEAM</h1>
      <TeamList teamsData={teamsData} />
      <Outlet />
    </div>
  )
}

export default Team
