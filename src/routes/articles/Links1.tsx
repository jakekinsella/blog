import React from 'react';

import { T } from '.';
import Article from '../../components/Article';

const Title = "Links (1)";
const Subtitle = "";
const Path = "/post/links_1";
const PostedAt = new Date(Date.parse("Thu, 08 May 2025 03:12:20 EST"));

function Component () {
  return (
    <Article.T title={Title} subtitle={Subtitle} path={Path}>
      <Article.P>
        <b>1:</b> <a href="https://www.astralcodexten.com/p/the-colors-of-her-coat">The Colors Of Her Coat</a><br />
        A very intelligent article outlining “semantic breakdown” where an infinite amount of AI slop devalues real art. The author believes AI is driving this, but it lines up with a broader trend I feel we’ve been seeing in 21st century America. Without a particularly strong/cohesive culture or physical community, we’ve unmasked various institutions/ideals/morals as actually being backed by absolutely nothing.<br />

        A potentially uncontroversial example of this is how much Bitcoin is currently worth. It's backed cyclically by the expectation that it will be more valuable sometime in the future.
      </Article.P>

      <Article.P>
        <b>2:</b> <a href="https://buildwithtract.com/">A Postmortem of a Startup</a><br />
        A detailed account of a tech startup’s failure to get off the ground. The co-founders provide a detailed account of what you literally do to run a company/get funded along with an analysis of their failures.<br />

        Not to knock the authors, but their thesis makes me think of the fictional TechCrunch Disrupt pitch competition on HBO’s Silicon Valley where founder after founder describes how their software will completely change the world. In this case, the thesis is that the UK housing crisis is really a software problem, not a complex societal problem that’s been brewing for hundreds of years.<br />
      </Article.P>

      <Article.P>
        <b>3:</b> <a href="https://gwern.net/improvement">Everyday life improvements since the 90s</a><br />
        An antidote to the feeling of stagnation I sometimes get looking at the tech industry. From 1900 to 1990, we literally put cars on the road, people in planes, and men on the moon. Turns out since the 1990s, tech has improved our day-to-day in a lot of non-obvious ways beyond cell-phones.
      </Article.P>

      <Article.P>
        <b>4:</b> <a href="https://koomen.dev/essays/horseless-carriages/">AI Horseless Carriage</a><br />
        A good model for why AI integrations feel so utterly useless. A particularly lackluster example that we’ve all experienced is Google's Gemini assistant which is effectively Clippy (no I don’t want Gemini to summarize a two sentence email or make meaningless statements about my spreadsheet!).<br />

        The author even outlines a model for how “AI-first” products could actually be useful. It boils down to exposing the AI’s prompt + letting the AI take actions on the end-user’s behalf. I don’t think this totally nails it, but it’s certainly a step forward (and it allows me to avoid products with AI integrations completely).<br />
      </Article.P>

      <Article.P>
        <b>5:</b> <a href="https://www.wheresyoured.at/openai-is-a-systemic-risk-to-the-tech-industry-2/">OpenAI Is A Systematic Risk To The Tech Industry</a><br />
        Turns out OpenAI has complex contractual agreements for new datacenter capacity + is losing lots of money. It is unclear if SoftBank will be able to fulfill their $30-40 billion cash injection this year, and whether OpenAI will need another $30-40 billion next year. Combined with the huge costs of AI inference, and the seemingly diminishing returns on larger AI models presents a real risk that OpenAI won’t exist in its current form in the next couple years.<br />

        Whether OpenAI is alone “systematic” to the tech industry or whether the AI bubble as a whole remains to be seen.
      </Article.P>

      <Article.P>
        <b>6:</b> <a href="https://pages.cs.wisc.edu/~remzi/Naur.pdf">Programing as Theory Building</a><br />
        A really great paper from the 1980s describing the outputs of programming as both the literal code produced, and the intangible mental model of the code held by the developers. In the SaaS world, that is the ability to deploy/resolve incidents quickly/fix bugs/add features/etc integrated over time.<br />

        This very cleanly describes why I believe AI has a long way to go before it can replace human programmers. We’re 60 years into the computer revolution, and still one of the hardest problems in software engineering is communicating the mental model of a codebase to new developers + ensuring it doesn’t deteriorate over time.
      </Article.P>
    </Article.T>
  );
}

const Links1: T = { Title, Subtitle, Path, PostedAt, Component };
export default Links1;
