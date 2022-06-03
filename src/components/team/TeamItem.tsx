import { useSelectTeamLogo } from 'hooks/useSelectTeamLogo'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './teamItem.module.scss'

interface TeamItemProps {
  id: number
  name: string
}

const TeamItem = ({ id, name }: TeamItemProps) => {
  const navigate = useNavigate()

  const teamLogo = useSelectTeamLogo(id)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    navigate(`/team/${e.currentTarget.value}`)
  }

  return (
    <li className={styles.teamItemLi}>
      <button type='button' value={id} onClick={handleClick}>
        {teamLogo}
        <span>{name}</span>
      </button>
    </li>
  )
}
export default TeamItem
