import {ReactNode} from "react";
import styles from "./Root.module.css";

export type ColumnDefinition<T> = {
    key: keyof T; // Strictly type `key` to the keys of the data objects
    name: string;
    label: string;
};

type TableProps<T> = Readonly<{
    columns: ColumnDefinition<T>[];
    data: T[];
}>


export function Table<T>({columns, data}: TableProps<T>): JSX.Element {
    return (
        <table className={styles.cyber_table}>
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.key.toString()}>{column.label}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td key={column.key.toString()}>{row[column.key] as ReactNode}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}
