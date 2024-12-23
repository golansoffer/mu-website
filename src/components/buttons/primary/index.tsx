import styles from './index.module.css';
import {getRandomNumberInRange, Merge} from "../../../utils";
import {HTMLAttributes, useRef} from "react";

type ButtonProps = Readonly<Merge<HTMLAttributes<HTMLButtonElement>, {
    children: string;
}>>;
export default function Button({children, ...rest}: ButtonProps) {
    const tag = useRef<string>(`R${getRandomNumberInRange(10, 99)}`);
    return (
        <button {...rest} className={styles.cybr_btn}>
            {children}<span aria-hidden>_</span>
            <span aria-hidden className={styles.cybr_btn__glitch}>{children}_</span>
            <span aria-hidden className={styles.cybr_btn__tag}>{tag.current}</span>
        </button>
    );
}