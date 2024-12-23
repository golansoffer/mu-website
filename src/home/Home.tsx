import styles from "./Home.module.css";

export function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.cover}>
                <video autoPlay muted loop>
                    <source src="/movie.webm" type="video/mp4"/>
                </video>
            </section>

            <section className={styles.banner}>
                <img src='/mu_logo.png' alt="MU Logo" className={styles.mu_logo}/>
            </section>

        </main>
    );
}
