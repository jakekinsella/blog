import React from 'react';

import Skeleton from '../components/Skeleton';
import Article from '../components/Article';

function About() {
  return (
    <Skeleton>
      <Article.T title="About">
        <Article.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nulla vitae augue rhoncus fermentum quis ac neque. Nam feugiat dapibus efficitur. Pellentesque vel lectus ultricies, tempus mi eu, luctus ex. Fusce enim nibh, sollicitudin nec arcu nec, suscipit viverra sapien. Aenean molestie bibendum magna, sed cursus urna. Donec sed urna eget diam eleifend gravida efficitur quis ipsum. Donec nunc tortor, volutpat eget metus a, dignissim convallis justo. Nulla congue urna at risus varius, id fermentum ante congue. Nulla elementum a nisi ut aliquet. Maecenas varius nisi eget auctor tincidunt. Sed placerat tellus nisl. Etiam convallis ornare nisi, vel faucibus metus facilisis nec. Pellentesque pharetra eu sem sed volutpat. Mauris viverra sem a neque sagittis, at tincidunt tellus dignissim. In lectus dui, convallis sed justo nec, dignissim venenatis erat.</Article.P>
      </Article.T>
    </Skeleton>
  );
}

export default About;
