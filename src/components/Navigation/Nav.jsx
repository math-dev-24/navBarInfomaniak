import styles from "./Nav.module.scss";
import NavProduct from "../NavProduct/NavProduct"
import NavSupport from "../NavSupport/NavSupport"
import { useRef } from "react";

export default function Nav(){

    const cursorRef = useRef(null);

    const runBar = (e) => {
        const cursor = cursorRef.current

        if(cursor){
            cursor.style.display = "block"
            const item = e.target
            const rec = item.getBoundingClientRect()
            const parent = item.parentElement.parentElement.getBoundingClientRect()
            console.log(rec, parent)
            cursor.style.width = `${rec.width}px`   
            cursor.style.left = `${ rec.left - parent.left }px`
        }
    }
    const hideBar = () => {
        const cursor = cursorRef.current
        cursor.style.display = "none"
    }
    return(
        <>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.title}>INFOMANIAK</h1>
                <ul  onMouseLeave={hideBar}>
                    <li>
                        <div className={styles.navTitle} onMouseOver={runBar}>Produits</div>
                        <div className={styles.navContent}>
                            <NavProduct />
                        </div>
                    </li>
                    <li>
                        <div className={styles.navTitle} onMouseOver={runBar}>A propos</div>
                        <div className={styles.navContent}>
                            <NavSupport />
                        </div>
                    </li>
                    <li>
                        <div className={styles.navTitle} onMouseOver={runBar}>Support</div>
                        <div className={styles.navContent}>
                            <NavProduct />
                        </div>
                    </li>
                    <span className={styles.barNav} ref={cursorRef}></span>
                </ul>
            </nav>
        </header>
        </>
    )
}