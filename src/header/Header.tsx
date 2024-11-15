
import React, { useState } from 'react'
import NavList from '../navList'
import styles from './Header.module.css'


const Header = () => {
  const [isActive, setActive] = useState(false)

  return (
    <header className={styles['header']}>
      <div className={styles['header-logo']}>
        <img src='/img/logo.png' alt='logo' className={styles['logo']}/>
        <div className={styles['product-name']}>Stratus coin</div>
      </div>

      <NavList isActive={isActive} setActive={setActive}/>

    </header>
  )
}

export default Header