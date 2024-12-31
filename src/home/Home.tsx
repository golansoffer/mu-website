import styles from "./Home.module.css";
import {SequentialVideoPlayer} from "../components/video/VideoPlayer";
import Button from "../components/buttons/primary/Root";
import {TopCharacters} from "./TopCharacters";
import {ServerInfo} from "./ServerInfo";

const videoSources = [
    {src: "/mu-website/mu_cinematic.mp4", type: "video/mp4"},
    {src: "/mu-website/mu_short.mp4", type: "video/mp4"},
    {src: "/mu-website/movie.webm", type: "video/webm"},
];

export function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.cover}>
                <SequentialVideoPlayer sources={videoSources}/>
            </section>

            <section className={styles.banner}>
                <div className={styles.banner_content}>
                    <h1>
                        Rediscover The Golden Era_
                    </h1>
                    <h3>
                        Top-tier tech meets old-school non-P2W nostalgia in MU Core Online.
                    </h3>
                    <Button>Play</Button>
                </div>
            </section>

            <ServerInfo/>
            <TopCharacters/>
        </main>
    );
}

/*
*
*               <div className={`${styles.top_characters} ${state ? styles.top_characters_enter : ''}`}>
                    <Avatar class="MG_S"/>
                    <Avatar class="DW"/>
                    <Avatar class="DK"/>
                    <Avatar class="DL"/>
                </div>
            <section className={styles.content}>
                <h1>MU Online</h1>
                <p>
                    **About Our Server**
                    We are a team of top-tier developers with over ten years of experience, dedicated to merging modern
                    technology with the classic, nostalgic MU Online experience. While we’re constantly refining
                    features to keep the game robust and up-to-date, we remain committed to preserving the old-school
                    feel that fans love.

                    This server is—and always will be—strictly non-pay-to-win. We don’t believe in giving players an
                    unfair advantage through money. Donations are completely optional and only help with server upkeep.
                    The few purchasable items, like extra inventory space or low-tier boxes (Heart of Love, Box of
                    Luck), are purely for convenience. MU remains free for all—no pressure, no paywalls, just pure
                    gameplay.
                </p>
                <p>
                    MU Online is a free-to-play medieval fantasy MMORPG from Webzen. The game features fast-paced
                    combat, quests, dungeons, PvP, castle sieges, and more. Players can choose from the seven
                    classes of Dark Knight, Dark Wizard, Fairy Elf, Magic Gladiator, Dark Lord, Summoner, and Rage
                    Fighter, and participate in a variety of official events and community activities.
                </p>
                <Table>
                    <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>EXP Rate</td>
                        <td>x5</td>
                    </tr>
                    <tr>
                        <td>Drop Rate</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>Version</td>
                        <td>Season 6 Episode 3</td>
                    </tr>
                    <tr>
                        <td>Reset System</td>
                        <td>Reset Level: 400, Reward: 500 Stat Points</td>
                    </tr>
                    <tr>
                        <td>PVP</td>
                        <td>Castle Siege Enabled, PK System Active</td>
                    </tr>
                    <tr>
                        <td>Events</td>
                        <td>Chaos Castle, Blood Castle, Devil Square, Golden Invasions, White Wizard</td>
                    </tr>
                    </tbody>
                </Table>
                <Table>

                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Drop Rate</th>
                        <th>Map</th>
                        <th>Monsters</th>
                        <th>Additional Information</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Normal Items</td>
                        <td>20%</td>
                        <td>*</td>
                        <td>*</td>
                        <td>Standard equipment and consumables that drop regularly from monsters.</td>
                    </tr>
                    <tr>
                        <td>Excellent Items</td>
                        <td>5%</td>
                        <td>*</td>
                        <td>Higher-level monsters</td>
                        <td>Enhanced attributes; more powerful than regular items.</td>
                    </tr>
                    <tr>
                        <td>Ancient Items</td>
                        <td>0.0001%</td>
                        <td>Vulcanus</td>
                        <td>Specific bosses</td>
                        <td>Extremely rare; offer unique set bonuses when equipped together.</td>
                    </tr>
                    <tr>
                        <td>Jewel of Bless</td>
                        <td>7%</td>
                        <td>*</td>
                        <td>Monsters level 72+</td>
                        <td>Used to upgrade items by +1 level with a 100% success rate.</td>
                    </tr>
                    <tr>
                        <td>Jewel of Soul</td>
                        <td>10%</td>
                        <td>*</td>
                        <td>Monsters level 72+</td>
                        <td>Used to upgrade items by +1 level; 50% success rate, increased to 75% if the item has
                            the Luck option.
                        </td>
                    </tr>
                    <tr>
                        <td>Jewel of Chaos</td>
                        <td>25%</td>
                        <td>*</td>
                        <td>Monsters level 72+</td>
                        <td>Used in various combinations with varying success rates, depending on the specific
                            combination formula.
                        </td>
                    </tr>
                    <tr>
                        <td>Jewel of Life</td>
                        <td>4%</td>
                        <td>*</td>
                        <td>Monsters level 72+</td>
                        <td>Used to enhance an item's option; success rate varies based on the item's current option
                            level.
                        </td>
                    </tr>
                    <tr>
                        <td>Jewel of Creation</td>
                        <td>5%</td>
                        <td>*</td>
                        <td>Monsters level 72+</td>
                        <td>Utilized in specific crafting recipes; success rates depend on the particular item being
                            crafted.
                        </td>
                    </tr>
                    <tr>
                        <td>Loch's Feather</td>
                        <td>2%-5%</td>
                        <td>Icarus</td>
                        <td>*</td>
                        <td>Required for creating Wings; drop rate varies with monster level.</td>
                    </tr>
                    <tr>
                        <td>Crest of Monarch</td>
                        <td>2%-5%</td>
                        <td>Icarus</td>
                        <td>*</td>
                        <td>Essential for crafting higher-tier items; drop rate increases with monster level.</td>
                    </tr>
                    <tr>
                        <td>Spirit of Dark Horse</td>
                        <td>2%-5%</td>
                        <td>Lost Tower 7</td>
                        <td>*</td>
                        <td>Used to summon the Dark Horse mount for Dark Lords.</td>
                    </tr>
                    <tr>
                        <td>Spirit of Dark Raven</td>
                        <td>3%-6%</td>
                        <td>Lost Tower 7</td>
                        <td>*</td>
                        <td>Used to summon the Dark Raven pet for Dark Lords.</td>
                    </tr>
                    <tr>
                        <td>Splinter of Armor</td>
                        <td>15%</td>
                        <td>Crywolf</td>
                        <td>Crywolf monsters</td>
                        <td>Component for Fenrir creation.</td>
                    </tr>
                    <tr>
                        <td>Bless of Guardian</td>
                        <td>15%</td>
                        <td>Crywolf</td>
                        <td>Crywolf monsters</td>
                        <td>Component for Fenrir creation.</td>
                    </tr>
                    <tr>
                        <td>Claw of Beast</td>
                        <td>10%</td>
                        <td>Crywolf</td>
                        <td>Crywolf monsters</td>
                        <td>Component for Fenrir creation.</td>
                    </tr>
                    <tr>
                        <td>Flame of Condor</td>
                        <td>5%</td>
                        <td>Kanturu, Kalima</td>
                        <td>Boss monsters</td>
                        <td>Used in the creation of higher-tier wings.</td>
                    </tr>
                    <tr>
                        <td>Moonstone Pendant</td>
                        <td>10%</td>
                        <td>*</td>
                        <td>*</td>
                        <td>Special item with unique properties.</td>
                    </tr>
                    <tr>
                        <td>Box of Heaven</td>
                        <td>60%</td>
                        <td>Devias, Noria</td>
                        <td>*</td>
                        <td>Contains random items; higher drop rate compared to other boxes.</td>
                    </tr>
                    <tr>
                        <td>Silver Medal</td>
                        <td>60%</td>
                        <td>Lorencia, Noria</td>
                        <td>*</td>
                        <td>Contains random items; similar drop rate to Box of Heaven.</td>
                    </tr>
                    <tr>
                        <td>Gold Medal</td>
                        <td>60%</td>
                        <td>Lorencia, Noria, Devias</td>
                        <td>*</td>
                        <td>Contains higher-tier random items; drop rate similar to Silver Medal.</td>
                    </tr>
                    <tr>
                        <td>Sign of Lord</td>
                        <td>80%</td>
                        <td>*</td>
                        <td>*</td>
                        <td>Used in Castle Siege registration; high drop rate.</td>
                    </tr>
                    <tr>
                        <td>Zen</td>
                        <td>80%-100%</td>
                        <td>*</td>
                        <td>*</td>
                        <td>Drops from all monsters; amount increases with the monster's level and type.</td>
                    </tr>
                    </tbody>

                </Table>
            </section>
*
* */
