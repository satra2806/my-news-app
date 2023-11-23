
import { useState } from 'react';
import { Input , Button } from '@chakra-ui/react'
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
export default function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'news/SET_KEYWORD', payload: keyword});
    onSearch(keyword);  
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div className={styles.searchBar}>
      <Input placeholder='Search News' 
        
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        width={'auto'}
        className={styles.search_input}
      />
      {/* <button type="button" onClick={(e)=>handleSubmit(e)}>Search</button> */}
      <Button colorScheme='#333' className={styles.search_btn} onClick={(e)=> handleSubmit(e)}>Search News</Button>
    </div>
  );
}
