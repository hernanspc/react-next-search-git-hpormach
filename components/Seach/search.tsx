import React from 'react'
import styles from './styles/search.module.css'

const Search = ({ children }: { children?: React.ReactNode }) => {
    return (
        <form className={styles.formContainer}>
            <label className={styles.inputLabel}>
                <img src="/assets/icon-search.svg" alt="search .." />
            </label>
            <input className={styles.inputWrapper} placeholder="Search username ..."

            />
            {children}
        </form>
    )
}

export default Search