import styles from './ServerInfo.module.css';


export function ServerInfo() {
    return <section className={styles.root}>
        <article className={styles.container}>
            <div>
                <h1>About.</h1>

                <p>
                    We’re a team of real-life software engineers and devoted MU fans, merging <strong>classic MU
                    nostalgia</strong> with
                    modern polish. Our <strong>strictly non-P2W server</strong> never sells exp or drop boosts, ensuring
                    fair, old-school
                    gameplay. While optional, non-competitive purchases help sustain our cloud services, preserving the
                    authentic MU experience remains our top priority.
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