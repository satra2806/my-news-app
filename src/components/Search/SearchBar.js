
import { useState } from 'react';
import { Input , Button } from '@chakra-ui/react'
import styles from './SearchBar.module.css';
export default function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div className={styles.searchBar}>
      <Input placeholder='Basic usage' 
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        width={'auto'}
        className={styles.search_input}
      />
      {/* <button type="button" onClick={(e)=>handleSubmit(e)}>Search</button> */}
      <Button colorScheme='blue' className={styles.search_btn}>Search News</Button>
    </div>
  );
}