import {createElement, PropsWithChildren} from "react";
import styles from './Title.module.css';

type Props = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
    className?: string;
}

export function Title({as = 'h1', className, children}: PropsWithChildren<Props>) {
    return createElement(as, {className: `${styles.title}${className ? ` ${className}` : ''}`}, children);
}