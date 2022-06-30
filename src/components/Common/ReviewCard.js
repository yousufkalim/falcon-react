import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import img from "../../assets/images/muh_ali.webp";

export default function ReviewCard(props) {
  const { data, dataIndex } = props;
  const { name, review, avatar, country, work } = data[dataIndex];

  const [value, setValue] = React.useState(4);

  return (
    <div
      style={{
        userSelect: "none",
        maxWidth: "400px",
        minWidth: "200px",
        height: "550px",
        borderRadius: 15,
      }}
    >
      <div className="ReviewCard">
        <Avatar
          alt="Remy Sharp"
          src={avatar}
          sx={{ width: 120, height: 120 }}
        />
        <Typography
          className="Selection"
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
          className="Selection"
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
          name="simple-controlled"
          // name="size-medium"
          size={props.size || "medium"}
          defaultValue={2}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography
          className="Selection"
          sx={{
            width: "80%",
            fontSize: ".8rem",
            opacity: ".9",
            fontWeight: "400",
            marginTop: "7%",
          }}
        >
          {review?.length > 150 ? review?.slice(0, 150) + "..." : review}
          {/* {review} */}
        </Typography>
        <Typography
          className="Selection"
          sx={{
            marginTop: "10%",
            fontWeight: "400",
            fontSize: ".7rem",
            fontStyle: "italic",
            opacity: ".8",
          }}
        >
          {work}
        </Typography>
      </div>
    </div>
  );
}
