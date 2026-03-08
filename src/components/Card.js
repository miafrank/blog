import "../index.css";

const Card = ({
  repoName,
  repoLink,
  repoImg,
  techDescription,
  repoDescription
}) => {
  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
      {/* Image with fixed aspect ratio */}
      <img
        src={repoImg}
        alt={repoName}
        className="w-full h-48 object-cover border-b"
      />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{repoName}</h3>

        {/* Tech Stack - styled differently (italic or bold) */}
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
          {techDescription}
        </p>

        {/* Repo Description - with line-clamp for uniformity */}
        <p className="text-gray-600 text-sm flex-grow line-clamp-3 leading-relaxed">
          {repoDescription}
        </p>

        <div className="mt-6">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
