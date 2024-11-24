'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav style={styles.nav}>
        <div style={styles.leftSection}>
          <Image
              src="/black-bird-logo.png" // Replace with your image path
              alt="Logo"
              width={30} // Adjust the size as needed
              height={30} // Adjust the size as needed
              style={styles.image}
          />
          <div style={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
        </div>

        {/*<ul style={{...styles.menu, display: isMenuOpen ? 'block' : 'none'}}>*/}
        {/*  <li style={styles.menuItem}>*/}
        {/*    <Link href="/">Home</Link>*/}
        {/*  </li>*/}
        {/*  <li style={styles.menuItem}>*/}
          {/*    <Link href="/page1">Page 1</Link>*/}
          {/*  </li>*/}
          {/*  <li style={styles.menuItem}>*/}
          {/*    <Link href="/page2">Page 2</Link>*/}
          {/*  </li>*/}
          {/*  <li style={styles.menuItem}>*/}
          {/*    <Link href="/about">About</Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}


          {/*<ul style={styles.menu}>*/}
          {/*  <li style={styles.menuItem}>*/}
          {/*    <Link href="/">Home</Link>*/}
          {/*  </li>*/}
          {/*  <li style={styles.menuItem}>*/}
          {/*    <Link href="/page1">Page 1</Link>*/}
          {/*  </li>*/}
          {/*  <li style={styles.menuItem}>*/}
          {/*    <Link href="/page2">Page 2</Link>*/}
          {/*  </li>*/}
          {/*  <li style={styles.menuItem}>*/}
          {/*    <Link href="/about">About</Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}
      </nav>
);
};

const styles = {
  nav: {
    backgroundColor: 'var(--background)',
    padding: '10px 20px',
    position: 'sticky' as 'sticky', // Sticks to the top of the page
    top: 0,
    zIndex: 1000,
  },
  // menu: {
  //   display: 'flex',
  //   listStyle: 'none',
  //   margin: 0,
  //   padding: 0,
  //   justifyContent: 'space-around',
  // },
  // menuItem: {
  //   margin: '0 10px',
  // },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
  },
  hamburger: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '30px',
  },
  bar: {
    width: '100%',
    height: '3px',
    backgroundColor: '#f8f8f8',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginLeft: 'auto',
    display: 'none', // Initially hidden, toggles on hamburger click
    backgroundColor: '#ffffff', // Match page background
    position: 'absolute',
    top: '50px',
    left: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  menuItem: {
    margin: '10px 0',
    padding: '10px 20px',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Space between hamburger and image
  },
  image: {
    borderRadius: '50%', // Optional: Makes the image circular
  },

};

export default Navbar;