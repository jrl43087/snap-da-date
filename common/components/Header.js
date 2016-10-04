import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Link from 'react-router/lib/Link'

const Header = () => (
  <div>
    <Link to='/' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
      <image src='/images/SNAP.png' />
    </Link>
  </div>
)

const styles = StyleSheet.create({
  // link: {
  //   maxWidth: 700,
  //   color: '#999',
  //   margin: '1.5rem 1rem 1.5rem 0',
  //   display: 'inline-block',
  //   textDecoration: 'none',
  //   fontWeight: 'bold',
  //   transition: '.2s opacity ease',
  //   ':hover': {
  //     opacity: 0.6
  //   }
  // },
  // activeLink: {
  //   color: '#000'
  // }
})

export default Header
