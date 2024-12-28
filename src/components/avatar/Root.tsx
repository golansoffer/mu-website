import styles from './Root.module.css';

/* We could change the DL file format to aligned with all other, remove this mapper  and use string literal*/
const classImageMapper = {
    MG_S: '/avatars/MG_S.jpg',
    MG_E: '/avatars/MG_E.jpg',
    DW: '/avatars/DW.jpg',
    DK: '/avatars/DK.jpg',
    DL: '/avatars/DL.png',
    ELF: '/avatars/ELF.jpg',
}

type AvatarProps = {
    class: keyof typeof classImageMapper;
}

export function Avatar({class: muClass}: AvatarProps) {
    return (
        <article style={{display: 'grid', gridAutoFlow: 'row', gridAutoRows: 'max-content', rowGap: '0.5rem'}}>
            <div className={styles.root1}>
                <div className={styles.container}>
                    <div className={styles.inner}>
                        <img src={classImageMapper[muClass]} alt={muClass}/>
                    </div>
                </div>
            </div>
            <dl style={{margin: 0}}>
                <h4 style={{margin: 0, padding: 0}}>Nickname</h4>
                <p style={{margin: 0, padding: 0}}>321</p>
            </dl>
        </article>
    );
}