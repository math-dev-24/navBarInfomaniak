import styles from "./Nav.module.scss";
import NavProduct from "../NavProduct/NavProduct"
import { useRef } from "react";

export default function Nav(){

    const cursorRef = useRef(null);

    const runBar = (e) => {
        const cursor = cursorRef.current

        if(cursor){
            const item = e.target
            const rec = item.getBoundingClientRect()
            const parent = item.parentElement.getBoundingClientRect()
            // console.log(parent)
            cursor.style.width = `${rec.width}px`
            cursor.style.left = `${rec.left - parent.width }px`
        }

    }
    return(
        <>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1>INFOMANIAK</h1>
                <ul>
                    <li>
                        <div className={styles.navTitle} onMouseOver={runBar}>Produits</div>
                        <div className={styles.navContent}>
                            <NavProduct />
                        </div>
                    </li>
                    <li>
                        <div className={styles.navTitle} onMouseOver={runBar}>A propos</div>
                        <div className={styles.navContent}>
                            <NavProduct />
                        </div>
                    </li>
                    <li>
                        <div className={styles.navTitle} onMouseOver={runBar}>Support</div>
                        <div className={styles.navContent}>
                            <NavProduct />
                        </div>
                    </li>
                </ul>
                <span className={styles.barNav} ref={cursorRef}></span>
            </nav>
        </header>
        </>
    )
}