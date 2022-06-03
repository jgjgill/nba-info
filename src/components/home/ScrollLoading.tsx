import styles from './scrollLoading.module.scss'

interface ScrollLoadingProps {
  isView: boolean
}

const ScrollLoading = ({ isView }: ScrollLoadingProps) => {
  if (!isView) return null

  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loader} />
    </div>
  )
}

export default ScrollLoading
