import {Link} from "@tanstack/react-router";
import style from "./Navigation.module.css";
import {CSSProperties} from "react";
import {AuthBar} from "../components/auth/AuthBar";

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
    return (
        <nav className={style.nav}>
            <h2 className={style.server_name}>
                <GlitchedText hovered={false}>
                    MU CORE
                </GlitchedText>
                <div className={style.server_credit}/>
            </h2>
            <ul>
                <li>
                    <Link to="/">
                        <GlitchedText>
                            Home
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
            <AuthBar className={style.auth}/>
        </nav>
    );
}
