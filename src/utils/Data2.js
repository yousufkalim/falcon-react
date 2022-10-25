import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Data = () => {
  const { t } = useTranslation();
  let data = [
    {
      title: 'Falcon Consulting Policy Document',
      index: 1,
      body: (
        <>
          <Typography className="LegalMentions_Data_P">
            <li>{t('Information Security policy')}</li>
            <li>{t('Privacy Policy')}</li>
            <li>{t('Acceptable Use policy')}</li>
            <li>{t('Business Continuity/Disaster recovery Policy')}</li>
            <li>{t('Hiring and Termination Policy Including background checks')}</li>
            <li>{t('Encryption Policy')}</li>
            <li>{t('Incident response Policy (Internal, External, Web)')}</li>
            <li>{t('Security awareness training programs and topics covered')}</li>
            <li>{t('Third party management programs')}</li>
            <li>{t('System backup policy and program')}</li>
          </Typography>
          <br />
          <h3 style={{ opacity: '0.7', textAlign: 'center' }}>
            {t('Information Security Policy')}
          </h3>
          <Typography className="LegalMentions_Data_P">
            {t(
              'Falcon Consulting maintains and communicates an Information Security Program consisting of topic-specific policies, standards, procedures and guidelines that:'
            )}
            <br />
            {t(
              'Serve to protect the Confidentiality, Integrity, and Availability of the Information Resources maintained within the organization using administrative, physical and technical controls.'
            )}
            <br />
            {t(
              'Provide value to the way we conduct business and support institutional objectives. Comply with all regulatory and legal requirements, including:'
            )}
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <li>{t('HIPAA Security Rule')}</li>
            <li>{t('State breach notification laws,')}</li>
            <li>{t('PCI Data Security Standard,')}</li>
            <li>{t('Information Security best practices, including ISO 27002 and NIST CSF,')}</li>
            <li>{t('Contractual agreements,')}</li>
            <li>
              {t(
                'All other applicable federal and state laws or regulations. The information security program is reviewed no less than annually or upon significant changes to the information security environment.'
              )}
            </li>
          </Typography>
          <h3 style={{ opacity: '0.7', textAlign: 'center' }}>{t('Privacy Policy')}</h3>
          <Typography className="LegalMentions_Data_P">
            {t(
              'At Falcon consulting, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by falconconsulting and how we use it.'
            )}
            <br />
            {t(
              'If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.'
            )}
            <br />
            {t(
              'This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in falconconsulting. This policy is not applicable to any information collected offline or via channels other than this website.'
            )}
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3>{t('Consent')}</h3>
            <p className="pera">
              {t(
                'By using our website, you hereby consent to our Privacy Policy and agree to its terms.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Information we collect')}</h3>
            <p className="pera">
              {t(
                'The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.'
              )}
              <br />{' '}
              {t(
                'If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.'
              )}
              <br />
              {t(
                'When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('How we use your information')}</h3>
            <p className="pera">
              {t('We use the information we collect in various ways, including to:')}
            </p>
            <li>{t('Provide, operate, and maintain our website')}</li>
            <li>{t('Improve, personalize, and expand our website')}</li>
            <li>{t('Understand and analyze how you use our website')}</li>
            <li>{t('Develop new products, services, features, and functionality')}</li>
            <li>
              {t(
                'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes'
              )}
            </li>
            <li>{t('Send you emails')}</li>
            <li>{t('Find and prevent fraud')}</li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Log Files')}</h3>
            <p className="pera">
              {t(
                "Falcon Consulting follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Cookies and Web Beacons')}</h3>
            <p className="pera">
              {t(
                "Like any other website, falconconsulting uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Advertising Partners Privacy Policies')}</h3>
            <p className="pera">
              {t(
                'You may consult this list to find the Privacy Policy for each of the advertising partners of falconconsulting.'
              )}
              <br />
              {t(
                "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on falconconsulting, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."
              )}
              <br />
              {t(
                'Note that falconconsulting has no access to or control over these cookies that are used by third-party advertisers.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Third Party Privacy Policies')}</h3>
            <p className="pera">
              {t(
                "falconconsulting's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options."
              )}
              <br />
              {t(
                "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."
              )}
              <br />
              {t('CCPA Privacy Rights (Do Not Sell My Personal Information)')}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              {t('Under the CCPA, among other rights, California consumers have the right to:')}
            </h3>
            <p className="pera">
              {t(
                "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers."
              )}
              <br />
              {t(
                'Request that a business delete any personal data about the consumer that a business has collected.'
              )}
              <br />
              {t(
                "Request that a business that sells a consumer's personal data, not sell the consumer's personal data."
              )}
              <br />
              {t(
                'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('GDPR Data Protection Rights')}</h3>
            <p className="pera">
              {t(
                'We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:'
              )}
              <br />
              {t(
                'The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.'
              )}
              <br />
              {t(
                'The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.'
              )}
              <br />
              {t(
                'The right to erasure – You have the right to request that we erase your personal data, under certain conditions.'
              )}
              <br />
              {t(
                'The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.'
              )}
              <br />
              {t(
                'The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.'
              )}
              <br />
              {t(
                'The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.'
              )}
              <br />
              {t(
                'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t("Children's Information")}</h3>
            <p className="pera">
              {t(
                'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.'
              )}
              <br />
              {t(
                'falconconsulting does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 style={{ textAlign: 'center' }}>{t('Acceptable Use Policy')}</h3>

            <p className="pera">
              {t(
                'This policy applies to the use of information, electronic and computing devices, and network resources to conduct Falcon Consulting business or interact with internal networks and business systems, whether owned or leased by Falcon Consulting, the employee, or a third party. All employees, contractors, consultants, temporary, and other workers at Falcon Consulting and its subsidiaries are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with Falcon Consulting.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('General Use and Ownership')}</h3>
            <li>
              {t(
                'Falcon Consulting proprietary information stored on electronic and computing devices whether owned or leased by Falcon Consulting, the employee or a third party, remains the sole property of Falcon Consulting. You must ensure through legal or technical means that proprietary information is protected in accordance with the Data Protection Standard.'
              )}
            </li>
            <li>
              {t(
                'You have a responsibility to promptly report the theft, loss or unauthorized disclosure of Falcon Consulting proprietary information.'
              )}
            </li>
            <li>
              {t(
                'You may access, use or share Falcon Consulting proprietary information only to the extent it is authorized and necessary to fulfill your assigned job duties.'
              )}
            </li>
            <li>
              {t(
                'Employees are responsible for exercising good judgment regarding the reasonableness of personal use. Individual departments are responsible for creating guidelines concerning personal use of Internet/Intranet/Extranet systems. In the absence of such policies, employees should be guided by departmental policies on personal use, and if there is any uncertainty, employees should consult their supervisor or manager.'
              )}
            </li>
            <li>
              {t(
                'For security and network maintenance purposes, authorized individuals within Falcon Consulting may monitor equipment, systems and network traffic at any time, per Audit Policy.'
              )}
            </li>
            <li>
              {t(
                'Falcon Consulting reserves the right to audit networks and systems on a periodic basis to ensure compliance with this policy.'
              )}
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Security and Proprietary Information')}</h3>
            <li>
              {t(
                'All mobile and computing devices that connect to the internal network must comply with the Minimum Access Policy.'
              )}
            </li>
            <li>
              {t(
                'System level and user level passwords must comply with the Password Policy. Providing access to another individual, either deliberately or through failure to secure its access, is prohibited.'
              )}
            </li>
            <li>
              {t(
                'All computing devices must be secured with a password-protected screensaver with the automatic activation feature set to 10 minutes or less. You must lock the screen or log off when the device is unattended.'
              )}
            </li>
            <li>
              {t(
                'Postings by employees from a Falcon Consulting email address to newsgroups should contain a disclaimer stating that the opinions expressed are strictly their own and not necessarily those of Falcon Consulting, unless posting is in the course of business duties.'
              )}
            </li>
            <li>
              {t(
                'Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain malware.'
              )}
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 style={{ textAlign: 'center' }}>
              {t('Business Continuity and Disaster Recovery Policy')}
            </h3>

            <h3 className="head">{t('Business Continuity Plan')}</h3>
            <p className="pera">
              {t(
                'Business Continuity focuses on sustaining The Falcon Consulting’s critical business processes during and after a disruption.'
              )}
            </p>
            <li>
              {t(
                'Falcon Consulting has created and implemented a Business Continuity Plan (“BCP”).'
              )}
            </li>
            <li>
              {t(
                'The BCP is periodically tested and the results should be shared with executive management.'
              )}
            </li>
            <li>
              {t(
                'The BCP is reviewed and updated upon any relevant change to the organization, at the conclusion of plan testing, or least annually.'
              )}
            </li>
            <li>
              {t(
                'The BCP is communicated and distributed to all relevant internal personnel and executive management.'
              )}
            </li>
            <li>
              {t('Business continuity planning includes:')}
              <li>{t('The safety and security of personnel is the first priority;')}</li>
              <li>
                {t(
                  'An adequate management structure is in place to prepare for, mitigate and respond to a disruptive event using personnel with the necessary authority, experience, and competence;'
                )}
              </li>
              <li>
                {t(
                  'Documented plans, response and recovery procedures are developed and approved, detailing how the organization will manage a disruptive event.'
                )}
              </li>
              <li>{t('The BCP include, at a minimum:')} </li>
              <li>
                {t(
                  'A risk assessment for critical business processes and operations (Business Impact Analysis);'
                )}
              </li>
              <li>{t('An inventory of critical systems and records, and their dependencies;')}</li>
              <li>{t('Requirements for ensuring information security throughout the process;')}</li>
              <li>
                {t(
                  'Identification of supply chain relationships and the organization’s role to support critical infrastructure;'
                )}
              </li>
              <li>{t('Processes to ensure the safety of personnel;')}</li>
              <li>
                {t(
                  'Communication strategies for communications both inside and outside the organization;'
                )}
              </li>
              <li>{t('Mitigation strategies and safeguards to reduce impact;')}</li>
              <li>{t('Strategies to address and limit the reputational impact from an event')};</li>
              <li>{t('Contingency plans for different types of disruption events;')}</li>
              <li>{t('Protection and availability of plan documentation;')}</li>
              <li>{t('Procedures for plan tests, review, and updates.')}</li>
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Disaster recovery Policy')}</h3>
            <p className="pera">
              {t(
                'Disaster Recovery focuses on restoring the technology systems that support both critical and day-to-day business operations.'
              )}
            </p>
            <li>
              {t(
                'Falcon consulting has created and implement a Disaster Recovery Plan (“DRP”) to support business objectives outlined in the (BCP/critical processes identified by a Business Impact Analysis).'
              )}
            </li>
            <li>{t('The DRP must be tested annually, at a minimum.')}</li>
            <li>
              {t(
                'The DRP must be reviewed and updated upon any relevant change to IT Infrastructure, at the conclusion of plan testing, or least annually.'
              )}
            </li>
            <li>
              {t(
                'The DRP must be communicated and distributed to all relevant internal personnel and executive management.'
              )}
            </li>
            <li>
              {t('The Falcon consulting DRP include at a minimum:')}
              <li>
                {t('Roles and responsibilities for implementing the disaster recovery plan;')}
              </li>
              <li>{t('List of potential risks to critical systems and sensitive information;')}</li>
              <li>
                {t(
                  'Procedures for reporting disaster events, event escalation, recovery of critical operations, and resumption of normal operations;'
                )}
              </li>
              <li>{t('Requirements for ensuring information security throughout the process;')}</li>
              <li>{t('An inventory of backups and offsite storage locations;')}</li>
              <li>{t('Contingency plans for different types of disruption events;')}</li>
              <li>{t('Protection and availability of plan documentation;')}</li>
              <li>{t('Procedures for plan tests, review, and updates.')}</li>
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Waivers')}</h3>
            <p className="pera">
              {t(
                'Waivers from certain policy provisions may be sought following the Falcon Consulting Waiver Process.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Enforcement')}</h3>
            <p className="pera">
              {t(
                'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.'
              )}
              <br />
              {t(
                'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 style={{ textAlign: 'center' }}>
              {t('Hiring and Termination Policy with Background Checks')}
            </h3>

            <h4 className="head4" style={{ textAlign: 'center', display: 'block' }}>
              {t('Hiring policy')}
            </h4>
            <ol className="ollist">1. {t('OVERVIEW')}</ol>
            <p className="pera">
              {t(
                "Falcon Consulting believes that hiring qualified personnel to fill positions in the different departments contributes to the company's overall success. Each employee is therefore hired with the objective of making a significant contribution to Falcon Consulting."
              )}
            </p>
            <ol className="ollist">2. {t('PURPOSE')}</ol>
            <p className="pera">
              {t(
                'The hiring policy has been established to ensure Falcon Consulting has the opportunity to attract the best available staff for all vacant positions.'
              )}
            </p>
            <ol className="ollist">3. {t('SCOPE')}</ol>
            <p className="pera">
              {t(
                'This hiring policy applies to all employees of Falcon Consulting who are involved in the hiring process.'
              )}
            </p>
            <ol className="ollist">4. {t('RESPONSIBILITY')}</ol>
            <p className="pera">
              {t(
                'It shall be the responsibility of the Human Resources (HR) department to implement this policy and to monitor its performance.'
              )}
              <br />
              {t('It is the responsibility of Managers and Supervisors to ensure that:')}
            </p>
            <li>{t('Staffing levels for their department are determined and authorized;')}</li>
            <li>
              {t(
                'All roles have current position descriptions that specify role requirements and selection criteria.'
              )}
            </li>
            <li>{t('It is the responsibility of the HR department to ensure that:')}</li>
            <li>
              {t(
                'All Managers are aware of their responsibilities in the recruitment and selection process;'
              )}
            </li>
            <li>
              {t(
                'Managers are given continuous support and guidance in regard to recruitment and selection issues.'
              )}
            </li>
            <ol className="ollist">5. {t('POLICY AND PROCEDURES')}</ol>
            <p className="pera">
              {t(
                'In hiring the most qualified candidates for positions, the following process should be followed.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">a) {t('Staff request')}</h3>
            <p className="pera">
              {t(
                'When a position (newly created or replacement, continuing or term position) needs to be filled or extended, a staff request form must be completed and authorized.'
              )}
              <br />
              {t(
                'Requests must be submitted by the supervisor or service manager and forwarded to the HR department:'
              )}
            </p>
            <li>{t('Position title;')}</li>
            <li>{t('Hours/shift teams of the position;')}</li>
            <li>{t('The exempt or non-exempt status of the position;')}</li>
            <li>{t('Reason for the opening;')}</li>
            <li>
              {t(
                'Duties and essential qualifications of the position (or a current position description may be attached);'
              )}
            </li>
            <li>{t('Any special instructions relating to advertising on recruitment.')}</li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">b) {t('Job description')}</h3>
            <p className="pera">
              {t(
                'A job description describes the areas of responsibility and accountability within a department. When a position is vacant, it is appropriate to review and, if necessary, update the job description and task description to ensure that it is up to date. Professional qualifications should also be reviewed. The HR department can assist in updating work descriptions.'
              )}
              <br />
              {t(
                'New or modified positions will be evaluated by the HR department in order to determine a salary range corresponding to the underlying responsibilities.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">c) {t('Meetings')}</h3>
            <p className="pera">
              {t(
                'HR will arrange a meeting with the hiring manager before posting a job offer. The objective of this meeting is to learn more about the position, requirements and profile of the ideal candidate. The recruitment strategy will be defined during this meeting and expectations will be established with all stakeholders.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">d) {t('Job postings')}</h3>
            <p className="pera">
              {t(
                "Once the position is approved and the job description is finalized (if applicable), the HR department will prepare the job posting. HR will create job postings that briefly describe the job opening and communicate Falcon Consulting's brand."
              )}
              <br />
              {t(
                'The job posting will be prepared based on the job description and any special requirements detailed on the staff request. It may also include preferred qualifications that may enhance performance in the position. These would be considered in the event that two candidates are considered relatively equal.'
              )}
              <br />
              {t(
                "All job openings will be posted concurrently on Falcon Consulting's intranet and externally with sources appropriate for the position being filled. Jobs will remain posted until the position is filled."
              )}
              <br />
              {t(
                'All qualified candidates are encouraged to apply for positions. As the company strives to be an equal opportunity employer, all employment postings will encourage applications from qualified Aboriginal People, or other persons from a visible minority group, persons with disabilities and women. Applicants who self-identify in their cover letter will be given special consideration.'
              )}
              <br />
              {t(
                'The HR department will be responsible for tracking all applicants and retaining applications and resumes as required.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h4 className="head4" style={{ textAlign: 'center', display: 'block' }}>
              {t('Termination Policy')}
            </h4>
            <h3 className="head">{t('Purpose')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting ensures that employee terminations, including voluntary and involuntary terminations and terminations due to the death of an employee, are handled in a professional manner with minimal disruption to the workplace.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('At-Will Employment')}</h3>
            <p className="pera">
              {t(
                'Employment with Falcon Consulting is voluntary and subject to termination by the employee or Falcon Consulting at will, with or without cause, and with or without notice, at any time. Nothing in these policies shall be interpreted to be in conflict with or to eliminate or modify in any way the employment-at-will status of Falcon Consulting employees.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Voluntary Terminations')}</h3>
            <p className="pera">
              {t(
                'A voluntary termination of employment occurs when an employee submits a written or verbal notice of resignation to his or her supervisor.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Procedures')}</h3>
            <li>
              {t(
                "Employees are requested to provide a minimum of three weeks' notice of their intention to separate from the company to allow a reasonable amount of time to transfer ongoing workloads. The employee should provide a written resignation notification to his or her manager."
              )}
            </li>
            <li>
              {t(
                "Upon receipt of an employee's resignation, the manager will notify the human resource (HR) department by sending a copy of the resignation letter and any other pertinent information (i.e., employee's reason for leaving, last day of work)."
              )}
            </li>
            <li>
              {t(
                "The HR department will coordinate the employee's out-processing. This process will include the employee's returning all company property (computers, documentation, keys, etc.); a review of the employee's post termination benefits status; and the employee's completion of an exit interview."
              )}
            </li>
            <li>
              {t(
                "The employee's manager will complete a Supervisory Termination Summary and deliver the completed form to HR."
              )}
            </li>
            <li>
              {t(
                'Employees who possess a security clearance (security codes to the building, computer passwords, etc.) must meet with administration for a debriefing no later than their last day of employment.'
              )}
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Involuntary Terminations')}</h3>
            <p className="pera">
              {t(
                'An involuntary termination of employment, including layoffs of over 30 days, is a  management-initiated dismissal with or without cause. The inability of an employee to perform the essential functions of his or her job with or without a reasonable accommodation may also result in an involuntary termination. An employee may also be discharged for any legal reason, including but not limited to: misconduct, tardiness, absenteeism, unsatisfactory performance or inability to perform.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Procedures')}</h3>
            <li>
              {t(
                "Before any action is taken to involuntarily discharge an employee, the employee's manager must request a review by HR and the employee's immediate supervisor."
              )}
            </li>
            <li>
              {t(
                "The termination review staff will be responsible for reviewing the circumstances and determining if discharge is warranted. If the staff recommends discharge, the employee's manager and an HR representative will notify the employee. The employee's manager should complete an Employee Change Form and notify HR and payroll of the last day worked by the employee."
              )}
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Death of an Employee')}</h3>
            <p className="pera">
              {t(
                'A termination due to the death of an employee will be made effective as of the date of death.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Procedures')}</h3>
            <li>
              {t(
                "Upon receiving notification of the death of an employee, the employee's manager should immediately notify HR."
              )}
            </li>
            <li>
              {t(
                'The benefits administrator will process all appropriate beneficiary payments from the various benefits plans.'
              )}
            </li>
            <li>
              {t(
                "The employee's manager should ensure that the payroll office receives the deceased employee's timecard."
              )}
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Final Pay')}</h3>
            <p className="pera">
              {t(
                "An employee who resigns or is discharged will be paid through the last day of work, plus any unused paid time off (PTO), less outstanding loans, advances or other agreements the employee may have with the company, in compliance with state laws. In cases of an employee's death, the final pay due to that employee will be paid to the deceased employee's estate or as otherwise required under state law."
              )}
            </p>
          </Typography>

          <h3 style={{ opacity: '0.7', textAlign: 'center' }}>
            {t('Hiring and Termination Policy with Background Checks')}
          </h3>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Purpose')}</h3>
            <p className="pera">
              {t(
                'The purpose of this policy is to provide guidance that limits the use of encryption to those algorithms that have received substantial public review and have been proven to work effectively. Additionally, this policy provides direction to ensure that Federal regulations are followed, and legal authority is granted for the dissemination and use of encryption technologies outside of the United States.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Policy')}</h3>
            <h3 className="head">{t('Algorithm Requirements')}</h3>
            <li>
              {t(
                'Ciphers in use must meet or exceed the set defined as "AES-compatible" or "partially AES-compatible" according to the'
              )}{' '}
              <NavLink to="#">{t('IETF/IRTF Cipher Catalog,')}</NavLink>{' '}
              {t('or the set defined for use in the United States')}{' '}
              <NavLink to="#">
                {t('National Institute of Standards and Technology (NIST) publication FIPS 140-2,')}
              </NavLink>
              {t(
                'or any superseding documents according to the date of implementation. The use of the Advanced Encryption Standard (AES) is strongly recommended for symmetric encryption.'
              )}
            </li>
            <li>
              {t(
                'Algorithms in use must meet the standards defined for use in NIST publication FIPS 140-2 or any superseding document, according to date of implementation. The use of the RSA and Elliptic Curve Cryptography (ECC) algorithms is strongly recommended for asymmetric encryption.'
              )}
            </li>
            <li>{t('Signature Algorithms')}</li>
          </Typography>
          <table>
            <tr>
              <th>{t('Algorithm')}</th>
              <th>{t('Key Length (min)')}</th>
              <th>{t('Additional Comment')}</th>
            </tr>
            <tr>
              <td>ECDSA</td>
              <td>P-256</td>
              <td>
                {t('Consider RFC6090 to avoid')} <br /> {t('patent infringement.')}
              </td>
            </tr>
            <tr>
              <td>RSA</td>
              <td>2048</td>
              <td>
                {t('Use a secure padding scheme.')}
                <br /> {t('PKCS#7 padding scheme is')}
                <br /> {t('recommended. Message hashing')}
                <br /> {t('required.')}
              </td>
            </tr>
            <tr>
              <td>LDWM</td>
              <td>SHA256</td>
              <td>
                {t('Refer to LDWM Hash-based')}
                <br /> {t('Signatures Draft')}
              </td>
            </tr>
          </table>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Summary')}</h3>
            <p className="pera">
              {t(
                'To maintain the trust of our employees, customers, and partners and meet regulatory requirements, it is essential that we do everything we can to protect confidential information and systems in the face of a cyberattack. The better prepared we are to respond to a potential cyberattack, the faster we can eradicate any threat and reduce the impact on our business'
              )}
              <br />
              {t(
                'This document describes the plan for responding to information security incidents at Falcon Consulting. This document will explain how to detect and react to cybersecurity incidents and data breaches, determine their scope and risk, respond appropriately and quickly, and communicate the results and risks to all stakeholders'
              )}
              <br />
              {t(
                'The effective incident response involves every part of our organization, including IT teams, legal, technical support, human resources, corporate communications, and business operations. It is important that you read and understand your role as well as the ways you will coordinate with others.'
              )}
              <br />
              {t(
                'This plan will be updated to reflect organizational changes, new technologies, and new compliance requirements that inform our cybersecurity strategy. We will conduct regular testing of this plan to ensure everyone is fully trained to participate in effective incident response.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Roles, Responsibilities & Contact Information')}</h3>
            <p className="pera">
              {t(
                'This Security Incident Response Plan must be followed by all personnel, including all  employees, temporary staff, consultants, contractors, suppliers, and third parties operating on behalf of Falcon Consulting. All personnel are referred to as ‘staff’ within this plan.'
              )}
              <br />
              {t(
                'Below are details about the roles and responsibilities of each member of [Company Name] to prevent and respond to a workplace incident. It is not an exhaustive list of duties but is designed to give each employee a general understanding of their role and the roles of other employees in incident response and prevention.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('The Incident Response Lead is responsible for:')}</h3>
            <li>
              {t(
                'Making sure that the Security Incident Response Plan and associated response and escalation procedures are defined and documented. This is to ensure that the handling of security incidents is timely and effective.'
              )}
            </li>
            <li>
              {t(
                'Making sure that the Security Incident Response Plan is current, reviewed, and tested at least once each year.'
              )}
            </li>
            <li>
              {t(
                'Making sure that staff with Security Incident Response Plan responsibilities are properly trained at least once each year.'
              )}
            </li>
            <li>
              {t(
                'Leading the investigation of a suspected breach or reported security incident and initiating the Security Incident Response Plan when needed.'
              )}
            </li>
            <li>
              {t(
                'Reporting to and liaising with external parties, including pertinent business partners, legal representation, law enforcement, etc., as required.'
              )}
            </li>
            <li>
              {t(
                'Authorizing on-site investigations by appropriate law enforcement or third-party security/forensic personnel, as required during any security incident investigation. This includes authorizing access to/removal of evidence from the site.'
              )}
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              {t('Security Incident Response Team (SIRT) members are responsible for:')}
            </h3>
            <li>
              {t(
                'Making sure that all staff understands how to identify and report a suspected or actual security incident.'
              )}
            </li>
            <li>
              {t(
                'Advising the Incident Response Lead of an incident when they receive a security incident report from staff.'
              )}
            </li>
            <li>{t('Investigating and documenting each reported incident.')}</li>
            <li>
              {t(
                'Taking action to limit the exposure of sensitive data and to reduce the risks that may be associated with any incident.'
              )}
            </li>
            <li>
              {t(
                'Gathering, reviewing, and analysing logs and related information from various central and local safeguards, security measures, and controls.'
              )}
            </li>
            <li>
              {t(
                'Documenting and maintaining accurate and detailed records of the incident and all activities that were undertaken in response to an incident.'
              )}
            </li>
            <li>
              {t(
                'Assisting law enforcement during the investigation processes. This includes any forensic investigations and prosecutions.'
              )}
            </li>
            <li>
              {t(
                'Initiating follow-up actions to reduce the likelihood of recurrence, as appropriate.'
              )}
            </li>
            <li>
              {t(
                'Determining if policies, processes, technologies, security measures, or controls need to be updated to avoid a similar incident in the future. They also need to consider whether additional safeguards are required in the environment where the incident occurred.'
              )}
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('All staff members are responsible for:')}</h3>
            <li>
              {t(
                'Making sure they understand how to identify and report a suspected or actual security incident.'
              )}
            </li>
            <li>
              {t(
                'Reporting a suspected or actual security incident to the Incident Response Lead (preferable) or to another member of the Security Incident Response Team (SIRT).'
              )}
            </li>
            <li>
              {t(
                'Reporting any security-related issues or concerns to line management, or to a member of the SIRT.'
              )}
            </li>
            <li>
              {t('Complying with the security policies and procedures of Falcon Consulting.')}
            </li>
          </Typography>

          <h3 style={{ opacity: '0.7', textAlign: 'center' }}>
            {t('Security Awareness Training Program')}
          </h3>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Overview')}</h3>
            <p className="pera">
              {t(
                'Security and privacy awareness and training is an important aspect in protecting the Confidentiality, Integrity, and Availability (CIA) of sensitive information. Employees are the first line of defense and must be made aware of the security risks associated with the work performed at Falcon Consulting.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Purpose')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting understands that people are often the biggest threat (intentionally or inadvertently) to the security of sensitive information. As such, all users of information systems must be made aware of the security risks associated with their activities and of the applicable federal and agency requirements related to the security of Strategic information systems performing work on behalf of the Centers for Medicare and Medicaid Services (CMS). Those with significant security responsibilities must be adequately trained to carry out their assigned information security-related duties and responsibilities.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Policy')}</h3>
            <p className="pera">
              {t(
                'All employees, contractors, and anyone accessing Falcon Consulting information systems must understand how to protect the CIA of information and information systems.'
              )}
              <br />
              {t(
                'Falcon Consulting will ensure that all employees and contractors are given security and privacy awareness training during the new hire process and before accessing any Falcon Consulting systems. This training reflects common security and privacy awareness specific to [Company’s] environment including, but not limited to, physical access, restricted areas, potential incidents, how to report incidents, laptop best practices, and how to spot a phishing scam.'
              )}
              <br />
              {t(
                'In addition to the initial security training provided in the new hire orientation, all employees must take a security and privacy awareness course and pass the posttest within 30 days of hire. This course and test is provided and tracked by the Learning Management System (LMS).'
              )}
              <br />
              {t(
                'Falcon Consulting will provide ongoing training through the Security and Privacy Awareness and Training (SPAT) Team activities. The SPAT provides information on a monthly basis on selected topics. An initial SPAT Chat presentation is conducted at the beginning of the month to give information, demonstrations, and general Q&A for all attendees. The SPAT also provides information via posters in designated areas throughout the facility and weekly articles posted on the internal intranet page.'
              )}
              <br />
              {t(
                'Falcon Consulting will also conduct annual refresher training for all employees and anytime there are significant changes to the environment. This will be administered via the LMS and tracked for completeness and passing grade to show adequate understanding of the material.'
              )}
              <br />
              {t(
                'This policy will be reviewed on an annual basis or whenever there are significant changes to the environment.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Management Commitment')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting Senior Management will commit to the development of a security and privacy awareness program allocating staff and resources. The Information Security Manager will have access to both the compliance and training departments for completion and update of training materials and tracking results.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Roles and Responsibilities')}</h3>
            <p className="pera">
              {t(
                'All employees and contractors are responsible for understanding and following all security related policies and procedures, and asking their manager or Security Officer for clarification if needed.'
              )}
              <br />
              {t(
                'Managers are responsible for ensuring all employees complete required security training.'
              )}
              <br />
              {t(
                'The LMS Administrator is responsible for enrolling all employees in first-time and annual security training and tracking results.'
              )}
              <br />
              {t('The Security Manager is responsible for:')}
              <ol> {t('Maintaining ongoing SPAT team activities')}</ol>
              <ol> {t('Updating annual security training materials')}</ol>
              <ol> {t('Conducting new hire training')}</ol>
              <ol>
                {' '}
                {t(
                  'Ensuring all employees understand and following security related policies and procedures'
                )}
              </ol>
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Coordination Among Organizational Entities')}</h3>
            <p className="pera">
              {t(
                'Security is everybody’s business. As security tends to cross departmental and organizational boundaries, Falcon Consulting employees and contractors will work together to ensure that required security controls are in place, are maintained, and comply with the policy described in this document. Security concerns, security incidents, or suspected/confirmed vulnerabilities will be shared with appropriate personnel in the organization so that the vulnerability can be remediated (or mitigated with compensating security controls) and we can ensure that similar vulnerabilities in other systems or processes can be addressed.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Compliance')}</h3>
            <p className="pera">
              {t(
                'Compliance with the policy defined in this document is mandatory. Failure to comply with Falcon Consulting Information Security Policies may result in disciplinary actions up to and including termination of employment. Employees may also be held personally liable for any violations of this policy. Failure to comply with Falcon Consulting Information Security Policies may result in termination of contracts for contractors, partners, consultants, and other entities. Legal actions may also be taken for violations of applicable regulations and laws. Systems that do not satisfy Falcon Consulting Information Security Policy requirements may be prevented from being allowed to operate as a production system.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('References')}</h3>
            <p className="pera">
              {t(
                'This policy establishes mandatory requirements and assigns roles and responsibilities to facilitate the implementation of the Falcon Consulting Security Awareness and Training Policy. The policy contains formal, documented policy statements and language designed to facilitate and guide the implementation of the policy, procedures, and controls. Formal, documented security procedures exist as separate documents titled AT-1 through AT-4. This policy is consistent with the following guidance:'
              )}
            </p>
            <ol> {t('C.F.R. Part 5 Subpart C (5 C.F.R 930.301)')}</ol>
            <ol> {t('NIST SP 800-12 Introduction to Computer Security: The NIST Handbook')}</ol>
            <ol>
              {' '}
              {t(
                'NIST SP 800-16 Information Security Training Requirements: A Role- and Performance-Based Model'
              )}
            </ol>
            <ol>
              {' '}
              {t(
                'NIST SP 800-37 Rev. 1 Guide for Applying the Risk Management Framework to Federal Information Systems: A Security Life Cycle Approach'
              )}
            </ol>
            <ol>
              {' '}
              {t(
                'NIST SP 800-50 Building an Information Technology Security Awareness and Training Program'
              )}
            </ol>
            <ol> {t('NIST SP 800-100 Information Security Handbook: A Guide for Managers')}</ol>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Security Awareness (AT-2)')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting requires that all users complete a security awareness and training course (or courses as applicable) prior to being granted access to Falcon Consulting corporate or client systems. Users are provided basic security awareness training as part of initial training for new users, as well as when required by system changes. All users must take refresher training at least annually. Employees or contractors shall acknowledge having received the security awareness training either in writing or electronically as part of the training course completion (the current process involves sending copies of course completion certificates to the Falcon Consulting CISO). The Falcon Consulting CISO maintains and stores completed security awareness and training evidence artifacts (certificates) for users. Security awareness and training course completion artifacts (certificates) will be provided to the Agency ISSO or Security Steward upon request.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Security Training (AT-3)')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting must provide role-based, security-related training before authorizing access to the system or performing assigned duties, as well as when required by a system change or changes in personnel roles.'
              )}
              <br />
              {t(
                'Falcon Consulting must provide security training materials that address the procedures and activities necessary to fulfill the defined roles and responsibilities for information system security. Falcon Consulting must provide role-based security-related training to all appropriate personnel at least once every three years. Appropriate personnel include but is not limited to System Administrators, Database Administrators, Network Engineers, Security Analysts, and the CISO. The employee or consultant shall acknowledge having received the role-based training either in writing or electronically as part of the training course completion.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Security Training Records (AT-4)')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting must create and disseminate to users the security training documents. The Falcon Consulting CISO must ensure activities for monitoring and documenting basic security awareness training, as well as role-based training, are conducted. Employees and contractors must provide evidence of successful course completion (certificates) to the Falcon Consulting CISO. All security training records must be stored for at least 5 years.'
              )}
            </p>
          </Typography>

          <h3 style={{ opacity: '0.7', textAlign: 'center' }}>
            {t('Third party/Vendor management')}
          </h3>

          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Identify Risk:')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting helps deliver access to the latest public, proprietary and self-reported information. This enables clients to identify and classify a variety of risk factors, including cyber, privacy, information security, bribery, corruption, financial crime and reputational and operational concerns.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Evaluate Third party risk management')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting provide due diligence and investigation services in more than 240 countries and 100 languages. We offer off-the-shelf and customized services for clients to evaluate, segment and understand both the risk landscape and quality controls in place at the local, country, regional and global level.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Monitor Risk')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting help clients understand and implement tactical and strategic methods of managing and mitigating third-party risks. These methods include continuous or periodic monitoring, threat monitoring, and alert management processes to make the job of staying on top of risk easier to implement at a lower overall cost.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Innovate third-party risk management')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting leverage advanced analytics, robotic process automation, advanced workflow, and machine learning to simplify and streamline everyday tasks when implementing and managing effective third-party risk management programs.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Enable third-party risk management')}</h3>
            <p className="pera">
              {t(
                'Falcon Consulting help deliver a range of services that help clients improve their operational risk management. These services include helping clients design risk frameworks, manage governance and model data. We can also provide clients with an outsourced managed service.'
              )}
            </p>
          </Typography>

          <h3 style={{ opacity: '0.7', textAlign: 'center' }}>
            {t('System backup policy and program')}
          </h3>

          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Purpose')}</h3>
            <p className="pera">
              {t('The purpose of this policy is to provide means to:')}
              <br />
              i.{' '}
              {t(
                'restore the integrity of the computer systems in the event of a hardware/software failure or physical disaster; and'
              )}
              <br />
              ii.{' '}
              {t(
                'provide a measure of protection against human error or the inadvertent deletion of important files.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Scope')}</h3>
            <br />
            <h3 className="head">{t('Employees')}</h3>
            <p className="pera">
              {t(
                'This policy applies to all Employees, Contractors, and Third Party Employees, who have access to IT assets of FALCON CONSULTING and may be bound by contractual agreements.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('IT Assets')}</h3>
            <p className="pera">
              {t('This policy applies to the entire IT infrastructure of FALCON CONSULTING.')}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Documentation')}</h3>
            <br />
            <h3 className="head">
              {t(
                'The Policy documentation shall consist of Backup Policy and related procedures and guidelines.'
              )}
            </h3>
            <br />
            <h3 className="head">{t('Document Control')}</h3>
            <p className="pera">
              {t(
                'The Backup Policy document and all other referenced documents shall be controlled. Version control shall be used to preserve the latest release and the previous version of any document. However, the previous version of the documents shall be retained only for a period of two years for legal and knowledge preservation purposes.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Records')}</h3>
            <p className="pera">
              {t(
                'Records being generated as part of the Backup Policy shall be retained for a period of two years. Records shall be in hard copy or electronic media. The records shall be owned by the respective system administrators and shall be audited once a year.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Distribution and Maintenance')}</h3>
            <p className="pera">
              {t(
                'The Backup Policy document shall be made available to all the employees covered in the scope. All the changes and new releases of this document shall be made available to the persons concerned. The maintenance responsibility of the document shall be with the CISO and system administrators'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Privacy')}</h3>
            <p className="pera">
              {t(
                'The Backup Policy document shall be considered as “confidential” and shall be made available to the concerned persons with proper access control. Subsequent changes and versions of this document shall be controlled.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Responsibility')}</h3>
            <p className="pera">
              {t(
                'The CISO / designated personnel are responsible for proper implementation of the Policy.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Policy')}</h3>
            <li>
              {t(
                'All user-level and system-level information maintained by FALCON CONSULTING shall be backed up periodically. The backup media shall be stored with sufficient protection and proper environmental conditions.'
              )}
            </li>
            <li>
              {t(
                'The frequency and extent of backups must be in accordance with the importance of the information and the acceptable risk as determined by the data owner.'
              )}
            </li>
            <li>
              {t(
                'The Information Resources backup and recovery process for each system must be documented and periodically reviewed.'
              )}
            </li>
            <li>
              {t(
                'Any vendor(s) providing offsite backup storage must be cleared to handle the highest level of information stored.'
              )}
            </li>
            <li>
              {t(
                'Physical access controls implemented at offsite backup storage locations must meet or exceed the physical access controls of the source systems. Additionally, backup media must be protected in accordance with the highest sensitivity level of information stored.'
              )}
            </li>
            <li>
              {t(
                'A process must be implemented to verify the success of the KDCC electronic information backup.'
              )}
            </li>
            <li>
              {t(
                'Backup copies of operating systems and other critical information system software shall not be stored in the same location as the operational software.'
              )}
            </li>
            <li>
              {t(
                'The system backup information shall be provided with protection from unauthorized modification and environmental conditions.'
              )}
            </li>
            <li>
              {t(
                'Backups must be periodically tested to ensure that they are recoverable. To confirm media reliability and information integrity, the back-up information shall be tested at some specified frequency.'
              )}
            </li>
            <li>
              {t(
                'Signature cards held by the offsite backup storage vendor(s) for access to backup media must be reviewed annually or when an authorized individual leaves FALCON CONSULTING.'
              )}
            </li>
            <li>
              {t(
                'Backup information shall be selectively used to restore information system functions as a part of the business continuity process.'
              )}
            </li>
            <li>
              {t(
                'Procedures between KDCC and the offsite backup storage vendor(s) must be reviewed at least annually.'
              )}
            </li>
            <li>
              {t(
                'Backup tapes must have at a minimum the following identifying criteria that can be readily identified by labels and/or a bar-coding system:'
              )}
              <br />
              {t('a. System name ')}
              <br />
              {t('b. Creation Date')} <br />
              {t(
                'c. Sensitivity Classification [Based on applicable electronic record retention regulations.]'
              )}{' '}
              <br />
              {t('d. Contact Information')}
            </li>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Enforcement')}</h3>
            <p className="pera">
              {t(
                'Any employee found to have violated this policy may be subjected to disciplinary action in line with the HR Policy.'
              )}
            </p>
          </Typography>
        </>
      )
    },
    {
      title: 'Business Continuity and Disaster Recovery Policy',
      index: 2,
      body: (
        <>
          <h3 style={{ opacity: '0.7', textAlign: 'center' }}>
            {t('Business Continuity and Disaster Recovery Policy')}
          </h3>

          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Business Continuity Plan')}</h3>
            <p className="pera">
              {t(
                'Business Continuity focuses on sustaining The Falcon Consulting’s critical business processes during and after a disruption.'
              )}
            </p>
            <br />
            <li>
              {t(
                'Falcon Consulting has created and implemented a Business Continuity Plan (“BCP”).'
              )}
            </li>
            <li>
              {t(
                'The BCP is periodically tested and the results should be shared with executive management.'
              )}
            </li>
            <li>
              {t(
                'The BCP is reviewed and updated upon any relevant change to the organization, at the conclusion of plan testing, or least annually.'
              )}
            </li>
            <li>
              {t(
                'The BCP is communicated and distributed to all relevant internal personnel and executive management.'
              )}
            </li>
            <li>
              {t('Business continuity planning includes:')}
              <li>{t('The safety and security of personnel is the first priority;')}</li>
              <li>
                {t(
                  'An adequate management structure is in place to prepare for, mitigate and respond to a disruptive event using personnel with the necessary authority, experience, and competence;'
                )}
              </li>
              <li>
                {t(
                  'Documented plans, response and recovery procedures are developed and approved, detailing how the organization will manage a disruptive event.'
                )}
              </li>
              <li>
                {t(
                  'A risk assessment for critical business processes and operations (Business Impact Analysis);'
                )}
              </li>
              <li>{t('An inventory of critical systems and records, and their dependencies;')}</li>
              <li>{t('Requirements for ensuring information security throughout the process;')}</li>
              <li>
                {t(
                  'Identification of supply chain relationships and the organization’s role to support critical infrastructure;'
                )}
              </li>
              <li>{t('Processes to ensure the safety of personnel;')}</li>
              <li>
                {t(
                  'Communication strategies for communications both inside and outside the organization;'
                )}
              </li>
              <li>
                {t(
                  'Notification policy from Falcon Consulting partners to inform the company in case of disruption of their services which may affect the activities of Falcon Consulting;'
                )}
              </li>
              <li>{t('Mitigation strategies and safeguards to reduce impact;')}</li>
              <li>{t('Strategies to address and limit the reputational impact from an event;')}</li>
              <li>{t('Contingency plans for different types of disruption events;')}</li>
              <li>{t('Protection and availability of plan documentation;')}</li>
              <li>{t('Procedures for plan tests, review, and updates.')}</li>
            </li>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Disaster recovery Policy')}</h3>
            <p className="pera">
              {t(
                'Disaster Recovery focuses on restoring the technology systems that support both critical and day-to-day business operations.'
              )}
            </p>
            <li>
              {t(
                'Falcon consulting has created and implement a Disaster Recovery Plan (“DRP”) to support business objectives outlined in the (BCP/critical processes identified by a Business Impact Analysis).'
              )}
            </li>
            <li>{t('The DRP is tested annually, at a minimum.')}</li>
            <li>
              {t(
                'The DRP is reviewed and updated upon any relevant change to IT Infrastructure, at the conclusion of plan testing, or least annually.'
              )}
            </li>
            <li>
              {t(
                'The DRP is communicated and distributed to all relevant internal personnel and executive management.'
              )}
            </li>
            <li>
              {t('The Falcon consulting DRP includes:')}
              <li>
                {t('Roles and responsibilities for implementing the disaster recovery plan;')}
              </li>
              <li>{t('List of potential risks to critical systems and sensitive information;')}</li>
              <li>
                {t(
                  'Procedures for reporting disaster events, event escalation, recovery of critical operations, and resumption of normal operations;'
                )}
              </li>
              <li>{t('Requirements for ensuring information security throughout the process;')}</li>
              <li>{t('An inventory of backups and offsite storage locations;')}</li>
              <li>
                {t(
                  'Data Backup and Restoration Plan: Indicates which data is backed up, the media to which it is saved, where that media is stored, and how often the backup is done.'
                )}
              </li>
              <li>
                {t(
                  'Equipment Replacement Plan: Describes what equipment is required to begin to provide services, list the order in which it is necessary, and note where to purchase the equipment.'
                )}
              </li>
              <li>{t('Contingency plans for different types of disruption events;')}</li>
              <li>{t('Protection and availability of plan documentation;')}</li>
              <li>{t('Procedures for plan tests, review, and updates.')}</li>
              <li>
                {t(
                  'Computer Emergency Response Plan: Indicates who is to be contacted, when, and how. Also indicates what immediate actions must be taken in the event of certain occurrences.'
                )}
              </li>
              <li>
                {t(
                  'Succession Plan: Describes the flow of responsibility when normal staff is unavailable to perform their duties.'
                )}
              </li>
              <li>
                {t(
                  'Data Study: Details the data stored on the systems, its criticality, and its confidentiality.'
                )}
              </li>
              <li>
                {t(
                  'Criticality of Service List: Lists all the services provided and their order of importance.'
                )}
              </li>
            </li>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Waivers')}</h3>
            <p className="pera">
              {t(
                'Waivers from certain policy provisions may be sought following the Falcon Consulting Waiver Process.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Enforcement')}</h3>
            <p className="pera">
              {t(
                'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.'
              )}
              <br />
              {t(
                'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.'
              )}
            </p>
          </Typography>
        </>
      )
    },
    {
      title: 'Information Security Policy',
      index: 3,
      body: (
        <>
          <h3 style={{ opacity: '0.7' }}>{t('Information Security Policy')}</h3>

          <Typography className="LegalMentions_Data_P">
            <h3>{t('Introduction')}</h3>
            <p className="pera">
              {t(
                'Information security is a holistic discipline, meaning that its application, or lack thereof, affects all facets of an organization or enterprise. The goal of the Falcon Consulting Information Security Program is to protect the Confidentiality, Integrity, and Availability of the data employed within the organization while providing value to the way we conduct business. Protection of the Confidentiality, Integrity, and Availability are basic principles of information security, and can be defined as:'
              )}
            </p>
            <li>
              {t(
                'Confidentiality – Ensuring that information is accessible only to those entities that are authorized to have access, many times enforced by the classic “need-to-know” principle.'
              )}
            </li>
            <li>
              {t(
                'Integrity – Protecting the accuracy and completeness of information and the methods that are used to process and manage it.'
              )}
            </li>
            <li>
              {t(
                'Availability – Ensuring that information assets (information, systems, facilities, networks, and computers) are accessible and usable when needed by an authorized entity.'
              )}
            </li>
            <p className="pera">
              {t(
                'Falcon Consulting has recognized that our business information is a critical asset and as such our ability to manage, control, and protect this asset will have a direct and significant impact on our future success. '
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3>{t('Purpose')}</h3>
            <p className="pera">
              {t(
                'The purpose of the Falcon Consulting Information Security Policy is to describe the actions and behaviors required to ensure that due care is taken to avoid inappropriate risks to Falcon Consulting, its business partners, and its stakeholders.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3>{t('Audience')}</h3>
            <p className="pera">
              {t(
                'The Falcon Consulting Information Security Policy applies equally to any individual, entity, or process that interacts with any Falcon Consulting Information Resource.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3>{t('Responsibilities')}</h3>

            <h3>{t('Executive Management')} </h3>

            <li>
              {t(
                'Ensure that an appropriate risk-based Information Security Program is implemented to protect the confidentiality, integrity, and availability of all Information Resources collected or maintained by or on behalf of Falcon Consulting.'
              )}
            </li>
            <li>
              {t(
                'Ensure that information security processes are integrated with strategic and operational planning processes to secure the organization’s mission.'
              )}
            </li>
            <li>
              {t(
                'Ensure adequate information security financial and personnel resources are included in the budgeting and/or financial planning process.'
              )}
            </li>
            <li>
              {t(
                'Ensure that the Security Team is given the necessary authority to secure the Information Resources under their control within the scope of the Falcon Consulting Information Security Program.'
              )}
            </li>
            <li>
              {t(
                'Designate an Information Security Officer and delegate authority to that individual to ensure compliance with applicable information security requirements.'
              )}
            </li>
            <li>
              {t(
                'Ensure that the Information Security Officer, in coordination with the Security Team, reports annually to Executive Management on the effectiveness of the Falcon Consulting Information Security Program.'
              )}
            </li>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3>{t('Information Security Team')}</h3>

            <li>{t('Ensure compliance with applicable information security requirements.')}</li>
            <li>{t('Formulate, review and recommend information security policies.')}</li>
            <li>
              {t(
                'Approve supporting procedures, standards, and guidelines related to information security.'
              )}
            </li>
            <li>
              {t(
                'Provide clear direction and visible management support for information security initiatives.'
              )}
            </li>
            <li>
              {t(
                'Assess the adequacy and effectiveness of the information security policies and coordinate the implementation of information security controls.'
              )}
            </li>
            <li>
              {t('Ensure that ongoing security activities are executed in compliance with policy.')}
            </li>
            <li>
              {t('Review and manage the information security policy waiver request process.')}
            </li>
            <li>
              {t(
                'Review information security incident information and recommend follow-up actions.'
              )}
            </li>
            <li>
              {t(
                'Promote information security education, training, and awareness throughout Falcon Consulting, and initiate plans and programs to maintain information security awareness.'
              )}
            </li>
            <li>
              {t(
                'Report annually, in coordination with the Security Officer, to Executive Management on the effectiveness of the Falcon Consulting Information Security Program, including progress of remedial actions.'
              )}
            </li>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3>{t('All Employees, Contractors, and Other Third-Party Personnel')}</h3>

            <li>
              {t(
                'Understand their responsibilities for complying with the Falcon Consulting Information Security Program.'
              )}
            </li>
            <li>
              {t(
                'Use Falcon Consulting Information Resources in compliance with all Falcon Consulting Information Security Policies.'
              )}
            </li>
            <li>
              {t(
                'Seek guidance from the Information Security Team for questions or issues related to information security.'
              )}
            </li>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3>{t('Policy')}</h3>
            <li>
              {t(
                'Falcon Consulting maintains and communicates an Information Security Program consisting of topic-specific policies, standards, procedures and guidelines that:'
              )}
              <li>
                {t(
                  'Serve to protect the Confidentiality, Integrity, and Availability of the Information Resources maintained within the organization using administrative, physical and technical controls.'
                )}
              </li>
              <li>
                {t(
                  'Provide value to the way we conduct business and support institutional objectives.'
                )}
              </li>
              <li>
                {t('Comply with all regulatory and legal requirements, including:')}
                <li>{t('State breach notification laws,')}</li>
                <li>{t('PCI Data Security Standard,')}</li>
                <li>{t('Information Security best practices,')}</li>
                <li>{t('Contractual agreements,')}</li>
                <li>{t('All other applicable federal and state laws or regulations.')}</li>
              </li>
            </li>
            <li>
              {t(
                'The information security program is reviewed no less than annually or upon significant changes to the information security environment.'
              )}
            </li>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3>{t('Enforcement')}</h3>
            <p className="pera">
              {t(
                'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.'
              )}
               
              <br />
              {t(
                'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.'
              )}
            </p>
          </Typography>
        </>
      )
    },
    {
      title: 'Acceptable Use Policy',
      index: 4,
      body: (
        <>
          <h3 style={{ opacity: '0.7' }}>{t('Acceptable Use Policy')}</h3>

          <Typography className="LegalMentions_Data_P">
            <p className="pera">
              {t(
                'This policy applies to the use of information, electronic and computing devices, and network resources to conduct Falcon Consulting business or interact with internal networks and business systems, whether owned or leased by Falcon Consulting, the employee, or a third party. All employees, contractors, consultants, temporary, and other workers at Falcon Consulting and its subsidiaries are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with Falcon Consulting.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('General Use and Ownership')}</h3>
            <li>
              {t(
                'Falcon Consulting proprietary information stored on electronic and computing devices whether owned or leased by Falcon Consulting, the employee or a third party, remains the sole property of Falcon Consulting. You must ensure through legal or technical means that proprietary information is protected in accordance with the Data Protection Standard.'
              )}
            </li>
            <li>
              {t(
                'You have a responsibility to promptly report the theft, loss or unauthorized disclosure of Falcon Consulting proprietary information.'
              )}
            </li>
            <li>
              {t(
                'You may access, use or share Falcon Consulting proprietary information only to the extent it is authorized and necessary to fulfill your assigned job duties.'
              )}
            </li>
            <li>
              {t(
                'Employees are responsible for exercising good judgment regarding the reasonableness of personal use. Individual departments are responsible for creating guidelines concerning personal use of Internet/Intranet/Extranet systems. In the absence of such policies, employees should be guided by departmental policies on personal use, and if there is any uncertainty, employees should consult their supervisor or manager.'
              )}
            </li>
            <li>
              {t(
                'For security and network maintenance purposes, authorized individuals within Falcon Consulting may monitor equipment, systems and network traffic at any time, per Audit Policy.'
              )}
            </li>
            <li>
              {t(
                'Falcon Consulting reserves the right to audit networks and systems on a periodic basis to ensure compliance with this policy.'
              )}
            </li>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Security and Proprietary Information')}</h3>
            <li>
              {t(
                'All mobile and computing devices that connect to the internal network must comply with the Minimum Access Policy.'
              )}
            </li>
            <li>
              {t(
                'System level and user level passwords must comply with the Password Policy. Providing access to another individual, either deliberately or through failure to secure its access, is prohibited.'
              )}
            </li>
            <li>
              {t(
                'All computing devices must be secured with a password-protected screensaver with the automatic activation feature set to 10 minutes or less. You must lock the screen or log off when the device is unattended.'
              )}
            </li>
            <li>
              {t(
                'Postings by employees from a Falcon Consulting email address to newsgroups should contain a disclaimer stating that the opinions expressed are strictly their own and not necessarily those of Falcon Consulting, unless posting is in the course of business duties.'
              )}
            </li>
            <li>
              {t(
                'Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain malware.'
              )}
            </li>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Unacceptable Use')}</h3>
            <p className="pera">
              {t(
                'The following activities are, in general, prohibited. Employees may be exempted from these restrictions during the course of their legitimate job responsibilities (e.g., systems administration staff may have a need to disable the network access of a host if that host is disrupting production services).'
              )}
              <br />
              {t(
                'Under no circumstances is an employee of Falcon Consulting authorized to engage in any activity that is illegal under local, state, federal or international law while utilizing Falcon Consulting-owned resources.'
              )}
              <br />
              {t(
                'The lists below are by no means exhaustive, but attempt to provide a framework for activities which fall into the category of unacceptable use.'
              )}
            </p>
            <li>
              {t('System and Network Activities')}
              <br />
              {t('The following activities are strictly prohibited, with no exceptions:')}
              <li>
                {t(
                  "Violations of the rights of any person or company protected by copyright, trade secret, patent or other intellectual property, or similar laws or regulations, including, but not limited to, the installation or distribution of 'pirated' or other software products that are not appropriately licensed for use by Falcon Consulting."
                )}
              </li>
              <li>
                {t(
                  'Unauthorized copying of copyrighted material including, but not limited to, digitization and distribution of photographs from magazines, books or other copyrighted sources, copyrighted music, and the installation of any copyrighted software for which Falcon Consulting or the end user does not have an active license is strictly prohibited.'
                )}
              </li>
              <li>
                {t(
                  'Accessing data, a server or an account for any purpose other than conducting Falcon Consulting business, even if you have authorized access, is prohibited.'
                )}
              </li>
              <li>
                {t(
                  'Exporting software, technical information, encryption software or technology, in violation of international or regional export control laws, is illegal. The appropriate management should be consulted prior to export of any material that is in question.'
                )}
              </li>
              <li>
                {t(
                  'Introduction of malicious programs into the network or server (e.g., viruses, worms, Trojan horses, e-mail bombs, etc.).'
                )}
              </li>
              <li>
                {t(
                  'Revealing your account password to others or allowing use of your account by others. This includes family and other household members when work is being done at home.'
                )}
              </li>
              <li>
                {t(
                  "Using a Falcon Consulting computing asset to actively engage in procuring or transmitting material that is in violation of sexual harassment or hostile workplace laws in the user's local jurisdiction."
                )}
              </li>
              <li>
                {t(
                  'Making fraudulent offers of products, items, or services originating from any Falcon Consulting account.'
                )}
              </li>
              <li>
                {t(
                  'Making statements about warranty, expressly or implied, unless it is a part of normal job duties.'
                )}
              </li>
              <li>
                {t(
                  "Effecting security breaches or disruptions of network communication. Security breaches include, but are not limited to, accessing data of which the employee is not an intended recipient or logging into a server or account that the employee is not expressly authorized to access, unless these duties are within the scope of regular duties. For purposes of this section, 'disruption' includes, but is not limited to, network sniffing, pinged floods, packet spoofing, denial of service, and forged routing information for malicious purposes."
                )}
              </li>
              <li>
                {t(
                  'Port scanning or security scanning is expressly prohibited unless prior notification to Infosec is made.'
                )}
              </li>
              <li>
                {t(
                  "Executing any form of network monitoring which will intercept data not intended for the employee's host, unless this activity is a part of the employee's normal job/duty."
                )}
              </li>
              <li>
                {t(
                  'Circumventing user authentication or security of any host, network or account.'
                )}
              </li>
              <li>
                {t(
                  'Introducing honeypots, honeynets, or similar technology on the Falcon Consulting network.'
                )}
              </li>
              <li>
                {t(
                  "Interfering with or denying service to any user other than the employee's host (for example, denial of service attack)."
                )}
              </li>
              <li>
                {t(
                  "Using any program/script/command, or sending messages of any kind, with the intent to interfere with, or disable, a user's terminal session, via any means, locally or via the Internet/Intranet/Extranet."
                )}
              </li>
              <li>
                {t(
                  'Providing information about, or lists of, Falcon Consulting employees to parties outside Falcon Consulting.'
                )}
              </li>
            </li>
            <li>
              {t('Email and Communication Activitiesa')}
              <br />
              {t(
                "When using company resources to access and use the Internet, users must realize they represent the company. Whenever employees state an affiliation to the company, they must also clearly indicate that 'the opinions expressed are my own and not necessarily those of the company'. Questions may be addressed to the IT Department"
              )}
              <li>
                {t(
                  "Sending unsolicited email messages, including the sending of 'junk mail' or other advertising material to individuals who did not specifically request such material (email spam)."
                )}
              </li>
              <li>
                {t(
                  'Any form of harassment via email, telephone or paging, whether through language, frequency, or size of messages.'
                )}
              </li>
              <li>{t('Unauthorized use, or forging, of email header information.')}</li>
              <li>
                {t(
                  "Solicitation of email for any other email address, other than that of the poster's account, with the intent to harass or to collect replies."
                )}
              </li>
              <li>
                {t(
                  "Creating or forwarding 'chain letters', 'Ponzi' or other 'pyramid' schemes of any type."
                )}
              </li>
              <li>
                {t(
                  "Use of unsolicited email originating from within Falcon Consulting's networks of other Internet/Intranet/Extranet service providers on behalf of, or to advertise, any service hosted by Falcon Consulting or connected via Falcon Consulting's network."
                )}
              </li>
              <li>
                {t(
                  'Posting the same or similar non-business-related messages to large numbers of Usenet newsgroups (newsgroup spam).'
                )}
              </li>
            </li>
            <li>
              {t('Blogging and Social Media')}
              <li>
                {t(
                  "Blogging by employees, whether using Falcon Consulting’s property and systems or personal computer systems, is also subject to the terms and restrictions set forth in this Policy. Limited and occasional use of Falcon Consulting’s systems to engage in blogging is acceptable, provided that it is done in a professional and responsible manner, does not otherwise violate Falcon Consulting’s policy, is not detrimental to Falcon Consulting’s best interests, and does not interfere with an employee's regular work duties. Blogging from Falcon Consulting’s systems is also subject to monitoring."
                )}
              </li>
              <li>
                {t(
                  'Falcon Consulting’s Confidential Information policy also applies to blogging. As such, Employees are prohibited from revealing any confidential or proprietary information, trade secrets or any other material covered by Company’s Confidential Information policy when engaged in blogging.'
                )}
              </li>
              <li>
                {t(
                  'Employees shall not engage in any blogging that may harm or tarnish the image, reputation and/or goodwill of Falcon Consulting and/or any of its employees. Employees are also prohibited from making any discriminatory, disparaging, defamatory or harassing comments when blogging or otherwise engaging in any conduct prohibited by Falcon Consulting’s Non-Discrimination and Anti-Harassment policy.'
                )}
              </li>
              <li>
                {t(
                  'Employees may also not attribute personal statements, opinions or beliefs to Falcon Consulting when engaged in blogging. If an employee is expressing his or her beliefs and/or opinions in blogs, the employee may not, expressly or implicitly, represent themselves as an employee or representative of Falcon Consulting. Employees assume any and all risk associated with blogging.'
                )}
              </li>
              <li>
                {t(
                  'Apart from following all laws pertaining to the handling and disclosure of copyrighted or export controlled materials, Falcon Consulting’s trademarks, logos and any other Falcon Consulting intellectual property may also not be used in connection with any blogging activity'
                )}
              </li>
            </li>
          </Typography>
        </>
      )
    },
    {
      title: 'Government Data Request Policy',
      index: 5,
      body: (
        <>
          <Typography className="LegalMentions_Data_P">
            <h2 className="headH1">{t('Government Data Request Policy')}</h2>
            <h3 className="head">1. {t('Introduction')}</h3>
            <p className="pera">
              1.1{' '}
              {t(
                'This Government Data Request Policy sets out Falcon Consulting’s procedure for responding to a request received from a law enforcement or other government authority (together the “Requesting Authority“) to disclose personal information processed by Falcon Consulting (hereafter “Data Disclosure Request“) which is aligned with our Binding Corporate Rules: Government Data Request Procedure.'
              )}
              <br />
              1.2{' '}
              {t(
                'Where Falcon Consulting receives a Data Disclosure Request, it will handle that Data Disclosure Request in accordance with this policy. . If applicable data protection law(s) require a higher standard of protection for personal information than is required by this policy, Falcon Consulting will comply with the relevant requirements of those applicable data protection law(s).'
              )}
              <br />
              {t(
                'The lists below are by no means exhaustive, but attempt to provide a framework for activities which fall into the category of unacceptable use.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">2. {t('General principle on Data Disclosure Requests')}</h3>
            <p className="pera">
              2.1{' '}
              {t(
                'As a general principle, Falcon Consulting does not disclose personal information in response to a Data Disclosure Request unless either:'
              )}
              <li>{t('it is under a compelling legal obligation to make such disclosure; or')}</li>
              <li>
                {t(
                  'taking into account the nature, context, purposes, scope and urgency of the Data Disclosure Request and the privacy rights and freedoms of any affected individuals, there is an imminent risk of serious harm that merits compliance with the Data Disclosure Requests in any event.'
                )}
              </li>
              2.2{' '}
              {t(
                'For that reason, unless it is legally prohibited from doing so or there is an imminent risk of serious harm, Falcon Consulting will notify and consult with the competent data protection authorities (and, where it processes the personal information on behalf of a Customer, the Customer) to address the Data Disclosure Request.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">3. {t('Handling of a Data Disclosure Request')}</h3>
            <p className="pera">
              3.1{' '}
              {t(
                'If a Falcon Consulting Group Member receives a Data Disclosure Request, the recipient of the request must pass it to Falcon Consulting’s Chief Privacy Officer and Privacy Team (collectively, the “Privacy Team”) immediately upon receipt, indicating the date on which it was received together with any other information that may assist the Privacy Team to respond to the request.'
              )}
              <br />
              3.2{' '}
              {t(
                'The Requesting Authority’s request does not have to be made in writing, made under a Court order, or mention data protection law to qualify as a Data Disclosure Request. Any Data Disclosure Request, however made, must be notified to the Privacy Team for review.'
              )}
              <br />
              3.3{' '}
              {t(
                'Falcon Consulting’s Privacy Team will carefully review each and every Data Disclosure Request on a case-by-case basis. The Privacy Team will liaise with the legal department and outside counsel as appropriate to deal with the request to determine the nature, context, purposes, scope and urgency of the Data Disclosure Request, and its validity under applicable laws, to identify whether action may be needed to challenge the Data Disclosure Request and/or to notify the Customer and/or competent data protection authorities in accordance with paragraph 4.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">4. {t('Notice of a Data Disclosure Request')}</h3>
            <h3 className="head">4.1 {t('Notice to the Customer')}</h3>
            <p className="pera">
              4.1.1{' '}
              {t(
                'If a request concerns personal information for which a Customer is the controller, Falcon Consulting will ordinarily ask the Requesting Authority to make the Data Disclosure Request directly to the relevant Customer. If the Requesting Authority agrees, Falcon Consulting will support the Customer in accordance with the terms of its contract to respond to the Data Disclosure Request.'
              )}
              <br />
              4.1.2{' '}
              {t(
                'If this is not possible (for example, because the Requesting Authority declines to make the Data Disclosure Request directly to the Customer, does not know the customer’s identity, or if Falcon Consulting is not permitted by law to disclose the Data Disclosure Request), Falcon Consulting will notify and provide the Customer with the details of the Data Disclosure Request prior to disclosing any personal information, unless legally prohibited from doing so or where an imminent risk of serious harm exists that prohibits prior notification.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">4.2 {t('Notice to the competent data protection authorities')}</h3>
            <p className="pera">
              4.2.1{' '}
              {t(
                'If the Requesting Authority is in a country that does not provide an adequate level of protection for the personal information in accordance with applicable data protection laws, then Falcon Consulting will also put the request on hold to notify and consult with the competent data protection authorities, unless legally prohibited or where an imminent risk of serious harm exists that prohibits prior notification.'
              )}
              <br />
              4.2.2{' '}
              {t(
                'Where Falcon Consulting is prohibited from notifying the competent data protection authorities and suspending the request, Falcon Consulting will use its best efforts (taking into account the nature, context, purposes, scope, and urgency of the request) to inform the Requesting Authority about its obligations under applicable data protection law and to obtain the right to waive this prohibition. Such efforts may include asking the Requesting Authority to put the request on hold, so that Falcon Consulting can consult with the competent data protection authorities, or to allow disclosure to specified personnel at Falcon Consulting’s customer, and may also, in appropriate circumstances, include seeking a court order to this effect. Falcon Consulting will maintain a written record of the efforts it takes.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">5. {t('Transparency reports')}</h3>
            <p className="pera">
              5.1{' '}
              {t(
                'Falcon Consulting commits to preparing a semi-annual report (a “Transparency Report”), which reflects the number and type of Data Disclosure Requests it has received for the preceding six months, as may be limited by applicable law or court order. Falcon Consulting shall publish the Transparency Report on its website, and make the report available upon request to competent data protection authorities.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">6. {t('Bulk transfers')}</h3>
            <p className="pera">
              6.1{' '}
              {t(
                'In no event will any Group Member transfer Personal Information to a Requesting Authority in a massive, disproportionate, and indiscriminate manner that goes beyond what is necessary in a democratic society.'
              )}
            </p>
          </Typography>
        </>
      )
    },
    {
      title: 'PRIVACY NOTICE',
      index: 6,
      body: (
        <>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('PRIVACY NOTICE')}</h3>
            <p className="pera">
              {t('Last updated June 04, 2022')}
              <br />
              {t(
                'This privacy notice for Falcon Consulting ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:'
              )}
              <br />
              {t(
                'Visit our website at https://www.falconconsulting.fr, or any website of ours that links to this privacy notice'
              )}
              <br />
              {t('Engage with us in other related ways, including any sales, marketing, or events')}
              <br />
              {t(
                'Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@falconconsulting.fr.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('SUMMARY OF KEY POINTS')}</h3>
            <p className="pera">
              <em>
                {t(
                  'This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.'
                )}
              </em>
              <br />
              {t(
                'What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Falcon Consulting and the Services, the choices you make, and the products and features you use.'
              )}
              <br />
              {t(
                'Do we process any sensitive personal information? We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.'
              )}
              <br />
              {t(
                'Do we receive any information from third parties? We do not receive any information from third parties.'
              )}
              <br />
              {t(
                'How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              {t('In what situations and with which parties do we share personal information?')}
            </h3>
            <p className="pera">
              {t(
                'We may share information in specific situations and with specific third parties.'
              )}
              <br />
              {t(
                'How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.'
              )}
              <br />
              {t(
                'What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.'
              )}
              <br />
              {t(
                'How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('TABLE OF CONTENTS')}</h3>
            <br />
            <ol>
              1. {t('WHAT INFORMATION DO WE COLLECT?')} <br />
              2. {t('HOW DO WE PROCESS YOUR INFORMATION?')} <br />
              3. {t('WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?')} <br />
              4. {t('WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?')} <br />
              5. {t('DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?')} <br />
              6. {t('HOW DO WE HANDLE YOUR SOCIAL LOGINS?')} <br />
              7. {t('HOW LONG DO WE KEEP YOUR INFORMATION?')} <br />
              8. {t('HOW DO WE KEEP YOUR INFORMATION SAFE?')} <br />
              9. {t('WHAT ARE YOUR PRIVACY RIGHTS?')} <br />
              10. {t('CONTROLS FOR DO-NOT-TRACK FEATURES')} <br />
              11. {t('DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?')} <br />
              12. {t('DO WE MAKE UPDATES TO THIS NOTICE?')} <br />
              13. {t('HOW CAN YOU CONTACT US ABOUT THIS NOTICE?')}
            </ol>
            <br />
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">1. {t('WHAT INFORMATION DO WE COLLECT?')}</h3>
            <p className="pera">
              {t('Personal information you disclose to us')}
              <br />
              <em>{t('In Short: We collect personal information that you provide to us.')}</em>
              <br />
              {t(
                'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.'
              )}
              <br />
              {t(
                'Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:'
              )}
              <br />
              {t('names')}
              <br />
              {t('phone numbers email addresses billing addresses')}
              <br />
              {t(
                'Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:'
              )}
              <br />
              {t('health data')}
              <br />
              {t('student data')}
              <br />
              {t(
                'Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.'
              )}
              <br />
              {t(
                'All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">2. {t('HOW DO WE PROCESS YOUR INFORMATION?')}</h3>
            <p className="pera">
              {t(
                'In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.'
              )}
              <br />
              {t(
                'We process your personal information for a variety of reasons, depending on how you interact with our Services, including:'
              )}
              <br />
              {t(
                "To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm."
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              3. {t('WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?')}
            </h3>
            <p className="pera">
              {t(
                'In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.'
              )}
              <br />
              <em>{t('If you are located in the EU or UK, this section applies to you.')}</em>
              <br />
              {t(
                'The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:'
              )}
              <br />
              {t(
                'Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.'
              )}
              <br />
              {t(
                'Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.'
              )}
              <br />
              {t(
                'Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.'
              )}
              <br />
              {t(
                "In legal terms, we are generally the 'data controller' under European data protection laws of the personal information described in this privacy notice, since we determine the means and/or purposes of the data processing we perform. This privacy notice does not apply to the personal information we process as a 'data processor' on behalf of our customers. In those situations, the customer that we provide services to and with whom we have entered into a data processing agreement is the 'data controller' responsible for your personal information, and we merely process your information on their behalf in accordance with your instructions. If you want to know more about our customers' privacy practices, you should read their privacy policies and direct any questions you have to them."
              )}
              <br />
              <em>{t('If you are located in Canada, this section applies to you.')}</em>
              <br />
              {t(
                'We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.'
              )}
              <br />
              {t(
                'In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:'
              )}
              <br />
              {t(
                'If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way'
              )}
              <br />
              {t('For investigations and fraud detection and prevention')}
              <br />
              {t('For business transactions provided certain conditions are met')}
              <br />
              {t(
                'If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim'
              )}
              <br />
              {t(
                'For identifying injured, ill, or deceased persons and communicating with next of kin'
              )}
              <br />
              {t(
                'If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse'
              )}
              <br />
              {t(
                'If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province'
              )}
              <br />
              {t(
                'If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records'
              )}
              <br />
              {t(
                'If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced'
              )}
              <br />
              {t('If the collection is solely for journalistic, artistic, or literary purposes')}
              <br />
              {t('If the information is publicly available and is specified by the regulations')}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              4. {t('WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?')}
            </h3>
            <p className="pera">
              <em>
                {t(
                  'In Short: We may share information in specific situations described in this section and/or with the following third parties.'
                )}
              </em>
              <br />
              {t('We may need to share your personal information in the following situations:')}
              <br />
              {t(
                'Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">5. {t('DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?')}</h3>
            <p className="pera">
              <em>
                {t(
                  'In Short: We may use cookies and other tracking technologies to collect and store your information.'
                )}
              </em>
              <br />
              {t(
                'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">6. {t('HOW DO WE HANDLE YOUR SOCIAL LOGINS?')}</h3>
            <p className="pera">
              <em>
                {t(
                  'In Short: If you choose to register or log in to our services using a social media account, we may have access to certain information about you.'
                )}
              </em>
              <br />
              {t(
                'Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.'
              )}
              <br />
              {t(
                'We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">7. {t('HOW LONG DO WE KEEP YOUR INFORMATION?')}</h3>
            <p className="pera">
              <em>
                {t(
                  'In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.'
                )}
              </em>
              <br />
              {t(
                'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 1 year.'
              )}
              <br />
              {t(
                'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">8. {t('HOW DO WE KEEP YOUR INFORMATION SAFE?')}</h3>
            <p className="pera">
              <em>
                {t(
                  'In Short: We aim to protect your personal information through a system of organizational and technical security measures.'
                )}
              </em>
              <br />
              {t(
                'We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">9. {t('WHAT ARE YOUR PRIVACY RIGHTS?')}</h3>
            <p className="pera">
              <em>
                {t(
                  'In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.'
                )}
              </em>
              <br />
              {t(
                "In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below."
              )}
              <br />
              {t(
                'We will consider and act upon any request in accordance with applicable data protection laws.'
              )}
              <br />
              {t(
                'If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.'
              )}
              <br />
              {t(
                'If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.'
              )}
              <br />
              {t(
                "Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below."
              )}
              <br />
              {t(
                'However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.'
              )}
              <br />
              {t(
                "Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'"
              )}
              <br />
              {t(
                'below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.'
              )}
              <br />
              {t(
                'Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">10. {t('CONTROLS FOR DO-NOT-TRACK FEATURES')}</h3>
            <p className="pera">
              {t(
                "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice."
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              11. {t('DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?')}
            </h3>
            <p className="pera">
              <em>
                {t(
                  'In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.'
                )}
              </em>
              <br />
              {t(
                "California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below."
              )}
              <br />
              {t(
                'If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('CCPA Privacy Notice')}</h3>
            <p className="pera">
              <em>{t("The California Code of Regulations defines a 'resident' as:")}</em>
              <br />
              {t(
                '(1) every individual who is in the State of California for other than a temporary or transitory purpose and (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose'
              )}
              <br />
              {t("All other individuals are defined as 'non-residents.'")}
              <br />
              {t(
                "If this definition of 'resident' applies to you, we must adhere to certain rights and obligations regarding your personal information."
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('What categories of personal information do we collect?')}</h3>
            <p className="pera">
              {t(
                'We have collected the following categories of personal information in the past twelve (12) months:'
              )}
              <li>
                {t(
                  'Personal information categories listed in the California Customer Records statute'
                )}
              </li>
              <li>{t('Internet or other similar network activity')}</li>
              <li>{t('Geolocation data')}</li>
              <li>{t('Professional or employment-related information')}</li>
              <li>{t('Education Information')}</li>
              {t(
                'We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:'
              )}
              <br />
              {t('Receiving help through our customer support channels;')} <br />
              {t('Participation in customer surveys or contests; and')} <br />
              {t('Facilitation in the delivery of our Services and to respond to your inquiries.')}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('How do we use and share your personal information?')}</h3>
            <p className="pera">
              {t(
                'More information about our data collection and sharing practices can be found in this privacy notice.'
              )}
              <br />
              {t(
                'You may contact us by email at contact@falconconsulting.fr, or by referring to the contact details at the bottom of this document.'
              )}
              <br />
              {t(
                'If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Will your information be shared with anyone else?')}</h3>
            <p className="pera">
              {t(
                'We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for profit entity that processes the information on our behalf.'
              )}
              <br />
              {t(
                "We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information."
              )}
              <br />
              {t(
                'Falcon Consulting has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Falcon Consulting will not sell personal information in the future belonging to website visitors, users, and other consumers.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">{t('Your rights with respect to your personal data')}</h3>
            <p className="pera">
              {t('Right to request deletion of the data — Request to delete')}
              <br />
              {t(
                'You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.'
              )}
              <br />
              {t('Right to be informed — Request to know')}
              <br />
              {t(
                'Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell your personal information to third parties;'
              )}
              <br />
              {t(
                'the categories of personal information that we sold or disclosed for a business purpose;'
              )}
              <br />
              {t(
                'the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and'
              )}
              <br />
              {t(
                'the business or commercial purpose for collecting or selling personal information.'
              )}
              <br />
              {t(
                'In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re- identify individual data to verify a consumer request.'
              )}
              <br />
              {t(
                'Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights We will not discriminate against you if you exercise your privacy rights. Verification process'
              )}
              <br />
              {t(
                'Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.'
              )}
              <br />
              {t(
                'We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.'
              )}
              <br />
              {t(
                'Other privacy rights You may object to the processing of your personal information.'
              )}
              <br />
              {t(
                'You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.'
              )}
              <br />
              {t(
                'You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.'
              )}
              <br />
              {t(
                'To exercise these rights, you can contact us by email at contact@falconconsulting.fr, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.'
              )}
              <br />
              <br />
              <h3 className="head">12. {t('DO WE MAKE UPDATES TO THIS NOTICE?')}</h3>
              {t(
                'In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.'
              )}
              <br />
              {t(
                "We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information."
              )}
              <br />
              <br />
              <h3 className="head">13. {t('HOW CAN YOU CONTACT US ABOUT THIS NOTICE?')}</h3>

              {t(
                'If you have questions or comments about this notice, you may email us at contact@falconconsulting.fr or by post to:'
              )}
              <br />
              {t('Falcon Consulting')}
              <br />
              {t('53 Avenue Victor Hugo Villeneuve-Le-Roi 94290 France')}
              <br />
              {t(
                "If you are a resident in the European Economic Area, the 'data controller' of your personal information is Falcon Consulting. Falcon Consulting has appointed Zain Asif to be its representative in the EEA. You can contact them directly regarding the processing of your information by Falcon Consulting, by email at zain.asif@falconconsulting.fr, by visiting falconconsulting.fr, or by post to:"
              )}
              <br />
              {t('53 Avenue Victor Hugo Villeneuve-Le-Roi 94290 France')}
            </p>
          </Typography>
        </>
      )
    },
    {
      title: 'Data Breach Policy',
      index: 7,
      body: (
        <>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('Overview')}</li>
            </h3>
            <p className="pera">
              {t(
                'Data breaches are increasingly common occurrences whether caused through human error or malicious intent. Falcon Consulting operations rely on the proper use of Confidential Information and Personally Identifiable Information (PII) on a daily basis. Managing risk and responding in an organized way to Incidents and Breaches is key to operations.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('Purpose')}</li>
            </h3>
            <p className="pera">
              {t(
                'Falcon Consulting must have a robust and systematic process for responding to reported data security Incidents and Breaches. This policy is designed to standardize the Falcon Consulting-wide response to any reported Breach or Incident, and ensure that they are appropriately logged and managed in accordance with best practice guidelines. Standardized processes and procedures help to ensure the Falcon Consulting can act responsibly, respond effectively, and protect its information assets to the extent possible.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('Scope')}</li>
            </h3>
            <p className="pera">{t('This policy applies to all Falcon Consulting staff.')}</p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('Policy')}</li>
            </h3>
            <li>{t('GENERAL INFORMATION')}</li>
            <p className="pera">
              {t(
                "A 'Data Security Incident' or “Incident’ shall mean an accidental or deliberate event that results in or constitutes an imminent threat of the unauthorized access, loss, disclosure, modification, disruption, or destruction of communication or information resources of the Falcon Consulting."
              )}
              <br />
              {t(
                'Common examples of data security Incidents include, but are not limited to, any of the following:'
              )}
              <li>
                {t(
                  'Successful attempts to gain unauthorized access to a Falcon Consulting system or regardless of where such information is located'
                )}
              </li>
              <li>{t('Unwanted disruption or denial of service')}</li>
              <li>
                {t(
                  'The unauthorized use of a Falcon Consulting system for the processing or storage of Confidential Information or PII'
                )}
              </li>
              <li>
                {t(
                  'Changes to Falcon Consulting system hardware, firmware, or software characteristics without the Falcon Consulting’s knowledge, instruction, or consent'
                )}
              </li>
              <li>
                {t('Loss or theft of equipment where Confidential Information or PII is stored')}
              </li>
              <li>
                {t(
                  'Unforeseen circumstances such as a fire or flood that could lead to the loss or misuse of Confidential Information or PII'
                )}
              </li>
              <li>
                {t(
                  'Human error involving the loss or mistaken transmission of Confidential Information or PII'
                )}
              </li>
              <li>
                {t(
                  'Hacking, social engineering, phishing or other subversive attacks where information is obtained by deceitful practice'
                )}
              </li>
              {t(
                "A 'Data Security Breach' or 'Breach' is any Incident where Falcon Consulting cannot put in place controls or take action to reasonably prevent the misuse of Confidential Information or PII. A Breach is also an Incident where data has been misused."
              )}
              <br />
              {t(
                'Adopting a standardized and consistent approach to Incident management shall ensure that:'
              )}
              <li>
                {t('Incidents are reported in a timely manner and can be properly investigated')}
              </li>
              <li>
                {t('Incidents are handled by appropriately authorized and skilled personnel')}
              </li>
              <li>{t('Appropriate levels of management are involved in response management')}</li>
              <li>{t('Incidents are recorded and documented')}</li>
              <li>
                {t(
                  'Organizational impacts are understood and action is taken to prevent further damage'
                )}
              </li>
              <li>
                {t(
                  'Evidence is gathered, recorded, and maintained in a form that will withstand internal and external scrutiny'
                )}
              </li>
              <li>{t('External agencies, customers, and data users are informed as required')}</li>
              <li>
                {t(
                  'Incidents are dealt with in a timely manner and normal operations are restored'
                )}
              </li>
              <li>
                {t('Incidents are reviewed to identify improvements in policies and procedures')}
              </li>
              {t(
                'Incidents can occur locally, in the cloud, or through third party service providers. Reporting and management of Incidents shall occur similarly. Third party providers shall also be governed by contract terms and liability as defined in their operational agreements.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('DATA CLASSIFICATIONS')}</li>
            </h3>
            <p className="pera">
              {t(
                'Incidents vary in impact and risk depending on a number of mitigating factors including the content and quantity of the data involved. It is critically important that Falcon Consulting management respond quickly and identify the data classification of the Incident. This allows staff to respond accordingly in a timely and thorough manner.'
              )}
              <br />
              {t(
                'All reported Incidents shall be classified as below in order to assess risk and approaches to mitigate the situation. Data classification shall refer to the following Falcon Consulting data categories:'
              )}
              <br />
              {t(
                'Public Data - Information intended for public and community use or information that can be made public without any negative impact on the Falcon Consulting or its customers. PII shall never be considered public data unless the data is Directory Information as defined by Falcon Consulting policy.'
              )}
              <br />
              {t(
                'Confidential/Internal Data - Information of a more sensitive nature to the business and educational operations of Falcon Consulting. This data represents basic intellectual capital, applications, and general knowledge. Access shall be limited to only those people that need to know as part of their role within the Falcon Consulting. Employee and Educator PII (with the exception of Social Security Numbers (SSN), financial information, or other critical information) falls within this classification.'
              )}
              <br />
              {t(
                'Highly Confidential Data- Information that, if breached, causes significant damage to Falcon Consulting operations, reputation, and/or business continuity. Access to this information should be highly restricted. PII falls into this category of data. Employee or Educator Financial Information, Social Security Numbers, and other critical information also fall into this classification.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('INCIDENT REPORTING')}</li>
            </h3>
            <p className="pera">
              {t(
                'The following process shall be followed when responding to a suspected Incident:'
              )}
              <li>
                {t(
                  'Confirmed or suspected Incidents shall be reported promptly to the Security manager. A formal report shall be filed that includes full and accurate details of the Incident including who is reporting the Incident and what classification of data is involved.'
                )}
              </li>
              <li>
                {t(
                  'Once an Incident is reported, the Security manager shall conduct an assessment to establish the severity of the Incident, next steps in response, and potential remedies and solutions. Based on this assessment, the Security manager shall determine if this Incident remains an Incident or if it needs to be categorized as a Breach.'
                )}
              </li>
              <li>
                {t(
                  'All Incidents and Breaches will be centrally logged and documented to ensure appropriate documentation, oversight, and consistency in response, management, and reporting.'
                )}
              </li>
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('CLASSIFICATION')}</li>
            </h3>
            <p className="pera">
              {t('Data Breaches or Incidents shall be classified as follows:')}
              <br />
              {t(
                'Critical/Major Breach or Incident – Incidents or Breaches in this category deal with Confidential Information or PII and are on a large scale (Falcon Consulting-wide). All Incidents or Breaches involving PII will be classified as Critical or Major. They typically have the following attributes:'
              )}
              <li>{t('Any Incident that has been determined to be a Breach')}</li>
              <li>
                {t(
                  'Significant Confidential Information or PII loss, potential for lack of business continuity, Falcon Consulting exposure, or irreversible consequences are imminent'
                )}
              </li>
              <li>{t('Negative media coverage is likely and exposure is high')}</li>
              <li>{t('Legal or contractual remedies may be required')}</li>
              <li>{t('Requires significant reporting beyond normal operating procedures')}</li>
              <li>
                {t(
                  'Any breach of contract that involves the misuse or unauthorized access to PII by a Contract Provider'
                )}
              </li>
              {t(
                'Moderately Critical/Serious Incident – Breaches or Incidents in this category typically deal with Confidential Information and are on a medium scale (e.g. 100 users on the internal network, application or database related, limited exposure). Incidents in this category typically have the following attributes:'
              )}
              <li>{t('Risk to the Falcon Consulting is moderate')}</li>
              <li>{t('Third party service provider and subcontractors may be involved')}</li>
              <li>
                {t(
                  'Data loss is possible but localized/compartmentalized, potential for limited business continuity losses, and minimized Falcon Consulting exposure'
                )}
              </li>
              <li>{t('Significant user inconvenience is likely')}</li>
              <li>{t('Service outages are likely while the breach is addressed')}</li>
              <li>{t('Negative media coverage is possible but exposure is limited')}</li>
              <li>{t('Disclosure of Educator or Employee PII is contained and manageable')}</li>
              {t(
                'Low Criticality/Minor Incident – Incidents in this category typically deal with personal or internal data and are on a small or individualized scale (e.g. 10 users on the internal network, personal or mobile device related). Incidents in this category typically have the following attributes:'
              )}
              <li>{t('Risk to the Falcon Consulting is low')}</li>
              <li>{t('User inconvenience is likely but not Falcon Consulting damaging')}</li>
              <li>
                {t(
                  'Internal data released but data is not student, employee, or confidential in nature'
                )}
              </li>
              <li>{t('Loss of data is totally contained on encrypted hardware')}</li>
              <li>{t('Incident can be addressed through normal support channels')}</li>
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('INCIDENT RESPONSE')}</li>
            </h3>
            <p className="pera">
              {t(
                'Management response to any reported Incident shall involve the following activities:'
              )}
              <br />
              {t(
                'Assess, Contain and Recover Data - All security Incidents shall have immediate analysis of the Incident and an Incident report completed by the Security manager or their designee. This analysis shall include a determination of whether this Incident should be characterized as a Breach. This analysis shall be documented and shared with the [Incident Appropriate Role], the affected parties, and any other relevant stakeholders. At a minimum, the Security manager shall:'
              )}
            </p>
            <table>
              <tr>
                <th>{t('Step')}</th>
                <th>{t('Action')}</th>
                <th>{t('Notes')}</th>
              </tr>
              <tr>
                <td>A</td>
                <td>{t('Containment and Recovery:')}</td>
                <td>
                  {t(
                    'Contain the breach, limit further organizational damage, seek to recover/restore data.'
                  )}
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>{t('Breach Determination')}</td>
                <td>{t('Determine if the Incident needs to be classified as a Breach.')}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  {t(
                    'Ascertain the severity of the Incident or Breach and determine the level of data involved.'
                  )}
                </td>
                <td>{t('See Incident Classification')}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {t(
                    'Investigate the Breach or Incident and forward a copy of the Incident report to the Security manager'
                  )}
                </td>
                <td>
                  {t(
                    'Ensure investigator has appropriate resources including sufficient time and authority. If PII or confidential data has been breached, also contact the Security manager. In the event that the Incident or Breach is severe, Falcon Consulting executive management, general counsel and the Security manager shall be contacted'
                  )}{' '}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  {t(
                    'Identify the cause of the Incident or breach and whether the situation has been contained. Ensure that any possibility of further data loss is removed or mitigated as far as possible. If this loss cannot be mitigated, any Incident will be characterized as a Breach.'
                  )}
                </td>
                <td>
                  {t(
                    'Compartmentalize and eliminate exposure. Establish what steps can or need to be taken to contain the threat from further data loss. Contact all relevant departments who may be able to assist in this process. This may involve actions such as taking systems offline or restricting access to systems to a very small number of staff until more is known about the Incident.'
                  )}
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  {t(
                    'Identify the cause of the Incident or breach and whether the situation has been Determine depth and breadth of losses and limit exposure/damages'
                  )}
                </td>
                <td>
                  {t(
                    'Can data be physically recovered if damaged through use of backups, restoration or other means?'
                  )}
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>{t('Notify authorities as appropriate')}</td>
                <td>
                  {t(
                    'For criminal activities where property was stolen or fraudulent activity occurred, contact the appropriate authorities and general counsel. Should the Breach involve PII that involves a Contract Provider, notify the Falcon Consulting Board members.'
                  )}
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  {t(
                    'Ensure all actions and decisions are logged and recorded as part of incident documentation and reporting.'
                  )}
                </td>
                <td>{t('Complete Incident Report and file with Security manager.')}</td>
              </tr>
            </table>
            <p className="pera">
              {t(
                'Assess Risk and Incident Scope – All Incidents or Breaches shall have a risk and scope analysis completed by the Security manager or their designee. This analysis shall be documented and shared with the Security manager, the affected parties, and any other relevant stakeholders. At a minimum, the Security manager shall:'
              )}
              <table>
                <tr>
                  <th>B</th>
                  <th>{t('Risk Assessment')}</th>
                  <th>
                    {t(
                      'Identify and assess ongoing risks that may be associated with the Incident or Breach.'
                    )}
                  </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>{t('Determine the type and breadth of the Incident or Breach')}</td>
                  <td>
                    {t('Classify Incident or Breach type, data compromised, and extent of breach')}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{t('Review data sensitivity')}</td>
                  <td>
                    {t(
                      'Determine the confidentiality, scope and extent of the Incident or Breach.'
                    )}{' '}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{t('Understand the current status of the compromised data')}</td>
                  <td>
                    {t(
                      'If data has been stolen, could it be used for purposes that harm the individuals whose identity has been compromised; If identity theft is involved, this poses a different type and level of risk.'
                    )}{' '}
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    {t(
                      'Document risk limiting processes or technology components that contain and manage the Incident'
                    )}
                  </td>
                  <td>{t('Does encryption of data/device help to limit risk of exposure?')} </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    {t(
                      'Determine what technologies or processes will mitigate the loss and restore service'
                    )}
                  </td>
                  <td>
                    {t(
                      'Are there backups of the compromised data? Can they be restored to a ready state?'
                    )}{' '}
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    {t(
                      'Identify and document the scope, number of users affected, and depth of Incident or Breach'
                    )}
                  </td>
                  <td>
                    {t('How many individuals’ personally identifiable information were affected?')}
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>{t('Define individuals and roles whose data was compromised')}</td>
                  <td>
                    {t(
                      'Identify all staff, districts, customers or vendors involved in the Incident or Breach'
                    )}
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    {t(
                      'If exploited, what will the compromised data tell a third party about the individual? Could it be misused?'
                    )}
                  </td>
                  <td>
                    {t(
                      'Confidential Information or PII could mean very little to an opportunistic laptop thief while the loss of apparently trivial snippets of information could help a criminal build up a detailed picture associated with identity theft or fraud.'
                    )}
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    {t('Determine actual or potential harm that could come to any individuals')}
                  </td>
                  <td>
                    {t('Identify risks to individuals:')}
                    <li>{t('Physical Safety')}</li>
                    <li>{t('Emotional Wellbeing')}</li>
                    <li>{t('Personal or Business Reputation')}</li>
                    <li>{t('Financial Implications')}</li>
                    <li>{t('Identity Concerns')}</li>
                    {t('A combination of these and other private aspects of their life?')}
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>{t('Are there wider consequences to consider?')}</td>
                  <td>
                    {t('Is there risk to another LEP, the state, or loss of public confidence?')}
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    {t(
                      'Are there others who might provide support or advise on risks/courses of action?'
                    )}
                  </td>
                  <td>
                    {t(
                      'Contact all local education providers, agencies, or companies impacted by the breached data, notify them about the Incident, and ask for assistance in limiting the scope of the Incident.'
                    )}
                  </td>
                </tr>
              </table>
              <br />
              {t(
                'Notification and Incident Communications - Each security Incident or Breach determined to be “moderately critical” or “critical” shall have communication plans documented by the security senior leadership, and their designees to appropriately manage the Incident and communicate progress on its resolution to all effected stakeholders. At a minimum, the Security manager shall:'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <table>
              <tr>
                <th>C</th>
                <th>{t('Notification and Communications')}</th>
                <th>
                  {t(
                    'Notification enables affected stakeholders to take precautionary steps and allow regulatory bodies to act on the Incident or Breach.'
                  )}
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  {t(
                    'Are there legal, contractual or regulatory notification requirements associated  with the Incident or Breach?'
                  )}
                </td>
                <td>
                  {t(
                    'Review vendor contracts and compliance terms, assure state and federal reporting and notifications are understood. Contact Legal as necessary to begin contractual adherence. Should the Breach include PII, initiate the Falcon Consulting Board hearing process.'
                  )}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>{t('Notify impacted individuals of Incident or Breach remedies.')}</td>
                <td>
                  {t(
                    'Provide individuals involved in the Incident or Breach with mitigation strategies to re-secure data (e.g. change user id and/or passwords etc.)'
                  )}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>{t('Determine Internal Communication Plans')}</td>
                <td>
                  {t(
                    'Work with senior leadership and provide regular internal updates on status of Incident or Breach, remedies underway, and current exposure and containment strategies. This messaging should be provided to all internal state stakeholders and management. Messaging shall be coordinated through the Security office.'
                  )}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>{t('Determine Public Messaging')}</td>
                <td>
                  {t(
                    'Prepare and execute a communication and follow-up plan with Security manager and senior leadership. Communication strategies need to define audience(s), frequency, messaging, and content.'
                  )}
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>{t('Execute Messaging Plan')}</td>
                <td>
                  {t(
                    'Working through the Security manager and appropriate leadership, execute the public and internal communication plans. Depending on the nature and scope of the Incident or Breach, multiple messages may need to be delivered as well as press and public communiques. Minimally notifications should include:'
                  )}
                  <li>{t('A description of the Incident or Breach (how and when it occurred)')}</li>
                  <li>{t('What data was involved and whose data was compromised')}</li>
                  <li>
                    {t(
                      'Details of what has been done to respond to the Incident or Breach and any associated risks posed'
                    )}
                  </li>
                  <li>{t('Next-steps for stakeholders')}</li>
                  <li>
                    {t(
                      'Falcon Consulting contacts for the Incident or Breach, any follow-, and other pertinent information'
                    )}
                  </li>
                  <li>
                    {t(
                      'When notifying individuals, provide specific and clear advice on the steps they can take to protect themselves and what the Falcon Consulting and/or third party vendor will do to help minimize their exposure'
                    )}
                  </li>
                  <li>
                    {t(
                      'Provide a way in which they can contact Falcon Consulting for further information or to ask questions about what has occurred (e.g. a contact name, helpline number or a web page)'
                    )}
                  </li>
                </td>
              </tr>
            </table>
            <br />
            <p className="pera">
              {t(
                "Post Mortem Evaluation and Response – Each Incident or Breach determined to be 'moderately critical' or 'critical' shall have a post mortem analysis completed by the Security manager and their designees to appropriately document, analyze, and make recommendations on ways to limit risk and exposure in the future. At a minimum, the Security manager shall:"
              )}
            </p>
            <br />
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <table>
              <tr>
                <th>D</th>
                <th>{t('Evaluation and Response')}</th>
                <th>
                  {t(
                    'To evaluate the effectiveness of the University’s response to the Incident or Breach.'
                  )}
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>{t('Establish where any present or future risks lie.')}</td>
                <td>
                  {t(
                    'Assess and evaluate the root causes of the Incident or Breach and any ways to mitigate and/or prevent a similar occurrence.'
                  )}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>{t('Consider the data and security measures employed.')}</td>
                <td>
                  {t(
                    'Evaluate, analyze, and document the use cases and technical components of the Incident or Breach. Document areas for improvement in environment, technology, or approach that limit future security exposures. Make recommendations as appropriate.'
                  )}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {t(
                    'Evaluate and identify areas of weakness in existing security measures and procedures.'
                  )}
                </td>
                <td>
                  {t(
                    'Document lapses in process, procedure, or policy that may have caused the Incident or Breach. Analyze and document solutions and remedies to reduce future risks.'
                  )}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>{t('Evaluate and identify areas of weakness related to employee skills.')}</td>
                <td>
                  {t(
                    'Assess employee readiness, education, and training. Document and plan for updates in education or procedural changes to eliminate potential for future Incidents.'
                  )}
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>{t('Report on findings and implement recommendations.')}</td>
                <td>
                  {t(
                    'Prepare report and presentation to Falcon Consulting for major Incidents or Breaches.'
                  )}
                </td>
              </tr>
            </table>
            <p className="pera">
              {t(
                'Each of these four elements shall be conducted as appropriate for all qualifying Incidents or Breaches. An activity log recording the timeline of Incident management shall also be completed. Reporting and documentation shall be filed and managed through the office of the Security Manager.'
              )}
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('Audit Controls and Management')}</li>
            </h3>
            <p className="pera">
              {t(
                'On-demand documented procedures and evidence of practice should be in place for this operational policy. Appropriate audit controls and management practice examples are as follows:'
              )}
              <li>
                {t(
                  'Archival completed Incident Reports demonstrating compliance with reporting, communication and follow-through.'
                )}
              </li>
              <li>{t('Executed communication plans for Incident management.')}</li>
              <li>
                {t(
                  'Evidence of cross-departmental communication throughout the analysis, response and post-mortem processes.'
                )}
              </li>
            </p>
          </Typography>
          <br />
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('Enforcement')} </li>
            </h3>
            <p className="pera">
              {t(
                'Staff members found in policy violation may be subject to disciplinary action, up to and including termination.'
              )}
            </p>
          </Typography>
          <Typography className="LegalMentions_Data_P">
            <h3 className="head">
              <li>{t('Distribution')} </li>
            </h3>
            <p className="pera">
              {t('This policy is to be distributed to all Falcon Consulting staff.')}
            </p>
          </Typography>
        </>
      )
    }
  ];
  return data;
};
