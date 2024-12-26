import {HTMLAttributes} from "react";
import styles from "./Root.module.css";


export function Table<T>(props: HTMLAttributes<HTMLTableElement>) {
    return (
        <table {...props} className={styles.cyber_table}/>
    );
}
