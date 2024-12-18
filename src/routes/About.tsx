import React from 'react';

import Skeleton from '../components/Skeleton';
import Article from '../components/Article';

function About() {
  return (
    <Skeleton>
      <Article.T title="About">
        <Article.P>Hi, I’m Jake Kinsella. I’m a senior software engineer + technical leader and an aspiring entrepreneur (soon to be more than aspiring). At this point, I’ve been programming for the majority of my life. I learned my first programming language (Ruby) when I was in fourth grade and have been programming ever since.</Article.P>

        <Article.P>Right now, I build databases. I currently work at ChaosSearch as the Engineering Team Lead, responsible for all technical work for our SaaS customers. That means a lot of P1 incident response/feature requests, direct customer management, and technical leadership + mentorship. Over the past five years, I’ve grown with ChaosSearch starting as an intern here five years ago and growing to a Senior Software Engineer before becoming a Team Lead.</Article.P>

        <Article.P>Before that, I went to Northeastern for CS and interned at a variety of Boston startups. I caught the startup bug early in high school and have been doing it ever since. But you can read about the rest of it in my <a href="https://jakekinsella-portfolio.s3.amazonaws.com/Resume.pdf">resume</a>.</Article.P>

        <img src="https://jakekinsella-portfolio.s3.amazonaws.com/images/jake.jpg" alt="Me" width="100%" />
      </Article.T>
    </Skeleton>
  );
}

export default About;
