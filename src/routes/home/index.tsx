import ScoreList from 'components/home/ScoreList'
import ScrollLoading from 'components/home/ScrollLoading'
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useQuery } from 'react-query'
import { getNbaGamesApi } from 'services/nbaApi'
import type { INbaGame } from 'types/nbaGames'
import styles from './home.module.scss'

const nbaGemesRefetch = (nowPage: number) => {
  if (nowPage <= 0) return []

  return getNbaGamesApi({ page: nowPage }).then((res) => res.data.data)
}

const Home = () => {
  const { data: totalPage = 0 } = useQuery(
    ['getNbaGamesTotalPage'],
    () => getNbaGamesApi({ page: 0 }).then((res) => res.data.meta.total_pages),
    { staleTime: 1000 * 60 * 5 }
  )

  const [gamesDataState, setGamesDataState] = useState<INbaGame[]>([])
  const [nowPage, setNowPage] = useState(totalPage)

  const { data: gamesData = [], isLoading } = useQuery(['getNbaGamesData', nowPage], () => nbaGemesRefetch(nowPage), {
    staleTime: 1000 * 60 * 5,
    suspense: false,
  })

  const { ref: scrollRef, inView } = useInView()

  useEffect(() => {
    if (gamesData.length === 0) return

    setGamesDataState((prev) => prev.concat(gamesData).sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1)))
  }, [gamesData])

  useEffect(() => {
    if (!inView) return

    setNowPage((prev) => prev - 1)
  }, [inView])

  const scrollLoading = useMemo(() => {
    return isLoading
  }, [isLoading])

  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.title}>NBA MATCH</h1>
      <ScoreList gamesData={gamesDataState} scrollRef={scrollRef} />
      <ScrollLoading isView={scrollLoading} />
    </div>
  )
}

export default Home
