import dayjs from 'dayjs'
import type { INbaGame } from 'types/nbaGames'
import { useSelectTeamLogo } from 'hooks/useSelectTeamLogo'

import styles from './scoreItem.module.scss'
import { useMemo } from 'react'

interface ScoreItemProps {
  gameData: INbaGame
}

const ScoreItem = ({ gameData }: ScoreItemProps) => {
  const homeLogo = useSelectTeamLogo(gameData.home_team.id)
  const visitorLogo = useSelectTeamLogo(gameData.visitor_team.id)

  const dateText = useMemo(() => {
    return dayjs(gameData.date).format('YYYY-MM-DD')
  }, [gameData.date])

  const seasonStateText = useMemo(() => {
    return gameData.postseason ? '(postseason)' : '(season)'
  }, [gameData.postseason])

  return (
    <li className={styles.scoreItemLi}>
      <button type='button' value={gameData.id}>
        <div>
          <span>{dateText}</span>
          <span>{seasonStateText}</span>
        </div>

        <div className={styles.matchWrapper}>
          <div className={styles.teamWrapper}>
            <span>{gameData.home_team.full_name}</span>
            {homeLogo}
          </div>

          <div className={styles.scoreWrapper}>
            <span>
              {gameData.home_team_score}:{gameData.visitor_team_score}
            </span>
            <span>{gameData.status}</span>
          </div>

          <div className={styles.teamWrapper}>
            <span>{gameData.visitor_team.full_name}</span>
            {visitorLogo}
          </div>
        </div>
      </button>
    </li>
  )
}

export default ScoreItem
