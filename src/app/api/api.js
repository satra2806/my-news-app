

export const NewsApi = async ( authors , keyword , from , to , dispatch, page) => {
    // console.log( authors  , from , to , dispatch , keyword, page,"satra");
    // const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=22e78dedff5c477681803597fdd8b4db`;  
    const url = `https://newsapi.org/v2/everything?q=${keyword}&author=${authors}&from=${from}&to=${to}&sortBy=popularity&page=${page}&pageSize=20&apiKey=22e78dedff5c477681803597fdd8b4db`;  
    try {
      const newsResponse = await fetch(url);
      const newsData = await newsResponse.json();
      // console.log(newsData, "satra");
      if(newsData.status === 'ok'){
        dispatch({ type: 'news/setNews', payload: newsData.articles });
      }
      // res.status(200).json(newsData);
    } catch (error) {
    }
}

export const GuardianApi = async ( authors , keyword , from , to , dispatch, page, category) => {
  // console.log( authors  , from , to , dispatch , keyword, page,"satra");
// const url = `https://content.guardianapis.com/search?api-key=ee130db9-969f-46e4-9082-36e417417020`
const url = `https://content.guardianapis.com/search?q=${keyword}&page=${page}&tag=${category}&from-date=${from}&api-key=ee130db9-969f-46e4-9082-36e417417020`
  try {
    const newsResponse = await fetch(url);
    const newsData = await newsResponse.json();
    // console.log(newsData, "satra");
    if(newsData.response.status === 'ok'){
      dispatch({ type: 'news/setNews', payload: newsData.response.results });
    }
    // res.status(200).json(newsData);
  } catch (error) {
      console.error(error);
  }

}