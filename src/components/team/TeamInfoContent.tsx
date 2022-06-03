import { useSelectTeamLogo } from 'hooks/useSelectTeamLogo'
import type { INbaTeam } from 'types/nbaGames'
import styles from './teamInfoContent.module.scss'

interface TeamInfoContentProps {
  teamData: INbaTeam
}

const TeamInfoContent = ({ teamData }: TeamInfoContentProps) => {
  const { city, conference, division, full_name: fullName, id } = teamData
  const teamLogo = useSelectTeamLogo(id)

  return (
    <div className={styles.infoContentWrapper}>
      {teamLogo}

      <dl>
        <div>
          <dt>Name</dt>
          <dd>{fullName}</dd>
        </div>
        <div>
          <dt>City</dt>
          <dd>{city}</dd>
        </div>
        <div>
          <dt>Conference</dt>
          <dd>{conference}</dd>
        </div>
        <div>
          <dt>division</dt>
          <dd>{division}</dd>
        </div>
        <div>
          <dt>City</dt>
          <dd>{city}</dd>
        </div>
      </dl>
    </div>
  )
}

export default TeamInfoContent
