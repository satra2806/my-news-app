export default function ArticleList({ articles }) {
    return (
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    );
  }
  