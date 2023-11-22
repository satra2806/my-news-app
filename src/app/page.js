'use client';
import SearchBar from '../components/Search/SearchBar';
import ArticleList from '../components/ArticleList';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
// import styles from '../styles/Home.module.css';
import GearButton from '@/components/GearIcon';
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchArticles = async (keyword) => {
    // const response = await fetch(`/api/articles?keyword=${keyword}`);
    // const { keyword, source } = req.query;
      // const url = `https://newsapi.org/v2/everything?q=${keyword}&sources=${"source"}&apiKey=${}`;
      const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=22e78dedff5c477681803597fdd8b4db`;
    
      try {
        const newsResponse = await fetch(url);
        const newsData = await newsResponse.json();
        console.log(newsData, "satra");
        // res.status(200).json(newsData);
      } catch (error) {
      }
  };

  return (
    <div>
      <NavBar />

      <div> 
        <SearchBar onSearch={fetchArticles} />
        <GearButton onOpen={setIsOpen} />
      </div>
      <ArticleList articles={articles} />
      {/* Render articles here */}
    </div>
  );
}
