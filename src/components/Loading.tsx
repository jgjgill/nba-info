import { NbaLogoImage } from 'assets/svgs'
import styles from './loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <NbaLogoImage className={styles.nbaLogoImage} />
    </div>
  )
}

export default Loading
