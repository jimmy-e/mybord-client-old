import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import playlistAnimation from 'lotty/lotties/playlist.json';

const PlaylistPage: React.FC = () => (
  <LottiePlayer
    animationData={playlistAnimation}
    autoplay
    loop
    size={600}
  />
);

export default PlaylistPage;