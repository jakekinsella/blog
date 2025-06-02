import React from 'react';

import { T } from '.';
import Article from '../../components/Article';

const Title = "Links (2)";
const Subtitle = "";
const Path = "/post/links_2";
const PostedAt = new Date(Date.parse("Mon, 02 June 2025 02:36:20 EST"));

function Component () {
  return (
    <Article.T title={Title} subtitle={Subtitle} path={Path} postedAt={PostedAt}>
      <Article.P>
        <b>1.</b> <a href="https://potetm.com/devtalk/stability-by-design.html" target="_blank" rel="noreferrer">Stability by Design</a>
        <Article.BR />

        I love Clojure. I love Lisp/Schema languages (thanks to Northeastern's excellent intro-to-CS curriculum) and I think if you’re choosing a language with a GC/VM, it better be the JVM. But Clojure isn’t statically typed and after years of writing Scala, writing code without types scares me.
        <Article.BR /><Article.BR />
        
        But this article struck a chord with me. One of the core tenets of Clojure is stability over time. To do this Clojurians tend to operate their codebase as “append-only.” Here’s a great set of graphs showing “age-of-code” over time in both Clojure and Scala:
        <Article.BR /><Article.BR />
        
        <Article.Image src="https://potetm.com/img/stability-by-design/clojure-code-retention.webp" alt="Clojure codebase—Introduction and retention of code." />
        <Article.BR /><Article.BR />
        
        <Article.Image src="https://potetm.com/img/stability-by-design/scala-code-retention.webp" alt="Scala codebase—Introduction and retention of code." />
        <Article.BR /><Article.BR />

        This is actually one of the strategies we utilize at ChaosSearch to mitigate risk. Depending on the risk analysis of a particular change, we’ll tend towards “append-only” changes (jokingly called “green-only” PRs). This is part of a broader defense in depth strategy to mitigate the inherent risk involved with building a database. Of course we also use Scala.
      </Article.P>

      <Article.P>
        <b>2.</b> <a href="https://plainvanillaweb.com/index.html" target="_blank" rel="noreferrer">Plain Vanilla</a>
        <Article.BR />

        A comprehensive guide to utilizing the Web Components API (implemented by all major browsers). I couldn’t believe that this was all vanilla Javascript, it feels very similar to React. Bookmarked for my next project.
      </Article.P>

      <Article.P>
        <b>3.</b> <a href="https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/">AlphaEvolve: A Gemini-powered coding agent for designing advanced algorithms</a>
        <Article.BR />

        Probably the most compelling model for getting value out of an LLM. Here’s the killer diagram:
        <Article.BR /><Article.BR />
        
        <Article.Image src="https://lh3.googleusercontent.com/HfMcLeMLAkO1bk6LMnZGrLWwvsCyjx5aoS_KJR1FRzGtzVLT9kFiUiL1WzcW4fqilGr4gCC8GLgGIABV0H86CU_8gRjGwj0MKa99E05NaM6QfDbb0g=w1232-rw" alt="" />
        <Article.BR /><Article.BR />
        
        That is, if you can write code to formally verify a potential solution, then you can query a bunch of different LLMs, and take whatever solutions pass your verification. I’ve felt for a while that, until LLMs are more deterministic/hallucinations are solved, the only place you can get real value out of it are in spaces where verification is faster than producing the solution. Of course it follows that if you can describe your verification/scoring with code, you can utilize an LLM to provide lots of solutions and take the best output.
      </Article.P>

      <Article.P>
        <b>4.</b> <a href="https://storytotell.org/what-is-proof-to-a-non-mathematician" target="_blank" rel="noreferrer">What is proof to a non-mathematician?</a>
        <Article.BR />

        A fascinating article describing that the output of mathematics isn’t actually proofs (as seen in published research papers). Instead the goal of mathematics is understanding/insight into the nature of theorems and a proof simply guides the reader to that insight.
        <Article.BR /><Article.BR />

        It’s another example of “the value isn’t in the output.” The author explains that mathematicians tend to not utilize proof solvers for this reason. A proof solver can execute exhaustive proof-by-case-analysis at faster than human speeds but this often doesn’t lead to new insight into the nature of why a theorem is true.
      </Article.P>

      <Article.P>
        <b>5.</b> <a href="https://boydkane.com/essays/experts" target="_blank" rel="noreferrer">Experts have it easy</a>
        <Article.BR />

        A favorite topic of mine is tacit knowledge. That is, knowledge gained from experience that is often very difficult/impossible to communicate. We tend to think of this as intuition. Experts have lots of it, and getting this tacit knowledge out of their head and into the heads of new engineers is one of the epic struggles of scaling a team.
        <Article.BR /><Article.BR />

        But this is a really fun description of how tacit knowledge feels to both the novice and the expert through the very extended metaphor of a hedge maze. In this case, my own summary can’t do it justice, I highly recommend reading.
      </Article.P>

      <Article.P>
        <b>6.</b> <a href="https://jonayre.uk/blog/2022/10/30/the-real-value-isnt-in-the-code/" target="_blank" rel="noreferrer">The real value isn’t in the code</a>
        <Article.BR />

        In a similar vein to <a href="https://pages.cs.wisc.edu/~remzi/Naur.pdf">Programming as Theory Building</a> from last week, this article is a case-study in how the output of a team of software engineers isn’t just code (it’s also tacit knowledge!). The simple evidence is that we software engineers frequently rewrite huge sections of code in less time than it took us to write the original code, while maintaining the same functionality. There is no way we could have performed that feat without going through the process of writing that original code. So by writing the code the first time, we gained some sort of ethereal value that allowed us to rewrite the code again in less time.
        <Article.BR /><Article.BR />

        This naturally extends itself to a team’s velocity when writing bug fixes/enhancements/performance improvements. Given the same codebase, a team steeped in the experience of actually building the code will outperform a team new to the codebase every time.
      </Article.P>

      <Article.P>
        <b>7.</b> <a href="https://surfingcomplexity.blog/2025/05/25/llms-are-weird-man/" target="_blank" rel="noreferrer">LLMs are weird, man</a>
        <Article.BR />

        A measured take on both the strengths and weaknesses of LLMs. Engineers are increasingly dogmatic on the question of AI. Either it’s just a statistical model or literally AGI.
        <Article.BR /><Article.BR />

        I do my best to land in the middle here. While I don’t believe we’re as close to AGI as some believe (in fact I think we’re seeing LLMs plateau in “intellgience”), it’s also clear that LLMs have really incredible capabilities. The question is how to derive value out of their current abilities.
        <Article.BR /><Article.BR />

        Regardless, it does seem clear that LLMs are the next SaaS for the tech industry. If you’re looking to start a VC-backed company, it better be in this space.
      </Article.P>
    </Article.T>
  );
}

const Links2: T = { Title, Subtitle, Path, PostedAt, Component };
export default Links2;
