import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <section>
        <p className="text-gray-700 mb-4">
          My journey into tech started at a Consulting firm based in St. Loius,
          MO, where I dove headfirst into a 6-week in-house bootcamp that kicked
          off my love for building products and mentoring others. From there, I
          found myself in some pretty interesting places, working on projects
          that combined tech with real-world impact in industries from fintech
          to agriculture tech.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-royal-blue mb-4">
          LaunchCode
        </h2>
        <p className="text-gray-700">
          I wouldn’t be where I am today without the incredible foundation I
          built at LaunchCode. The program, which you can learn more about at
          <a
            href="https://www.launchcode.org"
            className="text-blue-500 underline"
          >
            &nbsp;launchcode.org
          </a>
          , gave me the skills and confidence to dive into the tech industry
          headfirst. It was an intense, bootcamp-style experience that equipped
          me with everything I needed to start making an impact from day one.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-royal-blue mb-4">
          Agricultural Tech
        </h2>
        <p className="text-gray-700">
          One of the highlights of my career was working with an agriculture
          tech company where I dived deep into machine learning models. These
          data science models were all about predicting how well specific seeds
          or crops would perform in different environments, taking into account
          genotype and geolocation to develop linear regression models. It was
          challenging, but incredibly rewarding. I also had the chance to create
          a Dockerized test environment that unblocked testing processes for
          SDETs, which was a game-changer for the entire Platform team.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-royal-blue mb-4">Fintech</h2>
        <p className="text-gray-700">
          In the fintech world, I took on some tough challenges, like optimizing
          Platform APIs and building integrations that helped manage customer
          payments. One of my favorite projects was automating the process for
          customers to making changes to their payment due dates, which involved
          collaboration across multiple teams, heavy data orchestration, and
          various technologies. I also led initiatives that significantly
          improved the performance and reliability of key systems, making a big
          difference in how the company operated.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-royal-blue mb-4">
          United States Military
        </h2>
        <p className="text-gray-700">
          I’ve also contributed to government projects with USMEPCOM, where I
          focused on automating processes for validating crucial information
          like citizenship and background checks. These systems required careful
          design to ensure they were scalable and easy to maintain. One of the
          more memorable moments was leading a major rewrite of a backend system
          called
          <a
            href="https://madeintandem.com/case-studies/modernizing-the-military-enlistment-process/"
            className="text-blue-500 underline"
          >
            &nbsp;MIRS 1.1
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-royal-blue mb-4">
          Mentorship and Leadership
        </h2>
        <p className="text-gray-700">
          Beyond coding, I’m deeply passionate about mentoring and giving back
          to the community. I’ve spent a lot of time guiding early career
          engineers, leveling up senior client engineers, sharing best
          practices, helping engineers grow in their careers and confidence, and
          serving as a Teaching Assistant at LaunchCode for three cohorts. My
          experience in leadership roles has also given me insight into the
          importance of effective communication and team dynamics.
        </p>
      </section>
      <h2 className="text-2xl font-semibold text-royal-blue mb-4">Media</h2>
      <ul className="space-y-4">
        <li>
          <a
            href="https://www.builtinchicago.org/articles/company-recruit-retain-women-engineering?utm_source=linkedin&utm_medium=organic_social&utm_campaign=employer_roundup"
            className="text-xl font-semibold text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Companies Can Recruit and Retain Women in Engineering (2023)
          </a>
          <p className="text-gray-600">
            A deep dive into strategies that companies can use to improve
            diversity in engineering, with insights on how to create an
            inclusive environment for women in tech.
          </p>
        </li>
        <li>
          <a
            href="https://madeintandem.com/blog/heres-know-adjusting-back-typed-languages/?utm_content=buffer63617&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer"
            className="text-xl font-semibold text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here’s What to Know When Adjusting Back to Typed Languages (2023)
          </a>
          <p className="text-gray-600">
            An article about the transition back to statically typed languages
            and what engineers should consider to make the process smoother.
          </p>
        </li>
        <li>
          <a
            href="https://madeintandem.com/team/mia-frank/#singlepost!tandem-roundtable-mentorship"
            className="text-xl font-semibold text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tandem Roundtable: The Importance of Mentorship (2022)
          </a>
          <p className="text-gray-600">
            A roundtable discussion focused on mentorship in tech, featuring
            various perspectives on why mentorship matters and how to foster
            these relationships.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
