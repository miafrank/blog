import React from "react";
import cardImageBlogs from "../images/card_image_1.png";
import cardImagePopularTweets from "../images/card_image_2.png";
import cardImageChallenges from "../images/card_image_3.png";
import cardImageMixtape from "../images/card_image_4.png";
import Card from "../components/Card";

const ProjectsPage = () => {
  const projects = {
    Website: {
      name: "Website",
      link: "https://github.com/miafrank/blog",
      description: {
        tech: "React | TypeScript | Tailwind",
        repo: "Repository for this website."
      },
      image: cardImageBlogs
    },
    PopularTweets: {
      name: "Popular Tweets",
      link: "https://github.com/miafrank/popular-tweets-python",
      description: {
        tech: "Python | Kafka | Twitter API",
        repo: "Twitter scraper that ingests tweets based on a search term."
      },
      image: cardImagePopularTweets
    },
    CodeChallenges: {
      name: "Code Challenges",
      link: "https://github.com/miafrank/code_challenges",
      description: {
        tech: "Python",
        repo: "A collection of solutions for Leetcode and Hackerrank."
      },
      image: cardImageChallenges
    },
    Mixtape: {
      name: "Mixtape",
      link: "https://github.com/miafrank/mixtape",
      description: {
        tech: "Python | Spotify API | Twilio API",
        repo: "App to text Spotify music recommendations to a friend."
      },
      image: cardImageMixtape
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {Object.entries(projects).map(([key, project]) => (
          <Card
            key={key}
            repoName={project.name}
            repoLink={project.link}
            repoImg={project.image}
            // Passing the sub-keys as individual props
            techDescription={project.description.tech}
            repoDescription={project.description.repo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
