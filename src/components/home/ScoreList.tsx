import { useMemo } from 'react'
import type { INbaGame } from 'types/nbaGames'
import ScoreItem from './ScoreItem'

import styles from './scoreList.module.scss'

interface ScoreListProps {
  gamesData: INbaGame[]
  scrollRef: (node?: Element | null | undefined) => void
}

const ScoreList = ({ gamesData, scrollRef }: ScoreListProps) => {
  const gameDataList = useMemo(() => {
    return gamesData.map((item) => <ScoreItem key={item.id} gameData={item} />)
  }, [gamesData])

  return (
    <ul className={styles.scoreListUl}>
      {gameDataList}

      <div ref={scrollRef} />
    </ul>
  )
}

export default ScoreList
