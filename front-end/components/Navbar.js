import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
      {/* Add more links */}
      <a className={styles.link} href="/login">Home</a>
      <a className={styles.link} href="/login">Login</a>
      <a className={styles.link} href="/signup">Signup</a>
      {/* ... */}
  </nav>
);

export default Navbar;