import React from 'react'
import { UserDataProps } from '../../types'
import styles from '../UserCard/styles/userCard.module.css'
import CenterArea from './CenterArea'
import LinksArea from './LinksArea'
import { TopArea } from './TopArea'

const UserCard = ({ user }: UserDataProps) => {
    return (
        <section className={styles.Container}>
            <img src={user.pfp} alt={user.name} className={styles.imgContainer} />

            <div className={styles.SideArea}>
                <TopArea
                    username={user.username}
                    bio={user.bio}
                    name={user.name}
                    joinedAt={user.joinedAt}
                    pfp={user.pfp}
                />
                <CenterArea
                    repos={user.repos}
                    followers={user.followers}
                    following={user.following}
                />
                <LinksArea links={user.links} />
            </div>
        </section>
    )
}

export default UserCard