import { Divider } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import validate from 'validate.js';
import BackToTop from '../../assets/images/btp.svg';
import { useScrollPosition } from '../../utils/ScrollPosition';
import BackTopEnglish from '../../assets/images/btp.svg';
import BackTopFrench from '../../assets/images/scrolltop_french.svg';

export default function ContactSection(props) {
  const { i18n, t } = useTranslation();
  let position = useScrollPosition();
  var rootElement = document.documentElement;
  const { language } = i18n;

  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const [val, setVal] = useState('');
  const textAreaRef = useRef(null);
  const textAreaMobRef = useRef(null);
  const [activeName, setActiveName] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [saveName, setSaveName] = useState('');
  const [checkCaptch, setCheckCaptch] = useState(false);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      name: '',
      phone: '',
      company: '',
      email: '',
      message: ''
    },
    touched: {},
    errors: {}
  });
  const schema = {
    name: {
      presence: { allowEmpty: false, message: 'is required' },
      // message: 'must start with 0',
      length: {
        minimum: 3
        // message: 'must be atleast 3 characters long',
        // maximum: 40,
      }
    },

    phone: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum: 10,

        message: 'number must be atleast 10 digits long'
      }
    },
    company: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 60
      }
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {
        attribute: 'true',
        message: 'must be in this format (name@domain.com)'
      },

      length: {
        maximum: 60
      }
    },
    message: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 1000
      }
    }
  };

  useEffect(() => {
    if (showForm) {
      resizeTextArea();
    }
  }, [formState.values]);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  };
  useEffect(() => {
    if (showForm) {
      resizeMobTextArea();
    }
  }, [formState.values]);

  const resizeMobTextArea = () => {
    textAreaMobRef.current.style.height = 'auto';
    textAreaMobRef.current.style.height = textAreaMobRef.current.scrollHeight + 'px';
  };

  const onChange = e => {
    setCheckCaptch(true);
  };
  const onError = e => {
    setCheckCaptch(false);
  };

  const resetForm = () => {
    setFormState({
      isValid: false,
      values: {
        name: '',
        phone: '',
        company: '',
        email: '',
        message: ''
      },
      touched: {},
      errors: {}
    });
    setCheckCaptch(false);
  };

  const sendEmail = e => {
    e.preventDefault();
    {
      localStorage.getItem('i18nextLng') === 'fr'
        ? emailjs
            .sendForm('service_9tq9fqk', 'template_yc206p5', e.target, 'tMMbs5Pn0amH90Aml')
            .then(
              result => {
                resetForm();
                return result;
              },
              error => {
                return error;
              }
            )
        : emailjs
            .sendForm('service_9tq9fqk', 'template_lmpx1v8', e.target, 'tMMbs5Pn0amH90Aml')
            .then(
              result => {
                resetForm();
                return result;
              },
              error => {
                return error;
              }
            );
    }

    setSaveName(formState.values.name);
    setShowForm(!showForm);
    resetForm();
  };

  const handleChange = event => {
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      }
    }));
  };

  const blurHandler = e => {
    e.preventDefault();
    setActiveName('');
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      touched: {
        ...formState.touched,
        [e.target.name]: true
      },
      errors: errors || {}
    }));
  };

  const hasError = field => (formState.touched[field] && formState.errors[field] ? true : false);

  return (
    <>
      <div className="New_ContactSection_Container">
        {showForm ? (
          <div className="New_ContactSection_MainDiv">
            <div className="New_ContactSection_HeaderDiv">
              <div className="New_ContactSection_TitleDiv">
                <Divider className="New_ContactSection_TitleDivider" />
                <h2 className="New_ContactSection_Title">{t('Contact Us')}</h2>
              </div>
              <p className="New_ContactSection_Desp">
                {t('Our Team Member will get back to you within 24 hours.')}
              </p>
            </div>

            <form onSubmit={sendEmail}>
              <div className="New_ContactSection_FormDiv">
                <div className="New_ContactSection_LeftForm">
                  <div className="New_ContactSection_InputDiv" style={{ position: 'relative' }}>
                    <label
                      className="New_ContactSection_Label"
                      style={{
                        color:
                          activeName === 'name'
                            ? '#42C2FF'
                            : !hasError('name') && formState.values.name === ''
                            ? '#f8f8f8'
                            : hasError('name')
                            ? '#FF603D'
                            : '#7C99BB'
                      }}>
                      {t('My name is')}
                    </label>
                    <input
                      // autoComplete='off'
                      maxLength="64"
                      name="name"
                      onChange={handleChange}
                      onBlur={e => blurHandler(e)}
                      onFocus={e => setActiveName(e.target.name)}
                      className="New_ContactSection_Input"
                      value={formState.values.name}
                      style={{
                        borderBottom:
                          activeName === 'name'
                            ? '1px solid #42C2FF'
                            : hasError('name')
                            ? '1px solid #FF603D'
                            : '1px solid #7c99bb',
                        marginBottom: '1%'
                      }}
                      placeholder={t('Your name')}
                    />

                    {hasError('name') && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          right: '0',
                          color: '#FF603D'
                        }}>
                        {t(formState.errors.name[0])}
                      </div>
                    )}
                  </div>
                  <div className="New_ContactSection_InputDiv" style={{ position: 'relative' }}>
                    <label
                      className="New_ContactSection_Label"
                      style={{
                        color:
                          activeName === 'phone'
                            ? '#42C2FF'
                            : !hasError('phone') && formState.values.phone === ''
                            ? '#f8f8f8'
                            : hasError('phone')
                            ? '#FF603D'
                            : '#7C99BB'
                      }}>
                      {t('My phone number is')}
                    </label>
                    <input
                      name="phone"
                      value={formState.values.phone}
                      maxLength="13"
                      onChange={e => {
                        // check input using regex
                        var regex = RegExp(/^\d+$/);
                        const test_Result = regex.test(e.target.value);
                        if (test_Result || e.target.value == '') {
                          handleChange(e);
                        }
                      }}
                      onBlur={e => blurHandler(e)}
                      onFocus={e => setActiveName(e.target.name)}
                      className="New_ContactSection_Input"
                      style={{
                        borderBottom:
                          activeName === 'phone'
                            ? '1px solid #42C2FF'
                            : hasError('phone')
                            ? '1px solid #FF603D'
                            : '1px solid #7c99bb',
                        marginBottom: '1%'
                      }}
                      placeholder={t('Your phone number')}
                    />
                    {hasError('phone') && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          right: '0',
                          color: '#FF603D'
                        }}>
                        {t(formState.errors.phone[0])}
                      </div>
                    )}
                  </div>
                  <div className="New_ContactSection_InputDiv">
                    <label
                      className="New_ContactSection_Label"
                      style={{
                        color:
                          activeName === 'company'
                            ? '#42C2FF'
                            : !hasError('company') && formState.values.company === ''
                            ? '#f8f8f8'
                            : hasError('company')
                            ? '#FF603D'
                            : '#7C99BB'
                      }}>
                      {t('I work at')}
                    </label>
                    <input
                      name="company"
                      maxLength="60"
                      value={formState.values.company}
                      onChange={handleChange}
                      onBlur={e => blurHandler(e)}
                      onFocus={e => setActiveName(e.target.name)}
                      className="New_ContactSection_Input"
                      style={{
                        borderBottom:
                          activeName === 'company'
                            ? '1px solid #42C2FF'
                            : hasError('company')
                            ? '1px solid #FF603D'
                            : '1px solid #7c99bb',
                        marginBottom: '1%'
                      }}
                      placeholder={t('Your company')}
                    />
                    {hasError('company') && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          right: '0',
                          color: '#FF603D'
                        }}>
                        {t(formState.errors.company[0])}
                      </div>
                    )}
                  </div>
                  <div className="New_ContactSection_InputDiv">
                    <label
                      className="New_ContactSection_Label"
                      style={{
                        color:
                          activeName === 'email'
                            ? '#42C2FF'
                            : !hasError('email') && formState.values.email === ''
                            ? '#f8f8f8'
                            : hasError('email')
                            ? '#FF603D'
                            : '#7C99BB'
                      }}>
                      {t('Reach me at')}
                    </label>
                    <input
                      maxLength="60"
                      name="email"
                      value={formState.values.email}
                      onChange={e => handleChange(e)}
                      onBlur={e => blurHandler(e)}
                      onFocus={e => setActiveName(e.target.name)}
                      className="New_ContactSection_Input"
                      style={{
                        borderBottom:
                          activeName === 'email'
                            ? '1px solid #42C2FF'
                            : hasError('email')
                            ? '1px solid #FF603D'
                            : '1px solid #7c99bb',
                        marginBottom: '1%'
                      }}
                      placeholder={t('name@email.com')}
                    />
                    {hasError('email') && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          right: '0',
                          color: '#FF603D'
                        }}>
                        {t(formState.errors.email[0])}
                      </div>
                    )}
                  </div>
                  <div className="New_ContactSection_InputDiv contactTextarea_MobView">
                    <label
                      className="New_ContactSection_Label"
                      style={{
                        color:
                          activeName === 'message'
                            ? '#42C2FF'
                            : !hasError('message') && formState.values.message === ''
                            ? '#f8f8f8'
                            : hasError('message')
                            ? '#FF603D'
                            : '#7C99BB'
                      }}>
                      {t('Message')}
                    </label>
                    <textarea
                      autoComplete="off"
                      name="message"
                      maxLength="1000"
                      value={formState.values.message}
                      onChange={e => handleChange(e)}
                      onBlur={e => blurHandler(e)}
                      onFocus={e => setActiveName(e.target.name)}
                      className="New_ContactSection_Textarea"
                      style={{
                        borderBottom:
                          activeName === 'message'
                            ? '1px solid #42C2FF'
                            : hasError('message')
                            ? '1px solid #FF603D'
                            : '1px solid #7c99bb',
                        marginBottom: '1%'
                      }}
                      placeholder={t('Start typing here...')}
                      ref={textAreaMobRef}
                      rows={1}
                    />

                    {hasError('message') && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          right: '0',
                          color: '#FF603D'
                        }}>
                        {t(formState.errors.message[0])}
                      </div>
                    )}
                  </div>
                </div>
                <div className="New_ContactSection_RightForm">
                  <div className="New_ContactSection_InputDiv">
                    <label
                      className="New_ContactSection_Label"
                      style={{
                        color:
                          activeName === 'message'
                            ? '#42C2FF'
                            : !hasError('message') && formState.values.message === ''
                            ? '#f8f8f8'
                            : hasError('message')
                            ? '#FF603D'
                            : '#7C99BB'
                      }}>
                      {t('Message')}
                    </label>
                    <textarea
                      autoComplete="off"
                      name="message"
                      maxLength="1000"
                      value={formState.values.message}
                      onChange={e => handleChange(e)}
                      onBlur={e => blurHandler(e)}
                      onFocus={e => setActiveName(e.target.name)}
                      className="New_ContactSection_Textarea"
                      style={{
                        borderBottom:
                          activeName === 'message'
                            ? '1px solid #42C2FF'
                            : hasError('message')
                            ? '1px solid #FF603D'
                            : '1px solid #7c99bb',
                        marginBottom: '1%'
                      }}
                      placeholder={t('Start typing here...')}
                      ref={textAreaRef}
                      rows={1}
                    />

                    {hasError('message') && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          right: '0',
                          color: '#FF603D'
                        }}>
                        {t(formState.errors.message[0])}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="ContactCaptcha">
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
                  onChange={onChange}
                  onExpired={onError}
                  onErrored={onError}
                />
              </div>
              <div className="New_ContactSection_ButtonDiv">
                <button
                  disabled={formState.isValid && checkCaptch ? false : true}
                  className={
                    !formState.isValid
                      ? 'New_ContactSection_Button'
                      : !checkCaptch
                      ? 'New_ContactSection_Button'
                      : 'New_ContactSection_ButtonHover'
                  }
                  style={{
                    color: !formState.isValid ? '#7c99bb' : !checkCaptch ? '#7c99bb' : '#42C2FF',
                    border: !formState.isValid
                      ? '3px solid #7c99bb'
                      : !checkCaptch
                      ? '3px solid #7c99bb'
                      : '3px solid #42C2FF '
                  }}>
                  {showForm ? t('Submit') : t('Submit another')}
                </button>
                <h2 style={{ color: '#7C99BB', fontWeight: '800' }}>{t('or')}</h2>
                <div className="New_ContactSection_LinksContainer">
                  <a href="mailto:contact@falconconsulting.fr" target="_blank">
                    <div className="SocialMediaDiv">
                      <img
                        className="SocialMediaIcons"
                        style={{ width: '45%' }}
                        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/emailIcon.svg`}
                        alt="email"
                      />
                      <div className="SocialMediaText">
                        <h2 id="contactHover">{t('Email')}</h2>
                        <div id="b"></div>
                      </div>
                    </div>
                  </a>
                  <Divider className="New_ContactSection_LinksDivider" orientation="vertical" />
                  {localStorage.getItem('i18nextLng') === 'fr' ? (
                    <a href="https://calendly.com/falconconsulting" target="_blank">
                      <div className="SocialMediaDiv">
                        <img
                          className="SocialMediaIcons"
                          style={{ width: '35%' }}
                          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/calendlyIcon.svg`}
                          alt="calendly"
                        />
                        <div className="SocialMediaText">
                          <h2 id="contactHover">{t('Calendly')}</h2>
                          <div id="b"></div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <a href="http://calendly.com/falconit" target="_blank">
                      <div className="SocialMediaDiv">
                        <img
                          className="SocialMediaIcons"
                          style={{ width: '35%' }}
                          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/calendlyIcon.svg`}
                          alt="calendly"
                        />
                        <div className="SocialMediaText">
                          <h2 id="contactHover">{t('Calendly')}</h2>
                          <div id="b"></div>
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="New_ContactSection_SuccessDiv">
            <div className="New_ContactSection_HeaderDiv">
              <div className="New_ContactSection_TitleDiv" style={{ marginBottom: '2%' }}>
                <Divider className="New_ContactSection_TitleDivider" />
                <h2 className="New_ContactSection_Title">
                  {t('Thank you')}, {saveName}
                </h2>
              </div>
              <p className="New_ContactSection_Desp">
                {t(
                  'Your message has been sent successfully. Our Team Member will get back to you within 24 hours.'
                )}
              </p>
            </div>
            <div className="New_ContactSection_ButtonDiv ">
              <button
                onClick={() => setShowForm(true)}
                className="New_ContactSection_ButtonSuccess">
                {showForm ? t('Submit') : t('Submit another')}
              </button>
              <h2 style={{ color: '#7C99BB', fontWeight: '800' }}>or</h2>
              <div className="New_ContactSection_SuccessLinksContainer">
                <a href="mailto:contact@falconconsulting.fr" target="_blank">
                  <div className="SocialMediaDiv">
                    <img
                      className="SocialMediaIcons"
                      style={{ width: '45%' }}
                      src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/emailIcon.svg`}
                      alt="email"
                    />
                    <div className="SocialMediaText">
                      <h2 id="contactHover">{t('Email')}</h2>
                      <div id="b"></div>
                    </div>
                  </div>
                </a>
                <Divider className="New_ContactSection_LinksDivider" orientation="vertical" />
                {localStorage.getItem('i18nextLng') === 'fr' ? (
                  <a href="https://calendly.com/falconconsulting" target="_blank">
                    <div className="SocialMediaDiv">
                      <img
                        className="SocialMediaIcons"
                        style={{ width: '35%' }}
                        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/calendlyIcon.svg`}
                        alt="calendly"
                      />
                      <div className="SocialMediaText">
                        <h2 id="contactHover">{t('Calendly')}</h2>
                        <div id="b"></div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <a href="http://calendly.com/falconit" target="_blank">
                    <div className="SocialMediaDiv">
                      <img
                        className="SocialMediaIcons"
                        style={{ width: '35%' }}
                        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/calendlyIcon.svg`}
                        alt="calendly"
                      />
                      <div className="SocialMediaText">
                        <h2 id="contactHover">{t('Calendly')}</h2>
                        <div id="b"></div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        <div
          className="New_ContactSection_RightTextDiv"
          style={{
            width: '30%'
          }}>
          <div className="New_ContactSection_RightTextSubDiv">
            <h2>
              {t('Share')} <br /> {t('Your')} <br /> {t('Project')} <br /> {t('or')} <br />{' '}
              {t('Idea')} <br /> {t('with')} <br /> {t('us!')}
            </h2>
          </div>
        </div>
        {/* {props.ScrollTop && (
          <div
            className='scrollToTopDiv'
            style={{
              display: position <= 700 ? 'none' : 'flex',
            }}
          >
            <img className='scrollToTopText' src={BackToTop} />
            <div className='scrollToTopDivider'></div>
            <img
              className='scrollToTopIcon'
              onClick={scrollToTop}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/top_btn.svg`}
              alt='top'
            />
          </div>
        )} */}
        {props.ScrollTop && (
          <div
            className={language === 'fr' ? 'scrollToTopFr' : 'scrollToTopDiv'}
            style={{
              display: position <= 700 ? 'none' : 'flex'
            }}>
            <img
              className={language === 'fr' ? 'scrollToTopTextFr' : 'scrollToTopText'}
              src={language === 'fr' ? BackTopFrench : BackTopEnglish}
              alt="Change Language"
            />
            <div className="scrollToTopDivider"></div>
            <img
              className="scrollToTopIcon"
              onClick={scrollToTop}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/top_btn.svg`}
              alt="top"
            />
          </div>
        )}
      </div>
    </>
  );
}
