import styles from "./Home.module.css";
import {ColumnDefinition, Table} from "../components/table/Root";
import {Avatar} from "../components/avatar/Root";

type Character = {
    id: string;
    class: 'Dark Knight' | 'Dark Wizard' | 'Fairy Elf' | 'Magic Gladiator' | 'Dark Lord' | 'Summoner' | 'Rage Fighter';
    nickname: string;
    exp: number;
    strength: number;
    energy: number;
    agility: number;
    command: number;
    dexterity: number;
}

const data: Character[] = [
    {
        id: "1",
        class: "Dark Knight",
        nickname: "DarkKnight1",
        exp: 100,
        strength: 100,
        energy: 100,
        agility: 100,
        command: 100,
        dexterity: 100,
    },
    {
        id: "2",
        class: "Dark Wizard",
        nickname: "DarkWizard1",
        exp: 200,
        strength: 200,
        energy: 200,
        agility: 200,
        command: 200,
        dexterity: 200,
    },
    {
        id: "3",
        class: "Fairy Elf",
        nickname: "FairyElf1",
        exp: 300,
        strength: 300,
        energy: 300,
        agility: 300,
        command: 300,
        dexterity: 300,
    },
    {
        id: "4",
        class: "Magic Gladiator",
        nickname: "MagicGladiator1",
        exp: 400,
        strength: 400,
        energy: 400,
        agility: 400,
        command: 400,
        dexterity: 400,
    },
    {
        id: "5",
        class: "Dark Lord",
        nickname: "DarkLord1",
        exp: 500,
        strength: 500,
        energy: 500,
        agility: 500,
        command: 500,
        dexterity: 500,
    },
    {
        id: "6",
        class: "Summoner",
        nickname: "Summoner1",
        exp: 600,
        strength: 600,
        energy: 600,
        agility: 600,
        command: 600,
        dexterity: 600,
    },
    {
        id: "7",
        class: "Rage Fighter",
        nickname: "RageFighter1",
        exp: 700,
        strength: 700,
        energy: 700,
        agility: 700,
        command: 700,
        dexterity: 700,
    },
]

const columns: ColumnDefinition<typeof data[number]>[] = [
    {
        key: "id",
        name: "id",
        label: "ID",
    },
    {
        key: "class",
        name: "class",
        label: "Class",
    },
    {
        key: "nickname",
        name: "nickname",
        label: "Nickname",
    },
    {
        key: "exp",
        name: "exp",
        label: "Experience",
    },
    {
        key: "strength",
        name: "strength",
        label: "Strength",
    },
    {
        key: "energy",
        name: "energy",
        label: "Energy",
    },
    {
        key: "agility",
        name: "agility",
        label: "Agility",
    },
    {
        key: "command",
        name: "command",
        label: "Command",
    },
    {
        key: "dexterity",
        name: "dexterity",
        label: "Dexterity",
    },
]


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
                <div className={styles.top_characters}>
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
                <Table columns={columns} data={data}/>
            </section>
        </main>
    );
}
