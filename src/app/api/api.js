

export const NewsApi = async ( authors , keyword , from , to , dispatch) => {
    console.log( authors , keyword , from , to , dispatch , "satra");
    // const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=22e78dedff5c477681803597fdd8b4db`;  
    const url = `https://newsapi.org/v2/everything?q=${keyword}&author=${authors}&from=${from}&to=${to}&sortBy=popularity&pageSize=20&apiKey=22e78dedff5c477681803597fdd8b4db`;  
    try {
      const newsResponse = await fetch(url);
      const newsData = await newsResponse.json();
      console.log(newsData, "satra");
      if(newsData.status === 'ok'){
        dispatch({ type: 'news/setNews', payload: newsData.articles });
      }
      // res.status(200).json(newsData);
    } catch (error) {
    }
}

