import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';

const AboutPage: React.FC = () => <h1>This is the about page</h1>;

export default pageWrapper({ Component: AboutPage });