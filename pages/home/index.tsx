import React, { useState } from 'react'
import Search from '../../components/Seach/search'
import UserCard from '../../components/UserCard/userCard'
import { UserProps } from '../../types'
import styles from './styles/home.module.css'

const Datamock = {
    "avatar_url": "https://avatars.githubusercontent.com/u/58519791?v=4",
    "bio": "Hi, I'm Hernan\r\nI am a passionate Software Developer who enjoys spending countless hours coding.\r\n💡 I have an entrepreneurial spirit and love learning new tec",
    "blog": "",
    "company": "NttData",
    "created_at": "2019-12-04T14:32:25Z",
    "email": null,
    "events_url": "https://api.github.com/users/hernanspc/events{/privacy}",
    "followers": 5,
    "followers_url": "https://api.github.com/users/hernanspc/followers",
    "following": 14,
    "following_url": "https://api.github.com/users/hernanspc/following{/other_user}",
    "gists_url": "https://api.github.com/users/hernanspc/gists{/gist_id}",
    "gravatar_id": "",
    "hireable": null,
    "html_url": "https://github.com/hernanspc",
    "id": 58519791,
    "location": "Lima, Peru",
    "login": "hernanspc",
    "name": "Hernan Pormachi Quichca",
    "node_id": "MDQ6VXNlcjU4NTE5Nzkx",
    "organizations_url": "https://api.github.com/users/hernanspc/orgs",
    "public_gists": 0,
    "public_repos": 59,
    "received_events_url": "https://api.github.com/users/hernanspc/received_events",
    "repos_url": "https://api.github.com/users/hernanspc/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/hernanspc/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hernanspc/subscriptions",
    "twitter_username": null,
    "type": "User",
    "updated_at": "2022-10-03T16:20:04Z",
    "url": "https://api.github.com/users/hernanspc"
}

const DataUser = {
    "bio": "Hi, I'm Hernan\r\nI am a passionate Software Developer who enjoys spending countless hours coding.\r\n💡 I have an entrepreneurial spirit and love learning new tec",
    "followers": 5,
    "following": 14,
    "joinedAt": "Joined 04 12 2019",
    "links": {
        "location": "Lima, Peru",
        "twitter": null,
        "company": "NttData",
        "blog": ""
    },
    "name": "Hernan Pormachi Quichca",
    "pfp": "https://avatars.githubusercontent.com/u/58519791?v=4",
    "repos": 59,
    "username": "hernanspc"
}

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null)

    function setUserData(user: UserProps | null): void {
        setUser(user)
    }

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100px" height="100px"><radialGradient id="uCZz3JcUOJjrtrvOyVUpaa" cx="33.34" cy="36.064" r="43.888" gradientTransform="translate(0 2)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f4e9c3" /><stop offset=".219" stopColor="#f8eecd" /><stop offset=".644" stopColor="#fdf4dc" /><stop offset="1" stopColor="#fff6e1" /></radialGradient><path fill="url(#uCZz3JcUOJjrtrvOyVUpaa)" d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z" /><linearGradient id="uCZz3JcUOJjrtrvOyVUpab" x1="32" x2="32" y1="5.723" y2="55.93" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#a4a4a4" /><stop offset=".619" stopColor="gray" /><stop offset="1" stopColor="#6f6f6f" /></linearGradient><path fill="url(#uCZz3JcUOJjrtrvOyVUpab)" d="M58,32c0,13.35-10.05,24.34-23,25.83C34.02,57.94,33.01,58,32,58c-1.71,0-3.38-0.17-5-0.49	C15.03,55.19,6,44.65,6,32C6,17.64,17.64,6,32,6S58,17.64,58,32z" /><path fill="#fff" d="M22.973,57.169c-0.006-0.002-0.013-0.004-0.019-0.006C22.961,57.165,22.967,57.167,22.973,57.169z" /><path fill="#fff" d="M40,56.727v-6.266c0-2.733-1.831-6.361-4.341-7.652c9.12-0.931,13.472-5.408,13.472-11.485 c0-2.614-1.125-5.14-3.035-7.269c0.638-2.114,1.44-6.451-0.233-8.098c-4.119,0-6.606,2.636-7.195,3.341 c-2.053-0.696-4.311-1.088-6.679-1.088c-2.363,0-4.613,0.392-6.661,1.084c-0.597-0.71-3.081-3.337-7.191-3.337 c-1.666,1.645-0.873,5.964-0.242,8.082c-1.922,2.134-3.054,4.667-3.054,7.285c0,6.081,4.359,10.561,13.493,11.487 c-1.584,0.816-2.88,2.544-3.63,4.421c-1.394,0.216-2.875,0.273-3.865,0.273c-2.041,0-2.555-0.32-3.648-1.733 c-1.097-1.41-2.263-2.361-3.669-2.753c-0.761-0.079-1.264,0.505-0.604,1.016c2.226,1.537,2.382,4.049,3.28,5.692 C17.008,51.205,18.677,52,20.553,52c0.469,0,2.334,0,3.447,0v4.737c0,0.25,3.998,1.319,7.998,1.319 C36.551,58.056,40,56.833,40,56.727z" /></svg>
                    <button className={styles.buttonContainer} onClick={() => {
                        console.log('click')
                    }}>
                        Dark
                    </button>
                </div>

                <Search>
                    <button className={styles.SubmitBtn} type="submit">
                        Search
                    </button>
                </Search>
            </header>
            {!user && <UserCard user={DataUser} />}

        </main>
    )
}

export default Home