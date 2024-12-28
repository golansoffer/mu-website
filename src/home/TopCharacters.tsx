import styles from './TopCharacters.module.css';

type Role = 'DK' | 'DW' | 'ELF' | 'MG' | 'DL';

//role to image mapper
const MAPPER = {
    DK: '/avatars/DK.png',
    DW: '/avatars/DW.png',
    ELF: '/avatars/ELF.png',
    MG: '/avatars/MG.png',
    DL: '/avatars/DL.png',
}

type Character = {
    uuid: string;
    nickname: string;
    role: Role;
    level: number;
    resets: number;
}

// mock data:
const MOCK: Character[] = [
    {
        uuid: crypto.randomUUID(),
        nickname: 'Achilles',
        role: 'MG',
        level: 347,
        resets: 0,
    },
    {
        uuid: crypto.randomUUID(),
        nickname: 'San',
        role: 'DW',
        level: 342,
        resets: 0,
    },
    {
        uuid: crypto.randomUUID(),
        nickname: 'Hellsing',
        role: 'DL',
        level: 322,
        resets: 0,
    },
    {
        uuid: crypto.randomUUID(),
        nickname: 'Bulbuliko',
        role: 'DK',
        level: 276,
        resets: 0,
    }
]

export function Character({nickname, role, level, index, resets}: Omit<Character, 'uuid'> & { index: number }) {
    return <article className={styles.character_container}>
        <h3>
            {nickname}
        </h3>
        <div className={styles.img_container}>
            <img src={MAPPER[role]} alt={role}/>
            <span>{`0${index}`}</span>
        </div>
        <div className={styles.desc_container}>
            {`lvl. ${level}${resets > 0 ? `(${resets})` : ''}`}
        </div>
    </article>
}

export function TopCharacters() {
    return <section className={styles.root}>
        <h1>Top Players</h1>
        <div className={styles.container}>
            {MOCK.map((c, i) => <Character key={c.uuid} index={i + 1} nickname={c.nickname} level={c.level}
                                           role={c.role} resets={c.resets}/>)}
        </div>
    </section>
}