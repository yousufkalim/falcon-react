// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import BlogHeader from '../components/Common/BlogHeader';
import BlogReadArticles from '../components/Common/BlogReadArticles';
import Footer from '../components/Common/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Agile from '../assets/images/aglie.png';
// Home Component
export default function Blog() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const { t } = useTranslation();

  return (
    <div className='BlogContainer'>
      <Helmet>
        {/* <title>{t('FalconIT : Expert Software Engineers')}</title> */}
        <title>{t('Blog - Falcon IT Consulting')}</title>
        <link rel='canonical' href='https://falconitconsultant.com/blog' />

        <meta
          name='description'
          content='Online Blogs written by the Falcon IT Consulting team are about advancements in information technology and software development industries.'
        />
        <meta
          name='keywords'
          content='blogs, IT blogs, information technology blog, online blog, software development'
        />
      </Helmet>
      <NavBar />
      <BlogHeader />
      <BlogReadArticles
        title='Managing a Remote Team'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle1.svg`}
        to='/remoteteam'
        description={t(
          'In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles.'
        )}
      />
      <BlogReadArticles
        title='Why having a business website is necessary ?'
        Reverse
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle2.svg`}
        to='/businesswebsite'
        description={t(
          'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.'
        )}
      />
      <BlogReadArticles
        PublishDate='August 3rd 2022'
        title='Agile Methodology'
        src={Agile}
        to='/agilemethodology'
        description={t(
          'Agile stands for its versatility and evolutionary nature as one of the most common approaches to project management. Those who work in the industry, or closely to it, are aware that the art of software development is special and a bit different to other kinds of engineering projects.'
        )}
      />

      {/* <BlogReadArticles src={BlogImg3} /> */}
      {/* <BlogList /> */}
      <Footer />
    </div>
  );
}
