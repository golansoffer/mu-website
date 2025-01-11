import {InputHTMLAttributes, useRef} from "react";
import styles from './root.module.css';
import {fnPlaceholder, Merge} from "../../../utils";


type TextInputProps = Merge<InputHTMLAttributes<HTMLInputElement>, {
    label: string;
    value: string;
    onChange: (value: string) => void;
    error?: string | null;
}>;

/*
    Inspiration:
    https://codepen.io/gwannon/pen/LYjvOLK
*/
export function TextInput({ value, label, onChange = fnPlaceholder, error, ...rest }: TextInputProps) {
    const _id = useRef(crypto.randomUUID());
    return (
        <div className={styles.input_grid}>
            <label htmlFor={_id.current}>{label}</label>
            <div className={styles.root}>
                <input
                    {...rest}
                    className={styles.root_input}
                    id={_id.current}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                {error && <div className={styles.error}>{error}</div>}
            </div>
        </div>
    );
}