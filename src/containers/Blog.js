// Init
import React, { useState } from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import BlogHeader from '../components/Common/BlogHeader';
import BlogReadArticles from '../components/Common/BlogReadArticles';
import BlogImg1 from '../assets/images/blogarticle1.svg';
import BlogImg2 from '../assets/images/blogarticle2.svg';
import BlogImg3 from '../assets/images/blogarticle3.svg';
import BlogList from '../components/Common/BlogList';
import BlogReadMore from '../components/Blog/BlogReadMore';
import Footer from '../components/Common/Footer';
import { useTranslation } from 'react-i18next';

// Home Component
export default function Blog() {
  const { i18n, t } = useTranslation();

  return (
    <div className='BlogContainer'>
      <NavBar />
      <BlogHeader />
      <BlogReadArticles
        title='Managing a Remote Team'
        src={BlogImg1}
        to='/remoteteam'
        description={t(
          'In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles.'
        )}
      />
      <BlogReadArticles
        title='Why having a business website is necessary ?'
        Reverse
        src={BlogImg2}
        to='/businesswebsite'
        description={t(
          'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.'
        )}
      />

      {/* <BlogReadArticles src={BlogImg3} /> */}
      {/* <BlogList /> */}
      <Footer />
    </div>
  );
}
