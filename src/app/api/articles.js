export default async function handler(req, res) {
      const { keyword, source } = req.query;
      const url = `https://newsapi.org/v2/everything?q=${keyword}&sources=${source}&apiKey=${process.env.NEWS_API_KEY}`;
    
      try {
        const newsResponse = await fetch(url);
        const newsData = await newsResponse.json();
        console.log(newsData, "satra");
        res.status(200).json(newsData);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  }