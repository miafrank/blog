import React from "react";
import cardImageBlogs from "../images/card_image_1.png";
import cardImagePopularTweets from "../images/card_image_2.png";
import cardImageChallenges from "../images/card_image_3.png";
import cardImageMixtape from "../images/card_image_4.png";
import Card from "../components/Card";

const ProjectsPage = () => {
  const repos = {
    Website: {
      name: "Website",
      link: "https://github.com/miafrank/blog",
      description: `
        Tech: React | TypeScript | Tailwind
        Description: Repository for this website`,
      image: cardImageBlogs,
    },
    PopularTweets: {
      name: "Popular Tweets",
      link: "https://github.com/miafrank/popular-tweets-python",
      description: `
        Tech: Python | Kafka | Twitter API
        Description: Twitter scraper that ingests tweets based on a search term`,
      image: cardImagePopularTweets,
    },
    CodeChallenges: {
      name: "Code Challenges",
      link: "https://github.com/miafrank/code_challenges",
      description: `
        Tech: Leetcode | Hackerrank
        Description: Repository for this website`,
      image: cardImageChallenges,
    },
    Mixtape: {
      name: "Mixtape",
      link: "https://github.com/miafrank/mixtape",
      description: `
        Tech: Python | Spotify API | Twilio API
        Description: App to text Spotify music to a friend`,
      image: cardImageMixtape,
    },
  };
  return (
    <div
      class="flex-col flex-auto justify-evenly items-center pt-5 pb-5 space-y-4"
      className="projects-page"
    >
      {Object.entries(repos).map(
        (
          [key, _], // eslint-disable-line no-unused-vars
          i,
        ) => (
          <dl key={i}>
            <Card
              repoName={repos[key].name}
              repoLink={repos[key].link}
              repoImg={repos[key].image}
              repoDescription={repos[key].description}
            ></Card>
          </dl>
        ),
      )}
    </div>
  );
};
export default ProjectsPage;
