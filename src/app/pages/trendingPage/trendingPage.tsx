import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import fakeApi from 'api/fakeApi';
import trendingAnimation from 'lotty/lotties/trending.json';
import * as styles from './trendingPage.module.scss';

const TrendingPage: React.FC = () => {
  fakeApi.sampleData.read();
  return (
    <section className={styles.section}>
      <LottiePlayer
        animationData={trendingAnimation}
        autoplay
        loop
        size={600}
      />
    </section>
  );
};

export default TrendingPage;