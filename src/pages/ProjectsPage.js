import React from 'react'
import Card from '../components/Card'

const ProjectsPage = ({ data }) => {
  const imagesBaseURL = '../src/images'
  // TODO: Update repos to include link, desc, imgs and update Cards
  const repos = {
    Blogs: {
      link: 'https://github.com/miafrank/blog',
      description: `
        Tech: React | TypeScript | Tailwind | Flowbite 
        Description: Repository for this website`,
      image: `${imagesBaseURL}/card_image_1`
    },
    PopularTweets: 'https://github.com/miafrank/popular-tweets-python',
    CodeChallenges: 'https://github.com/miafrank/code_challenges',
    Mixtape: 'https://github.com/miafrank/Mixtape'
  }

  const repoDescription = {
    Blogs: '',
    PopularTweets: 'Tech: Python | Kafka | Twitter API | Confluent',
    CodeChallenges: 'Leetcode | Hackerrank Code Challenges',
    Mixtape: 'Tech: Python | Spotify API | Twilio API'
  }

  return (
        <div class="h-screen">
            <div className='card-page'>
            {
                Object.entries(repos).map(([key, subject], i) => (
                <dl className="card" key={i}>
                    <Card repoName={key} repoLink={repos[key]} repoDescription={repoDescription[key]}></Card>
                    {/* <span className="input-label">key: {i} Name: {subject.name}</span> */}
                </dl>
                ))}
            </div>
        </div>
  )
}
export default ProjectsPage
