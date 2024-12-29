import styles from './ServerInfo.module.css';


export function ServerInfo() {
    return <section className={styles.root}>
        <article>
            <div>
                <h1>About.</h1>
                <p>
                    We are a team of top-tier developers with over ten years of experience, dedicated to merging modern
                    technology with the classic, <strong>nostalgic MU Online experience.</strong> While we’re constantly
                    refining
                    features to keep the game robust and up-to-date, we remain committed to preserving the old-school
                    feel that fans love.
                </p>
                <p>
                    <strong>This server is—and always will be—strictly non-pay-to-win</strong>. We don’t believe in
                    giving players an
                    unfair advantage through money. Donations are completely optional and only help with server upkeep.
                    The few purchasable items, like extra inventory space or low-tier boxes (Heart of Love, Box of
                    Luck), are purely for convenience. MU remains free for all—no pressure, no paywalls, just pure
                    gameplay.
                </p>
            </div>
            <div className={styles.config_container}>
                <div>
                    <h1>
                        S6
                    </h1>
                    <h3>
                        Episode 3
                    </h3>
                </div>
                <div>
                    <h1>
                        5x
                    </h1>
                    <h3>
                        EXPERIENCE
                    </h3>
                </div>
                <div>
                    <h1>
                        20%
                    </h1>
                    <h3>
                        drop-rate
                    </h3>
                </div>
            </div>
        </article>
        <article className={styles.image_container}>
            <img src='/public/wp_1.jpg' alt="wallpaper"/>
        </article>
    </section>
}