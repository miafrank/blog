import '../index.css'

const Card = ({ repoName, repoLink, repoDescription, repoImg }) => {
  return (
    <div class='max-w-sm items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a
        href={repoLink}
        class='block max-w-lg p-4 bg-white border border-tiffany-blue rounded-md shadow hover:bg-tiffany-blue dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      >
        <img class='rounded-t-lg' src={repoImg} />
      </a>
      <div class='p-5 rounded-md'>
        <a href='#'>
          <h5 class='mb-2 text-2xl font-bold tracking-tight text-hot-pink dark:text-white'>
            {repoName}
          </h5>
        </a>
        <p class='font-normal whitespace-pre-line text-pretty text-royal-blue dark:text-gray-400'>
          {repoDescription}
        </p>
      </div>
    </div>
  )
}

export default Card
