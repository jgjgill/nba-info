import { useRef } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useClickAway } from 'react-use'
import { getNbaTeamApi } from 'services/nbaApi'
import styles from './teamInfo.module.scss'
import TeamInfoContent from './TeamInfoContent'

const TeamInfo = () => {
  const { teamId } = useParams()
  const navigate = useNavigate()

  const numberTeamId = Number(teamId)

  const ref = useRef(null)

  const { data: teamData } = useQuery(
    ['getNbaTeamApi', numberTeamId],
    () => getNbaTeamApi(numberTeamId).then((res) => res.data),
    { staleTime: Infinity, suspense: false }
  )

  useClickAway(ref, () => navigate('/team'))

  return (
    <div ref={ref} className={styles.teamInfoWrapper}>
      {teamData && <TeamInfoContent teamData={teamData} />}
    </div>
  )
}

export default TeamInfo
