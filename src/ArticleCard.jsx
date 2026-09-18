function ArticleCard({ article }) {
  return (
    <article className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition">

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="text-xl font-bold p-2 text-cyan-700">
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