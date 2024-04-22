import React from 'react'
import Card from '../components/Card'
import cardImageBlogs from '../images/card_image_1.png'
import cardImagePopularTweets from '../images/card_image_2.png'
import cardImageChallenges from '../images/card_image_3.png'
import cardImageMixtape from '../images/card_image_4.png'

const ProjectsPage = () => {
  const repos = {
    Blogs: {
      link: 'https://github.com/miafrank/blog',
      description: `
        Tech: React | TypeScript | Tailwind

        Description: Repository for this website`,
      image: cardImageBlogs
    },
    PopularTweets: {
      link: 'https://github.com/miafrank/popular-tweets-python',
      description: `
        Tech: Python | Kafka | Twitter API

        Description: Repository for this website`,
      image: cardImagePopularTweets
    },
    CodeChallenges: {
      link: 'https://github.com/miafrank/code_challenges',
      description: `
        Tech: Leetcode | Hackerrank

        Description: Repository for this website`,
      image: cardImageChallenges
    },
    Mixtape: {
      link: 'https://github.com/miafrank/mixtape',
      description: `
        Tech: Python | Spotify API | Twilio API

        Description: Repository for this website`,
      image: cardImageMixtape
    }
  }
  return (
    <div class='pt-5 pb-5 flex flex-col items-center space-y-6 justify-evenly'>
      {Object.entries(repos).map(([key, _], i) => (
        <dl key={i}>
          <Card
            repoName={key}
            repoLink={repos[key].link}
            repoDescription={repos[key].description}
            repoImg={repos[key].image}
          ></Card>
        </dl>
      ))}
    </div>
  )
}
export default ProjectsPage
