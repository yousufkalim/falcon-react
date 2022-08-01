import React from 'react';
import { useTranslation } from 'react-i18next';
export default function ReviewCard(props) {
  const { i18n, t } = useTranslation();
  const { data, dataIndex } = props;
  const { name, review, avatar, country, work } = data[dataIndex];

  const [value, setValue] = React.useState(4);

  // let text = review;

  return (
    <div className='ReviewCard_Container'>
      <div className='ReviewCard'>
        {/* <Avatar alt='Remy Sharp' src={props.src} sx={{ width: 120, height: 120 }} /> */}
        <h2
          className='Selection'
          style={{
            marginTop: '4%',
            fontWeight: 600,
            fontSize: '1.4rem',
            fontFamily: 'Urbanist',
            opacity: '.8',
          }}
        >
          {name}
        </h2>
        <h3
          className='Selection'
          style={{
            margin: '0',
            fontWeight: 400,
            fontSize: '.9rem',
            opacity: '.8',
            margin: '2% 0 5% 0',
          }}
        >
          {country}
        </h3>
        {/* <Rating
          name='simple-controlled'
          // name="size-medium"
          size={props.size || "medium"}
          defaultValue={2}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> */}
        <p
          className='Selection'
          style={{
            width: '80%',
            fontSize: '.8rem',
            opacity: '.9',
            fontWeight: '400',
          }}
        >
          {review?.length > 100 ? review?.slice(0, 100) + '...' : review}
          {/* {review} */}
        </p>
        <h4
          className='Selection'
          style={{
            marginTop: '10%',
            fontWeight: '400',
            fontSize: '.7rem',
            fontStyle: 'italic',
            opacity: '.8',
          }}
        >
          {work}
        </h4>
      </div>
    </div>
  );
}
