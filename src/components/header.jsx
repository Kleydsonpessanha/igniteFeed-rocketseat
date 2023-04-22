import styles from './header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';
console.log(igniteLogo)

export function Header() {
 return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo" className={styles.igniteLogo} />
         <strong>Ignite Feed</strong>
    </header>
 );
}