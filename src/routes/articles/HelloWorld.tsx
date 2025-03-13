import React from 'react';

import { T } from '.';
import Article from '../../components/Article';

const Title = "Hello world!";
const Subtitle = "";
const Path = "/post/hello-world";
const PostedAt = new Date(Date.parse("2025-03-13T3:34:57EST"));

function Component () {
  return (
    <Article.T title={Title} subtitle={Subtitle} path={Path}>
      <Article.P>Hi, I’m Jake Kinsella. I’m a senior software engineer + technical leader blogging about my work at ChaosSearch, my personal projects, and chronicling my journey in starting my own company.</Article.P>
    </Article.T>
  );
}

const HelloWorld: T = { Title, Subtitle, Path, PostedAt, Component };
export default HelloWorld;
