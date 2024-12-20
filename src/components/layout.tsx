import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from './layout.module.css'

const Layout = ({ randomId, children }: { randomId: Number ,children: React.ReactNode }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)
          
    return (
      <div className={styles.container}>
        <header>
          <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
          <nav className={styles.navBig}>
            <ul>
              <li><Link to="/gal/global">wszystkie</Link> ::&nbsp;</li>
              <li><Link to="/gal/category">kategorie</Link> ::&nbsp;</li>
              <li><Link to={`/gal/${randomId}`}>losowe</Link></li>
            </ul>
            <div>moje zdjęcia</div>
          </nav>
          <nav className={styles.navSmall}>
            <div className={styles.navIcon}>&#9776;</div>
          </nav>
          <ul className={styles.navSmallLinks}>
              <li><a href="/gal/global">wszystkie</a></li>
              <li><a href="/gal/category">kategorie</a></li>
              <li><a href="/gal/80">losowe</a></li>
          </ul>            
        </header>
        <main>
          {children}
          <hr/>          
          <p>77design.pl to galeria zdjęć przedstawiających różnorodne miejsca i tematy. Znajdziesz tu ujęcia <a href="/gal/category/3">zabytków</a>, <a href="/gal/category/2">architektury</a>, <a href="/gal/category/5">nocnych</a> krajobrazów, <a href="/gal/category/8">przyrody</a> i <a href="/gal/category/11">miejskiego życia</a>. Fotografie ukazują zarówno historyczne zakątki, jak i nowoczesne przestrzenie, łącząc detale z szerokimi perspektywami</p>          
        </main>
        <footer className={styles.footer}>
          <a href="/kontakt" title="kontakt">Kontakt</a>
          <span className={styles.grayText}><a rel="me" href="https://mastodon.online/@broman">Mastodon</a></span>
        </footer>
      </div>
    )
  }
  
  export default Layout