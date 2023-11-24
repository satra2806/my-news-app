import React from "react";
import styles from './Pagination.module.css';
import { useSelector } from 'react-redux';
const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
    const { keyWord } = useSelector((state) => state.news);
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePage = (e) => {
        paginate(e.target.innerText , keyWord);
    }
    
    return (
        <nav>
        <ul className={styles.pagination}>
            {pageNumbers.map((number) => (
            <li key={number} className={styles.pagination__item}>
                <button onClick={handlePage} className={styles.page_link}>
                {number}
                </button>
            </li>
            ))}
        </ul>
        </nav>
    );
}

export default Pagination;
