'use client';
import SearchBar from '../components/Search/SearchBar';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Home.module.css';
import NewsCard from '@/components/newsCard';
import { NewsApi } from './api/api';

 
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {news, categories , authors , preferredSource} = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const fetchArticles = async (keyword) => {
      if (!keyword) return;
      // https://content.guardianapis.com/search?api-key=ee130db9-969f-46e4-9082-36e417417020
      NewsApi(authors.value , keyword  , '2022-22-10' , '2022-23-10' , dispatch);

  };

  return (
    <div>
      <NavBar />
      <div> 
        <SearchBar onSearch={fetchArticles} className={styles.srch}/>
      </div>
      <NewsCard />
    </div>
  );
}
