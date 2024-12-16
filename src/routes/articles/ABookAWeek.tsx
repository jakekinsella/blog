import React from 'react';

import { T } from '.';
import Article from '../../components/Article';

const Title = "A book a week.";
const Subtitle = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
const Path = "/post/a-book-a-week";
const PostedAt = new Date(Date.parse("2024-12-12T08:41:58EST"));

function Component () {
  return (
    <Article.T title={Title} subtitle={Subtitle} path={Path}>
      <Article.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nulla vitae augue rhoncus fermentum quis ac neque. Nam feugiat dapibus efficitur. Pellentesque vel lectus ultricies, tempus mi eu, luctus ex. Fusce enim nibh, sollicitudin nec arcu nec, suscipit viverra sapien. Aenean molestie bibendum magna, sed cursus urna. Donec sed urna eget diam eleifend gravida efficitur quis ipsum. Donec nunc tortor, volutpat eget metus a, dignissim convallis justo. Nulla congue urna at risus varius, id fermentum ante congue. Nulla elementum a nisi ut aliquet. Maecenas varius nisi eget auctor tincidunt. Sed placerat tellus nisl. Etiam convallis ornare nisi, vel faucibus metus facilisis nec. Pellentesque pharetra eu sem sed volutpat. Mauris viverra sem a neque sagittis, at tincidunt tellus dignissim. In lectus dui, convallis sed justo nec, dignissim venenatis erat.</Article.P>

      <Article.P>Quisque odio enim, facilisis non felis at, feugiat imperdiet dui. Quisque at volutpat nisl. Pellentesque vestibulum ante ultricies mattis ullamcorper. Maecenas viverra hendrerit quam eu posuere. Etiam lectus enim, sagittis in cursus ut, luctus convallis est. Maecenas ullamcorper fermentum est, viverra rhoncus augue maximus quis. Vestibulum ex justo, venenatis quis gravida non, faucibus eget quam. Sed sit amet pretium nunc. Integer mattis, tortor eu sollicitudin scelerisque, est libero laoreet mi, at fermentum lectus arcu sit amet orci. Aenean mattis ex vitae aliquet volutpat. Pellentesque vitae nibh vehicula, vestibulum mauris vel, rhoncus lacus. Cras pharetra erat erat, sit amet porta augue pellentesque ut. Nullam volutpat, quam eget vulputate lacinia, dolor turpis consectetur velit, porttitor euismod quam quam a nisl. Morbi dictum tincidunt nisi vel efficitur. Nullam euismod ex et lectus elementum semper. Phasellus nec placerat turpis.</Article.P>

      <Article.P>Aenean a ex ante. Duis ultrices leo facilisis sollicitudin pretium. Cras sit amet nisl in orci molestie imperdiet at vel neque. Ut egestas bibendum justo at congue. Fusce pretium vestibulum libero sit amet bibendum. Nam eu aliquet nunc, nec mattis velit. In vel lacus non ante venenatis commodo eu non ipsum. Integer vitae neque posuere, interdum lectus venenatis, porta ligula. Sed eget neque sit amet metus pellentesque interdum quis ut nisi. Cras sit amet ante fermentum, suscipit neque porta, sollicitudin nisi. Aliquam maximus velit at ullamcorper volutpat.</Article.P>

      <Article.P>Sed viverra cursus nulla id feugiat. Vestibulum commodo et neque id condimentum. Fusce vitae auctor ex, et mattis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In non eros vestibulum metus mattis sollicitudin id nec turpis. Proin vestibulum molestie suscipit. Donec at diam nulla. Vestibulum facilisis nulla ante, non pulvinar purus pharetra non.</Article.P>

      <Article.P>Donec sollicitudin justo ut hendrerit porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ullamcorper condimentum est vitae volutpat. Integer eget eros sed nisl feugiat tincidunt at quis justo. Quisque lacinia efficitur mattis. Praesent fermentum congue condimentum. Suspendisse efficitur urna non turpis blandit maximus. Pellentesque feugiat ipsum venenatis, lacinia lorem ut, tincidunt nisi. Praesent vitae elit tincidunt ex vestibulum pulvinar vitae ut sem. Mauris posuere ex fringilla, commodo erat et, consectetur metus.</Article.P>
    </Article.T>
  );
}

const ABookAWeek: T = { Title, Subtitle, Path, PostedAt, Component };
export default ABookAWeek;
