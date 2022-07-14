import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import img from "../../assets/images/muh_ali.webp";
import { useTranslation } from "react-i18next";
export default function ReviewCard(props) {
  const { i18n, t } = useTranslation();
  const { data, dataIndex } = props;
  const { name, review, avatar, country, work } = data[dataIndex];

  const [value, setValue] = React.useState(4);

  let text = t(review);

  return (
    <div className='ReviewCard_Container'>
      <div className='ReviewCard'>
        <Avatar alt='Remy Sharp' src={props.src} sx={{ width: 120, height: 120 }} />
        <Typography
          className='Selection'
          sx={{
            marginTop: "4%",
            fontWeight: 600,
            fontSize: "1.4rem",
            fontFamily: "Urbanist",
            opacity: ".8",
          }}
        >
          {name}
        </Typography>
        <Typography
          className='Selection'
          sx={{
            margin: "0",
            // fontWeight: 400,
            fontSize: ".9rem",
            opacity: ".8",
            margin: "0 0 5% 0",
          }}
        >
          {country}
        </Typography>
        <Rating
          name='simple-controlled'
          // name="size-medium"
          size={props.size || "medium"}
          defaultValue={2}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography
          className='Selection'
          sx={{
            width: "80%",
            fontSize: ".8rem",
            opacity: ".9",
            fontWeight: "400",
            marginTop: "7%",
          }}
        >
          {text?.length > 100 ? text?.slice(0, 100) + "..." : text}
          {/* {review} */}
        </Typography>
        <Typography
          className='Selection'
          sx={{
            marginTop: "10%",
            fontWeight: "400",
            fontSize: ".7rem",
            fontStyle: "italic",
            opacity: ".8",
          }}
        >
          {t(work)}
        </Typography>
      </div>
    </div>
  );
}
