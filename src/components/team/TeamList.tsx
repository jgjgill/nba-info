import { useMemo } from 'react'
import type { INbaTeam } from 'types/nbaGames'
import TeamItem from './TeamItem'
import styles from './teamList.module.scss'

interface TeamListProps {
  teamsData: INbaTeam[]
}

const TeamList = ({ teamsData }: TeamListProps) => {
  const teamDataList = useMemo(() => {
    return teamsData.map((item) => <TeamItem key={item.id} id={item.id} name={item.full_name} />)
  }, [teamsData])

  return <ul className={styles.teamListUl}>{teamDataList}</ul>
}

export default TeamList
