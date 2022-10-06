import React from 'react';
import styles from './styles/topArea.module.css'

interface TopAreaProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  pfp: string;
}

export const TopArea = ({
  username,
  name,
  joinedAt,
  bio,
  pfp,
}: TopAreaProps) => {

  return (
    <>
      <div className={styles.Info}>
        <img className={styles.Pfp} src={pfp} alt={name} />
        <div className={styles.SideInfo}>
          <strong className={styles.Name}>{name}</strong>
          <span className={styles.Username}>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </span>
          <span className={styles.JoinedAt}>
            {joinedAt}
          </span>
        </div>
      </div>
      <p className={styles.Bio}> {bio} </p>
    </>
  );
};
