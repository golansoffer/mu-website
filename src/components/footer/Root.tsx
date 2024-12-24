import * as React from "react";
import styles from './Root.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    &copy; {new Date().getFullYear()} MU Legacy. All Rights Reserved.
                </p>
                <p className={styles.text}>
                    MU Online is a registered trademark of Webzen Inc. This private server is created for educational
                    and non-commercial purposes. All rights and credits for original assets and concepts belong to
                    Webzen Inc.
                </p>
                <p className={styles.text}>
                    Special thanks to all contributors, developers, designers, and the gaming community for their
                    support.
                </p>
                <p className={styles.text}>
                    This server complies with all applicable copyright laws and is committed to ensuring that all
                    stakeholders receive proper credit and recognition.
                </p>
            </div>
            <span className={styles.webzen}/>
        </footer>
    );
};