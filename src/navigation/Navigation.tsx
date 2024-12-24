import {Link} from "@tanstack/react-router";
import style from "./Navigation.module.css";
import {CSSProperties} from "react";

function GlitchedText({children}: { children: string }) {
    return <div className={style.container}>
        <div className={style.stack} style={{'--stacks': 3} as CSSProperties}>
            <span style={{'--index': 0} as CSSProperties}>{children}</span>
            <span style={{'--index': 1} as CSSProperties}>{children}</span>
            <span style={{'--index': 2} as CSSProperties}>{children}</span>
        </div>
    </div>
}

export function Navigation() {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <Link to="/">
                        <GlitchedText>
                            Home
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
                            Shop
                        </GlitchedText>
                    </Link>
                </li>

            </ul>
        </nav>
    );
}
