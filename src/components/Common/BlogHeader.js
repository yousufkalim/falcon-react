// Init
import { Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
// Importing Components

// Home Component
export default function BlogHeader() {
  const { i18n, t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    const email = data.get('email');
    if (email === '') {
      toast.error(`${t("Email can't be blank")}`);
    } else if (regex.test(email) == null || regex.test(email) == '') {
      toast.error(`${t('Not a Valid Email')}`);
    } else {
      emailjs.sendForm('service_9tq9fqk', 'template_lmpx1v8', e.target, 'tMMbs5Pn0amH90Aml').then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      toast.success(t("You've Subscribed Successfully"));
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='BlogHeaderMain'
      >
        <Typography
          className='BlogHeaderTypo'
          sx={{ color: '#263238', fontSize: '1.7rem', fontWeight: '800' }}
        >
          FALCON <span style={{ color: '#0F52BA' }}>BLOG</span>
        </Typography>
        <Typography
          className='BlogHeaderTypo'
          sx={{
            color: '#263238',
            fontSize: '1rem',
            fontWeight: '500',
            width: '35%',
            margin: '.5% 0%',
          }}
        >
          {t('Always looking into improving ourselves.')}
        </Typography>
        <Typography
          className='BlogHeaderTypo'
          sx={{
            color: '#263238',
            fontSize: '.9rem',
            fontWeight: '400',
            width: '30%',
          }}
        >
          {t(
            'The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects.'
          )}
        </Typography>
        <div
          className='BlogHeaderInput'
          style={{
            width: '40%',
            border: '1px solid rgb(235, 233, 233)',
            boxShadow: '0px 4px 23px rgba(0, 0, 0, 0.1)',
            borderRadius: '35px',
            display: 'flex',
            height: '12%',
            marginTop: '1%',
          }}
        >
          <form
            style={{
              width: '100%',
              display: 'flex',
              // justifyContent: 'space-between',
            }}
            //  ref={form}
            onSubmit={sendEmail}
          >
            <input
              // type='email'
              name='email'
              style={{
                width: '100%',
                //   height: "10%",
                border: 'none',
                borderRadius: '35px',
                paddingLeft: '5%',
                fontSize: '1rem',
              }}
              placeholder={t('Your Email')}
            />
            <button type='submit' className='BlogHeader_Btn'>
              {t('SUBSCRIBE')}
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
