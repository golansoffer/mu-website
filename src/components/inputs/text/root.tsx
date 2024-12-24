import {HTMLAttributes, useRef} from "react";
import styles from './root.module.css';
import {fnPlaceholder, Merge} from "../../../utils";


type TextInputProps = Merge<HTMLAttributes<HTMLInputElement>, {
    name: string;
    label: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}>;

/*
    Inspiration:
    https://codepen.io/gwannon/pen/LYjvOLK
*/
export function TextInput({value, label, placeholder, onChange = fnPlaceholder, ...rest}: TextInputProps) {
    const _id = useRef(crypto.randomUUID());
    return (
        <div className={styles.input_grid}>
            <label htmlFor={_id.current}>{label}</label>
            <div className={styles.root}>
                <input {...rest} placeholder={placeholder} className={styles.root_input} id={_id.current} type="text"
                       value={value} onChange={(e) => onChange(e.target.value)}/>
            </div>
        </div>
    );
}