function TutorialCard({ tutorial }) {
  return (
    <article className="border border-gray-300 p-4">

      <img
        src={tutorial.image}
        alt={tutorial.title}
        className="w-full h-48 object-cover"
      />

      <h3 className="text-xl font-bold p-2">
        {tutorial.title}
      </h3>

      <p className="p-2">
        {tutorial.description}
      </p>

      <p className="p-2">
        Rating: {tutorial.rating}/5
      </p>

      <p className="p-2">
        Username: {tutorial.username}
      </p>

    </article>
  );
}

export default TutorialCard;