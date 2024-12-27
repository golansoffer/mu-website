import styles from "./Home.module.css";
import {Table} from "../components/table/Root";
import {Avatar} from "../components/avatar/Root";
import {useEffect, useState} from "react";
import {SequentialVideoPlayer} from "../components/video/VideoPlayer";

const videoSources = [
    {src: "/mu_cinematic.mp4", type: "video/mp4"},
    {src: "/mu_short.mp4", type: "video/mp4"},
    {src: "/movie.webm", type: "video/webm"},
];


export function Home() {
    const [state, setState] = useState(false);

    useEffect(function () {
        setTimeout(function () {
            setState(true);
        }, 100);
    }, []);

    return (
        <main className={styles.main}>
            <section className={styles.cover}>
                <SequentialVideoPlayer sources={videoSources}/>
            </section>

            <section className={styles.banner}>
                <img src='/custom_mu_logo.png' alt="MU Logo" className={styles.mu_logo}/>
                <div className={`${styles.top_characters} ${state ? styles.top_characters_enter : ''}`}>
                    <Avatar class="MG_S"/>
                    <Avatar class="DW"/>
                    <Avatar class="DK"/>
                    <Avatar class="DL"/>
                </div>
            </section>

            <section className={styles.content}>
                <h1>MU Online</h1>
                <p>
                    MU Online is a free-to-play medieval fantasy MMORPG from Webzen. The game features fast-paced
                    combat, quests, dungeons, PvP, castle sieges, and more. Players can choose from the seven
                    classes of Dark Knight, Dark Wizard, Fairy Elf, Magic Gladiator, Dark Lord, Summoner, and Rage
                    Fighter, and participate in a variety of official events and community activities.
                </p>
                <Table>
                    <tr>
                        <th>Feature</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td>Server Name</td>
                        <td>MU CORE</td>
                    </tr>
                    <tr>
                        <td>Version</td>
                        <td>Season 6 Episode 3</td>
                    </tr>
                    <tr>
                        <td>EXP Rate</td>
                        <td>x5</td>
                    </tr>
                    <tr>
                        <td>Drop Rate</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>Reset System</td>
                        <td>Max Resets: 10, Reset Level: 400, Reward: 500 Stat Points</td>
                    </tr>
                    <tr>
                        <td>PVP</td>
                        <td>Castle Siege Enabled, PK System Active</td>
                    </tr>
                    <tr>
                        <td>Events</td>
                        <td>Chaos Castle, Blood Castle, Devil Square, Golden Invasions, White Wizard</td>
                    </tr>

                </Table>
            </section>
        </main>
    );
}
