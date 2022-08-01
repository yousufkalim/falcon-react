import { Grid } from '@mui/material';
import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
export default function ContactUsSection(props) {
  const { t } = useTranslation();
  const [number, setNumber] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const phone = number;
    const budget = data.get('budget');
    if (name === '') {
      toast.error(`${t('Please Enter Your Name')}`);
    } else if (name.length < 2 && name.length > 0) {
      toast.error(`${t('The name must be at least 2 characters')}`);
    } else if (email === '') {
      toast.error(`${t('Please Enter Your Email')}`);
    } else if (regex.test(email) === false) {
      toast.error(`${t('Please Enter a Valid Email')}`);
    } else if (phone.length === 0) {
      toast.error(`${t('Please Enter Your Phone Number')}`);
    } else if (phone[0] !== '0') {
      toast.error(`${t('Phone number should start with 0')}`);
    } else if (phone.length < 10 && phone.length > 0) {
      toast.error(`${t('The phone must be at least 10 characters')}`);
    } else if (budget === '') {
      toast.error(`${t('Please Enter Your Budget')}`);
    } else if (message === '') {
      toast.error(`${t('Please Enter A Message')}`);
    } else {
      emailjs.sendForm('service_9tq9fqk', 'template_yc206p5', e.target, 'tMMbs5Pn0amH90Aml').then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );
      e.target.reset();
      setNumber('');

      toast.success(
        t(
          'Thank you, the information has been submitted successfully. We will come back to you shortly.'
        )
      );
    }
  };
  const onChange = () => {
    // console.log('value');
  };
  return (
    <div>
      {props.ContactUs ? (
        <div className='ContactUsDiv'>
          <div>
            <SectionHeader
              width='5%'
              h1='Contact Us'
              h2='Share Your Project/Idea with us!'
              colorH2='#fff'
              colorDesp='#F8F8F8'
              decription='Our Team Member will get back to you within 24 hours. '
            />
          </div>
          <div className='ContactUsGrid'>
            <Grid container spacing={1} className='ContactContainerGrid'>
              <Grid container sm={8} md={6} className='ContactFormGrid'>
                <form onSubmit={sendEmail} className='ContactForm'>
                  <div className='ContactForm_InputDiv'>
                    <Grid className='InputGrid' xs={12} sm={6}>
                      <input
                        type='text'
                        name='name'
                        placeholder={t('Your Name')}
                        className='InputField'
                      />
                    </Grid>
                    <Grid className='InputGrid' xs={12} sm={6}>
                      <input
                        // type='email'
                        name='email'
                        placeholder={t('Email')}
                        className='InputField'
                      />
                    </Grid>
                  </div>
                  <div className='ContactForm_InputDiv'>
                    <Grid className='InputGrid' xs={12} sm={6}>
                      <input
                        type='text'
                        name='phone'
                        maxLength='10'
                        placeholder={t('Phone')}
                        className='InputField'
                        value={number}
                        onChange={(e) => {
                          // check input using regex
                          var regex = RegExp(/^\d+$/);
                          const test_Result = regex.test(e.target.value);
                          if (test_Result || e.target.value == '') {
                            setNumber(e.target.value);
                          }
                        }}
                      />
                    </Grid>
                    <Grid className='InputGrid' xs={12} sm={6}>
                      <input
                        type='text'
                        name='budget'
                        placeholder={t('Budget')}
                        className='InputField'
                      />
                    </Grid>
                  </div>
                  <div>
                    <Grid className='InputGrid' xs={12}>
                      <textarea
                        type='text'
                        name='message'
                        placeholder={t('Type Your Message')}
                        className='textField'
                        // style={{ marginLeft: "1%" }}
                      />
                    </Grid>
                  </div>
                  <Grid xs={12} className='ReCAPTCHA_DIV'>
                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid className='Contact_Send_Grid' xs={3}>
                    <button type='submit' className='ContactUsBtn'>
                      {t('Send')}
                    </button>
                  </Grid>
                </form>
              </Grid>
              <Grid xs={12} sm={10} md={10} className='ContactMedia'>
                <a href='mailto:contact@falconconsulting.fr'>
                  <div className='ContactMediaDiv'>
                    <img
                      className='ContactMediaIcons'
                      src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/emailIcon.svg`}
                      alt='Email'
                    />
                    <div className='SocialMediaText'>
                      <h3 sx={{ fontSize: '1rem' }}>{t('Email')}</h3>
                      <h5 sx={{ fontSize: '.7rem' }}>contact@falconconsulting.fr</h5>
                    </div>
                  </div>
                </a>
                <a href='http://calendly.com/falconit'>
                  <div className='ContactMediaDiv'>
                    <img
                      className='ContactMediaIcons'
                      src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/calendlyIcon.svg`}
                      alt='Calendly'
                    />
                    <div className='SocialMediaText'>
                      <h3 sx={{ fontSize: '1rem' }}>{t('Calendly')}</h3>
                      <h5 sx={{ fontSize: '.7rem' }}>{t('Click and join link')}</h5>
                    </div>
                  </div>
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <div className='ContactsectionDiv'>
          <div className='ContactSection_Mob_Header'>
            <SectionHeader
              LeftSectionHeader
              width='10%'
              h1='Contact Us'
              h2='Share Your Project/Idea with us!'
              colorH2='#fff'
              colorDesp='#F8F8F8'
              decription='Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours.'
            />
          </div>
          <div className='ContactSectionGrid'>
            <Grid container spacing={1} className='ContainerGrid'>
              <Grid sm={8} md={6} className='SocialMediaMain'>
                <div className='ContactSection_Web_Header'>
                  <SectionHeader
                    LeftSectionHeader
                    width='10%'
                    h1='Contact Us'
                    h2='Share Your Project/Idea with us!'
                    colorH2='#fff'
                    colorDesp='#F8F8F8'
                    decription='Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours.'
                  />
                </div>
                <div style={{ width: '100%' }}>
                  <div style={{ width: '50%' }}>
                    <a href='http://calendly.com/falconit'>
                      <div className='SocialMediaDiv'>
                        <img
                          className='SocialMediaIcons'
                          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/calendlyIcon.svg`}
                          alt='calendly'
                        />
                        <div className='SocialMediaText'>
                          <h4>{t('Schedule Meeting')}</h4>
                          <h4>calendly.com/falconit</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div style={{ width: '50%' }}>
                    <a href='mailto:contact@falconconsulting.fr'>
                      <div className='SocialMediaDiv'>
                        <img
                          className='SocialMediaIcons'
                          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/emailIcon.svg`}
                          alt='email'
                        />
                        <div className='SocialMediaText'>
                          <h4>{t('Email')}</h4>
                          <h4>contact@falconconsulting.fr</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid container xs={12} sm={8} md={6} className='FormGrid'>
                <form onSubmit={sendEmail} className='ContactForm'>
                  <div className='ContactForm_InputDiv'>
                    <Grid xs={12} sm={6}>
                      <input
                        type='text'
                        name='name'
                        placeholder={t('Your Name')}
                        className='InputField'
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input
                        // type='email'
                        name='email'
                        placeholder={t('Email')}
                        className='InputField'
                      />
                    </Grid>
                  </div>
                  <div className='ContactForm_InputDiv'>
                    <Grid xs={12} sm={6}>
                      <input
                        type='text'
                        name='phone'
                        maxLength='10'
                        placeholder={t('Phone')}
                        className='InputField'
                        value={number}
                        onChange={(e) => {
                          // check input using regex
                          var regex = RegExp(/^\d+$/);
                          const test_Result = regex.test(e.target.value);

                          if (test_Result || e.target.value == '') {
                            setNumber(e.target.value);
                          }
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input
                        type='text'
                        name='budget'
                        placeholder={t('Budget')}
                        className='InputField'
                      />
                    </Grid>
                  </div>
                  <div>
                    <Grid xs={12}>
                      <textarea
                        type='text'
                        name='message'
                        placeholder={t('Type Your Message')}
                        className='textField'
                      />
                    </Grid>
                  </div>
                  <Grid xs={12} className='ReCAPTCHA_DIV'>
                    <ReCAPTCHA
                      className='Recaptcha_Box'
                      sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
                      onChange={onChange}
                    />
                  </Grid>
                  {/* <Grid xs={12}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "45%",
                        backgroundColor: "rgba(255, 255, 255, 0.912)",
                        padding: "0.5% 2%",
                        margin: "3% 2.5%",
                        opacity: ".9",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <input type="checkbox" />
                        <Typography
                          sx={{
                            marginLeft: "5%",
                            fontSize: "80%",
                            fontWeight: "600",
                          }}
                        >
                          I'm not a robot
                        </Typography>
                      </div>
                      <img src={Robot} alt='robot' />
                    </div>
                  </Grid> */}
                  <Grid xs={3}>
                    <button type='submit' className='ContactUsBtn'>
                      {t('Send')}
                    </button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
}
