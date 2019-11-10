import * as React from 'react';
import fakeApi from 'api/fakeApi';
import VideoDisplay from 'pages/dashboardPage/video';
import VideoCard from 'shared/cards/videoCard/videoCard';

const DashboardPage: React.FC = () => {
  const videos = fakeApi.videos.read();
  // return videos.data.map((link: string) => (
  //   <VideoDisplay
  //     key={`video-display-${link}`}
  //     link={link}
  //   />
  // ));
  return (
    <>
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </>
  );
};

export default DashboardPage;
