'use client';
import SearchBar from '../components/Search/SearchBar';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Home.module.css';
import NewsCard from '@/components/newsCard';
import { NewsApi, GuardianApi } from './api/api';
import Pagination from '@/components/Pagination';

 
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {news, categories , authors , preferredSource} = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const fetchArticles = async ( page=1 , keyword) => {
      if (!keyword) return; 
      // https://content.guardianapis.com/search?api-key=ee130db9-969f-46e4-9082-36e417417020
      if(preferredSource.value === 'NewsAPI'){
        NewsApi(authors.value , keyword  , '2022-22-10' , '2022-23-10' , dispatch, page);
      } else if(preferredSource.value === 'Guardian') {
        GuardianApi(authors.value , keyword  , '2022-11-22' , '2022-23-10' , dispatch, page, categories.value);
      }

  };

  return (
    <div>
      <NavBar />
      <div> 
        <SearchBar onSearch={fetchArticles} className={styles.srch}/>
      </div>
      <NewsCard />
      {news.length > 0 && (
        <div className={styles.pagination}>
          <Pagination totalArticles={100} articlesPerPage={20} paginate={fetchArticles}  />
        </div>
      )}
    </div>
  );
}
