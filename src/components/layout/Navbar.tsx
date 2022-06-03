import { HomeImage, SubscribeImage } from 'assets/svgs'
import { NavLink } from 'react-router-dom'
import { cx } from 'styles'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <ul className={styles.navbarUl}>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <HomeImage />
          </NavLink>
        </li>
        <li>
          <NavLink to='team' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <SubscribeImage />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
