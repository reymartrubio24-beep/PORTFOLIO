import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      <title>{title || 'Rey-Dev. | Full Stack Developer'}</title>
      <meta name="description" content={description || 'Personal portfolio of Rey-Dev., a full stack web developer specializing in React and Node.js.'} />
      <meta name="keywords" content={keywords || 'portfolio, developer, react, nodejs, fullstack'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default SEO;
