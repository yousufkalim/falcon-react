import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import CloseIcon from "../../assets/images/modalClose.svg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        className="ModalOpenBtn"
        sx={{
          backgroundColor: `${props.ModalBtnTheme || "#47B9B4"}`,
          color: `${props.ModalBtntextColor || "white"}`,
        }}
        onClick={handleOpen}
      >
        {props.ModalBtnText || "View More"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ModalBox" sx={style}>
          <div className="Modal_Top">
            <img className="Modal_Logo" src={props.LogoSrc} />
            <img
              style={{
                position: "absolute",
                top:"5%",
                width: "4%",
                right: "5%",
                cursor:"pointer"
              }}
              onClick={handleClose}
              src={CloseIcon}
            />
          </div>
          <Typography
            className="ModalHeading"
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            {props.Heading || "Kidcab"}
          </Typography>
          <Divider
            width={props.Dividerwidth || "12%"}
            color={props.DividerTheme || "#0097A7"}
            sx={{
              height: "4px",
              borderRadius: "4px",
              margin: "1% 0",
            }}
          />
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para1}
          </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para2 }
            </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para3 }
            </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para4 }
            </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para5 }
            </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para6 } 
            </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para7}
            </Typography>
            <Typography className="Modal_Para" id="modal-modal-description">
            {props.para8}
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// props for BasicModal

// LogoSrc = to upload logo image
// Heading = main project Title
// Dividerwidth = divider's width
// DividerBG = Divider's background color
// para1 = sub heading description
// para2 = sub heading description
// para3 = sub heading description
// para4 = sub heading description
// para5 = sub heading description
// para6 = sub heading description
// para7 = sub heading description
// para8 = sub heading description

