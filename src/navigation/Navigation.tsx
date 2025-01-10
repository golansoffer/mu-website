import {Link} from "@tanstack/react-router";
import style from "./Navigation.module.css";
import {CSSProperties, useEffect, useState} from "react";

type CreditSVGProps = {
    color?: string;
    size?: number;
}

function CreditSVG({color = 'inherit', size = 30}: CreditSVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width={`${size}px`}
            height={`${size}px`}
            fill={color}
        >
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fontFamily="Arial, sans-serif"
                fontSize="10"
            >
                ©
            </text>
        </svg>
    );
}

function GlitchedText({children, hovered = true}: { children: string, hovered?: boolean }) {
    return <div className={style.container}>
        <div className={`${style.stack} ${hovered ? '' : style.stack_animated}`}
             style={{'--stacks': 3} as CSSProperties}>
            <span style={{'--index': 0} as CSSProperties}>{children}</span>
            <span style={{'--index': 1} as CSSProperties}>{children}</span>
            <span style={{'--index': 2} as CSSProperties}>{children}</span>
        </div>
    </div>
}

export function Navigation() {
    const isScrolled = useIsWindowScrolled();
    return (
        <nav className={`${style.nav} ${isScrolled ? style.scroll_mode : ''}`}>
            <h2 className={`${style.server_name}${isScrolled ? ` ${style.scrolled_server_name}` : ''}`}>
                <Link to="/">
                    <GlitchedText hovered={false}>
                        MU CORE
                    </GlitchedText>
                </Link>
                <CreditSVG color={isScrolled ? 'black' : 'white'}/>
            </h2>
            <ul>
                <li>
                    <Link to="/news">
                        <GlitchedText>
                            News
                        </GlitchedText>
                    </Link>
                </li>


                <li>
                    <Link to="/play">
                        <GlitchedText>
                            Play
                        </GlitchedText>
                    </Link>
                </li>


                <li>
                    <Link to="/shop">
                        <GlitchedText>
                            Guides
                        </GlitchedText>
                    </Link>
                </li>

                <li>
                    <Link to="/register">
                        <GlitchedText>
                            Register
                        </GlitchedText>
                    </Link>
                </li>
            </ul>
            <div/>
        </nav>
    );
}

function useIsWindowScrolled() {
    const [state, setState] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setState(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return state;
}
