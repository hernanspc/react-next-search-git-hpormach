import styles from './styles/centerArea.module.css'

interface StastsAreaProps {
    repos: string;
    followers: string;
    following: string;
}

const CenterArea = ({ repos, followers, following }: StastsAreaProps) => {
    return (
        <div className={styles.containerArea} >
            <li className={styles.Data}>
                <span>Repos</span>
                <strong>{repos}</strong>
            </li>
            <li className={styles.Data}>
                <span>Followers</span>
                <strong>{followers}</strong>
            </li>
            <li className={styles.Data}>
                <span>Following</span>
                <strong>{following}</strong>
            </li>
        </div>
    )
}

export default CenterArea