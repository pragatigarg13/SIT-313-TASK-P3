function ArticleCard({ article }) {
  return (
    <article className="border border-gray-300 p-4">

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <h3 className="text-xl font-bold p-2">
        {article.title}
      </h3>

      <p className="p-2">
        {article.description}
      </p>

      <p className="p-2">
        Rating: {article.rating}/5
      </p>

      <p className="p-2">
        Author: {article.author}
      </p>

    </article>
  );
}

export default ArticleCard;