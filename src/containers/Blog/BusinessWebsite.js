// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import BlogReadMore from '../../components/Blog/BlogReadMore';
import Footer from '../../components/Common/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
// Home Component
export default function BusinessWebsite() {
  const { t } = useTranslation();

  const blog = {
    body: (
      <>
        {t(
          'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.'
        )}
        <br />
        <br />
        <h2 style={{ color: '#0F52BA' }}>{t('Enables Online Marketing:')}</h2>
        {t(
          'If you have a business website you can use any online strategy to market your business and attract potential customers. This will help you in expanding your business. There are a lot of marketing strategies, you can use any depending upon the type of your business but for that, you need to have a business website first. You can easily use your website to attract new customers through social media marketing. You can use third-party social media to promote your business but you need to have a place where you can direct your potential customer so that they can learn about your business. When the potential customer comes to your website he will look at your products and possibly buy them. Hence you need a website to utilize online marketing strategies.'
        )}
        <br />
        <br />
        <h2 style={{ color: '#0F52BA' }}>{t('Increase in sales and revenue:')}</h2>
        {t(
          'Your website will give an introduction to your products and business. As said earlier people will most likely look up your company or business before even entertaining the idea of buying your product. If you have a business website then it will be easy for your customers to find all the information about the products you sell. Your business website will house all the content about your business to engage your audience and convince them to buy your products or services etc. This will lead to an increase in revenue.'
        )}{' '}
        <br />
        {t(
          'You can allow your customers to shop online from your website. This can boost your sales dramatically. These days people prefer to roam the internet and buy products from their homes. Smart businessmen realize this and give people the option to buy their products directly from their business website. This will increase the possibility of sales.'
        )}
        <br />
        {t(
          'As said earlier your website has wide access which means it can reach more customers. The more people visit your website, the more opportunities you have to make a sale. Plus your shop cannot remain open 24/7 but your website can be accessed 24/7 that again could lead to an increase in your sales as your product can be sold through your website during any time of the day.'
        )}
        <br />
        <br />
        <h2 style={{ color: '#0F52BA' }}>{t('Establishing Credibility')}</h2>
        {t(
          'A business website also brings credibility to your business. People usually look at the business with no websites as sketchy and less trust-worthy. You might be wondering how can a website bring credibility to your business. Well, most websites have review sections where the customers write reviews about your products or services. A consumer is 40% more likely to buy your product if they read positive reviews about your business.'
        )}
        <br />
        {t(
          'You can also bring credibility to your website by publishing educational and well-researched material. It will let your customers know that you know what you are talking about and what you are selling. This will increase the chances of purchase by a customer.'
        )}
        <br />
        <br />
        <h2 style={{ color: '#0F52BA' }}>{t('Distinguish yourself through your website:')}</h2>
        {t(
          'You can also use your website to be different from your competitors in the market. You can uniquely design your website and catch the attention of potential customers. In the crowded market, it is necessary to set yourself apart to get the attention of people. Use your website to establish yourself as different from others in the market and gain new customers every day.'
        )}
        <br />
        <br />
        <h2 style={{ color: '#0F52BA' }}>{t('Around the clock availability:')}</h2>
        {t(
          'We have discussed this briefly before but it’s worth mentioning again that a website ensures around the clock availability of your services. You might be sleeping in your home but a customer might be buying products from your website while you sleep. So your website keeps working 24/7 to attract new customers and sell them your products. It acts like a digital salesperson who is working all day. It attracts customers, provides them the information, shows them reviews, convinces them to buy and collects payment from them. This leads to an increase in sales and revenue.'
        )}
        <br />
        <br />
        <h2 style={{ color: '#0F52BA' }}>{t('Professional Image')}</h2>
        {t(
          'Your business website gives your brand or company a professional image. If your website is easy to navigate, has an attractive design, and helpful content, it will give the customer a very professional image of your business and they will seriously consider buying from you.'
        )}
        <br />
        <br />
        <h2 style={{ color: '#0F52BA' }}>{t('Extremely Economical:')}</h2>
        {t(
          'The website has global access and the important thing is that setting it up will take next to nothing from your pocket. It’s very economical but it opens endless doors of possibilities for you to expand your business.'
        )}
        <br />
        <br />
        <h2 style={{ color: '#0F52BA' }}>{t('Wrapping Up:')}</h2>
        {t(
          'A business website provides you with endless possibilities to expand your business and increase your revenue. It does not matter if you run a restaurant or a brick and mortar business or sale makeup products, you need a website to engage the wider audience, provide them the information, show them reviews and convince them to buy your service or products. So what are you waiting for? Immediately set up your business website and explore the endless opportunities that come with it.'
        )}
      </>
    ),
  };
  return (
    <div className='BlogContainer'>
      <Helmet>
        <title>{t('Falcon IT : Expert Software Engineers')}</title>
        <meta
          name='description'
          content='We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.'
        />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies '
        />
      </Helmet>
      <NavBar />
      <BlogReadMore
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle2.svg`}
        title='Why having a business website is necessary ?'
        content={blog.body}
      />
      <Footer />
    </div>
  );
}
