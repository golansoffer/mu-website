import { Link } from "@tanstack/react-router";
import style from "./Navigation.module.css";

export function Navigation() {
	return (
		<nav className={style.nav}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				<div className="ver-separator" />

				<li>
					<Link to="/register">Register</Link>
				</li>

				<div className="ver-separator" />

				<li>
					<Link to="/play">Play</Link>
				</li>

				<div className="ver-separator" />

				<li>
					<Link to="/shop">Shop</Link>
				</li>

			</ul>
		</nav>
	);
}
