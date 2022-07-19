import { Typography } from "@mui/material";
import React from "react";
import Legal_Icon from "../../assets/images/legal_icon.svg";
import { useTranslation } from "react-i18next";
export default function LegalHeader(props) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div className='LegalMention_HeaderContainer'>
        <div className='LegalMention_HeaderDiv'>
          <div className='LegalMention_HeaderTitleDiv'>
            <div>
              <img src={Legal_Icon} />
            </div>
            <Typography className='LegalMention_HeaderTitle'>{t("Legal Mentions")}</Typography>
          </div>
          {/* <div className="LegalMention_HeaderDespDiv">
            <Typography className="LegalMention_HeaderDesp_H">
              {t("Definitions")}
            </Typography>
            <Typography className="LegalMention_HeaderDesp_P">
              Client any professional or capable natural person within the
              meaning of articles 1123 and following of the Civil Code, or legal
              person, who visits the Site subject to these general conditions.
              <br /> Services and Services https://www.falconconsulting.fr
              provides Customers <br /> <br />
              Content All the elements constituting the information present on
              the Site, in particular texts - images - videos. <br />
              <br />
              Customer information Hereinafter referred to as Information which
              correspond to all personal data likely to be owned by
              <span className="LegalMention_FalconConsulting">
                {" "}
                Falcon Consulting{" "}
              </span>
              for account management, customer relationship management and for
              analytics and statistics. <br /> <br />
              User: Internet user connecting, using the aforementioned site.
              <br /> <br />
              Personal information: "Information that allows, in any form
              whatsoever, directly or indirectly, the identification of the
              natural persons to whom they apply " article 4 of law n ° 78-17 of
              January 6, 1978. <br /> <br />
              The terms personal data, data subject, processor and sensitive
              data have the meaning defined by the General Regulations on Data
              Protection RGPD: n ° 2016-679
            </Typography>
          </div> */}
        </div>
      </div>
    </>
  );
}
