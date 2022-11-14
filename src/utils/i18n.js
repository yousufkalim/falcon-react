import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ["fr", "en"],
    // we init with resources
    resources: {
      en: {
        translations: {
          // title
          'FalconIT : Expert Software Engineers': 'FalconIT : Expert Software Engineers',
          //Home
          // Home_Header
          'WE PROVIDE GREAT SERVICES AT THE BEST PRICE.':
            'WE PROVIDE GREAT SERVICES AT THE BEST PRICE.',

          'Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners. ':
            'Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners. ',
          'GET A FREE QUOTE': 'GET A FREE QUOTE',

          //   service Provided section
          'We can extend your technical teams with our technical resources according to your needs.':
            'We can extend your technical teams with our technical resources according to your needs.',
          'Our Data teams will make your data an asset and a strength for your company.':
            'Our Data teams will make your data an asset and a strength for your company.',
          'Our teams of designers are at your disposal to make your ideas shine and illustrate your projects with high-quality models.':
            'Our teams of designers are at your disposal to make your ideas shine and illustrate your projects with high-quality models.',
          'Our teams of software engineers have the expertise to develop successful software adapted to the various trades.':
            'Our teams of software engineers have the expertise to develop successful software adapted to the various trades.',
          'Our web teams are always at the forefront of technology for both the front end and the back end.':
            'Our web teams are always at the forefront of technology for both the front end and the back end.',
          'Our technical teams specialized in mobile development can develop hybrid or native applications to adapt your projects to customer needs.':
            'Our technical teams specialized in mobile development can develop hybrid or native applications to adapt your projects to customer needs.',
          'Our aim provide better service': 'Our aim provide better service',
          'We are a multi-talented web development company.':
            'We are a multi-talented web development company.',
          'Mobile applications are now essential and allow you.':
            'Mobile applications are now essential and allow you.',
          'EXCEED YOUR EXPECTATION': 'EXCEED YOUR EXPECTATION',
          'Services We Provide': 'Services We Provide',
          'MOBILE DEVELOPMENT': 'MOBILE DEVELOPMENT',
          'WEB DEVELOPERS': 'WEB DEVELOPERS',
          'SOFTWARE DEVELOPERS': 'SOFTWARE DEVELOPERS',
          'UI/UX DEVELOPMENT': 'UI/UX DEVELOPMENT',
          'Data Engineering': 'Data Engineering',
          'ON-DEMAND DEVELOPERS': 'ON-DEMAND DEVELOPERS',

          'Mobile Application Development': 'Mobile Application Development',
          'Website Development': 'Website Development',
          'Software Development': 'Software Development',
          'On Demand Developers': 'On Demand Developers',
          'UI/UX Development': 'UI/UX Development',
          'Get Details': 'Get Details',
          'GO TO THE PROJECT': 'GO TO THE PROJECT',
          'COLOR THEME & ILLUSTRATION': 'COLOR THEME & ILLUSTRATION',
          'MOBILE APP DEVELOPMENT': 'MOBILE APP DEVELOPMENT',
          'APP UI DESIGN': 'APP UI DESIGN',
          'COLOR THEME': 'COLOR THEME',
          'UI DESIGN': 'UI DESIGN',
          'COLOR THEME AND DESIGN': 'COLOR THEME AND DESIGN',
          //   latest projects section
          'EACH PROJECT IS A NEW CHALLENGE': 'EACH PROJECT IS A NEW CHALLENGE',
          'Clients Satisfied': 'Clients Satisfied',

          'Latest Projects': 'Latest Projects',
          'Years of Excellence': 'Years of Excellence',
          'Project Completed': 'Project Completed',
          'Customer Satisfied': 'Customer Satisfied',
          'We Use our own and third-party cookies to personalize content and to analyze web traffic.':
            'We Use our own and third-party cookies to personalize content and to analyze web traffic.',
          'Read more about cookies': 'Read more about cookies',
          Agree: 'Agree',
          Decline: 'Decline',
          'View More': 'View More',
          //web and app detail sction
          'There are countless variations when it comes to different websites that can be incorporated into the design of a website. In general, the Falcon IT workflow define below. Web designers at Falcon IT often work with design software like Figma or AdobeXD etc. to create visually appealing user experiences. The team makes wireframes, mockups, design systems, color palettes, templates, and more to help developers build the product, and after UI /UX finalizing, the back-end developers focus on the infrastructure of a site or web application (hosting, security, etc), and our front-end developers focus on the functionality of the site/app. While the team of full-stack developers is working on both the front-end and back-end. The SQA team monitors all activities side by side to deliver the best to our clients.':
            'There are countless variations when it comes to different websites that can be incorporated into the design of a website. In general, the Falcon IT workflow define below. Web designers at Falcon IT often work with design software like Figma or AdobeXD etc. to create visually appealing user experiences. The team makes wireframes, mockups, design systems, color palettes, templates, and more to help developers build the product, and after UI /UX finalizing, the back-end developers focus on the infrastructure of a site or web application (hosting, security, etc), and our front-end developers focus on the functionality of the site/app. While the team of full-stack developers is working on both the front-end and back-end. The SQA team monitors all activities side by side to deliver the best to our clients.',
          'Falcon’s app development process is divided into different servers to assure the quality of the App. After UI/ UX phase, different servers collaborate to complete the process. Development Server will be used by developers only for development purposes. QA Server Only used by the SQA team. Nothing will be updated on the QA server without QA approval. All the testing will be performed on this server. The Staging Server is also known as the Client’s server. So, this server will be accessible to the client. The client will perform User Acceptance Testing on this server. Nothing will be updated on the Staging server without QA/CEO approval. When your project passed the QA server then the project will deploy on the staging server. Finally, the project is going live. Nothing should be uploaded on a live server without QA/Client/CEO approval. The project which is going live must be on the staging server previously.':
            'Falcon’s app development process is divided into different servers to assure the quality of the App. After UI/ UX phase, different servers collaborate to complete the process. Development Server will be used by developers only for development purposes. QA Server Only used by the SQA team. Nothing will be updated on the QA server without QA approval. All the testing will be performed on this server. The Staging Server is also known as the Client’s server. So, this server will be accessible to the client. The client will perform User Acceptance Testing on this server. Nothing will be updated on the Staging server without QA/CEO approval. When your project passed the QA server then the project will deploy on the staging server. Finally, the project is going live. Nothing should be uploaded on a live server without QA/Client/CEO approval. The project which is going live must be on the staging server previously.',
          //   aboutus Section
          'your work is our priority': 'your work is our priority',
          'Why choose Falcon Consulting?': 'Why choose Falcon Consulting?',
          'Years of Experience': 'Years of Experience',
          'Number of Employees': 'Number of Employees',
          'Successfull Projects': 'Successfull Projects',
          'Number of Offices': 'Number of Offices',
          'External Tools Built': 'External Tools Built',
          'Improvement and Customer focused': 'Improvement and Customer focused',
          'We believe that talent and skills do not have borders':
            'We believe that talent and skills do not have borders',

          'We are a human-oriented company, investing in training healthy atmosphere and cooperative management to make sure our employees reach their full potential, and personally develop through their work. Our team is sensitized every day about the importance of quality management, and we strive to put in place a continuous improvement process internally':
            'We are a human-oriented company, investing in training healthy atmosphere and cooperative management to make sure our employees reach their full potential, and personally develop through their work. Our team is sensitized every day about the importance of quality management, and we strive to put in place a continuous improvement process internally',
          'READ MORE': 'READ MORE',
          'More About Our Company': 'More About Our Company',
          //   partners section
          'SINCERELY YOURS': 'SINCERELY YOURS',
          'Some Amazing Partners We Work With': 'Some Amazing Partners We Work With',

          // review section
          'your feedback matters': 'your feedback matters',
          'Client Reviews': 'Client Reviews',
          'We were looking for a team who could take on our project and finish the job, Falcon IT Consulting Completed all work as asked. Gladly I found them':
            'We were looking for a team who could take on our project and finish the job, Falcon IT Consulting Completed all work as asked. Gladly I found them',
          'Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure':
            'Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure',
          'They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!':
            'They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!',
          'We had a problem with our AWS configuration and suddenly all our apps and websites shut down. We were in a panic and Falcon IT Consulting came to our rescue. They did a terrific job and quickly got our apps and websites up and running again. Their team is clear in communications and very responsive. We really enjoyed working with them':
            'We had a problem with our AWS configuration and suddenly all our apps and websites shut down. We were in a panic and Falcon IT Consulting came to our rescue. They did a terrific job and quickly got our apps and websites up and running again. Their team is clear in communications and very responsive. We really enjoyed working with them',
          'Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you':
            'Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you',
          'Mobile application for EdTech': 'Mobile application for EdTech',
          'Amazon API Gateway Migration': 'Amazon API Gateway Migration',
          'Mobile application for Parental Control': 'Mobile application for Parental Control',
          'Amazon Web Services Server Configurations': 'Amazon Web Services Server Configurations',
          'Web application Development for Travel Agency':
            'Web application Development for Travel Agency',
          //   blog section
          'Managing a Remote Team': 'Managing a Remote Team',
          'Why having a business website is necessary ?':
            'Why having a business website is necessary ?',

          'Published on': 'Published on',
          'In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles.':
            'In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles.',
          'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.':
            'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.',
          'With lots of unique blogs': 'With lots of unique blogs',
          'Read our blog': 'Read our blog',
          'A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021':
            'A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021',
          'What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?':
            'What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?',
          'June 13th 2022': 'June 13th 2022',
          // Our Clients
          'Our Clients': 'Our Clients',
          'Application Web conçue pour aider les clients souhaitant des coutures personnalisées àrec...':
            'Web application designed to help customers wanting custom stitching rec...',

          // contact us
          // Validation Messages
          'Name is required': 'Name is required',
          'Name is too short (minimum is 3 characters)':
            'Name is too short (minimum is 3 characters)',
          'Phone is required': 'Phone is required',
          'Phone number must be atleast 10 digits long':
            'Phone number must be atleast 10 digits long',
          'Company is required': 'Company is required',
          'Email is required': 'Email is required',
          'Email must be in this format (name@domain.com)':
            'Email must be in this format (name@domain.com)',
          'Message is required': 'Message is required',
          // 'Name is required': 'Name is required',
          //labels
          'My name is': 'My name is',
          'My phone number is': 'My phone number is',
          'I work at': 'I work at',
          'Reach me at': 'Reach me at',
          Message: 'Message',
          //placeholders
          'Your name': 'Your name',
          'Your phone number': 'Your phone number',
          'Your company': 'Your company',
          'name@email.com': 'name@email.com',
          'Start typing here...': 'Start typing here...',
          //
          or: 'or',
          'Thank you': 'Thank you',
          'Your message has been sent successfully. Our Team Member will get back to you within 24 hours.':
            'Your message has been sent successfully. Our Team Member will get back to you within 24 hours.',
          Submit: 'Submit',
          // background Text
          Share: 'Share',
          Your: 'Your',
          Project: 'Project',
          Idea: 'Idea',
          with: 'with',
          'us!': 'us!',
          //
          'Submit another': 'Submit another',
          'Contact Us': 'Contact Us',
          'Share Your Project/Idea with us!': 'Share Your Project/Idea with us!',
          'Our Team Member will get back to you within 24 hours.':
            'Our Team Member will get back to you within 24 hours.',

          'Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours.':
            'Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours.',
          'Schedule Meeting': 'Schedule Meeting',
          Email: 'Email',
          'Your Name': 'Your Name',
          Phone: 'Phone',
          Budget: 'Budget',
          'Type Your Message': 'Type Your Message',
          Send: 'Send',
          'Click and join link': 'Click and join link',
          'Thank you, the information has been submitted successfully. We will come back to you shortly.':
            'Thank you, the information has been submitted successfully. We will come back to you shortly.',
          "Name can't be blank": "Name can't be blank",
          'The name must be at least 2 characters': 'The name must be at least 2 characters',
          "Email can't be blank": "Email can't be blank",
          'Not a Valid Email': 'Not a Valid Email',
          "Phone can't be blank": "Phone can't be blank",
          'Phone number should start with 0': 'Phone number should start with 0',
          'The phone must be at least 10 characters': 'The phone must be at least 10 characters',
          "Budget can't be blank": "Budget can't be blank",
          "Message can't be blank": "Message can't be blank",
          // validation changed
          'Please Enter Your Name': 'Please Enter Your Name',
          'Please Enter Your Email': 'Please Enter Your Email',
          'Please Enter Your Phone Number': 'Please Enter Your Phone Number',
          'Please Enter Your Budget': 'Please Enter Your Budget',
          'Please Enter A Message': 'Please Enter A Message',
          'Please Enter a Valid Email': 'Please Enter a Valid Email',
          //   footer
          Overview: 'Overview',
          Solutions: 'Solutions',
          'WHERE YOU CAN MEET': 'WHERE YOU CAN MEET',
          'Our Offices': 'Our Offices',
          'The services are provided at a flat rate, or according to a determined daily rate, based on your preference. In both cases, we guarantee you a quality service at a very competitive price.':
            'The services are provided at a flat rate, or according to a determined daily rate, based on your preference. In both cases, we guarantee you a quality service at a very competitive price.',
          Pages: 'Pages',
          About: 'About',
          Services: 'Services',
          'Our projects': 'Our projects',
          'Our Projects': 'Our Projects',
          Projects: 'Projects',

          Contact: 'Contact',
          Privacy: 'Privacy',
          'Terms of Service': 'Terms of Service',
          Cookies: 'Cookies',
          'All Rights Reserved': 'All Rights Reserved',
          'Web Development': 'Web Development',
          'App Development': 'App Development',
          'Software Development': 'Software Development',
          'UI/UX Developmemt': 'UI/UX Developmemt',
          'CLIENT FEEDBACK': 'CLIENT FEEDBACK',
          'Privacy Policy': 'Privacy Policy',

          //   About US
          //   About_Heaader
          'Our Goal Is To Exceed Your Expectations ': 'Our Goal Is To Exceed Your Expectations ',
          'Healthy, skilled and ambitious team': 'Healthy, skilled and ambitious team',
          'Trustful, skilled and ambitious team of developers, UI/UX designers, project managers and quality testers. Our aim is to build healthy partnerships with our clients, in which respect is the central value. Our main difference with other software houses is that we are committed to delivering the last mile, without any compromise.':
            'Trustful, skilled and ambitious team of developers, UI/UX designers, project managers and quality testers. Our aim is to build healthy partnerships with our clients, in which respect is the central value. Our main difference with other software houses is that we are committed to delivering the last mile, without any compromise.',

          //   About comapny Section
          'BEST company': 'BEST company',
          'About Falcon Consulting': 'About Falcon Consulting',
          'Falcon Consulting is a development agency that specializes in web application development and consultancy in the field of new technologies. We combine rigor, quality of work and optimized production costs. Founded in 2015, Falcon Consulting started out as a consulting company which worked with large companies such as Microsoft, Canon and Accor. In 2017, Falcon Consulting took off and became a development agency, bringing together over 10 years of experience in application development and project management in its team. Established in France, United States and Pakistan, the company is providing development services worldwide.':
            'Falcon Consulting is a development agency that specializes in web application development and consultancy in the field of new technologies. We combine rigor, quality of work and optimized production costs. Founded in 2015, Falcon Consulting started out as a consulting company which worked with large companies such as Microsoft, Canon and Accor. In 2017, Falcon Consulting took off and became a development agency, bringing together over 10 years of experience in application development and project management in its team. Established in France, United States and Pakistan, the company is providing development services worldwide.',

          // Modern Agency Section
          'We Are A Modern IT Agency': 'We Are A Modern IT Agency',
          'Accessible price, with no compromise on the Quality!':
            'Accessible price, with no compromise on the Quality!',
          'Office Locations': 'Office Locations',

          'Years of Excellence': 'Years of Excellence',
          'Successfull Projects': 'Successfull Projects',
          'Client satisfication': 'Client satisfication',

          // our vision section
          'HEALTHY RELATIONSHIPS​': 'HEALTHY RELATIONSHIPS​',
          'Our Vision': 'Our Vision',
          'We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work.':
            'We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work.',
          'IN-HOUSE TEAM': 'IN-HOUSE TEAM',
          TECHNOLOGIES: 'TECHNOLOGIES',
          'USER-FOCUSED PROCESS': 'USER-FOCUSED PROCESS',
          'SMOOTH COMMUNICATION': 'SMOOTH COMMUNICATION',
          "8 YEARS' EXPERIENCE": "8 YEARS' EXPERIENCE",
          'FULL FLEXIBILITY': 'FULL FLEXIBILITY',
          'HIGH QUALITY CODE': 'HIGH QUALITY CODE',
          TRANSPARENCY: 'TRANSPARENCY',

          //   Blogs
          // Blog_Header
          'FALCON BLOG': 'FALCON BLOG',
          'Always looking into improving ourselves.': 'Always looking into improving ourselves.',
          'The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects.':
            'The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects.',
          'Your Email': 'Your Email',
          SUBSCRIBE: 'SUBSCRIBE',

          //   Our Projects
          // Projects_Header
          'Falcon Consulting had the opportunity to work on various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time.':
            'Falcon Consulting had the opportunity to work on various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time.',
          'ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!':
            'ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!',
          'ALL PROJECTS START BY A SIMPLE IDEA, LET US TAKE CARE OF THE REST!':
            'ALL PROJECTS START BY A SIMPLE IDEA, LET US TAKE CARE OF THE REST!',
          'Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. ':
            'Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. ',
          'Software house with a team of experienced developers and project managers':
            'Software house with a team of experienced developers and project managers',
          Software: 'Software',
          SOFTWARE: 'SOFTWARE',
          Website: 'Website',
          WEBSITE: 'WEBSITE',
          All: 'All',
          ALL: 'ALL',
          'Mobile Application': 'Mobile Application',
          'MOBILE APPLICATION': 'MOBILE APPLICATION',
          'UI/UX': 'UI/UX',
          'Data & Cloud': 'Data & Cloud',
          View: 'View',
          VIEW: 'VIEW',
          Construction: 'Construction',
          Education: 'Education',
          'Human Resources': 'Human Resources',
          Health: 'Health',
          Gaming: 'Gaming',
          Transport: 'Transport',
          Business: 'Business',
          Fashion: 'Fashion',
          Food: 'Food',
          Advertisement: 'Advertisement',

          'What is ': 'What is ',
          'See more': 'See more',
          'Case Study': 'Case Study',

          //   Services
          // Services_Header
          'Skilled Developers for your Projects': 'Skilled Developers for your Projects',
          'We are ready to handle your ambitious projects!':
            'We are ready to handle your ambitious projects!',

          'Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !':
            'Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !',
          'More information': 'More information',
          'Get This Service': 'Get This Service',

          // key Features Section
          'Key features': 'Key features',
          'This sounds simple, but it is beneficial to your business success.':
            'This sounds simple, but it is beneficial to your business success.',
          // "SMOOTH COMMUNICATION": "SMOOTH COMMUNICATION",
          TECHNOLOGIES: 'TECHNOLOGIES',
          'In-House Team': 'In-House Team',
          'Product Development': 'Product Development',
          'PRODUCT DEVELOPMENT': 'PRODUCT DEVELOPMENT',

          'FULL FLEXIBILITY': 'FULL FLEXIBILITY',
          'USER-FOCUSED PROCESS': 'USER-FOCUSED PROCESS',
          'Ux research': 'Ux research',
          'Many of these business ideas are home-based. While they may not make you a billionaire.':
            'Many of these business ideas are home-based. While they may not make you a billionaire.',

          // work Process Section
          "We solve clients' projects in a simple & efficient way":
            "We solve clients' projects in a simple & efficient way",
          'We always follow the standard work process':
            'We always follow the standard work process',

          'Project Requirement': 'Project Requirement',
          Designing: 'Designing',
          Development: 'Development',
          'Live Testing': 'Live Testing',
          'We do research and validate the specs before we start any projects':
            'We do research and validate the specs before we start any projects',
          "Designed according to client's requirements":
            "Designed according to client's requirements",
          'Developed by skilled team developers': 'Developed by skilled team developers',
          'After completing the work, live test is done':
            'After completing the work, live test is done',

          UX: 'UX',
          Wireframing: 'Wireframing',
          'UI Design': 'UI Design',
          'Design Review': 'Design Review',
          'Then Wireframing according to requirements':
            'Then Wireframing according to requirements',
          'We do ux research before we start any projects':
            'We do ux research before we start any projects',

          // Our Deveopers Section
          'OUR DEVELOPERS ARE': 'OUR DEVELOPERS ARE',
          'OUR DEVELOPERS FOR YOUR PROJECTS': 'OUR DEVELOPERS FOR YOUR PROJECTS',
          Agile: 'Agile',
          Experienced: 'Experienced',
          Trained: 'Trained',
          'Dedicated to your projects': 'Dedicated to your projects',
          'We train them in agile management methods so that our partners can take full advantage of them':
            'We train them in agile management methods so that our partners can take full advantage of them',
          'We are Flexible in the search for the ideal  profile and we can can offer you very experienced profiles':
            'We are Flexible in the search for the ideal  profile and we can can offer you very experienced profiles',
          'We train our developers ourselves by positioning them on internet internet project in order to ensure that we transmit to them the “soft skills” as well as the hard skills':
            'We train our developers ourselves by positioning them on internet internet project in order to ensure that we transmit to them the “soft skills” as well as the hard skills',
          'Our developers work full-time on your projects and our collaborative tools guarantee Transparency regarding the progress of task':
            'Our developers work full-time on your projects and our collaborative tools guarantee Transparency regarding the progress of task',

          // developer work process
          "We solve clients' projects in a simple & efficient way":
            "We solve clients' projects in a simple & efficient way",
          'We always follow the standard work process':
            'We always follow the standard work process',

          'You need developer': 'You need developer',
          "We organize a meeting in order to better understand your needs, as well as the ideal profile sought for your project. If your needs change during this process, don't panic: we take into account any last minute changes!":
            "We organize a meeting in order to better understand your needs, as well as the ideal profile sought for your project. If your needs change during this process, don't panic: we take into account any last minute changes!",
          'Targeting the ideal profile': 'Targeting the ideal profile',
          "For this step, it's up to us! Our HR team searches among a rich and talented pool of developers for the best profiles to offer. We organize HR and technical interviews with these developers, in order to pre-select the best candidates.":
            "For this step, it's up to us! Our HR team searches among a rich and talented pool of developers for the best profiles to offer. We organize HR and technical interviews with these developers, in order to pre-select the best candidates.",
          'Proposal from developers': 'Proposal from developers',
          'We send you the profile of the pre-selected developers. You can then decide to carry out interviews with them, in order to confirm your choice. When you decide to do an interview with a developer, there is no commitment that binds you: keep your mind free!':
            'We send you the profile of the pre-selected developers. You can then decide to carry out interviews with them, in order to confirm your choice. When you decide to do an interview with a developer, there is no commitment that binds you: keep your mind free!',
          Recruitment: 'Recruitment',
          'Have you found your ideal profile? Congratulation ! We conclude the contract, which is without long-term commitment, so that you retain all your flexibility. The developer works directly on your projects, without going through us.':
            'Have you found your ideal profile? Congratulation ! We conclude the contract, which is without long-term commitment, so that you retain all your flexibility. The developer works directly on your projects, without going through us.',
          'Continuous improvement': 'Continuous improvement',
          'We organize at a determined frequency points on our collaboration. The principle is to ensure that the collaboration is optimal, and to target the best potential points of improvement. Once identified, we offer, at our expense, adequate training for our developers in order to constantly increase the quality of the collaboration.':
            'We organize at a determined frequency points on our collaboration. The principle is to ensure that the collaboration is optimal, and to target the best potential points of improvement. Once identified, we offer, at our expense, adequate training for our developers in order to constantly increase the quality of the collaboration.',

          // Project Details Basic Modal
          // Tilt

          'Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.':
            'Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.',
          'The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.':
            'The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.',
          'On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.':
            'On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.',
          'On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. ':
            'On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. ',
          'The client was happy with the work done, and he specially liked that as a non expert in IT, he told us what he wanted to achieve, and we always found the most efficient solution. Not only developers by experts, advising him on the best ways to build this platform':
            'The client was happy with the work done, and he specially liked that as a non expert in IT, he told us what he wanted to achieve, and we always found the most efficient solution. Not only developers by experts, advising him on the best ways to build this platform',
          'Web and mobile platform connecting restaurants, corporate customers, and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. The customers can order food with an ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.On the restaurant side, it is possible to create and manage a customized menu,see all the incoming orders, and change their status.On the delivery side, the application of the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications.':
            'Web and mobile platform connecting restaurants, corporate customers, and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. The customers can order food with an ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.On the restaurant side, it is possible to create and manage a customized menu,see all the incoming orders, and change their status.On the delivery side, the application of the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications.',
          'Tilt is a French-based platform connecting restaurants with corporate customers. Its front end is developed on React and its back end is on Node JS and the project was completed in 6 months from January 2020 to May 2021':
            'Tilt is a French-based platform connecting restaurants with corporate customers. Its front end is developed on React and its back end is on Node JS and the project was completed in 6 months from January 2020 to May 2021',
          'Falcon IT excels at turning your website dreams into reality. We are so proud of the work they have done for us that we have already recommended them to many of Our partners and we are very thankful to them.':
            'Falcon IT excels at turning your website dreams into reality. We are so proud of the work they have done for us that we have already recommended them to many of Our partners and we are very thankful to them.',
          'Tilt is a French-based platform connecting restaurants with corporate customers. Its front end is developed on React and its back end is on Node JS and the project was completed in 5 months.':
            'Tilt is a French-based platform connecting restaurants with corporate customers. Its front end is developed on React and its back end is on Node JS and the project was completed in 5 months.',
          // Issyne
          'Mobile platform for connecting students and teachers. It is an application that stands out for its ability to get in touch with teachers instantly., based on the availabilities. This application has an internal messaging system, with all the features such as sending multimedia files, sending voice messages, etc...':
            'Mobile platform for connecting students and teachers. It is an application that stands out for its ability to get in touch with teachers instantly., based on the availabilities. This application has an internal messaging system, with all the features such as sending multimedia files, sending voice messages, etc...',
          'Students can rate their teacher, and see the history of past classes (via a PDF file generated at the end of the course). ':
            'Students can rate their teacher, and see the history of past classes (via a PDF file generated at the end of the course). ',
          'A system of remuneration via tokens has been created.':
            'A system of remuneration via tokens has been created.',

          'The project owner is Salah Didouche, who made a name for himself in the world of startups with the TDP platform (Transporteurs du Pauvre).':
            'The project owner is Salah Didouche, who made a name for himself in the world of startups with the TDP platform (Transporteurs du Pauvre).',
          'Application completed and tested, launch pending owner availability. ':
            'Application completed and tested, launch pending owner availability. ',

          // Winaa
          'Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. ':
            'Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. ',
          'A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. ':
            'A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. ',
          'Once the matching is done, a calendar allows the student to book an interview session with the company.':
            'Once the matching is done, a calendar allows the student to book an interview session with the company.',
          'The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. ':
            'The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. ',
          'Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions. ':
            'Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions. ',
          'Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. Once the matching is done, a calendar allows the student to book an interview session with the company. The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions.':
            'Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. Once the matching is done, a calendar allows the student to book an interview session with the company. The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions.',
          'Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices. A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer. The matching process is similarly done as with the Tinder application.Once the matching is done, a calendar allows the student to book an interview session with the company. The platform automatically retrieves (scrapes) all offers from reference websites in France, and adds them to Winaa’s database.Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions.':
            'Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices. A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer. The matching process is similarly done as with the Tinder application.Once the matching is done, a calendar allows the student to book an interview session with the company. The platform automatically retrieves (scrapes) all offers from reference websites in France, and adds them to Winaa’s database.Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions.',
          'A French job platform connecting employers and employees for hiring apprenticeship with its website’s front end on React and backend on Node JS.This project was completed in 6 months from January 2021 to June 2021.':
            'A French job platform connecting employers and employees for hiring apprenticeship with its website’s front end on React and backend on Node JS.This project was completed in 6 months from January 2021 to June 2021.',
          'Falcon IT has done a great job and we are impressed with the overall services.':
            'Falcon IT has done a great job and we are impressed with the overall services.',
          'A French job platform connecting employers and employees for hiring apprenticeship with its website’s front end on React and backend on Node JS. This project was completed is still ongoing, in order to be the most adapted to the market':
            'A French job platform connecting employers and employees for hiring apprenticeship with its website’s front end on React and backend on Node JS. This project was completed is still ongoing, in order to be the most adapted to the market',
          // Orgaplan
          'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.':
            'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.',
          'Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. ':
            'Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. ',
          'Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.':
            'Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.',
          'Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. ':
            'Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. ',
          'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, to facilitate very challenging logistic activities. Available in web and mobile versions, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site. Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification to get the best User experience':
            'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, to facilitate very challenging logistic activities. Available in web and mobile versions, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site. Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification to get the best User experience',
          'Orgaplan is a Logistics management in France on a large scale and its site is developed on React front end and Node JS backend. This project was delivered in just 7 months':
            'Orgaplan is a Logistics management in France on a large scale and its site is developed on React front end and Node JS backend. This project was delivered in just 7 months',
          'Falcon’s website design team far exceeded my expectations on every front as I had very high expectations of them. The end product is a responsive website that embodies who we are as a company.':
            'Falcon’s website design team far exceeded my expectations on every front as I had very high expectations of them. The end product is a responsive website that embodies who we are as a company.',
          "Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile. At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.":
            "Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile. At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.",
          'Falcon IT has done a great job of creating exactly what I wanted. Easy to work with and very responsive. They met all of my expectations. Thank you!':
            'Falcon IT has done a great job of creating exactly what I wanted. Easy to work with and very responsive. They met all of my expectations. Thank you!',
          'Orgaplan is a Logistics management in France on a large scale and its site is developed on React front end and Node JS backend. This project was delivered in just 6 months, which was possible by scalling the team from 2 developers to up to 8 developers.':
            'Orgaplan is a Logistics management in France on a large scale and its site is developed on React front end and Node JS backend. This project was delivered in just 6 months, which was possible by scalling the team from 2 developers to up to 8 developers.',
          //    Orientator
          'Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.':
            'Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.',
          'The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile.':
            'The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile.',
          "At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.":
            "At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.",
          'Orientator is a French-based platform for students to decide on their university.This site is developed with the front end on React and the backend on Node JS and the whole project was completed in 5 months':
            'Orientator is a French-based platform for students to decide on their university.This site is developed with the front end on React and the backend on Node JS and the whole project was completed in 5 months',
          // Kidcab
          'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.':
            'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.',
          'The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. ':
            'The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. ',
          'The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides.':
            'The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides.',
          'Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.':
            'Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.',
          'This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. ':
            'This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. ',
          'Kidcab, a mobile app project was designed for the French market very efficiently as this project required work carefully on the code optimization, and especially all the API calls to minimize the operation costs. The mobile application is developed on React Native and the whole project took 3 months.':
            'Kidcab, a mobile app project was designed for the French market very efficiently as this project required work carefully on the code optimization, and especially all the API calls to minimize the operation costs. The mobile application is developed on React Native and the whole project took 3 months.',
          // PERMISPOP
          'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.':
            'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.',
          'The platform offers several features such as :':
            'The platform offers several features such as :',
          'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs.':
            'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs.',
          'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities and safely monitor their location. For our partner, we developed two mobile applications and a Ride Management web application.The Driver mobile application allows them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features to Uber.The Parent’s mobile application shows the live location of the driver and allows to monitor all the past and upcoming rides.Finally, the Ride Management website is intended for Kidcab administrators to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.':
            'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities and safely monitor their location. For our partner, we developed two mobile applications and a Ride Management web application.The Driver mobile application allows them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features to Uber.The Parent’s mobile application shows the live location of the driver and allows to monitor all the past and upcoming rides.Finally, the Ride Management website is intended for Kidcab administrators to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.',
          'Expertise and systematic approach to fulfilling client needs. I love the energy and excitement the Falcon IT team exhibits towards the success of my APP.':
            'Expertise and systematic approach to fulfilling client needs. I love the energy and excitement the Falcon IT team exhibits towards the success of my APP.',

          // PERMISPOP
          'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.':
            'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.',
          'The platform offers several features such as :':
            'The platform offers several features such as :',
          '- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.':
            '- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.',
          '- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;':
            '- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;',
          '- At the end of each session, the student can rate the instructor and provide feedback to the platform; ':
            '- At the end of each session, the student can rate the instructor and provide feedback to the platform; ',
          '- An internal messaging system;': '- An internal messaging system;',
          '- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. ':
            '- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. ',

          'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.':
            'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.',
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself actual teachings of the great explorer of the truth, the master-builder of human happiness.':
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself actual teachings of the great explorer of the truth, the master-builder of human happiness.',
          'Permispop is a web platform and a mobile app connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end  of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.':
            'Permispop is a web platform and a mobile app connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end  of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.',
          'We at Permispop are very impressed with all aspects of our website and mobile app, as it is user-friendly and work efficiently. We would highly recommend Falcon IT to anyone looking to build a website, web app or mobile application.':
            'We at Permispop are very impressed with all aspects of our website and mobile app, as it is user-friendly and work efficiently. We would highly recommend Falcon IT to anyone looking to build a website, web app or mobile application.',
          'A web platform and a mobile app to connect students, independent driving teachers, and driving schools in France. Web’s front end is developed on React and the back end is developed on .Net and the Verson 1 of this website was completed in the duration of 2019 to 2022 and Version 2 was completed in the duration of 2021 to 2022':
            'A web platform and a mobile app to connect students, independent driving teachers, and driving schools in France. Web’s front end is developed on React and the back end is developed on .Net and the Verson 1 of this website was completed in the duration of 2019 to 2022 and Version 2 was completed in the duration of 2021 to 2022',
          'Client was especially happy that we never let him down, always put additional effort to make things happen. He sees us as more than vendor, but friends.​':
            'Client was especially happy that we never let him down, always put additional effort to make things happen. He sees us as more than vendor, but friends.​',
          'The idea was to develop a first version of the website, in order to test the market fit. This version was completed within a couple of months, using ReactJS for the frontend, and ASP.NET Core for the backend. We are still continuing the development, which is currently at the V4.':
            'The idea was to develop a first version of the website, in order to test the market fit. This version was completed within a couple of months, using ReactJS for the frontend, and ASP.NET Core for the backend. We are still continuing the development, which is currently at the V4.',
          'We at Permispop are very impressed with all aspects of our website and mobile app, as it is user-friendly and work efficiently. We would highly recommend Falcon IT Consulting to anyone looking to build a website, web app or mobile application.':
            'We at Permispop are very impressed with all aspects of our website and mobile app, as it is user-friendly and work efficiently. We would highly recommend Falcon IT Consulting to anyone looking to build a website, web app or mobile application.',
          // ZypZap
          'ZypZap is a gaming platform by Falcon IT.': 'ZypZap is a gaming platform by Falcon IT.',
          'It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.':
            'It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.',
          '•	For learners, ZypZap helps them to become Pro players.':
            '•	For learners, ZypZap helps them to become Pro players.',
          '•	Full gameplay courses are available on this site.':
            '•	Full gameplay courses are available on this site.',
          '•	For creators, gamers teach, what they are good at':
            '•	For creators, gamers teach, what they are good at',

          '•	Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.':
            '•	Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.',
          'ZypZap is a gaming platform by Falcon IT. It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.':
            'ZypZap is a gaming platform by Falcon IT. It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.',
          'ZypZap is a gaming platform by Falcon IT. It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.For learners, ZypZap helps them to become Pro players.Full gameplay courses are available on this site. For creators, gamers teach, what they are good at. Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.':
            'ZypZap is a gaming platform by Falcon IT. It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.For learners, ZypZap helps them to become Pro players.Full gameplay courses are available on this site. For creators, gamers teach, what they are good at. Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.',
          'A French-based gaming platform, developed with the front end on React and the backend on Node JS, and the whole project was completed in 10 months':
            'A French-based gaming platform, developed with the front end on React and the backend on Node JS, and the whole project was completed in 10 months',
          'Quick response to ideas and changes. Falcon always answers the right ways and ideas':
            'Quick response to ideas and changes. Falcon always answers the right ways and ideas',
          'A French-based gaming platform, developed with the front end on React and the backend on Node JS, and the whole project was completed in 5 months, due to frequent changes in the design to meet the gaming world’s expectation.':
            'A French-based gaming platform, developed with the front end on React and the backend on Node JS, and the whole project was completed in 5 months, due to frequent changes in the design to meet the gaming world’s expectation.',
          // Quadra Base
          'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.':
            'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.',
          'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. ':
            'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. ',
          'This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. ':
            'This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. ',

          'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details. Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details. Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. This project is ambitious and aims to revolutionize the approach to design in the field of construction in France.':
            'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details. Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details. Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. This project is ambitious and aims to revolutionize the approach to design in the field of construction in France.',
          'Project is ambitious and aims to revolutionize the approach to design in the field of construction in France. The project is developed on MERN and the timeline was November 2021 to July 2022':
            'Project is ambitious and aims to revolutionize the approach to design in the field of construction in France. The project is developed on MERN and the timeline was November 2021 to July 2022',
          'There is no comparison between the first developers and Falcon IT. Professional, Creative, Attentive to detail, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.':
            'There is no comparison between the first developers and Falcon IT. Professional, Creative, Attentive to detail, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.',
          'The project was released in several modules, so that the client could see the progress on the go. We started by completing and validating the admin panel, then we worked on the Architect interface, and finally on the Manufacturer features. The project took overall 6 months, including all the edits in order to make it very functional.':
            'The project was released in several modules, so that the client could see the progress on the go. We started by completing and validating the admin panel, then we worked on the Architect interface, and finally on the Manufacturer features. The project took overall 6 months, including all the edits in order to make it very functional.',
          'The first development team did not complete 100% the website, which was frustrating. Falcon Consulting took over and redeveloped the website from A to Z. They went the extra mile to make sure all the details were taken into consideration. Professional, Creative, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.':
            'The first development team did not complete 100% the website, which was frustrating. Falcon Consulting took over and redeveloped the website from A to Z. They went the extra mile to make sure all the details were taken into consideration. Professional, Creative, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.',
          'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. This project is ambitious and aims to revolutionize the approach to design in the field of construction in France.':
            'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. This project is ambitious and aims to revolutionize the approach to design in the field of construction in France.',
          // Design confection
          'A web app designed to help customers with customized stitching to receive your creation at your home.':
            'A web app designed to help customers with customized stitching to receive your creation at your home.',
          'User login to register and add information regarding customized dress like color combination, stuff design, etc.':
            'User login to register and add information regarding customized dress like color combination, stuff design, etc.',
          'After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.':
            'After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.',
          'Choose your designer with 99% accuracy as design confection brings your ideas to life.':
            'Choose your designer with 99% accuracy as design confection brings your ideas to life.',

          'A web app designed to help customers with customized stitching to receive your creation at your home. User login to register and add information regarding customized dress like color combination, stuff design, etc. After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs, where you can choose your designer with 99% accuracy as design confection brings your ideas to life':
            'A web app designed to help customers with customized stitching to receive your creation at your home. User login to register and add information regarding customized dress like color combination, stuff design, etc. After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs, where you can choose your designer with 99% accuracy as design confection brings your ideas to life',
          'I contacted Falcon IT with a basic feel I wanted in a website. They developed the best of Design Confection, the overall website visual layout, and the content too. Falcon’s services are a bargain when you weigh the cost versus the product you received. I will be using them again in future endeavors. Thanks again!':
            'I contacted Falcon IT with a basic feel I wanted in a website. They developed the best of Design Confection, the overall website visual layout, and the content too. Falcon’s services are a bargain when you weigh the cost versus the product you received. I will be using them again in future endeavors. Thanks again!',
          'Design confection is a French-based project. It is a platform for tailors and clients for sewing services. The website is developed using MERN stacks, and it was completed in 4 months.':
            'Design confection is a French-based project. It is a platform for tailors and clients for sewing services. The website is developed using MERN stacks, and it was completed in 4 months.',
          // Tajweed Made Easy
          'Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.':
            'Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.',
          '•	User can signup and start learning Quran with Tajweed.':
            '•	User can signup and start learning Quran with Tajweed.',

          '•	Practice lessons are available.': '•	Practice lessons are available.',
          '•	User can repeat the lesson at any time without an internet connection':
            '•	User can repeat the lesson at any time without an internet connection',
          '•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.':
            '•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.',

          // EZBoxmedia
          'EZBox media is a platform providing different services':
            'EZBox media is a platform providing different services',
          'EZBox media is a platform providing different services including':
            'EZBox media is a platform providing different services including',
          Advertising: 'Advertising',
          '•	Advertising by understanding how a user can react to the advertisement shown to them.':
            '•	Advertising by understanding how a user can react to the advertisement shown to them.',
          '•	Target ads based on non-personal criteria.':
            '•	Target ads based on non-personal criteria.',

          'Product development': 'Product development ',
          '•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today.':
            '•	EZBox media helps Product development for the next generation products with the wide variety of technologies available to',
          'Chromium Browser': 'Chromium Browser',
          '•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. ':
            '•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. ',

          'EZBox media is a platform providing different services including Advertising Advertising by understanding how a user can react to the advertisement shown to them.Target ads based on non-personal criteria.EZBox media helps Product development for the next generation products with the wide variety of technologies available today.EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions.':
            'EZBox media is a platform providing different services including Advertising Advertising by understanding how a user can react to the advertisement shown to them.Target ads based on non-personal criteria.EZBox media helps Product development for the next generation products with the wide variety of technologies available today.EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions.',
          'Falcon IT is a great company to work with as they are always responsive and willing to do what it takes to get the job done right and in a timely manner. They are very reliable and it was very clear during working that they are the right choice. Thank you, Falcon IT!':
            'Falcon IT is a great company to work with as they are always responsive and willing to do what it takes to get the job done right and in a timely manner. They are very reliable and it was very clear during working that they are the right choice. Thank you, Falcon IT!',
          'A French-based, service-providing website developed on MERN. This effective model took 3 months from January 2022 to March 2022 including all features.':
            'A French-based, service-providing website developed on MERN. This effective model took 3 months from January 2022 to March 2022 including all features.',
          // TELEHEALTH PLATFORM
          'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely.':
            'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely.',
          'The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not. ':
            'The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not. ',
          'The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.':
            'The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.',
          'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc...). The program then analyzes the data based on internal rules and deduces whether the movements are abnormal or not.The detection of the movements is done with the help of a Media pipe and requires advanced knowledge in terms of image processing to ensure fluidity and accuracy of the final results.':
            'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc...). The program then analyzes the data based on internal rules and deduces whether the movements are abnormal or not.The detection of the movements is done with the help of a Media pipe and requires advanced knowledge in terms of image processing to ensure fluidity and accuracy of the final results.',
          'French based mobile application to analyze patient’s movement developed, project was completed in 4 months.':
            'French based mobile application to analyze patient’s movement developed, project was completed in 4 months.',
          'Our dream has come true with the efforts of the Falcon team. Great app and they do it in a great manner.':
            'Our dream has come true with the efforts of the Falcon team. Great app and they do it in a great manner.',
          'French based mobile application to analyze patient’s movement developed on ReactJS/NodeJS and Mediapipe technology. The MVP was successfully completed within 3 months.':
            'French based mobile application to analyze patient’s movement developed on ReactJS/NodeJS and Mediapipe technology. The MVP was successfully completed within 3 months.',
          'This was a very challenging project, and to be honest, we were uncertain whether it was even technically possible. In the past, we reached out to another offshore company for a first version, which did cost us more than $100k, even though the final result was not user friendly. When we met with Falcon, they were confident to be able to do a better and more efficient project, as an MVP as a start. It was not an easy project, but they did show a lot of commitment and they finally made it successfully. Great job guys !':
            'This was a very challenging project, and to be honest, we were uncertain whether it was even technically possible. In the past, we reached out to another offshore company for a first version, which did cost us more than $100k, even though the final result was not user friendly. When we met with Falcon, they were confident to be able to do a better and more efficient project, as an MVP as a start. It was not an easy project, but they did show a lot of commitment and they finally made it successfully. Great job guys !',
          //  Yuwway
          "Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs.":
            "Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs.",

          // Register-RH
          'This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.':
            'This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.',

          // Facility Management
          'This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status.':
            'This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status.',
          'This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status. here is one module in this project is Ticket management system which needs to be create and manage tickets. A Ticket management system is a module where there are two types of users : admin user / Employee user.':
            'This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status. here is one module in this project is Ticket management system which needs to be create and manage tickets. A Ticket management system is a module where there are two types of users : admin user / Employee user.',

          // Sindoor
          'Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding. The User and vendors can communicate through App. The user and vendor have send and receive quotes then validate quotes on App.':
            'Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding. The User and vendors can communicate through App. The user and vendor have send and receive quotes then validate quotes on App.',
          // menu
          FR: 'FR',
          'Changer de langue en': 'Changer de langue en',
          Français: 'Français',
          'WEB DEVELOPMENT': 'WEB DEVELOPMENT',
          'APP DEVELOPMENT': 'APP DEVELOPMENT',
          'MOBILE APPLICATION': 'MOBILE APPLICATION',
          'SOFTWARE DEVELOPMENT': 'SOFTWARE DEVELOPMENT',
          'ON DEMAND DEVELOPERS': 'ON DEMAND DEVELOPERS',
          'ON DEMAND': 'ON DEMAND',

          'UI/UX DEVELOPMENT': 'UI/UX DEVELOPMENT',
          'Client Details': 'Client Details',
          SOFTWARE: 'SOFTWARE',

          // Legal Mentions
          'Legal Mentions': 'Legal Mentions',
          Definitions: 'Definitions',
          'Presentation of the website': 'Presentation of the website',
          'General conditions of use of the site and the services offered':
            'General conditions of use of the site and the services offered',
          'Description of the services provided': 'Description of the services provided',
          'Contractual limitations on technical data': 'Contractual limitations on technical data',
          'Intellectual property and counterfeits': 'Intellectual property and counterfeits',
          'Limitations of liability': 'Limitations of liability',
          'Personal data management': 'Personal data management',
          'Incident notification': 'Incident notification',
          "Hypertext links 'cookies' and internet tags":
            "Hypertext links 'cookies' and internet tags",
          'Applicable law and attribution of jurisdiction':
            'Applicable law and attribution of jurisdiction',

          // Blog Article
          // business website
          'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.':
            'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.',
          'Enables Online Marketing:': 'Enables Online Marketing:',
          'If you have a business website you can use any online strategy to market your business and attract potential customers. This will help you in expanding your business. There are a lot of marketing strategies, you can use any depending upon the type of your business but for that, you need to have a business website first. You can easily use your website to attract new customers through social media marketing. You can use third-party social media to promote your business but you need to have a place where you can direct your potential customer so that they can learn about your business. When the potential customer comes to your website he will look at your products and possibly buy them. Hence you need a website to utilize online marketing strategies.':
            'If you have a business website you can use any online strategy to market your business and attract potential customers. This will help you in expanding your business. There are a lot of marketing strategies, you can use any depending upon the type of your business but for that, you need to have a business website first. You can easily use your website to attract new customers through social media marketing. You can use third-party social media to promote your business but you need to have a place where you can direct your potential customer so that they can learn about your business. When the potential customer comes to your website he will look at your products and possibly buy them. Hence you need a website to utilize online marketing strategies.',
          'Increase in sales and revenue:': 'Increase in sales and revenue:',
          'Your website will give an introduction to your products and business. As said earlier people will most likely look up your company or business before even entertaining the idea of buying your product. If you have a business website then it will be easy for your customers to find all the information about the products you sell. Your business website will house all the content about your business to engage your audience and convince them to buy your products or services etc. This will lead to an increase in revenue.':
            'Your website will give an introduction to your products and business. As said earlier people will most likely look up your company or business before even entertaining the idea of buying your product. If you have a business website then it will be easy for your customers to find all the information about the products you sell. Your business website will house all the content about your business to engage your audience and convince them to buy your products or services etc. This will lead to an increase in revenue.',
          'You can allow your customers to shop online from your website. This can boost your sales dramatically. These days people prefer to roam the internet and buy products from their homes. Smart businessmen realize this and give people the option to buy their products directly from their business website. This will increase the possibility of sales.':
            'You can allow your customers to shop online from your website. This can boost your sales dramatically. These days people prefer to roam the internet and buy products from their homes. Smart businessmen realize this and give people the option to buy their products directly from their business website. This will increase the possibility of sales.',
          'As said earlier your website has wide access which means it can reach more customers. The more people visit your website, the more opportunities you have to make a sale. Plus your shop cannot remain open 24/7 but your website can be accessed 24/7 that again could lead to an increase in your sales as your product can be sold through your website during any time of the day.':
            'As said earlier your website has wide access which means it can reach more customers. The more people visit your website, the more opportunities you have to make a sale. Plus your shop cannot remain open 24/7 but your website can be accessed 24/7 that again could lead to an increase in your sales as your product can be sold through your website during any time of the day.',
          'Establishing Credibility': 'Establishing Credibility',
          'A business website also brings credibility to your business. People usually look at the business with no websites as sketchy and less trust-worthy. You might be wondering how can a website bring credibility to your business. Well, most websites have review sections where the customers write reviews about your products or services. A consumer is 40% more likely to buy your product if they read positive reviews about your business.':
            'A business website also brings credibility to your business. People usually look at the business with no websites as sketchy and less trust-worthy. You might be wondering how can a website bring credibility to your business. Well, most websites have review sections where the customers write reviews about your products or services. A consumer is 40% more likely to buy your product if they read positive reviews about your business.',
          'You can also bring credibility to your website by publishing educational and well-researched material. It will let your customers know that you know what you are talking about and what you are selling. This will increase the chances of purchase by a customer.':
            'You can also bring credibility to your website by publishing educational and well-researched material. It will let your customers know that you know what you are talking about and what you are selling. This will increase the chances of purchase by a customer.',
          'Distinguish yourself through your website:':
            'Distinguish yourself through your website:',

          'You can also use your website to be different from your competitors in the market. You can uniquely design your website and catch the attention of potential customers. In the crowded market, it is necessary to set yourself apart to get the attention of people. Use your website to establish yourself as different from others in the market and gain new customers every day.':
            'You can also use your website to be different from your competitors in the market. You can uniquely design your website and catch the attention of potential customers. In the crowded market, it is necessary to set yourself apart to get the attention of people. Use your website to establish yourself as different from others in the market and gain new customers every day.',
          'Around the clock availability:': 'Around the clock availability:',
          'We have discussed this briefly before but it’s worth mentioning again that a website ensures around the clock availability of your services. You might be sleeping in your home but a customer might be buying products from your website while you sleep. So your website keeps working 24/7 to attract new customers and sell them your products. It acts like a digital salesperson who is working all day. It attracts customers, provides them the information, shows them reviews, convinces them to buy and collects payment from them. This leads to an increase in sales and revenue.':
            'We have discussed this briefly before but it’s worth mentioning again that a website ensures around the clock availability of your services. You might be sleeping in your home but a customer might be buying products from your website while you sleep. So your website keeps working 24/7 to attract new customers and sell them your products. It acts like a digital salesperson who is working all day. It attracts customers, provides them the information, shows them reviews, convinces them to buy and collects payment from them. This leads to an increase in sales and revenue.',
          'Professional Image': 'Professional Image',
          'Your business website gives your brand or company a professional image. If your website is easy to navigate, has an attractive design, and helpful content, it will give the customer a very professional image of your business and they will seriously consider buying from you.':
            'Your business website gives your brand or company a professional image. If your website is easy to navigate, has an attractive design, and helpful content, it will give the customer a very professional image of your business and they will seriously consider buying from you.',
          'Extremely Economical:': 'Extremely Economical:',
          'The website has global access and the important thing is that setting it up will take next to nothing from your pocket. It’s very economical but it opens endless doors of possibilities for you to expand your business.':
            'The website has global access and the important thing is that setting it up will take next to nothing from your pocket. It’s very economical but it opens endless doors of possibilities for you to expand your business.',
          'Wrapping Up:': 'Wrapping Up:',
          'A business website provides you with endless possibilities to expand your business and increase your revenue. It does not matter if you run a restaurant or a brick and mortar business or sale makeup products, you need a website to engage the wider audience, provide them the information, show them reviews and convince them to buy your service or products. So what are you waiting for? Immediately set up your business website and explore the endless opportunities that come with it.':
            'A business website provides you with endless possibilities to expand your business and increase your revenue. It does not matter if you run a restaurant or a brick and mortar business or sale makeup products, you need a website to engage the wider audience, provide them the information, show them reviews and convince them to buy your service or products. So what are you waiting for? Immediately set up your business website and explore the endless opportunities that come with it.',
          // Remote Team

          'What is a Remote Team?': 'What is a Remote Team?',
          'Many people fail to understand what a remote team really is. A remote team is a group of experienced workers who belong to different time zones, harbors different skills and different values, all working together for one purpose. Each of the workers works from a specific location and operates across time and space. There is a significant distinction between employees working inside the office and those who are not bound to a particular building.':
            'Many people fail to understand what a remote team really is. A remote team is a group of experienced workers who belong to different time zones, harbors different skills and different values, all working together for one purpose. Each of the workers works from a specific location and operates across time and space. There is a significant distinction between employees working inside the office and those who are not bound to a particular building.',
          'Obstacles in managing a Remote Team': 'Obstacles in managing a Remote Team',
          'There are a lot of difficulties in supervising a remote team which has been listed below:':
            'There are a lot of difficulties in supervising a remote team which has been listed below:',
          'Lack of Communication': 'Lack of Communication',
          "Adequate, if not excellent, communication is one of the vital ingredients in managing a remote team. It is crucial to gain input from all workers and to be aware of the progress of the tasks they have been working on. However, when workers are working remotely, it's hard to obtain such a quality of communication. Different time zones often lead to employees receiving messages, not on time which negatively affects their performance. Moreover, lack of compliance with the established working hours by the worker also affects timely communication. Lastly, due to the difference in time zones and schedules, making video meetings and phone calls often becomes a burdensome task.":
            "Adequate, if not excellent, communication is one of the vital ingredients in managing a remote team. It is crucial to gain input from all workers and to be aware of the progress of the tasks they have been working on. However, when workers are working remotely, it's hard to obtain such a quality of communication. Different time zones often lead to employees receiving messages, not on time which negatively affects their performance. Moreover, lack of compliance with the established working hours by the worker also affects timely communication. Lastly, due to the difference in time zones and schedules, making video meetings and phone calls often becomes a burdensome task.",
          'Solution:': 'Solution:',
          'Email alone is inadequate. Telecommuters profit by having a "more extravagant" innovation, for example, video conferencing, that gives members a significant number of the viewable signals that they would have on the off chance that they were vis-à-vis. Visual prompts take into account expanded "common information" about colleagues and furthermore help lessen the feeling of disconnection among groups. Video is likewise especially helpful for mind-boggling or touchy discussions, as it feels closer to home than composed or sound just correspondence.':
            'Email alone is inadequate. Telecommuters profit by having a "more extravagant" innovation, for example, video conferencing, that gives members a significant number of the viewable signals that they would have on the off chance that they were vis-à-vis. Visual prompts take into account expanded "common information" about colleagues and furthermore help lessen the feeling of disconnection among groups. Video is likewise especially helpful for mind-boggling or touchy discussions, as it feels closer to home than composed or sound just correspondence.',
          'Moreover, as long as you can adopt a two-way communication system, your remote workers would not feel isolated. In addition, regular one on one meetings should be held since it is troublesome to choose a time that would be suitable for all workers':
            'Moreover, as long as you can adopt a two-way communication system, your remote workers would not feel isolated. In addition, regular one on one meetings should be held since it is troublesome to choose a time that would be suitable for all workers',
          'Inability to monitor worker’s progress': 'Inability to monitor worker’s progress',
          'Since it is an arduous task to scrutinize how much and at what pace is your worker accomplishing his tasks, It is not that easy to track your employee’s progress especially when they are working thousands of miles away from you. You cannot possibly know when your employee is being underutilized without a comprehension of their capability and this lack of visibility and control can lead to poor management.':
            'Since it is an arduous task to scrutinize how much and at what pace is your worker accomplishing his tasks, It is not that easy to track your employee’s progress especially when they are working thousands of miles away from you. You cannot possibly know when your employee is being underutilized without a comprehension of their capability and this lack of visibility and control can lead to poor management.',
          'Various measures need to employ in order to monitor your employees’ productivity. Such actions may include creating merits that define how much work is to be completed per day. Moreover, clear roles and responsibilities should be detailed, along with the discussions with the workers about specific goals in a project to keep them accountable. Most importantly, the progress of remote workers should be monitored according to the same criteria that apply to office workers.':
            'Various measures need to employ in order to monitor your employees’ productivity. Such actions may include creating merits that define how much work is to be completed per day. Moreover, clear roles and responsibilities should be detailed, along with the discussions with the workers about specific goals in a project to keep them accountable. Most importantly, the progress of remote workers should be monitored according to the same criteria that apply to office workers.',
          'Cultivating Corporate Culture': 'Cultivating Corporate Culture',
          'Cultivating the right corporate culture is a demanding task. It involves hiring the right employees, adopting a good mode of communication, and diffusing this culture across the board. In an office, the company culture is already shaped which is not the case with remote teams where you have to develop a professional, working culture with concentrated effort. It should be kept in mind that such culture should reflect your team’s purpose and values.':
            'Cultivating the right corporate culture is a demanding task. It involves hiring the right employees, adopting a good mode of communication, and diffusing this culture across the board. In an office, the company culture is already shaped which is not the case with remote teams where you have to develop a professional, working culture with concentrated effort. It should be kept in mind that such culture should reflect your team’s purpose and values.',
          'Creating such a culture requires a carefully structured plan in which the manager will deliver his rules and regulations to the workers along with the expectations that they would be required to fulfill. In addition, the plan would also discuss the modes of interactions between the manager and the worker along with other policies of the company':
            'Creating such a culture requires a carefully structured plan in which the manager will deliver his rules and regulations to the workers along with the expectations that they would be required to fulfill. In addition, the plan would also discuss the modes of interactions between the manager and the worker along with other policies of the company',
          'Cultural Difference': 'Cultural Difference',
          'As this system of work is global, different employees have different values, boundaries, and attitude towards their work. Managing people of different ethnic groups and embracing cultural diversity is a complicated project since they have different work ethics, behaviors, and expectations. Managers often fail to understand or appreciate their worker’s cultural background which leads to conflicts that threaten the team’s unity.':
            'As this system of work is global, different employees have different values, boundaries, and attitude towards their work. Managing people of different ethnic groups and embracing cultural diversity is a complicated project since they have different work ethics, behaviors, and expectations. Managers often fail to understand or appreciate their worker’s cultural background which leads to conflicts that threaten the team’s unity.',
          'Managers should acquire adequate knowledge about their worker’s cultural background and associated values and should work with them accordingly. They should be open to feedback and constructive criticism as well as promote a mindset of accepting differences and respecting every cultural aspect.':
            'Managers should acquire adequate knowledge about their worker’s cultural background and associated values and should work with them accordingly. They should be open to feedback and constructive criticism as well as promote a mindset of accepting differences and respecting every cultural aspect.',
          'Obtaining Team’s Trust': 'Obtaining Team’s Trust',
          "There is sometimes a mutual distrust between the employee and the company. While the Managers stress that representatives won't fill in as hard or as productivity, the employee is anxious about whether he will be timely paid. Moreover. Many employees struggle with diminished access to administrative help and correspondence. Sometimes, the workers feel that remote directors are withdrawn from their necessities, and along these lines are neither steady nor accommodating in completing their work.":
            "There is sometimes a mutual distrust between the employee and the company. While the Managers stress that representatives won't fill in as hard or as productivity, the employee is anxious about whether he will be timely paid. Moreover. Many employees struggle with diminished access to administrative help and correspondence. Sometimes, the workers feel that remote directors are withdrawn from their necessities, and along these lines are neither steady nor accommodating in completing their work.",
          'Being transparent can develop trust between the employees and the manager. Transparency should be applied to:':
            'Being transparent can develop trust between the employees and the manager. Transparency should be applied to:',
          'Expectations regarding the task': 'Expectations regarding the task',
          'Pay rate and schedule': 'Pay rate and schedule',
          'Working Hours': 'Working Hours',
          'Status update regarding the task': 'Status update regarding the task',
          'Moreover, unexpected questions regarding the project should be answered promptly and workers should be provided with any kind of help.':
            'Moreover, unexpected questions regarding the project should be answered promptly and workers should be provided with any kind of help.',
          'As we can see, there are many challenges in managing a remote team. However, such issues can be easily resolved by taking appropriate, timely measures that would make the remote industry even more common across the globe.':
            'As we can see, there are many challenges in managing a remote team. However, such issues can be easily resolved by taking appropriate, timely measures that would make the remote industry even more common across the globe.',
          //
          // Fireman
          'Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file. Fireman including following modules:':
            'Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file. Fireman including following modules:',
          // Excellence
          'Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site.':
            'Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site.',
          'We were pleased with Falcon IT and the overall development process of our website. Our website has transformed the image of our firm and is the key introductory point for new and potential clients. Thanks for a job well done!':
            'We were pleased with Falcon IT and the overall development process of our website. Our website has transformed the image of our firm and is the key introductory point for new and potential clients. Thanks for a job well done!',
          'In order to develop A French-based ready-to-wear store chain, its brand image, and its online activity, the company wanted to have an e-commerce site. The website was developed on .NET and was complete in 4 months from April 2022 to July 2022':
            'In order to develop A French-based ready-to-wear store chain, its brand image, and its online activity, the company wanted to have an e-commerce site. The website was developed on .NET and was complete in 4 months from April 2022 to July 2022',
          'It is a distinct pleasure for me to recommend falcon IT to all interested parties.They have been professional, comprehensive, and competent throughout the process of working together. We have established a relationship with them for years to come.':
            'It is a distinct pleasure for me to recommend falcon IT to all interested parties.They have been professional, comprehensive, and competent throughout the process of working together. We have established a relationship with them for years to come.',
          //  Barber Shop
          'BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.':
            'BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.',
          // Real Estate
          'This website offers an online tailoring experience with free pick-up and delivery in Karachi. We provide stitching services with customizable designs for salwar suits, blouses, kurtas, bottoms, western wear as per customers measurement at the doorstep. Coming Soon for other cities also.':
            'This website offers an online tailoring experience with free pick-up and delivery in Karachi. We provide stitching services with customizable designs for salwar suits, blouses, kurtas, bottoms, western wear as per customers measurement at the doorstep. Coming Soon for other cities also.',
          'We were pleased with Falcon IT and the overall development process of our website. Our website has transformed the image of our firm and is the key introductory point for new and potential clients. Thanks for a job well done!':
            'We were pleased with Falcon IT and the overall development process of our website. Our website has transformed the image of our firm and is the key introductory point for new and potential clients. Thanks for a job well done!',
          'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces : a mobile application for the investors, and an admin panel, for the responsible of the company.':
            'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces : a mobile application for the investors, and an admin panel, for the responsible of the company.',
          'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan.':
            'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan.',
          // Beauty Salon
          'Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.':
            'Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.',
          // Accor Hotels
          'Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.':
            'Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.',
          'OUR CONTRIBUTION': 'OUR CONTRIBUTION',
          '• Collection and consolidation of business requests':
            '• Collection and consolidation of business requests',

          '• Implementation of project developments and production quality control':
            '• Implementation of project developments and production quality control',
          '• Development in ASP.NET 3.5, Spring.NET and nHibernate to develop a tool for managing the invoicing of courses and trainings.':
            '• Development in ASP.NET 3.5, Spring.NET and nHibernate to develop a tool for managing the invoicing of courses and trainings.',
          '• T-SQL development (generation of extracts, counters and data consistency checks)':
            '• T-SQL development (generation of extracts, counters and data consistency checks)',
          '• rDevelopment to evolve invoices to the new SSRS format':
            '• rDevelopment to evolve invoices to the new SSRS format',

          '• Kettle-based batch development for import / export and data transformation':
            '• Kettle-based batch development for import / export and data transformation',

          // A-Table
          'This project consists of two apps one is for the restaurant and other is for the end user.':
            'This project consists of two apps one is for the restaurant and other is for the end user.',

          "A-Table is a Mobile Application that allows restaurant to accept and manage orders placed by app users and clients in restaurant. Mobile app for customers to view the restaurant's dishes and place an online order and in the restaurant. A-Table user side: There are two ways to use the app: 1 Either the client is in a restaurant, and he seats down at a table. There will be QR codes available on the tables, and once the user does scan them, it opens automatically the app (if it is already installed), and the user has two options: he can go to the menu of the restaurant, see the dishes, and place the order through the app (in-app payment). He can also chat with his assigned waiter; and ask him anything needed : glass of water, clean the table, etc... , 2 Either the client is looking for a restaurant. In this case, he can search for a specific dish in the Home page. The app will show the popular dishes around him (geolocation). He has the possibility to filter his search: specific type of food, specific restaurant, etc...The filter is working with tags, that can be added or removed.":
            "A-Table is a Mobile Application that allows restaurant to accept and manage orders placed by app users and clients in restaurant. Mobile app for customers to view the restaurant's dishes and place an online order and in the restaurant. A-Table user side: There are two ways to use the app: 1 Either the client is in a restaurant, and he seats down at a table. There will be QR codes available on the tables, and once the user does scan them, it opens automatically the app (if it is already installed), and the user has two options: he can go to the menu of the restaurant, see the dishes, and place the order through the app (in-app payment). He can also chat with his assigned waiter; and ask him anything needed : glass of water, clean the table, etc... , 2 Either the client is looking for a restaurant. In this case, he can search for a specific dish in the Home page. The app will show the popular dishes around him (geolocation). He has the possibility to filter his search: specific type of food, specific restaurant, etc...The filter is working with tags, that can be added or removed.",
          //  Fnac
          'Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.':
            'Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.',
          '• Development in ASP.NET MVC 4 and Entity Framework 5 to develop a tool for managing store inventories (inventory management, location management, in-store label printing), unsold product returns, shipping and customer order remittances, use of EXT.NET modules with JavaScript / JQuery development to modernize this tool.':
            '• Development in ASP.NET MVC 4 and Entity Framework 5 to develop a tool for managing store inventories (inventory management, location management, in-store label printing), unsold product returns, shipping and customer order remittances, use of EXT.NET modules with JavaScript / JQuery development to modernize this tool.',
          '• Development in C# Compact Framework 3.5 to upgrade the tool for managing store inventories, returns of unsold products, shipping and customer order remittances on PDAs used in the store by staff.':
            '• Development in C# Compact Framework 3.5 to upgrade the tool for managing store inventories, returns of unsold products, shipping and customer order remittances on PDAs used in the store by staff.',
          '• T-SQL development (generation of extracts, counters and data consistency checks, creation of stored procedures for the different projects, data archiving)':
            '• T-SQL development (generation of extracts, counters and data consistency checks, creation of stored procedures for the different projects, data archiving)',
          '• Development in ASP.NET 3.5 to upgrade a shipping management tool for live customer orders in Switzerland':
            '• Development in ASP.NET 3.5 to upgrade a shipping management tool for live customer orders in Switzerland',
          // MicroSoft
          'Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.':
            'Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.',
          '• Development in U-SQL under Azure Data Lake Analytics of scripts for quality control of data from the ebook catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).':
            '• Development in U-SQL under Azure Data Lake Analytics of scripts for quality control of data from the ebook catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).',
          '• Migration of projects developed in Scope and SQL Server to Azure Data Lake Analytics and development in U-SQL under Azure of data quality control scripts from the video catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).':
            '• Migration of projects developed in Scope and SQL Server to Azure Data Lake Analytics and development in U-SQL under Azure of data quality control scripts from the video catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).',
          // Blsh
          'We are building a marketplace for delivery supplies on the customer and small business demand.':
            'We are building a marketplace for delivery supplies on the customer and small business demand.',
          'The app will match the Customer delivery request with the Courier.':
            'The app will match the Customer delivery request with the Courier.',
          'The Individual shopper can use delivery regularly (weekly, monthly, etc). Or only when there is a need for the delivery.':
            'The Individual shopper can use delivery regularly (weekly, monthly, etc). Or only when there is a need for the delivery.',
          'The app will offer market-based pricing. When the Individual shopper requests, he will offer the price he is willing to pay for delivery. All drivers who match his request will see the price. They will be able to accept the request or negotiate the delivery price.':
            'The app will offer market-based pricing. When the Individual shopper requests, he will offer the price he is willing to pay for delivery. All drivers who match his request will see the price. They will be able to accept the request or negotiate the delivery price.',
          'The app will be free for Customers. The Courier will pay 20% of the delivery price.':
            'The app will be free for Customers. The Courier will pay 20% of the delivery price.',
          //Canon
          'Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)':
            'Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)',
          '• Development in C# 4.6 of a component using the YouSign API for managing electronic signatures from workflows in Therefore':
            '• Development in C# 4.6 of a component using the YouSign API for managing electronic signatures from workflows in Therefore',
          '• Development in C#, C# Core, ASP.NET, ASP.NET Core of several applications dedicated to Canon customers using Therefore API.':
            '• Development in C#, C# Core, ASP.NET, ASP.NET Core of several applications dedicated to Canon customers using Therefore API.',
          '• Creation and implementation of reports in PowerBI (visualization of extracts, formatting of counters and graphs for data consistency checking)':
            '• Creation and implementation of reports in PowerBI (visualization of extracts, formatting of counters and graphs for data consistency checking)',
          '• raining of various Canon customers in the use, management and administration of Therefore':
            '• raining of various Canon customers in the use, management and administration of Therefore',
          '• Technical support around Therefore from different Canon customers':
            '• Technical support around Therefore from different Canon customers',
          //

          // Detail Project Screens
          // Detail Theme
          'Colors Schemes – Making UI feel more natural. This is why the usage of the right color palettes is essential to make the app more attractive. Some colors look better with another. This is why color schemes were created. They help designers to find the right hue for the remaining ones.':
            'Colors Schemes – Making UI feel more natural. This is why the usage of the right color palettes is essential to make the app more attractive. Some colors look better with another. This is why color schemes were created. They help designers to find the right hue for the remaining ones.',
          // Detail Design
          'App design is an ongoing process comprising user experience (UX) and user interface (UI) elements. Designers ideate, define solutions, create the app’s flow and structure, and make stylistic choices from colors to fonts. Designers base choices on user research and feedback. The end result is an app that looks nice and is easy to use. So, the best app design process comprises Research, Ideation, Problem Identification, Design, Feedback, Problem Evaluation. Designers handle all parts of the process in a continuous and simultaneous flow. And that’s both for UX and UI through the lifetime of the app.':
            'App design is an ongoing process comprising user experience (UX) and user interface (UI) elements. Designers ideate, define solutions, create the app’s flow and structure, and make stylistic choices from colors to fonts. Designers base choices on user research and feedback. The end result is an app that looks nice and is easy to use. So, the best app design process comprises Research, Ideation, Problem Identification, Design, Feedback, Problem Evaluation. Designers handle all parts of the process in a continuous and simultaneous flow. And that’s both for UX and UI through the lifetime of the app.',
          // Blog
          // Agile Methodology
          'The 9 main advantages of the agile methodology':
            'The 9 main advantages of the agile methodology',
          'August 3rd 2022': 'August 3rd 2022',
          'Agile stands for its versatility and evolutionary nature as one of the most common approaches to project management. Those who work in the industry, or closely to it, are aware that the art of software development is special and a bit different to other kinds of engineering projects.':
            'Agile stands for its versatility and evolutionary nature as one of the most common approaches to project management. Those who work in the industry, or closely to it, are aware that the art of software development is special and a bit different to other kinds of engineering projects.',
          'Data from 2018 show that almost 71 percent of the companies use Agile at various frequencies and 28 percent more active projects focused on Agile methodologies.':
            'Data from 2018 show that almost 71 percent of the companies use Agile at various frequencies and 28 percent more active projects focused on Agile methodologies.',
          "Why are manager dependent solely upon this or use it in association with other frameworks? it's easy because of it. The advantages of Agile empower them to control their projects and simplify the work of managers. It focuses both on the quality and value for the client as well as the execution of the project within the given project constraints.":
            "Why are manager dependent solely upon this or use it in association with other frameworks? it's easy because of it. The advantages of Agile empower them to control their projects and simplify the work of managers. It focuses both on the quality and value for the client as well as the execution of the project within the given project constraints.",
          "Why are top corporations using it for the management of their projects? here are some of Agile's great explanations and advantages.":
            "Why are top corporations using it for the management of their projects? here are some of Agile's great explanations and advantages.",
          'Product of greater quality': 'Product of greater quality',
          "Testing is an integrated aspect of Agile project management, which ensures that the finished product's overall output is greater. The consumer may request adjustments in compliance with the reality of the market and remain involved. Since Agile is an iterative process, self-organizing teams continue to learn and change over time.":
            "Testing is an integrated aspect of Agile project management, which ensures that the finished product's overall output is greater. The consumer may request adjustments in compliance with the reality of the market and remain involved. Since Agile is an iterative process, self-organizing teams continue to learn and change over time.",
          'Wonder how the self-organizing teams can be managed? This is the list of hacks to do remote work much better.':
            'Wonder how the self-organizing teams can be managed? This is the list of hacks to do remote work much better.',
          'Gratitude to the customer': 'Gratitude to the customer',
          'The customer does not control execution in the traditional system which affects flexibility and adaptability, since it is only interested in the planning process. In Agile, the consumer often participates in a decision-making process that leads to better retention of customers. You can deliver value to the customer and make sure that the final product is truly according to their requirements, by keeping the customer in the circle and making changes according to their opinion.':
            'The customer does not control execution in the traditional system which affects flexibility and adaptability, since it is only interested in the planning process. In Agile, the consumer often participates in a decision-making process that leads to better retention of customers. You can deliver value to the customer and make sure that the final product is truly according to their requirements, by keeping the customer in the circle and making changes according to their opinion.',
          'Another advantage of Agile Project Management is that time spent on the market is reduced considerably. In certain cases, the producer may use the opportunity effectively and benefit from the first mover. The customers will come back to you for another project when they get to enjoy these benefits because of your presentation.':
            'Another advantage of Agile Project Management is that time spent on the market is reduced considerably. In certain cases, the producer may use the opportunity effectively and benefit from the first mover. The customers will come back to you for another project when they get to enjoy these benefits because of your presentation.',
          'Better Evaluating': 'Better Evaluating',
          'Agile allows managers to have better control over quality-control features, feedback integration and project due to its limpidity. All shareholders engage in the process through sophisticated monitoring methods and reporting tools and quality is assured during the entire project execution period':
            'Agile allows managers to have better control over quality-control features, feedback integration and project due to its limpidity. All shareholders engage in the process through sophisticated monitoring methods and reporting tools and quality is assured during the entire project execution period',
          'Enhanced stability for projects': 'Enhanced stability for projects',
          'There are greater ways within the Agile system to ensure the project runs smoothly and to recognize and anticipate risks. With increased visibility, predicting risks, and coming up with effective mitigation plans becomes easier.':
            'There are greater ways within the Agile system to ensure the project runs smoothly and to recognize and anticipate risks. With increased visibility, predicting risks, and coming up with effective mitigation plans becomes easier.',
          'Scrum methodology helps managers to forecast performances and prepare accordingly to maximize project visibility by using sprint backlogs and burn down maps.':
            'Scrum methodology helps managers to forecast performances and prepare accordingly to maximize project visibility by using sprint backlogs and burn down maps.',
          'Risks minimized': 'Risks minimized',
          'Agile performs in short, continuous delivery sprints. Any project using an Agile approach would, in principle, never fail. and if a sector does not go as expected, there is still a minor part that can be salvaged and used in the future.':
            'Agile performs in short, continuous delivery sprints. Any project using an Agile approach would, in principle, never fail. and if a sector does not go as expected, there is still a minor part that can be salvaged and used in the future.',
          'Enhanced versatility': 'Enhanced versatility',
          "People work in smaller collisions and are facilitated by the product owner's continuous input and participation. If Agile is applied successfully in a project team, it offers additional versatility. Changes are typically time-consuming and expensive in some project management methodologies.":
            "People work in smaller collisions and are facilitated by the product owner's continuous input and participation. If Agile is applied successfully in a project team, it offers additional versatility. Changes are typically time-consuming and expensive in some project management methodologies.",
          'This unmatched mobility is one of the key reasons why efficient firms adopt Agile. Agile is however versatile enough for the team to make short-term adjustments and break the project into short, both achievable sprints. Agile technique is an efficient framework for teams seeking a versatile product creation strategy.':
            'This unmatched mobility is one of the key reasons why efficient firms adopt Agile. Agile is however versatile enough for the team to make short-term adjustments and break the project into short, both achievable sprints. Agile technique is an efficient framework for teams seeking a versatile product creation strategy.',
          'The enhancement is continual': 'The enhancement is continual',
          'One of the 12 fundamental concepts of the Agile Manifesto is working for continuous creativity and self-reflection. The methodology works on variations that do not replicate previous errors and that each sprint is better than the last. Agile methodologies allow team members to learn from similar experiences and promote an open culture of sharing of ideas.':
            'One of the 12 fundamental concepts of the Agile Manifesto is working for continuous creativity and self-reflection. The methodology works on variations that do not replicate previous errors and that each sprint is better than the last. Agile methodologies allow team members to learn from similar experiences and promote an open culture of sharing of ideas.',
          'Expanded moral squads': 'Expanded moral squads',
          'The project manager defends the team from sponsoring and management intervention. When Agile teams are self-organized and self-managed, they can easily increase their control and authority over their decisions.':
            'The project manager defends the team from sponsoring and management intervention. When Agile teams are self-organized and self-managed, they can easily increase their control and authority over their decisions.',
          'The pull-functionality of teams allows participants to improve their current position and to gain new skills in project management. Agile can provide versatile team structures and offers an atmosphere where teams are close-knit, as the team size is small. The team also addresses problems and circumstances to strengthen their cooperation.':
            'The pull-functionality of teams allows participants to improve their current position and to gain new skills in project management. Agile can provide versatile team structures and offers an atmosphere where teams are close-knit, as the team size is small. The team also addresses problems and circumstances to strengthen their cooperation.',
          'More valid data': 'More valid data',
          'The metrics used in time and cost analysis by Agile teams for measuring project performance are more specific and relevant than those used in traditional methodologies. The Waterfall methodology measurements indicate that the project closely tracks expected costs and time, while Agile emphasizes on performance optimization and results produced.':
            'The metrics used in time and cost analysis by Agile teams for measuring project performance are more specific and relevant than those used in traditional methodologies. The Waterfall methodology measurements indicate that the project closely tracks expected costs and time, while Agile emphasizes on performance optimization and results produced.',
          'Agile produces critical metrics such as cycle time, time-to-date, bottling and output assessment, and the decision-making process driven by data. Through consistent communication with the development team, the customer should always be aware of the progress, and the combined effort will result in a higher quality product.':
            'Agile produces critical metrics such as cycle time, time-to-date, bottling and output assessment, and the decision-making process driven by data. Through consistent communication with the development team, the customer should always be aware of the progress, and the combined effort will result in a higher quality product.',
          'An Agile Framework is a powerful tool for managers, members of the team, and customers. It allows teams to solve problems such as over cost and shrinkage. The benefits of Agile vary from enhancing product quality to encouraging the team members to improve themselves professionally.':
            'An Agile Framework is a powerful tool for managers, members of the team, and customers. It allows teams to solve problems such as over cost and shrinkage. The benefits of Agile vary from enhancing product quality to encouraging the team members to improve themselves professionally.',
          'You need to know the various techniques used in Agile if you think Agile is the best way to suit your next project.':
            'You need to know the various techniques used in Agile if you think Agile is the best way to suit your next project.',
          // Successful Business
          'Business ran Successfully': 'Business ran Successfully',
          'Business Ran Successfully': 'Business Ran Successfully',
          'August 12th 2022': 'August 12th 2022',
          'True delegation and commitment will lift your business':
            'True delegation and commitment will lift your business',
          'The way how we work can be seen as a concentrated adaptation of what goes on at different scales around the software industry and in various others is one of the stimulating things at Gsquad':
            'The way how we work can be seen as a concentrated adaptation of what goes on at different scales around the software industry and in various others is one of the stimulating things at Gsquad',
          'We have to scale both the number of projects and the number of partners since we assemble squads for multiple client partners. As the future of work, we have to exemplify several best observes often thought of collectively.':
            'We have to scale both the number of projects and the number of partners since we assemble squads for multiple client partners. As the future of work, we have to exemplify several best observes often thought of collectively.',
          'In our squads, everyone in the core team needs to be flexible, autonomous, collaborative, and continually learning, whether for their possess assignments or with respect to how we work together. The organization itself needs to be constantly learning, adapting, evolving, and each group, and our “team of the team” should learn from each other.':
            'In our squads, everyone in the core team needs to be flexible, autonomous, collaborative, and continually learning, whether for their possess assignments or with respect to how we work together. The organization itself needs to be constantly learning, adapting, evolving, and each group, and our “team of the team” should learn from each other.',
          'There are many numerous diverse settings like distributed teams, new projects, client relationships, team dynamics, where projects, tasks, and deadlines include numerous individuals and dependencies. One ingredient is absolutely essential for any of these to be effectively, dependably, and indeed pleasantly that is responsibility.':
            'There are many numerous diverse settings like distributed teams, new projects, client relationships, team dynamics, where projects, tasks, and deadlines include numerous individuals and dependencies. One ingredient is absolutely essential for any of these to be effectively, dependably, and indeed pleasantly that is responsibility.',
          'To make sure each team member knows what they need to do is the only way we can scale our service and have steady learning happening at each level, we should have open lines of communication, and everybody takes obligation.':
            'To make sure each team member knows what they need to do is the only way we can scale our service and have steady learning happening at each level, we should have open lines of communication, and everybody takes obligation.',
          'Coach and allow control > Command and control':
            'Coach and allow control > Command and control',
          "Everyone strives to coach instead of command, everyone is given responsibility and authority, everyone strives to coach instead of command, everyone respects that delegation and, to memorize rather than stagnate. Let's look at a few of what that involves.":
            "Everyone strives to coach instead of command, everyone is given responsibility and authority, everyone strives to coach instead of command, everyone respects that delegation and, to memorize rather than stagnate. Let's look at a few of what that involves.",
          'At Apple, they call them the Straightforwardly Capable Individuals., there is one responsible person, for anything that needs to get done, and the one who will make beyond any doubt it happens and be responsible for the “thing”. For that concept that person, to work through, also needs to be given the related authority for action. On the off chance that anybody included can step in and overrule the capable individual, at that point it’s not a genuine designation and the organization doesn’t get the benefits of allotting and empowering duty.':
            'At Apple, they call them the Straightforwardly Capable Individuals., there is one responsible person, for anything that needs to get done, and the one who will make beyond any doubt it happens and be responsible for the “thing”. For that concept that person, to work through, also needs to be given the related authority for action. On the off chance that anybody included can step in and overrule the capable individual, at that point it’s not a genuine designation and the organization doesn’t get the benefits of allotting and empowering duty.',
          'This applies to all headings and with different partners. There needs to be a responsible person on each side, in a client-provider relationship. It’s good for all levels of a hierarchy, for every collaborator in a team, true delegation is not only for higher-ups but he also needs to let the person do the work and not micromanage over their shoulder, in case a chief delegates assignments.':
            'This applies to all headings and with different partners. There needs to be a responsible person on each side, in a client-provider relationship. It’s good for all levels of a hierarchy, for every collaborator in a team, true delegation is not only for higher-ups but he also needs to let the person do the work and not micromanage over their shoulder, in case a chief delegates assignments.',
          Precision: 'Precision',
          'when it’s shared without one clear decision-maker, when responsibility is not solidly given, or when it’s unclear who has it,  then decisions are harder to make, things start to unravel, individuals expect somebody else will pay attention of it, and the less charming errands idea almost, unclear. Projects and vital tasks drift away from the goal and / or the deadline.':
            'when it’s shared without one clear decision-maker, when responsibility is not solidly given, or when it’s unclear who has it,  then decisions are harder to make, things start to unravel, individuals expect somebody else will pay attention of it, and the less charming errands idea almost, unclear. Projects and vital tasks drift away from the goal and / or the deadline.',
          'This is also useful for everyone involved but it’s not only about deadlines; everyone can work towards their tasks and goals to the best of their abilities, When it’s clear who does what, without looking around for confirmation or pondering where to turn to for choices, it makes strides resolve and quality. It’s much easier to forget about tasks that we are not directly accountable which is especially true when everyone is very busy, in a startup for instance?':
            'This is also useful for everyone involved but it’s not only about deadlines; everyone can work towards their tasks and goals to the best of their abilities, When it’s clear who does what, without looking around for confirmation or pondering where to turn to for choices, it makes strides resolve and quality. It’s much easier to forget about tasks that we are not directly accountable which is especially true when everyone is very busy, in a startup for instance?',
          'Sometimes organizations will try to achieve a similar goal by assigning a champion, someone who will push for a project or large deliverable and feel some kind of ownership. Usually, this is more of a once-removed role, helping pave the way but with no direct responsibility, accountability, or authority, one more thing in the pile of things to do. It’s great if a DRI has the visibility and connections in an organization to also champion the project, but that’s just a nice to have, the responsibility and authority comes first.':
            'Sometimes organizations will try to achieve a similar goal by assigning a champion, someone who will push for a project or large deliverable and feel some kind of ownership. Usually, this is more of a once-removed role, helping pave the way but with no direct responsibility, accountability, or authority, one more thing in the pile of things to do. It’s great if a DRI has the visibility and connections in an organization to also champion the project, but that’s just a nice to have, the responsibility and authority comes first.',
          'Awareness Institutes': 'Awareness Institutes',
          'Deliverable or project responsibility doesn’t just have to do with taking possession of a deliverable. One person needs to know how to take the lead in the diffusion of information. The person also has to be the one able to answer questions, which are answerable for results, explain the vision, and offer a point of view on the total. The DRI ought to carry not as it were the specialist, but moreover the definitive data.':
            'Deliverable or project responsibility doesn’t just have to do with taking possession of a deliverable. One person needs to know how to take the lead in the diffusion of information. The person also has to be the one able to answer questions, which are answerable for results, explain the vision, and offer a point of view on the total. The DRI ought to carry not as it were the specialist, but moreover the definitive data.',
          'The individual who is liable for comes about moreover needs to be the one able to reply questions, clarify the vision, and offer point of view on the whole.':
            'The individual who is liable for comes about moreover needs to be the one able to reply questions, clarify the vision, and offer point of view on the whole.',
          Training: 'Training',
          'Directors got to be able to appoint and believe the individual they hand the duty to but at that point, they moreover have to empower that individual. As mentioned above, giving authority to him, but also by clearing the way as needed and by being available for help, by helping out as their position allows, by providing the resources necessary, in spite of the fact that not by taking over.':
            'Directors got to be able to appoint and believe the individual they hand the duty to but at that point, they moreover have to empower that individual. As mentioned above, giving authority to him, but also by clearing the way as needed and by being available for help, by helping out as their position allows, by providing the resources necessary, in spite of the fact that not by taking over.',
          'When the delegation of responsibility happens vertically in the organization, one of the better ways of framing is to begin seeing the work of the “superior” as the work of a coach. Too often, people will tend to take over or re-assign something, when asked a question, when a challenge is explained. They need to be able to consider the situation, to step back, and start asking questions, offering guidance, pointing out flaws in the reasoning, or suggesting alternative options. You don’t see a hockey or ball coach venturing on the field when a play is missed, not one or the other ought to directors.':
            'When the delegation of responsibility happens vertically in the organization, one of the better ways of framing is to begin seeing the work of the “superior” as the work of a coach. Too often, people will tend to take over or re-assign something, when asked a question, when a challenge is explained. They need to be able to consider the situation, to step back, and start asking questions, offering guidance, pointing out flaws in the reasoning, or suggesting alternative options. You don’t see a hockey or ball coach venturing on the field when a play is missed, not one or the other ought to directors.',
          'When manager delegate and then focus on fixing blockers instead of taking over, It’s also worth remembering that they are left with more time to concentrate on their own work. It makes everybody more successful.':
            'When manager delegate and then focus on fixing blockers instead of taking over, It’s also worth remembering that they are left with more time to concentrate on their own work. It makes everybody more successful.',
          Appointment: 'Appointment',
          "Although this logic has been around for years, before we conclude, there's presently an extra reason to work employing a concept like DRI: representative engagement. Concurring to a 2017 Gallup study on Worker Engagement, 33% of U.S. representatives are locked in, 51% are withdrawn, and as it were 16% is effectively withdrawn. That’s very low. We believe that giving them agency on their work, enabling people, making it clear what they own, giving them agency on their work, what they are accountable for, and helping them achieve those goals is a very powerful way to greatly lift team members. Our experience shows that DRI-like practices, among other things, go a long way in achieving that. Another Gallup survey appears that the most excellent overseen companies can reach upwards of 70% engagement.":
            "Although this logic has been around for years, before we conclude, there's presently an extra reason to work employing a concept like DRI: representative engagement. Concurring to a 2017 Gallup study on Worker Engagement, 33% of U.S. representatives are locked in, 51% are withdrawn, and as it were 16% is effectively withdrawn. That’s very low. We believe that giving them agency on their work, enabling people, making it clear what they own, giving them agency on their work, what they are accountable for, and helping them achieve those goals is a very powerful way to greatly lift team members. Our experience shows that DRI-like practices, among other things, go a long way in achieving that. Another Gallup survey appears that the most excellent overseen companies can reach upwards of 70% engagement.",
          Promotion: 'Promotion',
          'As we’ve clarified, there are strong reasons for such improves, namely team alignment, more noteworthy chances of making due dates, more efficiency, and a better, more productive work environment.':
            'As we’ve clarified, there are strong reasons for such improves, namely team alignment, more noteworthy chances of making due dates, more efficiency, and a better, more productive work environment.',
          'Past these venture benefits, there’s too a more all-encompassing surrounding for person obligation; how else are you going to evolve and lift your company? Responsibility, responsibility, organization, engagement are all positives for the objectives of the company and a more joyful, more steady, dependable squad.':
            'Past these venture benefits, there’s too a more all-encompassing surrounding for person obligation; how else are you going to evolve and lift your company? Responsibility, responsibility, organization, engagement are all positives for the objectives of the company and a more joyful, more steady, dependable squad.',
          // end
          // social banner
          'Curious to learn more?': 'Curious to learn more?',
          'Check out our socials!': 'Check out our socials!',
          'Follow us on Linkedin': 'Follow us on Linkedin',

          // Legal Mentions
          // title 1
          Éditeur: 'Editor',
          // Body 1
          'Le présent site web, accessible à l’adresse': 'This website, accessible at',
          'est réalisé par la Société Falcon Consulting, inscrite au registre du commerce de Créteil sous le numéro B 813 509 536, dont le siège social est situé au 53 avenue Victor Hugo - 94290 Villeneuve Le Roi.':
            'is carried out by Falcon Consulting, registered in the Créteil commercial register under number B 813 509 536, whose head office is located at 53 avenue Victor Hugo - 94290 Villeneuve Le Roi.',
          'Le site appartient au groupe Falcon Consulting. En France, c’est la Société Falcon Consulting au capital de 10 000 euros, inscrite au registre du commerce de Créteil sous le numéro B 813 509 536 et numéro TVA intracommunautaire FR84813509536, dont le siège social est situé au 53 avenue Victor Hugo - 94290 Villeneuve Le Roi, qui est reconnu comme propriétaire.':
            'The site belongs to the Falcon Consulting group. In France, it is Falcon Consulting with a capital of 10,000 euros, registered in the Créteil commercial register under number B 813 509 536 and intra-community VAT number FR84813509536, whose head office is located at 53 avenue Victor Hugo - 94290 Villeneuve Le Roi, who is recognized as the owner.',
          'Le groupe international Falcon Consulting est un ensemble d’ESN toutes spécialisées dans les services informatiques, autour nouvelles technologies logicielles et digitales.':
            'The international group Falcon Consulting is a set of ESN all specialized in IT services, around new software and digital technologies.',
          'Le directeur de la publication du Site Web est la société Falcon Consulting elle-même.':
            'The publishing director of the Website is Falcon Consulting itself.',

          // Tilte 2
          'Contenu du Site': 'Content of the Site',
          // Body 2
          "Le contenu du site la structure générale, les textes, les images, animées ou non, et les sons dont le site est composé sont la propriété exclusive de la société Falcon Consulting. Toute représentation totale ou partielle de ce Site et de son Contenu, par quelques procédés que ce soient, sans l'autorisation pré alable expresse de la société Falcon Consulting est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété intellectuelle.":
            'The content of the site, the general structure, the texts, the images, animated or not, and the sounds of which the site is composed are the exclusive property of the company Falcon Consulting. Any total or partial representation of this Site and its Content, by any means whatsoever, without the express prior authorization of Falcon Consulting is prohibited and constitutes an infringement punishable by articles L.335-2 and following of the Intellectual Property Code.',
          "Le site accessible à l'adresse": 'The site accessible at',
          'est hébergé par la société GoDaddy.com, dont le siège social est situé au 14455 North Hayden Rd., Suite 219, Scottsdale, AZ 85260.':
            'is hosted by GoDaddy.com, whose main office is at 14455 North Hayden Rd., Suite 219, Scottsdale, AZ 85260.',
          'Email :': 'E-mail :',
          'Téléphone :': 'Telephone :',
          // Title 3
          "Licence d'utilisation du Contenu du Site": 'License to use Site Content',
          // Body 3
          "Du seul fait de sa connexion au site, l'utilisateur reconnaît accepter de la société Falcon Consulting, une licence 'usage du Contenu du Site strictement limitée aux conditions impératives suivantes:":
            'By the mere fact of connecting to the site, the user acknowledges accepting from Falcon Consulting, a license to use the Content of the Site strictly limited to the following mandatory conditions:',
          "La présente licence est accordée à tire non exclusif et n'est pas transmissible.":
            'This license is granted on a non-exclusive basis and is not transferable.',
          "Le droit 'usage conféré à l'utilisateur / internaute est personnel et privé : c'est-à-dire que toute reproduction du contenu du site sur un quelconque support pour un usage collectif ou professionnel, même en interne dans l'entreprise, est prohibée. Il en est de même pour toute communication de ce contenu par voie électronique, même diffusé en intranet ou en extranet d'entreprise.":
            'The right of use granted to the user / Internet user is personal and private: that is to say that any reproduction of the content of the site on any medium whatsoever for collective or professional use, even internally within the company, is prohibited. The same applies to any communication of this content by electronic means, even distributed on the intranet or company extranet.',
          "Le droit 'usage comprend seulement l'autorisation de consulter le site et son contenu.":
            'The right of use includes only the authorization to consult the site and its content.',
          "Cet usage comprend seulement l'autorisation de reproduire pour stockage aux fins de représentation sur écran monoposte et de reproduction en un exemplaire, pour copie de  sauvegarde et tirage papier. Tout autre usage est soumis à l'autorisation expresse préalable de la société Falcon Consulting. La violation de ces dispositions soumet le contrevenant et toute personne responsable aux peines pénales et civiles prévues par la loi française.":
            'This use includes only the authorization to reproduce for storage for the purposes of representation on a single-user screen and reproduction in one copy, for backup copy and hard copy. Any other use is subject to the express prior authorization of Falcon Consulting. Violation of these provisions subjects the offender and any person responsible to the criminal and civil penalties provided for by French law.',
          //  Title 4
          'Loi informatique, fichiers et libertés': 'IT law, files and freedoms',
          // Body 4
          'La société Falcon Consulting est le responsable du traitement des donees collectees sur son site via :':
            'Falcon Consulting is responsible for processing the data collected on its site via:',
          "L'utilisateur est notamment informé que conformément à l'article 32 de la loi Informatique et libertés du 6 janvier 1978 modifiée, les informations qu'il communique par les formulaires présents sur le site de la société Falcon Consulting sot nécessaires pour répondre à sa demande et sont destines aux services en charge de répondre à sa demande à des fins de suivi de cette demande.":
            'The user is informed in particular that in accordance with article 32 of the amended Data Protection Act of 6 January 1978, the information he communicates through the forms on the Falcon Consulting website is necessary to respond to his request. and are intended for the services in charge of responding to his request for the purpose of monitoring this request.',
          "Conformément aux dispositions des articles 39 et 40 de la loi « Informatique et Libertés » du 6 janvier 1978 modifiée en 2004, l'utilisateur bénéficie d'un droit d'accès, de rectification, de mise à jour et 'effacement des informations qui le concernent, qu'il peut exercer en s'adressant à l'adresse mail":
            "In accordance with the provisions of articles 39 and 40 of the law 'Informatique et Libertés' of January 6, 1978 amended in 2004, the user has the right to access, rectify, update and delete information which concern, which he can exercise by contacting the email address",
          "ou par courier à l'adresse de la société:": "or by post to the company's address:",
          "Falcon Consulting, 53 Avenue Victor Hugo, 94290 Villeneuve Le Roi, France, service «Droit des personnes » et en joignant la copie de son justificatif d'identité.":
            'Falcon Consulting, 53 Avenue Victor Hugo, 94290 Villeneuve Le Roi, France, "Personal Rights" department and enclosing a copy of their proof of identity.',
          "Conformément aux dispositions de 'article 38 de la loi « Informatique et Libertés » du 6 ianvier 1978 modifiée en 2004, l'utilisateur put également 'opposer, pour des motifs légitimes à ce que ses données fassent l'objet d' un traitement et sans motif et sans frais, à ce que ses données soient utilisées à des fins de prospection commerciale":
            'In accordance with the provisions of article 38 of the law "Informatique et Libertés" of January 6, 1978 amended in 2004, the user could also oppose, for legitimate reasons, that his data be subject to processing and without reason and free of charge, for his data to be used for commercial prospecting purposes',
          "L'utilisateur est informé que lors de ses visites sur le site":
            'The user is informed that during his visits to the site',
          ", un cookie peut 'installer automatiquement sur son logiciel de navigation.":
            ', a cookie can be installed automatically on its navigation software.',
          "Le cookie est un bloc de données qui ne permet pas d'identifier les utilisateurs, mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site. Le paramétrage du logiciel de navigation permet 'informer de la présence de cookie et éventuellement, de la refuser de la manière décrite à l'adresse suivante":
            'The cookie is a block of data that does not allow users to be identified, but is used to record information relating to their browsing on the site. The configuration of the navigation software makes it possible to inform of the presence of cookies and possibly to refuse them in the manner described at the following address',
          "L'utilisateur dispose d'un droit d'accès, de retrait et de modification des données à caractère personnel communiques par le bias des cookies dans les conditions indiquées ci-dessus.":
            'The user has a right to access, withdraw and modify personal data communicated through cookies under the conditions indicated above.',
          "L'utilisateur du site": "L'utilisateur du site",
          "est tenu de respecter les dispositions de la loi Informatique et libertés du 6 janvier 1978 modifiée dont la violation est passible de sanctions pénales. Il doit notamment s' abstenir, s'agissant des informations nominatives auxquelles il accède, de toute collecte, de toute utilisation détournée, et d'une manière générale, de tout acte susceptible de porter atteinte à la vie privée ou à la réputation des personnes.":
            'is required to comply with the provisions of the amended Data Protection Act of January 6, 1978, the violation of which is punishable by criminal penalties. In particular, he must refrain, with regard to the personal information to which he has access, from any collection, from any misuse, and in general, from any act likely to infringe the privacy or reputation of individuals.',

          //Title 5
          'Liens hypertextes': 'Hypertext links',
          // Body 5
          "Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres resources présentes sur le réseau Intemet, ne sauraient engager la responsabilité de la société Falcon Consulting. Les utilisateurs/internautes du site ne peuvent mettre en place un lien hypertexte en direction de ce site sans l'autorisation expresse et préalable de la société Falcon Consulting.":
            'The hypertext links set up within the framework of this site in the direction of other resources present on the Internet network, could not engage the responsibility of the company Falcon Consulting. Users/Internet users of the site may not set up a hypertext link to this site without the express prior authorization of Falcon Consulting.',

          //Title 6
          "Autorisation de reproduction de contenus et de mise en placed'hyperliens":
            'Authorization to reproduce content and to place hyperlinks',
          // Body 6
          "Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres resources présentes sur le réseau Intemet, ne sauraient engager la responsabilité de la société Falcon Consulting. Les utilisateurs / internautes du site ne peuvent mettre en place un lien hypertexte en direction de ce site sans l'autorisation expresse et préalable de la société Falcon Consulting.":
            'The hypertext links set up within the framework of this site in the direction of other resources present on the Internet network, could not engage the responsibility of the company Falcon Consulting. The users / Internet users of the site cannot set up a hypertext link to this site without the express and prior authorization of the company Falcon Consulting.',

          //Title 7
          'Respect de la vie privée': 'Respect for privacy',

          // Body 7
          "Falcon Consulting respecte votre vie privée et s'engage à la protéger. La présente déclaration est destinée à vous informer de notre politique et de nos pratiques en matière de respect de la vie privée, ainsi que des choix que vous pouvez opérer sur la manière dont vos coordonnées sont recueillies en ligne et comment elles sont utilisées.":
            'Falcon Consulting respects your privacy and is committed to protecting it. This statement is intended to inform you of our privacy policy and practices, and the choices you can make about the way your contact information is collected online and how it is used.',
          'Le site web est régi par le Droit français. Notre activité professionnelle est répartie selon le pays dans lequel le contrat de prestation est signé. En cas de litige résultant de votre utilisation de note site web, seuls les Tribunaux français sont compétents.':
            'The website is governed by French law. Our professional activity is divided according to the country in which the service contract is signed. In the event of a dispute resulting from your use of our website, only the French courts have jurisdiction.',
          'Tous droits réservés © -': 'All rights reserved © -',
          // Privacy Policy
          // Title 1
          'Falcon Consulting Policy Document': 'Falcon Consulting Policy Document',
          // Body 1
          'Information Security policy': 'Information Security policy',
          'Privacy Policy': 'Privacy Policy',
          'Acceptable Use policy': 'Acceptable Use policy',
          'Business Continuity/Disaster recovery Policy':
            'Business Continuity/Disaster recovery Policy',
          'Hiring and Termination Policy Including background checks':
            'Hiring and Termination Policy Including background checks',
          'Encryption Policy': 'Encryption Policy',
          'Incident response Policy (Internal, External, Web)':
            'Incident response Policy (Internal, External, Web)',
          'Security awareness training programs and topics covered':
            'Security awareness training programs and topics covered',
          'Third party management programs': 'Third party management programs',
          'System backup policy and program': 'System backup policy and program',
          'Falcon Consulting maintains and communicates an Information Security Program consisting of topic-specific policies, standards, procedures and guidelines that:':
            'Falcon Consulting maintains and communicates an Information Security Program consisting of topic-specific policies, standards, procedures and guidelines that:',
          'Serve to protect the Confidentiality, Integrity, and Availability of the Information Resources maintained within the organization using administrative, physical and technical controls.':
            'Serve to protect the Confidentiality, Integrity, and Availability of the Information Resources maintained within the organization using administrative, physical and technical controls.',
          'Provide value to the way we conduct business and support institutional objectives. Comply with all regulatory and legal requirements, including:':
            'Provide value to the way we conduct business and support institutional objectives. Comply with all regulatory and legal requirements, including:',
          'HIPAA Security Rule': 'HIPAA Security Rule',
          'State breach notification laws,': 'State breach notification laws,',
          'PCI Data Security Standard,': 'PCI Data Security Standard,',
          'Information Security best practices, including ISO 27002 and NIST CSF,':
            'Information Security best practices, including ISO 27002 and NIST CSF,',
          'Contractual agreements,': 'Contractual agreements,',
          'All other applicable federal and state laws or regulations. The information security program is reviewed no less than annually or upon significant changes to the information security environment.':
            'All other applicable federal and state laws or regulations. The information security program is reviewed no less than annually or upon significant changes to the information security environment.',
          'At Falcon consulting, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by falconconsulting and how we use it.':
            'At Falcon consulting, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by falconconsulting and how we use it.',
          'If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.':
            'If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.',
          'This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in falconconsulting. This policy is not applicable to any information collected offline or via channels other than this website.':
            'This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in falconconsulting. This policy is not applicable to any information collected offline or via channels other than this website.',
          Consent: 'Consent',
          'By using our website, you hereby consent to our Privacy Policy and agree to its terms.':
            'By using our website, you hereby consent to our Privacy Policy and agree to its terms.',
          'Information we collect': 'Information we collect',
          'The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.':
            'The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.',
          'If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.':
            'If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.',
          'When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.':
            'When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.',
          'How we use your information': 'How we use your information',
          'We use the information we collect in various ways, including to:':
            'We use the information we collect in various ways, including to:',
          'Provide, operate, and maintain our website':
            'Provide, operate, and maintain our website',
          'Improve, personalize, and expand our website':
            'Improve, personalize, and expand our website',
          'Understand and analyze how you use our website':
            'Understand and analyze how you use our website',
          'Develop new products, services, features, and functionality':
            'Develop new products, services, features, and functionality',
          'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes':
            'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes',
          'Send you emails': 'Send you emails',
          'Find and prevent fraud': 'Find and prevent fraud',
          'Log Files': 'Log Files',
          "Falcon Consulting follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.":
            "Falcon Consulting follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.",
          'Cookies and Web Beacons': 'Cookies and Web Beacons',
          "Like any other website, falconconsulting uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.":
            "Like any other website, falconconsulting uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
          'Advertising Partners Privacy Policies': 'Advertising Partners Privacy Policies',
          'You may consult this list to find the Privacy Policy for each of the advertising partners of falconconsulting.':
            'You may consult this list to find the Privacy Policy for each of the advertising partners of falconconsulting.',
          "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on falconconsulting, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.":
            "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on falconconsulting, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.",
          'Note that falconconsulting has no access to or control over these cookies that are used by third-party advertisers.':
            'Note that falconconsulting has no access to or control over these cookies that are used by third-party advertisers.',
          'Third Party Privacy Policies': 'Third Party Privacy Policies',
          "falconconsulting's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.":
            "falconconsulting's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.",
          "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.":
            "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.",
          'CCPA Privacy Rights (Do Not Sell My Personal Information)':
            'CCPA Privacy Rights (Do Not Sell My Personal Information)',
          'Under the CCPA, among other rights, California consumers have the right to:':
            'Under the CCPA, among other rights, California consumers have the right to:',
          "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.":
            "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
          'Request that a business delete any personal data about the consumer that a business has collected.':
            'Request that a business delete any personal data about the consumer that a business has collected.',
          "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.":
            "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
          'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.':
            'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.',
          'GDPR Data Protection Rights': 'GDPR Data Protection Rights',
          'We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:':
            'We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:',
          'The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.':
            'The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.',
          'The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.':
            'The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.',
          'The right to erasure – You have the right to request that we erase your personal data, under certain conditions.':
            'The right to erasure – You have the right to request that we erase your personal data, under certain conditions.',
          'The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.':
            'The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.',
          'The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.':
            'The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.',
          'The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.':
            'The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.',
          'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.':
            'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.',
          "Children's Information": "Children's Information",
          'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.':
            'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.',
          'falconconsulting does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.':
            'falconconsulting does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.',
          'This policy applies to the use of information, electronic and computing devices, and network resources to conduct Falcon Consulting business or interact with internal networks and business systems, whether owned or leased by Falcon Consulting, the employee, or a third party. All employees, contractors, consultants, temporary, and other workers at Falcon Consulting and its subsidiaries are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with Falcon Consulting.':
            'This policy applies to the use of information, electronic and computing devices, and network resources to conduct Falcon Consulting business or interact with internal networks and business systems, whether owned or leased by Falcon Consulting, the employee, or a third party. All employees, contractors, consultants, temporary, and other workers at Falcon Consulting and its subsidiaries are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with Falcon Consulting.',
          'General Use and Ownership': 'General Use and Ownership',
          'Falcon Consulting proprietary information stored on electronic and computing devices whether owned or leased by Falcon Consulting, the employee or a third party, remains the sole property of Falcon Consulting. You must ensure through legal or technical means that proprietary information is protected in accordance with the Data Protection Standard.':
            'Falcon Consulting proprietary information stored on electronic and computing devices whether owned or leased by Falcon Consulting, the employee or a third party, remains the sole property of Falcon Consulting. You must ensure through legal or technical means that proprietary information is protected in accordance with the Data Protection Standard.',
          'You have a responsibility to promptly report the theft, loss or unauthorized disclosure of Falcon Consulting proprietary information.':
            'You have a responsibility to promptly report the theft, loss or unauthorized disclosure of Falcon Consulting proprietary information.',
          'You may access, use or share Falcon Consulting proprietary information only to the extent it is authorized and necessary to fulfill your assigned job duties.':
            'You may access, use or share Falcon Consulting proprietary information only to the extent it is authorized and necessary to fulfill your assigned job duties.',
          'Employees are responsible for exercising good judgment regarding the reasonableness of personal use. Individual departments are responsible for creating guidelines concerning personal use of Internet/Intranet/Extranet systems. In the absence of such policies, employees should be guided by departmental policies on personal use, and if there is any uncertainty, employees should consult their supervisor or manager.':
            'Employees are responsible for exercising good judgment regarding the reasonableness of personal use. Individual departments are responsible for creating guidelines concerning personal use of Internet/Intranet/Extranet systems. In the absence of such policies, employees should be guided by departmental policies on personal use, and if there is any uncertainty, employees should consult their supervisor or manager.',
          'For security and network maintenance purposes, authorized individuals within Falcon Consulting may monitor equipment, systems and network traffic at any time, per Audit Policy.':
            'For security and network maintenance purposes, authorized individuals within Falcon Consulting may monitor equipment, systems and network traffic at any time, per Audit Policy.',
          'Falcon Consulting reserves the right to audit networks and systems on a periodic basis to ensure compliance with this policy.':
            'Falcon Consulting reserves the right to audit networks and systems on a periodic basis to ensure compliance with this policy.',
          'Security and Proprietary Information': 'Security and Proprietary Information',
          'All mobile and computing devices that connect to the internal network must comply with the Minimum Access Policy.':
            'All mobile and computing devices that connect to the internal network must comply with the Minimum Access Policy.',
          'System level and user level passwords must comply with the Password Policy. Providing access to another individual, either deliberately or through failure to secure its access, is prohibited.':
            'System level and user level passwords must comply with the Password Policy. Providing access to another individual, either deliberately or through failure to secure its access, is prohibited.',
          'All computing devices must be secured with a password-protected screensaver with the automatic activation feature set to 10 minutes or less. You must lock the screen or log off when the device is unattended.':
            'All computing devices must be secured with a password-protected screensaver with the automatic activation feature set to 10 minutes or less. You must lock the screen or log off when the device is unattended.',
          'Postings by employees from a Falcon Consulting email address to newsgroups should contain a disclaimer stating that the opinions expressed are strictly their own and not necessarily those of Falcon Consulting, unless posting is in the course of business duties.':
            'Postings by employees from a Falcon Consulting email address to newsgroups should contain a disclaimer stating that the opinions expressed are strictly their own and not necessarily those of Falcon Consulting, unless posting is in the course of business duties.',
          'Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain malware.':
            'Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain malware.',
          'Business Continuity Plan': 'Business Continuity Plan',
          'Business Continuity focuses on sustaining The Falcon Consulting’s critical business processes during and after a disruption.':
            'Business Continuity focuses on sustaining The Falcon Consulting’s critical business processes during and after a disruption.',
          'Falcon Consulting has created and implemented a Business Continuity Plan (“BCP”).':
            'Falcon Consulting has created and implemented a Business Continuity Plan (“BCP”).',
          'The BCP is periodically tested and the results should be shared with executive management.':
            'The BCP is periodically tested and the results should be shared with executive management.',
          'The BCP is reviewed and updated upon any relevant change to the organization, at the conclusion of plan testing, or least annually.':
            'The BCP is reviewed and updated upon any relevant change to the organization, at the conclusion of plan testing, or least annually.',
          'The BCP is communicated and distributed to all relevant internal personnel and executive management.':
            'The BCP is communicated and distributed to all relevant internal personnel and executive management.',
          'Business continuity planning includes:': 'Business continuity planning includes:',
          'The safety and security of personnel is the first priority;':
            'The safety and security of personnel is the first priority;',
          'An adequate management structure is in place to prepare for, mitigate and respond to a disruptive event using personnel with the necessary authority, experience, and competence;':
            'An adequate management structure is in place to prepare for, mitigate and respond to a disruptive event using personnel with the necessary authority, experience, and competence;',
          'Documented plans, response and recovery procedures are developed and approved, detailing how the organization will manage a disruptive event.':
            'Documented plans, response and recovery procedures are developed and approved, detailing how the organization will manage a disruptive event.',
          'The BCP include, at a minimum:': 'The BCP include, at a minimum:',
          'A risk assessment for critical business processes and operations (Business Impact Analysis);':
            'A risk assessment for critical business processes and operations (Business Impact Analysis);',
          'An inventory of critical systems and records, and their dependencies;':
            'An inventory of critical systems and records, and their dependencies;',
          'Requirements for ensuring information security throughout the process;':
            'Requirements for ensuring information security throughout the process;',
          'Identification of supply chain relationships and the organization’s role to support critical infrastructure;':
            'Identification of supply chain relationships and the organization’s role to support critical infrastructure;',
          'Processes to ensure the safety of personnel;':
            'Processes to ensure the safety of personnel;',
          'Communication strategies for communications both inside and outside the organization;':
            'Communication strategies for communications both inside and outside the organization;',
          'Mitigation strategies and safeguards to reduce impact;':
            'Mitigation strategies and safeguards to reduce impact;',
          'Strategies to address and limit the reputational impact from an event':
            'Strategies to address and limit the reputational impact from an event',
          'Contingency plans for different types of disruption events;':
            'Contingency plans for different types of disruption events;',
          'Protection and availability of plan documentation;':
            'Protection and availability of plan documentation;',
          'Procedures for plan tests, review, and updates.':
            'Procedures for plan tests, review, and updates.',
          'Disaster recovery Policy': 'Disaster recovery Policy',
          'Disaster Recovery focuses on restoring the technology systems that support both critical and day-to-day business operations.':
            'Disaster Recovery focuses on restoring the technology systems that support both critical and day-to-day business operations.',
          'Falcon consulting has created and implement a Disaster Recovery Plan (“DRP”) to support business objectives outlined in the (BCP/critical processes identified by a Business Impact Analysis).':
            'Falcon consulting has created and implement a Disaster Recovery Plan (“DRP”) to support business objectives outlined in the (BCP/critical processes identified by a Business Impact Analysis).',
          'The DRP must be tested annually, at a minimum.':
            'The DRP must be tested annually, at a minimum.',
          'The DRP must be reviewed and updated upon any relevant change to IT Infrastructure, at the conclusion of plan testing, or least annually.':
            'The DRP must be reviewed and updated upon any relevant change to IT Infrastructure, at the conclusion of plan testing, or least annually.',
          'The DRP must be communicated and distributed to all relevant internal personnel and executive management.':
            'The DRP must be communicated and distributed to all relevant internal personnel and executive management.',
          'The Falcon consulting DRP include at a minimum:':
            'The Falcon consulting DRP include at a minimum:',
          'Roles and responsibilities for implementing the disaster recovery plan;':
            'Roles and responsibilities for implementing the disaster recovery plan;',
          'List of potential risks to critical systems and sensitive information;':
            'List of potential risks to critical systems and sensitive information;',
          'Procedures for reporting disaster events, event escalation, recovery of critical operations, and resumption of normal operations;':
            'Procedures for reporting disaster events, event escalation, recovery of critical operations, and resumption of normal operations;',
          'Requirements for ensuring information security throughout the process;':
            'Requirements for ensuring information security throughout the process;',
          'An inventory of backups and offsite storage locations;':
            'An inventory of backups and offsite storage locations;',
          'Contingency plans for different types of disruption events;':
            'Contingency plans for different types of disruption events;',
          'Protection and availability of plan documentation;':
            'Protection and availability of plan documentation;',
          'Procedures for plan tests, review, and updates.':
            'Procedures for plan tests, review, and updates.',
          Waivers: 'Waivers',
          'Waivers from certain policy provisions may be sought following the Falcon Consulting Waiver Process.':
            'Waivers from certain policy provisions may be sought following the Falcon Consulting Waiver Process.',
          Enforcement: 'Enforcement',
          'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.':
            'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.',
          'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.':
            'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.',
          'Hiring and Termination Policy with Background Checks':
            'Hiring and Termination Policy with Background Checks',
          'Hiring policy': 'Hiring policy',
          OVERVIEW: 'OVERVIEW',
          "Falcon Consulting believes that hiring qualified personnel to fill positions in the different departments contributes to the company's overall success. Each employee is therefore hired with the objective of making a significant contribution to Falcon Consulting.":
            "Falcon Consulting believes that hiring qualified personnel to fill positions in the different departments contributes to the company's overall success. Each employee is therefore hired with the objective of making a significant contribution to Falcon Consulting.",
          PURPOSE: 'PURPOSE',
          'The hiring policy has been established to ensure Falcon Consulting has the opportunity to attract the best available staff for all vacant positions.':
            'The hiring policy has been established to ensure Falcon Consulting has the opportunity to attract the best available staff for all vacant positions.',
          SCOPE: 'SCOPE',
          'This hiring policy applies to all employees of Falcon Consulting who are involved in the hiring process.':
            'This hiring policy applies to all employees of Falcon Consulting who are involved in the hiring process.',
          RESPONSIBILITY: 'RESPONSIBILITY',
          'It shall be the responsibility of the Human Resources (HR) department to implement this policy and to monitor its performance.':
            'It shall be the responsibility of the Human Resources (HR) department to implement this policy and to monitor its performance.',
          'It is the responsibility of Managers and Supervisors to ensure that:':
            'It is the responsibility of Managers and Supervisors to ensure that:',
          'Staffing levels for their department are determined and authorized;':
            'Staffing levels for their department are determined and authorized;',
          'All roles have current position descriptions that specify role requirements and selection criteria.':
            'All roles have current position descriptions that specify role requirements and selection criteria.',
          'It is the responsibility of the HR department to ensure that:':
            'It is the responsibility of the HR department to ensure that:',
          'All Managers are aware of their responsibilities in the recruitment and selection process;':
            'All Managers are aware of their responsibilities in the recruitment and selection process;',
          'Managers are given continuous support and guidance in regard to recruitment and selection issues.':
            'Managers are given continuous support and guidance in regard to recruitment and selection issues.',
          'POLICY AND PROCEDURES': 'POLICY AND PROCEDURES',
          'In hiring the most qualified candidates for positions, the following process should be followed.':
            'In hiring the most qualified candidates for positions, the following process should be followed.',
          'Staff request': 'Staff request',
          'When a position (newly created or replacement, continuing or term position) needs to be filled or extended, a staff request form must be completed and authorized.':
            'When a position (newly created or replacement, continuing or term position) needs to be filled or extended, a staff request form must be completed and authorized.',
          'Requests must be submitted by the supervisor or service manager and forwarded to the HR department:':
            'Requests must be submitted by the supervisor or service manager and forwarded to the HR department:',
          'Position title;': 'Position title;',
          'Hours/shift teams of the position;': 'Hours/shift teams of the position;',
          'The exempt or non-exempt status of the position;':
            'The exempt or non-exempt status of the position;',
          'Reason for the opening;': 'Reason for the opening;',
          'Duties and essential qualifications of the position (or a current position description may be attached);':
            'Duties and essential qualifications of the position (or a current position description may be attached);',
          'Any special instructions relating to advertising on recruitment.':
            'Any special instructions relating to advertising on recruitment.',
          'Job description': 'Job description',
          'A job description describes the areas of responsibility and accountability within a department. When a position is vacant, it is appropriate to review and, if necessary, update the job description and task description to ensure that it is up to date. Professional qualifications should also be reviewed. The HR department can assist in updating work descriptions.':
            'A job description describes the areas of responsibility and accountability within a department. When a position is vacant, it is appropriate to review and, if necessary, update the job description and task description to ensure that it is up to date. Professional qualifications should also be reviewed. The HR department can assist in updating work descriptions.',
          'New or modified positions will be evaluated by the HR department in order to determine a salary range corresponding to the underlying responsibilities.':
            'New or modified positions will be evaluated by the HR department in order to determine a salary range corresponding to the underlying responsibilities.',
          Meetings: 'Meetings',
          'HR will arrange a meeting with the hiring manager before posting a job offer. The objective of this meeting is to learn more about the position, requirements and profile of the ideal candidate. The recruitment strategy will be defined during this meeting and expectations will be established with all stakeholders.':
            'HR will arrange a meeting with the hiring manager before posting a job offer. The objective of this meeting is to learn more about the position, requirements and profile of the ideal candidate. The recruitment strategy will be defined during this meeting and expectations will be established with all stakeholders.',
          'Job postings': 'Job postings',
          "Once the position is approved and the job description is finalized (if applicable), the HR department will prepare the job posting. HR will create job postings that briefly describe the job opening and communicate Falcon Consulting's brand.":
            "Once the position is approved and the job description is finalized (if applicable), the HR department will prepare the job posting. HR will create job postings that briefly describe the job opening and communicate Falcon Consulting's brand.",
          'The job posting will be prepared based on the job description and any special requirements detailed on the staff request. It may also include preferred qualifications that may enhance performance in the position. These would be considered in the event that two candidates are considered relatively equal.':
            'The job posting will be prepared based on the job description and any special requirements detailed on the staff request. It may also include preferred qualifications that may enhance performance in the position. These would be considered in the event that two candidates are considered relatively equal.',
          "All job openings will be posted concurrently on Falcon Consulting's intranet and externally with sources appropriate for the position being filled. Jobs will remain posted until the position is filled.":
            "All job openings will be posted concurrently on Falcon Consulting's intranet and externally with sources appropriate for the position being filled. Jobs will remain posted until the position is filled.",
          'All qualified candidates are encouraged to apply for positions. As the company strives to be an equal opportunity employer, all employment postings will encourage applications from qualified Aboriginal People, or other persons from a visible minority group, persons with disabilities and women. Applicants who self-identify in their cover letter will be given special consideration.':
            'All qualified candidates are encouraged to apply for positions. As the company strives to be an equal opportunity employer, all employment postings will encourage applications from qualified Aboriginal People, or other persons from a visible minority group, persons with disabilities and women. Applicants who self-identify in their cover letter will be given special consideration.',
          'The HR department will be responsible for tracking all applicants and retaining applications and resumes as required.':
            'The HR department will be responsible for tracking all applicants and retaining applications and resumes as required.',
          'Termination Policy': 'Termination Policy',
          Purpose: 'Purpose',
          'Falcon Consulting ensures that employee terminations, including voluntary and involuntary terminations and terminations due to the death of an employee, are handled in a professional manner with minimal disruption to the workplace.':
            'Falcon Consulting ensures that employee terminations, including voluntary and involuntary terminations and terminations due to the death of an employee, are handled in a professional manner with minimal disruption to the workplace.',
          'At-Will Employment': 'At-Will Employment',
          'Employment with Falcon Consulting is voluntary and subject to termination by the employee or Falcon Consulting at will, with or without cause, and with or without notice, at any time. Nothing in these policies shall be interpreted to be in conflict with or to eliminate or modify in any way the employment-at-will status of Falcon Consulting employees.':
            'Employment with Falcon Consulting is voluntary and subject to termination by the employee or Falcon Consulting at will, with or without cause, and with or without notice, at any time. Nothing in these policies shall be interpreted to be in conflict with or to eliminate or modify in any way the employment-at-will status of Falcon Consulting employees.',
          'Voluntary Terminations': 'Voluntary Terminations',
          'A voluntary termination of employment occurs when an employee submits a written or verbal notice of resignation to his or her supervisor.':
            'A voluntary termination of employment occurs when an employee submits a written or verbal notice of resignation to his or her supervisor.',
          Procedures: 'Procedures',
          "Employees are requested to provide a minimum of three weeks' notice of their intention to separate from the company to allow a reasonable amount of time to transfer ongoing workloads. The employee should provide a written resignation notification to his or her manager.":
            "Employees are requested to provide a minimum of three weeks' notice of their intention to separate from the company to allow a reasonable amount of time to transfer ongoing workloads. The employee should provide a written resignation notification to his or her manager.",
          "Upon receipt of an employee's resignation, the manager will notify the human resource (HR) department by sending a copy of the resignation letter and any other pertinent information (i.e., employee's reason for leaving, last day of work).":
            "Upon receipt of an employee's resignation, the manager will notify the human resource (HR) department by sending a copy of the resignation letter and any other pertinent information (i.e., employee's reason for leaving, last day of work).",
          "The HR department will coordinate the employee's out-processing. This process will include the employee's returning all company property (computers, documentation, keys, etc.); a review of the employee's post termination benefits status; and the employee's completion of an exit interview.":
            "The HR department will coordinate the employee's out-processing. This process will include the employee's returning all company property (computers, documentation, keys, etc.); a review of the employee's post termination benefits status; and the employee's completion of an exit interview.",
          "The employee's manager will complete a Supervisory Termination Summary and deliver the completed form to HR.":
            "The employee's manager will complete a Supervisory Termination Summary and deliver the completed form to HR.",
          'Employees who possess a security clearance (security codes to the building, computer passwords, etc.) must meet with administration for a debriefing no later than their last day of employment.':
            'Employees who possess a security clearance (security codes to the building, computer passwords, etc.) must meet with administration for a debriefing no later than their last day of employment.',
          'Involuntary Terminations': 'Involuntary Terminations',
          'An involuntary termination of employment, including layoffs of over 30 days, is a  management-initiated dismissal with or without cause. The inability of an employee to perform the essential functions of his or her job with or without a reasonable accommodation may also result in an involuntary termination. An employee may also be discharged for any legal reason, including but not limited to: misconduct, tardiness, absenteeism, unsatisfactory performance or inability to perform.':
            'An involuntary termination of employment, including layoffs of over 30 days, is a  management-initiated dismissal with or without cause. The inability of an employee to perform the essential functions of his or her job with or without a reasonable accommodation may also result in an involuntary termination. An employee may also be discharged for any legal reason, including but not limited to: misconduct, tardiness, absenteeism, unsatisfactory performance or inability to perform.',
          Procedures: 'Procedures',
          "Before any action is taken to involuntarily discharge an employee, the employee's manager must request a review by HR and the employee's immediate supervisor.":
            "Before any action is taken to involuntarily discharge an employee, the employee's manager must request a review by HR and the employee's immediate supervisor.",
          "The termination review staff will be responsible for reviewing the circumstances and determining if discharge is warranted. If the staff recommends discharge, the employee's manager and an HR representative will notify the employee. The employee's manager should complete an Employee Change Form and notify HR and payroll of the last day worked by the employee.":
            "The termination review staff will be responsible for reviewing the circumstances and determining if discharge is warranted. If the staff recommends discharge, the employee's manager and an HR representative will notify the employee. The employee's manager should complete an Employee Change Form and notify HR and payroll of the last day worked by the employee.",
          'Death of an Employee': 'Death of an Employee',
          'A termination due to the death of an employee will be made effective as of the date of death.':
            'A termination due to the death of an employee will be made effective as of the date of death.',
          "Upon receiving notification of the death of an employee, the employee's manager should immediately notify HR.":
            "Upon receiving notification of the death of an employee, the employee's manager should immediately notify HR.",
          'The benefits administrator will process all appropriate beneficiary payments from the various benefits plans.':
            'The benefits administrator will process all appropriate beneficiary payments from the various benefits plans.',
          "The employee's manager should ensure that the payroll office receives the deceased employee's timecard.":
            "The employee's manager should ensure that the payroll office receives the deceased employee's timecard.",
          'Final Pay': 'Final Pay',
          "An employee who resigns or is discharged will be paid through the last day of work, plus any unused paid time off (PTO), less outstanding loans, advances or other agreements the employee may have with the company, in compliance with state laws. In cases of an employee's death, the final pay due to that employee will be paid to the deceased employee's estate or as otherwise required under state law.":
            "An employee who resigns or is discharged will be paid through the last day of work, plus any unused paid time off (PTO), less outstanding loans, advances or other agreements the employee may have with the company, in compliance with state laws. In cases of an employee's death, the final pay due to that employee will be paid to the deceased employee's estate or as otherwise required under state law.",
          'Hiring and Termination Policy with Background Checks':
            'Hiring and Termination Policy with Background Checks',
          'The purpose of this policy is to provide guidance that limits the use of encryption to those algorithms that have received substantial public review and have been proven to work effectively. Additionally, this policy provides direction to ensure that Federal regulations are followed, and legal authority is granted for the dissemination and use of encryption technologies outside of the United States.':
            'The purpose of this policy is to provide guidance that limits the use of encryption to those algorithms that have received substantial public review and have been proven to work effectively. Additionally, this policy provides direction to ensure that Federal regulations are followed, and legal authority is granted for the dissemination and use of encryption technologies outside of the United States.',
          Policy: 'Policy',
          'Algorithm Requirements': 'Algorithm Requirements',
          'Ciphers in use must meet or exceed the set defined as "AES-compatible" or "partially AES-compatible" according to the':
            'Ciphers in use must meet or exceed the set defined as "AES-compatible" or "partially AES-compatible" according to the',
          'IETF/IRTF Cipher Catalog,': 'IETF/IRTF Cipher Catalog,',
          'or the set defined for use in the United States':
            'or the set defined for use in the United States',
          'National Institute of Standards and Technology (NIST) publication FIPS 140-2,':
            'National Institute of Standards and Technology (NIST) publication FIPS 140-2,',
          'or any superseding documents according to the date of implementation. The use of the Advanced Encryption Standard (AES) is strongly recommended for symmetric encryption.':
            'or any superseding documents according to the date of implementation. The use of the Advanced Encryption Standard (AES) is strongly recommended for symmetric encryption.',
          'Algorithms in use must meet the standards defined for use in NIST publication FIPS 140-2 or any superseding document, according to date of implementation. The use of the RSA and Elliptic Curve Cryptography (ECC) algorithms is strongly recommended for asymmetric encryption.':
            'Algorithms in use must meet the standards defined for use in NIST publication FIPS 140-2 or any superseding document, according to date of implementation. The use of the RSA and Elliptic Curve Cryptography (ECC) algorithms is strongly recommended for asymmetric encryption.',
          'Signature Algorithms': 'Signature Algorithms',
          Algorithm: 'Algorithm',
          'Key Length (min)': 'Key Length (min)',
          'Additional Comment': 'Additional Comment',
          'Consider RFC6090 to avoid': 'Consider RFC6090 to avoid',
          'patent infringement.': 'patent infringement.',
          'Use a secure padding scheme.': 'Use a secure padding scheme.',
          'PKCS#7 padding scheme is': 'PKCS#7 padding scheme is',
          'recommended. Message hashing': 'recommended. Message hashing',
          'required.': 'required.',
          'Refer to LDWM Hash-based': 'Refer to LDWM Hash-based',
          'Signatures Draft': 'Signatures Draft',
          Summary: 'Summary',
          'To maintain the trust of our employees, customers, and partners and meet regulatory requirements, it is essential that we do everything we can to protect confidential information and systems in the face of a cyberattack. The better prepared we are to respond to a potential cyberattack, the faster we can eradicate any threat and reduce the impact on our business':
            'To maintain the trust of our employees, customers, and partners and meet regulatory requirements, it is essential that we do everything we can to protect confidential information and systems in the face of a cyberattack. The better prepared we are to respond to a potential cyberattack, the faster we can eradicate any threat and reduce the impact on our business',
          'This document describes the plan for responding to information security incidents at Falcon Consulting. This document will explain how to detect and react to cybersecurity incidents and data breaches, determine their scope and risk, respond appropriately and quickly, and communicate the results and risks to all stakeholders':
            'This document describes the plan for responding to information security incidents at Falcon Consulting. This document will explain how to detect and react to cybersecurity incidents and data breaches, determine their scope and risk, respond appropriately and quickly, and communicate the results and risks to all stakeholders',
          'The effective incident response involves every part of our organization, including IT teams, legal, technical support, human resources, corporate communications, and business operations. It is important that you read and understand your role as well as the ways you will coordinate with others.':
            'The effective incident response involves every part of our organization, including IT teams, legal, technical support, human resources, corporate communications, and business operations. It is important that you read and understand your role as well as the ways you will coordinate with others.',
          'This plan will be updated to reflect organizational changes, new technologies, and new compliance requirements that inform our cybersecurity strategy. We will conduct regular testing of this plan to ensure everyone is fully trained to participate in effective incident response.':
            'This plan will be updated to reflect organizational changes, new technologies, and new compliance requirements that inform our cybersecurity strategy. We will conduct regular testing of this plan to ensure everyone is fully trained to participate in effective incident response.',
          'Roles, Responsibilities & Contact Information':
            'Roles, Responsibilities & Contact Information',
          'This Security Incident Response Plan must be followed by all personnel, including all  employees, temporary staff, consultants, contractors, suppliers, and third parties operating on behalf of Falcon Consulting. All personnel are referred to as ‘staff’ within this plan.':
            'This Security Incident Response Plan must be followed by all personnel, including all  employees, temporary staff, consultants, contractors, suppliers, and third parties operating on behalf of Falcon Consulting. All personnel are referred to as ‘staff’ within this plan.',
          'Below are details about the roles and responsibilities of each member of [Company Name] to prevent and respond to a workplace incident. It is not an exhaustive list of duties but is designed to give each employee a general understanding of their role and the roles of other employees in incident response and prevention.':
            'Below are details about the roles and responsibilities of each member of [Company Name] to prevent and respond to a workplace incident. It is not an exhaustive list of duties but is designed to give each employee a general understanding of their role and the roles of other employees in incident response and prevention.',
          'The Incident Response Lead is responsible for:':
            'The Incident Response Lead is responsible for:',
          'Making sure that the Security Incident Response Plan and associated response and escalation procedures are defined and documented. This is to ensure that the handling of security incidents is timely and effective.':
            'Making sure that the Security Incident Response Plan and associated response and escalation procedures are defined and documented. This is to ensure that the handling of security incidents is timely and effective.',
          'Making sure that the Security Incident Response Plan is current, reviewed, and tested at least once each year.':
            'Making sure that the Security Incident Response Plan is current, reviewed, and tested at least once each year.',
          'Making sure that staff with Security Incident Response Plan responsibilities are properly trained at least once each year.':
            'Making sure that staff with Security Incident Response Plan responsibilities are properly trained at least once each year.',
          'Leading the investigation of a suspected breach or reported security incident and initiating the Security Incident Response Plan when needed.':
            'Leading the investigation of a suspected breach or reported security incident and initiating the Security Incident Response Plan when needed.',
          'Reporting to and liaising with external parties, including pertinent business partners, legal representation, law enforcement, etc., as required.':
            'Reporting to and liaising with external parties, including pertinent business partners, legal representation, law enforcement, etc., as required.',
          'Authorizing on-site investigations by appropriate law enforcement or third-party security/forensic personnel, as required during any security incident investigation. This includes authorizing access to/removal of evidence from the site.':
            'Authorizing on-site investigations by appropriate law enforcement or third-party security/forensic personnel, as required during any security incident investigation. This includes authorizing access to/removal of evidence from the site.',
          'Security Incident Response Team (SIRT) members are responsible for:':
            'Security Incident Response Team (SIRT) members are responsible for:',
          'Making sure that all staff understands how to identify and report a suspected or actual security incident.':
            'Making sure that all staff understands how to identify and report a suspected or actual security incident.',
          'Advising the Incident Response Lead of an incident when they receive a security incident report from staff.':
            'Advising the Incident Response Lead of an incident when they receive a security incident report from staff.',
          'Investigating and documenting each reported incident.':
            'Investigating and documenting each reported incident.',
          'Taking action to limit the exposure of sensitive data and to reduce the risks that may be associated with any incident.':
            'Taking action to limit the exposure of sensitive data and to reduce the risks that may be associated with any incident.',
          'Gathering, reviewing, and analysing logs and related information from various central and local safeguards, security measures, and controls.':
            'Gathering, reviewing, and analysing logs and related information from various central and local safeguards, security measures, and controls.',
          'Documenting and maintaining accurate and detailed records of the incident and all activities that were undertaken in response to an incident.':
            'Documenting and maintaining accurate and detailed records of the incident and all activities that were undertaken in response to an incident.',
          'Assisting law enforcement during the investigation processes. This includes any forensic investigations and prosecutions.':
            'Assisting law enforcement during the investigation processes. This includes any forensic investigations and prosecutions.',
          'Initiating follow-up actions to reduce the likelihood of recurrence, as appropriate.':
            'Initiating follow-up actions to reduce the likelihood of recurrence, as appropriate.',
          'Determining if policies, processes, technologies, security measures, or controls need to be updated to avoid a similar incident in the future. They also need to consider whether additional safeguards are required in the environment where the incident occurred.':
            'Determining if policies, processes, technologies, security measures, or controls need to be updated to avoid a similar incident in the future. They also need to consider whether additional safeguards are required in the environment where the incident occurred.',
          'All staff members are responsible for:': 'All staff members are responsible for:',
          'Making sure they understand how to identify and report a suspected or actual security incident.':
            'Making sure they understand how to identify and report a suspected or actual security incident.',
          'Reporting a suspected or actual security incident to the Incident Response Lead (preferable) or to another member of the Security Incident Response Team (SIRT).':
            'Reporting a suspected or actual security incident to the Incident Response Lead (preferable) or to another member of the Security Incident Response Team (SIRT).',
          'Reporting any security-related issues or concerns to line management, or to a member of the SIRT.':
            'Reporting any security-related issues or concerns to line management, or to a member of the SIRT.',
          'Complying with the security policies and procedures of Falcon Consulting.':
            'Complying with the security policies and procedures of Falcon Consulting.',
          'Security Awareness Training Program': 'Security Awareness Training Program',
          'Security and privacy awareness and training is an important aspect in protecting the Confidentiality, Integrity, and Availability (CIA) of sensitive information. Employees are the first line of defense and must be made aware of the security risks associated with the work performed at Falcon Consulting.':
            'Security and privacy awareness and training is an important aspect in protecting the Confidentiality, Integrity, and Availability (CIA) of sensitive information. Employees are the first line of defense and must be made aware of the security risks associated with the work performed at Falcon Consulting.',
          'Falcon Consulting understands that people are often the biggest threat (intentionally or inadvertently) to the security of sensitive information. As such, all users of information systems must be made aware of the security risks associated with their activities and of the applicable federal and agency requirements related to the security of Strategic information systems performing work on behalf of the Centers for Medicare and Medicaid Services (CMS). Those with significant security responsibilities must be adequately trained to carry out their assigned information security-related duties and responsibilities.':
            'Falcon Consulting understands that people are often the biggest threat (intentionally or inadvertently) to the security of sensitive information. As such, all users of information systems must be made aware of the security risks associated with their activities and of the applicable federal and agency requirements related to the security of Strategic information systems performing work on behalf of the Centers for Medicare and Medicaid Services (CMS). Those with significant security responsibilities must be adequately trained to carry out their assigned information security-related duties and responsibilities.',
          'All employees, contractors, and anyone accessing Falcon Consulting information systems must understand how to protect the CIA of information and information systems.':
            'All employees, contractors, and anyone accessing Falcon Consulting information systems must understand how to protect the CIA of information and information systems.',
          'Falcon Consulting will ensure that all employees and contractors are given security and privacy awareness training during the new hire process and before accessing any Falcon Consulting systems. This training reflects common security and privacy awareness specific to [Company’s] environment including, but not limited to, physical access, restricted areas, potential incidents, how to report incidents, laptop best practices, and how to spot a phishing scam.':
            'Falcon Consulting will ensure that all employees and contractors are given security and privacy awareness training during the new hire process and before accessing any Falcon Consulting systems. This training reflects common security and privacy awareness specific to [Company’s] environment including, but not limited to, physical access, restricted areas, potential incidents, how to report incidents, laptop best practices, and how to spot a phishing scam.',
          'In addition to the initial security training provided in the new hire orientation, all employees must take a security and privacy awareness course and pass the posttest within 30 days of hire. This course and test is provided and tracked by the Learning Management System (LMS).':
            'In addition to the initial security training provided in the new hire orientation, all employees must take a security and privacy awareness course and pass the posttest within 30 days of hire. This course and test is provided and tracked by the Learning Management System (LMS).',
          'Falcon Consulting will provide ongoing training through the Security and Privacy Awareness and Training (SPAT) Team activities. The SPAT provides information on a monthly basis on selected topics. An initial SPAT Chat presentation is conducted at the beginning of the month to give information, demonstrations, and general Q&A for all attendees. The SPAT also provides information via posters in designated areas throughout the facility and weekly articles posted on the internal intranet page.':
            'Falcon Consulting will provide ongoing training through the Security and Privacy Awareness and Training (SPAT) Team activities. The SPAT provides information on a monthly basis on selected topics. An initial SPAT Chat presentation is conducted at the beginning of the month to give information, demonstrations, and general Q&A for all attendees. The SPAT also provides information via posters in designated areas throughout the facility and weekly articles posted on the internal intranet page.',
          'Falcon Consulting will also conduct annual refresher training for all employees and anytime there are significant changes to the environment. This will be administered via the LMS and tracked for completeness and passing grade to show adequate understanding of the material.':
            'Falcon Consulting will also conduct annual refresher training for all employees and anytime there are significant changes to the environment. This will be administered via the LMS and tracked for completeness and passing grade to show adequate understanding of the material.',
          'This policy will be reviewed on an annual basis or whenever there are significant changes to the environment.':
            'This policy will be reviewed on an annual basis or whenever there are significant changes to the environment.',
          'Management Commitment': 'Management Commitment',
          'Falcon Consulting Senior Management will commit to the development of a security and privacy awareness program allocating staff and resources. The Information Security Manager will have access to both the compliance and training departments for completion and update of training materials and tracking results.':
            'Falcon Consulting Senior Management will commit to the development of a security and privacy awareness program allocating staff and resources. The Information Security Manager will have access to both the compliance and training departments for completion and update of training materials and tracking results.',
          'Roles and Responsibilities': 'Roles and Responsibilities',
          'All employees and contractors are responsible for understanding and following all security related policies and procedures, and asking their manager or Security Officer for clarification if needed.':
            'All employees and contractors are responsible for understanding and following all security related policies and procedures, and asking their manager or Security Officer for clarification if needed.',
          'Managers are responsible for ensuring all employees complete required security training.':
            'Managers are responsible for ensuring all employees complete required security training.',
          'The LMS Administrator is responsible for enrolling all employees in first-time and annual security training and tracking results.':
            'The LMS Administrator is responsible for enrolling all employees in first-time and annual security training and tracking results.',
          'The Security Manager is responsible for:': 'The Security Manager is responsible for:',
          'Maintaining ongoing SPAT team activities': 'Maintaining ongoing SPAT team activities',
          'Updating annual security training materials':
            'Updating annual security training materials',
          'Conducting new hire training': 'Conducting new hire training',
          'Ensuring all employees understand and following security related policies and procedures':
            'Ensuring all employees understand and following security related policies and procedures',
          'Coordination Among Organizational Entities':
            'Coordination Among Organizational Entities',
          'Security is everybody’s business. As security tends to cross departmental and organizational boundaries, Falcon Consulting employees and contractors will work together to ensure that required security controls are in place, are maintained, and comply with the policy described in this document. Security concerns, security incidents, or suspected/confirmed vulnerabilities will be shared with appropriate personnel in the organization so that the vulnerability can be remediated (or mitigated with compensating security controls) and we can ensure that similar vulnerabilities in other systems or processes can be addressed.':
            'Security is everybody’s business. As security tends to cross departmental and organizational boundaries, Falcon Consulting employees and contractors will work together to ensure that required security controls are in place, are maintained, and comply with the policy described in this document. Security concerns, security incidents, or suspected/confirmed vulnerabilities will be shared with appropriate personnel in the organization so that the vulnerability can be remediated (or mitigated with compensating security controls) and we can ensure that similar vulnerabilities in other systems or processes can be addressed.',
          Compliance: 'Compliance',
          'Compliance with the policy defined in this document is mandatory. Failure to comply with Falcon Consulting Information Security Policies may result in disciplinary actions up to and including termination of employment. Employees may also be held personally liable for any violations of this policy. Failure to comply with Falcon Consulting Information Security Policies may result in termination of contracts for contractors, partners, consultants, and other entities. Legal actions may also be taken for violations of applicable regulations and laws. Systems that do not satisfy Falcon Consulting Information Security Policy requirements may be prevented from being allowed to operate as a production system.':
            'Compliance with the policy defined in this document is mandatory. Failure to comply with Falcon Consulting Information Security Policies may result in disciplinary actions up to and including termination of employment. Employees may also be held personally liable for any violations of this policy. Failure to comply with Falcon Consulting Information Security Policies may result in termination of contracts for contractors, partners, consultants, and other entities. Legal actions may also be taken for violations of applicable regulations and laws. Systems that do not satisfy Falcon Consulting Information Security Policy requirements may be prevented from being allowed to operate as a production system.',
          References: 'References',
          'This policy establishes mandatory requirements and assigns roles and responsibilities to facilitate the implementation of the Falcon Consulting Security Awareness and Training Policy. The policy contains formal, documented policy statements and language designed to facilitate and guide the implementation of the policy, procedures, and controls. Formal, documented security procedures exist as separate documents titled AT-1 through AT-4. This policy is consistent with the following guidance:':
            'This policy establishes mandatory requirements and assigns roles and responsibilities to facilitate the implementation of the Falcon Consulting Security Awareness and Training Policy. The policy contains formal, documented policy statements and language designed to facilitate and guide the implementation of the policy, procedures, and controls. Formal, documented security procedures exist as separate documents titled AT-1 through AT-4. This policy is consistent with the following guidance:',
          'C.F.R. Part 5 Subpart C (5 C.F.R 930.301)': 'C.F.R. Part 5 Subpart C (5 C.F.R 930.301)',
          'NIST SP 800-12 Introduction to Computer Security: The NIST Handbook':
            'NIST SP 800-12 Introduction to Computer Security: The NIST Handbook',
          'NIST SP 800-16 Information Security Training Requirements: A Role- and Performance-Based Model':
            'NIST SP 800-16 Information Security Training Requirements: A Role- and Performance-Based Model',
          'NIST SP 800-37 Rev. 1 Guide for Applying the Risk Management Framework to Federal Information Systems: A Security Life Cycle Approach':
            'NIST SP 800-37 Rev. 1 Guide for Applying the Risk Management Framework to Federal Information Systems: A Security Life Cycle Approach',
          'NIST SP 800-50 Building an Information Technology Security Awareness and Training Program':
            'NIST SP 800-50 Building an Information Technology Security Awareness and Training Program',
          'NIST SP 800-100 Information Security Handbook: A Guide for Managers':
            'NIST SP 800-100 Information Security Handbook: A Guide for Managers',
          'Security Awareness (AT-2)': 'Security Awareness (AT-2)',
          'Falcon Consulting requires that all users complete a security awareness and training course (or courses as applicable) prior to being granted access to Falcon Consulting corporate or client systems. Users are provided basic security awareness training as part of initial training for new users, as well as when required by system changes. All users must take refresher training at least annually. Employees or contractors shall acknowledge having received the security awareness training either in writing or electronically as part of the training course completion (the current process involves sending copies of course completion certificates to the Falcon Consulting CISO). The Falcon Consulting CISO maintains and stores completed security awareness and training evidence artifacts (certificates) for users. Security awareness and training course completion artifacts (certificates) will be provided to the Agency ISSO or Security Steward upon request.':
            'Falcon Consulting requires that all users complete a security awareness and training course (or courses as applicable) prior to being granted access to Falcon Consulting corporate or client systems. Users are provided basic security awareness training as part of initial training for new users, as well as when required by system changes. All users must take refresher training at least annually. Employees or contractors shall acknowledge having received the security awareness training either in writing or electronically as part of the training course completion (the current process involves sending copies of course completion certificates to the Falcon Consulting CISO). The Falcon Consulting CISO maintains and stores completed security awareness and training evidence artifacts (certificates) for users. Security awareness and training course completion artifacts (certificates) will be provided to the Agency ISSO or Security Steward upon request.',
          'Security Training (AT-3)': 'Security Training (AT-3)',
          'Falcon Consulting must provide role-based, security-related training before authorizing access to the system or performing assigned duties, as well as when required by a system change or changes in personnel roles.':
            'Falcon Consulting must provide role-based, security-related training before authorizing access to the system or performing assigned duties, as well as when required by a system change or changes in personnel roles.',
          'Falcon Consulting must provide security training materials that address the procedures and activities necessary to fulfill the defined roles and responsibilities for information system security. Falcon Consulting must provide role-based security-related training to all appropriate personnel at least once every three years. Appropriate personnel include but is not limited to System Administrators, Database Administrators, Network Engineers, Security Analysts, and the CISO. The employee or consultant shall acknowledge having received the role-based training either in writing or electronically as part of the training course completion.':
            'Falcon Consulting must provide security training materials that address the procedures and activities necessary to fulfill the defined roles and responsibilities for information system security. Falcon Consulting must provide role-based security-related training to all appropriate personnel at least once every three years. Appropriate personnel include but is not limited to System Administrators, Database Administrators, Network Engineers, Security Analysts, and the CISO. The employee or consultant shall acknowledge having received the role-based training either in writing or electronically as part of the training course completion.',
          'Security Training Records (AT-4)': 'Security Training Records (AT-4)',
          'Falcon Consulting must create and disseminate to users the security training documents. The Falcon Consulting CISO must ensure activities for monitoring and documenting basic security awareness training, as well as role-based training, are conducted. Employees and contractors must provide evidence of successful course completion (certificates) to the Falcon Consulting CISO. All security training records must be stored for at least 5 years.':
            'Falcon Consulting must create and disseminate to users the security training documents. The Falcon Consulting CISO must ensure activities for monitoring and documenting basic security awareness training, as well as role-based training, are conducted. Employees and contractors must provide evidence of successful course completion (certificates) to the Falcon Consulting CISO. All security training records must be stored for at least 5 years.',
          'Third party/Vendor management': 'Third party/Vendor management',
          'Identify Risk:': 'Identify Risk:',
          'Falcon Consulting helps deliver access to the latest public, proprietary and self-reported information. This enables clients to identify and classify a variety of risk factors, including cyber, privacy, information security, bribery, corruption, financial crime and reputational and operational concerns.':
            'Falcon Consulting helps deliver access to the latest public, proprietary and self-reported information. This enables clients to identify and classify a variety of risk factors, including cyber, privacy, information security, bribery, corruption, financial crime and reputational and operational concerns.',
          'Evaluate Third party risk management': 'Evaluate Third party risk management',
          'Falcon Consulting provide due diligence and investigation services in more than 240 countries and 100 languages. We offer off-the-shelf and customized services for clients to evaluate, segment and understand both the risk landscape and quality controls in place at the local, country, regional and global level.':
            'Falcon Consulting provide due diligence and investigation services in more than 240 countries and 100 languages. We offer off-the-shelf and customized services for clients to evaluate, segment and understand both the risk landscape and quality controls in place at the local, country, regional and global level.',
          'Monitor Risk': 'Monitor Risk',
          'Falcon Consulting help clients understand and implement tactical and strategic methods of managing and mitigating third-party risks. These methods include continuous or periodic monitoring, threat monitoring, and alert management processes to make the job of staying on top of risk easier to implement at a lower overall cost.':
            'Falcon Consulting help clients understand and implement tactical and strategic methods of managing and mitigating third-party risks. These methods include continuous or periodic monitoring, threat monitoring, and alert management processes to make the job of staying on top of risk easier to implement at a lower overall cost.',
          'Innovate third-party risk management': 'Innovate third-party risk management',
          'Falcon Consulting leverage advanced analytics, robotic process automation, advanced workflow, and machine learning to simplify and streamline everyday tasks when implementing and managing effective third-party risk management programs.':
            'Falcon Consulting leverage advanced analytics, robotic process automation, advanced workflow, and machine learning to simplify and streamline everyday tasks when implementing and managing effective third-party risk management programs.',
          'Enable third-party risk management': 'Enable third-party risk management',
          'Falcon Consulting help deliver a range of services that help clients improve their operational risk management. These services include helping clients design risk frameworks, manage governance and model data. We can also provide clients with an outsourced managed service.':
            'Falcon Consulting help deliver a range of services that help clients improve their operational risk management. These services include helping clients design risk frameworks, manage governance and model data. We can also provide clients with an outsourced managed service.',
          'System backup policy and program': 'System backup policy and program',
          'The purpose of this policy is to provide means to:':
            'The purpose of this policy is to provide means to:',
          'restore the integrity of the computer systems in the event of a hardware/software failure or physical disaster; and':
            'restore the integrity of the computer systems in the event of a hardware/software failure or physical disaster; and',
          'provide a measure of protection against human error or the inadvertent deletion of important files.':
            'provide a measure of protection against human error or the inadvertent deletion of important files.',
          Scope: 'Scope',
          Employees: 'Employees',
          'This policy applies to all Employees, Contractors, and Third Party Employees, who have access to IT assets of FALCON CONSULTING and may be bound by contractual agreements.':
            'This policy applies to all Employees, Contractors, and Third Party Employees, who have access to IT assets of FALCON CONSULTING and may be bound by contractual agreements.',
          'IT Assets': 'IT Assets',
          'This policy applies to the entire IT infrastructure of FALCON CONSULTING.':
            'This policy applies to the entire IT infrastructure of FALCON CONSULTING.',
          Documentation: 'Documentation',
          'The Policy documentation shall consist of Backup Policy and related procedures and guidelines.':
            'The Policy documentation shall consist of Backup Policy and related procedures and guidelines.',
          'Document Control': 'Document Control',
          'The Backup Policy document and all other referenced documents shall be controlled. Version control shall be used to preserve the latest release and the previous version of any document. However, the previous version of the documents shall be retained only for a period of two years for legal and knowledge preservation purposes.':
            'The Backup Policy document and all other referenced documents shall be controlled. Version control shall be used to preserve the latest release and the previous version of any document. However, the previous version of the documents shall be retained only for a period of two years for legal and knowledge preservation purposes.',
          'Records being generated as part of the Backup Policy shall be retained for a period of two years. Records shall be in hard copy or electronic media. The records shall be owned by the respective system administrators and shall be audited once a year.':
            'Records being generated as part of the Backup Policy shall be retained for a period of two years. Records shall be in hard copy or electronic media. The records shall be owned by the respective system administrators and shall be audited once a year.',
          'Distribution and Maintenance': 'Distribution and Maintenance',
          'The Backup Policy document shall be made available to all the employees covered in the scope. All the changes and new releases of this document shall be made available to the persons concerned. The maintenance responsibility of the document shall be with the CISO and system administrators':
            'The Backup Policy document shall be made available to all the employees covered in the scope. All the changes and new releases of this document shall be made available to the persons concerned. The maintenance responsibility of the document shall be with the CISO and system administrators',
          'The Backup Policy document shall be considered as “confidential” and shall be made available to the concerned persons with proper access control. Subsequent changes and versions of this document shall be controlled.':
            'The Backup Policy document shall be considered as “confidential” and shall be made available to the concerned persons with proper access control. Subsequent changes and versions of this document shall be controlled.',
          Responsibility: 'Responsibility',
          'The CISO / designated personnel are responsible for proper implementation of the Policy.':
            'The CISO / designated personnel are responsible for proper implementation of the Policy.',
          'All user-level and system-level information maintained by FALCON CONSULTING shall be backed up periodically. The backup media shall be stored with sufficient protection and proper environmental conditions.':
            'All user-level and system-level information maintained by FALCON CONSULTING shall be backed up periodically. The backup media shall be stored with sufficient protection and proper environmental conditions.',
          'The frequency and extent of backups must be in accordance with the importance of the information and the acceptable risk as determined by the data owner.':
            'The frequency and extent of backups must be in accordance with the importance of the information and the acceptable risk as determined by the data owner.',
          'The Information Resources backup and recovery process for each system must be documented and periodically reviewed.':
            'The Information Resources backup and recovery process for each system must be documented and periodically reviewed.',
          'Any vendor(s) providing offsite backup storage must be cleared to handle the highest level of information stored.':
            'Any vendor(s) providing offsite backup storage must be cleared to handle the highest level of information stored.',
          'Physical access controls implemented at offsite backup storage locations must meet or exceed the physical access controls of the source systems. Additionally, backup media must be protected in accordance with the highest sensitivity level of information stored.':
            'Physical access controls implemented at offsite backup storage locations must meet or exceed the physical access controls of the source systems. Additionally, backup media must be protected in accordance with the highest sensitivity level of information stored.',
          'A process must be implemented to verify the success of the KDCC electronic information backup.':
            'A process must be implemented to verify the success of the KDCC electronic information backup.',
          'Backup copies of operating systems and other critical information system software shall not be stored in the same location as the operational software.':
            'Backup copies of operating systems and other critical information system software shall not be stored in the same location as the operational software.',
          'The system backup information shall be provided with protection from unauthorized modification and environmental conditions.':
            'The system backup information shall be provided with protection from unauthorized modification and environmental conditions.',
          'Backups must be periodically tested to ensure that they are recoverable. To confirm media reliability and information integrity, the back-up information shall be tested at some specified frequency.':
            'Backups must be periodically tested to ensure that they are recoverable. To confirm media reliability and information integrity, the back-up information shall be tested at some specified frequency.',
          'Signature cards held by the offsite backup storage vendor(s) for access to backup media must be reviewed annually or when an authorized individual leaves FALCON CONSULTING.':
            'Signature cards held by the offsite backup storage vendor(s) for access to backup media must be reviewed annually or when an authorized individual leaves FALCON CONSULTING.',
          'Backup information shall be selectively used to restore information system functions as a part of the business continuity process.':
            'Backup information shall be selectively used to restore information system functions as a part of the business continuity process.',
          'Procedures between KDCC and the offsite backup storage vendor(s) must be reviewed at least annually.':
            'Procedures between KDCC and the offsite backup storage vendor(s) must be reviewed at least annually.',
          'Backup tapes must have at a minimum the following identifying criteria that can be readily identified by labels and/or a bar-coding system:':
            'Backup tapes must have at a minimum the following identifying criteria that can be readily identified by labels and/or a bar-coding system:',
          'a. System name ': 'a. System name ',
          'b. Creation Date': 'b. Creation Date',
          'c. Sensitivity Classification [Based on applicable electronic record retention regulations.]':
            'c. Sensitivity Classification [Based on applicable electronic record retention regulations.]',
          'd. Contact Information': 'd. Contact Information',
          'Any employee found to have violated this policy may be subjected to disciplinary action in line with the HR Policy.':
            'Any employee found to have violated this policy may be subjected to disciplinary action in line with the HR Policy.',

          // Title 2
          'Business Continuity and Disaster Recovery Policy':
            'Business Continuity and Disaster Recovery Policy',
          // Body 2
          'Business Continuity Plan': 'Business Continuity Plan',
          'Business Continuity focuses on sustaining The Falcon Consulting’s critical business processes during and after a disruption.':
            'Business Continuity focuses on sustaining The Falcon Consulting’s critical business processes during and after a disruption.',
          'Falcon Consulting has created and implemented a Business Continuity Plan (“BCP”).':
            'Falcon Consulting has created and implemented a Business Continuity Plan (“BCP”).',
          'The BCP is periodically tested and the results should be shared with executive management.':
            'The BCP is periodically tested and the results should be shared with executive management.',
          'The BCP is reviewed and updated upon any relevant change to the organization, at the conclusion of plan testing, or least annually.':
            'The BCP is reviewed and updated upon any relevant change to the organization, at the conclusion of plan testing, or least annually.',
          'The BCP is communicated and distributed to all relevant internal personnel and executive management.':
            'The BCP is communicated and distributed to all relevant internal personnel and executive management.',
          'Business continuity planning includes:': 'Business continuity planning includes:',
          'The safety and security of personnel is the first priority;':
            'The safety and security of personnel is the first priority;',
          'An adequate management structure is in place to prepare for, mitigate and respond to a disruptive event using personnel with the necessary authority, experience, and competence;':
            'An adequate management structure is in place to prepare for, mitigate and respond to a disruptive event using personnel with the necessary authority, experience, and competence;',
          'Documented plans, response and recovery procedures are developed and approved, detailing how the organization will manage a disruptive event.':
            'Documented plans, response and recovery procedures are developed and approved, detailing how the organization will manage a disruptive event.',
          'A risk assessment for critical business processes and operations (Business Impact Analysis);':
            'A risk assessment for critical business processes and operations (Business Impact Analysis);',
          'An inventory of critical systems and records, and their dependencies;':
            'An inventory of critical systems and records, and their dependencies;',
          'Requirements for ensuring information security throughout the process;':
            'Requirements for ensuring information security throughout the process;',
          'Identification of supply chain relationships and the organization’s role to support critical infrastructure;':
            'Identification of supply chain relationships and the organization’s role to support critical infrastructure;',
          'Processes to ensure the safety of personnel;':
            'Processes to ensure the safety of personnel;',
          'Communication strategies for communications both inside and outside the organization;':
            'Communication strategies for communications both inside and outside the organization;',
          'Notification policy from Falcon Consulting partners to inform the company in case of disruption of their services which may affect the activities of Falcon Consulting;':
            'Notification policy from Falcon Consulting partners to inform the company in case of disruption of their services which may affect the activities of Falcon Consulting;',
          'Mitigation strategies and safeguards to reduce impact;':
            'Mitigation strategies and safeguards to reduce impact;',
          'Strategies to address and limit the reputational impact from an event;':
            'Strategies to address and limit the reputational impact from an event;',
          'Contingency plans for different types of disruption events;':
            'Contingency plans for different types of disruption events;',
          'Protection and availability of plan documentation;':
            'Protection and availability of plan documentation;',
          'Procedures for plan tests, review, and updates.':
            'Procedures for plan tests, review, and updates.',
          'Disaster recovery Policy': 'Disaster recovery Policy',
          'Disaster Recovery focuses on restoring the technology systems that support both critical and day-to-day business operations.':
            'Disaster Recovery focuses on restoring the technology systems that support both critical and day-to-day business operations.',
          'Falcon consulting has created and implement a Disaster Recovery Plan (“DRP”) to support business objectives outlined in the (BCP/critical processes identified by a Business Impact Analysis).':
            'Falcon consulting has created and implement a Disaster Recovery Plan (“DRP”) to support business objectives outlined in the (BCP/critical processes identified by a Business Impact Analysis).',
          'The DRP is tested annually, at a minimum.': 'The DRP is tested annually, at a minimum.',
          'The DRP is reviewed and updated upon any relevant change to IT Infrastructure, at the conclusion of plan testing, or least annually.':
            'The DRP is reviewed and updated upon any relevant change to IT Infrastructure, at the conclusion of plan testing, or least annually.',
          'The DRP is communicated and distributed to all relevant internal personnel and executive management.':
            'The DRP is communicated and distributed to all relevant internal personnel and executive management.',
          'The Falcon consulting DRP includes:': 'The Falcon consulting DRP includes:',
          'Roles and responsibilities for implementing the disaster recovery plan;':
            'Roles and responsibilities for implementing the disaster recovery plan;',
          'List of potential risks to critical systems and sensitive information;':
            'List of potential risks to critical systems and sensitive information;',
          'Procedures for reporting disaster events, event escalation, recovery of critical operations, and resumption of normal operations;':
            'Procedures for reporting disaster events, event escalation, recovery of critical operations, and resumption of normal operations;',
          'Requirements for ensuring information security throughout the process;':
            'Requirements for ensuring information security throughout the process;',
          'An inventory of backups and offsite storage locations;':
            'An inventory of backups and offsite storage locations;',
          'Data Backup and Restoration Plan: Indicates which data is backed up, the media to which it is saved, where that media is stored, and how often the backup is done.':
            'Data Backup and Restoration Plan: Indicates which data is backed up, the media to which it is saved, where that media is stored, and how often the backup is done.',
          'Equipment Replacement Plan: Describes what equipment is required to begin to provide services, list the order in which it is necessary, and note where to purchase the equipment.':
            'Equipment Replacement Plan: Describes what equipment is required to begin to provide services, list the order in which it is necessary, and note where to purchase the equipment.',
          'Contingency plans for different types of disruption events;':
            'Contingency plans for different types of disruption events;',
          'Protection and availability of plan documentation;':
            'Protection and availability of plan documentation;',
          'Procedures for plan tests, review, and updates.':
            'Procedures for plan tests, review, and updates.',
          'Computer Emergency Response Plan: Indicates who is to be contacted, when, and how. Also indicates what immediate actions must be taken in the event of certain occurrences.':
            'Computer Emergency Response Plan: Indicates who is to be contacted, when, and how. Also indicates what immediate actions must be taken in the event of certain occurrences.',
          'Succession Plan: Describes the flow of responsibility when normal staff is unavailable to perform their duties.':
            'Succession Plan: Describes the flow of responsibility when normal staff is unavailable to perform their duties.',
          'Data Study: Details the data stored on the systems, its criticality, and its confidentiality.':
            'Data Study: Details the data stored on the systems, its criticality, and its confidentiality.',
          'Criticality of Service List: Lists all the services provided and their order of importance.':
            'Criticality of Service List: Lists all the services provided and their order of importance.',
          Waivers: 'Waivers',
          'Waivers from certain policy provisions may be sought following the Falcon Consulting Waiver Process.':
            'Waivers from certain policy provisions may be sought following the Falcon Consulting Waiver Process.',
          'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.':
            'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.',
          'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.':
            'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.',
          // Privacy Policy
          // Title 3
          'Information Security Policy': 'Information Security Policy',
          // Body 3
          Introduction: 'Introduction',
          'Information security is a holistic discipline, meaning that its application, or lack thereof, affects all facets of an organization or enterprise. The goal of the Falcon Consulting Information Security Program is to protect the Confidentiality, Integrity, and Availability of the data employed within the organization while providing value to the way we conduct business. Protection of the Confidentiality, Integrity, and Availability are basic principles of information security, and can be defined as:':
            'Information security is a holistic discipline, meaning that its application, or lack thereof, affects all facets of an organization or enterprise. The goal of the Falcon Consulting Information Security Program is to protect the Confidentiality, Integrity, and Availability of the data employed within the organization while providing value to the way we conduct business. Protection of the Confidentiality, Integrity, and Availability are basic principles of information security, and can be defined as:',
          'Confidentiality – Ensuring that information is accessible only to those entities that are authorized to have access, many times enforced by the classic “need-to-know” principle.':
            'Confidentiality – Ensuring that information is accessible only to those entities that are authorized to have access, many times enforced by the classic “need-to-know” principle.',
          'Integrity – Protecting the accuracy and completeness of information and the methods that are used to process and manage it.':
            'Integrity – Protecting the accuracy and completeness of information and the methods that are used to process and manage it.',
          'Availability – Ensuring that information assets (information, systems, facilities, networks, and computers) are accessible and usable when needed by an authorized entity.':
            'Availability – Ensuring that information assets (information, systems, facilities, networks, and computers) are accessible and usable when needed by an authorized entity.',
          'Falcon Consulting has recognized that our business information is a critical asset and as such our ability to manage, control, and protect this asset will have a direct and significant impact on our future success. ':
            'Falcon Consulting has recognized that our business information is a critical asset and as such our ability to manage, control, and protect this asset will have a direct and significant impact on our future success. ',
          'The purpose of the Falcon Consulting Information Security Policy is to describe the actions and behaviors required to ensure that due care is taken to avoid inappropriate risks to Falcon Consulting, its business partners, and its stakeholders.':
            'The purpose of the Falcon Consulting Information Security Policy is to describe the actions and behaviors required to ensure that due care is taken to avoid inappropriate risks to Falcon Consulting, its business partners, and its stakeholders.',
          Audience: 'Audience',
          'The Falcon Consulting Information Security Policy applies equally to any individual, entity, or process that interacts with any Falcon Consulting Information Resource.':
            'The Falcon Consulting Information Security Policy applies equally to any individual, entity, or process that interacts with any Falcon Consulting Information Resource.',
          Responsibilities: 'Responsibilities',
          'Executive Management': 'Executive Management',
          'Ensure that an appropriate risk-based Information Security Program is implemented to protect the confidentiality, integrity, and availability of all Information Resources collected or maintained by or on behalf of Falcon Consulting.':
            'Ensure that an appropriate risk-based Information Security Program is implemented to protect the confidentiality, integrity, and availability of all Information Resources collected or maintained by or on behalf of Falcon Consulting.',
          'Ensure that information security processes are integrated with strategic and operational planning processes to secure the organization’s mission.':
            'Ensure that information security processes are integrated with strategic and operational planning processes to secure the organization’s mission.',
          'Ensure adequate information security financial and personnel resources are included in the budgeting and/or financial planning process.':
            'Ensure adequate information security financial and personnel resources are included in the budgeting and/or financial planning process.',
          'Ensure that the Security Team is given the necessary authority to secure the Information Resources under their control within the scope of the Falcon Consulting Information Security Program.':
            'Ensure that the Security Team is given the necessary authority to secure the Information Resources under their control within the scope of the Falcon Consulting Information Security Program.',
          'Designate an Information Security Officer and delegate authority to that individual to ensure compliance with applicable information security requirements.':
            'Designate an Information Security Officer and delegate authority to that individual to ensure compliance with applicable information security requirements.',
          'Ensure that the Information Security Officer, in coordination with the Security Team, reports annually to Executive Management on the effectiveness of the Falcon Consulting Information Security Program.':
            'Ensure that the Information Security Officer, in coordination with the Security Team, reports annually to Executive Management on the effectiveness of the Falcon Consulting Information Security Program.',
          'Information Security Team': 'Information Security Team',
          'Ensure compliance with applicable information security requirements.':
            'Ensure compliance with applicable information security requirements.',
          'Formulate, review and recommend information security policies.':
            'Formulate, review and recommend information security policies.',
          'Approve supporting procedures, standards, and guidelines related to information security.':
            'Approve supporting procedures, standards, and guidelines related to information security.',
          'Provide clear direction and visible management support for information security initiatives.':
            'Provide clear direction and visible management support for information security initiatives.',
          'Assess the adequacy and effectiveness of the information security policies and coordinate the implementation of information security controls.':
            'Assess the adequacy and effectiveness of the information security policies and coordinate the implementation of information security controls.',
          'Ensure that ongoing security activities are executed in compliance with policy.':
            'Ensure that ongoing security activities are executed in compliance with policy.',
          'Review and manage the information security policy waiver request process.':
            'Review and manage the information security policy waiver request process.',
          'Review information security incident information and recommend follow-up actions.':
            'Review information security incident information and recommend follow-up actions.',
          'Promote information security education, training, and awareness throughout Falcon Consulting, and initiate plans and programs to maintain information security awareness.':
            'Promote information security education, training, and awareness throughout Falcon Consulting, and initiate plans and programs to maintain information security awareness.',
          'Report annually, in coordination with the Security Officer, to Executive Management on the effectiveness of the Falcon Consulting Information Security Program, including progress of remedial actions.':
            'Report annually, in coordination with the Security Officer, to Executive Management on the effectiveness of the Falcon Consulting Information Security Program, including progress of remedial actions.',
          'All Employees, Contractors, and Other Third-Party Personnel':
            'All Employees, Contractors, and Other Third-Party Personnel',
          'Understand their responsibilities for complying with the Falcon Consulting Information Security Program.':
            'Understand their responsibilities for complying with the Falcon Consulting Information Security Program.',
          'Use Falcon Consulting Information Resources in compliance with all Falcon Consulting Information Security Policies.':
            'Use Falcon Consulting Information Resources in compliance with all Falcon Consulting Information Security Policies.',
          'Seek guidance from the Information Security Team for questions or issues related to information security.':
            'Seek guidance from the Information Security Team for questions or issues related to information security.',
          'Falcon Consulting maintains and communicates an Information Security Program consisting of topic-specific policies, standards, procedures and guidelines that:':
            'Falcon Consulting maintains and communicates an Information Security Program consisting of topic-specific policies, standards, procedures and guidelines that:',
          'Serve to protect the Confidentiality, Integrity, and Availability of the Information Resources maintained within the organization using administrative, physical and technical controls.':
            'Serve to protect the Confidentiality, Integrity, and Availability of the Information Resources maintained within the organization using administrative, physical and technical controls.',
          'Provide value to the way we conduct business and support institutional objectives.':
            'Provide value to the way we conduct business and support institutional objectives.',
          'Comply with all regulatory and legal requirements, including:':
            'Comply with all regulatory and legal requirements, including:',
          'State breach notification laws,': 'State breach notification laws,',
          'PCI Data Security Standard,': 'PCI Data Security Standard,',
          'Information Security best practices,': 'Information Security best practices,',
          'Contractual agreements,': 'Contractual agreements,',
          'All other applicable federal and state laws or regulations.':
            'All other applicable federal and state laws or regulations.',
          'The information security program is reviewed no less than annually or upon significant changes to the information security environment.':
            'The information security program is reviewed no less than annually or upon significant changes to the information security environment.',
          'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.':
            'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.',
          'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.':
            'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.',
          // Title 4
          'Acceptable Use Policy': 'Acceptable Use Policy',
          // Body 4
          'This policy applies to the use of information, electronic and computing devices, and network resources to conduct Falcon Consulting business or interact with internal networks and business systems, whether owned or leased by Falcon Consulting, the employee, or a third party. All employees, contractors, consultants, temporary, and other workers at Falcon Consulting and its subsidiaries are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with Falcon Consulting.':
            'This policy applies to the use of information, electronic and computing devices, and network resources to conduct Falcon Consulting business or interact with internal networks and business systems, whether owned or leased by Falcon Consulting, the employee, or a third party. All employees, contractors, consultants, temporary, and other workers at Falcon Consulting and its subsidiaries are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with Falcon Consulting.',
          'General Use and Ownership': 'General Use and Ownership',
          'Falcon Consulting proprietary information stored on electronic and computing devices whether owned or leased by Falcon Consulting, the employee or a third party, remains the sole property of Falcon Consulting. You must ensure through legal or technical means that proprietary information is protected in accordance with the Data Protection Standard.':
            'Falcon Consulting proprietary information stored on electronic and computing devices whether owned or leased by Falcon Consulting, the employee or a third party, remains the sole property of Falcon Consulting. You must ensure through legal or technical means that proprietary information is protected in accordance with the Data Protection Standard.',
          'You have a responsibility to promptly report the theft, loss or unauthorized disclosure of Falcon Consulting proprietary information.':
            'You have a responsibility to promptly report the theft, loss or unauthorized disclosure of Falcon Consulting proprietary information.',
          'You may access, use or share Falcon Consulting proprietary information only to the extent it is authorized and necessary to fulfill your assigned job duties.':
            'You may access, use or share Falcon Consulting proprietary information only to the extent it is authorized and necessary to fulfill your assigned job duties.',
          'Employees are responsible for exercising good judgment regarding the reasonableness of personal use. Individual departments are responsible for creating guidelines concerning personal use of Internet/Intranet/Extranet systems. In the absence of such policies, employees should be guided by departmental policies on personal use, and if there is any uncertainty, employees should consult their supervisor or manager.':
            'Employees are responsible for exercising good judgment regarding the reasonableness of personal use. Individual departments are responsible for creating guidelines concerning personal use of Internet/Intranet/Extranet systems. In the absence of such policies, employees should be guided by departmental policies on personal use, and if there is any uncertainty, employees should consult their supervisor or manager.',
          'For security and network maintenance purposes, authorized individuals within Falcon Consulting may monitor equipment, systems and network traffic at any time, per Audit Policy.':
            'For security and network maintenance purposes, authorized individuals within Falcon Consulting may monitor equipment, systems and network traffic at any time, per Audit Policy.',
          'Falcon Consulting reserves the right to audit networks and systems on a periodic basis to ensure compliance with this policy.':
            'Falcon Consulting reserves the right to audit networks and systems on a periodic basis to ensure compliance with this policy.',
          'Security and Proprietary Information': 'Security and Proprietary Information',
          'All mobile and computing devices that connect to the internal network must comply with the Minimum Access Policy.':
            'All mobile and computing devices that connect to the internal network must comply with the Minimum Access Policy.',
          'System level and user level passwords must comply with the Password Policy. Providing access to another individual, either deliberately or through failure to secure its access, is prohibited.':
            'System level and user level passwords must comply with the Password Policy. Providing access to another individual, either deliberately or through failure to secure its access, is prohibited.',
          'All computing devices must be secured with a password-protected screensaver with the automatic activation feature set to 10 minutes or less. You must lock the screen or log off when the device is unattended.':
            'All computing devices must be secured with a password-protected screensaver with the automatic activation feature set to 10 minutes or less. You must lock the screen or log off when the device is unattended.',
          'Postings by employees from a Falcon Consulting email address to newsgroups should contain a disclaimer stating that the opinions expressed are strictly their own and not necessarily those of Falcon Consulting, unless posting is in the course of business duties.':
            'Postings by employees from a Falcon Consulting email address to newsgroups should contain a disclaimer stating that the opinions expressed are strictly their own and not necessarily those of Falcon Consulting, unless posting is in the course of business duties.',
          'Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain malware.':
            'Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain malware.',
          'Unacceptable Use': 'Unacceptable Use',
          'The following activities are, in general, prohibited. Employees may be exempted from these restrictions during the course of their legitimate job responsibilities (e.g., systems administration staff may have a need to disable the network access of a host if that host is disrupting production services).':
            'The following activities are, in general, prohibited. Employees may be exempted from these restrictions during the course of their legitimate job responsibilities (e.g., systems administration staff may have a need to disable the network access of a host if that host is disrupting production services).',
          'Under no circumstances is an employee of Falcon Consulting authorized to engage in any activity that is illegal under local, state, federal or international law while utilizing Falcon Consulting-owned resources.':
            'Under no circumstances is an employee of Falcon Consulting authorized to engage in any activity that is illegal under local, state, federal or international law while utilizing Falcon Consulting-owned resources.',
          'The lists below are by no means exhaustive, but attempt to provide a framework for activities which fall into the category of unacceptable use.':
            'The lists below are by no means exhaustive, but attempt to provide a framework for activities which fall into the category of unacceptable use.',
          'System and Network Activities': 'System and Network Activities',
          'The following activities are strictly prohibited, with no exceptions:':
            'The following activities are strictly prohibited, with no exceptions:',
          "Violations of the rights of any person or company protected by copyright, trade secret, patent or other intellectual property, or similar laws or regulations, including, but not limited to, the installation or distribution of 'pirated' or other software products that are not appropriately licensed for use by Falcon Consulting.":
            "Violations of the rights of any person or company protected by copyright, trade secret, patent or other intellectual property, or similar laws or regulations, including, but not limited to, the installation or distribution of 'pirated' or other software products that are not appropriately licensed for use by Falcon Consulting.",
          'Unauthorized copying of copyrighted material including, but not limited to, digitization and distribution of photographs from magazines, books or other copyrighted sources, copyrighted music, and the installation of any copyrighted software for which Falcon Consulting or the end user does not have an active license is strictly prohibited.':
            'Unauthorized copying of copyrighted material including, but not limited to, digitization and distribution of photographs from magazines, books or other copyrighted sources, copyrighted music, and the installation of any copyrighted software for which Falcon Consulting or the end user does not have an active license is strictly prohibited.',
          'Accessing data, a server or an account for any purpose other than conducting Falcon Consulting business, even if you have authorized access, is prohibited.':
            'Accessing data, a server or an account for any purpose other than conducting Falcon Consulting business, even if you have authorized access, is prohibited.',
          'Exporting software, technical information, encryption software or technology, in violation of international or regional export control laws, is illegal. The appropriate management should be consulted prior to export of any material that is in question.':
            'Exporting software, technical information, encryption software or technology, in violation of international or regional export control laws, is illegal. The appropriate management should be consulted prior to export of any material that is in question.',
          'Introduction of malicious programs into the network or server (e.g., viruses, worms, Trojan horses, e-mail bombs, etc.).':
            'Introduction of malicious programs into the network or server (e.g., viruses, worms, Trojan horses, e-mail bombs, etc.).',
          'Revealing your account password to others or allowing use of your account by others. This includes family and other household members when work is being done at home.':
            'Revealing your account password to others or allowing use of your account by others. This includes family and other household members when work is being done at home.',
          "Using a Falcon Consulting computing asset to actively engage in procuring or transmitting material that is in violation of sexual harassment or hostile workplace laws in the user's local jurisdiction.":
            "Using a Falcon Consulting computing asset to actively engage in procuring or transmitting material that is in violation of sexual harassment or hostile workplace laws in the user's local jurisdiction.",
          'Making fraudulent offers of products, items, or services originating from any Falcon Consulting account.':
            'Making fraudulent offers of products, items, or services originating from any Falcon Consulting account.',
          'Making statements about warranty, expressly or implied, unless it is a part of normal job duties.':
            'Making statements about warranty, expressly or implied, unless it is a part of normal job duties.',
          "Effecting security breaches or disruptions of network communication. Security breaches include, but are not limited to, accessing data of which the employee is not an intended recipient or logging into a server or account that the employee is not expressly authorized to access, unless these duties are within the scope of regular duties. For purposes of this section, 'disruption' includes, but is not limited to, network sniffing, pinged floods, packet spoofing, denial of service, and forged routing information for malicious purposes.":
            "Effecting security breaches or disruptions of network communication. Security breaches include, but are not limited to, accessing data of which the employee is not an intended recipient or logging into a server or account that the employee is not expressly authorized to access, unless these duties are within the scope of regular duties. For purposes of this section, 'disruption' includes, but is not limited to, network sniffing, pinged floods, packet spoofing, denial of service, and forged routing information for malicious purposes.",
          'Port scanning or security scanning is expressly prohibited unless prior notification to Infosec is made.':
            'Port scanning or security scanning is expressly prohibited unless prior notification to Infosec is made.',
          "Executing any form of network monitoring which will intercept data not intended for the employee's host, unless this activity is a part of the employee's normal job/duty.":
            "Executing any form of network monitoring which will intercept data not intended for the employee's host, unless this activity is a part of the employee's normal job/duty.",
          'Circumventing user authentication or security of any host, network or account.':
            'Circumventing user authentication or security of any host, network or account.',
          'Introducing honeypots, honeynets, or similar technology on the Falcon Consulting network.':
            'Introducing honeypots, honeynets, or similar technology on the Falcon Consulting network.',
          "Interfering with or denying service to any user other than the employee's host (for example, denial of service attack).":
            "Interfering with or denying service to any user other than the employee's host (for example, denial of service attack).",
          "Using any program/script/command, or sending messages of any kind, with the intent to interfere with, or disable, a user's terminal session, via any means, locally or via the Internet/Intranet/Extranet.":
            "Using any program/script/command, or sending messages of any kind, with the intent to interfere with, or disable, a user's terminal session, via any means, locally or via the Internet/Intranet/Extranet.",
          'Providing information about, or lists of, Falcon Consulting employees to parties outside Falcon Consulting.':
            'Providing information about, or lists of, Falcon Consulting employees to parties outside Falcon Consulting.',
          'Email and Communication Activitiesa': 'Email and Communication Activitiesa',
          "When using company resources to access and use the Internet, users must realize they represent the company. Whenever employees state an affiliation to the company, they must also clearly indicate that 'the opinions expressed are my own and not necessarily those of the company'. Questions may be addressed to the IT Department":
            "When using company resources to access and use the Internet, users must realize they represent the company. Whenever employees state an affiliation to the company, they must also clearly indicate that 'the opinions expressed are my own and not necessarily those of the company'. Questions may be addressed to the IT Department",
          "Sending unsolicited email messages, including the sending of 'junk mail' or other advertising material to individuals who did not specifically request such material (email spam).":
            "Sending unsolicited email messages, including the sending of 'junk mail' or other advertising material to individuals who did not specifically request such material (email spam).",
          'Any form of harassment via email, telephone or paging, whether through language, frequency, or size of messages.':
            'Any form of harassment via email, telephone or paging, whether through language, frequency, or size of messages.',
          'Unauthorized use, or forging, of email header information.':
            'Unauthorized use, or forging, of email header information.',
          "Solicitation of email for any other email address, other than that of the poster's account, with the intent to harass or to collect replies.":
            "Solicitation of email for any other email address, other than that of the poster's account, with the intent to harass or to collect replies.",
          "Creating or forwarding 'chain letters', 'Ponzi' or other 'pyramid' schemes of any type.":
            "Creating or forwarding 'chain letters', 'Ponzi' or other 'pyramid' schemes of any type.",
          "Use of unsolicited email originating from within Falcon Consulting's networks of other Internet/Intranet/Extranet service providers on behalf of, or to advertise, any service hosted by Falcon Consulting or connected via Falcon Consulting's network.":
            "Use of unsolicited email originating from within Falcon Consulting's networks of other Internet/Intranet/Extranet service providers on behalf of, or to advertise, any service hosted by Falcon Consulting or connected via Falcon Consulting's network.",
          'Posting the same or similar non-business-related messages to large numbers of Usenet newsgroups (newsgroup spam).':
            'Posting the same or similar non-business-related messages to large numbers of Usenet newsgroups (newsgroup spam).',
          'Blogging and Social Media': 'Blogging and Social Media',
          "Blogging by employees, whether using Falcon Consulting’s property and systems or personal computer systems, is also subject to the terms and restrictions set forth in this Policy. Limited and occasional use of Falcon Consulting’s systems to engage in blogging is acceptable, provided that it is done in a professional and responsible manner, does not otherwise violate Falcon Consulting’s policy, is not detrimental to Falcon Consulting’s best interests, and does not interfere with an employee's regular work duties. Blogging from Falcon Consulting’s systems is also subject to monitoring.":
            "Blogging by employees, whether using Falcon Consulting’s property and systems or personal computer systems, is also subject to the terms and restrictions set forth in this Policy. Limited and occasional use of Falcon Consulting’s systems to engage in blogging is acceptable, provided that it is done in a professional and responsible manner, does not otherwise violate Falcon Consulting’s policy, is not detrimental to Falcon Consulting’s best interests, and does not interfere with an employee's regular work duties. Blogging from Falcon Consulting’s systems is also subject to monitoring.",
          'Falcon Consulting’s Confidential Information policy also applies to blogging. As such, Employees are prohibited from revealing any confidential or proprietary information, trade secrets or any other material covered by Company’s Confidential Information policy when engaged in blogging.':
            'Falcon Consulting’s Confidential Information policy also applies to blogging. As such, Employees are prohibited from revealing any confidential or proprietary information, trade secrets or any other material covered by Company’s Confidential Information policy when engaged in blogging.',
          'Employees shall not engage in any blogging that may harm or tarnish the image, reputation and/or goodwill of Falcon Consulting and/or any of its employees. Employees are also prohibited from making any discriminatory, disparaging, defamatory or harassing comments when blogging or otherwise engaging in any conduct prohibited by Falcon Consulting’s Non-Discrimination and Anti-Harassment policy.':
            'Employees shall not engage in any blogging that may harm or tarnish the image, reputation and/or goodwill of Falcon Consulting and/or any of its employees. Employees are also prohibited from making any discriminatory, disparaging, defamatory or harassing comments when blogging or otherwise engaging in any conduct prohibited by Falcon Consulting’s Non-Discrimination and Anti-Harassment policy.',
          'Employees may also not attribute personal statements, opinions or beliefs to Falcon Consulting when engaged in blogging. If an employee is expressing his or her beliefs and/or opinions in blogs, the employee may not, expressly or implicitly, represent themselves as an employee or representative of Falcon Consulting. Employees assume any and all risk associated with blogging.':
            'Employees may also not attribute personal statements, opinions or beliefs to Falcon Consulting when engaged in blogging. If an employee is expressing his or her beliefs and/or opinions in blogs, the employee may not, expressly or implicitly, represent themselves as an employee or representative of Falcon Consulting. Employees assume any and all risk associated with blogging.',
          'Apart from following all laws pertaining to the handling and disclosure of copyrighted or export controlled materials, Falcon Consulting’s trademarks, logos and any other Falcon Consulting intellectual property may also not be used in connection with any blogging activity':
            'Apart from following all laws pertaining to the handling and disclosure of copyrighted or export controlled materials, Falcon Consulting’s trademarks, logos and any other Falcon Consulting intellectual property may also not be used in connection with any blogging activity',
          // Title 5
          'Government Data Request Policy': 'Government Data Request Policy',
          // Body 5
          'This Government Data Request Policy sets out Falcon Consulting’s procedure for responding to a request received from a law enforcement or other government authority (together the “Requesting Authority“) to disclose personal information processed by Falcon Consulting (hereafter “Data Disclosure Request“) which is aligned with our Binding Corporate Rules: Government Data Request Procedure.':
            'This Government Data Request Policy sets out Falcon Consulting’s procedure for responding to a request received from a law enforcement or other government authority (together the “Requesting Authority“) to disclose personal information processed by Falcon Consulting (hereafter “Data Disclosure Request“) which is aligned with our Binding Corporate Rules: Government Data Request Procedure.',
          'Where Falcon Consulting receives a Data Disclosure Request, it will handle that Data Disclosure Request in accordance with this policy. . If applicable data protection law(s) require a higher standard of protection for personal information than is required by this policy, Falcon Consulting will comply with the relevant requirements of those applicable data protection law(s).':
            'Where Falcon Consulting receives a Data Disclosure Request, it will handle that Data Disclosure Request in accordance with this policy. . If applicable data protection law(s) require a higher standard of protection for personal information than is required by this policy, Falcon Consulting will comply with the relevant requirements of those applicable data protection law(s).',
          'The lists below are by no means exhaustive, but attempt to provide a framework for activities which fall into the category of unacceptable use.':
            'The lists below are by no means exhaustive, but attempt to provide a framework for activities which fall into the category of unacceptable use.',
          'General principle on Data Disclosure Requests':
            'General principle on Data Disclosure Requests',
          'As a general principle, Falcon Consulting does not disclose personal information in response to a Data Disclosure Request unless either:':
            'As a general principle, Falcon Consulting does not disclose personal information in response to a Data Disclosure Request unless either:',
          'it is under a compelling legal obligation to make such disclosure; or':
            'it is under a compelling legal obligation to make such disclosure; or',
          'taking into account the nature, context, purposes, scope and urgency of the Data Disclosure Request and the privacy rights and freedoms of any affected individuals, there is an imminent risk of serious harm that merits compliance with the Data Disclosure Requests in any event.':
            'taking into account the nature, context, purposes, scope and urgency of the Data Disclosure Request and the privacy rights and freedoms of any affected individuals, there is an imminent risk of serious harm that merits compliance with the Data Disclosure Requests in any event.',
          'For that reason, unless it is legally prohibited from doing so or there is an imminent risk of serious harm, Falcon Consulting will notify and consult with the competent data protection authorities (and, where it processes the personal information on behalf of a Customer, the Customer) to address the Data Disclosure Request.':
            'For that reason, unless it is legally prohibited from doing so or there is an imminent risk of serious harm, Falcon Consulting will notify and consult with the competent data protection authorities (and, where it processes the personal information on behalf of a Customer, the Customer) to address the Data Disclosure Request.',
          'Handling of a Data Disclosure Request': 'Handling of a Data Disclosure Request',
          'If a Falcon Consulting Group Member receives a Data Disclosure Request, the recipient of the request must pass it to Falcon Consulting’s Chief Privacy Officer and Privacy Team (collectively, the “Privacy Team”) immediately upon receipt, indicating the date on which it was received together with any other information that may assist the Privacy Team to respond to the request.':
            'If a Falcon Consulting Group Member receives a Data Disclosure Request, the recipient of the request must pass it to Falcon Consulting’s Chief Privacy Officer and Privacy Team (collectively, the “Privacy Team”) immediately upon receipt, indicating the date on which it was received together with any other information that may assist the Privacy Team to respond to the request.',
          'The Requesting Authority’s request does not have to be made in writing, made under a Court order, or mention data protection law to qualify as a Data Disclosure Request. Any Data Disclosure Request, however made, must be notified to the Privacy Team for review.':
            'The Requesting Authority’s request does not have to be made in writing, made under a Court order, or mention data protection law to qualify as a Data Disclosure Request. Any Data Disclosure Request, however made, must be notified to the Privacy Team for review.',
          'Falcon Consulting’s Privacy Team will carefully review each and every Data Disclosure Request on a case-by-case basis. The Privacy Team will liaise with the legal department and outside counsel as appropriate to deal with the request to determine the nature, context, purposes, scope and urgency of the Data Disclosure Request, and its validity under applicable laws, to identify whether action may be needed to challenge the Data Disclosure Request and/or to notify the Customer and/or competent data protection authorities in accordance with paragraph 4.':
            'Falcon Consulting’s Privacy Team will carefully review each and every Data Disclosure Request on a case-by-case basis. The Privacy Team will liaise with the legal department and outside counsel as appropriate to deal with the request to determine the nature, context, purposes, scope and urgency of the Data Disclosure Request, and its validity under applicable laws, to identify whether action may be needed to challenge the Data Disclosure Request and/or to notify the Customer and/or competent data protection authorities in accordance with paragraph 4.',
          'Notice of a Data Disclosure Request': 'Notice of a Data Disclosure Request',
          'Notice to the Customer': 'Notice to the Customer',
          'If a request concerns personal information for which a Customer is the controller, Falcon Consulting will ordinarily ask the Requesting Authority to make the Data Disclosure Request directly to the relevant Customer. If the Requesting Authority agrees, Falcon Consulting will support the Customer in accordance with the terms of its contract to respond to the Data Disclosure Request.':
            'If a request concerns personal information for which a Customer is the controller, Falcon Consulting will ordinarily ask the Requesting Authority to make the Data Disclosure Request directly to the relevant Customer. If the Requesting Authority agrees, Falcon Consulting will support the Customer in accordance with the terms of its contract to respond to the Data Disclosure Request.',
          'If this is not possible (for example, because the Requesting Authority declines to make the Data Disclosure Request directly to the Customer, does not know the customer’s identity, or if Falcon Consulting is not permitted by law to disclose the Data Disclosure Request), Falcon Consulting will notify and provide the Customer with the details of the Data Disclosure Request prior to disclosing any personal information, unless legally prohibited from doing so or where an imminent risk of serious harm exists that prohibits prior notification.':
            'If this is not possible (for example, because the Requesting Authority declines to make the Data Disclosure Request directly to the Customer, does not know the customer’s identity, or if Falcon Consulting is not permitted by law to disclose the Data Disclosure Request), Falcon Consulting will notify and provide the Customer with the details of the Data Disclosure Request prior to disclosing any personal information, unless legally prohibited from doing so or where an imminent risk of serious harm exists that prohibits prior notification.',
          'Notice to the competent data protection authorities':
            'Notice to the competent data protection authorities',
          'If the Requesting Authority is in a country that does not provide an adequate level of protection for the personal information in accordance with applicable data protection laws, then Falcon Consulting will also put the request on hold to notify and consult with the competent data protection authorities, unless legally prohibited or where an imminent risk of serious harm exists that prohibits prior notification.':
            'If the Requesting Authority is in a country that does not provide an adequate level of protection for the personal information in accordance with applicable data protection laws, then Falcon Consulting will also put the request on hold to notify and consult with the competent data protection authorities, unless legally prohibited or where an imminent risk of serious harm exists that prohibits prior notification.',
          'Where Falcon Consulting is prohibited from notifying the competent data protection authorities and suspending the request, Falcon Consulting will use its best efforts (taking into account the nature, context, purposes, scope, and urgency of the request) to inform the Requesting Authority about its obligations under applicable data protection law and to obtain the right to waive this prohibition. Such efforts may include asking the Requesting Authority to put the request on hold, so that Falcon Consulting can consult with the competent data protection authorities, or to allow disclosure to specified personnel at Falcon Consulting’s customer, and may also, in appropriate circumstances, include seeking a court order to this effect. Falcon Consulting will maintain a written record of the efforts it takes.':
            'Where Falcon Consulting is prohibited from notifying the competent data protection authorities and suspending the request, Falcon Consulting will use its best efforts (taking into account the nature, context, purposes, scope, and urgency of the request) to inform the Requesting Authority about its obligations under applicable data protection law and to obtain the right to waive this prohibition. Such efforts may include asking the Requesting Authority to put the request on hold, so that Falcon Consulting can consult with the competent data protection authorities, or to allow disclosure to specified personnel at Falcon Consulting’s customer, and may also, in appropriate circumstances, include seeking a court order to this effect. Falcon Consulting will maintain a written record of the efforts it takes.',
          'Transparency reports': 'Transparency reports',
          'Falcon Consulting commits to preparing a semi-annual report (a “Transparency Report”), which reflects the number and type of Data Disclosure Requests it has received for the preceding six months, as may be limited by applicable law or court order. Falcon Consulting shall publish the Transparency Report on its website, and make the report available upon request to competent data protection authorities.':
            'Falcon Consulting commits to preparing a semi-annual report (a “Transparency Report”), which reflects the number and type of Data Disclosure Requests it has received for the preceding six months, as may be limited by applicable law or court order. Falcon Consulting shall publish the Transparency Report on its website, and make the report available upon request to competent data protection authorities.',
          'Bulk transfers': 'Bulk transfers',
          'In no event will any Group Member transfer Personal Information to a Requesting Authority in a massive, disproportionate, and indiscriminate manner that goes beyond what is necessary in a democratic society.':
            'In no event will any Group Member transfer Personal Information to a Requesting Authority in a massive, disproportionate, and indiscriminate manner that goes beyond what is necessary in a democratic society.',
          // Title 6
          'PRIVACY NOTICE': 'PRIVACY NOTICE',
          // Body 6
          'Last updated June 04, 2022': 'Last updated June 04, 2022',
          'This privacy notice for Falcon Consulting ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:':
            'This privacy notice for Falcon Consulting ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:',
          'Visit our website at https://www.falconconsulting.fr, or any website of ours that links to this privacy notice':
            'Visit our website at https://www.falconconsulting.fr, or any website of ours that links to this privacy notice',
          'Engage with us in other related ways, including any sales, marketing, or events':
            'Engage with us in other related ways, including any sales, marketing, or events',
          'Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@falconconsulting.fr.':
            'Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@falconconsulting.fr.',
          'SUMMARY OF KEY POINTS': 'SUMMARY OF KEY POINTS',
          'This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.':
            'This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.',
          'What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Falcon Consulting and the Services, the choices you make, and the products and features you use.':
            'What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Falcon Consulting and the Services, the choices you make, and the products and features you use.',
          'Do we process any sensitive personal information? We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.':
            'Do we process any sensitive personal information? We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.',
          'Do we receive any information from third parties? We do not receive any information from third parties.':
            'Do we receive any information from third parties? We do not receive any information from third parties.',
          'How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.':
            'How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.',
          'In what situations and with which parties do we share personal information?':
            'In what situations and with which parties do we share personal information?',
          'We may share information in specific situations and with specific third parties.':
            'We may share information in specific situations and with specific third parties.',
          'How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.':
            'How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.',
          'What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.':
            'What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.',
          'How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.':
            'How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.',
          'TABLE OF CONTENTS': 'TABLE OF CONTENTS',
          'WHAT INFORMATION DO WE COLLECT?': 'WHAT INFORMATION DO WE COLLECT?',
          'HOW DO WE PROCESS YOUR INFORMATION?': 'HOW DO WE PROCESS YOUR INFORMATION?',
          'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?':
            'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?',
          'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?':
            'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
          'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?':
            'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
          'HOW DO WE HANDLE YOUR SOCIAL LOGINS?': 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?',
          'HOW LONG DO WE KEEP YOUR INFORMATION?': 'HOW LONG DO WE KEEP YOUR INFORMATION?',
          'HOW DO WE KEEP YOUR INFORMATION SAFE?': 'HOW DO WE KEEP YOUR INFORMATION SAFE?',
          'WHAT ARE YOUR PRIVACY RIGHTS?': 'WHAT ARE YOUR PRIVACY RIGHTS?',
          'CONTROLS FOR DO-NOT-TRACK FEATURES': 'CONTROLS FOR DO-NOT-TRACK FEATURES',
          'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?':
            'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
          'DO WE MAKE UPDATES TO THIS NOTICE?': 'DO WE MAKE UPDATES TO THIS NOTICE?',
          'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?': 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
          'Personal information you disclose to us': 'Personal information you disclose to us',
          'In Short: We collect personal information that you provide to us.':
            'In Short: We collect personal information that you provide to us.',
          'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.':
            'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.',
          'Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:':
            'Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:',
          names: 'names',
          'phone numbers email addresses billing addresses':
            'phone numbers email addresses billing addresses',
          'Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:':
            'Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:',
          'health data': 'health data',
          'student data': 'student data',
          'Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.':
            'Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.',
          'All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.':
            'All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.',
          'HOW DO WE PROCESS YOUR INFORMATION?': 'HOW DO WE PROCESS YOUR INFORMATION?',
          'In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.':
            'In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.',
          'We process your personal information for a variety of reasons, depending on how you interact with our Services, including:':
            'We process your personal information for a variety of reasons, depending on how you interact with our Services, including:',
          "To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.":
            "To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.",
          'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?':
            'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?',
          'In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.':
            'In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.',
          'If you are located in the EU or UK, this section applies to you.':
            'If you are located in the EU or UK, this section applies to you.',
          'The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:':
            'The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:',
          'Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.':
            'Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.',
          'Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.':
            'Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.',
          'Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.':
            'Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.',
          "In legal terms, we are generally the 'data controller' under European data protection laws of the personal information described in this privacy notice, since we determine the means and/or purposes of the data processing we perform. This privacy notice does not apply to the personal information we process as a 'data processor' on behalf of our customers. In those situations, the customer that we provide services to and with whom we have entered into a data processing agreement is the 'data controller' responsible for your personal information, and we merely process your information on their behalf in accordance with your instructions. If you want to know more about our customers' privacy practices, you should read their privacy policies and direct any questions you have to them.":
            "In legal terms, we are generally the 'data controller' under European data protection laws of the personal information described in this privacy notice, since we determine the means and/or purposes of the data processing we perform. This privacy notice does not apply to the personal information we process as a 'data processor' on behalf of our customers. In those situations, the customer that we provide services to and with whom we have entered into a data processing agreement is the 'data controller' responsible for your personal information, and we merely process your information on their behalf in accordance with your instructions. If you want to know more about our customers' privacy practices, you should read their privacy policies and direct any questions you have to them.",
          'If you are located in Canada, this section applies to you.':
            'If you are located in Canada, this section applies to you.',
          'We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.':
            'We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.',
          'In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:':
            'In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:',
          'If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way':
            'If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way',
          'For investigations and fraud detection and prevention':
            'For investigations and fraud detection and prevention',
          'For business transactions provided certain conditions are met':
            'For business transactions provided certain conditions are met',
          'If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim':
            'If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim',
          'For identifying injured, ill, or deceased persons and communicating with next of kin':
            'For identifying injured, ill, or deceased persons and communicating with next of kin',
          'If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse':
            'If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse',
          'If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province':
            'If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province',
          'If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records':
            'If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records',
          'If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced':
            'If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced',
          'If the collection is solely for journalistic, artistic, or literary purposes':
            'If the collection is solely for journalistic, artistic, or literary purposes',
          'If the information is publicly available and is specified by the regulations':
            'If the information is publicly available and is specified by the regulations',
          'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?':
            'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
          'In Short: We may share information in specific situations described in this section and/or with the following third parties.':
            'In Short: We may share information in specific situations described in this section and/or with the following third parties.',
          'We may need to share your personal information in the following situations:':
            'We may need to share your personal information in the following situations:',
          'Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.':
            'Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
          'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?':
            'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
          'In Short: We may use cookies and other tracking technologies to collect and store your information.':
            'In Short: We may use cookies and other tracking technologies to collect and store your information.',
          'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.':
            'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.',
          'HOW DO WE HANDLE YOUR SOCIAL LOGINS?': 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?',
          'In Short: If you choose to register or log in to our services using a social media account, we may have access to certain information about you.':
            'In Short: If you choose to register or log in to our services using a social media account, we may have access to certain information about you.',
          'Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.':
            'Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.',
          'We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.':
            'We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.',
          'HOW LONG DO WE KEEP YOUR INFORMATION?': 'HOW LONG DO WE KEEP YOUR INFORMATION?',
          'In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.':
            'In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.',
          'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 1 year.':
            'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 1 year.',
          'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.':
            'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.',
          'HOW DO WE KEEP YOUR INFORMATION SAFE?': 'HOW DO WE KEEP YOUR INFORMATION SAFE?',
          'In Short: We aim to protect your personal information through a system of organizational and technical security measures.':
            'In Short: We aim to protect your personal information through a system of organizational and technical security measures.',
          'We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.':
            'We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.',
          'WHAT ARE YOUR PRIVACY RIGHTS?': 'WHAT ARE YOUR PRIVACY RIGHTS?',
          'In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.':
            'In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.',
          "In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.":
            "In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.",
          'We will consider and act upon any request in accordance with applicable data protection laws.':
            'We will consider and act upon any request in accordance with applicable data protection laws.',
          'If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.':
            'If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.',
          'If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.':
            'If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.',
          "Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.":
            "Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.",
          'However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.':
            'However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.',
          "Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'":
            "Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'",
          'below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.':
            'below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.',
          'Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.':
            'Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.',
          'CONTROLS FOR DO-NOT-TRACK FEATURES': 'CONTROLS FOR DO-NOT-TRACK FEATURES',
          "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.":
            "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.",
          'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?':
            'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
          'In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.':
            'In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.,',
          "California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.":
            "California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.",
          'If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).':
            'If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).',
          'CCPA Privacy Notice': 'CCPA Privacy Notice',
          "The California Code of Regulations defines a 'resident' as:":
            "The California Code of Regulations defines a 'resident' as:",
          '(1) every individual who is in the State of California for other than a temporary or transitory purpose and (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose':
            '(1) every individual who is in the State of California for other than a temporary or transitory purpose and (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose',
          "All other individuals are defined as 'non-residents.'":
            "All other individuals are defined as 'non-residents.'",
          "If this definition of 'resident' applies to you, we must adhere to certain rights and obligations regarding your personal information.":
            "If this definition of 'resident' applies to you, we must adhere to certain rights and obligations regarding your personal information.",
          'What categories of personal information do we collect?':
            'What categories of personal information do we collect?',
          'We have collected the following categories of personal information in the past twelve (12) months:':
            'We have collected the following categories of personal information in the past twelve (12) months:',
          'Personal information categories listed in the California Customer Records statute':
            'Personal information categories listed in the California Customer Records statute',
          'Internet or other similar network activity':
            'Internet or other similar network activity',
          'Geolocation data': 'Geolocation data',
          'Professional or employment-related information':
            'Professional or employment-related information',
          'Education Information': 'Education Information',
          'We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:':
            'We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:',
          'Receiving help through our customer support channels;':
            'Receiving help through our customer support channels;',
          'Participation in customer surveys or contests; and':
            'Participation in customer surveys or contests; and',
          'Facilitation in the delivery of our Services and to respond to your inquiries.':
            'Facilitation in the delivery of our Services and to respond to your inquiries.',
          'How do we use and share your personal information?':
            'How do we use and share your personal information?',
          'More information about our data collection and sharing practices can be found in this privacy notice.':
            'More information about our data collection and sharing practices can be found in this privacy notice.',
          'You may contact us by email at contact@falconconsulting.fr, or by referring to the contact details at the bottom of this document.':
            'You may contact us by email at contact@falconconsulting.fr, or by referring to the contact details at the bottom of this document.',
          'If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.':
            'If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.',
          'Will your information be shared with anyone else?':
            'Will your information be shared with anyone else?',
          'We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for profit entity that processes the information on our behalf.':
            'We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for profit entity that processes the information on our behalf.',
          "We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.":
            "We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.",
          'Falcon Consulting has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Falcon Consulting will not sell personal information in the future belonging to website visitors, users, and other consumers.':
            'Falcon Consulting has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Falcon Consulting will not sell personal information in the future belonging to website visitors, users, and other consumers.',
          'Your rights with respect to your personal data':
            'Your rights with respect to your personal data',
          'Right to request deletion of the data — Request to delete':
            'Right to request deletion of the data — Request to delete',
          'You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.':
            'You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.',
          'Right to be informed — Request to know': 'Right to be informed — Request to know',
          'Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell your personal information to third parties;':
            'Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell your personal information to third parties;',
          'the categories of personal information that we sold or disclosed for a business purpose;':
            'the categories of personal information that we sold or disclosed for a business purpose;',
          'the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and':
            'the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and',
          'the business or commercial purpose for collecting or selling personal information.':
            'the business or commercial purpose for collecting or selling personal information.',
          'In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re- identify individual data to verify a consumer request.':
            'In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re- identify individual data to verify a consumer request.',
          'Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights We will not discriminate against you if you exercise your privacy rights. Verification process':
            'Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights We will not discriminate against you if you exercise your privacy rights. Verification process',
          'Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.':
            'Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.',
          'We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.':
            'We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.',
          'Other privacy rights You may object to the processing of your personal information.':
            'Other privacy rights You may object to the processing of your personal information.',
          'You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.':
            'You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.',
          'You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.':
            'You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.',
          'To exercise these rights, you can contact us by email at contact@falconconsulting.fr, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.':
            'To exercise these rights, you can contact us by email at contact@falconconsulting.fr, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.',
          'DO WE MAKE UPDATES TO THIS NOTICE?': 'DO WE MAKE UPDATES TO THIS NOTICE?',
          'In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.':
            'In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.',
          "We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.":
            "We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.",
          'If you have questions or comments about this notice, you may email us at contact@falconconsulting.fr or by post to:':
            'If you have questions or comments about this notice, you may email us at contact@falconconsulting.fr or by post to:',
          "If you are a resident in the European Economic Area, the 'data controller' of your personal information is Falcon Consulting. Falcon Consulting has appointed Zain Asif to be its representative in the EEA. You can contact them directly regarding the processing of your information by Falcon Consulting, by email at zain.asif@falconconsulting.fr, by visiting falconconsulting.fr, or by post to:":
            "If you are a resident in the European Economic Area, the 'data controller' of your personal information is Falcon Consulting. Falcon Consulting has appointed Zain Asif to be its representative in the EEA. You can contact them directly regarding the processing of your information by Falcon Consulting, by email at zain.asif@falconconsulting.fr, by visiting falconconsulting.fr, or by post to:",
          // Title 7
          'Data Breach Policy': 'Data Breach Policy',
          // Body 7
          'Data breaches are increasingly common occurrences whether caused through human error or malicious intent. Falcon Consulting operations rely on the proper use of Confidential Information and Personally Identifiable Information (PII) on a daily basis. Managing risk and responding in an organized way to Incidents and Breaches is key to operations.':
            'Data breaches are increasingly common occurrences whether caused through human error or malicious intent. Falcon Consulting operations rely on the proper use of Confidential Information and Personally Identifiable Information (PII) on a daily basis. Managing risk and responding in an organized way to Incidents and Breaches is key to operations.',
          'Falcon Consulting must have a robust and systematic process for responding to reported data security Incidents and Breaches. This policy is designed to standardize the Falcon Consulting-wide response to any reported Breach or Incident, and ensure that they are appropriately logged and managed in accordance with best practice guidelines. Standardized processes and procedures help to ensure the Falcon Consulting can act responsibly, respond effectively, and protect its information assets to the extent possible.':
            'Falcon Consulting must have a robust and systematic process for responding to reported data security Incidents and Breaches. This policy is designed to standardize the Falcon Consulting-wide response to any reported Breach or Incident, and ensure that they are appropriately logged and managed in accordance with best practice guidelines. Standardized processes and procedures help to ensure the Falcon Consulting can act responsibly, respond effectively, and protect its information assets to the extent possible.',
          'This policy applies to all Falcon Consulting staff.':
            'This policy applies to all Falcon Consulting staff.',
          'GENERAL INFORMATION': 'GENERAL INFORMATION',
          "A 'Data Security Incident' or “Incident’ shall mean an accidental or deliberate event that results in or constitutes an imminent threat of the unauthorized access, loss, disclosure, modification, disruption, or destruction of communication or information resources of the Falcon Consulting.":
            "A 'Data Security Incident' or “Incident’ shall mean an accidental or deliberate event that results in or constitutes an imminent threat of the unauthorized access, loss, disclosure, modification, disruption, or destruction of communication or information resources of the Falcon Consulting.",
          'Common examples of data security Incidents include, but are not limited to, any of the following:':
            'Common examples of data security Incidents include, but are not limited to, any of the following:',
          'Successful attempts to gain unauthorized access to a Falcon Consulting system or regardless of where such information is located':
            'Successful attempts to gain unauthorized access to a Falcon Consulting system or regardless of where such information is located',
          'Unwanted disruption or denial of service': 'Unwanted disruption or denial of service',
          'The unauthorized use of a Falcon Consulting system for the processing or storage of Confidential Information or PII':
            'The unauthorized use of a Falcon Consulting system for the processing or storage of Confidential Information or PII',
          'Changes to Falcon Consulting system hardware, firmware, or software characteristics without the Falcon Consulting’s knowledge, instruction, or consent':
            'Changes to Falcon Consulting system hardware, firmware, or software characteristics without the Falcon Consulting’s knowledge, instruction, or consent',
          'Loss or theft of equipment where Confidential Information or PII is stored':
            'Loss or theft of equipment where Confidential Information or PII is stored',
          'Unforeseen circumstances such as a fire or flood that could lead to the loss or misuse of Confidential Information or PII':
            'Unforeseen circumstances such as a fire or flood that could lead to the loss or misuse of Confidential Information or PII',
          'Human error involving the loss or mistaken transmission of Confidential Information or PII':
            'Human error involving the loss or mistaken transmission of Confidential Information or PII',
          'Hacking, social engineering, phishing or other subversive attacks where information is obtained by deceitful practice':
            'Hacking, social engineering, phishing or other subversive attacks where information is obtained by deceitful practice',
          "A 'Data Security Breach' or 'Breach' is any Incident where Falcon Consulting cannot put in place controls or take action to reasonably prevent the misuse of Confidential Information or PII. A Breach is also an Incident where data has been misused.":
            "A 'Data Security Breach' or 'Breach' is any Incident where Falcon Consulting cannot put in place controls or take action to reasonably prevent the misuse of Confidential Information or PII. A Breach is also an Incident where data has been misused.",
          'Adopting a standardized and consistent approach to Incident management shall ensure that:':
            'Adopting a standardized and consistent approach to Incident management shall ensure that:',
          'Incidents are reported in a timely manner and can be properly investigated':
            'Incidents are reported in a timely manner and can be properly investigated',
          'Incidents are handled by appropriately authorized and skilled personnel':
            'Incidents are handled by appropriately authorized and skilled personnel',
          'Appropriate levels of management are involved in response management':
            'Appropriate levels of management are involved in response management',
          'Incidents are recorded and documented': 'Incidents are recorded and documented',
          'Organizational impacts are understood and action is taken to prevent further damage':
            'Organizational impacts are understood and action is taken to prevent further damage',
          'Evidence is gathered, recorded, and maintained in a form that will withstand internal and external scrutiny':
            'Evidence is gathered, recorded, and maintained in a form that will withstand internal and external scrutiny',
          'External agencies, customers, and data users are informed as required':
            'External agencies, customers, and data users are informed as required',
          'Incidents are dealt with in a timely manner and normal operations are restored':
            'Incidents are dealt with in a timely manner and normal operations are restored',
          'Incidents are reviewed to identify improvements in policies and procedures':
            'Incidents are reviewed to identify improvements in policies and procedures',
          'Incidents can occur locally, in the cloud, or through third party service providers. Reporting and management of Incidents shall occur similarly. Third party providers shall also be governed by contract terms and liability as defined in their operational agreements.':
            'Incidents can occur locally, in the cloud, or through third party service providers. Reporting and management of Incidents shall occur similarly. Third party providers shall also be governed by contract terms and liability as defined in their operational agreements.',
          'DATA CLASSIFICATIONS': 'DATA CLASSIFICATIONS',
          'Incidents vary in impact and risk depending on a number of mitigating factors including the content and quantity of the data involved. It is critically important that Falcon Consulting management respond quickly and identify the data classification of the Incident. This allows staff to respond accordingly in a timely and thorough manner.':
            'Incidents vary in impact and risk depending on a number of mitigating factors including the content and quantity of the data involved. It is critically important that Falcon Consulting management respond quickly and identify the data classification of the Incident. This allows staff to respond accordingly in a timely and thorough manner.',
          'All reported Incidents shall be classified as below in order to assess risk and approaches to mitigate the situation. Data classification shall refer to the following Falcon Consulting data categories:':
            'All reported Incidents shall be classified as below in order to assess risk and approaches to mitigate the situation. Data classification shall refer to the following Falcon Consulting data categories:',
          'Public Data - Information intended for public and community use or information that can be made public without any negative impact on the Falcon Consulting or its customers. PII shall never be considered public data unless the data is Directory Information as defined by Falcon Consulting policy.':
            'Public Data - Information intended for public and community use or information that can be made public without any negative impact on the Falcon Consulting or its customers. PII shall never be considered public data unless the data is Directory Information as defined by Falcon Consulting policy.',
          'Confidential/Internal Data - Information of a more sensitive nature to the business and educational operations of Falcon Consulting. This data represents basic intellectual capital, applications, and general knowledge. Access shall be limited to only those people that need to know as part of their role within the Falcon Consulting. Employee and Educator PII (with the exception of Social Security Numbers (SSN), financial information, or other critical information) falls within this classification.':
            'Confidential/Internal Data - Information of a more sensitive nature to the business and educational operations of Falcon Consulting. This data represents basic intellectual capital, applications, and general knowledge. Access shall be limited to only those people that need to know as part of their role within the Falcon Consulting. Employee and Educator PII (with the exception of Social Security Numbers (SSN), financial information, or other critical information) falls within this classification.',
          'Highly Confidential Data- Information that, if breached, causes significant damage to Falcon Consulting operations, reputation, and/or business continuity. Access to this information should be highly restricted. PII falls into this category of data. Employee or Educator Financial Information, Social Security Numbers, and other critical information also fall into this classification.':
            'Highly Confidential Data- Information that, if breached, causes significant damage to Falcon Consulting operations, reputation, and/or business continuity. Access to this information should be highly restricted. PII falls into this category of data. Employee or Educator Financial Information, Social Security Numbers, and other critical information also fall into this classification.',
          'INCIDENT REPORTING': 'INCIDENT REPORTING',
          'The following process shall be followed when responding to a suspected Incident:':
            'The following process shall be followed when responding to a suspected Incident:',
          'Confirmed or suspected Incidents shall be reported promptly to the Security manager. A formal report shall be filed that includes full and accurate details of the Incident including who is reporting the Incident and what classification of data is involved.':
            'Confirmed or suspected Incidents shall be reported promptly to the Security manager. A formal report shall be filed that includes full and accurate details of the Incident including who is reporting the Incident and what classification of data is involved.',
          'Once an Incident is reported, the Security manager shall conduct an assessment to establish the severity of the Incident, next steps in response, and potential remedies and solutions. Based on this assessment, the Security manager shall determine if this Incident remains an Incident or if it needs to be categorized as a Breach.':
            'Once an Incident is reported, the Security manager shall conduct an assessment to establish the severity of the Incident, next steps in response, and potential remedies and solutions. Based on this assessment, the Security manager shall determine if this Incident remains an Incident or if it needs to be categorized as a Breach.',
          'All Incidents and Breaches will be centrally logged and documented to ensure appropriate documentation, oversight, and consistency in response, management, and reporting.':
            'All Incidents and Breaches will be centrally logged and documented to ensure appropriate documentation, oversight, and consistency in response, management, and reporting.',
          CLASSIFICATION: 'CLASSIFICATION',
          'Data Breaches or Incidents shall be classified as follows:':
            'Data Breaches or Incidents shall be classified as follows:',
          'Critical/Major Breach or Incident – Incidents or Breaches in this category deal with Confidential Information or PII and are on a large scale (Falcon Consulting-wide). All Incidents or Breaches involving PII will be classified as Critical or Major. They typically have the following attributes:':
            'Critical/Major Breach or Incident – Incidents or Breaches in this category deal with Confidential Information or PII and are on a large scale (Falcon Consulting-wide). All Incidents or Breaches involving PII will be classified as Critical or Major. They typically have the following attributes:',
          'Any Incident that has been determined to be a Breach':
            'Any Incident that has been determined to be a Breach',
          'Significant Confidential Information or PII loss, potential for lack of business continuity, Falcon Consulting exposure, or irreversible consequences are imminent':
            'Significant Confidential Information or PII loss, potential for lack of business continuity, Falcon Consulting exposure, or irreversible consequences are imminent',
          'Negative media coverage is likely and exposure is high':
            'Negative media coverage is likely and exposure is high',
          'Legal or contractual remedies may be required':
            'Legal or contractual remedies may be required',
          'Requires significant reporting beyond normal operating procedures':
            'Requires significant reporting beyond normal operating procedures',
          'Any breach of contract that involves the misuse or unauthorized access to PII by a Contract Provider':
            'Any breach of contract that involves the misuse or unauthorized access to PII by a Contract Provider',
          'Moderately Critical/Serious Incident – Breaches or Incidents in this category typically deal with Confidential Information and are on a medium scale (e.g. 100 users on the internal network, application or database related, limited exposure). Incidents in this category typically have the following attributes:':
            'Moderately Critical/Serious Incident – Breaches or Incidents in this category typically deal with Confidential Information and are on a medium scale (e.g. 100 users on the internal network, application or database related, limited exposure). Incidents in this category typically have the following attributes:',
          'Risk to the Falcon Consulting is moderate': 'Risk to the Falcon Consulting is moderate',
          'Third party service provider and subcontractors may be involved':
            'Third party service provider and subcontractors may be involved',
          'Data loss is possible but localized/compartmentalized, potential for limited business continuity losses, and minimized Falcon Consulting exposure':
            'Data loss is possible but localized/compartmentalized, potential for limited business continuity losses, and minimized Falcon Consulting exposure',
          'Significant user inconvenience is likely': 'Significant user inconvenience is likely',
          'Service outages are likely while the breach is addressed':
            'Service outages are likely while the breach is addressed',
          'Negative media coverage is possible but exposure is limited':
            'Negative media coverage is possible but exposure is limited',
          'Disclosure of Educator or Employee PII is contained and manageable':
            'Disclosure of Educator or Employee PII is contained and manageable',
          'Low Criticality/Minor Incident – Incidents in this category typically deal with personal or internal data and are on a small or individualized scale (e.g. 10 users on the internal network, personal or mobile device related). Incidents in this category typically have the following attributes:':
            'Low Criticality/Minor Incident – Incidents in this category typically deal with personal or internal data and are on a small or individualized scale (e.g. 10 users on the internal network, personal or mobile device related). Incidents in this category typically have the following attributes:',
          'Risk to the Falcon Consulting is low': 'Risk to the Falcon Consulting is low',
          'User inconvenience is likely but not Falcon Consulting damaging':
            'User inconvenience is likely but not Falcon Consulting damaging',
          'Internal data released but data is not student, employee, or confidential in nature':
            'Internal data released but data is not student, employee, or confidential in nature',
          'Loss of data is totally contained on encrypted hardware':
            'Loss of data is totally contained on encrypted hardware',
          'Incident can be addressed through normal support channels':
            'Incident can be addressed through normal support channels',
          'INCIDENT RESPONSE': 'INCIDENT RESPONSE',
          'Management response to any reported Incident shall involve the following activities:':
            'Management response to any reported Incident shall involve the following activities:',
          'Assess, Contain and Recover Data - All security Incidents shall have immediate analysis of the Incident and an Incident report completed by the Security manager or their designee. This analysis shall include a determination of whether this Incident should be characterized as a Breach. This analysis shall be documented and shared with the [Incident Appropriate Role], the affected parties, and any other relevant stakeholders. At a minimum, the Security manager shall:':
            'Assess, Contain and Recover Data - All security Incidents shall have immediate analysis of the Incident and an Incident report completed by the Security manager or their designee. This analysis shall include a determination of whether this Incident should be characterized as a Breach. This analysis shall be documented and shared with the [Incident Appropriate Role], the affected parties, and any other relevant stakeholders. At a minimum, the Security manager shall:',
          Step: 'Step',
          Action: 'Action',
          Notes: 'Notes',
          'Containment and Recovery:': 'Containment and Recovery:',
          'Contain the breach, limit further organizational damage, seek to recover/restore data.':
            'Contain the breach, limit further organizational damage, seek to recover/restore data.',
          'Breach Determination': 'Breach Determination,',
          'Determine if the Incident needs to be classified as a Breach.':
            'Determine if the Incident needs to be classified as a Breach.',
          'Ascertain the severity of the Incident or Breach and determine the level of data involved.':
            'Ascertain the severity of the Incident or Breach and determine the level of data involved.',
          'See Incident Classification': 'See Incident Classification',
          'Investigate the Breach or Incident and forward a copy of the Incident report to the Security manager':
            'Investigate the Breach or Incident and forward a copy of the Incident report to the Security manager',
          'Ensure investigator has appropriate resources including sufficient time and authority. If PII or confidential data has been breached, also contact the Security manager. In the event that the Incident or Breach is severe, Falcon Consulting executive management, general counsel and the Security manager shall be contacted':
            'Ensure investigator has appropriate resources including sufficient time and authority. If PII or confidential data has been breached, also contact the Security manager. In the event that the Incident or Breach is severe, Falcon Consulting executive management, general counsel and the Security manager shall be contacted',
          'Identify the cause of the Incident or breach and whether the situation has been contained. Ensure that any possibility of further data loss is removed or mitigated as far as possible. If this loss cannot be mitigated, any Incident will be characterized as a Breach.':
            'Identify the cause of the Incident or breach and whether the situation has been contained. Ensure that any possibility of further data loss is removed or mitigated as far as possible. If this loss cannot be mitigated, any Incident will be characterized as a Breach.',
          'Compartmentalize and eliminate exposure. Establish what steps can or need to be taken to contain the threat from further data loss. Contact all relevant departments who may be able to assist in this process. This may involve actions such as taking systems offline or restricting access to systems to a very small number of staff until more is known about the Incident.':
            'Compartmentalize and eliminate exposure. Establish what steps can or need to be taken to contain the threat from further data loss. Contact all relevant departments who may be able to assist in this process. This may involve actions such as taking systems offline or restricting access to systems to a very small number of staff until more is known about the Incident.',
          'Identify the cause of the Incident or breach and whether the situation has been Determine depth and breadth of losses and limit exposure/damages':
            'Identify the cause of the Incident or breach and whether the situation has been Determine depth and breadth of losses and limit exposure/damages',
          'Can data be physically recovered if damaged through use of backups, restoration or other means?':
            'Can data be physically recovered if damaged through use of backups, restoration or other means?',
          'Notify authorities as appropriate': 'Notify authorities as appropriate',
          'For criminal activities where property was stolen or fraudulent activity occurred, contact the appropriate authorities and general counsel. Should the Breach involve PII that involves a Contract Provider, notify the Falcon Consulting Board members.':
            'For criminal activities where property was stolen or fraudulent activity occurred, contact the appropriate authorities and general counsel. Should the Breach involve PII that involves a Contract Provider, notify the Falcon Consulting Board members.',
          'Ensure all actions and decisions are logged and recorded as part of incident documentation and reporting.':
            'Ensure all actions and decisions are logged and recorded as part of incident documentation and reporting.',
          'Complete Incident Report and file with Security manager.':
            'Complete Incident Report and file with Security manager.',
          'Assess Risk and Incident Scope – All Incidents or Breaches shall have a risk and scope analysis completed by the Security manager or their designee. This analysis shall be documented and shared with the Security manager, the affected parties, and any other relevant stakeholders. At a minimum, the Security manager shall:':
            'Assess Risk and Incident Scope – All Incidents or Breaches shall have a risk and scope analysis completed by the Security manager or their designee. This analysis shall be documented and shared with the Security manager, the affected parties, and any other relevant stakeholders. At a minimum, the Security manager shall:',
          'Risk Assessment': 'Risk Assessment',
          'Identify and assess ongoing risks that may be associated with the Incident or Breach.':
            'Identify and assess ongoing risks that may be associated with the Incident or Breach.',
          'Determine the type and breadth of the Incident or Breach':
            'Determine the type and breadth of the Incident or Breach',
          'Classify Incident or Breach type, data compromised, and extent of breach':
            'Classify Incident or Breach type, data compromised, and extent of breach',
          'Review data sensitivity': 'Review data sensitivity',
          'Determine the confidentiality, scope and extent of the Incident or Breach.':
            'Determine the confidentiality, scope and extent of the Incident or Breach.',
          'Understand the current status of the compromised data':
            'Understand the current status of the compromised data',
          'If data has been stolen, could it be used for purposes that harm the individuals whose identity has been compromised; If identity theft is involved, this poses a different type and level of risk.':
            'If data has been stolen, could it be used for purposes that harm the individuals whose identity has been compromised; If identity theft is involved, this poses a different type and level of risk.',
          'Document risk limiting processes or technology components that contain and manage the Incident':
            'Document risk limiting processes or technology components that contain and manage the Incident',
          'Does encryption of data/device help to limit risk of exposure?':
            'Does encryption of data/device help to limit risk of exposure?',
          'Determine what technologies or processes will mitigate the loss and restore service':
            'Determine what technologies or processes will mitigate the loss and restore service',
          'Are there backups of the compromised data? Can they be restored to a ready state?':
            'Are there backups of the compromised data? Can they be restored to a ready state?',
          'Identify and document the scope, number of users affected, and depth of Incident or Breach':
            'Identify and document the scope, number of users affected, and depth of Incident or Breach',
          'How many individuals’ personally identifiable information were affected?':
            'How many individuals’ personally identifiable information were affected?',
          'Define individuals and roles whose data was compromised':
            'Define individuals and roles whose data was compromised',
          'Identify all staff, districts, customers or vendors involved in the Incident or Breach':
            'Identify all staff, districts, customers or vendors involved in the Incident or Breach',
          'If exploited, what will the compromised data tell a third party about the individual? Could it be misused?':
            'If exploited, what will the compromised data tell a third party about the individual? Could it be misused?',
          'Confidential Information or PII could mean very little to an opportunistic laptop thief while the loss of apparently trivial snippets of information could help a criminal build up a detailed picture associated with identity theft or fraud.':
            'Confidential Information or PII could mean very little to an opportunistic laptop thief while the loss of apparently trivial snippets of information could help a criminal build up a detailed picture associated with identity theft or fraud.',
          'Determine actual or potential harm that could come to any individuals':
            'Determine actual or potential harm that could come to any individuals',
          'Identify risks to individuals:': 'Identify risks to individuals:',
          'Physical Safety': 'Physical Safety',
          'Emotional Wellbeing': 'Emotional Wellbeing',
          'Personal or Business Reputation': 'Personal or Business Reputation',
          'Financial Implications': 'Financial Implications',
          'Identity Concerns': 'Identity Concerns',
          'A combination of these and other private aspects of their life?':
            'A combination of these and other private aspects of their life?',
          'Are there wider consequences to consider?': 'Are there wider consequences to consider?',
          'Is there risk to another LEP, the state, or loss of public confidence?':
            'Is there risk to another LEP, the state, or loss of public confidence?',
          'Are there others who might provide support or advise on risks/courses of action?':
            'Are there others who might provide support or advise on risks/courses of action?',
          'Contact all local education providers, agencies, or companies impacted by the breached data, notify them about the Incident, and ask for assistance in limiting the scope of the Incident.':
            'Contact all local education providers, agencies, or companies impacted by the breached data, notify them about the Incident, and ask for assistance in limiting the scope of the Incident.',
          'Notification and Incident Communications - Each security Incident or Breach determined to be “moderately critical” or “critical” shall have communication plans documented by the security senior leadership, and their designees to appropriately manage the Incident and communicate progress on its resolution to all effected stakeholders. At a minimum, the Security manager shall:':
            'Notification and Incident Communications - Each security Incident or Breach determined to be “moderately critical” or “critical” shall have communication plans documented by the security senior leadership, and their designees to appropriately manage the Incident and communicate progress on its resolution to all effected stakeholders. At a minimum, the Security manager shall:',
          'Notification and Communications': 'Notification and Communications',
          'Notification enables affected stakeholders to take precautionary steps and allow regulatory bodies to act on the Incident or Breach.':
            'Notification enables affected stakeholders to take precautionary steps and allow regulatory bodies to act on the Incident or Breach.',
          'Are there legal, contractual or regulatory notification requirements associated  with the Incident or Breach?':
            'Are there legal, contractual or regulatory notification requirements associated  with the Incident or Breach?',
          'Review vendor contracts and compliance terms, assure state and federal reporting and notifications are understood. Contact Legal as necessary to begin contractual adherence. Should the Breach include PII, initiate the Falcon Consulting Board hearing process.':
            'Review vendor contracts and compliance terms, assure state and federal reporting and notifications are understood. Contact Legal as necessary to begin contractual adherence. Should the Breach include PII, initiate the Falcon Consulting Board hearing process.',
          'Notify impacted individuals of Incident or Breach remedies.':
            'Notify impacted individuals of Incident or Breach remedies.',
          'Provide individuals involved in the Incident or Breach with mitigation strategies to re-secure data (e.g. change user id and/or passwords etc.)':
            'Provide individuals involved in the Incident or Breach with mitigation strategies to re-secure data (e.g. change user id and/or passwords etc.)',
          'Determine Internal Communication Plans': 'Determine Internal Communication Plans',
          'Work with senior leadership and provide regular internal updates on status of Incident or Breach, remedies underway, and current exposure and containment strategies. This messaging should be provided to all internal state stakeholders and management. Messaging shall be coordinated through the Security office.':
            'Work with senior leadership and provide regular internal updates on status of Incident or Breach, remedies underway, and current exposure and containment strategies. This messaging should be provided to all internal state stakeholders and management. Messaging shall be coordinated through the Security office.',
          'Determine Public Messaging': 'Determine Public Messaging',
          'Prepare and execute a communication and follow-up plan with Security manager and senior leadership. Communication strategies need to define audience(s), frequency, messaging, and content.':
            'Prepare and execute a communication and follow-up plan with Security manager and senior leadership. Communication strategies need to define audience(s), frequency, messaging, and content.',
          'Execute Messaging Plan': 'Execute Messaging Plan',
          'Working through the Security manager and appropriate leadership, execute the public and internal communication plans. Depending on the nature and scope of the Incident or Breach, multiple messages may need to be delivered as well as press and public communiques. Minimally notifications should include:':
            'Working through the Security manager and appropriate leadership, execute the public and internal communication plans. Depending on the nature and scope of the Incident or Breach, multiple messages may need to be delivered as well as press and public communiques. Minimally notifications should include:',
          'A description of the Incident or Breach (how and when it occurred)':
            'A description of the Incident or Breach (how and when it occurred)',
          'What data was involved and whose data was compromised':
            'What data was involved and whose data was compromised',
          'Details of what has been done to respond to the Incident or Breach and any associated risks posed':
            'Details of what has been done to respond to the Incident or Breach and any associated risks posed',
          'Next-steps for stakeholders': 'Next-steps for stakeholders',
          'Falcon Consulting contacts for the Incident or Breach, any follow-, and other pertinent information':
            'Falcon Consulting contacts for the Incident or Breach, any follow-, and other pertinent information',
          'When notifying individuals, provide specific and clear advice on the steps they can take to protect themselves and what the Falcon Consulting and/or third party vendor will do to help minimize their exposure':
            'When notifying individuals, provide specific and clear advice on the steps they can take to protect themselves and what the Falcon Consulting and/or third party vendor will do to help minimize their exposure',
          'Provide a way in which they can contact Falcon Consulting for further information or to ask questions about what has occurred (e.g. a contact name, helpline number or a web page)':
            'Provide a way in which they can contact Falcon Consulting for further information or to ask questions about what has occurred (e.g. a contact name, helpline number or a web page)',
          "Post Mortem Evaluation and Response – Each Incident or Breach determined to be 'moderately critical' or 'critical' shall have a post mortem analysis completed by the Security manager and their designees to appropriately document, analyze, and make recommendations on ways to limit risk and exposure in the future. At a minimum, the Security manager shall:":
            "Post Mortem Evaluation and Response – Each Incident or Breach determined to be 'moderately critical' or 'critical' shall have a post mortem analysis completed by the Security manager and their designees to appropriately document, analyze, and make recommendations on ways to limit risk and exposure in the future. At a minimum, the Security manager shall:",
          'Evaluation and Response': 'Evaluation and Response',
          'To evaluate the effectiveness of the University’s response to the Incident or Breach.':
            'To evaluate the effectiveness of the University’s response to the Incident or Breach.',
          'Establish where any present or future risks lie.':
            'Establish where any present or future risks lie.',
          'Assess and evaluate the root causes of the Incident or Breach and any ways to mitigate and/or prevent a similar occurrence.':
            'Assess and evaluate the root causes of the Incident or Breach and any ways to mitigate and/or prevent a similar occurrence.',
          'Consider the data and security measures employed.':
            'Consider the data and security measures employed.',
          'Evaluate, analyze, and document the use cases and technical components of the Incident or Breach. Document areas for improvement in environment, technology, or approach that limit future security exposures. Make recommendations as appropriate.':
            'Evaluate, analyze, and document the use cases and technical components of the Incident or Breach. Document areas for improvement in environment, technology, or approach that limit future security exposures. Make recommendations as appropriate.',
          'Evaluate and identify areas of weakness in existing security measures and procedures.':
            'Evaluate and identify areas of weakness in existing security measures and procedures.',
          'Document lapses in process, procedure, or policy that may have caused the Incident or Breach. Analyze and document solutions and remedies to reduce future risks.':
            'Document lapses in process, procedure, or policy that may have caused the Incident or Breach. Analyze and document solutions and remedies to reduce future risks.',
          'Evaluate and identify areas of weakness related to employee skills.':
            'Evaluate and identify areas of weakness related to employee skills.',
          'Assess employee readiness, education, and training. Document and plan for updates in education or procedural changes to eliminate potential for future Incidents.':
            'Assess employee readiness, education, and training. Document and plan for updates in education or procedural changes to eliminate potential for future Incidents.',
          'Report on findings and implement recommendations.':
            'Report on findings and implement recommendations.',
          'Prepare report and presentation to Falcon Consulting for major Incidents or Breaches.':
            'Prepare report and presentation to Falcon Consulting for major Incidents or Breaches.',
          'Each of these four elements shall be conducted as appropriate for all qualifying Incidents or Breaches. An activity log recording the timeline of Incident management shall also be completed. Reporting and documentation shall be filed and managed through the office of the Security Manager.':
            'Each of these four elements shall be conducted as appropriate for all qualifying Incidents or Breaches. An activity log recording the timeline of Incident management shall also be completed. Reporting and documentation shall be filed and managed through the office of the Security Manager.',
          'Audit Controls and Management': 'Audit Controls and Management',
          'On-demand documented procedures and evidence of practice should be in place for this operational policy. Appropriate audit controls and management practice examples are as follows:':
            'On-demand documented procedures and evidence of practice should be in place for this operational policy. Appropriate audit controls and management practice examples are as follows:',
          'Archival completed Incident Reports demonstrating compliance with reporting, communication and follow-through.':
            'Archival completed Incident Reports demonstrating compliance with reporting, communication and follow-through.',
          'Executed communication plans for Incident management.':
            'Executed communication plans for Incident management.',
          'Evidence of cross-departmental communication throughout the analysis, response and post-mortem processes.':
            'Evidence of cross-departmental communication throughout the analysis, response and post-mortem processes.',
          'Staff members found in policy violation may be subject to disciplinary action, up to and including termination.':
            'Staff members found in policy violation may be subject to disciplinary action, up to and including termination.',
          Distribution: 'Distribution',
          'This policy is to be distributed to all Falcon Consulting staff.':
            'This policy is to be distributed to all Falcon Consulting staff.',
          // changes 14/11/2022
          'EACH PROJECT IS A NEW OPPORTUNITY': 'EACH PROJECT IS A NEW OPPORTUNITY',
          'Orgaplan is a Logistics management web and mobile application developed for the French Construction market. Its technology stacks are React for the front end and Node JS for the backend. This project was delivered in just 6 months, which was possible by scaling the team from 2 to up to 8 developers.':
            'Orgaplan is a Logistics management web and mobile application developed for the French Construction market. Its technology stacks are React for the front end and Node JS for the backend. This project was delivered in just 6 months, which was possible by scaling the team from 2 to up to 8 developers.',
          'A big construction company tried, few years ago, to realize exactly this project internally, and they worked on designing and developing the platform. Unfortunately, it was a failure due to the fact that the platform was not intuitive enough, and taking in consideration all the situation of a construction site. Thus, the project had to be re-started. Falon has an internal expertise regarding construction project, as one of the lead managers has 10+ years of experience in managing very big construction projects. Thanks to this double expertise (Construction / IT), it was possible to create mockups which were simple enough, intuitive, and generic to consider all the thousands of possible scenarios while using the platform.':
            'A big construction company tried, few years ago, to realize exactly this project internally, and they worked on designing and developing the platform. Unfortunately, it was a failure due to the fact that the platform was not intuitive enough, and taking in consideration all the situation of a construction site. Thus, the project had to be re-started. Falon has an internal expertise regarding construction project, as one of the lead managers has 10+ years of experience in managing very big construction projects. Thanks to this double expertise (Construction / IT), it was possible to create mockups which were simple enough, intuitive, and generic to consider all the thousands of possible scenarios while using the platform.',
          'The color theme was imposed by the client, due to its already existing digital identity. Based on this requirement, Falcon developed the mockups.':
            'The color theme was imposed by the client, due to its already existing digital identity. Based on this requirement, Falcon developed the mockups.',
          'Ideally, the client would have liked the whole project to be developed within 4 months. As the Design and Development processes were going, the team figured out that the initial specs were incomplete and were not covering the whole need of the platform. Thus, it was decided that the project would be done under 6 months. This was still a challenged timeline for such a project (+140 screens in total, 6 user interfaces, web and mobile application, …), so Falcon did scale the team from 3 to 6 developers. The development was realized in module, and starting with the Super admin interface. At the end of each module, a meeting was planned with the client to review and adjust the requirement, as needed. One of the features was to allow the users to delineate areas in a construction layout, by drawing a colored shape. This was possible by using the Canvas API, and this created a nice user experience (the alternate solution would have been to upload the construction layout with pre-existing delineation done). The real challenge was to code the platform generically, so that it could adapt to all thousands of potential scenarios, and provide the right response. This was possible as the database infrastructure was realized by one of the Falcon Lead developers. The project was finally completed within 6 months, and launched in big construction sites. Falcon realized the last mile for the project, completing a lot of contractually unclear features, without any additional cost.':
            'Ideally, the client would have liked the whole project to be developed within 4 months. As the Design and Development processes were going, the team figured out that the initial specs were incomplete and were not covering the whole need of the platform. Thus, it was decided that the project would be done under 6 months. This was still a challenged timeline for such a project (+140 screens in total, 6 user interfaces, web and mobile application, …), so Falcon did scale the team from 3 to 6 developers. The development was realized in module, and starting with the Super admin interface. At the end of each module, a meeting was planned with the client to review and adjust the requirement, as needed. One of the features was to allow the users to delineate areas in a construction layout, by drawing a colored shape. This was possible by using the Canvas API, and this created a nice user experience (the alternate solution would have been to upload the construction layout with pre-existing delineation done). The real challenge was to code the platform generically, so that it could adapt to all thousands of potential scenarios, and provide the right response. This was possible as the database infrastructure was realized by one of the Falcon Lead developers. The project was finally completed within 6 months, and launched in big construction sites. Falcon realized the last mile for the project, completing a lot of contractually unclear features, without any additional cost.',
          'Orientator is a French-based platform for students to decide on their university. This website is developed with the front end on React and the backend on Node JS, and the whole project was completed within 5 months, from a simple concept idea to a full-fledge website.':
            'Orientator is a French-based platform for students to decide on their university. This website is developed with the front end on React and the backend on Node JS, and the whole project was completed within 5 months, from a simple concept idea to a full-fledge website.',
          'The goal of the project was to create an Akinator-like for allowing students to find the best course for them, based on several criteria. This strategy was based on the fact that the client wanted the orientation topic, seen as complex and worrisome, seen as funny and personified. As the target audience is young, we wanted to add some gamification features, such as the progress bar, and the character reacting to the answers provided by the user. Finally, the project had to look very modern and responsive for mobile phones, as it would predominantly be used on mobile phones.':
            'The goal of the project was to create an Akinator-like for allowing students to find the best course for them, based on several criteria. This strategy was based on the fact that the client wanted the orientation topic, seen as complex and worrisome, seen as funny and personified. As the target audience is young, we wanted to add some gamification features, such as the progress bar, and the character reacting to the answers provided by the user. Finally, the project had to look very modern and responsive for mobile phones, as it would predominantly be used on mobile phones.',
          'Falcon proposed to use a dark color as the main one, and some very bright ones as secondary colors, in order to give a dynamic feeling. The same idea was used for the colors of the action buttons : the gradient of color give a sense of movement, as present in some gaming applications.':
            'Falcon proposed to use a dark color as the main one, and some very bright ones as secondary colors, in order to give a dynamic feeling. The same idea was used for the colors of the action buttons : the gradient of color give a sense of movement, as present in some gaming applications.',
          'On this project, the client, coming from a top business school in France (HEC Paris), had no technical knowledge in development. He had a clear concept, which was not written down on a document, and the details were not worked out. This is one of the aspects where Falcon has a lot of value added : understanding the context and end goals of the project, and proposing a custom-application which would fit the needs best, while staying within the allocated budget. As the client is expert in orientation, he was able to generate a spreadsheet with thousands lines of data. The end goal was to create a modern tool, easy to use for the students. After several meetings, Falcon drafted the project Functional Requirement, which were approved by the Client. Falcon worked on project feasibility and work arounds to get to the end goals. Orientator starts with open questions in shape of a decision tree. Afterwards, it has several closed questions allowing to fine-tune the results provided at the end. The results are shown with a percentage of matching, which is calculated through an algorithm taking into account several parameters. The development process was completed within 3 months, including the integration of all the data and the realization of the administrative panel.':
            'On this project, the client, coming from a top business school in France (HEC Paris), had no technical knowledge in development. He had a clear concept, which was not written down on a document, and the details were not worked out. This is one of the aspects where Falcon has a lot of value added : understanding the context and end goals of the project, and proposing a custom-application which would fit the needs best, while staying within the allocated budget. As the client is expert in orientation, he was able to generate a spreadsheet with thousands lines of data. The end goal was to create a modern tool, easy to use for the students. After several meetings, Falcon drafted the project Functional Requirement, which were approved by the Client. Falcon worked on project feasibility and work arounds to get to the end goals. Orientator starts with open questions in shape of a decision tree. Afterwards, it has several closed questions allowing to fine-tune the results provided at the end. The results are shown with a percentage of matching, which is calculated through an algorithm taking into account several parameters. The development process was completed within 3 months, including the integration of all the data and the realization of the administrative panel.',
          'This web application offers a complete panel of features to manage all the employees and consultants of a business entity, as well as their documents and status. Registre-RH also allows to manage the Risk assessment documents of the Company, in order to make sure the entity is complying with the regulation. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another. This application is deployed in big Construction groups in France, and it is used on a day-to-day basis by their HR Department.':
            'This web application offers a complete panel of features to manage all the employees and consultants of a business entity, as well as their documents and status. Registre-RH also allows to manage the Risk assessment documents of the Company, in order to make sure the entity is complying with the regulation. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another. This application is deployed in big Construction groups in France, and it is used on a day-to-day basis by their HR Department.',
          'Our client is an expert in the HR industry, and he has worked for top companies in strategic position such as HR Director. He had to make sure to comply with all the regulation requirement, which could be a real challenge when not having the appropriate tool. This is why he came up with the idea of filling this need and having Falcon creating a complete platform, especially targeting big companies with several branches. The specification had to be redacted by Falcon based on several meetings planned with the client. After getting the completed mockups, the client was able to present them with his targeted audience and make sure of the product market fit.':
            'Our client is an expert in the HR industry, and he has worked for top companies in strategic position such as HR Director. He had to make sure to comply with all the regulation requirement, which could be a real challenge when not having the appropriate tool. This is why he came up with the idea of filling this need and having Falcon creating a complete platform, especially targeting big companies with several branches. The specification had to be redacted by Falcon based on several meetings planned with the client. After getting the completed mockups, the client was able to present them with his targeted audience and make sure of the product market fit.',
          'The color theme was proposed by Falcon, in order to stay in corporate standard and professional colors.':
            'The color theme was proposed by Falcon, in order to stay in corporate standard and professional colors.',
          'The project has been developed in modules, based on priorities provided by the client, and in order to be able to launch it as soon as possible. the project team was composed of a project manager, two developers (one back-end and one front-end), and a UI/UX designer. There were bi-weekly meetings with the client to provide frequent updates and get all the required clarification. The project was also tested internally. As the platform is storing sensitive information related to HR, the platform went through several security tests, and Falcon made sure to be 100% compliant with all the security requirement of the big companies. As the project is for the French market, GDPR compliance was also strictly met, and an specialized attorney was overviewing this aspect.':
            'The project has been developed in modules, based on priorities provided by the client, and in order to be able to launch it as soon as possible. the project team was composed of a project manager, two developers (one back-end and one front-end), and a UI/UX designer. There were bi-weekly meetings with the client to provide frequent updates and get all the required clarification. The project was also tested internally. As the platform is storing sensitive information related to HR, the platform went through several security tests, and Falcon made sure to be 100% compliant with all the security requirement of the big companies. As the project is for the French market, GDPR compliance was also strictly met, and an specialized attorney was overviewing this aspect.',
          'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is recorded through his own phone, performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc...). The program then analyzes the data based on internal rules and indicates whether the movements are abnormal or not. The detection of the movements is done with the help of a Media pipe, ARKit and ARCore, and requires advanced knowledge in terms of image processing to ensure fluidity and accuracy of the final results. The health experts can also create custom-made motion exercises by using the exercise generator feature of the platform. This is a complex and cutting-edge technology which allows to define automatically the internal rules of the exercises generated (allowing to know when a patient is correctly realizing the movements or not).':
            'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is recorded through his own phone, performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc...). The program then analyzes the data based on internal rules and indicates whether the movements are abnormal or not. The detection of the movements is done with the help of a Media pipe, ARKit and ARCore, and requires advanced knowledge in terms of image processing to ensure fluidity and accuracy of the final results. The health experts can also create custom-made motion exercises by using the exercise generator feature of the platform. This is a complex and cutting-edge technology which allows to define automatically the internal rules of the exercises generated (allowing to know when a patient is correctly realizing the movements or not).',
          'The health startup, based in Chicago and specialized in remote consultation, worked with several agencies in order to realize their project. Not satisfied by the previous results, they reached out to Falcon, who realized a project MVP to prove the technical feasibility of this cutting-edge project, and allowing the client to raise money for the development of the complete platform. The platform is developed in Web and mobile application.':
            'The health startup, based in Chicago and specialized in remote consultation, worked with several agencies in order to realize their project. Not satisfied by the previous results, they reached out to Falcon, who realized a project MVP to prove the technical feasibility of this cutting-edge project, and allowing the client to raise money for the development of the complete platform. The platform is developed in Web and mobile application.',
          'Based on client requirement, Falcon did a simple and modern UI/UX mockups, which got validated and realized in the first half of 2022. After the confirmation of the product-market fit, the client asked Falcon to create the complete platform, based on its requirement. Falcon’s UI/UX team worked on defining project workflow and mockups, with the use of Figma. After several weekly meetings allowing to confirm all the assumptions, the mockups got validated within 5 weeks.':
            'Based on client requirement, Falcon did a simple and modern UI/UX mockups, which got validated and realized in the first half of 2022. After the confirmation of the product-market fit, the client asked Falcon to create the complete platform, based on its requirement. Falcon’s UI/UX team worked on defining project workflow and mockups, with the use of Figma. After several weekly meetings allowing to confirm all the assumptions, the mockups got validated within 5 weeks.',
          'PermisPop is a project which started in 2019, and which is evolving with time. The first version of the platform was focusing on proving the product-market-fit, and was not having a modern design at all. The UX was also basic. Falcon’s team worked on a whole redesign of the platform, to make it more attractive for the users.':
            'PermisPop is a project which started in 2019, and which is evolving with time. The first version of the platform was focusing on proving the product-market-fit, and was not having a modern design at all. The UX was also basic. Falcon’s team worked on a whole redesign of the platform, to make it more attractive for the users.',
          'The goal was to have a refined design, which is why the platform is mainly white, and using logo colors are the secondary ones.':
            'The goal was to have a refined design, which is why the platform is mainly white, and using logo colors are the secondary ones.',
          'The project has been developed based on several sprints, and versions of the application. The first version of the application was a web app, and afterwards, a mobile application (android and iOS) has been developed. The stacks of the project are : ReactJS / ASP.NET Core / React Native. The project development team did change over the time as there has been few months without development activities between each version of the project. Thus, Falcon had to make sure the documentation of the project, as well as the code, where well written to allow an easy handover of the project throughout the different teams. The challenging aspect of the project was the high number of features, spread among the different types of users. Unit testing was necessary to make sure to have a durable code.':
            'The project has been developed based on several sprints, and versions of the application. The first version of the application was a web app, and afterwards, a mobile application (android and iOS) has been developed. The stacks of the project are : ReactJS / ASP.NET Core / React Native. The project development team did change over the time as there has been few months without development activities between each version of the project. Thus, Falcon had to make sure the documentation of the project, as well as the code, where well written to allow an easy handover of the project throughout the different teams. The challenging aspect of the project was the high number of features, spread among the different types of users. Unit testing was necessary to make sure to have a durable code.',
          'Quadrabase is a project from a client who has worked in the Construction industry in France for more than 20 years. He has built over the time a very detailed and rich database for the construction projects, and his goal is to revolutionize the construction industry by providing a unique platform, allowing each stakeholder to generate detailed and accurate tender documents very quickly !':
            'Quadrabase is a project from a client who has worked in the Construction industry in France for more than 20 years. He has built over the time a very detailed and rich database for the construction projects, and his goal is to revolutionize the construction industry by providing a unique platform, allowing each stakeholder to generate detailed and accurate tender documents very quickly !',
          'Quadrabase already used a specific UI and UX for the Prescriber interface, which was satisfying the clients needs. As the goal was not to reinvent screens which are already approved, Falcon focus on the other ones to make sure the overall project looks modern : landing pages, subscription process, manufacturer interface. We also implemented a dashboard for the prescriber, to enhance the overall User experience.':
            'Quadrabase already used a specific UI and UX for the Prescriber interface, which was satisfying the clients needs. As the goal was not to reinvent screens which are already approved, Falcon focus on the other ones to make sure the overall project looks modern : landing pages, subscription process, manufacturer interface. We also implemented a dashboard for the prescriber, to enhance the overall User experience.',
          'The main color was provided by the client, and the secondary colors were provided by Falcon in order to match and create a nice impression overall.':
            'The main color was provided by the client, and the secondary colors were provided by Falcon in order to match and create a nice impression overall.',
          'Quadrabase was a project initially developed by another development agency. As the client Is very meticulous and wants its platform to be perfect for its users, the development agency was not willing to complete the project. And as the initial platform was using an old technology, it was decided to start again from scratch, and propose a modern platform, which would meet the client’s expectation. Even though not 100% complete, the project specification provided by the client were satisfying to have a very good idea of the big picture, and Falcon was able to start the development very quickly. A team of two developers were working on the project for 4 months, with a Project Manager and a Lead Developer as a support. One of the developers was realizing the modules, starting by the admin panel, prescribers and manufacturers interface, while the other developer was focusing on the document generation module, which was requiring quite some work. The main challenge of the project was all the details that were important for the client, but not appearing in the document. Falcon has a policy of completing the last mile of its projects without discussion (as long as there is no new feature), and it was the case here.':
            'Quadrabase was a project initially developed by another development agency. As the client Is very meticulous and wants its platform to be perfect for its users, the development agency was not willing to complete the project. And as the initial platform was using an old technology, it was decided to start again from scratch, and propose a modern platform, which would meet the client’s expectation. Even though not 100% complete, the project specification provided by the client were satisfying to have a very good idea of the big picture, and Falcon was able to start the development very quickly. A team of two developers were working on the project for 4 months, with a Project Manager and a Lead Developer as a support. One of the developers was realizing the modules, starting by the admin panel, prescribers and manufacturers interface, while the other developer was focusing on the document generation module, which was requiring quite some work. The main challenge of the project was all the details that were important for the client, but not appearing in the document. Falcon has a policy of completing the last mile of its projects without discussion (as long as there is no new feature), and it was the case here.',
          'ZypZap is a gaming website developed by Falcon IT. It is an e-learning platform connecting the e-sport professionals and the gamers willing to acquire more skills. The application has several features, among which is a video editing tool. As the gaming world is especially demanding regarding the quality of the realization, our client wanted to get a great team of designers / developers / project managers to complete this project.':
            'ZypZap is a gaming website developed by Falcon IT. It is an e-learning platform connecting the e-sport professionals and the gamers willing to acquire more skills. The application has several features, among which is a video editing tool. As the gaming world is especially demanding regarding the quality of the realization, our client wanted to get a great team of designers / developers / project managers to complete this project.',
          'The client had a general idea about the project, and Falcon, acting also as a role of CTO for this project, worked on the feasibility of the features and priorities based on the effort required for each tasks. The design team realized several versions of the mockups on Figma, for getting feedbacks from the gaming community and improving it continuously. The goal was to create a website with a “wow” effect, as this is quite a challenge to attract this target audience.':
            'The client had a general idea about the project, and Falcon, acting also as a role of CTO for this project, worked on the feasibility of the features and priorities based on the effort required for each tasks. The design team realized several versions of the mockups on Figma, for getting feedbacks from the gaming community and improving it continuously. The goal was to create a website with a “wow” effect, as this is quite a challenge to attract this target audience.',
          'The goal was to use mostly dark colors to get to a specific gaming world.':
            'The goal was to use mostly dark colors to get to a specific gaming world.',
          'The main difficulty of the project was to adapt to the several changes requested by the client due to feedbacks received from the target audience. Ideally, one should have the mockups fully completed before starting the development phase, but this was not the case in this project, mainly due to time schedule requirement. The project team was composed of a designer, two developers, one project manager and a lead developer. They had 2 meetings per week with the client to speed-up the feedbacks and make sure we would be going to the right direction. The video editing feature was something new developed at Falcon Consulting, but thanks to the diversity of the talents in the team, it was successfully realized. Falcon also optimized the flux of data exchanges in order to optimize the operating costs, which can be significant for such projects.':
            'The main difficulty of the project was to adapt to the several changes requested by the client due to feedbacks received from the target audience. Ideally, one should have the mockups fully completed before starting the development phase, but this was not the case in this project, mainly due to time schedule requirement. The project team was composed of a designer, two developers, one project manager and a lead developer. They had 2 meetings per week with the client to speed-up the feedbacks and make sure we would be going to the right direction. The video editing feature was something new developed at Falcon Consulting, but thanks to the diversity of the talents in the team, it was successfully realized. Falcon also optimized the flux of data exchanges in order to optimize the operating costs, which can be significant for such projects.',
          'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...).':
            'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...).',
          'This web application offers a complete panel of features to manage all the employees and consultants of a business entity, as well as their documents and status.':
            'This web application offers a complete panel of features to manage all the employees and consultants of a business entity, as well as their documents and status.',
          'ZypZap is a gaming website developed by Falcon IT.':
            'ZypZap is a gaming website developed by Falcon IT.',
          'Permispop is a web platform connecting students, independent driving teachers, and driving schools.':
            'Permispop is a web platform connecting students, independent driving teachers, and driving schools.',
          'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects.':
            'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects.',
          "Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs. Bringing together a large number of the most important carriers, Yuwway makes it possible to provide the keys to the market to the consumer who can choose, both qualitatively and in terms of price, the offer that best suits him.":
            "Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs. Bringing together a large number of the most important carriers, Yuwway makes it possible to provide the keys to the market to the consumer who can choose, both qualitatively and in terms of price, the offer that best suits him.",
          'Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding.':
            'Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding.',
          'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces: a mobile application for the investors, and an admin panel, for the responsible of the company. A Pakistan-based project developed on React Native, completed in 2 months.':
            'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces: a mobile application for the investors, and an admin panel, for the responsible of the company. A Pakistan-based project developed on React Native, completed in 2 months.',
          'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location.':
            'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location.',
          'Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique.':
            'Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique.',
          'EZBox media is a platform providing different services including Advertising Advertising by understanding how a user can react to the advertisement shown to them.':
            'EZBox media is a platform providing different services including Advertising Advertising by understanding how a user can react to the advertisement shown to them.',
          'This is the platform for management of office building.':
            'This is the platform for management of office building.',
          'Fireman is the management and report generating system for fire fighters.':
            'Fireman is the management and report generating system for fire fighters.',
          'Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France.':
            'Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France.',
          'Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices.':
            'Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices.',
          'MediaPipe offers cross-platform, customizable ML solutions for live and streaming media.':
            'MediaPipe offers cross-platform, customizable ML solutions for live and streaming media.'
        }
      },
      fr: {
        translations: {
          // changes 14/11/2022"
          'MediaPipe offers cross-platform, customizable ML solutions for live and streaming media.':
            'MediaPipe propose des solutions ML multiplateformes et personnalisables pour les médias en direct et en streaming.',
          'Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices.':
            "Winaa est un job board, sous la forme d'une application mobile et web, de mise en relation entre entreprises et apprentis.",
          'Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France.':
            "Excellence Mode est une chaîne de magasins de prêt-à-porter en France, avec plusieurs dizaines d'implantations dans toute la France.",
          'Fireman is the management and report generating system for fire fighters.':
            'Fireman est le système de gestion et de génération de rapports pour les pompiers.',
          'This is the platform for management of office building.':
            "Il s'agit de la plate-forme de gestion des immeubles de bureaux.",
          'EZBox media is a platform providing different services including Advertising Advertising by understanding how a user can react to the advertisement shown to them.':
            'EZBox media est une plate-forme fournissant différents services, y compris la publicité publicitaire en comprenant comment un utilisateur peut réagir à la publicité qui lui est présentée.',
          'Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique.':
            'Plateforme web et mobile mettant en relation restaurants, entreprises et chauffeurs-livreurs pour des livraisons de repas en vrac en Martinique.',
          'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location.':
            'Kidcab est une application mobile visant à aider les parents à trouver des chauffeurs pour les activités de leurs enfants et à surveiller leur emplacement en toute sécurité.',
          'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces: a mobile application for the investors, and an admin panel, for the responsible of the company. A Pakistan-based project developed on React Native, completed in 2 months.':
            "L'objectif est de permettre aux investisseurs d'avoir de la transparence sur les investissements qu'ils feraient dans l'immobilier au Pakistan. Pour cela, il existe deux interfaces principales : une application mobile pour les investisseurs, et un panel d'administration, pour les responsables de l'entreprise. Un projet basé au Pakistan développé sur React Native, achevé en 2 mois.",
          'Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding.':
            'Application de mariage reliant les utilisateurs et les fournisseurs Plate-forme permettant de connecter les utilisateurs aux fournisseurs de mariage. Les personnes qui souhaitaient se marier peuvent facilement trouver des fournisseurs pour leur mariage.',
          "Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs. Bringing together a large number of the most important carriers, Yuwway makes it possible to provide the keys to the market to the consumer who can choose, both qualitatively and in terms of price, the offer that best suits him.":
            "Yuwway est un moteur de recherche qui compare les tarifs pour tous les types de transport (Taxi/VTC/Moto-taxi, etc.) permettant, en une simple recherche, d'accéder à tous les tarifs disponibles et correspondant aux besoins du client. Regroupant un grand nombre des transporteurs les plus importants, Yuwway permet de fournir les clés du marché au consommateur qui peut choisir, tant qualitativement qu'en termes de prix, l'offre qui lui convient le mieux.",
          'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects.':
            "Notre client étant un chef de projet avec plus de 30 ans d'expérience dans le domaine, nous avons dû faire preuve d'une grande capacité d'adaptation pour appréhender correctement le projet, et en comprendre tous les aspects techniques.",
          'Permispop is a web platform connecting students, independent driving teachers, and driving schools.':
            'Permispop est une plateforme web mettant en relation des étudiants, des professeurs de conduite indépendants et des auto-écoles.',
          'ZypZap is a gaming website developed by Falcon IT.':
            'ZypZap est un site de jeu développé par Falcon IT.',
          'This web application offers a complete panel of features to manage all the employees and consultants of a business entity, as well as their documents and status.':
            "Cette application web propose un panel complet de fonctionnalités pour gérer l'ensemble des salariés et consultants d'une entité commerciale, ainsi que leurs documents et statuts.",
          'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...).':
            'Orgaplan est une plateforme complexe et complète permettant la gestion logistique de grands chantiers, en zones très denses (comme Paris - La Défense, etc...).',
          'The main difficulty of the project was to adapt to the several changes requested by the client due to feedbacks received from the target audience. Ideally, one should have the mockups fully completed before starting the development phase, but this was not the case in this project, mainly due to time schedule requirement. The project team was composed of a designer, two developers, one project manager and a lead developer. They had 2 meetings per week with the client to speed-up the feedbacks and make sure we would be going to the right direction. The video editing feature was something new developed at Falcon Consulting, but thanks to the diversity of the talents in the team, it was successfully realized. Falcon also optimized the flux of data exchanges in order to optimize the operating costs, which can be significant for such projects.':
            "La principale difficulté du projet était de s'adapter aux nombreux changements demandés par le client en raison des retours reçus du public cible. Idéalement, il faudrait que les maquettes soient entièrement terminées avant de commencer la phase de développement, mais ce n'était pas le cas dans ce projet, principalement en raison des impératifs de calendrier. L'équipe du projet était composée d'un concepteur, de deux développeurs, d'un chef de projet et d'un développeur principal. Ils avaient 2 réunions par semaine avec le client pour accélérer les retours et s'assurer que nous allions dans la bonne direction. La fonctionnalité de montage vidéo était une nouveauté développée chez Falcon Consulting, mais grâce à la diversité des talents de l'équipe, elle a été réalisée avec succès. Falcon a également optimisé le flux des échanges de données afin d'optimiser les coûts d'exploitation, qui peuvent être importants pour de tels projets.",
          'The goal was to use mostly dark colors to get to a specific gaming world.':
            "L'objectif était d'utiliser principalement des couleurs sombres pour accéder à un univers de jeu spécifique.",
          'The client had a general idea about the project, and Falcon, acting also as a role of CTO for this project, worked on the feasibility of the features and priorities based on the effort required for each tasks. The design team realized several versions of the mockups on Figma, for getting feedbacks from the gaming community and improving it continuously. The goal was to create a website with a “wow” effect, as this is quite a challenge to attract this target audience.':
            "Le client avait une idée générale du projet, et Falcon, agissant également en tant que CTO pour ce projet, a travaillé sur la faisabilité des fonctionnalités et des priorités en fonction de l'effort requis pour chaque tâche. L'équipe de conception a réalisé plusieurs versions des maquettes sur Figma, pour obtenir des retours de la communauté des joueurs et l'améliorer en permanence. L'objectif était de créer un site Web avec un effet « wow », car c'est tout un défi d'attirer ce public cible.",
          'ZypZap is a gaming website developed by Falcon IT. It is an e-learning platform connecting the e-sport professionals and the gamers willing to acquire more skills. The application has several features, among which is a video editing tool. As the gaming world is especially demanding regarding the quality of the realization, our client wanted to get a great team of designers / developers / project managers to complete this project.':
            "ZypZap est un site de jeu développé par Falcon IT. Il s'agit d'une plateforme d'apprentissage en ligne mettant en relation les professionnels de l'e-sport et les joueurs désireux d'acquérir plus de compétences. L'application dispose de plusieurs fonctionnalités, parmi lesquelles un outil de montage vidéo. Le monde du gaming étant particulièrement exigeant quant à la qualité de la réalisation, notre client souhaitait s'entourer d'une belle équipe de designers/développeurs/chefs de projet pour mener à bien ce projet.",
          'Quadrabase was a project initially developed by another development agency. As the client Is very meticulous and wants its platform to be perfect for its users, the development agency was not willing to complete the project. And as the initial platform was using an old technology, it was decided to start again from scratch, and propose a modern platform, which would meet the client’s expectation. Even though not 100% complete, the project specification provided by the client were satisfying to have a very good idea of the big picture, and Falcon was able to start the development very quickly. A team of two developers were working on the project for 4 months, with a Project Manager and a Lead Developer as a support. One of the developers was realizing the modules, starting by the admin panel, prescribers and manufacturers interface, while the other developer was focusing on the document generation module, which was requiring quite some work. The main challenge of the project was all the details that were important for the client, but not appearing in the document. Falcon has a policy of completing the last mile of its projects without discussion (as long as there is no new feature), and it was the case here.':
            "Quadrabase était un projet initialement développé par une autre agence de développement. Le client étant très méticuleux et souhaitant que sa plateforme soit parfaite pour ses utilisateurs, l'agence de développement n'était pas disposée à mener à bien le projet. Et comme la plateforme initiale utilisait une technologie ancienne, il a été décidé de repartir de zéro, et de proposer une plateforme moderne, qui répondrait à l'attente du client. Même s'ils ne sont pas complets à 100 %, les spécifications du projet fournies par le client étaient satisfaisantes pour avoir une très bonne idée de la situation dans son ensemble, et Falcon a pu démarrer le développement très rapidement. Une équipe de deux développeurs a travaillé sur le projet pendant 4 mois, avec un Project Manager et un Lead Developer en support. L'un des développeurs réalisait les modules, en commençant par le panel d'administration, l'interface prescripteurs et fabricants, tandis que l'autre développeur se concentrait sur le module de génération de documents, qui nécessitait pas mal de travail. Le principal défi du projet était tous les détails qui étaient importants pour le client, mais qui n'apparaissaient pas dans le document. Falcon a pour politique de terminer le dernier kilomètre de ses projets sans discussion (tant qu'il n'y a pas de nouveauté), et ce fut le cas ici.",
          'The main color was provided by the client, and the secondary colors were provided by Falcon in order to match and create a nice impression overall.':
            'La couleur principale a été fournie par le client et les couleurs secondaires ont été fournies par Falcon afin de correspondre et de créer une belle impression globale.',
          'Quadrabase already used a specific UI and UX for the Prescriber interface, which was satisfying the clients needs. As the goal was not to reinvent screens which are already approved, Falcon focus on the other ones to make sure the overall project looks modern : landing pages, subscription process, manufacturer interface. We also implemented a dashboard for the prescriber, to enhance the overall User experience.':
            "Quadrabase utilisait déjà une UI et une UX spécifiques pour l'interface du Prescripteur, ce qui répondait aux besoins des clients. Comme l'objectif n'était pas de réinventer des écrans déjà homologués, Falcon s'est concentré sur les autres pour donner une allure moderne à l'ensemble du projet : landing pages, processus d'abonnement, interface constructeur. Nous avons également mis en place un tableau de bord pour le prescripteur, afin d'améliorer l'expérience utilisateur globale.",
          'Quadrabase is a project from a client who has worked in the Construction industry in France for more than 20 years. He has built over the time a very detailed and rich database for the construction projects, and his goal is to revolutionize the construction industry by providing a unique platform, allowing each stakeholder to generate detailed and accurate tender documents very quickly !':
            "Quadrabase est un projet d'un client qui travaille dans le BTP en France depuis plus de 20 ans. Il a construit au fil du temps une base de données très détaillée et riche pour les projets de construction, et son objectif est de révolutionner l'industrie de la construction en fournissant une plateforme unique, permettant à chaque intervenant de générer des documents d'appel d'offres détaillés et précis très rapidement !",
          'The project has been developed based on several sprints, and versions of the application. The first version of the application was a web app, and afterwards, a mobile application (android and iOS) has been developed. The stacks of the project are : ReactJS / ASP.NET Core / React Native. The project development team did change over the time as there has been few months without development activities between each version of the project. Thus, Falcon had to make sure the documentation of the project, as well as the code, where well written to allow an easy handover of the project throughout the different teams. The challenging aspect of the project was the high number of features, spread among the different types of users. Unit testing was necessary to make sure to have a durable code.':
            "Le projet a été développé sur la base de plusieurs sprints et versions de l'application. La première version de l'application était une application web, et par la suite, une application mobile (android et iOS) a été développée. Les stacks du projet sont : ReactJS / ASP.NET Core / React Native. L'équipe de développement du projet a changé au fil du temps car il y a eu quelques mois sans activités de développement entre chaque version du projet. Ainsi, Falcon devait s'assurer que la documentation du projet, ainsi que le code, étaient bien écrits pour permettre une transmission facile du projet aux différentes équipes. L'aspect difficile du projet était le nombre élevé de fonctionnalités, réparties entre les différents types d'utilisateurs. Les tests unitaires étaient nécessaires pour s'assurer d'avoir un code pérenne.",
          'The goal was to have a refined design, which is why the platform is mainly white, and using logo colors are the secondary ones.':
            "L'objectif était d'avoir un design raffiné, c'est pourquoi la plateforme est principalement blanche, et l'utilisation des couleurs du logo sont secondaires.",
          'PermisPop is a project which started in 2019, and which is evolving with time. The first version of the platform was focusing on proving the product-market-fit, and was not having a modern design at all. The UX was also basic. Falcon’s team worked on a whole redesign of the platform, to make it more attractive for the users.':
            "PermisPop est un projet qui a débuté en 2019, et qui évolue avec le temps. La première version de la plate-forme se concentrait sur la preuve de l'adéquation du produit au marché et n'avait pas du tout un design moderne. L'UX était également basique. L'équipe de Falcon a travaillé sur une refonte complète de la plateforme, pour la rendre plus attractive pour les utilisateurs.",
          'Based on client requirement, Falcon did a simple and modern UI/UX mockups, which got validated and realized in the first half of 2022. After the confirmation of the product-market fit, the client asked Falcon to create the complete platform, based on its requirement. Falcon’s UI/UX team worked on defining project workflow and mockups, with the use of Figma. After several weekly meetings allowing to confirm all the assumptions, the mockups got validated within 5 weeks.':
            "Sur la base des exigences du client, Falcon a réalisé des maquettes UI/UX simples et modernes, qui ont été validées et réalisées au premier semestre 2022. Après la confirmation de l'adéquation produit-marché, le client a demandé à Falcon de créer la plate-forme complète, basée sur son exigence. L'équipe UI/UX de Falcon a travaillé sur la définition du flux de travail et des maquettes du projet, avec l'utilisation de Figma. Après plusieurs réunions hebdomadaires permettant de valider toutes les hypothèses, les maquettes ont été validées en 5 semaines.",
          'The health startup, based in Chicago and specialized in remote consultation, worked with several agencies in order to realize their project. Not satisfied by the previous results, they reached out to Falcon, who realized a project MVP to prove the technical feasibility of this cutting-edge project, and allowing the client to raise money for the development of the complete platform. The platform is developed in Web and mobile application.':
            'La startup de la santé, basée à Chicago et spécialisée dans la consultation à distance, a travaillé avec plusieurs agences afin de concrétiser leur projet. Insatisfaits des résultats précédents, ils ont contacté Falcon, qui a réalisé un projet MVP pour prouver la faisabilité technique de ce projet de pointe, et permettant au client de lever des fonds pour le développement de la plateforme complète. La plateforme est développée en application Web et mobile.',
          'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is recorded through his own phone, performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc...). The program then analyzes the data based on internal rules and indicates whether the movements are abnormal or not. The detection of the movements is done with the help of a Media pipe, ARKit and ARCore, and requires advanced knowledge in terms of image processing to ensure fluidity and accuracy of the final results. The health experts can also create custom-made motion exercises by using the exercise generator feature of the platform. This is a complex and cutting-edge technology which allows to define automatically the internal rules of the exercises generated (allowing to know when a patient is correctly realizing the movements or not).':
            "La plateforme de télésanté (nom du projet est confidentiel) est une application web et mobile américaine qui permet aux kinésithérapeutes d'analyser à distance les mouvements de leurs patients. Le patient est enregistré via son propre téléphone, effectuant différents types d'exercices, et l'outil détecte et calcule les angles du corps du patient (tels que ses jambes, ses bras, son pied, sa taille, etc.). Le programme analyse ensuite les données en fonction de règles internes et indique si les mouvements sont anormaux ou non. La détection des mouvements se fait à l'aide d'un Media pipe, ARKit et ARCore, et nécessite des connaissances pointues en terme de traitement d'image pour assurer fluidité et précision des résultats finaux. Les experts de la santé peuvent également créer des exercices de mouvement sur mesure en utilisant la fonction de générateur d'exercices de la plateforme. Il s'agit d'une technologie complexe et de pointe qui permet de définir automatiquement les règles internes des exercices générés (permettant de savoir quand un patient réalise correctement ou non les mouvements).",
          'The project has been developed in modules, based on priorities provided by the client, and in order to be able to launch it as soon as possible. the project team was composed of a project manager, two developers (one back-end and one front-end), and a UI/UX designer. There were bi-weekly meetings with the client to provide frequent updates and get all the required clarification. The project was also tested internally. As the platform is storing sensitive information related to HR, the platform went through several security tests, and Falcon made sure to be 100% compliant with all the security requirement of the big companies. As the project is for the French market, GDPR compliance was also strictly met, and an specialized attorney was overviewing this aspect.':
            "Le projet a été développé en modules, en fonction des priorités fournies par le client, et afin de pouvoir le lancer dans les meilleurs délais. l'équipe projet était composée d'un chef de projet, de deux développeurs (un back-end et un front-end) et d'un designer UI/UX. Il y avait des réunions bihebdomadaires avec le client pour fournir des mises à jour fréquentes et obtenir toutes les clarifications requises. Le projet a également été testé en interne. Comme la plate-forme stocke des informations sensibles liées aux RH, la plate-forme a subi plusieurs tests de sécurité et Falcon s'est assuré d'être 100% conforme à toutes les exigences de sécurité des grandes entreprises. Le projet étant destiné au marché français, la conformité RGPD a également été strictement respectée, et un avocat spécialisé supervisait cet aspect.",
          'The color theme was proposed by Falcon, in order to stay in corporate standard and professional colors.':
            "Le thème de couleur a été proposé par Falcon, afin de rester dans les couleurs standard de l'entreprise et professionnelles.",
          'Our client is an expert in the HR industry, and he has worked for top companies in strategic position such as HR Director. He had to make sure to comply with all the regulation requirement, which could be a real challenge when not having the appropriate tool. This is why he came up with the idea of filling this need and having Falcon creating a complete platform, especially targeting big companies with several branches. The specification had to be redacted by Falcon based on several meetings planned with the client. After getting the completed mockups, the client was able to present them with his targeted audience and make sure of the product market fit.':
            "Notre client est un expert du secteur des RH, et il a travaillé pour des entreprises de premier plan à des postes stratégiques tels que directeur des ressources humaines. Il devait s'assurer de se conformer à toutes les exigences réglementaires, ce qui pouvait être un véritable défi lorsqu'il ne disposait pas de l'outil approprié. C'est pourquoi il a eu l'idée de combler ce besoin et de confier à Falcon la création d'une plateforme complète, ciblant notamment les grandes entreprises à plusieurs branches. Le cahier des charges devait être rédigé par Falcon sur la base de plusieurs rendez-vous prévus avec le client. Après avoir obtenu les maquettes terminées, le client a pu les présenter à son public cible et s'assurer de l'adéquation au marché du produit.",
          'This web application offers a complete panel of features to manage all the employees and consultants of a business entity, as well as their documents and status. Registre-RH also allows to manage the Risk assessment documents of the Company, in order to make sure the entity is complying with the regulation. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another. This application is deployed in big Construction groups in France, and it is used on a day-to-day basis by their HR Department.':
            "Cette application web propose un panel complet de fonctionnalités pour gérer l'ensemble des salariés et consultants d'une entité commerciale, ainsi que leurs documents et statuts. Registre-RH permet également de gérer les documents d'évaluation des risques de l'entreprise, afin de s'assurer que l'entité se conforme à la réglementation. Cette application est capable de gérer plusieurs entreprises, leurs succursales et leurs employés ainsi que le transfert d'employés d'une succursale à une autre. Cette application est déployée dans de grands groupes de BTP en France, et elle est utilisée au quotidien par leur DRH.",
          'On this project, the client, coming from a top business school in France (HEC Paris), had no technical knowledge in development. He had a clear concept, which was not written down on a document, and the details were not worked out. This is one of the aspects where Falcon has a lot of value added : understanding the context and end goals of the project, and proposing a custom-application which would fit the needs best, while staying within the allocated budget. As the client is expert in orientation, he was able to generate a spreadsheet with thousands lines of data. The end goal was to create a modern tool, easy to use for the students. After several meetings, Falcon drafted the project Functional Requirement, which were approved by the Client. Falcon worked on project feasibility and work arounds to get to the end goals. Orientator starts with open questions in shape of a decision tree. Afterwards, it has several closed questions allowing to fine-tune the results provided at the end. The results are shown with a percentage of matching, which is calculated through an algorithm taking into account several parameters. The development process was completed within 3 months, including the integration of all the data and the realization of the administrative panel.':
            "Sur ce projet, le client, issu d'une grande école de commerce en France (HEC Paris), n'avait aucune connaissance technique en développement. Il avait un concept clair, qui n'était pas écrit sur un document, et les détails n'étaient pas élaborés. C'est l'un des aspects où Falcon a beaucoup de valeur ajoutée : comprendre le contexte et les finalités du projet, et proposer une application sur-mesure qui répondrait au mieux aux besoins, tout en restant dans le budget alloué. Comme le client est expert en orientation, il a pu générer une feuille de calcul avec des milliers de lignes de données. L'objectif final était de créer un outil moderne, facile à utiliser pour les étudiants. Après plusieurs réunions, Falcon a rédigé le projet Functional Requirement, qui a été approuvé par le client. Falcon a travaillé sur la faisabilité du projet et les solutions de contournement pour atteindre les objectifs finaux. Orientator commence par des questions ouvertes sous la forme d'un arbre de décision. Ensuite, il comporte plusieurs questions fermées permettant d'affiner les résultats fournis à la fin. Les résultats sont affichés avec un pourcentage d'appariement, qui est calculé grâce à un algorithme prenant en compte plusieurs paramètres. Le processus de développement a été achevé en 3 mois, incluant l'intégration de toutes les données et la réalisation du panel administratif.",
          'Falcon proposed to use a dark color as the main one, and some very bright ones as secondary colors, in order to give a dynamic feeling. The same idea was used for the colors of the action buttons : the gradient of color give a sense of movement, as present in some gaming applications.':
            "Falcon a proposé d'utiliser une couleur sombre comme couleur principale, et des couleurs très vives comme couleurs secondaires, afin de donner une sensation dynamique. La même idée a été reprise pour les couleurs des boutons d'action : le dégradé de couleur donne une impression de mouvement, comme présente dans certaines applications de jeu.",
          'The goal of the project was to create an Akinator-like for allowing students to find the best course for them, based on several criteria. This strategy was based on the fact that the client wanted the orientation topic, seen as complex and worrisome, seen as funny and personified. As the target audience is young, we wanted to add some gamification features, such as the progress bar, and the character reacting to the answers provided by the user. Finally, the project had to look very modern and responsive for mobile phones, as it would predominantly be used on mobile phones.':
            "Le but du projet était de créer un Akinator-like permettant aux étudiants de trouver le meilleur cours pour eux, en fonction de plusieurs critères. Cette stratégie reposait sur le fait que le client souhaitait que le sujet d'orientation soit perçu comme complexe et inquiétant, perçu comme drôle et personnifié. Comme le public cible est jeune, nous avons voulu ajouter quelques fonctionnalités de gamification, comme la barre de progression, et le personnage réagissant aux réponses fournies par l'utilisateur. Enfin, le projet devait être très moderne et réactif pour les téléphones mobiles, car il serait principalement utilisé sur les téléphones mobiles.",
          'Orientator is a French-based platform for students to decide on their university. This website is developed with the front end on React and the backend on Node JS, and the whole project was completed within 5 months, from a simple concept idea to a full-fledge website.':
            "Orientator est une plateforme française permettant aux étudiants de choisir leur université. Ce site Web est développé avec le front-end sur React et le back-end sur Node JS, et l'ensemble du projet a été achevé en 5 mois, d'une simple idée de concept à un site Web à part entière.",
          'Ideally, the client would have liked the whole project to be developed within 4 months. As the Design and Development processes were going, the team figured out that the initial specs were incomplete and were not covering the whole need of the platform. Thus, it was decided that the project would be done under 6 months. This was still a challenged timeline for such a project (+140 screens in total, 6 user interfaces, web and mobile application, …), so Falcon did scale the team from 3 to 6 developers. The development was realized in module, and starting with the Super admin interface. At the end of each module, a meeting was planned with the client to review and adjust the requirement, as needed. One of the features was to allow the users to delineate areas in a construction layout, by drawing a colored shape. This was possible by using the Canvas API, and this created a nice user experience (the alternate solution would have been to upload the construction layout with pre-existing delineation done). The real challenge was to code the platform generically, so that it could adapt to all thousands of potential scenarios, and provide the right response. This was possible as the database infrastructure was realized by one of the Falcon Lead developers. The project was finally completed within 6 months, and launched in big construction sites. Falcon realized the last mile for the project, completing a lot of contractually unclear features, without any additional cost.':
            "Idéalement, le client aurait souhaité que l'ensemble du projet soit développé en 4 mois. Au fur et à mesure des processus de conception et de développement, l'équipe s'est rendu compte que les spécifications initiales étaient incomplètes et ne couvraient pas l'ensemble des besoins de la plate-forme. Ainsi, il a été décidé que le projet se ferait en moins de 6 mois. C'était encore un calendrier difficile pour un tel projet (+140 écrans au total, 6 interfaces utilisateur, application web et mobile, …), Falcon a donc fait passer l'équipe de 3 à 6 développeurs. Le développement a été réalisé en module, et en commençant par l'interface Super admin. À la fin de chaque module, une réunion était prévue avec le client pour revoir et ajuster l'exigence, au besoin. L'une des fonctionnalités était de permettre aux utilisateurs de délimiter des zones dans un schéma de construction, en dessinant une forme colorée. Cela a été possible en utilisant l'API Canvas, et cela a créé une expérience utilisateur agréable (la solution alternative aurait été de télécharger la disposition de la construction avec une délimitation préexistante). Le véritable défi consistait à coder la plateforme de manière générique, afin qu'elle puisse s'adapter à tous les milliers de scénarios potentiels et fournir la bonne réponse. Cela a été possible car l'infrastructure de la base de données a été réalisée par l'un des développeurs de Falcon Lead. Le projet a finalement été achevé en 6 mois, et lancé sur de grands chantiers. Falcon a réalisé le dernier kilomètre du projet, complétant de nombreuses fonctionnalités contractuellement peu claires, sans aucun coût supplémentaire.",
          'The color theme was imposed by the client, due to its already existing digital identity. Based on this requirement, Falcon developed the mockups.':
            'Le thème de la couleur a été imposé par le client, en raison de son identité numérique déjà existante. Sur la base de cette exigence, Falcon a développé les maquettes.',
          'A big construction company tried, few years ago, to realize exactly this project internally, and they worked on designing and developing the platform. Unfortunately, it was a failure due to the fact that the platform was not intuitive enough, and taking in consideration all the situation of a construction site. Thus, the project had to be re-started. Falon has an internal expertise regarding construction project, as one of the lead managers has 10+ years of experience in managing very big construction projects. Thanks to this double expertise (Construction / IT), it was possible to create mockups which were simple enough, intuitive, and generic to consider all the thousands of possible scenarios while using the platform.':
            "Une grande entreprise de construction a essayé, il y a quelques années, de réaliser exactement ce projet en interne, et ils ont travaillé sur la conception et le développement de la plate-forme. Malheureusement, ce fut un échec dû au fait que la plateforme n'était pas assez intuitive, et prenant en considération toute la situation d'un chantier. Le projet a donc dû être relancé. Falon possède une expertise interne en matière de projet de construction, car l'un des chefs de file a plus de 10 ans d'expérience dans la gestion de très grands projets de construction. Grâce à cette double expertise (Construction / Informatique), il a été possible de créer des maquettes suffisamment simples, intuitives et génériques pour envisager tous les milliers de scénarios possibles lors de l'utilisation de la plateforme.",
          'Orgaplan is a Logistics management web and mobile application developed for the French Construction market. Its technology stacks are React for the front end and Node JS for the backend. This project was delivered in just 6 months, which was possible by scaling the team from 2 to up to 8 developers.':
            "Orgaplan est une application web et mobile de gestion logistique développée pour le marché français de la construction. Ses piles technologiques sont React pour le front-end et Node JS pour le backend. Ce projet a été livré en seulement 6 mois, ce qui a été possible en faisant passer l'équipe de 2 à 8 développeurs.",
          'EACH PROJECT IS A NEW OPPORTUNITY': 'CHAQUE PROJET EST UNE NOUVELLE OPPORTUNITÉ',
          // Privacy Policy
          // Title 7
          'Data Breach Policy': 'Politique de violation de données',
          // Body 7
          'This policy is to be distributed to all Falcon Consulting staff.':
            'Cette politique doit être distribuée à tout le personnel de Falcon Consulting.',
          Distribution: 'Distribution',
          'Staff members found in policy violation may be subject to disciplinary action, up to and including termination.':
            "Les membres du personnel trouvés en violation de la politique peuvent faire l'objet de mesures disciplinaires pouvant aller jusqu'au licenciement.",
          'Evidence of cross-departmental communication throughout the analysis, response and post-mortem processes.':
            "Preuve de communication interdépartementale tout au long des processus d'analyse, de réponse et post-mortem.",
          'Executed communication plans for Incident management.':
            'Exécution des plans de communication pour la gestion des incidents.',
          'Archival completed Incident Reports demonstrating compliance with reporting, communication and follow-through.':
            "Archivage des rapports d'incident remplis démontrant la conformité avec les rapports, la communication et le suivi.",
          'On-demand documented procedures and evidence of practice should be in place for this operational policy. Appropriate audit controls and management practice examples are as follows:':
            "Des procédures documentées à la demande et des preuves de pratique doivent être en place pour cette politique opérationnelle. Les contrôles d'audit appropriés et les exemples de pratiques de gestion sont les suivants :",
          'Audit Controls and Management': 'Contrôles et gestion des audits',
          'Each of these four elements shall be conducted as appropriate for all qualifying Incidents or Breaches. An activity log recording the timeline of Incident management shall also be completed. Reporting and documentation shall be filed and managed through the office of the Security Manager.':
            "Chacun de ces quatre éléments doit être mené de manière appropriée pour tous les Incidents ou Violations éligibles. Un journal d'activité enregistrant la chronologie de la gestion des incidents doit également être rempli. Les rapports et la documentation doivent être classés et gérés par le bureau du responsable de la sécurité.",
          'Prepare report and presentation to Falcon Consulting for major Incidents or Breaches.':
            'Préparer un rapport et une présentation à Falcon Consulting pour les incidents ou violations majeurs.',
          'Report on findings and implement recommendations.':
            'Rendre compte des conclusions et mettre en œuvre les recommandations.',
          'Assess employee readiness, education, and training. Document and plan for updates in education or procedural changes to eliminate potential for future Incidents.':
            "Évaluer l'état de préparation, l'éducation et la formation des employés. Documentez et planifiez les mises à jour dans l'éducation ou les changements de procédure pour éliminer le potentiel d'incidents futurs.",
          'Evaluate and identify areas of weakness related to employee skills.':
            'Évaluer et identifier les points faibles liés aux compétences des employés.',
          'Document lapses in process, procedure, or policy that may have caused the Incident or Breach. Analyze and document solutions and remedies to reduce future risks.':
            "Documenter les manquements au processus, à la procédure ou à la politique qui peuvent avoir causé l'Incident ou la Violation. Analysez et documentez les solutions et les remèdes pour réduire les risques futurs.",
          'Evaluate and identify areas of weakness in existing security measures and procedures.':
            'Évaluer et identifier les points faibles des mesures et procédures de sécurité existantes.',
          'Evaluate, analyze, and document the use cases and technical components of the Incident or Breach. Document areas for improvement in environment, technology, or approach that limit future security exposures. Make recommendations as appropriate.':
            "Évaluer, analyser et documenter les cas d'utilisation et les composants techniques de l'Incident ou de la Violation. Documentez les domaines d'amélioration de l'environnement, de la technologie ou de l'approche qui limitent les futures expositions à la sécurité. Faire des recommandations, le cas échéant.",
          'Consider the data and security measures employed.':
            'Considérez les données et les mesures de sécurité utilisées.',
          'Assess and evaluate the root causes of the Incident or Breach and any ways to mitigate and/or prevent a similar occurrence.':
            "Évaluer et évaluer les causes profondes de l'Incident ou de la Violation et tout moyen d'atténuer et/ou de prévenir un événement similaire.",
          'Establish where any present or future risks lie.':
            'Déterminez où se situent les risques présents ou futurs.',
          'To evaluate the effectiveness of the University’s response to the Incident or Breach.':
            "Évaluer l'efficacité de la réponse de l'Université à l'Incident ou à la Violation.",
          'Evaluation and Response': 'Évaluation et réponse',
          "Post Mortem Evaluation and Response – Each Incident or Breach determined to be 'moderately critical' or 'critical' shall have a post mortem analysis completed by the Security manager and their designees to appropriately document, analyze, and make recommendations on ways to limit risk and exposure in the future. At a minimum, the Security manager shall:":
            "Évaluation et réponse post mortem - Chaque incident ou violation déterminé comme « modérément critique » ou « critique » doit faire l'objet d'une analyse post mortem effectuée par le responsable de la sécurité et ses délégués afin de documenter, d'analyser et de faire des recommandations appropriées sur les moyens de limiter les risques et exposition à l'avenir. Au minimum, le responsable de la sécurité doit :",
          'Provide a way in which they can contact Falcon Consulting for further information or to ask questions about what has occurred (e.g. a contact name, helpline number or a web page)':
            "Fournir un moyen par lequel ils peuvent contacter Falcon Consulting pour plus d'informations ou pour poser des questions sur ce qui s'est passé (par exemple, un nom de contact, un numéro d'assistance ou une page Web)",
          'When notifying individuals, provide specific and clear advice on the steps they can take to protect themselves and what the Falcon Consulting and/or third party vendor will do to help minimize their exposure':
            "Lors de la notification des personnes, fournissez des conseils précis et clairs sur les mesures qu'elles peuvent prendre pour se protéger et sur ce que Falcon Consulting et/ou le fournisseur tiers feront pour aider à minimiser leur exposition",
          'Falcon Consulting contacts for the Incident or Breach, any follow-, and other pertinent information':
            "Contacts de Falcon Consulting pour l'Incident ou la Violation, tout suivi et autres informations pertinentes",
          'Next-steps for stakeholders': 'Prochaines étapes pour les parties prenantes',
          'Details of what has been done to respond to the Incident or Breach and any associated risks posed':
            "Détails de ce qui a été fait pour répondre à l'Incident ou à la Violation et tout risque associé posé",
          'What data was involved and whose data was compromised':
            'Quelles données étaient impliquées et quelles données ont été compromises',
          'A description of the Incident or Breach (how and when it occurred)':
            "Une description de l'Incident ou de la Violation (comment et quand il s'est produit)",
          'Working through the Security manager and appropriate leadership, execute the public and internal communication plans. Depending on the nature and scope of the Incident or Breach, multiple messages may need to be delivered as well as press and public communiques. Minimally notifications should include:':
            "En collaboration avec le responsable de la sécurité et la direction appropriée, exécuter les plans de communication publics et internes. Selon la nature et la portée de l'Incident ou de la Violation, plusieurs messages peuvent devoir être transmis ainsi que des communiqués de presse et publics. Au minimum, les notifications doivent inclure :",
          'Execute Messaging Plan': 'Exécuter le plan de messagerie',
          'Prepare and execute a communication and follow-up plan with Security manager and senior leadership. Communication strategies need to define audience(s), frequency, messaging, and content.':
            'Préparer et exécuter un plan de communication et de suivi avec le responsable de la sécurité et la haute direction. Les stratégies de communication doivent définir le(s) public(s), la fréquence, les messages et le contenu.',
          'Determine Public Messaging': 'Déterminer la messagerie publique',
          'Work with senior leadership and provide regular internal updates on status of Incident or Breach, remedies underway, and current exposure and containment strategies. This messaging should be provided to all internal state stakeholders and management. Messaging shall be coordinated through the Security office.':
            "Travailler avec la haute direction et fournir des mises à jour internes régulières sur l'état de l'incident ou de la violation, les solutions en cours et les stratégies d'exposition et de confinement actuelles. Ce message doit être fourni à toutes les parties prenantes internes de l'État et à la direction. La messagerie doit être coordonnée par le bureau de la sécurité.",
          'Determine Internal Communication Plans': 'Déterminer les plans de communication interne',
          'Provide individuals involved in the Incident or Breach with mitigation strategies to re-secure data (e.g. change user id and/or passwords etc.)':
            "Fournir aux personnes impliquées dans l'Incident ou la Violation des stratégies d'atténuation pour re-sécuriser les données (par exemple, changer l'identifiant d'utilisateur et/ou les mots de passe, etc.)",
          'Notify impacted individuals of Incident or Breach remedies.':
            "Informez les personnes concernées des mesures correctives en cas d'incident ou de violation.",
          'Review vendor contracts and compliance terms, assure state and federal reporting and notifications are understood. Contact Legal as necessary to begin contractual adherence. Should the Breach include PII, initiate the Falcon Consulting Board hearing process.':
            "Examinez les contrats des fournisseurs et les conditions de conformité, assurez-vous que les rapports et les notifications étatiques et fédéraux sont compris. Contactez le service juridique si nécessaire pour commencer le respect du contrat. Si la Violation comprend des PII, lancer le processus d'audience du Falcon Consulting Board.",
          'Are there legal, contractual or regulatory notification requirements associated  with the Incident or Breach?':
            "Existe-t-il des exigences de notification légales, contractuelles ou réglementaires associées à l'Incident ou à la Violation ?",
          'Notification enables affected stakeholders to take precautionary steps and allow regulatory bodies to act on the Incident or Breach.':
            "La notification permet aux parties prenantes concernées de prendre des mesures de précaution et aux organismes de réglementation d'agir sur l'Incident ou la Violation.",
          'Notification and Communications': 'Avis et communications',
          'Notification and Incident Communications - Each security Incident or Breach determined to be “moderately critical” or “critical” shall have communication plans documented by the security senior leadership, and their designees to appropriately manage the Incident and communicate progress on its resolution to all effected stakeholders. At a minimum, the Security manager shall:':
            "Notification et communications d'incident - Chaque incident ou violation de sécurité déterminé comme « modérément critique » ou « critique » doit avoir des plans de communication documentés par la haute direction de la sécurité et leurs délégués pour gérer de manière appropriée l'incident et communiquer les progrès de sa résolution à toutes les parties prenantes concernées. . Au minimum, le responsable de la sécurité doit :",
          'Contact all local education providers, agencies, or companies impacted by the breached data, notify them about the Incident, and ask for assistance in limiting the scope of the Incident.':
            "Contactez tous les fournisseurs d'enseignement, agences ou entreprises locaux touchés par les données piratées, informez-les de l'Incident et demandez de l'aide pour limiter la portée de l'Incident.",
          'Are there others who might provide support or advise on risks/courses of action?':
            "Y a-t-il d'autres personnes qui pourraient fournir un soutien ou des conseils sur les risques/lignes d'action ?",
          'Is there risk to another LEP, the state, or loss of public confidence?':
            "Y a-t-il un risque pour un autre LEP, l'État ou une perte de confiance du public ?",
          'Are there wider consequences to consider?':
            'Y a-t-il des conséquences plus larges à considérer ?',
          'A combination of these and other private aspects of their life?':
            "Une combinaison de ces aspects et d'autres aspects privés de leur vie ?",
          'Identity Concerns': "Problèmes d'identité",
          'Financial Implications': 'Implications financières',
          'Personal or Business Reputation': 'Réputation personnelle ou professionnelle',
          'Emotional Wellbeing': 'Bien-être émotionnel',
          'Physical Safety': 'Sécurité physique',
          'Identify risks to individuals:': 'Identifier les risques pour les individus :',
          'Determine actual or potential harm that could come to any individuals':
            "Déterminer les dommages réels ou potentiels qui pourraient survenir à n'importe quel individu",
          'Confidential Information or PII could mean very little to an opportunistic laptop thief while the loss of apparently trivial snippets of information could help a criminal build up a detailed picture associated with identity theft or fraud.':
            "Les informations confidentielles ou PII pourraient signifier très peu pour un voleur d'ordinateur portable opportuniste, tandis que la perte d'extraits d'informations apparemment insignifiants pourrait aider un criminel à se faire une image détaillée associée au vol d'identité ou à la fraude.",
          'If exploited, what will the compromised data tell a third party about the individual? Could it be misused?':
            "Si elles sont exploitées, que diront les données compromises à un tiers sur l'individu ? Peut-il être mal utilisé ?",
          'Identify all staff, districts, customers or vendors involved in the Incident or Breach':
            "Identifier tout le personnel, les districts, les clients ou les fournisseurs impliqués dans l'incident ou la violation",
          'Define individuals and roles whose data was compromised':
            'Définir les individus et les rôles dont les données ont été compromises',
          'How many individuals’ personally identifiable information were affected?':
            "Combien d'informations personnellement identifiables d'individus ont été affectées ?",
          'Identify and document the scope, number of users affected, and depth of Incident or Breach':
            "Identifier et documenter la portée, le nombre d'utilisateurs affectés et la profondeur de l'incident ou de la violation",
          'Are there backups of the compromised data? Can they be restored to a ready state?':
            'Existe-t-il des sauvegardes des données compromises ? Peuvent-ils être restaurés dans un état prêt ?',
          'Determine what technologies or processes will mitigate the loss and restore service':
            'Déterminer quelles technologies ou processus atténueront la perte et restaureront le service',
          'Does encryption of data/device help to limit risk of exposure?':
            "Le cryptage des données/de l'appareil aide-t-il à limiter le risque d'exposition ?",
          'Document risk limiting processes or technology components that contain and manage the Incident':
            "Documenter les processus de limitation des risques ou les composants technologiques qui contiennent et gèrent l'incident",
          'If data has been stolen, could it be used for purposes that harm the individuals whose identity has been compromised; If identity theft is involved, this poses a different type and level of risk.':
            "Si des données ont été volées, pourraient-elles être utilisées à des fins préjudiciables aux personnes dont l'identité a été compromise ; Si le vol d'identité est impliqué, cela pose un type et un niveau de risque différents.",
          'Understand the current status of the compromised data':
            "Comprendre l'état actuel des données compromises",
          'Determine the confidentiality, scope and extent of the Incident or Breach.':
            "Déterminer la confidentialité, la portée et l'étendue de l'Incident ou de la Violation.",
          'Review data sensitivity': 'Examiner la sensibilité des données',
          'Classify Incident or Breach type, data compromised, and extent of breach':
            "Classer le type d'incident ou de violation, les données compromises et l'étendue de la violation",
          'Determine the type and breadth of the Incident or Breach':
            "Déterminer le type et l'ampleur de l'Incident ou de la Violation",
          'Identify and assess ongoing risks that may be associated with the Incident or Breach.':
            "Identifier et évaluer les risques continus qui peuvent être associés à l'Incident ou à la Violation.",
          'Risk Assessment': "L'évaluation des risques",
          'Assess Risk and Incident Scope – All Incidents or Breaches shall have a risk and scope analysis completed by the Security manager or their designee. This analysis shall be documented and shared with the Security manager, the affected parties, and any other relevant stakeholders. At a minimum, the Security manager shall:':
            "Évaluer les risques et la portée de l'incident - Tous les incidents ou violations doivent faire l'objet d'une analyse des risques et de la portée effectuée par le responsable de la sécurité ou son délégué. Cette analyse doit être documentée et partagée avec le responsable de la sécurité, les parties concernées et toute autre partie prenante concernée. Au minimum, le responsable de la sécurité doit :",
          'Complete Incident Report and file with Security manager.':
            "Remplir le rapport d'incident et le déposer auprès du responsable de la sécurité.",
          'Ensure all actions and decisions are logged and recorded as part of incident documentation and reporting.':
            'Assurez-vous que toutes les actions et décisions sont consignées et enregistrées dans le cadre de la documentation et des rapports sur les incidents.',
          'For criminal activities where property was stolen or fraudulent activity occurred, contact the appropriate authorities and general counsel. Should the Breach involve PII that involves a Contract Provider, notify the Falcon Consulting Board members.':
            "Pour les activités criminelles où des biens ont été volés ou des activités frauduleuses se sont produites, contactez les autorités compétentes et l'avocat général. Si la Violation implique des PII impliquant un Fournisseur de contrat, informez-en les membres du Falcon Consulting Board.",
          'Notify authorities as appropriate': 'Aviser les autorités, le cas échéant',
          'Can data be physically recovered if damaged through use of backups, restoration or other means?':
            "Les données peuvent-elles être physiquement récupérées si elles sont endommagées par l'utilisation de sauvegardes, de restaurations ou d'autres moyens ?",
          'Identify the cause of the Incident or breach and whether the situation has been Determine depth and breadth of losses and limit exposure/damages':
            "Identifier la cause de l'incident ou de la violation et déterminer si la situation a été déterminée Déterminer l'ampleur et l'ampleur des pertes et limiter l'exposition/les dommages",
          'Compartmentalize and eliminate exposure. Establish what steps can or need to be taken to contain the threat from further data loss. Contact all relevant departments who may be able to assist in this process. This may involve actions such as taking systems offline or restricting access to systems to a very small number of staff until more is known about the Incident.':
            "Compartimenter et éliminer l'exposition. Déterminez quelles mesures peuvent ou doivent être prises pour contenir la menace d'une nouvelle perte de données. Contactez tous les départements concernés qui peuvent être en mesure de vous aider dans ce processus. Cela peut impliquer des actions telles que la mise hors ligne des systèmes ou la restriction de l'accès aux systèmes à un très petit nombre d'employés jusqu'à ce que l'on en sache plus sur l'incident.",
          'Identify the cause of the Incident or breach and whether the situation has been contained. Ensure that any possibility of further data loss is removed or mitigated as far as possible. If this loss cannot be mitigated, any Incident will be characterized as a Breach.':
            "Identifier la cause de l'Incident ou de la violation et si la situation a été maîtrisée. Assurez-vous que toute possibilité de perte de données supplémentaire est supprimée ou atténuée dans la mesure du possible. Si cette perte ne peut être atténuée, tout Incident sera qualifié d'Infraction.",
          'Ensure investigator has appropriate resources including sufficient time and authority. If PII or confidential data has been breached, also contact the Security manager. In the event that the Incident or Breach is severe, Falcon Consulting executive management, general counsel and the Security manager shall be contacted':
            "Assurez-vous que l'enquêteur dispose des ressources appropriées, y compris suffisamment de temps et d'autorité. Si des informations personnelles ou des données confidentielles ont été violées, contactez également le responsable de la sécurité. Dans le cas où l'Incident ou la Violation est grave, la direction générale de Falcon Consulting, le directeur juridique et le responsable de la sécurité seront contactés.",
          'Investigate the Breach or Incident and forward a copy of the Incident report to the Security manager':
            "Enquêter sur la violation ou l'incident et transmettre une copie du rapport d'incident au responsable de la sécurité",
          'See Incident Classification': 'Voir la classification des incidents',
          'Ascertain the severity of the Incident or Breach and determine the level of data involved.':
            "Vérifier la gravité de l'Incident ou de la Violation et déterminer le niveau de données impliqué.",
          'Determine if the Incident needs to be classified as a Breach.':
            "Déterminez si l'incident doit être classé comme une infraction.",
          'Breach Determination': "Détermination de l'infraction",
          'Contain the breach, limit further organizational damage, seek to recover/restore data.':
            'Contenir la violation, limiter les dommages organisationnels supplémentaires, chercher à récupérer/restaurer les données.',
          'Containment and Recovery:': 'Confinement et récupération :',
          Notes: 'Remarques',
          Action: 'Action',
          Step: 'Marcher',
          'Assess, Contain and Recover Data - All security Incidents shall have immediate analysis of the Incident and an Incident report completed by the Security manager or their designee. This analysis shall include a determination of whether this Incident should be characterized as a Breach. This analysis shall be documented and shared with the [Incident Appropriate Role], the affected parties, and any other relevant stakeholders. At a minimum, the Security manager shall:':
            "Évaluer, contenir et récupérer les données - Tous les incidents de sécurité doivent faire l'objet d'une analyse immédiate de l'incident et d'un rapport d'incident rempli par le responsable de la sécurité ou son délégué. Cette analyse comprendra une détermination de la question de savoir si cet Incident doit être qualifié de Violation. Cette analyse doit être documentée et partagée avec le [rôle approprié de l'incident], les parties concernées et toute autre partie prenante concernée. Au minimum, le responsable de la sécurité doit :",
          'Management response to any reported Incident shall involve the following activities:':
            'La réponse de la direction à tout incident signalé impliquera les activités suivantes :',
          'INCIDENT RESPONSE': 'RÉPONSE AUX INCIDENTS',
          'Incident can be addressed through normal support channels':
            "L'incident peut être traité via les canaux d'assistance normaux",
          'Loss of data is totally contained on encrypted hardware':
            'La perte de données est totalement contenue sur le matériel crypté',
          'Internal data released but data is not student, employee, or confidential in nature':
            'Données internes publiées mais les données ne sont pas de nature étudiante, employée ou confidentielle',
          'User inconvenience is likely but not Falcon Consulting damaging':
            'Les désagréments pour les utilisateurs sont probables mais pas dommageables pour Falcon Consulting',
          'Risk to the Falcon Consulting is low': 'Le risque pour Falcon Consulting est faible',
          'Low Criticality/Minor Incident – Incidents in this category typically deal with personal or internal data and are on a small or individualized scale (e.g. 10 users on the internal network, personal or mobile device related). Incidents in this category typically have the following attributes:':
            'Faible criticité/Incident mineur – Les incidents de cette catégorie concernent généralement des données personnelles ou internes et sont à petite échelle ou individualisés (par exemple, 10 utilisateurs sur le réseau interne, liés à un appareil personnel ou mobile). Les incidents de cette catégorie ont généralement les attributs suivants :',
          'Disclosure of Educator or Employee PII is contained and manageable':
            "La divulgation des PII de l'éducateur ou de l'employé est contenue et gérable",
          'Service outages are likely while the breach is addressed':
            'Des interruptions de service sont probables pendant que la violation est traitée',
          'Significant user inconvenience is likely':
            "Des inconvénients importants pour l'utilisateur sont probables",
          'Data loss is possible but localized/compartmentalized, potential for limited business continuity losses, and minimized Falcon Consulting exposure':
            "La perte de données est possible mais localisée/compartimentée, potentiel de pertes de continuité d'activité limitées et exposition réduite de Falcon Consulting",
          'Third party service provider and subcontractors may be involved':
            'Un fournisseur de services tiers et des sous-traitants peuvent être impliqués',
          'Risk to the Falcon Consulting is moderate':
            'Le risque pour Falcon Consulting est modéré',
          'Moderately Critical/Serious Incident – Breaches or Incidents in this category typically deal with Confidential Information and are on a medium scale (e.g. 100 users on the internal network, application or database related, limited exposure). Incidents in this category typically have the following attributes:':
            'Incident modérément critique/sérieux - Les violations ou incidents de cette catégorie concernent généralement des informations confidentielles et sont à moyenne échelle (par exemple, 100 utilisateurs sur le réseau interne, liés à une application ou à une base de données, exposition limitée). Les incidents de cette catégorie ont généralement les attributs suivants :',
          'Any breach of contract that involves the misuse or unauthorized access to PII by a Contract Provider':
            "Toute rupture de contrat impliquant l'utilisation abusive ou l'accès non autorisé aux PII par un fournisseur de contrat",
          'Requires significant reporting beyond normal operating procedures':
            "Nécessite des rapports importants au-delà des procédures d'exploitation normales",
          'Legal or contractual remedies may be required':
            'Des recours juridiques ou contractuels peuvent être nécessaires',
          'Negative media coverage is likely and exposure is high':
            "Une couverture médiatique négative est probable et l'exposition est élevée",
          'Significant Confidential Information or PII loss, potential for lack of business continuity, Falcon Consulting exposure, or irreversible consequences are imminent':
            "Une perte importante d'informations confidentielles ou de PII, un manque potentiel de continuité des activités, une exposition de Falcon Consulting ou des conséquences irréversibles sont imminents",
          'Any Incident that has been determined to be a Breach':
            'Tout incident qui a été déterminé comme une infraction',
          'Critical/Major Breach or Incident – Incidents or Breaches in this category deal with Confidential Information or PII and are on a large scale (Falcon Consulting-wide). All Incidents or Breaches involving PII will be classified as Critical or Major. They typically have the following attributes:':
            "Violation ou incident critique/majeur - Les incidents ou violations de cette catégorie concernent des informations confidentielles ou PII et sont à grande échelle (à l'échelle de Falcon Consulting). Tous les Incidents ou Violations impliquant des PII seront classés comme Critiques ou Majeurs. Ils ont généralement les attributs suivants :",
          'Data Breaches or Incidents shall be classified as follows:':
            'Les violations de données ou les incidents doivent être classés comme suit :',
          CLASSIFICATION: 'CLASSIFICATION',
          'All Incidents and Breaches will be centrally logged and documented to ensure appropriate documentation, oversight, and consistency in response, management, and reporting.':
            'Tous les incidents et violations seront consignés et documentés de manière centralisée pour garantir une documentation, une surveillance et une cohérence appropriées dans la réponse, la gestion et les rapports.',
          'Once an Incident is reported, the Security manager shall conduct an assessment to establish the severity of the Incident, next steps in response, and potential remedies and solutions. Based on this assessment, the Security manager shall determine if this Incident remains an Incident or if it needs to be categorized as a Breach.':
            "Une fois qu'un incident est signalé, le responsable de la sécurité doit procéder à une évaluation pour établir la gravité de l'incident, les prochaines étapes de réponse, ainsi que les remèdes et solutions potentiels. Sur la base de cette évaluation, le responsable de la sécurité déterminera si cet incident reste un incident ou s'il doit être catégorisé comme une violation.",
          'Confirmed or suspected Incidents shall be reported promptly to the Security manager. A formal report shall be filed that includes full and accurate details of the Incident including who is reporting the Incident and what classification of data is involved.':
            "Les incidents confirmés ou suspectés doivent être signalés rapidement au responsable de la sécurité. Un rapport formel doit être déposé qui comprend des détails complets et précis sur l'Incident, y compris qui signale l'Incident et quelle classification des données est impliquée.",
          'The following process shall be followed when responding to a suspected Incident:':
            'Le processus suivant doit être suivi lors de la réponse à un Incident suspect :',
          'INCIDENT REPORTING': "RAPPORTS D'INCIDENTS",
          'Highly Confidential Data- Information that, if breached, causes significant damage to Falcon Consulting operations, reputation, and/or business continuity. Access to this information should be highly restricted. PII falls into this category of data. Employee or Educator Financial Information, Social Security Numbers, and other critical information also fall into this classification.':
            "Données hautement confidentielles - Informations qui, si elles sont violées, causent des dommages importants aux opérations, à la réputation et/ou à la continuité des activités de Falcon Consulting. L'accès à ces informations doit être très restreint. Les PII entrent dans cette catégorie de données. Les informations financières des employés ou des éducateurs, les numéros de sécurité sociale et d'autres informations critiques entrent également dans cette classification.",
          'Confidential/Internal Data - Information of a more sensitive nature to the business and educational operations of Falcon Consulting. This data represents basic intellectual capital, applications, and general knowledge. Access shall be limited to only those people that need to know as part of their role within the Falcon Consulting. Employee and Educator PII (with the exception of Social Security Numbers (SSN), financial information, or other critical information) falls within this classification.':
            "Données confidentielles/internes - Informations de nature plus sensible aux opérations commerciales et éducatives de Falcon Consulting. Ces données représentent le capital intellectuel de base, les applications et les connaissances générales. L'accès sera limité aux seules personnes qui ont besoin de savoir dans le cadre de leur rôle au sein de Falcon Consulting. Les PII des employés et des éducateurs (à l'exception des numéros de sécurité sociale (SSN), des informations financières ou d'autres informations critiques) relèvent de cette classification.",
          'Public Data - Information intended for public and community use or information that can be made public without any negative impact on the Falcon Consulting or its customers. PII shall never be considered public data unless the data is Directory Information as defined by Falcon Consulting policy.':
            "Données publiques - Informations destinées à un usage public et communautaire ou informations pouvant être rendues publiques sans aucun impact négatif sur Falcon Consulting ou ses clients. Les PII ne seront jamais considérées comme des données publiques à moins que les données ne soient des informations d'annuaire telles que définies par la politique de Falcon Consulting.",
          'All reported Incidents shall be classified as below in order to assess risk and approaches to mitigate the situation. Data classification shall refer to the following Falcon Consulting data categories:':
            "Tous les incidents signalés doivent être classés comme ci-dessous afin d'évaluer les risques et les approches pour atténuer la situation. La classification des données fait référence aux catégories de données suivantes de Falcon Consulting :",
          'Incidents vary in impact and risk depending on a number of mitigating factors including the content and quantity of the data involved. It is critically important that Falcon Consulting management respond quickly and identify the data classification of the Incident. This allows staff to respond accordingly in a timely and thorough manner.':
            "Les incidents varient en termes d'impact et de risque en fonction d'un certain nombre de facteurs atténuants, notamment le contenu et la quantité des données impliquées. Il est extrêmement important que la direction de Falcon Consulting réponde rapidement et identifie la classification des données de l'Incident. Cela permet au personnel de réagir en conséquence de manière opportune et approfondie.",
          'DATA CLASSIFICATIONS': 'CLASSEMENT DES DONNÉES',
          'Incidents can occur locally, in the cloud, or through third party service providers. Reporting and management of Incidents shall occur similarly. Third party providers shall also be governed by contract terms and liability as defined in their operational agreements.':
            'Les incidents peuvent se produire localement, dans le cloud ou via des fournisseurs de services tiers. Le signalement et la gestion des Incidents se dérouleront de la même manière. Les fournisseurs tiers sont également régis par les conditions contractuelles et la responsabilité telles que définies dans leurs accords opérationnels.',
          'Incidents are reviewed to identify improvements in policies and procedures':
            'Les incidents sont examinés pour identifier les améliorations des politiques et des procédures',
          'Incidents are dealt with in a timely manner and normal operations are restored':
            'Les incidents sont traités en temps opportun et les opérations normales sont rétablies',
          'External agencies, customers, and data users are informed as required':
            'Les agences externes, les clients et les utilisateurs de données sont informés au besoin',
          'Evidence is gathered, recorded, and maintained in a form that will withstand internal and external scrutiny':
            'Les preuves sont recueillies, enregistrées et conservées sous une forme qui résistera à un examen interne et externe',
          'Organizational impacts are understood and action is taken to prevent further damage':
            "Les impacts organisationnels sont compris et des mesures sont prises pour prévenir d'autres dommages",
          'Incidents are recorded and documented': 'Les incidents sont enregistrés et documentés',
          'Appropriate levels of management are involved in response management':
            'Les niveaux appropriés de gestion sont impliqués dans la gestion de la réponse',
          'Incidents are handled by appropriately authorized and skilled personnel':
            'Les incidents sont traités par du personnel dûment autorisé et qualifié',
          'Incidents are reported in a timely manner and can be properly investigated':
            "Les incidents sont signalés en temps opportun et peuvent faire l'objet d'une enquête appropriée",
          'Adopting a standardized and consistent approach to Incident management shall ensure that:':
            "L'adoption d'une approche normalisée et cohérente de la gestion des incidents garantit que :",
          "A 'Data Security Breach' or 'Breach' is any Incident where Falcon Consulting cannot put in place controls or take action to reasonably prevent the misuse of Confidential Information or PII. A Breach is also an Incident where data has been misused.":
            "Une « violation de la sécurité des données » ou une « violation » est tout incident pour lequel Falcon Consulting ne peut pas mettre en place des contrôles ou prendre des mesures pour empêcher raisonnablement l'utilisation abusive des informations confidentielles ou des PII. Une violation est également un incident où des données ont été utilisées à mauvais escient.",
          'Hacking, social engineering, phishing or other subversive attacks where information is obtained by deceitful practice':
            'Piratage, ingénierie sociale, hameçonnage ou autres attaques subversives où les informations sont obtenues par des pratiques trompeuses',
          'Human error involving the loss or mistaken transmission of Confidential Information or PII':
            "Erreur humaine impliquant la perte ou la transmission erronée d'informations confidentielles ou de PII",
          'Unforeseen circumstances such as a fire or flood that could lead to the loss or misuse of Confidential Information or PII':
            "Circonstances imprévues telles qu'un incendie ou une inondation pouvant entraîner la perte ou l'utilisation abusive d'informations confidentielles ou d'IPI",
          'Loss or theft of equipment where Confidential Information or PII is stored':
            "Perte ou vol d'équipement où des informations confidentielles ou PII sont stockées",
          'Changes to Falcon Consulting system hardware, firmware, or software characteristics without the Falcon Consulting’s knowledge, instruction, or consent':
            "Modifications apportées au matériel, au micrologiciel ou aux caractéristiques logicielles du système Falcon Consulting à l'insu de Falcon Consulting, sans instruction ou consentement",
          'The unauthorized use of a Falcon Consulting system for the processing or storage of Confidential Information or PII':
            "L'utilisation non autorisée d'un système Falcon Consulting pour le traitement ou le stockage d'Informations Confidentielles ou PII",
          'Unwanted disruption or denial of service': 'Interruption indésirable ou déni de service',
          'Successful attempts to gain unauthorized access to a Falcon Consulting system or regardless of where such information is located':
            "Tentatives réussies d'obtenir un accès non autorisé à un système Falcon Consulting ou quel que soit l'endroit où ces informations se trouvent",
          'Common examples of data security Incidents include, but are not limited to, any of the following:':
            "Les exemples courants d'incidents de sécurité des données incluent, mais sans s'y limiter, l'un des éléments suivants :",
          "A 'Data Security Incident' or “Incident’ shall mean an accidental or deliberate event that results in or constitutes an imminent threat of the unauthorized access, loss, disclosure, modification, disruption, or destruction of communication or information resources of the Falcon Consulting.":
            "Un « Incident de sécurité des données » ou « Incident » désigne un événement accidentel ou délibéré qui entraîne ou constitue une menace imminente d'accès non autorisé, de perte, de divulgation, de modification, de perturbation ou de destruction des ressources de communication ou d'information de Falcon Consulting.",
          'GENERAL INFORMATION': 'INFORMATIONS GÉNÉRALES',
          'This policy applies to all Falcon Consulting staff.':
            "Cette politique s'applique à tout le personnel de Falcon Consulting.",
          'Falcon Consulting must have a robust and systematic process for responding to reported data security Incidents and Breaches. This policy is designed to standardize the Falcon Consulting-wide response to any reported Breach or Incident, and ensure that they are appropriately logged and managed in accordance with best practice guidelines. Standardized processes and procedures help to ensure the Falcon Consulting can act responsibly, respond effectively, and protect its information assets to the extent possible.':
            "Falcon Consulting doit disposer d'un processus robuste et systématique pour répondre aux incidents et violations de sécurité des données signalés. Cette politique est conçue pour standardiser la réponse de Falcon Consulting à toute violation ou incident signalé, et garantir qu'ils sont correctement enregistrés et gérés conformément aux directives des meilleures pratiques. Des processus et des procédures standardisés aident à garantir que Falcon Consulting peut agir de manière responsable, réagir efficacement et protéger ses actifs informationnels dans la mesure du possible.",
          'Data breaches are increasingly common occurrences whether caused through human error or malicious intent. Falcon Consulting operations rely on the proper use of Confidential Information and Personally Identifiable Information (PII) on a daily basis. Managing risk and responding in an organized way to Incidents and Breaches is key to operations.':
            "Les violations de données sont de plus en plus courantes, qu'elles soient causées par une erreur humaine ou une intention malveillante. Les opérations de Falcon Consulting reposent sur l'utilisation appropriée des informations confidentielles et des informations personnellement identifiables (PII) au quotidien. La gestion des risques et la réponse organisée aux incidents et aux violations sont essentielles aux opérations.",

          // Title 6
          'PRIVACY NOTICE': 'AVIS DE CONFIDENTIALITÉ',
          // Body 6
          "If you are a resident in the European Economic Area, the 'data controller' of your personal information is Falcon Consulting. Falcon Consulting has appointed Zain Asif to be its representative in the EEA. You can contact them directly regarding the processing of your information by Falcon Consulting, by email at zain.asif@falconconsulting.fr, by visiting falconconsulting.fr, or by post to:":
            "Si vous résidez dans l'Espace économique européen, le « responsable du traitement » de vos informations personnelles est Falcon Consulting. Falcon Consulting a nommé Zain Asif pour être son représentant dans l'EEE. Vous pouvez les contacter directement concernant le traitement de vos informations par Falcon Consulting, par email à zain.asif@falconconsulting.fr, en visitant falconconsulting.fr, ou par courrier à :",
          'If you have questions or comments about this notice, you may email us at contact@falconconsulting.fr or by post to:':
            'Si vous avez des questions ou des commentaires au sujet de cet avis, vous pouvez nous envoyer un courriel à contact@falconconsulting.fr ou par courrier à :',
          "We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.":
            "Nous pouvons mettre à jour cet avis de confidentialité de temps à autre. La version mise à jour sera indiquée par une date de « révision » mise à jour et la version mise à jour entrera en vigueur dès qu'elle sera accessible. Si nous apportons des modifications importantes à cet avis de confidentialité, nous pouvons vous en informer soit en publiant bien en évidence un avis de ces modifications, soit en vous envoyant directement une notification. Nous vous encourageons à consulter fréquemment cet avis de confidentialité pour être informé de la manière dont nous protégeons vos informations.",
          'In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.':
            'En bref : Oui, nous mettrons à jour cet avis si nécessaire pour rester en conformité avec les lois applicables.',
          'DO WE MAKE UPDATES TO THIS NOTICE?': 'FAISONS-NOUS DES MISES À JOUR À CET AVIS ?',
          'To exercise these rights, you can contact us by email at contact@falconconsulting.fr, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.':
            'Pour exercer ces droits, vous pouvez nous contacter par email à contact@falconconsulting.fr, ou en vous référant aux coordonnées en bas de ce document. Si vous avez une plainte concernant la façon dont nous traitons vos données, nous aimerions avoir de vos nouvelles.',
          'You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.':
            "Vous pouvez demander à vous opposer à la vente future de vos informations personnelles à des tiers. Dès réception d'une demande de retrait, nous donnerons suite à la demande dès que possible, mais au plus tard quinze (15) jours à compter de la date de soumission de la demande.",
          'You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.':
            "Vous pouvez demander la correction de vos données personnelles si elles sont incorrectes ou ne sont plus pertinentes, ou demander de restreindre le traitement des informations. Vous pouvez désigner un agent autorisé pour faire une demande en vertu du CCPA en votre nom. Nous pouvons refuser une demande d'un agent autorisé qui ne fournit pas la preuve qu'il a été valablement autorisé à agir en votre nom conformément au CCPA.",
          'Other privacy rights You may object to the processing of your personal information.':
            'Autres droits à la vie privée Vous pouvez vous opposer au traitement de vos informations personnelles.',
          'We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.':
            "Nous n'utiliserons les informations personnelles fournies dans votre demande que pour vérifier votre identité ou votre autorité pour faire la demande. Dans la mesure du possible, nous éviterons de vous demander des informations supplémentaires à des fins de vérification. Toutefois, si nous ne pouvons pas vérifier votre identité à partir des informations déjà conservées par nous, nous pouvons vous demander de fournir des informations supplémentaires aux fins de vérification de votre identité et à des fins de sécurité ou de prévention des fraudes. Nous supprimerons ces informations supplémentaires fournies dès que nous aurons fini de vous vérifier.",
          'Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.':
            "Dès réception de votre demande, nous devrons vérifier votre identité pour déterminer que vous êtes la même personne dont nous avons les informations dans notre système. Ces efforts de vérification nous obligent à vous demander de fournir des informations afin que nous puissions les faire correspondre avec les informations que vous nous avez précédemment fournies. Par exemple, selon le type de demande que vous soumettez, nous pouvons vous demander de fournir certaines informations afin que nous puissions faire correspondre les informations que vous fournissez avec les informations que nous avons déjà dans nos dossiers, ou nous pouvons vous contacter via une méthode de communication (par exemple, téléphone ou e-mail) que vous nous avez précédemment fournis. Nous pouvons également utiliser d'autres méthodes de vérification selon les circonstances.",
          'Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights We will not discriminate against you if you exercise your privacy rights. Verification process':
            "Droit à la non-discrimination pour l'exercice des droits à la vie privée d'un consommateur Nous ne ferons aucune discrimination à votre encontre si vous exercez vos droits à la vie privée. Processus de vérification",
          'In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re- identify individual data to verify a consumer request.':
            "Conformément à la loi applicable, nous ne sommes pas obligés de fournir ou de supprimer des informations sur les consommateurs qui sont anonymisées en réponse à une demande d'un consommateur ou de réidentifier des données individuelles pour vérifier une demande d'un consommateur.",
          'the business or commercial purpose for collecting or selling personal information.':
            'le but commercial ou commercial de la collecte ou de la vente de renseignements personnels.',
          'the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and':
            'les catégories de tiers auxquels les informations personnelles ont été vendues ou divulguées à des fins commerciales ; et',
          'the categories of personal information that we sold or disclosed for a business purpose;':
            "les catégories d'informations personnelles que nous avons vendues ou divulguées à des fins commerciales ;",
          'Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell your personal information to third parties;':
            "Selon les circonstances, vous avez le droit de savoir : si nous collectons et utilisons vos informations personnelles ; les catégories d'informations personnelles que nous collectons ; les fins pour lesquelles les renseignements personnels recueillis sont utilisés ; si nous vendons vos informations personnelles à des tiers ;",
          'Right to be informed — Request to know': "Droit d'être informé — Demande de savoir",
          'You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.':
            "Vous pouvez demander la suppression de vos informations personnelles. Si vous nous demandez de supprimer vos informations personnelles, nous respecterons votre demande et supprimerons vos informations personnelles, sous réserve de certaines exceptions prévues par la loi, telles que (mais sans s'y limiter) l'exercice par un autre consommateur de son droit à la liberté d'expression. , nos exigences de conformité résultant d'une obligation légale, ou tout traitement pouvant être nécessaire pour se protéger contre des activités illégales.",
          'Right to request deletion of the data — Request to delete':
            'Droit de demander la suppression des données — Demande de suppression',
          'Your rights with respect to your personal data':
            'Vos droits sur vos données personnelles',
          'Falcon Consulting has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Falcon Consulting will not sell personal information in the future belonging to website visitors, users, and other consumers.':
            "Falcon Consulting n'a divulgué ni vendu aucune information personnelle à des tiers à des fins professionnelles ou commerciales au cours des douze (12) mois précédents. Falcon Consulting ne vendra pas à l'avenir d'informations personnelles appartenant aux visiteurs du site Web, aux utilisateurs et aux autres consommateurs.",
          "We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.":
            "Nous pouvons utiliser vos informations personnelles à nos propres fins commerciales, par exemple pour entreprendre des recherches internes pour le développement technologique et la démonstration. Ceci n'est pas considéré comme une « vente » de vos informations personnelles.",
          'We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for profit entity that processes the information on our behalf.':
            'Nous pouvons divulguer vos informations personnelles à nos prestataires de services conformément à un contrat écrit entre nous et chaque prestataire de services. Chaque fournisseur de services est une entité à but lucratif qui traite les informations en notre nom.',
          'Will your information be shared with anyone else?':
            "Vos informations seront-elles partagées avec quelqu'un d'autre ?",
          'If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.':
            "Si vous utilisez un agent autorisé pour exercer votre droit de retrait, nous pouvons refuser une demande si l'agent autorisé ne fournit pas la preuve qu'il a été valablement autorisé à agir en votre nom.",
          'You may contact us by email at contact@falconconsulting.fr, or by referring to the contact details at the bottom of this document.':
            'Vous pouvez nous contacter par email à contact@falconconsulting.fr, ou en vous référant aux coordonnées en bas de ce document.',
          'More information about our data collection and sharing practices can be found in this privacy notice.':
            "Vous trouverez plus d'informations sur nos pratiques de collecte et de partage de données dans cet avis de confidentialité.",
          'How do we use and share your personal information?':
            'Comment utilisons-nous et partageons-nous vos informations personnelles ?',
          'Facilitation in the delivery of our Services and to respond to your inquiries.':
            'Faciliter la prestation de nos services et répondre à vos demandes.',
          'Participation in customer surveys or contests; and':
            'Participation à des sondages ou à des concours auprès des clients ; et',
          'Receiving help through our customer support channels;':
            "Recevoir de l'aide via nos canaux de support client ;",
          'We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:':
            "Nous pouvons également collecter d'autres informations personnelles en dehors de ces catégories lorsque vous interagissez avec nous en personne, en ligne, par téléphone ou par courrier dans le cadre de :",
          'Education Information': "Informations sur l'éducation",
          'Professional or employment-related information':
            "Informations professionnelles ou liées à l'emploi",
          'Geolocation data': 'Données de géolocalisation',
          'Internet or other similar network activity':
            'Internet ou autre activité de réseau similaire',
          'Personal information categories listed in the California Customer Records statute':
            "Catégories d'informations personnelles répertoriées dans la loi californienne sur les dossiers des clients",
          'We have collected the following categories of personal information in the past twelve (12) months:':
            "Nous avons collecté les catégories d'informations personnelles suivantes au cours des douze (12) derniers mois :",
          'What categories of personal information do we collect?':
            "Quelles catégories d'informations personnelles collectons-nous ?",
          "If this definition of 'resident' applies to you, we must adhere to certain rights and obligations regarding your personal information.":
            "Si cette définition de « résident » s'applique à vous, nous devons respecter certains droits et obligations concernant vos informations personnelles.",
          "All other individuals are defined as 'non-residents.'":
            'Tous les autres individus sont définis comme des « non-résidents ».',
          '(1) every individual who is in the State of California for other than a temporary or transitory purpose and (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose':
            "(1) toute personne qui se trouve dans l'État de Californie à des fins autres que temporaires ou transitoires et (2) toute personne domiciliée dans l'État de Californie qui se trouve en dehors de l'État de Californie à des fins temporaires ou transitoires",
          "The California Code of Regulations defines a 'resident' as:":
            'Le California Code of Regulations définit un « résident » comme suit :',
          'CCPA Privacy Notice': "Avis de confidentialité de l'ACCP",
          'If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).':
            "Si vous avez moins de 18 ans, résidez en Californie et disposez d'un compte enregistré auprès des Services, vous avez le droit de demander la suppression des données indésirables que vous publiez publiquement sur les Services. Pour demander la suppression de ces données, veuillez nous contacter en utilisant les coordonnées fournies ci-dessous et inclure l'adresse e-mail associée à votre compte et une déclaration indiquant que vous résidez en Californie. Nous veillerons à ce que les données ne soient pas affichées publiquement sur les Services, mais sachez que les données peuvent ne pas être complètement ou complètement supprimées de tous nos systèmes (par exemple, les sauvegardes, etc.).",
          "California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.":
            "La section 1798.83 du Code civil de Californie, également connue sous le nom de loi « Shine The Light », permet à nos utilisateurs qui résident en Californie de demander et d'obtenir de nous, une fois par an et gratuitement, des informations sur les catégories d'informations personnelles (le cas échéant) que nous divulgués à des tiers à des fins de marketing direct et les noms et adresses de tous les tiers avec lesquels nous avons partagé des informations personnelles au cours de l'année civile précédente. Si vous êtes un résident de Californie et souhaitez faire une telle demande, veuillez nous soumettre votre demande par écrit en utilisant les coordonnées fournies ci-dessous.",
          'In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.':
            "En bref : Oui, si vous résidez en Californie, vous bénéficiez de droits spécifiques concernant l'accès à vos informations personnelles.",
          'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?':
            'LES RÉSIDENTS DE CALIFORNIE ONT-ILS DES DROITS SPÉCIFIQUES À LA VIE PRIVÉE ?',
          "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.":
            "La plupart des navigateurs Web et certains systèmes d'exploitation mobiles et applications mobiles incluent une fonction ou un paramètre Do-Not-Track (« DNT ») que vous pouvez activer pour signaler votre préférence en matière de confidentialité de ne pas faire surveiller et collecter de données sur vos activités de navigation en ligne. À ce stade, aucune norme technologique uniforme pour la reconnaissance et la mise en œuvre des signaux DNT n'a été finalisée. En tant que tel, nous ne répondons pas actuellement aux signaux du navigateur DNT ou à tout autre mécanisme qui communique automatiquement votre choix de ne pas être suivi en ligne. Si une norme de suivi en ligne est adoptée que nous devons suivre à l'avenir, nous vous informerons de cette pratique dans une version révisée de cet avis de confidentialité.",
          'CONTROLS FOR DO-NOT-TRACK FEATURES': 'COMMANDES POUR LES FONCTIONS NE PAS SUIVRE',
          'Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.':
            "Cookies et technologies similaires : la plupart des navigateurs Web sont configurés pour accepter les cookies par défaut. Si vous préférez, vous pouvez généralement choisir de configurer votre navigateur pour supprimer les cookies et rejeter les cookies. Si vous choisissez de supprimer ou de rejeter les cookies, cela pourrait affecter certaines fonctionnalités ou certains services de nos Services. Pour désactiver la publicité basée sur les centres d'intérêt par les annonceurs sur nos services, visitez http://www.aboutads.info/choices/.",
          'below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.':
            "dessous. Vous serez alors retiré des listes marketing. Cependant, nous pouvons toujours communiquer avec vous, par exemple, pour vous envoyer des messages liés au service qui sont nécessaires à l'administration et à l'utilisation de votre compte, pour répondre aux demandes de service ou à d'autres fins non commerciales.",
          "Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'":
            "Désabonnement des communications marketing et promotionnelles : Vous pouvez vous désabonner de nos communications marketing et promotionnelles à tout moment en cliquant sur le lien de désinscription dans les e-mails que nous envoyons, ou en nous contactant en utilisant les coordonnées fournies dans la section 'COMMENT NOUS CONTACTER À PROPOS DE CET AVIS ? »",
          'However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.':
            "Cependant, veuillez noter que cela n'affectera pas la légalité du traitement avant son retrait, ni lorsque la loi applicable le permet, cela n'affectera pas le traitement de vos informations personnelles effectué sur la base de motifs de traitement licites autres que le consentement.",
          "Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.":
            'Retrait de votre consentement : si nous comptons sur votre consentement pour traiter vos informations personnelles, qui peut être un consentement exprès et/ou implicite selon la loi applicable, vous avez le droit de retirer votre consentement à tout moment. Vous pouvez retirer votre consentement à tout moment en nous contactant en utilisant les coordonnées fournies dans la section « COMMENT POUVEZ-VOUS NOUS CONTACTER AU SUJET DE CET AVIS ? dessous.',
          'If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.':
            'Si vous résidez en Suisse, les coordonnées des autorités de protection des données sont disponibles ici : https://www.edoeb.admin.ch/edoeb/fr/home.html.',
          'If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.':
            "Si vous vous trouvez dans l'EEE ou au Royaume-Uni et que vous pensez que nous traitons illégalement vos informations personnelles, vous avez également le droit de porter plainte auprès de votre autorité locale de contrôle de la protection des données. Vous pouvez trouver leurs coordonnées ici : https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.",
          'We will consider and act upon any request in accordance with applicable data protection laws.':
            'Nous examinerons et agirons sur toute demande conformément aux lois applicables en matière de protection des données.',
          "In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.":
            "Dans certaines régions (comme l'EEE, le Royaume-Uni et le Canada), vous disposez de certains droits en vertu des lois applicables en matière de protection des données. Ceux-ci peuvent inclure le droit (i) de demander l'accès et d'obtenir une copie de vos informations personnelles, (ii) de demander la rectification ou l'effacement ; (iii) pour restreindre le traitement de vos informations personnelles ; et (iv) le cas échéant, à la portabilité des données. Dans certaines circonstances, vous pouvez également avoir le droit de vous opposer au traitement de vos informations personnelles. Vous pouvez faire une telle demande en nous contactant en utilisant les coordonnées fournies dans la section « COMMENT POUVEZ-VOUS NOUS CONTACTER AU SUJET DE CET AVIS ? dessous.",
          'In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.':
            "En bref : dans certaines régions, telles que l'Espace économique européen (EEE), le Royaume-Uni (Royaume-Uni) et le Canada, vous disposez de droits qui vous permettent un accès et un contrôle accrus sur vos informations personnelles. Vous pouvez revoir, modifier ou résilier votre compte à tout moment.",
          'WHAT ARE YOUR PRIVACY RIGHTS?': 'QUELS SONT VOS DROITS EN MATIÈRE DE CONFIDENTIALITÉ ?',
          'We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.':
            "Nous avons mis en place des mesures de sécurité techniques et organisationnelles appropriées et raisonnables conçues pour protéger la sécurité de toute information personnelle que nous traitons. Cependant, malgré nos mesures de protection et nos efforts pour sécuriser vos informations, aucune transmission électronique sur Internet ou technologie de stockage d'informations ne peut être garantie à 100 %, nous ne pouvons donc pas promettre ou garantir que les pirates, les cybercriminels ou d'autres tiers non autorisés ne seront pas capable de déjouer notre sécurité et de collecter, accéder, voler ou modifier vos informations de manière inappropriée. Bien que nous fassions de notre mieux pour protéger vos informations personnelles, la transmission d'informations personnelles vers et depuis nos Services est à vos risques et périls. Vous ne devez accéder aux Services que dans un environnement sécurisé.",
          'In Short: We aim to protect your personal information through a system of organizational and technical security measures.':
            'En bref : Nous visons à protéger vos informations personnelles grâce à un système de mesures de sécurité organisationnelles et techniques.',
          'HOW DO WE KEEP YOUR INFORMATION SAFE?':
            'COMMENT GARDONS-NOUS VOS INFORMATIONS EN SÉCURITÉ ?',
          'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.':
            "Lorsque nous n'avons aucun besoin commercial légitime de traiter vos informations personnelles, nous supprimerons ou anonymiserons ces informations, ou, si cela n'est pas possible (par exemple, parce que vos informations personnelles ont été stockées dans des archives de sauvegarde), nous les supprimerons en toute sécurité. stocker vos informations personnelles et les isoler de tout traitement ultérieur jusqu'à ce que la suppression soit possible.",
          'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 1 year.':
            "Nous ne conserverons vos informations personnelles qu'aussi longtemps que nécessaire aux fins énoncées dans le présent avis de confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou autorisée par la loi (telle que la fiscalité, la comptabilité ou d'autres exigences légales). Aucun objectif de cet avis ne nous obligera à conserver vos informations personnelles pendant plus d'un an.",
          'In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.':
            'En bref : nous conservons vos informations aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cet avis de confidentialité, sauf disposition contraire de la loi.',
          'HOW LONG DO WE KEEP YOUR INFORMATION?':
            'COMBIEN DE TEMPS CONSERVONS-NOUS VOS INFORMATIONS ?',
          'We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.':
            'Nous utiliserons les informations que nous recevons uniquement aux fins décrites dans le présent avis de confidentialité ou qui vous sont autrement précisées sur les Services concernés. Veuillez noter que nous ne contrôlons pas et ne sommes pas responsables des autres utilisations de vos informations personnelles par votre fournisseur de médias sociaux tiers. Nous vous recommandons de consulter leur avis de confidentialité pour comprendre comment ils collectent, utilisent et partagent vos informations personnelles, et comment vous pouvez définir vos préférences de confidentialité sur leurs sites et applications.',
          'Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.':
            "Nos Services vous offrent la possibilité de vous inscrire et de vous connecter en utilisant les détails de votre compte de médias sociaux tiers (comme vos identifiants Facebook ou Twitter). Lorsque vous choisissez de le faire, nous recevrons certaines informations de profil vous concernant de votre fournisseur de médias sociaux. Les informations de profil que nous recevons peuvent varier en fonction du fournisseur de médias sociaux concerné, mais incluront souvent votre nom, votre adresse e-mail, votre liste d'amis et votre photo de profil, ainsi que d'autres informations que vous choisissez de rendre publiques sur une telle plate-forme de médias sociaux.",
          'In Short: If you choose to register or log in to our services using a social media account, we may have access to certain information about you.':
            "En bref : Si vous choisissez de vous inscrire ou de vous connecter à nos services à l'aide d'un compte de réseau social, nous pouvons avoir accès à certaines informations vous concernant.",
          'HOW DO WE HANDLE YOUR SOCIAL LOGINS?': 'COMMENT GÉRONS-NOUS VOS CONNEXIONS SOCIALES ?',
          'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.':
            'Nous pouvons utiliser des cookies et des technologies de suivi similaires (comme des balises Web et des pixels) pour accéder ou stocker des informations. Des informations spécifiques sur la manière dont nous utilisons ces technologies et sur la manière dont vous pouvez refuser certains cookies sont présentées dans notre Avis sur les cookies.',
          'In Short: We may use cookies and other tracking technologies to collect and store your information.':
            "En bref : Nous pouvons utiliser des cookies et d'autres technologies de suivi pour collecter et stocker vos informations.",
          'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?':
            "UTILISONS-NOUS DES COOKIES ET D'AUTRES TECHNOLOGIES DE SUIVI ?",
          'Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.':
            "Transferts d'entreprise. Nous pouvons partager ou transférer vos informations dans le cadre de ou pendant les négociations de toute fusion, vente d'actifs de la société, financement ou acquisition de tout ou partie de nos activités à une autre société.",
          'We may need to share your personal information in the following situations:':
            'Nous pouvons être amenés à partager vos informations personnelles dans les situations suivantes :',
          'In Short: We may share information in specific situations described in this section and/or with the following third parties.':
            'En bref : Nous pouvons partager des informations dans des situations spécifiques décrites dans cette section et/ou avec les tiers suivants.',
          'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?':
            'QUAND ET AVEC QUI PARTAGEONS-NOUS VOS INFORMATIONS PERSONNELLES ?',
          'If the information is publicly available and is specified by the regulations':
            'Si les informations sont accessibles au public et sont spécifiées par la réglementation',
          'If the collection is solely for journalistic, artistic, or literary purposes':
            'Si la collecte est uniquement à des fins journalistiques, artistiques ou littéraires',
          'If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced':
            'Si elles ont été produites par une personne dans le cadre de son emploi, de son entreprise ou de sa profession et que la collecte est conforme aux fins pour lesquelles les informations ont été produites',
          'If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records':
            'Si la divulgation est requise pour se conformer à une citation à comparaître, un mandat, une ordonnance du tribunal ou des règles du tribunal relatives à la production de documents',
          'If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province':
            "S'il est raisonnable de s'attendre à ce que la collecte et l'utilisation avec consentement compromettent la disponibilité ou l'exactitude des renseignements et que la collecte est raisonnable à des fins liées à une enquête sur une violation d'un accord ou une contravention aux lois du Canada ou d'une province",
          'If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse':
            "Si nous avons des motifs raisonnables de croire qu'une personne a été, est ou pourrait être victime d'exploitation financière",
          'For identifying injured, ill, or deceased persons and communicating with next of kin':
            'Pour identifier les personnes blessées, malades ou décédées et communiquer avec les plus proches parents',
          'If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim':
            "S'il est contenu dans une déclaration de témoin et que la collecte est nécessaire pour évaluer, traiter ou régler une réclamation d'assurance",
          'For business transactions provided certain conditions are met':
            'Pour les transactions commerciales sous certaines conditions',
          'For investigations and fraud detection and prevention':
            'Pour les enquêtes et la détection et la prévention des fraudes',
          'If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way':
            "Si la collecte est clairement dans l'intérêt d'un individu et que le consentement ne peut être obtenu en temps opportun",
          'In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:':
            'Dans certains cas exceptionnels, nous pouvons être légalement autorisés, en vertu de la loi applicable, à traiter vos informations sans votre consentement, y compris, par exemple :',
          'We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.':
            "Nous pouvons traiter vos informations si vous nous avez donné une autorisation spécifique (c'est-à-dire un consentement exprès) pour utiliser vos informations personnelles à des fins spécifiques, ou dans des situations où votre autorisation peut être déduite (c'est-à-dire un consentement implicite). Vous pouvez retirer votre consentement à tout moment.",
          'If you are located in Canada, this section applies to you.':
            "Si vous résidez au Canada, cette section s'applique à vous.",
          "In legal terms, we are generally the 'data controller' under European data protection laws of the personal information described in this privacy notice, since we determine the means and/or purposes of the data processing we perform. This privacy notice does not apply to the personal information we process as a 'data processor' on behalf of our customers. In those situations, the customer that we provide services to and with whom we have entered into a data processing agreement is the 'data controller' responsible for your personal information, and we merely process your information on their behalf in accordance with your instructions. If you want to know more about our customers' privacy practices, you should read their privacy policies and direct any questions you have to them.":
            "En termes juridiques, nous sommes généralement le « responsable du traitement » en vertu des lois européennes sur la protection des données des informations personnelles décrites dans cet avis de confidentialité, puisque nous déterminons les moyens et/ou les finalités du traitement des données que nous effectuons. Cet avis de confidentialité ne s'applique pas aux informations personnelles que nous traitons en tant que « sous-traitant » pour le compte de nos clients. Dans ces situations, le client auquel nous fournissons des services et avec lequel nous avons conclu un accord de traitement de données est le « contrôleur de données » responsable de vos informations personnelles, et nous traitons simplement vos informations en son nom conformément à vos instructions. Si vous souhaitez en savoir plus sur les pratiques de confidentialité de nos clients, vous devez lire leurs politiques de confidentialité et leur adresser toutes vos questions.",
          'Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.':
            "Intérêts vitaux. Nous pouvons traiter vos informations lorsque nous pensons que cela est nécessaire pour protéger vos intérêts vitaux ou les intérêts vitaux d'un tiers, tels que des situations impliquant des menaces potentielles pour la sécurité de toute personne.",
          'Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.':
            "Obligations légales. Nous pouvons traiter vos informations lorsque nous pensons que cela est nécessaire pour respecter nos obligations légales, telles que coopérer avec un organisme chargé de l'application de la loi ou un organisme de réglementation, exercer ou défendre nos droits légaux, ou divulguer vos informations comme preuve dans un litige dans lequel nous sommes impliqué.",
          'Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.':
            "Consentement. Nous pouvons traiter vos informations si vous nous avez donné la permission (c'est-à-dire votre consentement) d'utiliser vos informations personnelles à des fins spécifiques. Vous pouvez retirer votre consentement à tout moment.",
          'The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:':
            'Le Règlement général sur la protection des données (RGPD) et le RGPD britannique nous obligent à expliquer les bases juridiques valides sur lesquelles nous nous appuyons pour traiter vos informations personnelles. A ce titre, nous pouvons nous appuyer sur les bases légales suivantes pour traiter vos informations personnelles :',
          'If you are located in the EU or UK, this section applies to you.':
            "Si vous résidez dans l'UE ou au Royaume-Uni, cette section s'applique à vous.",
          'In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.':
            "En bref : nous ne traitons vos informations personnelles que lorsque nous pensons que cela est nécessaire et que nous avons une raison légale valable (c'est-à-dire une base légale) pour le faire en vertu de la loi applicable, comme avec votre consentement, pour nous conformer aux lois, pour vous fournir des services. pour conclure ou remplir nos obligations contractuelles, pour protéger vos droits ou pour satisfaire nos intérêts commerciaux légitimes.",
          'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?':
            'SUR QUELLES BASES JURIDIQUES APPUYONS-NOUS POUR TRAITER VOS INFORMATIONS ?',
          "To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.":
            "Pour sauvegarder ou protéger l'intérêt vital d'un individu. Nous pouvons traiter vos informations lorsque cela est nécessaire pour sauvegarder ou protéger les intérêts vitaux d'un individu, par exemple pour éviter tout préjudice.",
          'We process your personal information for a variety of reasons, depending on how you interact with our Services, including:':
            'Nous traitons vos informations personnelles pour diverses raisons, en fonction de la manière dont vous interagissez avec nos Services, notamment :',
          'In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.':
            "En bref : Nous traitons vos informations pour fournir, améliorer et administrer nos Services, communiquer avec vous, pour la sécurité et la prévention de la fraude, et pour nous conformer à la loi. Nous pouvons également traiter vos informations à d'autres fins avec votre consentement.",
          'HOW DO WE PROCESS YOUR INFORMATION?': 'COMMENT TRAITONS-NOUS VOS INFORMATIONS ?',
          'All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.':
            'Toutes les informations personnelles que vous nous fournissez doivent être véridiques, complètes et exactes, et vous devez nous informer de tout changement apporté à ces informations personnelles.',
          'Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.':
            'Données de connexion aux médias sociaux. Nous pouvons vous offrir la possibilité de vous inscrire auprès de nous en utilisant les détails de votre compte de réseau social existant, comme votre compte Facebook, Twitter ou un autre compte de réseau social. Si vous choisissez de vous inscrire de cette manière, nous collecterons les informations décrites dans la section intitulée "COMMENT GÉRONS-NOUS VOS CONNEXIONS SOCIALES ?" dessous.',
          'student data': 'données des étudiants',
          'health data': 'données de santé',
          'Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:':
            "Information sensible. Lorsque cela est nécessaire, avec votre consentement ou autrement autorisé par la loi applicable, nous traitons les catégories d'informations sensibles suivantes :",
          'phone numbers email addresses billing addresses':
            'numéros de téléphone adresses e-mail adresses de facturation',
          names: 'des noms',
          'Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:':
            'Informations personnelles fournies par vous. Les informations personnelles que nous collectons dépendent du contexte de vos interactions avec nous et les Services, des choix que vous faites et des produits et fonctionnalités que vous utilisez. Les informations personnelles que nous collectons peuvent inclure les éléments suivants :',
          'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.':
            'Nous collectons les informations personnelles que vous nous fournissez volontairement lorsque vous exprimez un intérêt à obtenir des informations sur nous ou sur nos produits et services, lorsque vous participez à des activités sur les services ou autrement lorsque vous nous contactez.',
          'In Short: We collect personal information that you provide to us.':
            'En bref : Nous collectons les informations personnelles que vous nous fournissez.',
          'Personal information you disclose to us':
            'Informations personnelles que vous nous divulguez',
          'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?':
            'COMMENT POUVEZ-VOUS NOUS CONTACTER AU SUJET DE CET AVIS ?',
          'DO WE MAKE UPDATES TO THIS NOTICE?': 'FAISONS-NOUS DES MISES À JOUR À CET AVIS ?',
          'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?':
            'LES RÉSIDENTS DE CALIFORNIE ONT-ILS DES DROITS SPÉCIFIQUES À LA VIE PRIVÉE ?',
          'CONTROLS FOR DO-NOT-TRACK FEATURES': 'COMMANDES POUR LES FONCTIONS NE PAS SUIVRE',
          'WHAT ARE YOUR PRIVACY RIGHTS?': 'QUELS SONT VOS DROITS EN MATIÈRE DE CONFIDENTIALITÉ ?',
          'HOW DO WE KEEP YOUR INFORMATION SAFE?':
            'COMMENT GARDONS-NOUS VOS INFORMATIONS EN SÉCURITÉ ?',
          'HOW LONG DO WE KEEP YOUR INFORMATION?':
            'COMBIEN DE TEMPS CONSERVONS-NOUS VOS INFORMATIONS ?',
          'HOW DO WE HANDLE YOUR SOCIAL LOGINS?': 'COMMENT GÉRONS-NOUS VOS CONNEXIONS SOCIALES ?',
          'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?':
            "UTILISONS-NOUS DES COOKIES ET D'AUTRES TECHNOLOGIES DE SUIVI ?",
          'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?':
            'QUAND ET AVEC QUI PARTAGEONS-NOUS VOS INFORMATIONS PERSONNELLES ?',
          'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?':
            'SUR QUELLES BASES JURIDIQUES APPUYONS-NOUS POUR TRAITER VOS INFORMATIONS PERSONNELLES ?',
          'HOW DO WE PROCESS YOUR INFORMATION?': 'COMMENT TRAITONS-NOUS VOS INFORMATIONS ?',
          'WHAT INFORMATION DO WE COLLECT?': 'QUELLES INFORMATIONS COLLECTONS-NOUS?',
          'TABLE OF CONTENTS': 'TABLE DES MATIÈRES',
          'How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.':
            "Comment exercez-vous vos droits ? Le moyen le plus simple d'exercer vos droits est de remplir notre formulaire de demande de personne concernée disponible ici, ou de nous contacter. Nous examinerons et agirons sur toute demande conformément aux lois applicables en matière de protection des données.",
          'What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.':
            "Quels sont vos droits ? Selon l'endroit où vous vous trouvez géographiquement, la loi sur la confidentialité applicable peut signifier que vous avez certains droits concernant vos informations personnelles.",
          'How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.':
            "Comment protégeons-nous vos informations ? Nous avons mis en place des processus et procédures organisationnels et techniques pour protéger vos informations personnelles. Cependant, aucune transmission électronique sur Internet ou technologie de stockage d'informations ne peut être garantie à 100% sécurisée, nous ne pouvons donc pas promettre ou garantir que les pirates, les cybercriminels ou d'autres tiers non autorisés ne seront pas en mesure de déjouer notre sécurité et de collecter, d'accéder de manière inappropriée , voler ou modifier vos informations.",
          'We may share information in specific situations and with specific third parties.':
            'Nous pouvons partager des informations dans des situations spécifiques et avec des tiers spécifiques.',
          'In what situations and with which parties do we share personal information?':
            'Dans quelles situations et avec quelles parties partageons-nous des informations personnelles ?',
          'How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.':
            "Comment traitons-nous vos informations ? Nous traitons vos informations pour fournir, améliorer et administrer nos Services, communiquer avec vous, pour la sécurité et la prévention de la fraude, et pour nous conformer à la loi. Nous pouvons également traiter vos informations à d'autres fins avec votre consentement. Nous traitons vos informations uniquement lorsque nous avons une raison légale valable de le faire.",
          'Do we receive any information from third parties? We do not receive any information from third parties.':
            'Recevons-nous des informations de tiers ? Nous ne recevons aucune information de tiers.',
          'Do we process any sensitive personal information? We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.':
            'Traitons-nous des informations personnelles sensibles ? Nous pouvons traiter des informations personnelles sensibles si nécessaire avec votre consentement ou autrement autorisé par la loi applicable.',
          'What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Falcon Consulting and the Services, the choices you make, and the products and features you use.':
            'Quelles informations personnelles traitons-nous ? Lorsque vous visitez, utilisez ou naviguez sur nos Services, nous pouvons traiter des informations personnelles en fonction de la manière dont vous interagissez avec Falcon Consulting et les Services, des choix que vous faites et des produits et fonctionnalités que vous utilisez.',
          'This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.':
            "Ce résumé fournit les points clés de notre avis de confidentialité, mais vous pouvez trouver plus de détails sur l'un de ces sujets en cliquant sur le lien suivant chaque point clé ou en utilisant notre table des matières ci-dessous pour trouver la section que vous recherchez.",
          'SUMMARY OF KEY POINTS': 'RÉSUMÉ DES POINTS CLÉS',
          'Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@falconconsulting.fr.':
            "Questions ou préoccupations? La lecture de cet avis de confidentialité vous aidera à comprendre vos droits et vos choix en matière de confidentialité. Si vous n'êtes pas d'accord avec nos politiques et pratiques, veuillez ne pas utiliser nos Services. Si vous avez encore des questions ou des préoccupations, veuillez nous contacter à contact@falconconsulting.fr.",
          'Engage with us in other related ways, including any sales, marketing, or events':
            "S'engager avec nous d'autres manières connexes, y compris les ventes, le marketing ou les événements",
          'Visit our website at https://www.falconconsulting.fr, or any website of ours that links to this privacy notice':
            "Visitez notre site Web à l'adresse https://www.falconconsulting.fr, ou l'un de nos sites Web qui renvoie à cet avis de confidentialité",
          'This privacy notice for Falcon Consulting ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:':
            'Cet avis de confidentialité pour Falcon Consulting ("Société", "nous", "notre" ou "notre") décrit comment et pourquoi nous pouvons collecter, stocker, utiliser et/ou partager ("traiter") vos informations lorsque vous utilisez nos services (« Services »), par exemple lorsque vous :',
          'Last updated June 04, 2022': 'Dernière mise à jour le 04 juin 2022',

          // Title 5
          'Government Data Request Policy': 'Politique de demande de données du gouvernement',
          // Body 5
          'In no event will any Group Member transfer Personal Information to a Requesting Authority in a massive, disproportionate, and indiscriminate manner that goes beyond what is necessary in a democratic society.':
            'En aucun cas, un membre du groupe ne transférera des informations personnelles à une autorité requérante de manière massive, disproportionnée et aveugle allant au-delà de ce qui est nécessaire dans une société démocratique.',
          'Bulk transfers': 'Transferts groupés',
          'Falcon Consulting commits to preparing a semi-annual report (a “Transparency Report”), which reflects the number and type of Data Disclosure Requests it has received for the preceding six months, as may be limited by applicable law or court order. Falcon Consulting shall publish the Transparency Report on its website, and make the report available upon request to competent data protection authorities.':
            "Falcon Consulting s'engage à préparer un rapport semestriel (un « rapport de transparence »), qui reflète le nombre et le type de demandes de divulgation de données qu'il a reçues au cours des six mois précédents, dans la mesure où cela peut être limité par la loi applicable ou une ordonnance du tribunal. Falcon Consulting publiera le rapport de transparence sur son site Internet et mettra le rapport à disposition sur demande des autorités compétentes en matière de protection des données.",
          'Transparency reports': 'Rapports de transparence',
          'Where Falcon Consulting is prohibited from notifying the competent data protection authorities and suspending the request, Falcon Consulting will use its best efforts (taking into account the nature, context, purposes, scope, and urgency of the request) to inform the Requesting Authority about its obligations under applicable data protection law and to obtain the right to waive this prohibition. Such efforts may include asking the Requesting Authority to put the request on hold, so that Falcon Consulting can consult with the competent data protection authorities, or to allow disclosure to specified personnel at Falcon Consulting’s customer, and may also, in appropriate circumstances, include seeking a court order to this effect. Falcon Consulting will maintain a written record of the efforts it takes.':
            "Lorsqu'il est interdit à Falcon Consulting d'informer les autorités compétentes en matière de protection des données et de suspendre la demande, Falcon Consulting fera ses meilleurs efforts (compte tenu de la nature, du contexte, des finalités, de l'étendue et de l'urgence de la demande) pour informer l'Autorité requérante de sa obligations en vertu de la législation applicable en matière de protection des données et d'obtenir le droit de renoncer à cette interdiction. Ces efforts peuvent consister à demander à l'autorité requérante de mettre la demande en attente, afin que Falcon Consulting puisse consulter les autorités compétentes en matière de protection des données, ou d'autoriser la divulgation au personnel spécifié chez le client de Falcon Consulting, et peuvent également, dans des circonstances appropriées, inclure la recherche une ordonnance du tribunal à cet effet. Falcon Consulting conservera une trace écrite des efforts nécessaires.",
          'If the Requesting Authority is in a country that does not provide an adequate level of protection for the personal information in accordance with applicable data protection laws, then Falcon Consulting will also put the request on hold to notify and consult with the competent data protection authorities, unless legally prohibited or where an imminent risk of serious harm exists that prohibits prior notification.':
            "Si l'Autorité requérante se trouve dans un pays qui n'offre pas un niveau de protection adéquat des informations personnelles conformément aux lois applicables en matière de protection des données, Falcon Consulting mettra également la demande en attente pour informer et consulter les autorités compétentes en matière de protection des données, sauf si la loi l'interdit ou s'il existe un risque imminent de préjudice grave qui interdit la notification préalable.",
          'Notice to the competent data protection authorities':
            'Avis aux autorités compétentes en matière de protection des données',
          'If this is not possible (for example, because the Requesting Authority declines to make the Data Disclosure Request directly to the Customer, does not know the customer’s identity, or if Falcon Consulting is not permitted by law to disclose the Data Disclosure Request), Falcon Consulting will notify and provide the Customer with the details of the Data Disclosure Request prior to disclosing any personal information, unless legally prohibited from doing so or where an imminent risk of serious harm exists that prohibits prior notification.':
            "Si cela n'est pas possible (par exemple, parce que l'autorité requérante refuse de faire la demande de divulgation de données directement au client, ne connaît pas l'identité du client, ou si Falcon Consulting n'est pas autorisé par la loi à divulguer la demande de divulgation de données), Falcon Consulting informera et fournira au client les détails de la demande de divulgation de données avant de divulguer toute information personnelle, sauf interdiction légale de le faire ou lorsqu'il existe un risque imminent de préjudice grave qui interdit la notification préalable.",
          'If a request concerns personal information for which a Customer is the controller, Falcon Consulting will ordinarily ask the Requesting Authority to make the Data Disclosure Request directly to the relevant Customer. If the Requesting Authority agrees, Falcon Consulting will support the Customer in accordance with the terms of its contract to respond to the Data Disclosure Request.':
            "Si une demande concerne des informations personnelles pour lesquelles un client est le responsable du traitement, Falcon Consulting demandera généralement à l'autorité requérante de faire la demande de divulgation de données directement au client concerné. En cas d'accord de l'Autorité Requérante, Falcon Consulting accompagnera le Client conformément aux termes de son contrat pour répondre à la Demande de Communication de Données.",
          'Notice to the Customer': 'Avis au client',
          'Notice of a Data Disclosure Request': 'Avis de demande de divulgation de données',
          'Falcon Consulting’s Privacy Team will carefully review each and every Data Disclosure Request on a case-by-case basis. The Privacy Team will liaise with the legal department and outside counsel as appropriate to deal with the request to determine the nature, context, purposes, scope and urgency of the Data Disclosure Request, and its validity under applicable laws, to identify whether action may be needed to challenge the Data Disclosure Request and/or to notify the Customer and/or competent data protection authorities in accordance with paragraph 4.':
            "L'équipe de confidentialité de Falcon Consulting examinera attentivement chaque demande de divulgation de données au cas par cas. L'équipe de protection de la vie privée assurera la liaison avec le service juridique et les conseils externes, le cas échéant, pour traiter la demande afin de déterminer la nature, le contexte, les objectifs, la portée et l'urgence de la demande de divulgation de données, ainsi que sa validité en vertu des lois applicables, afin d'identifier si une action peut être nécessaire pour contester la demande de divulgation de données et/ou pour informer le client et/ou les autorités compétentes en matière de protection des données conformément au paragraphe 4.",
          'The Requesting Authority’s request does not have to be made in writing, made under a Court order, or mention data protection law to qualify as a Data Disclosure Request. Any Data Disclosure Request, however made, must be notified to the Privacy Team for review.':
            "La demande de l'autorité requérante n'a pas besoin d'être faite par écrit, en vertu d'une ordonnance du tribunal ou de mentionner la loi sur la protection des données pour être qualifiée de demande de divulgation de données. Toute demande de divulgation de données, quelle qu'en soit la forme, doit être notifiée à l'équipe de confidentialité pour examen.",
          'If a Falcon Consulting Group Member receives a Data Disclosure Request, the recipient of the request must pass it to Falcon Consulting’s Chief Privacy Officer and Privacy Team (collectively, the “Privacy Team”) immediately upon receipt, indicating the date on which it was received together with any other information that may assist the Privacy Team to respond to the request.':
            "Si un membre de Falcon Consulting Group reçoit une demande de divulgation de données, le destinataire de la demande doit la transmettre au responsable de la confidentialité et à l'équipe de confidentialité de Falcon Consulting (collectivement, l'« équipe de confidentialité ») dès réception, en indiquant la date à laquelle elle a été reçue. ainsi que toute autre information susceptible d'aider l'équipe de confidentialité à répondre à la demande.",
          'Handling of a Data Disclosure Request':
            "Traitement d'une demande de divulgation de données",
          'For that reason, unless it is legally prohibited from doing so or there is an imminent risk of serious harm, Falcon Consulting will notify and consult with the competent data protection authorities (and, where it processes the personal information on behalf of a Customer, the Customer) to address the Data Disclosure Request.':
            "Pour cette raison, sauf interdiction légale de le faire ou en cas de risque imminent de préjudice grave, Falcon Consulting notifiera et consultera les autorités compétentes en matière de protection des données (et, lorsqu'il traite les informations personnelles pour le compte d'un Client, le Client) pour répondre à la demande de divulgation de données.",
          'taking into account the nature, context, purposes, scope and urgency of the Data Disclosure Request and the privacy rights and freedoms of any affected individuals, there is an imminent risk of serious harm that merits compliance with the Data Disclosure Requests in any event.':
            "compte tenu de la nature, du contexte, des objectifs, de la portée et de l'urgence de la demande de divulgation de données et des droits et libertés à la vie privée de toute personne concernée, il existe un risque imminent de préjudice grave qui mérite de se conformer aux demandes de divulgation de données dans tous les cas.",
          'it is under a compelling legal obligation to make such disclosure; or':
            'il est soumis à une obligation légale impérieuse de faire une telle divulgation ; ou',
          'As a general principle, Falcon Consulting does not disclose personal information in response to a Data Disclosure Request unless either:':
            "En règle générale, Falcon Consulting ne divulgue pas d'informations personnelles en réponse à une demande de divulgation de données, sauf si :",
          'General principle on Data Disclosure Requests':
            'Principe général sur les demandes de divulgation de données',
          'The lists below are by no means exhaustive, but attempt to provide a framework for activities which fall into the category of unacceptable use.':
            'Les listes ci-dessous ne sont en aucun cas exhaustives, mais tentent de fournir un cadre pour les activités qui entrent dans la catégorie des utilisations inacceptables.',
          'Where Falcon Consulting receives a Data Disclosure Request, it will handle that Data Disclosure Request in accordance with this policy. . If applicable data protection law(s) require a higher standard of protection for personal information than is required by this policy, Falcon Consulting will comply with the relevant requirements of those applicable data protection law(s).':
            'Lorsque Falcon Consulting reçoit une demande de divulgation de données, il traitera cette demande de divulgation de données conformément à la présente politique. . Si les lois applicables en matière de protection des données exigent un niveau de protection des informations personnelles plus élevé que celui requis par la présente politique, Falcon Consulting se conformera aux exigences pertinentes de ces lois applicables en matière de protection des données.',
          'This Government Data Request Policy sets out Falcon Consulting’s procedure for responding to a request received from a law enforcement or other government authority (together the “Requesting Authority“) to disclose personal information processed by Falcon Consulting (hereafter “Data Disclosure Request“) which is aligned with our Binding Corporate Rules: Government Data Request Procedure.':
            "Cette politique de demande de données gouvernementales définit la procédure de Falcon Consulting pour répondre à une demande reçue d'une autorité chargée de l'application de la loi ou d'une autre autorité gouvernementale (ensemble, l'« Autorité requérante ») pour divulguer des informations personnelles traitées par Falcon Consulting (ci-après « Demande de divulgation de données ») qui est conformément à nos règles d'entreprise contraignantes : procédure de demande de données gouvernementales.",

          // Title 4
          'Acceptable Use Policy': "Politique d'utilisation acceptable",
          // Body 4
          'Apart from following all laws pertaining to the handling and disclosure of copyrighted or export controlled materials, Falcon Consulting’s trademarks, logos and any other Falcon Consulting intellectual property may also not be used in connection with any blogging activity':
            "Outre le respect de toutes les lois relatives à la manipulation et à la divulgation de documents protégés par le droit d'auteur ou à l'exportation, les marques, logos et toute autre propriété intellectuelle de Falcon Consulting ne peuvent pas non plus être utilisés dans le cadre d'une activité de blog.",
          'Employees may also not attribute personal statements, opinions or beliefs to Falcon Consulting when engaged in blogging. If an employee is expressing his or her beliefs and/or opinions in blogs, the employee may not, expressly or implicitly, represent themselves as an employee or representative of Falcon Consulting. Employees assume any and all risk associated with blogging.':
            "Les employés ne peuvent pas non plus attribuer des déclarations personnelles, des opinions ou des croyances à Falcon Consulting lorsqu'ils sont engagés dans des blogs. Si un employé exprime ses convictions et/ou opinions dans des blogs, l'employé ne peut pas, expressément ou implicitement, se présenter comme un employé ou un représentant de Falcon Consulting. Les employés assument tous les risques associés aux blogs.",
          'Employees shall not engage in any blogging that may harm or tarnish the image, reputation and/or goodwill of Falcon Consulting and/or any of its employees. Employees are also prohibited from making any discriminatory, disparaging, defamatory or harassing comments when blogging or otherwise engaging in any conduct prohibited by Falcon Consulting’s Non-Discrimination and Anti-Harassment policy.':
            "Les employés ne doivent pas s'engager dans des blogs qui pourraient nuire ou ternir l'image, la réputation et/ou la bonne volonté de Falcon Consulting et/ou de l'un de ses employés. Il est également interdit aux employés de faire des commentaires discriminatoires, dénigrants, diffamatoires ou harcelants lorsqu'ils bloguent ou se livrent à toute conduite interdite par la politique de non-discrimination et de lutte contre le harcèlement de Falcon Consulting.",
          'Falcon Consulting’s Confidential Information policy also applies to blogging. As such, Employees are prohibited from revealing any confidential or proprietary information, trade secrets or any other material covered by Company’s Confidential Information policy when engaged in blogging.':
            "La politique d'informations confidentielles de Falcon Consulting s'applique également aux blogs. En tant que tel, il est interdit aux Employés de révéler des informations confidentielles ou exclusives, des secrets commerciaux ou tout autre matériel couvert par la politique d'informations confidentielles de la Société lorsqu'ils sont engagés dans des blogs.",
          "Blogging by employees, whether using Falcon Consulting’s property and systems or personal computer systems, is also subject to the terms and restrictions set forth in this Policy. Limited and occasional use of Falcon Consulting’s systems to engage in blogging is acceptable, provided that it is done in a professional and responsible manner, does not otherwise violate Falcon Consulting’s policy, is not detrimental to Falcon Consulting’s best interests, and does not interfere with an employee's regular work duties. Blogging from Falcon Consulting’s systems is also subject to monitoring.":
            "Les blogs des employés, qu'ils utilisent la propriété et les systèmes de Falcon Consulting ou des systèmes informatiques personnels, sont également soumis aux conditions et restrictions énoncées dans la présente politique. L'utilisation limitée et occasionnelle des systèmes de Falcon Consulting pour s'engager dans des blogs est acceptable, à condition qu'elle soit effectuée de manière professionnelle et responsable, qu'elle ne viole pas autrement la politique de Falcon Consulting, qu'elle ne nuise pas aux meilleurs intérêts de Falcon Consulting et qu'elle n'interfère pas avec une tâches habituelles de l'employé. Les blogs à partir des systèmes de Falcon Consulting sont également soumis à une surveillance.",
          'Blogging and Social Media': 'Blogs et réseaux sociaux',
          'Posting the same or similar non-business-related messages to large numbers of Usenet newsgroups (newsgroup spam).':
            "Publier des messages identiques ou similaires non liés à l'entreprise sur un grand nombre de groupes de discussion Usenet (spam de groupes de discussion).",
          "Use of unsolicited email originating from within Falcon Consulting's networks of other Internet/Intranet/Extranet service providers on behalf of, or to advertise, any service hosted by Falcon Consulting or connected via Falcon Consulting's network.":
            "Utilisation d'e-mails non sollicités provenant des réseaux de Falcon Consulting d'autres fournisseurs de services Internet/Intranet/Extranet au nom de, ou pour annoncer, tout service hébergé par Falcon Consulting ou connecté via le réseau de Falcon Consulting.",
          "Creating or forwarding 'chain letters', 'Ponzi' or other 'pyramid' schemes of any type.":
            "Créer ou transmettre des 'chaînes de lettres', 'Ponzi' ou d'autres schémas 'pyramidaux' de tout type.",
          "Solicitation of email for any other email address, other than that of the poster's account, with the intent to harass or to collect replies.":
            "Sollicitation d'e-mail pour toute autre adresse e-mail, autre que celle du compte de l'annonceur, dans l'intention de harceler ou de recueillir des réponses.",
          'Unauthorized use, or forging, of email header information.':
            "Utilisation non autorisée ou falsification des informations d'en-tête d'e-mail.",
          'Any form of harassment via email, telephone or paging, whether through language, frequency, or size of messages.':
            'Toute forme de harcèlement par e-mail, téléphone ou radiomessagerie, que ce soit par la langue, la fréquence ou la taille des messages.',
          "Sending unsolicited email messages, including the sending of 'junk mail' or other advertising material to individuals who did not specifically request such material (email spam).":
            "Envoi de messages électroniques non sollicités, y compris l'envoi de 'courrier indésirable' ou d'autre matériel publicitaire à des personnes qui n'ont pas spécifiquement demandé ce type de matériel (spam par courrier électronique).",
          "When using company resources to access and use the Internet, users must realize they represent the company. Whenever employees state an affiliation to the company, they must also clearly indicate that 'the opinions expressed are my own and not necessarily those of the company'. Questions may be addressed to the IT Department":
            "Lorsqu'ils utilisent les ressources de l'entreprise pour accéder à Internet et l'utiliser, les utilisateurs doivent réaliser qu'ils représentent l'entreprise. Chaque fois que les employés déclarent une affiliation à l'entreprise, ils doivent également indiquer clairement que « les opinions exprimées sont les miennes et pas nécessairement celles de l'entreprise ». Les questions peuvent être adressées au service informatique",
          'Email and Communication Activitiesa': 'Courriel et activités de communicationa',
          'Providing information about, or lists of, Falcon Consulting employees to parties outside Falcon Consulting.':
            "Fournir des informations ou des listes d'employés de Falcon Consulting à des parties extérieures à Falcon Consulting.",
          "Using any program/script/command, or sending messages of any kind, with the intent to interfere with, or disable, a user's terminal session, via any means, locally or via the Internet/Intranet/Extranet.":
            "Utiliser tout programme/script/commande, ou envoyer des messages de toute nature, avec l'intention d'interférer avec ou de désactiver la session du terminal d'un utilisateur, par tout moyen, localement ou via Internet/Intranet/Extranet.",
          "Interfering with or denying service to any user other than the employee's host (for example, denial of service attack).":
            "Interférer avec ou refuser le service à tout utilisateur autre que l'hôte de l'employé (par exemple, attaque par déni de service).",
          'Introducing honeypots, honeynets, or similar technology on the Falcon Consulting network.':
            'Introduire des pots de miel, des filets de miel ou une technologie similaire sur le réseau Falcon Consulting.',
          'Circumventing user authentication or security of any host, network or account.':
            "Contournement de l'authentification des utilisateurs ou de la sécurité de tout hôte, réseau ou compte.",
          "Executing any form of network monitoring which will intercept data not intended for the employee's host, unless this activity is a part of the employee's normal job/duty.":
            "Exécuter toute forme de surveillance du réseau qui interceptera des données non destinées à l'hôte de l'employé, à moins que cette activité ne fasse partie du travail/devoir normal de l'employé.",
          'Port scanning or security scanning is expressly prohibited unless prior notification to Infosec is made.':
            "L'analyse de port ou l'analyse de sécurité est expressément interdite, sauf notification préalable à Infosec.",
          "Effecting security breaches or disruptions of network communication. Security breaches include, but are not limited to, accessing data of which the employee is not an intended recipient or logging into a server or account that the employee is not expressly authorized to access, unless these duties are within the scope of regular duties. For purposes of this section, 'disruption' includes, but is not limited to, network sniffing, pinged floods, packet spoofing, denial of service, and forged routing information for malicious purposes.":
            "Effectuant des failles de sécurité ou des perturbations de la communication réseau. Les failles de sécurité comprennent, mais sans s'y limiter, l'accès à des données dont l'employé n'est pas le destinataire prévu ou la connexion à un serveur ou à un compte auquel l'employé n'est pas expressément autorisé à accéder, à moins que ces tâches ne relèvent de ses fonctions régulières. Aux fins de cette section, la 'perturbation' inclut, mais sans s'y limiter, le reniflage du réseau, les inondations de ping, l'usurpation de paquets, le déni de service et les informations de routage falsifiées à des fins malveillantes.",
          'Making statements about warranty, expressly or implied, unless it is a part of normal job duties.':
            'Faire des déclarations sur la garantie, expresse ou implicite, sauf si cela fait partie des tâches normales du travail.',
          'Making fraudulent offers of products, items, or services originating from any Falcon Consulting account.':
            'Faire des offres frauduleuses de produits, articles ou services provenant de tout compte Falcon Consulting.',
          "Using a Falcon Consulting computing asset to actively engage in procuring or transmitting material that is in violation of sexual harassment or hostile workplace laws in the user's local jurisdiction.":
            "Utiliser un actif informatique de Falcon Consulting pour s'engager activement dans l'obtention ou la transmission de matériel qui enfreint le harcèlement sexuel ou les lois hostiles sur le lieu de travail dans la juridiction locale de l'utilisateur.",
          'Revealing your account password to others or allowing use of your account by others. This includes family and other household members when work is being done at home.':
            "Révéler le mot de passe de votre compte à d'autres ou permettre l'utilisation de votre compte par d'autres. Cela inclut la famille et les autres membres du ménage lorsque le travail est effectué à la maison.",
          'Introduction of malicious programs into the network or server (e.g., viruses, worms, Trojan horses, e-mail bombs, etc.).':
            'Introduction de programmes malveillants dans le réseau ou le serveur (par exemple, virus, vers, chevaux de Troie, bombes e-mail, etc.).',
          'Exporting software, technical information, encryption software or technology, in violation of international or regional export control laws, is illegal. The appropriate management should be consulted prior to export of any material that is in question.':
            "L'exportation de logiciels, d'informations techniques, de logiciels ou de technologies de cryptage, en violation des lois internationales ou régionales sur le contrôle des exportations, est illégale. La direction appropriée doit être consultée avant l'exportation de tout matériel en question.",
          'Accessing data, a server or an account for any purpose other than conducting Falcon Consulting business, even if you have authorized access, is prohibited.':
            "L'accès aux données, à un serveur ou à un compte à des fins autres que la conduite des affaires de Falcon Consulting, même si vous disposez d'un accès autorisé, est interdit.",
          'Unauthorized copying of copyrighted material including, but not limited to, digitization and distribution of photographs from magazines, books or other copyrighted sources, copyrighted music, and the installation of any copyrighted software for which Falcon Consulting or the end user does not have an active license is strictly prohibited.':
            "Copie non autorisée de matériel protégé par le droit d'auteur, y compris, mais sans s'y limiter, la numérisation et la distribution de photographies de magazines, de livres ou d'autres sources protégées par le droit d'auteur, la musique protégée par le droit d'auteur et l'installation de tout logiciel protégé par le droit d'auteur pour lequel Falcon Consulting ou l'utilisateur final n'a pas de licence active est strictement interdit.",
          "Violations of the rights of any person or company protected by copyright, trade secret, patent or other intellectual property, or similar laws or regulations, including, but not limited to, the installation or distribution of 'pirated' or other software products that are not appropriately licensed for use by Falcon Consulting.":
            "Les violations des droits de toute personne ou société protégée par le droit d'auteur, le secret commercial, le brevet ou toute autre propriété intellectuelle, ou des lois ou réglementations similaires, y compris, mais sans s'y limiter, l'installation ou la distribution de produits logiciels « piratés » ou autres qui ne sont pas sous licence appropriée pour une utilisation par Falcon Consulting.",
          'The following activities are strictly prohibited, with no exceptions:':
            'Les activités suivantes sont strictement interdites, sans exception :',
          'System and Network Activities': 'Activités système et réseau',
          'The lists below are by no means exhaustive, but attempt to provide a framework for activities which fall into the category of unacceptable use.':
            'Les listes ci-dessous ne sont en aucun cas exhaustives, mais tentent de fournir un cadre pour les activités qui entrent dans la catégorie des utilisations inacceptables.',
          'Under no circumstances is an employee of Falcon Consulting authorized to engage in any activity that is illegal under local, state, federal or international law while utilizing Falcon Consulting-owned resources.':
            "En aucun cas, un employé de Falcon Consulting n'est autorisé à se livrer à une activité illégale en vertu de la loi locale, étatique, fédérale ou internationale tout en utilisant les ressources appartenant à Falcon Consulting.",
          'The following activities are, in general, prohibited. Employees may be exempted from these restrictions during the course of their legitimate job responsibilities (e.g., systems administration staff may have a need to disable the network access of a host if that host is disrupting production services).':
            "Les activités suivantes sont, en général, interdites. Les employés peuvent être exemptés de ces restrictions dans le cadre de leurs responsabilités professionnelles légitimes (par exemple, le personnel d'administration des systèmes peut avoir besoin de désactiver l'accès au réseau d'un hôte si cet hôte perturbe les services de production).",
          'Unacceptable Use': 'Utilisation inacceptable',
          'Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain malware.':
            "Les employés doivent faire preuve d'une extrême prudence lors de l'ouverture de pièces jointes reçues d'expéditeurs inconnus, qui peuvent contenir des logiciels malveillants.",
          'Postings by employees from a Falcon Consulting email address to newsgroups should contain a disclaimer stating that the opinions expressed are strictly their own and not necessarily those of Falcon Consulting, unless posting is in the course of business duties.':
            "Les publications d'employés à partir d'une adresse e-mail de Falcon Consulting vers des groupes de discussion doivent contenir une clause de non-responsabilité indiquant que les opinions exprimées sont strictement les leurs et pas nécessairement celles de Falcon Consulting, à moins que la publication ne soit effectuée dans le cadre de leurs fonctions professionnelles.",
          'All computing devices must be secured with a password-protected screensaver with the automatic activation feature set to 10 minutes or less. You must lock the screen or log off when the device is unattended.':
            "Tous les appareils informatiques doivent être sécurisés avec un économiseur d'écran protégé par mot de passe avec la fonction d'activation automatique définie sur 10 minutes ou moins. Vous devez verrouiller l'écran ou vous déconnecter lorsque l'appareil est sans surveillance.",
          'System level and user level passwords must comply with the Password Policy. Providing access to another individual, either deliberately or through failure to secure its access, is prohibited.':
            'Les mots de passe de niveau système et de niveau utilisateur doivent être conformes à la politique de mot de passe. Il est interdit de donner accès à une autre personne, que ce soit délibérément ou en ne sécurisant pas son accès.',
          'All mobile and computing devices that connect to the internal network must comply with the Minimum Access Policy.':
            "Tous les appareils mobiles et informatiques qui se connectent au réseau interne doivent respecter la politique d'accès minimum.",
          'Security and Proprietary Information': 'Sécurité et informations exclusives',
          'Falcon Consulting reserves the right to audit networks and systems on a periodic basis to ensure compliance with this policy.':
            "Falcon Consulting se réserve le droit d'auditer périodiquement les réseaux et les systèmes pour s'assurer du respect de cette politique.",
          'For security and network maintenance purposes, authorized individuals within Falcon Consulting may monitor equipment, systems and network traffic at any time, per Audit Policy.':
            "À des fins de sécurité et de maintenance du réseau, les personnes autorisées au sein de Falcon Consulting peuvent surveiller l'équipement, les systèmes et le trafic réseau à tout moment, conformément à la politique d'audit.",
          'Employees are responsible for exercising good judgment regarding the reasonableness of personal use. Individual departments are responsible for creating guidelines concerning personal use of Internet/Intranet/Extranet systems. In the absence of such policies, employees should be guided by departmental policies on personal use, and if there is any uncertainty, employees should consult their supervisor or manager.':
            "Les employés sont responsables d'exercer leur bon jugement quant au caractère raisonnable de l'utilisation personnelle. Les différents départements sont responsables de la création de directives concernant l'utilisation personnelle des systèmes Internet/Intranet/Extranet. En l'absence de telles politiques, les employés doivent être guidés par les politiques ministérielles sur l'utilisation personnelle, et en cas d'incertitude, les employés doivent consulter leur superviseur ou directeur.",
          'You may access, use or share Falcon Consulting proprietary information only to the extent it is authorized and necessary to fulfill your assigned job duties.':
            'Vous pouvez accéder, utiliser ou partager les informations exclusives de Falcon Consulting uniquement dans la mesure où cela est autorisé et nécessaire pour remplir les fonctions qui vous sont assignées.',
          'You have a responsibility to promptly report the theft, loss or unauthorized disclosure of Falcon Consulting proprietary information.':
            "Vous avez la responsabilité de signaler rapidement le vol, la perte ou la divulgation non autorisée d'informations exclusives à Falcon Consulting.",
          'Falcon Consulting proprietary information stored on electronic and computing devices whether owned or leased by Falcon Consulting, the employee or a third party, remains the sole property of Falcon Consulting. You must ensure through legal or technical means that proprietary information is protected in accordance with the Data Protection Standard.':
            "Les informations exclusives de Falcon Consulting stockées sur des appareils électroniques et informatiques, qu'ils soient détenus ou loués par Falcon Consulting, l'employé ou un tiers, restent la propriété exclusive de Falcon Consulting. Vous devez vous assurer par des moyens juridiques ou techniques que les informations exclusives sont protégées conformément à la norme de protection des données.",
          'General Use and Ownership': 'Utilisation générale et propriété',
          'This policy applies to the use of information, electronic and computing devices, and network resources to conduct Falcon Consulting business or interact with internal networks and business systems, whether owned or leased by Falcon Consulting, the employee, or a third party. All employees, contractors, consultants, temporary, and other workers at Falcon Consulting and its subsidiaries are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with Falcon Consulting.':
            "Cette politique s'applique à l'utilisation d'informations, d'appareils électroniques et informatiques et de ressources réseau pour mener les activités de Falcon Consulting ou interagir avec des réseaux internes et des systèmes commerciaux, qu'ils soient détenus ou loués par Falcon Consulting, l'employé ou un tiers. Tous les employés, sous-traitants, consultants, intérimaires et autres travailleurs de Falcon Consulting et de ses filiales sont tenus d'exercer leur bon jugement concernant l'utilisation appropriée des informations, des appareils électroniques et des ressources réseau conformément à Falcon Consulting.",

          // Title 3
          'Information Security Policy': 'Politique de sécurité des informations',
          // Body 3
          'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.':
            "Tout fournisseur, consultant ou sous-traitant reconnu coupable d'avoir enfreint cette politique peut faire l'objet de sanctions pouvant aller jusqu'à la suppression des droits d'accès, la résiliation du ou des contrats et des sanctions civiles ou pénales connexes.",
          'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.':
            "Le personnel reconnu coupable d'avoir enfreint cette politique peut faire l'objet de mesures disciplinaires, pouvant aller jusqu'au licenciement, et de sanctions civiles ou pénales connexes.",
          Enforcement: 'Mise en vigueur',
          'The information security program is reviewed no less than annually or upon significant changes to the information security environment.':
            "Le programme de sécurité de l'information est revu au moins une fois par an ou lors de modifications importantes de l'environnement de sécurité de l'information.",
          'All other applicable federal and state laws or regulations.':
            'Toutes les autres lois ou réglementations fédérales et étatiques applicables.',
          'Contractual agreements,': 'Accords contractuels,',
          'Information Security best practices,': "Bonnes pratiques de sécurité de l'information,",
          'PCI Data Security Standard,': 'Norme de sécurité des données PCI,',
          'State breach notification laws,': 'Lois étatiques sur la notification des infractions,',
          'Comply with all regulatory and legal requirements, including:':
            'Se conformer à toutes les exigences réglementaires et légales, y compris :',
          'Provide value to the way we conduct business and support institutional objectives.':
            'Apporter de la valeur à la façon dont nous menons nos activités et soutenir les objectifs institutionnels.',
          'Serve to protect the Confidentiality, Integrity, and Availability of the Information Resources maintained within the organization using administrative, physical and technical controls.':
            "Servir à protéger la confidentialité, l'intégrité et la disponibilité des ressources d'information conservées au sein de l'organisation à l'aide de contrôles administratifs, physiques et techniques.",
          'Falcon Consulting maintains and communicates an Information Security Program consisting of topic-specific policies, standards, procedures and guidelines that:':
            "Falcon Consulting maintient et communique un programme de sécurité de l'information composé de politiques, normes, procédures et directives spécifiques à un sujet qui :",
          'Seek guidance from the Information Security Team for questions or issues related to information security.':
            "Demandez conseil à l'équipe de sécurité de l'information pour toute question ou problème lié à la sécurité de l'information.",
          'Use Falcon Consulting Information Resources in compliance with all Falcon Consulting Information Security Policies.':
            "Utilisez les ressources d'information de Falcon Consulting conformément à toutes les politiques de sécurité de l'information de Falcon Consulting.",
          'Understand their responsibilities for complying with the Falcon Consulting Information Security Program.':
            "Comprendre leurs responsabilités pour se conformer au programme de sécurité de l'information de Falcon Consulting.",
          'All Employees, Contractors, and Other Third-Party Personnel':
            'Tous les employés, sous-traitants et autres membres du personnel tiers',
          'Report annually, in coordination with the Security Officer, to Executive Management on the effectiveness of the Falcon Consulting Information Security Program, including progress of remedial actions.':
            "Faire un rapport annuel, en coordination avec le responsable de la sécurité, à la direction générale sur l'efficacité du programme de sécurité de l'information de Falcon Consulting, y compris les progrès des actions correctives.",
          'Promote information security education, training, and awareness throughout Falcon Consulting, and initiate plans and programs to maintain information security awareness.':
            "Promouvoir l'éducation, la formation et la sensibilisation à la sécurité de l'information dans l'ensemble de Falcon Consulting, et lancer des plans et des programmes pour maintenir la sensibilisation à la sécurité de l'information.",
          'Review information security incident information and recommend follow-up actions.':
            'Examiner les informations sur les incidents de sécurité des informations et recommander des actions de suivi.',
          'Review and manage the information security policy waiver request process.':
            'Examiner et gérer le processus de demande de dérogation à la politique de sécurité des informations.',
          'Ensure that ongoing security activities are executed in compliance with policy.':
            'Assurez-vous que les activités de sécurité en cours sont exécutées conformément à la politique.',
          'Assess the adequacy and effectiveness of the information security policies and coordinate the implementation of information security controls.':
            "Évaluer l'adéquation et l'efficacité des politiques de sécurité de l'information et coordonner la mise en œuvre des contrôles de sécurité de l'information.",
          'Provide clear direction and visible management support for information security initiatives.':
            "Fournir une orientation claire et un soutien de gestion visible pour les initiatives de sécurité de l'information.",
          'Approve supporting procedures, standards, and guidelines related to information security.':
            "Approuver les procédures, les normes et les directives relatives à la sécurité de l'information.",
          'Formulate, review and recommend information security policies.':
            "Formuler, réviser et recommander des politiques de sécurité de l'information.",
          'Ensure compliance with applicable information security requirements.':
            "Assurer la conformité aux exigences applicables en matière de sécurité de l'information.",
          'Information Security Team': "Équipe de sécurité de l'information",
          'Ensure that the Information Security Officer, in coordination with the Security Team, reports annually to Executive Management on the effectiveness of the Falcon Consulting Information Security Program.':
            "Veiller à ce que le responsable de la sécurité de l'information, en coordination avec l'équipe de sécurité, rende compte chaque année à la direction générale de l'efficacité du programme de sécurité de l'information de Falcon Consulting.",
          'Designate an Information Security Officer and delegate authority to that individual to ensure compliance with applicable information security requirements.':
            "Désignez un responsable de la sécurité de l'information et déléguez l'autorité à cette personne pour assurer le respect des exigences applicables en matière de sécurité de l'information.",
          'Ensure that the Security Team is given the necessary authority to secure the Information Resources under their control within the scope of the Falcon Consulting Information Security Program.':
            "Veiller à ce que l'équipe de sécurité reçoive l'autorité nécessaire pour sécuriser les ressources d'information sous son contrôle dans le cadre du programme de sécurité de l'information de Falcon Consulting.",
          'Ensure adequate information security financial and personnel resources are included in the budgeting and/or financial planning process.':
            "Veiller à ce que des ressources financières et humaines adéquates pour la sécurité de l'information soient incluses dans le processus de budgétisation et/ou de planification financière.",
          'Ensure that information security processes are integrated with strategic and operational planning processes to secure the organization’s mission.':
            "Veiller à ce que les processus de sécurité de l'information soient intégrés aux processus de planification stratégique et opérationnelle pour sécuriser la mission de l'organisation.",
          'Ensure that an appropriate risk-based Information Security Program is implemented to protect the confidentiality, integrity, and availability of all Information Resources collected or maintained by or on behalf of Falcon Consulting.':
            "Veiller à ce qu'un programme de sécurité de l'information basé sur les risques approprié soit mis en œuvre pour protéger la confidentialité, l'intégrité et la disponibilité de toutes les ressources d'information collectées ou conservées par ou au nom de Falcon Consulting.",
          'Executive Management': 'Direction',
          Responsibilities: 'Responsibilities',
          'The Falcon Consulting Information Security Policy applies equally to any individual, entity, or process that interacts with any Falcon Consulting Information Resource.':
            "La politique de sécurité de l'information de Falcon Consulting s'applique également à toute personne, entité ou processus qui interagit avec toute ressource d'information de Falcon Consulting.",
          Audience: 'Spectateurs',
          'The purpose of the Falcon Consulting Information Security Policy is to describe the actions and behaviors required to ensure that due care is taken to avoid inappropriate risks to Falcon Consulting, its business partners, and its stakeholders.':
            "L'objectif de la politique de sécurité de l'information de Falcon Consulting est de décrire les actions et les comportements requis pour s'assurer que toutes les précautions sont prises pour éviter des risques inappropriés pour Falcon Consulting, ses partenaires commerciaux et ses parties prenantes.",
          'Falcon Consulting has recognized that our business information is a critical asset and as such our ability to manage, control, and protect this asset will have a direct and significant impact on our future success. ':
            'Falcon Consulting a reconnu que nos informations commerciales sont un atout essentiel et, à ce titre, notre capacité à gérer, contrôler et protéger cet actif aura un impact direct et significatif sur notre succès futur.',
          'Availability – Ensuring that information assets (information, systems, facilities, networks, and computers) are accessible and usable when needed by an authorized entity.':
            "Disponibilité – S'assurer que les actifs informationnels (informations, systèmes, installations, réseaux et ordinateurs) sont accessibles et utilisables en cas de besoin par une entité autorisée.",
          'Integrity – Protecting the accuracy and completeness of information and the methods that are used to process and manage it.':
            "Intégrité - Protéger l'exactitude et l'exhaustivité des informations et des méthodes utilisées pour les traiter et les gérer.",
          'Confidentiality – Ensuring that information is accessible only to those entities that are authorized to have access, many times enforced by the classic “need-to-know” principle.':
            "Confidentialité - Veiller à ce que les informations ne soient accessibles qu'aux entités autorisées à y accéder, souvent appliquées par le principe classique du 'besoin de savoir'.",
          Introduction: 'Introduction',
          'Information security is a holistic discipline, meaning that its application, or lack thereof, affects all facets of an organization or enterprise. The goal of the Falcon Consulting Information Security Program is to protect the Confidentiality, Integrity, and Availability of the data employed within the organization while providing value to the way we conduct business. Protection of the Confidentiality, Integrity, and Availability are basic principles of information security, and can be defined as:':
            "La sécurité de l'information est une discipline holistique, ce qui signifie que son application, ou son absence, affecte toutes les facettes d'une organisation ou d'une entreprise. L'objectif du programme de sécurité de l'information de Falcon Consulting est de protéger la confidentialité, l'intégrité et la disponibilité des données utilisées au sein de l'organisation tout en apportant de la valeur à la façon dont nous menons nos activités. La protection de la confidentialité, de l'intégrité et de la disponibilité sont des principes de base de la sécurité de l'information et peuvent être définies comme :",

          // Title 2
          'Business Continuity and Disaster Recovery Policy':
            'Politique de continuité des activités et de reprise après sinistre',
          // Body 2
          'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.':
            "Tout fournisseur, consultant ou sous-traitant reconnu coupable d'avoir enfreint cette politique peut faire l'objet de sanctions pouvant aller jusqu'à la suppression des droits d'accès, la résiliation du ou des contrats et des sanctions civiles ou pénales connexes.",
          'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.':
            "Le personnel reconnu coupable d'avoir enfreint cette politique peut faire l'objet de mesures disciplinaires, pouvant aller jusqu'au licenciement, et de sanctions civiles ou pénales connexes.",
          'Waivers from certain policy provisions may be sought following the Falcon Consulting Waiver Process.':
            'Des dérogations à certaines dispositions de la politique peuvent être demandées à la suite du processus de dérogation de Falcon Consulting.',
          Waivers: 'Renonciations',
          'Criticality of Service List: Lists all the services provided and their order of importance.':
            "Liste de criticité des services : répertorie tous les services fournis et leur ordre d'importance.",
          'Data Study: Details the data stored on the systems, its criticality, and its confidentiality.':
            'Étude de données : détaille les données stockées sur les systèmes, leur criticité et leur confidentialité.',
          'Succession Plan: Describes the flow of responsibility when normal staff is unavailable to perform their duties.':
            "Plan de relève : Décrit le flux de responsabilité lorsque le personnel normal n'est pas disponible pour accomplir ses tâches.",
          'Computer Emergency Response Plan: Indicates who is to be contacted, when, and how. Also indicates what immediate actions must be taken in the event of certain occurrences.':
            "Plan d'intervention en cas d'urgence informatique : indique qui doit être contacté, quand et comment. Indique également quelles mesures immédiates doivent être prises en cas de certains événements.",
          'Procedures for plan tests, review, and updates.':
            'Procédures pour les tests, les révisions et les mises à jour du plan.',
          'Protection and availability of plan documentation;':
            'Protection et disponibilité de la documentation du régime ;',
          'Contingency plans for different types of disruption events;':
            "Plans d'urgence pour différents types d'événements perturbateurs ;",
          'Equipment Replacement Plan: Describes what equipment is required to begin to provide services, list the order in which it is necessary, and note where to purchase the equipment.':
            "Plan de remplacement de l'équipement : décrit l'équipement nécessaire pour commencer à fournir des services, indique l'ordre dans lequel il est nécessaire et indique où acheter l'équipement.",
          'Data Backup and Restoration Plan: Indicates which data is backed up, the media to which it is saved, where that media is stored, and how often the backup is done.':
            "Plan de sauvegarde et de restauration des données : indique quelles données sont sauvegardées, le support sur lequel elles sont enregistrées, l'emplacement de stockage de ce support et la fréquence à laquelle la sauvegarde est effectuée.",
          'An inventory of backups and offsite storage locations;':
            'Un inventaire des sauvegardes et des emplacements de stockage hors site ;',
          'Requirements for ensuring information security throughout the process;':
            "Exigences pour assurer la sécurité de l'information tout au long du processus ;",
          'Procedures for reporting disaster events, event escalation, recovery of critical operations, and resumption of normal operations;':
            "Procédures de signalement des événements catastrophiques, de l'escalade des événements, de la reprise des opérations critiques et de la reprise des opérations normales ;",
          'List of potential risks to critical systems and sensitive information;':
            'Liste des risques potentiels pour les systèmes critiques et les informations sensibles ;',
          'Roles and responsibilities for implementing the disaster recovery plan;':
            'Rôles et responsabilités pour la mise en œuvre du plan de reprise après sinistre ;',
          'The Falcon consulting DRP includes:': 'Le DRP conseil Falcon comprend :',
          'The DRP is communicated and distributed to all relevant internal personnel and executive management.':
            'Le DRP est communiqué et distribué à tout le personnel interne et à la direction générale concernés.',
          'The DRP is reviewed and updated upon any relevant change to IT Infrastructure, at the conclusion of plan testing, or least annually.':
            "Le DRP est examiné et mis à jour lors de toute modification pertinente de l'infrastructure informatique, à la fin des tests du plan, ou au moins une fois par an.",
          'The DRP is tested annually, at a minimum.': 'Le DRP est testé annuellement, au minimum.',
          'Falcon consulting has created and implement a Disaster Recovery Plan (“DRP”) to support business objectives outlined in the (BCP/critical processes identified by a Business Impact Analysis).':
            "Falcon Consulting a créé et mis en œuvre un plan de reprise après sinistre (« DRP ») pour soutenir les objectifs commerciaux décrits dans le (PCA/processus critiques identifiés par une analyse d'impact sur l'entreprise).",
          'Disaster Recovery focuses on restoring the technology systems that support both critical and day-to-day business operations.':
            'La reprise après sinistre se concentre sur la restauration des systèmes technologiques qui prennent en charge les opérations commerciales critiques et quotidiennes.',
          'Disaster recovery Policy': 'Politique de reprise après sinistre',
          'Procedures for plan tests, review, and updates.':
            'Procédures pour les tests, les révisions et les mises à jour du plan.',
          'Protection and availability of plan documentation;':
            'Protection et disponibilité de la documentation du régime ;',
          'Contingency plans for different types of disruption events;':
            "Plans d'urgence pour différents types d'événements perturbateurs ;",
          'Strategies to address and limit the reputational impact from an event;':
            "Stratégies pour traiter et limiter l'impact sur la réputation d'un événement ;",
          'Mitigation strategies and safeguards to reduce impact;':
            "Stratégies d'atténuation et mesures de protection pour réduire l'impact ;",
          'Notification policy from Falcon Consulting partners to inform the company in case of disruption of their services which may affect the activities of Falcon Consulting;':
            "Politique de notification des partenaires de Falcon Consulting pour informer l'entreprise en cas de perturbation de leurs services pouvant affecter les activités de Falcon Consulting ;",
          'Communication strategies for communications both inside and outside the organization;':
            "Stratégies de communication pour les communications à l'intérieur et à l'extérieur de l'organisation ;",
          'Processes to ensure the safety of personnel;':
            'Processus pour assurer la sécurité du personnel ;',
          'Identification of supply chain relationships and the organization’s role to support critical infrastructure;':
            "Identification des relations de la chaîne d'approvisionnement et du rôle de l'organisation pour soutenir les infrastructures essentielles ;",
          'Requirements for ensuring information security throughout the process;':
            "Exigences pour assurer la sécurité de l'information tout au long du processus ;",
          'An inventory of critical systems and records, and their dependencies;':
            'Un inventaire des systèmes et enregistrements critiques et de leurs dépendances ;',
          'A risk assessment for critical business processes and operations (Business Impact Analysis);':
            'Une évaluation des risques pour les processus et opérations métier critiques (Business Impact Analysis) ;',
          'Documented plans, response and recovery procedures are developed and approved, detailing how the organization will manage a disruptive event.':
            "Des plans documentés, des procédures d'intervention et de récupération sont élaborés et approuvés, détaillant comment l'organisation gérera un événement perturbateur.",
          'An adequate management structure is in place to prepare for, mitigate and respond to a disruptive event using personnel with the necessary authority, experience, and competence;':
            "Une structure de gestion adéquate est en place pour se préparer, atténuer et répondre à un événement perturbateur en utilisant du personnel ayant l'autorité, l'expérience et la compétence nécessaires ;",
          'The safety and security of personnel is the first priority;':
            'La sûreté et la sécurité du personnel sont la première priorité ;',
          'Business continuity planning includes:':
            'La planification de la continuité des activités comprend :',
          'The BCP is communicated and distributed to all relevant internal personnel and executive management.':
            "Le PCA est communiqué et diffusé à l'ensemble du personnel interne et de la direction générale concernés.",
          'The BCP is reviewed and updated upon any relevant change to the organization, at the conclusion of plan testing, or least annually.':
            "Le PCA est revu et mis à jour lors de tout changement pertinent apporté à l'organisation, à la fin des tests du plan, ou au moins une fois par an.",
          'The BCP is periodically tested and the results should be shared with executive management.':
            'Le PCA est périodiquement testé et les résultats doivent être partagés avec la direction générale.',
          'Falcon Consulting has created and implemented a Business Continuity Plan (“BCP”).':
            "Falcon Consulting a créé et mis en place un Plan de Continuité d'Activité (« PCA »).",
          'Business Continuity focuses on sustaining The Falcon Consulting’s critical business processes during and after a disruption.':
            'La continuité des activités se concentre sur le maintien des processus commerciaux critiques de The Falcon Consulting pendant et après une interruption.',
          'Business Continuity Plan': 'Plan de continuité des activités',

          //

          // Title 1
          'Falcon Consulting Policy Document': 'Document de politique de Falcon Consulting',
          // Body 1
          'Any employee found to have violated this policy may be subjected to disciplinary action in line with the HR Policy.':
            "Tout employé reconnu coupable d'avoir enfreint cette politique peut faire l'objet de mesures disciplinaires conformément à la politique RH.",
          'd. Contact Information': 'ré. Coordonnées',
          'c. Sensitivity Classification [Based on applicable electronic record retention regulations.]':
            'c. Classification de sensibilité [Selon les réglementations applicables en matière de conservation des enregistrements électroniques.]',
          'b. Creation Date': 'b. Date de création',
          'a. System name ': 'un. Nom du système',
          'Backup tapes must have at a minimum the following identifying criteria that can be readily identified by labels and/or a bar-coding system:':
            "Les bandes de sauvegarde doivent avoir au minimum les critères d'identification suivants qui peuvent être facilement identifiés par des étiquettes et/ou un système de codes à barres :",
          'Procedures between KDCC and the offsite backup storage vendor(s) must be reviewed at least annually.':
            'Les procédures entre KDCC et le(s) fournisseur(s) de stockage de sauvegarde hors site doivent être révisées au moins une fois par an.',
          'Backup information shall be selectively used to restore information system functions as a part of the business continuity process.':
            "Les informations de sauvegarde doivent être utilisées de manière sélective pour restaurer les fonctions du système d'information dans le cadre du processus de continuité des activités.",
          'Signature cards held by the offsite backup storage vendor(s) for access to backup media must be reviewed annually or when an authorized individual leaves FALCON CONSULTING.':
            "Les cartes de signature détenues par le(s) fournisseur(s) de stockage de sauvegarde hors site pour l'accès aux supports de sauvegarde doivent être examinées chaque année ou lorsqu'une personne autorisée quitte FALCON CONSULTING.",
          'Backups must be periodically tested to ensure that they are recoverable. To confirm media reliability and information integrity, the back-up information shall be tested at some specified frequency.':
            "Les sauvegardes doivent être testées périodiquement pour s'assurer qu'elles sont récupérables. Pour confirmer la fiabilité des supports et l'intégrité des informations, les informations de sauvegarde doivent être testées à une fréquence spécifiée.",
          'The system backup information shall be provided with protection from unauthorized modification and environmental conditions.':
            'Les informations de sauvegarde du système doivent être protégées contre les modifications non autorisées et les conditions environnementales.',
          'Backup copies of operating systems and other critical information system software shall not be stored in the same location as the operational software.':
            "Les copies de sauvegarde des systèmes d'exploitation et autres logiciels critiques du système d'information ne doivent pas être stockées au même endroit que le logiciel opérationnel.",
          'A process must be implemented to verify the success of the KDCC electronic information backup.':
            'Un processus doit être mis en place pour vérifier le succès de la sauvegarde électronique des informations du KDCC.',
          'Physical access controls implemented at offsite backup storage locations must meet or exceed the physical access controls of the source systems. Additionally, backup media must be protected in accordance with the highest sensitivity level of information stored.':
            "Les contrôles d'accès physique mis en œuvre dans les emplacements de stockage de sauvegarde hors site doivent respecter ou dépasser les contrôles d'accès physique des systèmes sources. De plus, les supports de sauvegarde doivent être protégés conformément au niveau de sensibilité le plus élevé des informations stockées.",
          'Any vendor(s) providing offsite backup storage must be cleared to handle the highest level of information stored.':
            "Tout fournisseur fournissant un stockage de sauvegarde hors site doit être autorisé à gérer le plus haut niveau d'informations stockées.",
          'The Information Resources backup and recovery process for each system must be documented and periodically reviewed.':
            "Le processus de sauvegarde et de récupération des ressources d'information pour chaque système doit être documenté et révisé périodiquement.",
          'The frequency and extent of backups must be in accordance with the importance of the information and the acceptable risk as determined by the data owner.':
            "La fréquence et l'étendue des sauvegardes doivent être conformes à l'importance des informations et au risque acceptable tel que déterminé par le propriétaire des données.",
          'All user-level and system-level information maintained by FALCON CONSULTING shall be backed up periodically. The backup media shall be stored with sufficient protection and proper environmental conditions.':
            "Toutes les informations au niveau de l'utilisateur et du système conservées par FALCON CONSULTING doivent être sauvegardées périodiquement. Le support de sauvegarde doit être stocké avec une protection suffisante et dans des conditions environnementales appropriées.",
          'The CISO / designated personnel are responsible for proper implementation of the Policy.':
            'Le RSSI / le personnel désigné est responsable de la bonne mise en œuvre de la Politique.',
          Responsibility: 'Responsabilité',
          'The Backup Policy document shall be considered as “confidential” and shall be made available to the concerned persons with proper access control. Subsequent changes and versions of this document shall be controlled.':
            "Le document de politique de sauvegarde doit être considéré comme « confidentiel » et doit être mis à la disposition des personnes concernées avec un contrôle d'accès approprié. Les modifications et versions ultérieures de ce document doivent être contrôlées.",
          'The Backup Policy document shall be made available to all the employees covered in the scope. All the changes and new releases of this document shall be made available to the persons concerned. The maintenance responsibility of the document shall be with the CISO and system administrators':
            'Le document de politique de sauvegarde doit être mis à la disposition de tous les employés couverts par le périmètre. Toutes les modifications et nouvelles versions de ce document doivent être mises à la disposition des personnes concernées. La responsabilité de la maintenance du document incombe au RSSI et aux administrateurs système',
          'Distribution and Maintenance': 'Distribution et entretien',
          'Records being generated as part of the Backup Policy shall be retained for a period of two years. Records shall be in hard copy or electronic media. The records shall be owned by the respective system administrators and shall be audited once a year.':
            'Les enregistrements générés dans le cadre de la politique de sauvegarde doivent être conservés pendant une période de deux ans. Les dossiers doivent être sur support papier ou électronique. Les enregistrements appartiennent aux administrateurs système respectifs et sont audités une fois par an.',
          'The Backup Policy document and all other referenced documents shall be controlled. Version control shall be used to preserve the latest release and the previous version of any document. However, the previous version of the documents shall be retained only for a period of two years for legal and knowledge preservation purposes.':
            'Le document de politique de sauvegarde et tous les autres documents référencés doivent être contrôlés. Le contrôle de version doit être utilisé pour conserver la dernière version et la version précédente de tout document. Toutefois, la version précédente des documents ne sera conservée que pendant une période de deux ans à des fins juridiques et de préservation des connaissances.',
          'Document Control': 'Contrôle des documents',
          'The Policy documentation shall consist of Backup Policy and related procedures and guidelines.':
            'La documentation de la politique doit comprendre la politique de sauvegarde et les procédures et directives associées.',
          Documentation: 'Documentation',
          'This policy applies to the entire IT infrastructure of FALCON CONSULTING.':
            "Cette politique s'applique à l'ensemble de l'infrastructure informatique de FALCON CONSULTING.",
          'IT Assets': 'Actifs informatiques',
          'This policy applies to all Employees, Contractors, and Third Party Employees, who have access to IT assets of FALCON CONSULTING and may be bound by contractual agreements.':
            "Cette politique s'applique à tous les employés, sous-traitants et employés tiers qui ont accès aux actifs informatiques de FALCON CONSULTING et peuvent être liés par des accords contractuels.",
          Employees: 'Des employés',
          Scope: 'Porté',
          'provide a measure of protection against human error or the inadvertent deletion of important files.':
            "fournir une mesure de protection contre l'erreur humaine ou la suppression par inadvertance de fichiers importants.",
          'restore the integrity of the computer systems in the event of a hardware/software failure or physical disaster; and':
            "restaurer l'intégrité des systèmes informatiques en cas de panne matérielle/logicielle ou de sinistre physique ; et",
          'The purpose of this policy is to provide means to:':
            "L'objectif de cette politique est de fournir des moyens pour :",
          'System backup policy and program': 'Politique et programme de sauvegarde du système',
          'Falcon Consulting help deliver a range of services that help clients improve their operational risk management. These services include helping clients design risk frameworks, manage governance and model data. We can also provide clients with an outsourced managed service.':
            'Falcon Consulting aide à fournir une gamme de services qui aident les clients à améliorer leur gestion des risques opérationnels. Ces services consistent notamment à aider les clients à concevoir des cadres de risque, à gérer la gouvernance et à modéliser les données. Nous pouvons également fournir à nos clients un service géré externalisé.',
          'Enable third-party risk management': 'Activer la gestion des risques tiers',
          'Falcon Consulting leverage advanced analytics, robotic process automation, advanced workflow, and machine learning to simplify and streamline everyday tasks when implementing and managing effective third-party risk management programs.':
            "Falcon Consulting tire parti des analyses avancées, de l'automatisation des processus robotiques, du flux de travail avancé et de l'apprentissage automatique pour simplifier et rationaliser les tâches quotidiennes lors de la mise en œuvre et de la gestion de programmes efficaces de gestion des risques tiers.",
          'Innovate third-party risk management': 'Innover dans la gestion des risques tiers',
          'Falcon Consulting help clients understand and implement tactical and strategic methods of managing and mitigating third-party risks. These methods include continuous or periodic monitoring, threat monitoring, and alert management processes to make the job of staying on top of risk easier to implement at a lower overall cost.':
            "Falcon Consulting aide ses clients à comprendre et à mettre en œuvre des méthodes tactiques et stratégiques de gestion et d'atténuation des risques tiers. Ces méthodes comprennent une surveillance continue ou périodique, une surveillance des menaces et des processus de gestion des alertes pour faciliter la mise en œuvre de la maîtrise des risques à un coût global inférieur.",
          'Monitor Risk': 'Surveiller les risques',
          'Falcon Consulting provide due diligence and investigation services in more than 240 countries and 100 languages. We offer off-the-shelf and customized services for clients to evaluate, segment and understand both the risk landscape and quality controls in place at the local, country, regional and global level.':
            "Falcon Consulting fournit des services de diligence raisonnable et d'enquête dans plus de 240 pays et 100 langues. Nous offrons des services prêts à l'emploi et personnalisés aux clients pour évaluer, segmenter et comprendre à la fois le paysage des risques et les contrôles de qualité en place au niveau local, national, régional et mondial.",
          'Evaluate Third party risk management': 'Évaluer la gestion des risques liés aux tiers',
          'Falcon Consulting helps deliver access to the latest public, proprietary and self-reported information. This enables clients to identify and classify a variety of risk factors, including cyber, privacy, information security, bribery, corruption, financial crime and reputational and operational concerns.':
            "Falcon Consulting aide à fournir un accès aux dernières informations publiques, exclusives et autodéclarées. Cela permet aux clients d'identifier et de classer une variété de facteurs de risque, y compris la cybersécurité, la confidentialité, la sécurité de l'information, les pots-de-vin, la corruption, la criminalité financière et les problèmes de réputation et opérationnels.",
          'Identify Risk:': 'Identifier le risque :',
          'Third party/Vendor management': 'Gestion des tiers/fournisseurs',
          'Falcon Consulting must create and disseminate to users the security training documents. The Falcon Consulting CISO must ensure activities for monitoring and documenting basic security awareness training, as well as role-based training, are conducted. Employees and contractors must provide evidence of successful course completion (certificates) to the Falcon Consulting CISO. All security training records must be stored for at least 5 years.':
            "Falcon Consulting doit créer et diffuser auprès des utilisateurs les documents de formation à la sécurité. Le CISO de Falcon Consulting doit s'assurer que les activités de surveillance et de documentation de la formation de sensibilisation à la sécurité de base, ainsi que la formation basée sur les rôles, sont menées. Les employés et les sous-traitants doivent fournir la preuve de la réussite du cours (certificats) au CISO de Falcon Consulting. Tous les dossiers de formation à la sécurité doivent être conservés pendant au moins 5 ans.",
          'Security Training Records (AT-4)': 'Dossiers de formation à la sécurité (AT-4)',
          'Falcon Consulting must provide security training materials that address the procedures and activities necessary to fulfill the defined roles and responsibilities for information system security. Falcon Consulting must provide role-based security-related training to all appropriate personnel at least once every three years. Appropriate personnel include but is not limited to System Administrators, Database Administrators, Network Engineers, Security Analysts, and the CISO. The employee or consultant shall acknowledge having received the role-based training either in writing or electronically as part of the training course completion.':
            "Falcon Consulting doit fournir des supports de formation à la sécurité qui traitent des procédures et des activités nécessaires pour remplir les rôles et responsabilités définis en matière de sécurité du système d'information. Falcon Consulting doit fournir une formation liée à la sécurité basée sur les rôles à tout le personnel approprié au moins une fois tous les trois ans. Le personnel approprié comprend, mais sans s'y limiter, les administrateurs système, les administrateurs de base de données, les ingénieurs réseau, les analystes de sécurité et le RSSI. L'employé ou le consultant doit reconnaître avoir reçu la formation basée sur les rôles par écrit ou par voie électronique dans le cadre de la formation.",
          'Falcon Consulting must provide role-based, security-related training before authorizing access to the system or performing assigned duties, as well as when required by a system change or changes in personnel roles.':
            "Falcon Consulting doit fournir une formation basée sur les rôles et liée à la sécurité avant d'autoriser l'accès au système ou d'effectuer les tâches assignées, ainsi que lorsqu'un changement de système ou des changements dans les rôles du personnel l'exigent.",
          'Security Training (AT-3)': 'Formation à la sécurité (AT-3)',
          'Falcon Consulting requires that all users complete a security awareness and training course (or courses as applicable) prior to being granted access to Falcon Consulting corporate or client systems. Users are provided basic security awareness training as part of initial training for new users, as well as when required by system changes. All users must take refresher training at least annually. Employees or contractors shall acknowledge having received the security awareness training either in writing or electronically as part of the training course completion (the current process involves sending copies of course completion certificates to the Falcon Consulting CISO). The Falcon Consulting CISO maintains and stores completed security awareness and training evidence artifacts (certificates) for users. Security awareness and training course completion artifacts (certificates) will be provided to the Agency ISSO or Security Steward upon request.':
            "Falcon Consulting exige que tous les utilisateurs suivent un cours de sensibilisation et de formation à la sécurité (ou des cours selon le cas) avant d'être autorisés à accéder aux systèmes de l'entreprise ou des clients de Falcon Consulting. Les utilisateurs reçoivent une formation de sensibilisation à la sécurité de base dans le cadre de la formation initiale des nouveaux utilisateurs, ainsi que lorsque les modifications du système l'exigent. Tous les utilisateurs doivent suivre une formation de remise à niveau au moins une fois par an. Les employés ou sous-traitants doivent reconnaître avoir reçu la formation de sensibilisation à la sécurité par écrit ou par voie électronique dans le cadre de la formation (le processus actuel consiste à envoyer des copies des certificats de fin de cours au RSSI de Falcon Consulting). Le CISO de Falcon Consulting maintient et stocke les artefacts de preuve de sensibilisation à la sécurité et de formation (certificats) pour les utilisateurs. Des artefacts de sensibilisation à la sécurité et d'achèvement de cours de formation (certificats) seront fournis à l'ISSO de l'Agence ou au délégué à la sécurité sur demande.",
          'Security Awareness (AT-2)': 'Sensibilisation à la sécurité (AT-2)',
          'NIST SP 800-100 Information Security Handbook: A Guide for Managers':
            'NIST SP 800-100 Information Security Handbook : Un guide pour les gestionnaires',
          'NIST SP 800-50 Building an Information Technology Security Awareness and Training Program':
            "NIST SP 800-50 Création d'un programme de sensibilisation et de formation à la sécurité des technologies de l'information",
          'NIST SP 800-37 Rev. 1 Guide for Applying the Risk Management Framework to Federal Information Systems: A Security Life Cycle Approach':
            "NIST SP 800-37 Rév. 1 Guide d'application du cadre de gestion des risques aux systèmes d'information fédéraux : une approche du cycle de vie de la sécurité",
          'NIST SP 800-16 Information Security Training Requirements: A Role- and Performance-Based Model':
            "NIST SP 800-16 Exigences de formation en sécurité de l'information : un modèle basé sur les rôles et les performances",
          'NIST SP 800-12 Introduction to Computer Security: The NIST Handbook':
            'NIST SP 800-12 Introduction à la sécurité informatique : le manuel du NIST',
          'C.F.R. Part 5 Subpart C (5 C.F.R 930.301)':
            'C.F.R. Partie 5 Sous-partie C (5 C.F.R 930.301)',
          'This policy establishes mandatory requirements and assigns roles and responsibilities to facilitate the implementation of the Falcon Consulting Security Awareness and Training Policy. The policy contains formal, documented policy statements and language designed to facilitate and guide the implementation of the policy, procedures, and controls. Formal, documented security procedures exist as separate documents titled AT-1 through AT-4. This policy is consistent with the following guidance:':
            'Cette politique établit des exigences obligatoires et attribue des rôles et des responsabilités pour faciliter la mise en œuvre de la politique de sensibilisation et de formation à la sécurité de Falcon Consulting. La politique contient des déclarations de politique formelles et documentées et un langage conçu pour faciliter et guider la mise en œuvre de la politique, des procédures et des contrôles. Des procédures de sécurité formelles et documentées existent sous forme de documents distincts intitulés AT-1 à AT-4. Cette politique est conforme aux directives suivantes :',
          References: 'Références',
          'Compliance with the policy defined in this document is mandatory. Failure to comply with Falcon Consulting Information Security Policies may result in disciplinary actions up to and including termination of employment. Employees may also be held personally liable for any violations of this policy. Failure to comply with Falcon Consulting Information Security Policies may result in termination of contracts for contractors, partners, consultants, and other entities. Legal actions may also be taken for violations of applicable regulations and laws. Systems that do not satisfy Falcon Consulting Information Security Policy requirements may be prevented from being allowed to operate as a production system.':
            "Le respect de la politique définie dans ce document est obligatoire. Le non-respect des politiques de sécurité de l'information de Falcon Consulting peut entraîner des mesures disciplinaires pouvant aller jusqu'au licenciement. Les employés peuvent également être tenus personnellement responsables de toute violation de cette politique. Le non-respect des politiques de sécurité de l'information de Falcon Consulting peut entraîner la résiliation des contrats pour les sous-traitants, partenaires, consultants et autres entités. Des actions en justice peuvent également être intentées en cas de violation des réglementations et lois applicables. Les systèmes qui ne satisfont pas aux exigences de la politique de sécurité de l'information de Falcon Consulting peuvent ne pas être autorisés à fonctionner en tant que système de production.",
          Compliance: 'Conformité',
          'Security is everybody’s business. As security tends to cross departmental and organizational boundaries, Falcon Consulting employees and contractors will work together to ensure that required security controls are in place, are maintained, and comply with the policy described in this document. Security concerns, security incidents, or suspected/confirmed vulnerabilities will be shared with appropriate personnel in the organization so that the vulnerability can be remediated (or mitigated with compensating security controls) and we can ensure that similar vulnerabilities in other systems or processes can be addressed.':
            "La sécurité est l'affaire de tous. Comme la sécurité a tendance à dépasser les frontières départementales et organisationnelles, les employés et les sous-traitants de Falcon Consulting travailleront ensemble pour s'assurer que les contrôles de sécurité requis sont en place, maintenus et conformes à la politique décrite dans ce document. Les problèmes de sécurité, les incidents de sécurité ou les vulnérabilités suspectées/confirmées seront partagés avec le personnel approprié de l'organisation afin que la vulnérabilité puisse être corrigée (ou atténuée avec des contrôles de sécurité compensatoires) et que nous puissions nous assurer que des vulnérabilités similaires dans d'autres systèmes ou processus peuvent être traitées.",
          'Coordination Among Organizational Entities':
            'Coordination entre les entités organisationnelles',
          'Ensuring all employees understand and following security related policies and procedures':
            'Veiller à ce que tous les employés comprennent et respectent les politiques et procédures liées à la sécurité',
          'Conducting new hire training': 'Animation de la formation des nouveaux embauchés',
          'Updating annual security training materials':
            'Mise à jour annuelle des supports de formation à la sécurité',
          'Maintaining ongoing SPAT team activities':
            "Maintenir les activités de l'équipe SPAT en cours",
          'The Security Manager is responsible for:':
            'Le responsable de la sécurité est responsable de :',
          'The LMS Administrator is responsible for enrolling all employees in first-time and annual security training and tracking results.':
            "L'administrateur LMS est responsable de l'inscription de tous les employés à la formation initiale et annuelle sur la sécurité et du suivi des résultats.",
          'Managers are responsible for ensuring all employees complete required security training.':
            "Les gestionnaires sont responsables de s'assurer que tous les employés suivent la formation requise en matière de sécurité.",
          'All employees and contractors are responsible for understanding and following all security related policies and procedures, and asking their manager or Security Officer for clarification if needed.':
            'Tous les employés et sous-traitants sont responsables de comprendre et de suivre toutes les politiques et procédures liées à la sécurité, et de demander à leur responsable ou agent de sécurité des éclaircissements si nécessaire.',
          'Roles and Responsibilities': 'Rôles et responsabilités',
          'Falcon Consulting Senior Management will commit to the development of a security and privacy awareness program allocating staff and resources. The Information Security Manager will have access to both the compliance and training departments for completion and update of training materials and tracking results.':
            "La haute direction de Falcon Consulting s'engagera à développer un programme de sensibilisation à la sécurité et à la confidentialité en affectant du personnel et des ressources. Le responsable de la sécurité de l'information aura accès aux services de conformité et de formation pour compléter et mettre à jour le matériel de formation et suivre les résultats.",
          'Management Commitment': 'Engagement de la direction',
          'This policy will be reviewed on an annual basis or whenever there are significant changes to the environment.':
            "Cette politique sera révisée sur une base annuelle ou chaque fois qu'il y a des changements importants dans l'environnement.",
          'Falcon Consulting will also conduct annual refresher training for all employees and anytime there are significant changes to the environment. This will be administered via the LMS and tracked for completeness and passing grade to show adequate understanding of the material.':
            "Falcon Consulting organisera également une formation de remise à niveau annuelle pour tous les employés et chaque fois que des changements importants surviennent dans l'environnement. Cela sera administré via le LMS et suivi pour l'exhaustivité et la note de passage pour montrer une compréhension adéquate du matériel.",
          'Falcon Consulting will provide ongoing training through the Security and Privacy Awareness and Training (SPAT) Team activities. The SPAT provides information on a monthly basis on selected topics. An initial SPAT Chat presentation is conducted at the beginning of the month to give information, demonstrations, and general Q&A for all attendees. The SPAT also provides information via posters in designated areas throughout the facility and weekly articles posted on the internal intranet page.':
            "Falcon Consulting fournira une formation continue par le biais des activités de l'équipe de sensibilisation et de formation à la sécurité et à la confidentialité (SPAT). Le SPAT fournit des informations sur une base mensuelle sur des sujets sélectionnés. Une première présentation SPAT Chat est organisée au début du mois pour donner des informations, des démonstrations et des questions-réponses générales à tous les participants. Le SPAT fournit également des informations via des affiches dans des zones désignées dans tout l'établissement et des articles hebdomadaires publiés sur la page intranet interne.",
          'In addition to the initial security training provided in the new hire orientation, all employees must take a security and privacy awareness course and pass the posttest within 30 days of hire. This course and test is provided and tracked by the Learning Management System (LMS).':
            "En plus de la formation initiale à la sécurité fournie dans le cadre de l'orientation des nouveaux employés, tous les employés doivent suivre un cours de sensibilisation à la sécurité et à la confidentialité et réussir le post-test dans les 30 jours suivant l'embauche. Ce cours et ce test sont fournis et suivis par le système de gestion de l'apprentissage (LMS).",
          'Falcon Consulting will ensure that all employees and contractors are given security and privacy awareness training during the new hire process and before accessing any Falcon Consulting systems. This training reflects common security and privacy awareness specific to [Company’s] environment including, but not limited to, physical access, restricted areas, potential incidents, how to report incidents, laptop best practices, and how to spot a phishing scam.':
            "Falcon Consulting s'assurera que tous les employés et sous-traitants reçoivent une formation de sensibilisation à la sécurité et à la confidentialité pendant le processus de nouvelle embauche et avant d'accéder aux systèmes de Falcon Consulting. Cette formation reflète la sensibilisation commune à la sécurité et à la confidentialité spécifique à l'environnement [de l'entreprise], y compris, mais sans s'y limiter, l'accès physique, les zones restreintes, les incidents potentiels, la manière de signaler les incidents, les meilleures pratiques pour les ordinateurs portables et la détection d'une escroquerie par hameçonnage.",
          'Falcon Consulting understands that people are often the biggest threat (intentionally or inadvertently) to the security of sensitive information. As such, all users of information systems must be made aware of the security risks associated with their activities and of the applicable federal and agency requirements related to the security of Strategic information systems performing work on behalf of the Centers for Medicare and Medicaid Services (CMS). Those with significant security responsibilities must be adequately trained to carry out their assigned information security-related duties and responsibilities.':
            "Falcon Consulting comprend que les personnes sont souvent la plus grande menace (intentionnellement ou par inadvertance) pour la sécurité des informations sensibles. À ce titre, tous les utilisateurs des systèmes d'information doivent être informés des risques de sécurité associés à leurs activités et des exigences fédérales et des agences applicables liées à la sécurité des systèmes d'information stratégiques effectuant des travaux pour le compte des Centers for Medicare and Medicaid Services (CMS ). Les personnes ayant des responsabilités importantes en matière de sécurité doivent être correctement formées pour s'acquitter des tâches et responsabilités qui leur sont assignées en matière de sécurité de l'information.",
          'Security and privacy awareness and training is an important aspect in protecting the Confidentiality, Integrity, and Availability (CIA) of sensitive information. Employees are the first line of defense and must be made aware of the security risks associated with the work performed at Falcon Consulting.':
            "La sensibilisation et la formation à la sécurité et à la confidentialité sont un aspect important de la protection de la confidentialité, de l'intégrité et de la disponibilité (CIA) des informations sensibles. Les employés sont la première ligne de défense et doivent être informés des risques de sécurité associés au travail effectué chez Falcon Consulting.",
          'Security Awareness Training Program':
            'Programme de formation de sensibilisation à la sécurité',
          'Complying with the security policies and procedures of Falcon Consulting.':
            'Respecter les politiques et procédures de sécurité de Falcon Consulting.',
          'Reporting any security-related issues or concerns to line management, or to a member of the SIRT.':
            'Signaler tout problème ou préoccupation lié à la sécurité à la hiérarchie ou à un membre du SIRT.',
          'Reporting a suspected or actual security incident to the Incident Response Lead (preferable) or to another member of the Security Incident Response Team (SIRT).':
            "Signaler un incident de sécurité suspecté ou réel au responsable de la réponse aux incidents (de préférence) ou à un autre membre de l'équipe de réponse aux incidents de sécurité (SIRT).",
          'Making sure they understand how to identify and report a suspected or actual security incident.':
            "S'assurer qu'ils comprennent comment identifier et signaler un incident de sécurité suspecté ou réel.",
          'All staff members are responsible for:':
            'Tous les membres du personnel sont responsables de :',
          'Determining if policies, processes, technologies, security measures, or controls need to be updated to avoid a similar incident in the future. They also need to consider whether additional safeguards are required in the environment where the incident occurred.':
            "Déterminer si les politiques, les processus, les technologies, les mesures de sécurité ou les contrôles doivent être mis à jour pour éviter un incident similaire à l'avenir. Ils doivent également déterminer si des mesures de protection supplémentaires sont nécessaires dans l'environnement où l'incident s'est produit.",
          'Initiating follow-up actions to reduce the likelihood of recurrence, as appropriate.':
            'Initier des actions de suivi pour réduire la probabilité de récidive, le cas échéant.',
          'Assisting law enforcement during the investigation processes. This includes any forensic investigations and prosecutions.':
            "Assister les forces de l'ordre lors des procédures d'enquête. Cela comprend toutes les enquêtes médico-légales et les poursuites.",
          'Documenting and maintaining accurate and detailed records of the incident and all activities that were undertaken in response to an incident.':
            "Documenter et conserver des enregistrements précis et détaillés de l'incident et de toutes les activités entreprises en réponse à un incident.",
          'Gathering, reviewing, and analysing logs and related information from various central and local safeguards, security measures, and controls.':
            'Collecter, examiner et analyser les journaux et les informations connexes à partir de diverses sauvegardes, mesures de sécurité et contrôles centraux et locaux.',
          'Taking action to limit the exposure of sensitive data and to reduce the risks that may be associated with any incident.':
            "Agir pour limiter l'exposition des données sensibles et réduire les risques pouvant être associés à tout incident.",
          'Investigating and documenting each reported incident.':
            'Enquêter et documenter chaque incident signalé.',
          'Advising the Incident Response Lead of an incident when they receive a security incident report from staff.':
            "Informer le responsable de la réponse aux incidents d'un incident lorsqu'il reçoit un rapport d'incident de sécurité du personnel.",
          'Making sure that all staff understands how to identify and report a suspected or actual security incident.':
            "S'assurer que tout le personnel comprend comment identifier et signaler un incident de sécurité suspecté ou réel.",
          'Security Incident Response Team (SIRT) members are responsible for:':
            "Les membres de l'équipe de réponse aux incidents de sécurité (SIRT) sont responsables de :",
          'Authorizing on-site investigations by appropriate law enforcement or third-party security/forensic personnel, as required during any security incident investigation. This includes authorizing access to/removal of evidence from the site.':
            "Autoriser les enquêtes sur place par les forces de l'ordre appropriées ou par le personnel de sécurité / médico-légal tiers, tel que requis lors de toute enquête sur un incident de sécurité. Cela comprend l'autorisation d'accès/de suppression de preuves du site.",
          'Reporting to and liaising with external parties, including pertinent business partners, legal representation, law enforcement, etc., as required.':
            "Faire rapport et assurer la liaison avec les parties externes, y compris les partenaires commerciaux pertinents, la représentation légale, les forces de l'ordre, etc., selon les besoins.",
          'Leading the investigation of a suspected breach or reported security incident and initiating the Security Incident Response Plan when needed.':
            "Diriger l'enquête sur une violation présumée ou un incident de sécurité signalé et lancer le plan de réponse aux incidents de sécurité si nécessaire.",
          'Making sure that staff with Security Incident Response Plan responsibilities are properly trained at least once each year.':
            'Veiller à ce que le personnel chargé du plan de réponse aux incidents de sécurité soit correctement formé au moins une fois par an.',
          'Making sure that the Security Incident Response Plan is current, reviewed, and tested at least once each year.':
            "S'assurer que le plan de réponse aux incidents de sécurité est à jour, révisé et testé au moins une fois par an.",
          'Making sure that the Security Incident Response Plan and associated response and escalation procedures are defined and documented. This is to ensure that the handling of security incidents is timely and effective.':
            "S'assurer que le plan de réponse aux incidents de sécurité et les procédures de réponse et d'escalade associées sont définis et documentés. Il s'agit de s'assurer que le traitement des incidents de sécurité est rapide et efficace.",
          'The Incident Response Lead is responsible for:':
            'Le responsable de la réponse aux incidents est responsable de :',
          'Below are details about the roles and responsibilities of each member of [Company Name] to prevent and respond to a workplace incident. It is not an exhaustive list of duties but is designed to give each employee a general understanding of their role and the roles of other employees in incident response and prevention.':
            "Vous trouverez ci-dessous des détails sur les rôles et les responsabilités de chaque membre de [Nom de l'entreprise] pour prévenir et répondre à un incident sur le lieu de travail. Il ne s'agit pas d'une liste exhaustive des tâches, mais elle est conçue pour donner à chaque employé une compréhension générale de son rôle et des rôles des autres employés dans la réponse aux incidents et la prévention.",
          'This Security Incident Response Plan must be followed by all personnel, including all  employees, temporary staff, consultants, contractors, suppliers, and third parties operating on behalf of Falcon Consulting. All personnel are referred to as ‘staff’ within this plan.':
            'Ce plan de réponse aux incidents de sécurité doit être suivi par tout le personnel, y compris tous les employés, le personnel temporaire, les consultants, les sous-traitants, les fournisseurs et les tiers opérant pour le compte de Falcon Consulting. Tout le personnel est appelé « personnel » dans ce plan.',
          'Roles, Responsibilities & Contact Information':
            'Roles, Responsibilities & Contact Information',
          'This plan will be updated to reflect organizational changes, new technologies, and new compliance requirements that inform our cybersecurity strategy. We will conduct regular testing of this plan to ensure everyone is fully trained to participate in effective incident response.':
            'Ce plan sera mis à jour pour refléter les changements organisationnels, les nouvelles technologies et les nouvelles exigences de conformité qui informent notre stratégie de cybersécurité. Nous effectuerons des tests réguliers de ce plan pour nous assurer que tout le monde est parfaitement formé pour participer à une réponse efficace aux incidents.',
          'The effective incident response involves every part of our organization, including IT teams, legal, technical support, human resources, corporate communications, and business operations. It is important that you read and understand your role as well as the ways you will coordinate with others.':
            "La réponse efficace aux incidents implique chaque partie de notre organisation, y compris les équipes informatiques, le support juridique, le support technique, les ressources humaines, les communications d'entreprise et les opérations commerciales. Il est important que vous lisiez et compreniez votre rôle ainsi que les façons dont vous vous coordonnerez avec les autres.",
          'This document describes the plan for responding to information security incidents at Falcon Consulting. This document will explain how to detect and react to cybersecurity incidents and data breaches, determine their scope and risk, respond appropriately and quickly, and communicate the results and risks to all stakeholders':
            "Ce document décrit le plan de réponse aux incidents de sécurité de l'information chez Falcon Consulting. Ce document expliquera comment détecter et réagir aux incidents de cybersécurité et aux violations de données, déterminer leur portée et leur risque, réagir de manière appropriée et rapide et communiquer les résultats et les risques à toutes les parties prenantes.",
          'To maintain the trust of our employees, customers, and partners and meet regulatory requirements, it is essential that we do everything we can to protect confidential information and systems in the face of a cyberattack. The better prepared we are to respond to a potential cyberattack, the faster we can eradicate any threat and reduce the impact on our business':
            "Pour conserver la confiance de nos employés, clients et partenaires et répondre aux exigences réglementaires, il est essentiel que nous mettions tout en œuvre pour protéger les informations et les systèmes confidentiels face à une cyberattaque. Mieux nous sommes préparés pour répondre à une cyberattaque potentielle, plus vite nous pouvons éradiquer toute menace et réduire l'impact sur notre entreprise",
          Summary: 'Sommaire',
          'Signatures Draft': 'Brouillon de signatures',
          'Refer to LDWM Hash-based': 'Reportez-vous à LDWM basé sur le hachage',
          'required.': 'obligatoire.',
          'recommended. Message hashing': 'conseillé. Hachage des messages',
          'PKCS#7 padding scheme is': 'Le schéma de remplissage PKCS#7 est',
          'Use a secure padding scheme.': 'Utilisez un schéma de remplissage sécurisé.',
          'patent infringement.': 'violation de brevet.',
          'Consider RFC6090 to avoid': 'Considérez RFC6090 pour éviter',
          'Additional Comment': 'Commentaire additionnel',
          'Key Length (min)': 'Longueur de la clé (min)',
          Algorithm: 'Algorithme',
          'Signature Algorithms': 'Algorithmes de signature',
          'Algorithms in use must meet the standards defined for use in NIST publication FIPS 140-2 or any superseding document, according to date of implementation. The use of the RSA and Elliptic Curve Cryptography (ECC) algorithms is strongly recommended for asymmetric encryption.':
            "Les algorithmes utilisés doivent répondre aux normes définies pour une utilisation dans la publication NIST FIPS 140-2 ou tout autre document remplaçant, selon la date de mise en œuvre. L'utilisation des algorithmes RSA et Elliptic Curve Cryptography (ECC) est fortement recommandée pour le chiffrement asymétrique.",
          'or any superseding documents according to the date of implementation. The use of the Advanced Encryption Standard (AES) is strongly recommended for symmetric encryption.':
            "ou tout autre document remplaçant selon la date de mise en œuvre. L'utilisation de l'Advanced Encryption Standard (AES) est fortement recommandée pour le chiffrement symétrique.",
          'National Institute of Standards and Technology (NIST) publication FIPS 140-2,':
            'Publication FIPS 140-2 du National Institute of Standards and Technology (NIST),',
          'or the set defined for use in the United States':
            "ou l'ensemble défini pour une utilisation aux États-Unis",
          'IETF/IRTF Cipher Catalog,': 'Catalogue de chiffrement IETF/IRTF,',
          'Ciphers in use must meet or exceed the set defined as "AES-compatible" or "partially AES-compatible" according to the':
            "Les chiffrements utilisés doivent atteindre ou dépasser l'ensemble défini comme 'compatible AES' ou 'partiellement compatible AES' selon le",
          'Algorithm Requirements': "Exigences d'algorithme",
          Policy: 'Politique',
          'The purpose of this policy is to provide guidance that limits the use of encryption to those algorithms that have received substantial public review and have been proven to work effectively. Additionally, this policy provides direction to ensure that Federal regulations are followed, and legal authority is granted for the dissemination and use of encryption technologies outside of the United States.':
            "Le but de cette politique est de fournir des conseils qui limitent l'utilisation du cryptage aux algorithmes qui ont fait l'objet d'un examen public approfondi et dont l'efficacité a été prouvée. En outre, cette politique fournit des directives pour s'assurer que les réglementations fédérales sont respectées et qu'une autorisation légale est accordée pour la diffusion et l'utilisation des technologies de cryptage en dehors des États-Unis.",
          'Hiring and Termination Policy with Background Checks':
            "Politique d'embauche et de résiliation avec vérification des antécédents",
          "An employee who resigns or is discharged will be paid through the last day of work, plus any unused paid time off (PTO), less outstanding loans, advances or other agreements the employee may have with the company, in compliance with state laws. In cases of an employee's death, the final pay due to that employee will be paid to the deceased employee's estate or as otherwise required under state law.":
            "Un employé qui démissionne ou est licencié sera payé jusqu'au dernier jour de travail, plus tout congé payé non utilisé (PTO), moins les prêts, avances ou autres accords en cours que l'employé peut avoir avec l'entreprise, conformément aux lois de l'État. En cas de décès d'un employé, le dernier salaire dû à cet employé sera versé à la succession de l'employé décédé ou autrement requis par la loi de l'État.",
          'Final Pay': 'Paiement final',
          "The employee's manager should ensure that the payroll office receives the deceased employee's timecard.":
            "Le gestionnaire de l'employé doit s'assurer que le bureau de la paie reçoit la carte de pointage de l'employé décédé.",
          'The benefits administrator will process all appropriate beneficiary payments from the various benefits plans.':
            "L'administrateur des avantages sociaux traitera tous les paiements appropriés aux bénéficiaires des divers régimes d'avantages sociaux.",
          "Upon receiving notification of the death of an employee, the employee's manager should immediately notify HR.":
            "Dès réception de la notification du décès d'un employé, le responsable de l'employé doit immédiatement en informer les RH.",
          'A termination due to the death of an employee will be made effective as of the date of death.':
            "Une résiliation due au décès d'un employé sera effective à compter de la date du décès.",
          'Death of an Employee': "Décès d'un employé",
          "The termination review staff will be responsible for reviewing the circumstances and determining if discharge is warranted. If the staff recommends discharge, the employee's manager and an HR representative will notify the employee. The employee's manager should complete an Employee Change Form and notify HR and payroll of the last day worked by the employee.":
            "Le personnel chargé de l'examen du licenciement sera chargé d'examiner les circonstances et de déterminer si le congédiement est justifié. Si le personnel recommande le congédiement, le responsable de l'employé et un représentant des RH en aviseront l'employé. Le responsable de l'employé doit remplir un formulaire de changement d'employé et informer les RH et la paie du dernier jour travaillé par l'employé.",
          "Before any action is taken to involuntarily discharge an employee, the employee's manager must request a review by HR and the employee's immediate supervisor.":
            "Avant que toute mesure ne soit prise pour licencier involontairement un employé, le responsable de l'employé doit demander un examen par les RH et le superviseur immédiat de l'employé.",
          Procedures: 'Procédures',
          'An involuntary termination of employment, including layoffs of over 30 days, is a  management-initiated dismissal with or without cause. The inability of an employee to perform the essential functions of his or her job with or without a reasonable accommodation may also result in an involuntary termination. An employee may also be discharged for any legal reason, including but not limited to: misconduct, tardiness, absenteeism, unsatisfactory performance or inability to perform.':
            "Une cessation d'emploi involontaire, y compris les mises à pied de plus de 30 jours, est un congédiement initié par la direction avec ou sans motif. L'incapacité d'un employé à exécuter les fonctions essentielles de son travail avec ou sans aménagement raisonnable peut également entraîner un licenciement involontaire. Un employé peut également être licencié pour toute raison légale, y compris, mais sans s'y limiter : inconduite, retard, absentéisme, performance insatisfaisante ou incapacité de travail.",
          'Involuntary Terminations': 'Licenciements involontaires',
          'Employees who possess a security clearance (security codes to the building, computer passwords, etc.) must meet with administration for a debriefing no later than their last day of employment.':
            "Les employés qui possèdent une habilitation de sécurité (codes de sécurité de l'immeuble, mots de passe informatiques, etc.) doivent rencontrer l'administration pour un compte rendu au plus tard lors de leur dernier jour d'emploi.",
          "The employee's manager will complete a Supervisory Termination Summary and deliver the completed form to HR.":
            "Le responsable de l'employé remplira un résumé de fin de contrat de supervision et remettra le formulaire dûment rempli aux RH.",
          "The HR department will coordinate the employee's out-processing. This process will include the employee's returning all company property (computers, documentation, keys, etc.); a review of the employee's post termination benefits status; and the employee's completion of an exit interview.":
            "Le service des ressources humaines coordonnera le traitement externe de l'employé. Ce processus comprendra la restitution par l'employé de tous les biens de l'entreprise (ordinateurs, documentation, clés, etc.) ; un examen de l'état des avantages sociaux après la cessation d'emploi de l'employé ; et la réalisation par l'employé d'une entrevue de fin d'emploi.",
          "Upon receipt of an employee's resignation, the manager will notify the human resource (HR) department by sending a copy of the resignation letter and any other pertinent information (i.e., employee's reason for leaving, last day of work).":
            "Dès réception de la démission d'un employé, le gestionnaire avisera le service des ressources humaines (RH) en envoyant une copie de la lettre de démission et toute autre information pertinente (c'est-à-dire la raison du départ de l'employé, le dernier jour de travail).",
          "Employees are requested to provide a minimum of three weeks' notice of their intention to separate from the company to allow a reasonable amount of time to transfer ongoing workloads. The employee should provide a written resignation notification to his or her manager.":
            "Les employés sont priés de fournir un préavis d'au moins trois semaines de leur intention de se séparer de l'entreprise afin de laisser un délai raisonnable pour transférer les charges de travail en cours. L'employé doit fournir une notification écrite de démission à son supérieur hiérarchique.",
          Procedures: 'Procédures',
          'A voluntary termination of employment occurs when an employee submits a written or verbal notice of resignation to his or her supervisor.':
            "Une cessation d'emploi volontaire se produit lorsqu'un employé soumet un avis écrit ou verbal de démission à son superviseur.",
          'Voluntary Terminations': 'Licenciements volontaires',
          'Employment with Falcon Consulting is voluntary and subject to termination by the employee or Falcon Consulting at will, with or without cause, and with or without notice, at any time. Nothing in these policies shall be interpreted to be in conflict with or to eliminate or modify in any way the employment-at-will status of Falcon Consulting employees.':
            "L'emploi chez Falcon Consulting est volontaire et sujet à résiliation par l'employé ou Falcon Consulting à volonté, avec ou sans motif, et avec ou sans préavis, à tout moment. Rien dans ces politiques ne doit être interprété comme étant en conflit avec ou comme éliminant ou modifiant de quelque manière que ce soit le statut d'emploi à volonté des employés de Falcon Consulting.",
          'At-Will Employment': 'Emploi à volonté',
          'Falcon Consulting ensures that employee terminations, including voluntary and involuntary terminations and terminations due to the death of an employee, are handled in a professional manner with minimal disruption to the workplace.':
            "Falcon Consulting veille à ce que les licenciements d'employés, y compris les licenciements volontaires et involontaires et les licenciements dus au décès d'un employé, soient traités de manière professionnelle avec un minimum de perturbations sur le lieu de travail.",
          Purpose: 'Objectif',
          'Termination Policy': 'Politique de résiliation',
          'The HR department will be responsible for tracking all applicants and retaining applications and resumes as required.':
            'Le service des ressources humaines sera responsable du suivi de tous les candidats et de la conservation des candidatures et des CV au besoin.',
          'All qualified candidates are encouraged to apply for positions. As the company strives to be an equal opportunity employer, all employment postings will encourage applications from qualified Aboriginal People, or other persons from a visible minority group, persons with disabilities and women. Applicants who self-identify in their cover letter will be given special consideration.':
            "Tous les candidats qualifiés sont encouragés à postuler pour des postes. Comme l'entreprise s'efforce d'être un employeur garantissant l'égalité des chances, toutes les offres d'emploi encourageront les candidatures d'Autochtones qualifiés ou d'autres personnes appartenant à une minorité visible, de personnes handicapées et de femmes. Les candidats qui s'identifient dans leur lettre de motivation recevront une attention particulière.",
          "All job openings will be posted concurrently on Falcon Consulting's intranet and externally with sources appropriate for the position being filled. Jobs will remain posted until the position is filled.":
            "Toutes les offres d'emploi seront publiées simultanément sur l'intranet de Falcon Consulting et à l'extérieur avec des sources appropriées pour le poste à pourvoir. Les emplois resteront affichés jusqu'à ce que le poste soit pourvu.",
          'The job posting will be prepared based on the job description and any special requirements detailed on the staff request. It may also include preferred qualifications that may enhance performance in the position. These would be considered in the event that two candidates are considered relatively equal.':
            "L'offre d'emploi sera préparée en fonction de la description de poste et de toute exigence particulière détaillée dans la demande du personnel. Il peut également inclure des qualifications préférées qui peuvent améliorer les performances dans le poste. Ceux-ci seraient considérés dans le cas où deux candidats seraient considérés comme relativement égaux.",
          "Once the position is approved and the job description is finalized (if applicable), the HR department will prepare the job posting. HR will create job postings that briefly describe the job opening and communicate Falcon Consulting's brand.":
            "Une fois le poste approuvé et la description de poste finalisée (le cas échéant), le service des ressources humaines préparera l'offre d'emploi. Les RH créeront des offres d'emploi décrivant brièvement l'offre d'emploi et communiquant la marque de Falcon Consulting.",
          'Job postings': "Offres d'emploi",
          'HR will arrange a meeting with the hiring manager before posting a job offer. The objective of this meeting is to learn more about the position, requirements and profile of the ideal candidate. The recruitment strategy will be defined during this meeting and expectations will be established with all stakeholders.':
            "Les RH organiseront une réunion avec le responsable du recrutement avant de publier une offre d'emploi. L'objectif de cette rencontre est d'en savoir plus sur le poste, les exigences et le profil du candidat idéal. La stratégie de recrutement sera définie lors de cette réunion et les attentes seront établies avec toutes les parties prenantes.",
          Meetings: 'Réunions',
          'New or modified positions will be evaluated by the HR department in order to determine a salary range corresponding to the underlying responsibilities.':
            'Les postes nouveaux ou modifiés seront évalués par le service des ressources humaines afin de déterminer une échelle salariale correspondant aux responsabilités sous-jacentes.',
          'A job description describes the areas of responsibility and accountability within a department. When a position is vacant, it is appropriate to review and, if necessary, update the job description and task description to ensure that it is up to date. Professional qualifications should also be reviewed. The HR department can assist in updating work descriptions.':
            "Une description de poste décrit les domaines de responsabilité et de responsabilisation au sein d'un ministère. Lorsqu'un poste est vacant, il convient de revoir et, si nécessaire, de mettre à jour la description de poste et la description de tâches pour s'assurer qu'elles sont à jour. Les qualifications professionnelles doivent également être revues. Le service des ressources humaines peut aider à mettre à jour les descriptions de travail.",
          'Job description': "Description de l'emploi",
          'Any special instructions relating to advertising on recruitment.':
            'Toutes instructions particulières relatives à la publicité sur le recrutement.',
          'Duties and essential qualifications of the position (or a current position description may be attached);':
            'Fonctions et qualifications essentielles du poste (ou une description du poste actuel peut être jointe);',
          'Reason for the opening;': "Raison de l'ouverture ;",
          'The exempt or non-exempt status of the position;':
            'Le statut exonéré ou non exonéré du poste;',
          'Hours/shift teams of the position;': 'Heures/équipes de quart du poste ;',
          'Position title;': 'Titre du poste ;',
          'Requests must be submitted by the supervisor or service manager and forwarded to the HR department:':
            'Les demandes doivent être présentées par le superviseur ou le responsable de service et transmises au service des ressources humaines :',
          'When a position (newly created or replacement, continuing or term position) needs to be filled or extended, a staff request form must be completed and authorized.':
            "Lorsqu'un poste (nouvellement créé ou de remplacement, poste continu ou à durée déterminée) doit être comblé ou prolongé, un formulaire de demande de personnel doit être rempli et autorisé.",
          'Staff request': 'Demande de personnel',
          'In hiring the most qualified candidates for positions, the following process should be followed.':
            "Lors de l'embauche des candidats les plus qualifiés pour les postes, le processus suivant doit être suivi.",
          'POLICY AND PROCEDURES': 'POLITIQUE ET PROCÉDURES',
          'Managers are given continuous support and guidance in regard to recruitment and selection issues.':
            'Les gestionnaires reçoivent un soutien et des conseils continus en ce qui concerne les questions de recrutement et de sélection.',
          'All Managers are aware of their responsibilities in the recruitment and selection process;':
            'Tous les managers sont conscients de leurs responsabilités dans le processus de recrutement et de sélection ;',
          'It is the responsibility of the HR department to ensure that:':
            "Il est de la responsabilité du service RH de s'assurer que :",
          'All roles have current position descriptions that specify role requirements and selection criteria.':
            'Tous les rôles ont des descriptions de poste actuelles qui précisent les exigences du rôle et les critères de sélection.',
          'Staffing levels for their department are determined and authorized;':
            'Les effectifs de leur département sont déterminés et autorisés ;',
          'It is the responsibility of Managers and Supervisors to ensure that:':
            "Il est de la responsabilité des managers et superviseurs de s'assurer que :",
          'It shall be the responsibility of the Human Resources (HR) department to implement this policy and to monitor its performance.':
            'It shall be the responsibility of the Human Resources (HR) department to implement this policy and to monitor its performance.',
          RESPONSIBILITY: 'RESPONSABILITÉ',
          'This hiring policy applies to all employees of Falcon Consulting who are involved in the hiring process.':
            "Cette politique d'embauche s'applique à tous les employés de Falcon Consulting qui sont impliqués dans le processus d'embauche.",
          SCOPE: 'PORTÉ',
          'The hiring policy has been established to ensure Falcon Consulting has the opportunity to attract the best available staff for all vacant positions.':
            "La politique d'embauche a été établie pour s'assurer que Falcon Consulting a la possibilité d'attirer le meilleur personnel disponible pour tous les postes vacants.",
          PURPOSE: 'OBJECTIF',
          "Falcon Consulting believes that hiring qualified personnel to fill positions in the different departments contributes to the company's overall success. Each employee is therefore hired with the objective of making a significant contribution to Falcon Consulting.":
            "Falcon Consulting croit que l'embauche de personnel qualifié pour combler les postes dans les différents départements contribue au succès global de l'entreprise. Chaque collaborateur est donc embauché avec l'objectif d'apporter une contribution significative à Falcon Consulting.",
          OVERVIEW: 'APERÇU',
          'Hiring policy': "Politique d'embauche",
          'Hiring and Termination Policy with Background Checks':
            "Politique d'embauche et de résiliation avec vérification des antécédents",
          'Any vendor, consultant, or contractor found to have violated this policy may be subject to sanctions up to and including removal of access rights, termination of contract(s), and related civil or criminal penalties.':
            "Tout fournisseur, consultant ou sous-traitant reconnu coupable d'avoir enfreint cette politique peut faire l'objet de sanctions pouvant aller jusqu'à la suppression des droits d'accès, la résiliation du ou des contrats et des sanctions civiles ou pénales connexes.",
          'Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties.':
            "Le personnel reconnu coupable d'avoir enfreint cette politique peut faire l'objet de mesures disciplinaires, pouvant aller jusqu'au licenciement, et de sanctions civiles ou pénales connexes.",
          'Waivers from certain policy provisions may be sought following the Falcon Consulting Waiver Process.':
            'Des dérogations à certaines dispositions de la politique peuvent être demandées à la suite du processus de dérogation de Falcon Consulting.',
          Waivers: 'Renonciations',
          'Procedures for plan tests, review, and updates.':
            'Procédures pour les tests, les révisions et les mises à jour du plan.',
          'Protection and availability of plan documentation;':
            'Protection et disponibilité de la documentation du régime ;',
          'Contingency plans for different types of disruption events;':
            "Plans d'urgence pour différents types d'événements perturbateurs ;",
          'An inventory of backups and offsite storage locations;':
            'Un inventaire des sauvegardes et des emplacements de stockage hors site ;',
          'Requirements for ensuring information security throughout the process;':
            "Exigences pour assurer la sécurité de l'information tout au long du processus ;",
          'Procedures for reporting disaster events, event escalation, recovery of critical operations, and resumption of normal operations;':
            "Procédures de signalement des événements catastrophiques, de l'escalade des événements, de la reprise des opérations critiques et de la reprise des opérations normales ;",
          'List of potential risks to critical systems and sensitive information;':
            'Liste des risques potentiels pour les systèmes critiques et les informations sensibles ;',
          'Roles and responsibilities for implementing the disaster recovery plan;':
            'Rôles et responsabilités pour la mise en œuvre du plan de reprise après sinistre ;',
          'The Falcon consulting DRP include at a minimum:':
            'Les DRP de Falcon consulting comprennent au minimum :',
          'The DRP must be communicated and distributed to all relevant internal personnel and executive management.':
            'Le DRP doit être communiqué et distribué à tout le personnel interne et à la direction générale concernés.',
          'The DRP must be reviewed and updated upon any relevant change to IT Infrastructure, at the conclusion of plan testing, or least annually.':
            "Le DRP doit être examiné et mis à jour lors de toute modification pertinente de l'infrastructure informatique, à la fin des tests du plan, ou au moins une fois par an.",
          'The DRP must be tested annually, at a minimum.':
            'Le DRP doit être testé annuellement, au minimum.',
          'Falcon consulting has created and implement a Disaster Recovery Plan (“DRP”) to support business objectives outlined in the (BCP/critical processes identified by a Business Impact Analysis).':
            "Falcon Consulting a créé et mis en œuvre un plan de reprise après sinistre (« DRP ») pour soutenir les objectifs commerciaux décrits dans le (PCA/processus critiques identifiés par une analyse d'impact sur l'entreprise).",
          'Disaster Recovery focuses on restoring the technology systems that support both critical and day-to-day business operations.':
            'La reprise après sinistre se concentre sur la restauration des systèmes technologiques qui prennent en charge les opérations commerciales critiques et quotidiennes.',
          'Disaster recovery Policy': 'Politique de reprise après sinistre',
          'Procedures for plan tests, review, and updates.':
            'Procédures pour les tests, les révisions et les mises à jour du plan.',
          'Protection and availability of plan documentation;':
            'Protection et disponibilité de la documentation du régime ;',
          'Contingency plans for different types of disruption events;':
            "Plans d'urgence pour différents types d'événements perturbateurs ;",
          'Strategies to address and limit the reputational impact from an event':
            "Stratégies pour traiter et limiter l'impact sur la réputation d'un événement",
          'Mitigation strategies and safeguards to reduce impact;':
            "Stratégies d'atténuation et mesures de protection pour réduire l'impact ;",
          'Communication strategies for communications both inside and outside the organization;':
            "Stratégies de communication pour les communications à l'intérieur et à l'extérieur de l'organisation ;",
          'Processes to ensure the safety of personnel;':
            'Processus pour assurer la sécurité du personnel ;',
          'Identification of supply chain relationships and the organization’s role to support critical infrastructure;':
            "Identification des relations de la chaîne d'approvisionnement et du rôle de l'organisation pour soutenir les infrastructures essentielles ;",
          'Requirements for ensuring information security throughout the process;':
            "Exigences pour assurer la sécurité de l'information tout au long du processus ;",
          'An inventory of critical systems and records, and their dependencies;':
            'Un inventaire des systèmes et enregistrements critiques et de leurs dépendances ;',
          'A risk assessment for critical business processes and operations (Business Impact Analysis);':
            'Une évaluation des risques pour les processus et opérations métier critiques (Business Impact Analysis) ;',
          'The BCP include, at a minimum:': 'Le PCA comprend au minimum :',
          'Documented plans, response and recovery procedures are developed and approved, detailing how the organization will manage a disruptive event.':
            "Des plans documentés, des procédures d'intervention et de récupération sont élaborés et approuvés, détaillant comment l'organisation gérera un événement perturbateur.",
          'An adequate management structure is in place to prepare for, mitigate and respond to a disruptive event using personnel with the necessary authority, experience, and competence;':
            "Une structure de gestion adéquate est en place pour se préparer, atténuer et répondre à un événement perturbateur en utilisant du personnel ayant l'autorité, l'expérience et la compétence nécessaires ;",
          'The safety and security of personnel is the first priority;':
            'La sûreté et la sécurité du personnel sont la première priorité ;',
          'Business continuity planning includes:':
            'La planification de la continuité des activités comprend :',
          'The BCP is communicated and distributed to all relevant internal personnel and executive management.':
            "Le PCA est communiqué et diffusé à l'ensemble du personnel interne et de la direction générale concernés.",
          'The BCP is reviewed and updated upon any relevant change to the organization, at the conclusion of plan testing, or least annually.':
            "Le PCA est revu et mis à jour lors de tout changement pertinent apporté à l'organisation, à la fin des tests du plan, ou au moins une fois par an.",
          'The BCP is periodically tested and the results should be shared with executive management.':
            'Le PCA est périodiquement testé et les résultats doivent être partagés avec la direction générale.',
          'Falcon Consulting has created and implemented a Business Continuity Plan (“BCP”).':
            "Falcon Consulting a créé et mis en place un Plan de Continuité d'Activité (« PCA »).",
          'Business Continuity focuses on sustaining The Falcon Consulting’s critical business processes during and after a disruption.':
            'La continuité des activités se concentre sur le maintien des processus commerciaux critiques de The Falcon Consulting pendant et après une interruption.',
          'Business Continuity Plan': 'Plan de continuité des activités',
          'Employees must use extreme caution when opening e-mail attachments received from unknown senders, which may contain malware.':
            "Les employés doivent faire preuve d'une extrême prudence lors de l'ouverture de pièces jointes reçues d'expéditeurs inconnus, qui peuvent contenir des logiciels malveillants.",
          'Postings by employees from a Falcon Consulting email address to newsgroups should contain a disclaimer stating that the opinions expressed are strictly their own and not necessarily those of Falcon Consulting, unless posting is in the course of business duties.':
            "Les publications d'employés à partir d'une adresse e-mail de Falcon Consulting vers des groupes de discussion doivent contenir une clause de non-responsabilité indiquant que les opinions exprimées sont strictement les leurs et pas nécessairement celles de Falcon Consulting, à moins que la publication ne soit effectuée dans le cadre de leurs fonctions professionnelles.",
          'All computing devices must be secured with a password-protected screensaver with the automatic activation feature set to 10 minutes or less. You must lock the screen or log off when the device is unattended.':
            "Tous les appareils informatiques doivent être sécurisés avec un économiseur d'écran protégé par mot de passe avec la fonction d'activation automatique définie sur 10 minutes ou moins. Vous devez verrouiller l'écran ou vous déconnecter lorsque l'appareil est sans surveillance.",
          'System level and user level passwords must comply with the Password Policy. Providing access to another individual, either deliberately or through failure to secure its access, is prohibited.':
            'Les mots de passe de niveau système et de niveau utilisateur doivent être conformes à la politique de mot de passe. Il est interdit de donner accès à une autre personne, que ce soit délibérément ou en ne sécurisant pas son accès.',
          'All mobile and computing devices that connect to the internal network must comply with the Minimum Access Policy.':
            "Tous les appareils mobiles et informatiques qui se connectent au réseau interne doivent respecter la politique d'accès minimum.",
          'Security and Proprietary Information': 'Sécurité et informations exclusives',
          'Falcon Consulting reserves the right to audit networks and systems on a periodic basis to ensure compliance with this policy.':
            "Falcon Consulting se réserve le droit d'auditer périodiquement les réseaux et les systèmes pour s'assurer du respect de cette politique.",
          'For security and network maintenance purposes, authorized individuals within Falcon Consulting may monitor equipment, systems and network traffic at any time, per Audit Policy.':
            "À des fins de sécurité et de maintenance du réseau, les personnes autorisées au sein de Falcon Consulting peuvent surveiller l'équipement, les systèmes et le trafic réseau à tout moment, conformément à la politique d'audit.",
          'Employees are responsible for exercising good judgment regarding the reasonableness of personal use. Individual departments are responsible for creating guidelines concerning personal use of Internet/Intranet/Extranet systems. In the absence of such policies, employees should be guided by departmental policies on personal use, and if there is any uncertainty, employees should consult their supervisor or manager.':
            "Les employés sont responsables d'exercer leur bon jugement concernant le caractère raisonnable de l'utilisation personnelle. Chaque département est responsable de la création de lignes directrices concernant l'utilisation personnelle des systèmes Internet/Intranet/Extranet. En l'absence de telles politiques, les employés doivent être guidés par les politiques ministérielles sur l'utilisation personnelle et, en cas d'incertitude, les employés doivent consulter leur superviseur ou leur responsable.",
          'You may access, use or share Falcon Consulting proprietary information only to the extent it is authorized and necessary to fulfill your assigned job duties.':
            'Vous pouvez accéder, utiliser ou partager les informations exclusives de Falcon Consulting uniquement dans la mesure où cela est autorisé et nécessaire pour remplir les fonctions qui vous sont assignées.',
          'You have a responsibility to promptly report the theft, loss or unauthorized disclosure of Falcon Consulting proprietary information.':
            "Vous avez la responsabilité de signaler rapidement le vol, la perte ou la divulgation non autorisée d'informations exclusives à Falcon Consulting.",
          'Falcon Consulting proprietary information stored on electronic and computing devices whether owned or leased by Falcon Consulting, the employee or a third party, remains the sole property of Falcon Consulting. You must ensure through legal or technical means that proprietary information is protected in accordance with the Data Protection Standard.':
            "Les informations exclusives de Falcon Consulting stockées sur des appareils électroniques et informatiques, qu'ils soient détenus ou loués par Falcon Consulting, l'employé ou un tiers, restent la propriété exclusive de Falcon Consulting. Vous devez vous assurer par des moyens juridiques ou techniques que les informations exclusives sont protégées conformément à la norme de protection des données.",
          'General Use and Ownership': 'Utilisation générale et propriété',
          'This policy applies to the use of information, electronic and computing devices, and network resources to conduct Falcon Consulting business or interact with internal networks and business systems, whether owned or leased by Falcon Consulting, the employee, or a third party. All employees, contractors, consultants, temporary, and other workers at Falcon Consulting and its subsidiaries are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with Falcon Consulting.':
            "Cette politique s'applique à l'utilisation d'informations, d'appareils électroniques et informatiques et de ressources réseau pour mener les activités de Falcon Consulting ou interagir avec des réseaux internes et des systèmes commerciaux, qu'ils soient détenus ou loués par Falcon Consulting, l'employé ou un tiers. Tous les employés, sous-traitants, consultants, intérimaires et autres travailleurs de Falcon Consulting et de ses filiales sont tenus d'exercer leur bon jugement concernant l'utilisation appropriée des informations, des appareils électroniques et des ressources réseau conformément à Falcon Consulting.",
          'falconconsulting does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.':
            "falconconsulting ne collecte sciemment aucune information personnelle identifiable d'enfants de moins de 13 ans. Si vous pensez que votre enfant a fourni ce type d'informations sur notre site Web, nous vous encourageons fortement à nous contacter immédiatement et nous ferons de notre mieux pour supprimer rapidement ces informations de nos dossiers.",
          'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.':
            "Une autre partie de notre priorité est d'ajouter une protection pour les enfants lors de l'utilisation d'Internet. Nous encourageons les parents et les tuteurs à observer, participer et/ou surveiller et guider leur activité en ligne.",
          "Children's Information": 'Informations sur les enfants',
          'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.':
            "Si vous faites une demande, nous avons un mois pour vous répondre. Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter.",
          'The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.':
            'Le droit à la portabilité des données – Vous avez le droit de nous demander de transférer les données que nous avons collectées à une autre organisation, ou directement à vous, sous certaines conditions.',
          'The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.':
            'Le droit de vous opposer au traitement – ​​Vous avez le droit de vous opposer à notre traitement de vos données personnelles, sous certaines conditions.',
          'The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.':
            'Le droit de restreindre le traitement – ​​Vous avez le droit de nous demander de restreindre le traitement de vos données personnelles, sous certaines conditions.',
          'The right to erasure – You have the right to request that we erase your personal data, under certain conditions.':
            "Le droit à l'effacement – ​​Vous avez le droit de nous demander d'effacer vos données personnelles, sous certaines conditions.",
          'The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.':
            'Le droit de rectification – Vous avez le droit de nous demander de corriger toute information que vous jugez inexacte. Vous avez également le droit de nous demander de compléter les informations que vous jugez incomplètes.',
          'The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.':
            "Le droit d'accès – Vous avez le droit de demander des copies de vos données personnelles. Nous pouvons vous facturer une somme modique pour ce service.",
          'We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:':
            'Nous souhaitons nous assurer que vous êtes pleinement conscient de tous vos droits en matière de protection des données. Chaque utilisateur a droit à ce qui suit :',
          'GDPR Data Protection Rights': 'Droits de protection des données GDPR',
          'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.':
            "Si vous faites une demande, nous avons un mois pour vous répondre. Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter.",
          "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.":
            "Demander qu'une entreprise qui vend les données personnelles d'un consommateur ne vende pas les données personnelles du consommateur.",
          'Request that a business delete any personal data about the consumer that a business has collected.':
            "Demander à une entreprise de supprimer toutes les données personnelles sur le consommateur qu'une entreprise a collectées.",
          "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.":
            "Demander qu'une entreprise qui collecte les données personnelles d'un consommateur divulgue les catégories et les éléments spécifiques de données personnelles qu'une entreprise a collectées sur les consommateurs.",
          'Under the CCPA, among other rights, California consumers have the right to:':
            'En vertu du CCPA, entre autres droits, les consommateurs californiens ont le droit de :',
          'CCPA Privacy Rights (Do Not Sell My Personal Information)':
            'Droits de confidentialité CCPA (Ne vendez pas mes informations personnelles)',
          "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.":
            'Vous pouvez choisir de désactiver les cookies via les options de votre navigateur. Pour connaître des informations plus détaillées sur la gestion des cookies avec des navigateurs Web spécifiques, vous pouvez les trouver sur les sites Web respectifs des navigateurs.',
          "falconconsulting's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.":
            "La politique de confidentialité de falconconsulting ne s'applique pas aux autres annonceurs ou sites Web. Ainsi, nous vous conseillons de consulter les politiques de confidentialité respectives de ces serveurs publicitaires tiers pour des informations plus détaillées. Il peut inclure leurs pratiques et instructions sur la façon de se retirer de certaines options.",
          'Third Party Privacy Policies': 'Politiques de confidentialité des tiers',
          'Note that falconconsulting has no access to or control over these cookies that are used by third-party advertisers.':
            "Notez que falconconsulting n'a aucun accès ni aucun contrôle sur ces cookies qui sont utilisés par des annonceurs tiers.",
          "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on falconconsulting, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.":
            "Les serveurs publicitaires ou réseaux publicitaires tiers utilisent des technologies telles que les cookies, JavaScript ou les balises Web qui sont utilisées dans leurs publicités et liens respectifs qui apparaissent sur falconconsulting, qui sont envoyés directement au navigateur des utilisateurs. Ils reçoivent automatiquement votre adresse IP lorsque cela se produit. Ces technologies sont utilisées pour mesurer l'efficacité de leurs campagnes publicitaires et/ou pour personnaliser le contenu publicitaire que vous voyez sur les sites Web que vous visitez.",
          'You may consult this list to find the Privacy Policy for each of the advertising partners of falconconsulting.':
            'Vous pouvez consulter cette liste pour trouver la politique de confidentialité de chacun des partenaires publicitaires de falconconsulting.',
          'Advertising Partners Privacy Policies':
            'Politiques de confidentialité des partenaires publicitaires',
          "Like any other website, falconconsulting uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.":
            "Comme tout autre site Internet, falconconsulting utilise des « cookies ». Ces cookies sont utilisés pour stocker des informations, y compris les préférences des visiteurs et les pages du site Web auxquelles le visiteur a accédé ou visité. Les informations sont utilisées pour optimiser l'expérience des utilisateurs en personnalisant le contenu de notre page Web en fonction du type de navigateur des visiteurs et/ou d'autres informations.",
          'Cookies and Web Beacons': 'Cookies et balises Web',
          "Falcon Consulting follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.":
            "Falcon Consulting suit une procédure standard d'utilisation des fichiers journaux. Ces fichiers enregistrent les visiteurs lorsqu'ils visitent des sites Web. Toutes les sociétés d'hébergement le font et font partie de l'analyse des services d'hébergement. Les informations collectées par les fichiers journaux incluent les adresses IP (protocole Internet), le type de navigateur, le fournisseur d'accès Internet (FAI), l'horodatage, les pages de renvoi/sortie et éventuellement le nombre de clics. Ceux-ci ne sont liés à aucune information personnellement identifiable. Le but de l'information est d'analyser les tendances, d'administrer le site, de suivre le mouvement des utilisateurs sur le site Web et de recueillir des informations démographiques.",
          'Log Files': 'Fichiers journaux',
          'Find and prevent fraud': 'Détecter et prévenir la fraude',
          'Send you emails': 'Vous envoyer des e-mails',
          'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes':
            "Communiquer avec vous, directement ou par l'intermédiaire de l'un de nos partenaires, y compris pour le service client, pour vous fournir des mises à jour et d'autres informations relatives au site Web, et à des fins de marketing et de promotion",
          'Develop new products, services, features, and functionality':
            'Développer de nouveaux produits, services, caractéristiques et fonctionnalités',
          'Understand and analyze how you use our website':
            'Comprendre et analyser la façon dont vous utilisez notre site Web',
          'Improve, personalize, and expand our website':
            'Améliorer, personnaliser et développer notre site Web',
          'Provide, operate, and maintain our website':
            'Fournir, exploiter et maintenir notre site Web',
          'We use the information we collect in various ways, including to:':
            'Nous utilisons les informations que nous recueillons de diverses manières, notamment pour :',
          'How we use your information': 'Comment nous utilisons vos informations',
          'When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.':
            "Lorsque vous créez un compte, nous pouvons vous demander vos coordonnées, y compris des éléments tels que le nom, le nom de l'entreprise, l'adresse, l'adresse e-mail et le numéro de téléphone.",
          'If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.':
            'Si vous nous contactez directement, nous pouvons recevoir des informations supplémentaires vous concernant telles que votre nom, votre adresse e-mail, votre numéro de téléphone, le contenu du message et/ou des pièces jointes que vous pouvez nous envoyer, et toute autre information que vous pouvez choisir de fournir.',
          'The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.':
            'Les informations personnelles que vous êtes invité à fournir, et les raisons pour lesquelles vous êtes invité à les fournir, vous seront précisées au moment où nous vous demanderons de fournir vos informations personnelles.',
          'Information we collect': 'Informations que nous collectons',
          'By using our website, you hereby consent to our Privacy Policy and agree to its terms.':
            'En utilisant notre site Web, vous consentez par la présente à notre politique de confidentialité et acceptez ses conditions.',
          Consent: 'Consentement',
          'This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in falconconsulting. This policy is not applicable to any information collected offline or via channels other than this website.':
            "Cette politique de confidentialité s'applique uniquement à nos activités en ligne et est valable pour les visiteurs de notre site Web en ce qui concerne les informations qu'ils ont partagées et/ou collectées dans falconconsulting. Cette politique ne s'applique pas aux informations collectées hors ligne ou via des canaux autres que ce site Web.",
          'If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.':
            "Si vous avez des questions supplémentaires ou souhaitez plus d'informations sur notre politique de confidentialité, n'hésitez pas à nous contacter.",
          'At Falcon consulting, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by falconconsulting and how we use it.':
            "Chez Falcon consulting, l'une de nos principales priorités est la confidentialité de nos visiteurs. Ce document de politique de confidentialité contient des types d'informations qui sont collectées et enregistrées par falconconsulting et comment nous les utilisons.",
          'All other applicable federal and state laws or regulations. The information security program is reviewed no less than annually or upon significant changes to the information security environment.':
            "Toutes les autres lois ou réglementations fédérales et étatiques applicables. Le programme de sécurité de l'information est revu au moins une fois par an ou lors de modifications importantes de l'environnement de sécurité de l'information.",
          'Contractual agreements,': 'Accords contractuels,',
          'Information Security best practices, including ISO 27002 and NIST CSF,':
            "Meilleures pratiques de sécurité de l'information, y compris ISO 27002 et NIST CSF,",
          'PCI Data Security Standard,': 'Norme de sécurité des données PCI,',
          'State breach notification laws,': 'Lois étatiques sur la notification des infractions,',
          'HIPAA Security Rule': 'Règle de sécurité HIPAA',
          'Information Security policy': 'Politique de sécurité des informations',
          'Privacy Policy': 'Politique de confidentialité',
          'Acceptable Use policy': "Politique d'utilisation acceptable",
          'Business Continuity/Disaster recovery Policy':
            'Politique de continuité des activités/reprise après sinistre',
          'Hiring and Termination Policy Including background checks':
            "Politique d'embauche et de résiliation, y compris la vérification des antécédents",
          'Encryption Policy': 'Politique de chiffrement',
          'Incident response Policy (Internal, External, Web)':
            'Politique de réponse aux incidents (Interne, Externe, Web)',
          'Security awareness training programs and topics covered':
            'Programmes de formation de sensibilisation à la sécurité et sujets abordés',
          'Third party management programs': 'Programmes de gestion tiers',
          'System backup policy and program': 'Politique et programme de sauvegarde du système',
          'Falcon Consulting maintains and communicates an Information Security Program consisting of topic-specific policies, standards, procedures and guidelines that:':
            "Falcon Consulting maintient et communique un programme de sécurité de l'information composé de politiques, normes, procédures et directives spécifiques à un sujet qui:",
          'Serve to protect the Confidentiality, Integrity, and Availability of the Information Resources maintained within the organization using administrative, physical and technical controls.':
            "Servir à protéger la confidentialité, l'intégrité et la disponibilité des ressources d'information conservées au sein de l'organisation à l'aide de contrôles administratifs, physiques et techniques.",
          'Provide value to the way we conduct business and support institutional objectives. Comply with all regulatory and legal requirements, including:':
            'Apporter de la valeur à la façon dont nous menons nos activités et soutenir les objectifs institutionnels. Se conformer à toutes les exigences réglementaires et légales, y compris :',

          // Legal Mentions
          //Title 7
          'Respect de la vie privée': 'Respect de la vie privée',
          // Body 7
          "Falcon Consulting respecte votre vie privée et s'engage à la protéger. La présente déclaration est destinée à vous informer de notre politique et de nos pratiques en matière de respect de la vie privée, ainsi que des choix que vous pouvez opérer sur la manière dont vos coordonnées sont recueillies en ligne et comment elles sont utilisées.":
            "Falcon Consulting respecte votre vie privée et s'engage à la protéger. La présente déclaration est destinée à vous informer de notre politique et de nos pratiques en matière de respect de la vie privée, ainsi que des choix que vous pouvez opérer sur la manière dont vos coordonnées sont recueillies en ligne et comment elles sont utilisées.",
          'Le site web est régi par le Droit français. Notre activité professionnelle est répartie selon le pays dans lequel le contrat de prestation est signé. En cas de litige résultant de votre utilisation de note site web, seuls les Tribunaux français sont compétents.':
            'Le site web est régi par le Droit français. Notre activité professionnelle est répartie selon le pays dans lequel le contrat de prestation est signé. En cas de litige résultant de votre utilisation de note site web, seuls les Tribunaux français sont compétents.',
          'Tous droits réservés © -': 'Tous droits réservés © -',
          //Title 6
          "Autorisation de reproduction de contenus et de mise en placed'hyperliens":
            "Autorisation de reproduction de contenus et de mise en placed'hyperliens",
          // Body 6
          "Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres resources présentes sur le réseau Intemet, ne sauraient engager la responsabilité de la société Falcon Consulting. Les utilisateurs / internautes du site ne peuvent mettre en place un lien hypertexte en direction de ce site sans l'autorisation expresse et préalable de la société Falcon Consulting.":
            "Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres resources présentes sur le réseau Intemet, ne sauraient engager la responsabilité de la société Falcon Consulting. Les utilisateurs / internautes du site ne peuvent mettre en place un lien hypertexte en direction de ce site sans l'autorisation expresse et préalable de la société Falcon Consulting.",

          //Title 5
          'Liens hypertextes': 'Liens hypertextes',
          // Body 5
          "Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres resources présentes sur le réseau Intemet, ne sauraient engager la responsabilité de la société Falcon Consulting. Les utilisateurs/internautes du site ne peuvent mettre en place un lien hypertexte en direction de ce site sans l'autorisation expresse et préalable de la société Falcon Consulting.":
            "Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres resources présentes sur le réseau Intemet, ne sauraient engager la responsabilité de la société Falcon Consulting. Les utilisateurs/internautes du site ne peuvent mettre en place un lien hypertexte en direction de ce site sans l'autorisation expresse et préalable de la société Falcon Consulting.",
          //  Title 4
          'Loi informatique, fichiers et libertés': 'Loi informatique, fichiers et libertés',
          // Body 4
          'La société Falcon Consulting est le responsable du traitement des donees collectees sur son site via :':
            'La société Falcon Consulting est le responsable du traitement des donees collectees sur son site via :',
          "L'utilisateur est notamment informé que conformément à l'article 32 de la loi Informatique et libertés du 6 janvier 1978 modifiée, les informations qu'il communique par les formulaires présents sur le site de la société Falcon Consulting sot nécessaires pour répondre à sa demande et sont destines aux services en charge de répondre à sa demande à des fins de suivi de cette demande.":
            "L'utilisateur est notamment informé que conformément à l'article 32 de la loi Informatique et libertés du 6 janvier 1978 modifiée, les informations qu'il communique par les formulaires présents sur le site de la société Falcon Consulting sot nécessaires pour répondre à sa demande et sont destines aux services en charge de répondre à sa demande à des fins de suivi de cette demande.",
          "Conformément aux dispositions des articles 39 et 40 de la loi « Informatique et Libertés » du 6 janvier 1978 modifiée en 2004, l'utilisateur bénéficie d'un droit d'accès, de rectification, de mise à jour et 'effacement des informations qui le concernent, qu'il peut exercer en s'adressant à l'adresse mail":
            "Conformément aux dispositions des articles 39 et 40 de la loi « Informatique et Libertés » du 6 janvier 1978 modifiée en 2004, l'utilisateur bénéficie d'un droit d'accès, de rectification, de mise à jour et 'effacement des informations qui le concernent, qu'il peut exercer en s'adressant à l'adresse mail",
          "ou par courier à l'adresse de la société:": "ou par courier à l'adresse de la société:",
          "Falcon Consulting, 53 Avenue Victor Hugo, 94290 Villeneuve Le Roi, France, service «Droit des personnes » et en joignant la copie de son justificatif d'identité.":
            "Falcon Consulting, 53 Avenue Victor Hugo, 94290 Villeneuve Le Roi, France, service «Droit des personnes » et en joignant la copie de son justificatif d'identité.",
          "Conformément aux dispositions de 'article 38 de la loi « Informatique et Libertés » du 6 ianvier 1978 modifiée en 2004, l'utilisateur put également 'opposer, pour des motifs légitimes à ce que ses données fassent l'objet d' un traitement et sans motif et sans frais, à ce que ses données soient utilisées à des fins de prospection commerciale":
            "Conformément aux dispositions de 'article 38 de la loi « Informatique et Libertés » du 6 ianvier 1978 modifiée en 2004, l'utilisateur put également 'opposer, pour des motifs légitimes à ce que ses données fassent l'objet d' un traitement et sans motif et sans frais, à ce que ses données soient utilisées à des fins de prospection commerciale",
          "L'utilisateur est informé que lors de ses visites sur le site":
            "L'utilisateur est informé que lors de ses visites sur le site",
          ", un cookie peut 'installer automatiquement sur son logiciel de navigation.":
            ", un cookie peut 'installer automatiquement sur son logiciel de navigation.",
          "Le cookie est un bloc de données qui ne permet pas d'identifier les utilisateurs, mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site. Le paramétrage du logiciel de navigation permet 'informer de la présence de cookie et éventuellement, de la refuser de la manière décrite à l'adresse suivante":
            "Le cookie est un bloc de données qui ne permet pas d'identifier les utilisateurs, mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site. Le paramétrage du logiciel de navigation permet 'informer de la présence de cookie et éventuellement, de la refuser de la manière décrite à l'adresse suivante",
          "L'utilisateur dispose d'un droit d'accès, de retrait et de modification des données à caractère personnel communiques par le bias des cookies dans les conditions indiquées ci-dessus.":
            "L'utilisateur dispose d'un droit d'accès, de retrait et de modification des données à caractère personnel communiques par le bias des cookies dans les conditions indiquées ci-dessus.",
          "L'utilisateur du site": "L'utilisateur du site",
          "est tenu de respecter les dispositions de la loi Informatique et libertés du 6 janvier 1978 modifiée dont la violation est passible de sanctions pénales. Il doit notamment s' abstenir, s'agissant des informations nominatives auxquelles il accède, de toute collecte, de toute utilisation détournée, et d'une manière générale, de tout acte susceptible de porter atteinte à la vie privée ou à la réputation des personnes.":
            "est tenu de respecter les dispositions de la loi Informatique et libertés du 6 janvier 1978 modifiée dont la violation est passible de sanctions pénales. Il doit notamment s' abstenir, s'agissant des informations nominatives auxquelles il accède, de toute collecte, de toute utilisation détournée, et d'une manière générale, de tout acte susceptible de porter atteinte à la vie privée ou à la réputation des personnes.",

          // Title 3
          "Licence d'utilisation du Contenu du Site": "Licence d'utilisation du Contenu du Site",
          // Body 3
          "Du seul fait de sa connexion au site, l'utilisateur reconnaît accepter de la société Falcon Consulting, une licence 'usage du Contenu du Site strictement limitée aux conditions impératives suivantes:":
            "Du seul fait de sa connexion au site, l'utilisateur reconnaît accepter de la société Falcon Consulting, une licence 'usage du Contenu du Site strictement limitée aux conditions impératives suivantes:",
          "La présente licence est accordée à tire non exclusif et n'est pas transmissible.":
            "La présente licence est accordée à tire non exclusif et n'est pas transmissible.",
          "Le droit 'usage conféré à l'utilisateur / internaute est personnel et privé : c'est-à-dire que toute reproduction du contenu du site sur un quelconque support pour un usage collectif ou professionnel, même en interne dans l'entreprise, est prohibée. Il en est de même pour toute communication de ce contenu par voie électronique, même diffusé en intranet ou en extranet d'entreprise.":
            "Le droit 'usage conféré à l'utilisateur / internaute est personnel et privé : c'est-à-dire que toute reproduction du contenu du site sur un quelconque support pour un usage collectif ou professionnel, même en interne dans l'entreprise, est prohibée. Il en est de même pour toute communication de ce contenu par voie électronique, même diffusé en intranet ou en extranet d'entreprise.",
          "Le droit 'usage comprend seulement l'autorisation de consulter le site et son contenu.":
            "Le droit 'usage comprend seulement l'autorisation de consulter le site et son contenu.",
          "Cet usage comprend seulement l'autorisation de reproduire pour stockage aux fins de représentation sur écran monoposte et de reproduction en un exemplaire, pour copie de  sauvegarde et tirage papier. Tout autre usage est soumis à l'autorisation expresse préalable de la société Falcon Consulting. La violation de ces dispositions soumet le contrevenant et toute personne responsable aux peines pénales et civiles prévues par la loi française.":
            "Cet usage comprend seulement l'autorisation de reproduire pour stockage aux fins de représentation sur écran monoposte et de reproduction en un exemplaire, pour copie de  sauvegarde et tirage papier. Tout autre usage est soumis à l'autorisation expresse préalable de la société Falcon Consulting. La violation de ces dispositions soumet le contrevenant et toute personne responsable aux peines pénales et civiles prévues par la loi française.",

          // Title 2
          'Contenu du Site': 'Contenu du Site',
          // Body 2
          "Le contenu du site la structure générale, les textes, les images, animées ou non, et les sons dont le site est composé sont la propriété exclusive de la société Falcon Consulting. Toute représentation totale ou partielle de ce Site et de son Contenu, par quelques procédés que ce soient, sans l'autorisation pré alable expresse de la société Falcon Consulting est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété intellectuelle.":
            "Le contenu du site la structure générale, les textes, les images, animées ou non, et les sons dont le site est composé sont la propriété exclusive de la société Falcon Consulting. Toute représentation totale ou partielle de ce Site et de son Contenu, par quelques procédés que ce soient, sans l'autorisation pré alable expresse de la société Falcon Consulting est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété intellectuelle.",
          "Le site accessible à l'adresse": "Le site accessible à l'adresse",
          'est hébergé par la société GoDaddy.com, dont le siège social est situé au 14455 North Hayden Rd., Suite 219, Scottsdale, AZ 85260.':
            'est hébergé par la société GoDaddy.com, dont le siège social est situé au 14455 North Hayden Rd., Suite 219, Scottsdale, AZ 85260.',
          'Email :': 'Email :',
          'Téléphone :': 'Téléphone :',

          // title 1
          Éditeur: 'Éditeur',
          // Body 1
          'Le présent site web, accessible à l’adresse':
            'Le présent site web, accessible à l’adresse',
          'est réalisé par la Société Falcon Consulting, inscrite au registre du commerce de Créteil sous le numéro B 813 509 536, dont le siège social est situé au 53 avenue Victor Hugo - 94290 Villeneuve Le Roi.':
            'est réalisé par la Société Falcon Consulting, inscrite au registre du commerce de Créteil sous le numéro B 813 509 536, dont le siège social est situé au 53 avenue Victor Hugo - 94290 Villeneuve Le Roi.',
          'Le site appartient au groupe Falcon Consulting. En France, c’est la Société Falcon Consulting au capital de 10 000 euros, inscrite au registre du commerce de Créteil sous le numéro B 813 509 536 et numéro TVA intracommunautaire FR84813509536, dont le siège social est situé au 53 avenue Victor Hugo - 94290 Villeneuve Le Roi, qui est reconnu comme propriétaire.':
            'Le site appartient au groupe Falcon Consulting. En France, c’est la Société Falcon Consulting au capital de 10 000 euros, inscrite au registre du commerce de Créteil sous le numéro B 813 509 536 et numéro TVA intracommunautaire FR84813509536, dont le siège social est situé au 53 avenue Victor Hugo - 94290 Villeneuve Le Roi, qui est reconnu comme propriétaire.',
          'Le groupe international Falcon Consulting est un ensemble d’ESN toutes spécialisées dans les services informatiques, autour nouvelles technologies logicielles et digitales.':
            'Le groupe international Falcon Consulting est un ensemble d’ESN toutes spécialisées dans les services informatiques, autour nouvelles technologies logicielles et digitales.',
          'Le directeur de la publication du Site Web est la société Falcon Consulting elle-même.':
            'Le directeur de la publication du Site Web est la société Falcon Consulting elle-même.',

          //
          // social banner
          'Curious to learn more?': "Curieux d'en savoir plus ?",
          'Check out our socials!': 'Découvrez nos réseaux sociaux !',
          'Follow us on Linkedin': 'Suivez-nous sur Linkedin',
          // Blog
          // Successful Business
          'Past these venture benefits, there’s too a more all-encompassing surrounding for person obligation; how else are you going to evolve and lift your company? Responsibility, responsibility, organization, engagement are all positives for the objectives of the company and a more joyful, more steady, dependable squad.':
            "Au-delà de ces avantages de capital-risque, il existe également un environnement plus global pour l'obligation individuelle ; sinon, comment allez-vous évoluer et booster votre entreprise ? La responsabilité, la responsabilité, l'organisation, l'engagement sont tous positifs pour les objectifs de l'entreprise et une équipe plus joyeuse, plus stable et plus fiable.",
          'As we’ve clarified, there are strong reasons for such improves, namely team alignment, more noteworthy chances of making due dates, more efficiency, and a better, more productive work environment.':
            "Comme nous l'avons précisé, il existe de bonnes raisons à de telles améliorations, à savoir l'alignement des équipes, des chances plus notables de respecter les dates d'échéance, plus d'efficacité et un environnement de travail meilleur et plus productif.",
          Promotion: 'Promotion',
          "Although this logic has been around for years, before we conclude, there's presently an extra reason to work employing a concept like DRI: representative engagement. Concurring to a 2017 Gallup study on Worker Engagement, 33% of U.S. representatives are locked in, 51% are withdrawn, and as it were 16% is effectively withdrawn. That’s very low. We believe that giving them agency on their work, enabling people, making it clear what they own, giving them agency on their work, what they are accountable for, and helping them achieve those goals is a very powerful way to greatly lift team members. Our experience shows that DRI-like practices, among other things, go a long way in achieving that. Another Gallup survey appears that the most excellent overseen companies can reach upwards of 70% engagement.":
            "Bien que cette logique existe depuis des années, avant de conclure, il existe actuellement une raison supplémentaire de travailler en utilisant un concept comme DRI : l'engagement représentatif. Selon une étude Gallup de 2017 sur l'engagement des travailleurs, 33 % des représentants américains sont bloqués, 51 % sont retirés et, pour ainsi dire, 16 % sont effectivement retirés. C'est très bas. Nous pensons que leur donner une agence sur leur travail, habiliter les gens, préciser ce qu'ils possèdent, leur donner une agence sur leur travail, ce dont ils sont responsables et les aider à atteindre ces objectifs est un moyen très puissant d'améliorer considérablement les membres de l'équipe. Notre expérience montre que les pratiques de type DRI, entre autres, contribuent grandement à y parvenir. Une autre enquête Gallup semble indiquer que les meilleures entreprises supervisées peuvent atteindre un engagement supérieur à 70 %.",
          Appointment: 'Rendez-vous',
          'When manager delegate and then focus on fixing blockers instead of taking over, It’s also worth remembering that they are left with more time to concentrate on their own work. It makes everybody more successful.':
            "Lorsque le responsable délègue puis se concentre sur la résolution des blocages au lieu de prendre le relais, il convient également de se rappeler qu'il lui reste plus de temps pour se concentrer sur son propre travail. Cela rend tout le monde plus efficace.",
          'When the delegation of responsibility happens vertically in the organization, one of the better ways of framing is to begin seeing the work of the “superior” as the work of a coach. Too often, people will tend to take over or re-assign something, when asked a question, when a challenge is explained. They need to be able to consider the situation, to step back, and start asking questions, offering guidance, pointing out flaws in the reasoning, or suggesting alternative options. You don’t see a hockey or ball coach venturing on the field when a play is missed, not one or the other ought to directors.':
            "Lorsque la délégation de responsabilité se fait verticalement dans l'organisation, l'une des meilleures façons de cadrer est de commencer à voir le travail du « supérieur » comme le travail d'un coach. Trop souvent, les gens auront tendance à prendre le relais ou à réaffecter quelque chose, lorsqu'on leur pose une question, lorsqu'un défi est expliqué. Ils doivent être capables d'examiner la situation, de prendre du recul et de commencer à poser des questions, à offrir des conseils, à signaler des failles dans le raisonnement ou à suggérer des options alternatives. Vous ne voyez pas un entraîneur de hockey ou de balle s'aventurer sur le terrain lorsqu'un jeu est manqué, ni l'un ni l'autre ne devrait être dirigé.",
          'Directors got to be able to appoint and believe the individual they hand the duty to but at that point, they moreover have to empower that individual. As mentioned above, giving authority to him, but also by clearing the way as needed and by being available for help, by helping out as their position allows, by providing the resources necessary, in spite of the fact that not by taking over.':
            "Les administrateurs doivent pouvoir nommer et croire la personne à qui ils confient la responsabilité, mais à ce stade, ils doivent également responsabiliser cette personne. Comme mentionné ci-dessus, lui donner de l'autorité, mais aussi en dégageant la voie au besoin et en étant disponible pour aider, en aidant dans la mesure où leur position le permet, en fournissant les ressources nécessaires, malgré le fait que non en prenant le relais.",
          Training: 'Entraînement',
          'The individual who is liable for comes about moreover needs to be the one able to reply questions, clarify the vision, and offer point of view on the whole.':
            "L'individu qui est responsable des résultats doit en outre être celui qui est capable de répondre aux questions, de clarifier la vision et d'offrir un point de vue sur l'ensemble.",
          'Deliverable or project responsibility doesn’t just have to do with taking possession of a deliverable. One person needs to know how to take the lead in the diffusion of information. The person also has to be the one able to answer questions, which are answerable for results, explain the vision, and offer a point of view on the total. The DRI ought to carry not as it were the specialist, but moreover the definitive data.':
            "La responsabilité d'un livrable ou d'un projet n'a pas seulement à voir avec la prise de possession d'un livrable. Une personne doit savoir prendre les devants dans la diffusion de l'information. La personne doit également être celle qui est capable de répondre aux questions, qui sont responsables des résultats, d'expliquer la vision et d'offrir un point de vue sur l'ensemble. Le DRI devrait porter non pas en quelque sorte le spécialiste, mais surtout les données définitives.",
          'Awareness Institutes': 'Instituts de sensibilisation',
          'Sometimes organizations will try to achieve a similar goal by assigning a champion, someone who will push for a project or large deliverable and feel some kind of ownership. Usually, this is more of a once-removed role, helping pave the way but with no direct responsibility, accountability, or authority, one more thing in the pile of things to do. It’s great if a DRI has the visibility and connections in an organization to also champion the project, but that’s just a nice to have, the responsibility and authority comes first.':
            "Parfois, les organisations essaieront d'atteindre un objectif similaire en désignant un champion, quelqu'un qui poussera pour un projet ou un livrable important et ressentira une sorte d'appropriation. Habituellement, il s'agit plutôt d'un rôle autrefois supprimé, aidant à ouvrir la voie, mais sans responsabilité directe, obligation de rendre compte ou autorité, une chose de plus dans la pile de choses à faire. C'est formidable si un DRI a la visibilité et les relations dans une organisation pour également défendre le projet, mais c'est juste un avantage, la responsabilité et l'autorité passent en premier.",
          'This is also useful for everyone involved but it’s not only about deadlines; everyone can work towards their tasks and goals to the best of their abilities, When it’s clear who does what, without looking around for confirmation or pondering where to turn to for choices, it makes strides resolve and quality. It’s much easier to forget about tasks that we are not directly accountable which is especially true when everyone is very busy, in a startup for instance?':
            "Ceci est également utile pour toutes les personnes impliquées, mais il ne s'agit pas seulement de délais ; tout le monde peut travailler au mieux de ses capacités pour atteindre ses tâches et ses objectifs. Lorsqu'il est clair qui fait quoi, sans chercher de confirmation ni se demander vers qui se tourner pour faire des choix, cela fait des progrès en termes de résolution et de qualité. C'est beaucoup plus facile d'oublier les tâches dont on n'est pas directement responsable ce qui est d'autant plus vrai quand tout le monde est très occupé, dans une startup par exemple ?",
          'when it’s shared without one clear decision-maker, when responsibility is not solidly given, or when it’s unclear who has it,  then decisions are harder to make, things start to unravel, individuals expect somebody else will pay attention of it, and the less charming errands idea almost, unclear. Projects and vital tasks drift away from the goal and / or the deadline.':
            "lorsqu'elle est partagée sans un décideur clair, lorsque la responsabilité n'est pas solidement donnée, ou lorsqu'il n'est pas clair qui l'a, alors les décisions sont plus difficiles à prendre, les choses commencent à s'effondrer, les individus s'attendent à ce que quelqu'un d'autre y prête attention, et moins charmante idée de courses presque, peu claire. Les projets et les tâches vitales s'éloignent de l'objectif et/ou de l'échéance.",
          Precision: 'Précision',
          'This applies to all headings and with different partners. There needs to be a responsible person on each side, in a client-provider relationship. It’s good for all levels of a hierarchy, for every collaborator in a team, true delegation is not only for higher-ups but he also needs to let the person do the work and not micromanage over their shoulder, in case a chief delegates assignments.':
            "Ceci s'applique à toutes les rubriques et avec différents partenaires. Il doit y avoir une personne responsable de chaque côté, dans une relation client-fournisseur. C'est bon pour tous les niveaux d'une hiérarchie, pour chaque collaborateur d'une équipe, la vraie délégation n'est pas seulement pour les supérieurs, mais il doit aussi laisser la personne faire le travail et ne pas microgérer par-dessus son épaule, au cas où un chef délèguerait des tâches.",
          'At Apple, they call them the Straightforwardly Capable Individuals., there is one responsible person, for anything that needs to get done, and the one who will make beyond any doubt it happens and be responsible for the “thing”. For that concept that person, to work through, also needs to be given the related authority for action. On the off chance that anybody included can step in and overrule the capable individual, at that point it’s not a genuine designation and the organization doesn’t get the benefits of allotting and empowering duty.':
            "Chez Apple, ils les appellent les individus directement capables., il y a une personne responsable, pour tout ce qui doit être fait, et celle qui fera en sorte que cela se produise sans aucun doute et sera responsable de la «chose». Pour ce concept, cette personne, pour travailler, doit également recevoir l'autorité connexe pour l'action. Au cas où quiconque inclus puisse intervenir et annuler la décision de la personne capable, à ce stade, ce n'est pas une véritable désignation et l'organisation ne bénéficie pas des avantages de l'attribution et de l'habilitation des tâches.",
          "Everyone strives to coach instead of command, everyone is given responsibility and authority, everyone strives to coach instead of command, everyone respects that delegation and, to memorize rather than stagnate. Let's look at a few of what that involves.":
            "Tout le monde s'efforce de coacher au lieu de commander, tout le monde se voit confier la responsabilité et l'autorité, tout le monde s'efforce de coacher au lieu de commander, tout le monde respecte cette délégation et, de mémoriser plutôt que de stagner. Regardons quelques-uns de ce que cela implique.",
          'Coach and allow control > Command and control':
            'Accompagner et autoriser le contrôle > Commande et contrôle',
          'To make sure each team member knows what they need to do is the only way we can scale our service and have steady learning happening at each level, we should have open lines of communication, and everybody takes obligation.':
            "Pour nous assurer que chaque membre de l'équipe sait ce qu'il doit faire, c'est la seule façon de faire évoluer notre service et d'avoir un apprentissage régulier à chaque niveau, nous devons avoir des lignes de communication ouvertes et tout le monde s'engage.",
          'There are many numerous diverse settings like distributed teams, new projects, client relationships, team dynamics, where projects, tasks, and deadlines include numerous individuals and dependencies. One ingredient is absolutely essential for any of these to be effectively, dependably, and indeed pleasantly that is responsibility.':
            "Il existe de nombreux paramètres variés tels que les équipes distribuées, les nouveaux projets, les relations avec les clients, la dynamique d'équipe, où les projets, les tâches et les délais incluent de nombreuses personnes et dépendances. Un ingrédient est absolument essentiel pour que l'un d'entre eux soit efficace, fiable et agréable, c'est la responsabilité.",
          'In our squads, everyone in the core team needs to be flexible, autonomous, collaborative, and continually learning, whether for their possess assignments or with respect to how we work together. The organization itself needs to be constantly learning, adapting, evolving, and each group, and our “team of the team” should learn from each other.':
            "Dans nos équipes, tous les membres de l'équipe de base doivent être flexibles, autonomes, collaboratifs et apprendre continuellement, que ce soit pour leurs propres missions ou en ce qui concerne la façon dont nous travaillons ensemble. L'organisation elle-même doit constamment apprendre, s'adapter, évoluer, et chaque groupe, et notre « équipe de l'équipe », doit apprendre les uns des autres.",
          'We have to scale both the number of projects and the number of partners since we assemble squads for multiple client partners. As the future of work, we have to exemplify several best observes often thought of collectively.':
            "Nous devons faire évoluer à la fois le nombre de projets et le nombre de partenaires puisque nous assemblons des équipes pour plusieurs partenaires clients. En tant qu'avenir du travail, nous devons illustrer plusieurs bonnes pratiques souvent pensées collectivement.",
          'The way how we work can be seen as a concentrated adaptation of what goes on at different scales around the software industry and in various others is one of the stimulating things at Gsquad':
            "La façon dont nous travaillons peut être considérée comme une adaptation concentrée de ce qui se passe à différentes échelles dans l'industrie du logiciel et dans diverses autres est l'une des choses stimulantes chez Gsquad",
          'True delegation and commitment will lift your business':
            'Une véritable délégation et un engagement dynamiseront votre entreprise',
          'August 12th 2022': '12 août 2022',
          'Business ran Successfully': "L'entreprise a fonctionné avec succès",
          'Business Ran Successfully': "L'entreprise a fonctionné avec succès",
          // Agile Methodology
          'The 9 main advantages of the agile methodology':
            'Les 9 principaux avantages de la méthodologie agile',
          'August 3rd 2022': '3 août 2022',
          'Agile stands for its versatility and evolutionary nature as one of the most common approaches to project management. Those who work in the industry, or closely to it, are aware that the art of software development is special and a bit different to other kinds of engineering projects.':
            "Agile est synonyme de polyvalence et de nature évolutive comme l'une des approches les plus courantes de la gestion de projet. Ceux qui travaillent dans l'industrie, ou à proximité, sont conscients que l'art du développement de logiciels est spécial et un peu différent des autres types de projets d'ingénierie.",
          'Data from 2018 show that almost 71 percent of the companies use Agile at various frequencies and 28 percent more active projects focused on Agile methodologies.':
            'Les données de 2018 montrent que près de 71 % des entreprises utilisent Agile à différentes fréquences et 28 % de projets actifs en plus axés sur les méthodologies Agile.',
          "Why are manager dependent solely upon this or use it in association with other frameworks? it's easy because of it. The advantages of Agile empower them to control their projects and simplify the work of managers. It focuses both on the quality and value for the client as well as the execution of the project within the given project constraints.":
            "Pourquoi le gestionnaire dépend-il uniquement de cela ou l'utilise-t-il en association avec d'autres frameworks ? c'est facile grâce à ça. Les avantages d'Agile leur permettent de maîtriser leurs projets et de simplifier le travail des managers. Il se concentre à la fois sur la qualité et la valeur pour le client ainsi que sur l'exécution du projet dans le cadre des contraintes de projet données.",
          "Why are top corporations using it for the management of their projects? here are some of Agile's great explanations and advantages.":
            "Pourquoi les grandes entreprises l'utilisent-elles pour la gestion de leurs projets ? voici quelques-unes des grandes explications et avantages d'Agile.",
          'Product of greater quality': 'Produit de meilleure qualité',
          "Testing is an integrated aspect of Agile project management, which ensures that the finished product's overall output is greater. The consumer may request adjustments in compliance with the reality of the market and remain involved. Since Agile is an iterative process, self-organizing teams continue to learn and change over time.":
            "Les tests sont un aspect intégré de la gestion de projet Agile, qui garantit que la sortie globale du produit fini est supérieure. Le consommateur peut demander des ajustements conformes à la réalité du marché et rester impliqué. Agile étant un processus itératif, les équipes auto-organisées continuent d'apprendre et de changer au fil du temps.",
          'Wonder how the self-organizing teams can be managed? This is the list of hacks to do remote work much better.':
            'Vous vous demandez comment les équipes auto-organisées peuvent être gérées ? Voici la liste des hacks pour mieux travailler à distance.',
          'Gratitude to the customer': 'Gratitude au client',
          'The customer does not control execution in the traditional system which affects flexibility and adaptability, since it is only interested in the planning process. In Agile, the consumer often participates in a decision-making process that leads to better retention of customers. You can deliver value to the customer and make sure that the final product is truly according to their requirements, by keeping the customer in the circle and making changes according to their opinion.':
            "Le client ne contrôle pas l'exécution dans le système traditionnel, ce qui affecte la flexibilité et l'adaptabilité, puisqu'il ne s'intéresse qu'au processus de planification. En Agile, le consommateur participe souvent à un processus décisionnel qui conduit à une meilleure fidélisation des clients. Vous pouvez apporter de la valeur au client et vous assurer que le produit final correspond vraiment à ses exigences, en gardant le client dans le cercle et en apportant des modifications en fonction de son opinion.",
          'Another advantage of Agile Project Management is that time spent on the market is reduced considerably. In certain cases, the producer may use the opportunity effectively and benefit from the first mover. The customers will come back to you for another project when they get to enjoy these benefits because of your presentation.':
            "Un autre avantage de la gestion de projet agile est que le temps passé sur le marché est considérablement réduit. Dans certains cas, le producteur peut utiliser efficacement l'opportunité et bénéficier du premier arrivé. Les clients reviendront vers vous pour un autre projet lorsqu'ils pourront profiter de ces avantages grâce à votre présentation.",
          'Better Evaluating': 'Mieux évaluer',
          'Agile allows managers to have better control over quality-control features, feedback integration and project due to its limpidity. All shareholders engage in the process through sophisticated monitoring methods and reporting tools and quality is assured during the entire project execution period':
            "Agile permet aux managers d'avoir un meilleur contrôle sur les fonctionnalités de contrôle qualité, l'intégration des retours d'expérience et le projet grâce à sa limpidité. Tous les actionnaires s'engagent dans le processus grâce à des méthodes de suivi sophistiquées et des outils de reporting et la qualité est assurée pendant toute la période d'exécution du projet",
          'Enhanced stability for projects': 'Stabilité améliorée pour les projets',
          'There are greater ways within the Agile system to ensure the project runs smoothly and to recognize and anticipate risks. With increased visibility, predicting risks, and coming up with effective mitigation plans becomes easier.':
            "Il existe de plus grands moyens au sein du système Agile pour garantir le bon déroulement du projet et pour reconnaître et anticiper les risques. Avec une visibilité accrue, il devient plus facile de prévoir les risques et d'élaborer des plans d'atténuation efficaces.",
          'Scrum methodology helps managers to forecast performances and prepare accordingly to maximize project visibility by using sprint backlogs and burn down maps.':
            'La méthodologie Scrum aide les managers à prévoir les performances et à se préparer en conséquence pour maximiser la visibilité du projet en utilisant des backlogs de sprint et des burn down maps.',
          'Risks minimized': 'Risques minimisés',
          'Agile performs in short, continuous delivery sprints. Any project using an Agile approach would, in principle, never fail. and if a sector does not go as expected, there is still a minor part that can be salvaged and used in the future.':
            "Agile effectue des sprints de livraison courts et continus. Tout projet utilisant une approche Agile n'échouerait, en principe, jamais. et si un secteur ne se déroule pas comme prévu, il reste encore une partie mineure qui peut être récupérée et utilisée à l'avenir.",
          'Enhanced versatility': 'Polyvalence accrue',
          "People work in smaller collisions and are facilitated by the product owner's continuous input and participation. If Agile is applied successfully in a project team, it offers additional versatility. Changes are typically time-consuming and expensive in some project management methodologies.":
            'Les gens travaillent dans des collisions plus petites et sont facilités par la contribution et la participation continues du propriétaire du produit. Si Agile est appliqué avec succès dans une équipe projet, il offre une polyvalence supplémentaire. Les changements sont généralement longs et coûteux dans certaines méthodologies de gestion de projet.',
          'This unmatched mobility is one of the key reasons why efficient firms adopt Agile. Agile is however versatile enough for the team to make short-term adjustments and break the project into short, both achievable sprints. Agile technique is an efficient framework for teams seeking a versatile product creation strategy.':
            "Cette mobilité inégalée est l'une des principales raisons pour lesquelles les entreprises efficaces adoptent Agile. Agile est cependant suffisamment polyvalent pour que l'équipe puisse faire des ajustements à court terme et diviser le projet en sprints courts et réalisables. La technique Agile est un cadre efficace pour les équipes à la recherche d'une stratégie de création de produit polyvalente.",
          'The enhancement is continual': "L'amélioration est continue",
          'One of the 12 fundamental concepts of the Agile Manifesto is working for continuous creativity and self-reflection. The methodology works on variations that do not replicate previous errors and that each sprint is better than the last. Agile methodologies allow team members to learn from similar experiences and promote an open culture of sharing of ideas.':
            "L'un des 12 concepts fondamentaux du Manifeste Agile est de travailler pour une créativité continue et une réflexion sur soi. La méthodologie fonctionne sur des variations qui ne reproduisent pas les erreurs précédentes et que chaque sprint est meilleur que le précédent. Les méthodologies agiles permettent aux membres de l'équipe d'apprendre d'expériences similaires et de promouvoir une culture ouverte de partage d'idées.",
          'Expanded moral squads': 'Escouades morales élargies',
          'The project manager defends the team from sponsoring and management intervention. When Agile teams are self-organized and self-managed, they can easily increase their control and authority over their decisions.':
            "Le chef de projet défend l'équipe du sponsoring et de l'intervention de la direction. Lorsque les équipes Agiles sont auto-organisées et autogérées, elles peuvent facilement accroître leur contrôle et leur autorité sur leurs décisions.",
          'The pull-functionality of teams allows participants to improve their current position and to gain new skills in project management. Agile can provide versatile team structures and offers an atmosphere where teams are close-knit, as the team size is small. The team also addresses problems and circumstances to strengthen their cooperation.':
            "La fonctionnalité pull des équipes permet aux participants d'améliorer leur position actuelle et d'acquérir de nouvelles compétences en gestion de projet. Agile peut fournir des structures d'équipe polyvalentes et offre une atmosphère où les équipes sont soudées, car la taille de l'équipe est petite. L'équipe aborde également les problèmes et les circonstances pour renforcer leur coopération.",
          'More valid data': 'Des données plus valides',
          'The metrics used in time and cost analysis by Agile teams for measuring project performance are more specific and relevant than those used in traditional methodologies. The Waterfall methodology measurements indicate that the project closely tracks expected costs and time, while Agile emphasizes on performance optimization and results produced.':
            "Les métriques utilisées dans l'analyse des temps et des coûts par les équipes Agiles pour mesurer la performance des projets sont plus spécifiques et pertinentes que celles utilisées dans les méthodologies traditionnelles. Les mesures de la méthodologie Waterfall indiquent que le projet suit de près les coûts et le temps prévus, tandis qu'Agile met l'accent sur l'optimisation des performances et les résultats produits.",
          'Agile produces critical metrics such as cycle time, time-to-date, bottling and output assessment, and the decision-making process driven by data. Through consistent communication with the development team, the customer should always be aware of the progress, and the combined effort will result in a higher quality product.':
            "Agile produit des métriques critiques telles que le temps de cycle, le temps à ce jour, l'évaluation de la mise en bouteille et de la production, ainsi que le processus de prise de décision piloté par les données. Grâce à une communication cohérente avec l'équipe de développement, le client doit toujours être au courant des progrès, et l'effort combiné se traduira par un produit de meilleure qualité.",
          'An Agile Framework is a powerful tool for managers, members of the team, and customers. It allows teams to solve problems such as over cost and shrinkage. The benefits of Agile vary from enhancing product quality to encouraging the team members to improve themselves professionally.':
            "Un cadre Agile est un outil puissant pour les managers, les membres de l'équipe et les clients. Il permet aux équipes de résoudre des problèmes tels que les surcoûts et les pertes. Les avantages d'Agile vont de l'amélioration de la qualité des produits à l'encouragement des membres de l'équipe à s'améliorer professionnellement.",
          'You need to know the various techniques used in Agile if you think Agile is the best way to suit your next project.':
            "Vous devez connaître les différentes techniques utilisées dans Agile si vous pensez qu'Agile est la meilleure façon de s'adapter à votre prochain projet.",
          // Detail Project Screens
          // Detail Theme

          'Colors Schemes – Making UI feel more natural. This is why the usage of the right color palettes is essential to make the app more attractive. Some colors look better with another. This is why color schemes were created. They help designers to find the right hue for the remaining ones.':
            'Le choix des couleurs est essentiel, afin d’avoir une identité visuelle forte. La palette suivante a été convenue, donnant une allure dynamique au projet.',
          // Detail Design
          'App design is an ongoing process comprising user experience (UX) and user interface (UI) elements. Designers ideate, define solutions, create the app’s flow and structure, and make stylistic choices from colors to fonts. Designers base choices on user research and feedback. The end result is an app that looks nice and is easy to use. So, the best app design process comprises Research, Ideation, Problem Identification, Design, Feedback, Problem Evaluation. Designers handle all parts of the process in a continuous and simultaneous flow. And that’s both for UX and UI through the lifetime of the app.':
            "La conception d'applications est un processus continu comprenant des éléments d'expérience utilisateur (UX) et d'interface utilisateur (UI). Les concepteurs imaginent, définissent des solutions, créent le flux et la structure de l'application et font des choix stylistiques, des couleurs aux polices. Les concepteurs fondent leurs choix sur la recherche et les commentaires des utilisateurs. Le résultat final est une application qui a l'air bien et qui est facile à utiliser. Ainsi, le meilleur processus de conception d'applications comprend la recherche, l'idéation, l'identification des problèmes, la conception, les commentaires et l'évaluation des problèmes. Les concepteurs gèrent toutes les parties du processus dans un flux continu et simultané. Et c'est à la fois pour l'UX et l'UI tout au long de la durée de vie de l'application.",
          //web and app detail section
          'There are countless variations when it comes to different websites that can be incorporated into the design of a website. In general, the Falcon IT workflow define below. Web designers at Falcon IT often work with design software like Figma or AdobeXD etc. to create visually appealing user experiences. The team makes wireframes, mockups, design systems, color palettes, templates, and more to help developers build the product, and after UI /UX finalizing, the back-end developers focus on the infrastructure of a site or web application (hosting, security, etc), and our front-end developers focus on the functionality of the site/app. While the team of full-stack developers is working on both the front-end and back-end. The SQA team monitors all activities side by side to deliver the best to our clients.':
            "Il existe d'innombrables variations en ce qui concerne les différents sites Web qui peuvent être intégrés à la conception d'un site Web. En général, le flux de travail Falcon IT est défini ci-dessous. Les concepteurs Web de Falcon IT travaillent souvent avec des logiciels de conception tels que Figma ou AdobeXD, etc. pour créer des expériences utilisateur visuellement attrayantes. L'équipe crée des wireframes, des maquettes, des systèmes de conception, des palettes de couleurs, des modèles, etc. pour aider les développeurs à créer le produit, et après la finalisation de l'interface utilisateur/UX, les développeurs back-end se concentrent sur l'infrastructure d'un site ou d'une application Web (hébergement, sécurité , etc.), et nos développeurs front-end se concentrent sur les fonctionnalités du site/de l'application. Alors que l'équipe de développeurs full-stack travaille à la fois sur le front-end et le back-end. L'équipe SQA surveille toutes les activités côte à côte pour offrir le meilleur à nos clients.",
          'Falcon’s app development process is divided into different servers to assure the quality of the App. After UI/ UX phase, different servers collaborate to complete the process. Development Server will be used by developers only for development purposes. QA Server Only used by the SQA team. Nothing will be updated on the QA server without QA approval. All the testing will be performed on this server. The Staging Server is also known as the Client’s server. So, this server will be accessible to the client. The client will perform User Acceptance Testing on this server. Nothing will be updated on the Staging server without QA/CEO approval. When your project passed the QA server then the project will deploy on the staging server. Finally, the project is going live. Nothing should be uploaded on a live server without QA/Client/CEO approval. The project which is going live must be on the staging server previously.':
            "Le processus de développement d'applications de Falcon est divisé en différents serveurs pour assurer la qualité de l'application. Après la phase UI/UX, différents serveurs collaborent pour terminer le processus. Le serveur de développement sera utilisé par les développeurs uniquement à des fins de développement. QA Server Utilisé uniquement par l'équipe SQA. Rien ne sera mis à jour sur le serveur QA sans l'approbation du QA. Tous les tests seront effectués sur ce serveur. Le serveur de transfert est également appelé serveur du client. Ainsi, ce serveur sera accessible au client, le client effectuera des tests d'acceptation des utilisateurs sur ce serveur. Rien ne sera mis à jour sur le serveur Staging sans l'approbation du QA/CEO. Lorsque votre projet a passé le serveur QA, le projet se déploiera sur le serveur intermédiaire. Enfin, le projet est lancé. Rien ne doit être téléchargé sur un serveur en direct sans l'approbation de QA/Client/CEO. Le projet qui est mis en ligne doit se trouver auparavant sur le serveur intermédiaire.",
          // Canon
          'Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)':
            "Falcon Consulting a été sollicité par Canon pour son expertise en .NET et sa capacité à s'adapter à tout métier pour monter plusieurs projets autour de la GED donc pour leurs clients (plusieurs secteurs d'activité : banque, assurance, BTP, aéronautique,...)",
          '• Development in C# 4.6 of a component using the YouSign API for managing electronic signatures from workflows in Therefore':
            "• Développement en C# 4.6 d'un composant utilisant l'API YouSign pour la gestion des signatures électroniques à partir des workflows dans Therefore",
          '• Development in C#, C# Core, ASP.NET, ASP.NET Core of several applications dedicated to Canon customers using Therefore API.':
            "• Développement en C#, C# Core, ASP.NET, ASP.NET Core de plusieurs applications dédiées aux clients Canon utilisant l'API Therefore.",
          '• Creation and implementation of reports in PowerBI (visualization of extracts, formatting of counters and graphs for data consistency checking)':
            '• Création et mise en place de rapports sous PowerBI (visualisation des extraits, mise en forme des compteurs et graphiques pour vérification de la cohérence des données)',
          '• raining of various Canon customers in the use, management and administration of Therefore':
            "• pluie de divers clients Canon dans l'utilisation, la gestion et l'administration de Therefore",
          '• Technical support around Therefore from different Canon customers':
            '• Support technique autour de Therefore de différents clients Canon',
          // Blsh
          'We are building a marketplace for delivery supplies on the customer and small business demand.':
            'Nous construisons un marché pour les fournitures de livraison à la demande des clients et des petites entreprises.',
          'The app will match the Customer delivery request with the Courier.':
            "L'application fera correspondre la demande de livraison du client avec le coursier.",
          'The Individual shopper can use delivery regularly (weekly, monthly, etc). Or only when there is a need for the delivery.':
            "L'acheteur individuel peut utiliser la livraison régulièrement (hebdomadaire, mensuelle, etc.). Ou seulement lorsqu'il y a un besoin pour la livraison.",
          'The app will offer market-based pricing. When the Individual shopper requests, he will offer the price he is willing to pay for delivery. All drivers who match his request will see the price. They will be able to accept the request or negotiate the delivery price.':
            "L'application proposera une tarification basée sur le marché. Lorsque l'Acheteur individuel le demande, il propose le prix qu'il est prêt à payer pour la livraison. Tous les conducteurs qui correspondront à sa demande verront le prix. Ils pourront accepter la demande ou négocier le prix de la livraison.",
          'The app will be free for Customers. The Courier will pay 20% of the delivery price.':
            "L'application sera gratuite pour les clients. Le Courrier paiera 20% du prix de livraison.",
          // Microsoft

          'Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.':
            "Falcon Consulting a été sollicité par Microsoft pour son expertise en .NET et reporting pour mettre en place des outils d'analyse produit pour les catalogues médias (musique, vidéo et ebooks) sur le Windows Store en utilisant les dernières technologies Azure.",
          '• Development in U-SQL under Azure Data Lake Analytics of scripts for quality control of data from the ebook catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).':
            "• Développement en U-SQL sous Azure Data Lake Analytics de scripts de contrôle qualité des données du catalogue ebook avec une bibliothèque de classes contenant le code derrière les scripts en C# (génération d'extraits, compteurs et contrôles de cohérence des données, création de procédures stockées , archivage des données).",
          '• Migration of projects developed in Scope and SQL Server to Azure Data Lake Analytics and development in U-SQL under Azure of data quality control scripts from the video catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).':
            "• Migration des projets développés en Scope et SQL Server vers Azure Data Lake Analytics et développement en U-SQL sous Azure des scripts de contrôle qualité des données du catalogue vidéo avec une bibliothèque de classes contenant le code derrière les scripts en C# (génération d'extraits, compteurs et contrôles de cohérence des données, création de procédures stockées, archivage des données).",
          // Fnac
          'Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.':
            "Falcon Consulting a été sollicité par la FNAC pour son expertise en .NET et SQL pour renforcer les équipes projets liées à l'inventaire, les stocks, les implantations, l'impression d'étiquettes, les commandes clients.",
          '• Development in ASP.NET MVC 4 and Entity Framework 5 to develop a tool for managing store inventories (inventory management, location management, in-store label printing), unsold product returns, shipping and customer order remittances, use of EXT.NET modules with JavaScript / JQuery development to modernize this tool.':
            "• Développement en ASP.NET MVC 4 et Entity Framework 5 pour développer un outil de gestion des stocks en magasin (gestion des stocks, gestion des emplacements, impression d'étiquettes en magasin), des retours d'invendus, des expéditions et des remises des commandes clients, utilisation des modules EXT.NET avec le développement JavaScript/JQuery pour moderniser cet outil.",
          '• Development in C# Compact Framework 3.5 to upgrade the tool for managing store inventories, returns of unsold products, shipping and customer order remittances on PDAs used in the store by staff.':
            "• Développement en C# Compact Framework 3.5 pour faire évoluer l'outil de gestion des stocks magasin, des retours d'invendus, des expéditions et de la remise des commandes clients sur les PDA utilisés en magasin par le personnel.",
          '• T-SQL development (generation of extracts, counters and data consistency checks, creation of stored procedures for the different projects, data archiving)':
            "• Développement T-SQL (génération d'extraits, compteurs et contrôles de cohérence des données, création de procédures stockées pour les différents projets, archivage des données)",
          '• Development in ASP.NET 3.5 to upgrade a shipping management tool for live customer orders in Switzerland':
            '• Développement en ASP.NET 3.5 pour mettre à jour un outil de gestion des expéditions pour les commandes clients en direct en Suisse',
          // A-Table
          'This project consists of two apps one is for the restaurant and other is for the end user.':
            "Ce projet se compose de deux applications, l'une pour le restaurant et l'autre pour l'utilisateur final.",
          "A-Table is a Mobile Application that allows restaurant to accept and manage orders placed by app users and clients in restaurant. Mobile app for customers to view the restaurant's dishes and place an online order and in the restaurant. A-Table user side: There are two ways to use the app: 1 Either the client is in a restaurant, and he seats down at a table. There will be QR codes available on the tables, and once the user does scan them, it opens automatically the app (if it is already installed), and the user has two options: he can go to the menu of the restaurant, see the dishes, and place the order through the app (in-app payment). He can also chat with his assigned waiter; and ask him anything needed : glass of water, clean the table, etc... , 2 Either the client is looking for a restaurant. In this case, he can search for a specific dish in the Home page. The app will show the popular dishes around him (geolocation). He has the possibility to filter his search: specific type of food, specific restaurant, etc...The filter is working with tags, that can be added or removed.":
            "A-Table est une application mobile qui permet au restaurant d'accepter et de gérer les commandes passées par les utilisateurs de l'application et les clients du restaurant. Application mobile permettant aux clients de visualiser les plats du restaurant et de passer une commande en ligne et au restaurant. Côté utilisateur A-Table : Il y a deux manières d'utiliser l'application : 1 Soit le client est dans un restaurant, et il s'assied à une table. Il y aura des codes QR disponibles sur les tables, et une fois que l'utilisateur les scanne, l'application s'ouvre automatiquement (si elle est déjà installée), et l'utilisateur a deux options : il peut aller au menu du restaurant, voir le plats, et passer la commande via l'application (paiement in-app). Il peut également discuter avec son serveur assigné ; et lui demander le nécessaire : verre d'eau, nettoyer la table, etc... , 2 Soit le client cherche un restaurant. Dans ce cas, il peut rechercher un plat spécifique dans la page d'accueil. L'application affichera les plats populaires autour de lui (géolocalisation). Il a la possibilité de filtrer sa recherche : type de nourriture spécifique, restaurant spécifique, etc... Le filtre fonctionne avec des balises, qui peuvent être ajoutées ou supprimées.",
          // Accor Hotels
          'Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.':
            'Falcon Consulting a été sollicité par Accor pour son expertise en .NET et SQL pour maintenir les outils liés aux formations et formations.',
          'OUR CONTRIBUTION': 'NOTRE CONTRIBUTION',
          '• Collection and consolidation of business requests':
            '• Collecte et consolidation des demandes commerciales',

          '• Implementation of project developments and production quality control':
            '• Mise en place des développements projets et contrôle qualité de la production',
          '• Development in ASP.NET 3.5, Spring.NET and nHibernate to develop a tool for managing the invoicing of courses and trainings.':
            '• Développement en ASP.NET 3.5, Spring.NET et nHibernate pour développer un outil de gestion de la facturation des cours et formations.',
          '• T-SQL development (generation of extracts, counters and data consistency checks)':
            "• Développement T-SQL (génération d'extraits, compteurs et contrôles de cohérence des données)",
          '• rDevelopment to evolve invoices to the new SSRS format':
            '• rDéveloppement pour faire évoluer les factures au nouveau format SSRS',
          '• Kettle-based batch development for import / export and data transformation':
            "• Développement par lots basé sur Kettle pour l'import/export et la transformation de données",
          // Beauty Salon
          'Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.':
            "Beauty Salon & Spa est comme un autre monde de FoodPanda où tous les salons de beauté sont au même endroit. Ainsi, les filles peuvent facilement prendre rendez-vous contre n'importe quel salon grâce à son application mobile. D'autre part, les salons peuvent obtenir des rendez-vous via son compte de salon de beauté. Grâce à cette application, nous pouvons trouver nos esthéticiennes préférées ainsi que des salons à proximité et prendre rendez-vous.",
          // Real Estate
          'This website offers an online tailoring experience with free pick-up and delivery in Karachi. We provide stitching services with customizable designs for salwar suits, blouses, kurtas, bottoms, western wear as per customers measurement at the doorstep. Coming Soon for other cities also.':
            "Ce site Web offre une expérience de couture en ligne avec ramassage et livraison gratuits à Karachi. Nous fournissons des services de couture avec des conceptions personnalisables pour les costumes salwar, les chemisiers, les kurtas, les bas, les vêtements occidentaux selon les mesures des clients à la porte. Prochainement pour d'autres villes également.",
          'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces : a mobile application for the investors, and an admin panel, for the responsible of the company.':
            "L'objectif est de permettre aux investisseurs d'avoir de la transparence sur les investissements qu'ils feraient dans l'immobilier au Pakistan. Pour cela, il existe deux interfaces principales : une application mobile pour les investisseurs, et un panel d'administration, pour les responsables de l'entreprise.",
          'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan.':
            "L'objectif est de permettre aux investisseurs d'avoir de la transparence sur les investissements qu'ils feraient dans l'immobilier au Pakistan.",
          'We were pleased with Falcon IT and the overall development process of our website. Our website has transformed the image of our firm and is the key introductory point for new and potential clients. Thanks for a job well done!':
            "Nous avons été satisfaits de Falcon IT et du processus de développement global de notre site Web. Notre site Web a transformé l'image de notre entreprise et est le point d'introduction clé pour les nouveaux clients et les clients potentiels. Merci pour un travail bien fait!",
          // Barber Shop
          'BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.':
            "BarberShop est conçu pour le salon de coiffure spécifique. Il s'agit de la plate-forme de connexion où le client peut réserver son rendez-vous via son mobile et le barbier permet aux clients de réserver sans intentions personnelles. Le client peut facilement réserver son rendez-vous sur la disponibilité du barbier. D'autre part, Barber peut facilement obtenir tous les horaires de réservation ou les détails des rendez-vous via son application mobile.",
          // Excellence
          'Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site.':
            "Excellence Mode est une chaîne de magasins de prêt-à-porter en France, avec plusieurs dizaines d'implantations dans toute la France. Afin de développer son image de marque et de développer son activité en ligne, l'entreprise souhaitait se doter d'un site e-commerce.",
          'We were pleased with Falcon IT and the overall development process of our website. Our website has transformed the image of our firm and is the key introductory point for new and potential clients. Thanks for a job well done!':
            "Nous avons été satisfaits de Falcon IT et du processus de développement global de notre site Web. Notre site Web a transformé l'image de notre entreprise et est le point d'introduction clé pour les nouveaux clients et les clients potentiels. Merci pour un travail bien fait!",
          'In order to develop A French-based ready-to-wear store chain, its brand image, and its online activity, the company wanted to have an e-commerce site. The website was developed on .NET and was complete in 4 months from April 2022 to July 2022':
            "Afin de développer une chaîne de magasins de prêt-à-porter basée en France, son image de marque et son activité en ligne, l'entreprise souhaitait se doter d'un site e-commerce. Le site Web a été développé sur .NET et a été achevé en 4 mois d'avril 2022 à juillet 2022",
          'It is a distinct pleasure for me to recommend falcon IT to all interested parties.They have been professional, comprehensive, and competent throughout the process of working together. We have established a relationship with them for years to come.':
            "C'est un réel plaisir pour moi de recommander falcon IT à toutes les parties intéressées. Ils ont été professionnels, compréhensifs et compétents tout au long du processus de collaboration. Nous avons établi une relation avec eux pour les années à venir.",
          // Fireman

          'Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file. Fireman including following modules:':
            "Fireman est le système de gestion et de génération de rapports pour les pompiers. Les commissions de sécurité visitent les établissements recevant du public et conseillent le maire pour la continuité de l'activité. Chaque visite ou étude donne lieu à un rapport. Les pompiers créent/modifient le dossier selon la visite ou la catégorie d'étude. Le directeur de groupe/directeur de service valide ce dossier. Pompier comprenant les modules suivants :",
          // Sindoor
          'Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding. The User and vendors can communicate through App. The user and vendor have send and receive quotes then validate quotes on App.':
            "Application de mariage reliant les utilisateurs et les fournisseurs Plate-forme permettant de connecter les utilisateurs aux fournisseurs de mariage. Les personnes qui souhaitaient se marier peuvent facilement trouver des fournisseurs pour leur mariage. L'utilisateur et les fournisseurs peuvent communiquer via App. L'utilisateur et le fournisseur doivent envoyer et recevoir des devis, puis valider les devis sur l'application.",
          // Yuwway
          "Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs.":
            "Yuwway est un moteur de recherche qui compare les tarifs pour tous les types de transport (Taxi/VTC/Moto-taxi, etc.) permettant, en une simple recherche, d'accéder à tous les tarifs disponibles et correspondant aux besoins du client.",
          // Register-RH
          'This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.':
            "Ce système offre des fonctionnalités complètes pour gérer le personnel, les documents qui s'y rapportent et leur statut. On peut également gérer les documents d'évaluation des risques de l'entreprise. Cette application est capable de gérer plusieurs entreprises, leurs succursales et leurs employés ainsi que le transfert d'employés d'une succursale à une autre.",
          //  Facility Management
          'This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status.':
            "Il s'agit de la plate-forme de gestion des immeubles de bureaux. Il est similaire au tableau de bord de type Trello, affichant les tickets et leur statut.",
          // Blog Article
          // Remote Team

          'What is a Remote Team?': 'Le télétravail',
          'Many people fail to understand what a remote team really is. A remote team is a group of experienced workers who belong to different time zones, harbors different skills and different values, all working together for one purpose. Each of the workers works from a specific location and operates across time and space. There is a significant distinction between employees working inside the office and those who are not bound to a particular building.':
            "Une équipe à distance est un groupe de travailleurs plus ou moins expérimentés qui peuvent appartenir à des fuseaux horaires différents, qui ont des compétences et des valeurs différentes et qui travaillent tous ensemble dans un seul but. Chacun des travailleurs travaille à partir d'un endroit spécifique et opère dans le temps et l'espace. Il existe une distinction importante entre les employés qui travaillent à l'intérieur du bureau et ceux qui ne sont pas liés à un bâtiment particulier.",
          'Obstacles in managing a Remote Team': "Obstacles à la gestion d'une équipe distante",
          'There are a lot of difficulties in supervising a remote team which has been listed below:':
            "La supervision d'une équipe à distance présente de nombreuses difficultés qui ont été énumérées ci-dessous :",
          'Lack of Communication': 'Manque de communication',
          "Adequate, if not excellent, communication is one of the vital ingredients in managing a remote team. It is crucial to gain input from all workers and to be aware of the progress of the tasks they have been working on. However, when workers are working remotely, it's hard to obtain such a quality of communication. Different time zones often lead to employees receiving messages, not on time which negatively affects their performance. Moreover, lack of compliance with the established working hours by the worker also affects timely communication. Lastly, due to the difference in time zones and schedules, making video meetings and phone calls often becomes a burdensome task.":
            "Une communication excellente, est l'un des ingrédients essentiels à la gestion d'une équipe à distance. Il est essentiel de bénéficier de la contribution de tous les travailleurs et d'être au courant de l'avancement des tâches sur lesquelles ils ont travaillé. Cependant, lorsque l’équipe est éparpillée dans le monde, cela représente un grand challenge. Les différents fuseaux horaires font que les employés reçoivent parfois des messages hors heure de travail, ce qui affecte négativement leurs performances. Aussi, il peut y avoir des incompréhensions par rapport aux tâches à effectuer, et le collaborateur peut parfois manquer de la vision globale du projet.",
          'Solution:': 'Solution:',
          'Email alone is inadequate. Telecommuters profit by having a "more extravagant" innovation, for example, video conferencing, that gives members a significant number of the viewable signals that they would have on the off chance that they were vis-à-vis. Visual prompts take into account expanded "common information" about colleagues and furthermore help lessen the feeling of disconnection among groups. Video is likewise especially helpful for mind-boggling or touchy discussions, as it feels closer to home than composed or sound just correspondence.':
            "Le courrier électronique seul est insuffisant. Les télé-travailleurs profitent maintenant de nouveaux outils, comme par exemple la vidéoconférence, qui donne aux membres un nombre important de signaux visibles qu'ils auraient au cas où ils seraient en collaboration avec un autre membre. Les discussion vidéos contribuent à réduire le sentiment de déconnexion entre les groupes. De même, la vidéo est particulièrement utile pour les discussions plus délicates, car elle donne l'impression d'être plus proche de l’équipe que les e-mails ou les appels téléphoniques.",
          'Moreover, as long as you can adopt a two-way communication system, your remote workers would not feel isolated. In addition, regular one on one meetings should be held since it is troublesome to choose a time that would be suitable for all workers':
            'Tant que vous pouvez adopter un système de communication varié (écrit, audio ou vidéo), vos travailleurs à distance ne se sentiront pas isolés. N’hésitez pas à faire des petits points réguliers avec vos collaborateurs par téléphone, afin de vous assurer que tout va bien et qu’ils ont bien compris les instructions.',
          'Inability to monitor worker’s progress':
            'Incapacité à suivre les progrès du collaborateur',

          'Since it is an arduous task to scrutinize how much and at what pace is your worker accomplishing his tasks, It is not that easy to track your employee’s progress especially when they are working thousands of miles away from you. You cannot possibly know when your employee is being underutilized without a comprehension of their capability and this lack of visibility and control can lead to poor management.':
            "Comme il est difficile d'examiner dans quelle mesure et à quel rythme votre employé accomplit ses tâches, il n'est pas si facile de suivre les progrès de votre employé, surtout lorsqu'il travaille à des milliers de kilomètres de chez vous. Vous ne pouvez pas savoir si votre employé est en sous-régime sans comprendre ses capacités et ce manque de visibilité et de contrôle peut conduire à une mauvaise gestion. Voir pire, à du micro-management !",
          'Various measures need to employ in order to monitor your employees’ productivity. Such actions may include creating merits that define how much work is to be completed per day. Moreover, clear roles and responsibilities should be detailed, along with the discussions with the workers about specific goals in a project to keep them accountable. Most importantly, the progress of remote workers should be monitored according to the same criteria that apply to office workers.':
            "Diverses mesures doivent être prises pour vous assurer de la productivité de vos employés. Ces mesures peuvent inclure la création de tâches qui définissent la quantité de travail à accomplir par jour. En outre, il convient de définir clairement les rôles et les responsabilités pour chaque tâche, et de discuter avec les travailleurs des objectifs spécifiques d'un projet afin de les responsabiliser. Plus important encore, les progrès des travailleurs à distance devraient être suivis selon les mêmes critères que ceux qui s'appliquent aux employés de bureau. Il existe de nos jours des outils de management de projet efficaces, afin de travailler de façon synchronisée. Chez Falcon Consulting, nous utilisons Freedcamp, qui correspond pleinement à nos attentes.",
          'Cultivating Corporate Culture': "Cultiver la culture d'entreprise",
          'Cultivating the right corporate culture is a demanding task. It involves hiring the right employees, adopting a good mode of communication, and diffusing this culture across the board. In an office, the company culture is already shaped which is not the case with remote teams where you have to develop a professional, working culture with concentrated effort. It should be kept in mind that such culture should reflect your team’s purpose and values.':
            "Cultiver la bonne culture d'entreprise est une tâche exigeante.  Il s'agit d'embaucher les bons employés, d'adopter un bon mode de communication et de diffuser cette culture dans l'ensemble de l'entreprise. Dans un bureau, la culture d'entreprise est déjà façonnée, ce qui n'est pas le cas des équipes à distance où il faut développer une culture professionnelle et de travail en concentrant les efforts. Il faut garder à l'esprit que cette culture doit refléter l'objectif et les valeurs de votre équipe.",

          'Creating such a culture requires a carefully structured plan in which the manager will deliver his rules and regulations to the workers along with the expectations that they would be required to fulfill. In addition, the plan would also discuss the modes of interactions between the manager and the worker along with other policies of the company':
            "La création d'une telle culture nécessite un plan soigneusement structuré dans lequel le responsable fera connaître ses règles et règlements aux travailleurs, ainsi que les attentes qu'ils devront satisfaire. Aussi, le plan doit également aborder les modes d'interaction entre le directeur et le travailleur ainsi que d'autres politiques de l'entreprise",
          'Cultural Difference': 'Différence culturelle',
          'As this system of work is global, different employees have different values, boundaries, and attitude towards their work. Managing people of different ethnic groups and embracing cultural diversity is a complicated project since they have different work ethics, behaviors, and expectations. Managers often fail to understand or appreciate their worker’s cultural background which leads to conflicts that threaten the team’s unity.':
            "Comme ce système de travail est mondial, les différents employés ont des valeurs, des limites et une attitude différentes vis-à-vis de leur travail. Gérer des personnes de différents groupes ethniques et embrasser la diversité culturelle est un projet compliqué car elles ont des éthiques, des comportements et des attentes différentes en matière de travail. Parfois, les managers ne comprennent pas ou n'apprécient pas les origines culturelles de leurs employés, ce qui entraîne des conflits qui menacent l'unité de l'équipe.",
          'Managers should acquire adequate knowledge about their worker’s cultural background and associated values and should work with them accordingly. They should be open to feedback and constructive criticism as well as promote a mindset of accepting differences and respecting every cultural aspect.':
            "Les managers devraient acquérir une connaissance adéquate du contexte culturel de leur travailleur et des valeurs qui y sont associées et devraient travailler avec eux en conséquence. Ils devraient être ouverts aux retours d'information et aux critiques constructives et promouvoir un état d'esprit d'acceptation des différences et de respect de tous les aspects culturels.",
          'Obtaining Team’s Trust': "Obtenir la confiance de l'équipe",
          "There is sometimes a mutual distrust between the employee and the company. While the Managers stress that representatives won't fill in as hard or as productivity, the employee is anxious about whether he will be timely paid. Moreover. Many employees struggle with diminished access to administrative help and correspondence. Sometimes, the workers feel that remote directors are withdrawn from their necessities, and along these lines are neither steady nor accommodating in completing their work.":
            "Il existe parfois une méfiance mutuelle entre le salarié et l'entreprise. Alors que les dirigeants soulignent que les managers ne rempliront pas leurs fonctions avec autant d'ardeur ou de productivité, l'employé s'inquiète de savoir s'il sera payé à temps. De plus, les nombreux employés se débattent avec un accès réduit à l'aide administrative et à la correspondance. Parfois, les travailleurs ont l'impression que les directeurs éloignés sont retirés de leurs besoins et, de ce fait, ne sont ni stables ni accommodants dans l'accomplissement de leur travail.",
          'Being transparent can develop trust between the employees and the manager. Transparency should be applied to:':
            'La transparence permet de développer une confiance entre les employés et le directeur. La transparence doit être appliquée en précisant :',
          'Expectations regarding the task': 'Les attentes par rapport aux tâches allouées;',
          'Pay rate and schedule': 'Calendrier des paies',
          'Working Hours': 'Heures de travail',
          'Status update regarding the task':
            'Transmission régulière d’informations stratégiques liés à l’entreprise',

          'Moreover, unexpected questions regarding the project should be answered promptly and workers should be provided with any kind of help.':
            "Aussi, les questions inattendues concernant le projet doivent recevoir une réponse rapide et les travailleurs doivent recevoir toute forme d'aide.",
          'As we can see, there are many challenges in managing a remote team. However, such issues can be easily resolved by taking appropriate, timely measures that would make the remote industry even more common across the globe.':
            "Comme nous pouvons le constater, la gestion d'une équipe à distance présente de nombreux défis. Cependant, ces problèmes peuvent être facilement résolus en prenant des mesures appropriées et opportunes. N’hésitez pas à les mettre en place, sachant que le travaille à distance deviendra probablement une pratique courante dans les années à venir.",
          // business website
          'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.':
            "Nous vivons dans un monde numérique où tout le monde dispose de téléphones portables avec Internet. La plupart des consommateurs utiliseront leurs appareils électroniques pour rechercher en ligne des informations qui les aideront à prendre une décision d'achat plus judicieuse. En fait, selon une enquête, 88 % des consommateurs recherchent des informations en ligne sur un produit avant de l'acheter. Par conséquent, si votre entreprise ne dispose pas d'un site web, vous perdez probablement beaucoup de clients et d'opportunités. De nos jours, le site web d'une entreprise sert de colonne vertébrale à l'entreprise car il attire de nouveaux clients et peut être utilisé pour employer différentes stratégies de marketing afin de développer votre entreprise. Nous examinerons ci-dessous le rôle d'un site web dans la stimulation de vos ventes et la croissance de votre entreprise.",
          'Enables Online Marketing:': 'Marketing en ligne :',
          'If you have a business website you can use any online strategy to market your business and attract potential customers. This will help you in expanding your business. There are a lot of marketing strategies, you can use any depending upon the type of your business but for that, you need to have a business website first. You can easily use your website to attract new customers through social media marketing. You can use third-party social media to promote your business but you need to have a place where you can direct your potential customer so that they can learn about your business. When the potential customer comes to your website he will look at your products and possibly buy them. Hence you need a website to utilize online marketing strategies.':
            "Si vous avez un site web, vous pouvez utiliser n'importe quelle stratégie en ligne pour commercialiser votre entreprise et attirer des clients potentiels et cela vous aidera à développer votre entreprise. Vous pouvez facilement utiliser votre site web pour attirer de nouveaux clients grâce au marketing via les réseaux sociaux, tels que Facebook ou Instagram. Vous pouvez utiliser des médias sociaux tiers pour promouvoir votre entreprise, mais vous devez disposer d'un endroit où vous pouvez diriger votre client potentiel afin qu'il puisse s'informer sur votre entreprise. Lorsque le client potentiel se rendra sur votre site web, il regardera vos produits et les achètera éventuellement. Le site web permet de montrer de façon exclusive les qualités et le savoir faire de votre entreprise",
          'Increase in sales and revenue:': 'Augmentation des ventes et des revenus :',
          'Your website will give an introduction to your products and business. As said earlier people will most likely look up your company or business before even entertaining the idea of buying your product. If you have a business website then it will be easy for your customers to find all the information about the products you sell. Your business website will house all the content about your business to engage your audience and convince them to buy your products or services etc. This will lead to an increase in revenue.':
            "Votre site web présentera vos produits et votre entreprise. Comme nous l'avons dit précédemment, les gens consulteront très probablement votre entreprise avant même d'envisager d'acheter votre produit. Si vous avez un site web d'entreprise, vos clients pourront facilement trouver toutes les informations sur les produits que vous vendez. Le site web de votre entreprise hébergera tout le contenu concernant votre entreprise afin d'attirer votre public et de le convaincre d'acheter vos produits ou services, etc. Cela entraînera une augmentation des recettes.",
          'You can allow your customers to shop online from your website. This can boost your sales dramatically. These days people prefer to roam the internet and buy products from their homes. Smart businessmen realize this and give people the option to buy their products directly from their business website. This will increase the possibility of sales.':
            "Vous pouvez permettre à vos clients de faire des achats en ligne à partir de votre site web. Cela peut augmenter considérablement vos ventes. De nos jours, les gens préfèrent naviguer sur l'internet et acheter des produits depuis leur domicile. Les hommes d'affaires intelligents en sont conscients et donnent aux gens la possibilité d'acheter leurs produits directement sur le site web de leur entreprise.",
          'As said earlier your website has wide access which means it can reach more customers. The more people visit your website, the more opportunities you have to make a sale. Plus your shop cannot remain open 24/7 but your website can be accessed 24/7 that again could lead to an increase in your sales as your product can be sold through your website during any time of the day.':
            "Un autre avantage est que votre site web est accessible à un large public, ce qui signifie qu'il peut toucher un plus grand nombre de clients. Plus les gens visitent votre site web, plus vous avez de possibilités de réaliser des ventes. De plus, votre magasin ne peut pas rester ouvert 24 heures sur 24, 7 jours sur 7, mais votre site web est accessible 24 heures sur 24, 7 jours sur 7, ce qui pourrait à nouveau entraîner une augmentation de vos ventes, puisque votre produit peut être vendu par l'intermédiaire de votre site web à tout moment de la journée.",
          'Establishing Credibility': 'Établir la crédibilité',
          'A business website also brings credibility to your business. People usually look at the business with no websites as sketchy and less trust-worthy. You might be wondering how can a website bring credibility to your business. Well, most websites have review sections where the customers write reviews about your products or services. A consumer is 40% more likely to buy your product if they read positive reviews about your business.':
            "Un site web d'entreprise apporte également de la crédibilité à votre entreprise. Les gens considèrent généralement que les entreprises qui n'ont pas de site web sont plus sommaires et moins dignes de confiance. Vous vous demandez peut-être comment un site web peut apporter de la crédibilité à votre entreprise. Un design soigné, avec des images de qualité permettent de montrer que vous consacrez du temps à votre image de marque. Aussi, la plupart des sites web ont des sections où les clients rédigent des commentaires sur vos produits ou services. Un consommateur a 40 % de chances supplémentaires d'acheter votre produit s'il lit des avis positifs sur votre entreprise.",
          'You can also bring credibility to your website by publishing educational and well-researched material. It will let your customers know that you know what you are talking about and what you are selling. This will increase the chances of purchase by a customer.':
            "Vous pouvez également apporter de la crédibilité à votre site web en publiant du matériel éducatif et bien documenté. Vos clients sauront ainsi que vous savez de quoi vous parlez et ce que vous vendez. Cela augmentera les chances d'achat d'un client.",
          'Distinguish yourself through your website:': 'Distinguez-vous grâce à votre site web :',
          'You can also use your website to be different from your competitors in the market. You can uniquely design your website and catch the attention of potential customers. In the crowded market, it is necessary to set yourself apart to get the attention of people. Use your website to establish yourself as different from others in the market and gain new customers every day.':
            "Vous pouvez également utiliser votre site web pour vous distinguer de vos concurrents sur le marché. Vous pouvez concevoir votre site de manière unique et attirer l'attention de clients potentiels. Sur un marché très fréquenté, il est nécessaire de se démarquer pour attirer l'attention des gens. Utilisez votre site web pour vous distinguer des autres sur le marché et gagner de nouveaux clients chaque jour.",
          'Around the clock availability:': 'Disponibilité 24 heures sur 24 :',
          'We have discussed this briefly before but it’s worth mentioning again that a website ensures around the clock availability of your services. You might be sleeping in your home but a customer might be buying products from your website while you sleep. So your website keeps working 24/7 to attract new customers and sell them your products. It acts like a digital salesperson who is working all day. It attracts customers, provides them the information, shows them reviews, convinces them to buy and collects payment from them. This leads to an increase in sales and revenue.':
            "Nous en avons déjà parlé brièvement, mais il convient de mentionner à nouveau qu'un site web assure la disponibilité de vos services 24 heures sur 24. Vous pouvez dormir chez vous, mais un client peut acheter des produits sur votre site web pendant que vous dormez. Votre site web fonctionne donc 24 heures sur 24, 7 jours sur 7, pour attirer de nouveaux clients et leur vendre vos produits. Il agit comme un vendeur numérique qui travaille toute la journée. Il attire les clients, leur fournit des informations, leur montre des critiques, les convainc d'acheter et encaisse leur paiement. Cela entraîne une augmentation des ventes et des revenus.",
          'Professional Image': 'Image professionnelle',
          'Your business website gives your brand or company a professional image. If your website is easy to navigate, has an attractive design, and helpful content, it will give the customer a very professional image of your business and they will seriously consider buying from you.':
            "Le site web de votre entreprise donne à votre marque ou à votre société une image professionnelle. Si votre site web est facile à parcourir, a un design attrayant et un contenu utile, il donnera aux clients une image très professionnelle de votre entreprise et ils envisageront sérieusement d'acheter chez vous.",
          'Extremely Economical:': 'Très rentable',
          'The website has global access and the important thing is that setting it up will take next to nothing from your pocket. It’s very economical but it opens endless doors of possibilities for you to expand your business.':
            "Le site web a un accès mondial et l'important est que sa mise en place ne vous coûtera presque rien. C'est très économique, mais cela vous ouvre des portes infinies de possibilités pour développer votre entreprise.",
          'Wrapping Up:': 'Pour conclure :',
          'A business website provides you with endless possibilities to expand your business and increase your revenue. It does not matter if you run a restaurant or a brick and mortar business or sale makeup products, you need a website to engage the wider audience, provide them the information, show them reviews and convince them to buy your service or products. So what are you waiting for? Immediately set up your business website and explore the endless opportunities that come with it.':
            "Un site web d'entreprise vous offre des possibilités infinies pour développer votre entreprise et augmenter vos revenus. Peu importe que vous dirigiez un restaurant, un commerce physique ou que vous vendiez des produits de maquillage, vous avez besoin d'un site web pour toucher un public plus large, lui fournir des informations, lui montrer des critiques et le convaincre d'acheter votre service ou vos produits. Alors qu'attendez-vous ? Mettez immédiatement en place le site web de votre entreprise et explorez les possibilités infinies qui s'y rattachent.",

          // menu
          FR: 'EN',

          'Changer de langue en': 'Change the language to',
          Français: 'English',
          'WEB DEVELOPMENT': 'Développement Web',
          'APP DEVELOPMENT': 'Développement App mobiles',
          'MOBILE APPLICATION': 'Application mobile',
          'SOFTWARE DEVELOPMENT': 'Développement Logiciel',
          SOFTWARE: 'Logiciel',
          'ON DEMAND DEVELOPERS': 'Régie Informatique',
          'ON DEMAND': 'Régie Informatique',
          'UI/UX DEVELOPMENT': 'Développement UI/UX',
          'MOBILE APP DEVELOPMENT': "DÉVELOPPEMENT D'APPLICATIONS MOBILES",
          'APP UI DESIGN': "CONCEPTION DE L'UI DE L'APPLICATION",
          'COLOR THEME': 'THÈME DE COULEUR',
          'We Use our own and third-party cookies to personalize content and to analyze web traffic.':
            'Nous utilisons nos propres cookies et ceux de tiers pour personnaliser le contenu et analyser le trafic Web.',
          'Read more about cookies': 'En savoir plus sur les cookies',
          Agree: 'Accepter',
          Decline: 'Refuser',
          // title
          'FalconIT : Expert Software Engineers':
            'Falcon Consulting : Agence de développement informatique',

          //Home
          // Home_Header
          'WE PROVIDE GREAT SERVICES AT THE BEST PRICE.': "L'EXCELLENCE À TOUT PRIX",
          'Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners. ':
            'Développement d’applications web, mobiles, et entreprises pour les startups et grandes entreprises.',
          'GET A FREE QUOTE': 'OBTENIR UN DEVIS GRATUIT',

          //   service Provided section
          'We can extend your technical teams with our technical resources according to your needs.':
            'Nous pouvons étendre vos équipes techniques avec nos ressources techniques selon vos besoins.',
          'Our Data teams will make your data an asset and a strength for your company.':
            'Nos équipes Data feront de vos données un atout et une force pour votre entreprise.',
          'Our teams of designers are at your disposal to make your ideas shine and illustrate your projects with high-quality models.':
            'Nos équipes de designers sont à votre écoute pour faire briller vos idées et illustrer vos projets par des maquettes de haute qualité.',
          'Our teams of software engineers have the expertise to develop successful software adapted to the various trades.':
            "Nos équipes d'ingénieurs logiciel ont l'expertise pour développer des logiciels aboutis et adaptés aux différents métiers.",
          'Our web teams are always at the forefront of technology for both the front end and the back end.':
            'Nos équipes web sont toujours à la pointe de la technologie aussi bien pour le front end que pour le back end.',
          'Our aim provide better service': 'Notre objectif, vous fournir le meilleur service',

          'We are a multi-talented web development company.':
            'Nous sommes une société de développement Web aux multiples talents.',
          'Mobile applications are now essential and allow you.':
            'Nos équipes techniques spécialisées dans le développement mobile peuvent développer applications hybrides ou natives pour adapter vos projets aux besoins clients.',
          'Our technical teams specialized in mobile development can develop hybrid or native applications to adapt your projects to customer needs.':
            'Nos équipes techniques spécialisées dans le développement mobile peuvent développer applications hybrides ou natives pour adapter vos projets aux besoins clients.',
          'MOBILE DEVELOPMENT': 'DÉVELOPPEMENT MOBILE',
          'WEB DEVELOPERS': 'DÉVELOPPEMENT WEB',
          'SOFTWARE DEVELOPERS': 'DÉVELOPPEMENT LOGICIEL',
          'UI/UX DEVELOPMENT': 'Développement UI/UX',
          // 'Data Engineering': 'Ingénierie des données',
          'ON-DEMAND DEVELOPERS': 'Régie Informatique​',

          'EXCEED YOUR EXPECTATION': 'NOTRE OBJECTIF : LA SATISFACTION CLIENT',
          'Services We Provide': 'Nos Services​',
          'Mobile Application Development': "Développement d'applications mobiles",
          'Website Development': 'Développement de site Web',
          'Software Development': 'Développement de logiciels',
          'On Demand Developers': 'Régie Informatique​',
          'UI/UX Development': 'Développement UI/UX',
          'Get Details': 'Plus de détails',

          //   latest projects section
          'EACH PROJECT IS A NEW CHALLENGE': 'CHAQUE PROJET EST UN NOUVEAU DÉFI',
          'Latest Projects': 'Nos derniers projets',
          'Years of Excellence': "Années d'expertise",
          'Project Completed': 'Projets terminés',
          'Customer Satisfied': 'Clients Satisfaits',
          'View More': 'Voir plus',
          'Client Details': 'Détails du client',
          'Clients Satisfied': 'Clients satisfaits',

          //   aboutus Section
          'your work is our priority': 'Votre projet est notre priorité',
          'Why choose Falcon Consulting?': 'Pourquoi choisir Falcon Consulting ?',
          'Years of Experience': "Années d'expertise",
          'Number of Employees': "Nombre d'employés",
          'Successfull Projects': 'Projets réussis',
          'Number of Offices': 'Nombre de bureaux',
          'External Tools Built': 'Outils externes construits',
          'Improvement and Customer focused': 'Amélioration continue et satisfaction client',
          'We believe that talent and skills do not have borders':
            "Nous sommes convaincus que le talent et les compétences n'ont pas de frontières",
          'We are a human-oriented company, investing in training healthy atmosphere and cooperative management to make sure our employees reach their full potential, and personally develop through their work. Our team is sensitized every day about the importance of quality management, and we strive to put in place a continuous improvement process internally':
            "Falcon Consulting est axée sur l'humain, permettant à ses collaborateurs de travailler dans un environnement sain, afin qu'ils atteignent leur plein potentiel et se développent personnellement grâce à leur travail. Notre équipe est sensibilisée chaque jour à l'importance de la gestion de la qualité, et nous nous efforçons de mettre en place une démarche d'amélioration continue pour nos partenaires.",
          'READ MORE': 'LIRE LA SUITE',
          'More About Our Company': 'En savoir plus sur notre entreprise',

          //   partners section
          'SINCERELY YOURS': 'À VOTRE SERVICE',
          'Some Amazing Partners We Work With': 'Quelques partenaires',

          // review section
          'your feedback matters': "Vos retours d'expérience nous permettent de grandir",
          'Client Reviews': 'Avis clients',
          'We were looking for a team who could take on our project and finish the job, Falcon IT Consulting Completed all work as asked. Gladly I found them':
            'Nous recherchions une équipe qui pourrait prendre en charge notre projet et terminer le travail, Falcon IT Consulting a terminé tous les travaux comme demandé. Avec plaisir je les ai trouvé',
          'Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure':
            "Falcon Consulting était un plaisir de travailler avec. L'équipe de développement d'applications mobiles maîtrise très bien React et React Native, garantissant une livraison et un dévouement rapides. Je les considérerai pour l'avenir à coup sûr",
          'They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!':
            "Ils ont une très bonne équipe de développement. Réactif et fiable. Nous travaillons avec eux sur d'autres projets. Hautement recommandé!",
          'We had a problem with our AWS configuration and suddenly all our apps and websites shut down. We were in a panic and Falcon IT Consulting came to our rescue. They did a terrific job and quickly got our apps and websites up and running again. Their team is clear in communications and very responsive. We really enjoyed working with them':
            'Nous avons eu un problème avec notre configuration AWS et soudainement toutes nos applications et nos sites Web se sont arrêtés. Nous étions en panique et Falcon IT Consulting est venu à notre secours. Ils ont fait un travail formidable et ont rapidement remis en marche nos applications et nos sites Web. Leur équipe est claire dans les communications et très réactive. Nous avons vraiment apprécié travailler avec eux',
          'Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you':
            "Falcon Consulting a fait un excellent travail. Je suis heureux de travailler avec eux. Ils ont de grandes compétences dans la pile MERN. N'étant pas si féru de technologie, j'avais mes propres défis, mais leur équipe commerciale m'a aidé à chaque étape du voyage. J'espère que nous travaillerons très bientôt dans un avenir proche. Merci",

          'Mobile application for EdTech': 'Application mobile pour EdTech',
          'Amazon API Gateway Migration': "Migration de passerelle d'API Amazon",
          'Mobile application for Parental Control': 'Application mobile pour le contrôle parental',
          'Amazon Web Services Server Configurations':
            'Configurations du serveur Amazon Web Services',
          'Web application Development for Travel Agency':
            "Développement d'applications Web pour agence de voyage",

          //   blog section
          'Managing a Remote Team': 'Manager une équipe en télétravail',
          'Why having a business website is necessary ?':
            'Site professionnel : votre identité digitale',

          'Published on': 'Ecrit le',

          'In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles.':
            "Dans le passé, il était facile de gérer une équipe d'employés qui ne travaillaient pas à des milliers de kilomètres de chez soi. Aujourd'hui, les entreprises adoptent la tendance à l'éloignement en employant des travailleurs qualifiés aux quatre coins du monde. Naturellement, le manager est responsable non seulement de la gestion de l'équipe d'employés, mais aussi de la formation, de l'encouragement et du soutien de cette équipe. Cette responsabilité n'est pas toujours aussi simple. C'est pourquoi nous allons discuter ici des défis potentiels de la gestion d'une équipe à distance et de la manière de surmonter ces obstacles.",
          'We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business.':
            "Nous vivons dans un monde numérique où tout le monde dispose de téléphones portables avec Internet. La plupart des consommateurs utiliseront leurs appareils électroniques pour rechercher en ligne des informations qui les aideront à prendre une décision d'achat plus judicieuse. En fait, selon une enquête, 88 % des consommateurs recherchent des informations en ligne sur un produit avant de l'acheter. Par conséquent, si votre entreprise ne dispose pas d'un site web, vous perdez probablement beaucoup de clients et d'opportunités. De nos jours, le site web d'une entreprise sert de colonne vertébrale à l'entreprise car il attire de nouveaux clients et peut être utilisé pour employer différentes stratégies de marketing afin de développer votre entreprise. Nous examinerons ci-dessous le rôle d'un site web dans la stimulation de vos ventes et la croissance de votre entreprise.",

          'With lots of unique blogs': 'La soif de connaissance',
          'Read our blog': 'Lire notre blog',
          'A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021':
            "Une tradition des Fêtes : les prolongations d'impôt devraient expirer à la fin de 2021",
          'What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?':
            'Que signifient les règles fiscales minimales mondiales pour les politiques fiscales des entreprises ?',
          'June 13th 2022': '13 juin 2022',
          // Our Clients
          'Our Clients': 'Nos clients',
          'Application Web conçue pour aider les clients souhaitant des coutures personnalisées àrec...':
            'Application Web conçue pour aider les clients souhaitant des coutures personnalisées àrec...',
          // contact us
          // Validation Messages
          'Name is required': 'Le nom est requis',
          'Name is too short (minimum is 3 characters)':
            'Le nom est trop court (le minimum est de 3 caractères)',
          'Phone is required': 'Le téléphone est requis',
          'Phone number must be atleast 10 digits long':
            'Le numéro de téléphone doit comporter au moins 10 chiffres',
          'Company is required': 'La société est requise',
          'Email is required': "L'e-mail est requis",
          'Email must be in this format (name@domain.com)':
            "L'e-mail doit être dans ce format (nom@domaine.com)",
          'Message is required': 'Un message est requis',
          // 'Name is required': 'french',

          //labels
          'My name is': 'Mon nom est',
          'My phone number is': 'Mon numéro de téléphone est',
          'I work at': 'je travaille à',
          'Reach me at': 'Contactez-moi au',
          Message: 'Message',
          //placeholders
          'Your name': 'Votre nom',
          'Your phone number': 'Votre numéro de téléphone',
          'Your company': 'Votre entreprise',
          'name@email.com': 'nom@email.com',
          'Start typing here...': 'Commencez à taper ici...',
          //
          or: 'ou',
          'Thank you': 'Merci',
          'Your message has been sent successfully. Our Team Member will get back to you within 24 hours.':
            "Votre message a été envoyé avec succès. Notre membre de l'équipe vous répondra dans les 24 heures.",
          // background Text
          Share: 'Partager',
          Your: 'Ton',
          Project: 'Projet',
          Idea: 'Idée',
          with: 'avec',
          'us!': 'nous!',
          //
          Submit: 'Soumettre',
          'Submit another': 'Soumettez un autre',

          'Contact Us': 'Nous contacter',
          'Share Your Project/Idea with us!': 'Partagez votre projet avec nous !',
          'Our Team Member will get back to you within 24 hours.':
            'Un collaborateur vous répondra dans les 24 heures.',

          'Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours.':
            "Vous avez des questions sur un projet concret ? Ou voulez-vous simplement vous renseigner sur le développement offshore et voir s'il peut répondre à vos besoins ? Veuillez remplir le formulaire de contact et nous partagerons gratuitement notre expertise. Un collaborateur vous répondra dans les 24 heures.",
          'Schedule Meeting': 'Planifier une réunion',
          Email: 'Email​',
          'Your Name': 'Votre nom',
          Phone: 'Téléphone',
          Budget: 'Budget',
          'Type Your Message': 'Votre message',
          Send: 'Envoyer',
          'Click and join link': 'Cliquez',
          'Thank you, the information has been submitted successfully. We will come back to you shortly.':
            'Merci, les informations ont été soumises avec succès. Nous reviendrons vers vous sous peu.',
          'CLIENT FEEDBACK': 'RÉTROACTION DES CLIENTS',
          "Name can't be blank": 'Le nom ne peut pas être vide',
          'The name must be at least 2 characters': 'Le nom doit comporter au moins 2 caractères',
          "Email can't be blank": "L'e-mail ne peut pas être vide",
          'Not a Valid Email': 'Pas un e-mail valide',
          "Phone can't be blank": 'Le téléphone ne peut pas être vide',
          'Phone number should start with 0': 'Le numéro de téléphone doit commencer par 0',
          'The phone must be at least 10 characters':
            'Le téléphone doit comporter au moins 10 caractères',
          "Budget can't be blank": 'Le budget ne peut pas être vide',
          "Message can't be blank": 'Le message ne peut pas être vide',
          // validation changed
          'Please Enter Your Name': "S'il vous plaît entrez votre nom",
          'Please Enter Your Email': 'Veuillez saisir votre e-mail',
          'Please Enter Your Phone Number': 'Veuillez entrer votre numéro de téléphone',
          'Please Enter Your Budget': 'Veuillez entrer votre budget',
          'Please Enter A Message': 'Veuillez entrer un message',
          'Please Enter a Valid Email': 'Veuillez saisir un e-mail valide',

          //   footer
          Overview: 'Aperçu',
          Solutions: 'Solutions',
          'WHERE YOU CAN MEET': 'OÙ NOUS SOMMES',
          'Our Offices': 'Nos bureaux',
          'The services are provided at a flat rate, or according to a determined daily rate, based on your preference. In both cases, we guarantee you a quality service at a very competitive price.':
            'Les services sont fournis à un tarif forfaitaire, ou selon un tarif journalier déterminé, en fonction de votre préférence. Dans les deux cas, nous vous garantissons un service de qualité à un prix très compétitif.',
          Pages: 'Pages',
          About: 'À propos​',
          Services: 'Services',
          'Our Projects': 'Nos projets',
          Projects: 'Projets',
          'Our projects': 'Nos projets',
          'GO TO THE PROJECT': 'VOIR LE PROJET',
          'COLOR THEME & ILLUSTRATION': 'THÈME DE COULEUR ET ILLUSTRATION',
          'UI DESIGN': "CONCEPTION D'UI",
          'COLOR THEME AND DESIGN': 'THÈME DE COULEUR ET DESIGN',

          Contact: 'Contact',
          Privacy: 'Politique de Confidentialité',
          'Terms of Service': "Conditions d'utilisation",
          Cookies: 'Cookies',
          'All Rights Reserved': 'Tous droits réservés',
          'Web Development': 'Développement de site Web',
          'App Development': "Développement d'app mobiles",
          'Software Development': 'Développement de logiciels',
          'UI/UX Developmemt': 'Développement UI/UX',
          'Privacy Policy': 'Politique de confidentialité',

          //   About US
          //   About_Heaader
          'Our Goal Is To Exceed Your Expectations ': 'Notre objectif est de dépasser vos attentes',
          'Healthy, skilled and ambitious team': 'Une équipe saine, compétente et ambitieuse',

          //   About comapny Section
          'Trustful, skilled and ambitious team of developers, UI/UX designers, project managers and quality testers. Our aim is to build healthy partnerships with our clients, in which respect is the central value. Our main difference with other software houses is that we are committed to delivering the last mile, without any compromise.':
            'Équipe consciencieuse, compétente et ambitieuse composée de développeurs, de désigneur UI/UX, de chefs de projet et de manager de la qualité. Notre objectif est de développer des partenariats sains avec nos clients, dans lesquels le respect est la valeur centrale. Notre principale différence avec les autres agences informatiques est que nous nous engageons à réaliser le dernier kilomètre, sans aucun compromis.',
          'BEST company': 'Votre partenaire idéal',
          'About Falcon Consulting': 'À propos de Falcon Consulting',
          'Falcon Consulting is a development agency that specializes in web application development and consultancy in the field of new technologies. We combine rigor, quality of work and optimized production costs. Founded in 2015, Falcon Consulting started out as a consulting company which worked with large companies such as Microsoft, Canon and Accor. In 2017, Falcon Consulting took off and became a development agency, bringing together over 10 years of experience in application development and project management in its team. Established in France, United States and Pakistan, the company is providing development services worldwide.':
            "Falcon Consulting est une agence de développement spécialisée dans le développement d'applications web et le conseil dans le domaine des nouvelles technologies. Nous allions rigueur, qualité de travail et coûts de production optimisés. Fondée en 2015, Falcon Consulting a commencé comme une société de conseil qui a travaillé avec de grandes entreprises telles que Microsoft, Canon et Accor. En 2017, Falcon Consulting prend son envol et devient une agence de développement, rassemblant plus de 10 ans d'expérience dans le développement d'applications et la gestion de projets dans son équipe. Implantée en France, aux États-Unis, au Pakistan et aux UAE, la société fournit des services de développement dans le monde entier.",
          // Modern Agency Section
          'We Are A Modern IT Agency': 'Agence informatique moderne',
          'Accessible price, with no compromise on the Quality!':
            'Prix ​​accessible, sans compromis sur la Qualité !',
          'Office Locations': 'Pays',

          'Years of Excellence': "Années d'expertise",
          'Successfull Projects': 'Projets réussis',
          'Client satisfication': 'Satisfaction client',

          // our vision section
          'HEALTHY RELATIONSHIPS​': 'DES RELATIONS SAINES',
          'Our Vision': 'Notre vision',
          'We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work.':
            "Nous croyons fermement que le talent et les compétences n'ont pas de frontière. En offrant un excellent environnement de travail dans nos locaux, nous permettons à nos partenaires de bénéficier de prix compétitifs avec un travail qualitatif.",
          'IN-HOUSE TEAM': 'ÉQUIPE INTERNE',
          TECHNOLOGIES: 'TECHNOLOGIES',
          'USER-FOCUSED PROCESS': 'MEILLEUR EXPÉRIENCE UTILISATEUR',
          'SMOOTH COMMUNICATION': 'COMMUNICATION FLUIDE',
          "8 YEARS' EXPERIENCE": "8 ANS D'EXPÉRIENCE",
          'FULL FLEXIBILITY': 'FLEXIBILITÉ TOTALE',
          'HIGH QUALITY CODE': 'CODE DE HAUTE QUALITÉ',
          TRANSPARENCY: 'TRANSPARENCE',

          //   Blogs
          // Blog_Header
          'FALCON BLOG': 'BLOG FALCON',
          'Always looking into improving ourselves.':
            "La recherche de l'amélioration en permanence",

          'The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects.':
            'Les articles rédigés ci-dessous par notre équipe reflètent nos valeurs et notre expertise en matière de collaboration dans des projets de moyenne et grande envergure',
          'Your Email': 'Votre e-mail',
          SUBSCRIBE: "S'ABONNER",

          //   Our Projects
          // Projects_Header
          'ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!':
            'TOUS LES PROJETS COMMENCENT PAR UNE IDÉE SIMPLE LAISSEZ NOUS PRENDRE SOIN DU RESTE !',
          'Falcon Consulting had the opportunity to work on various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time.':
            "Falcon Consulting a eu l'opportunité de travailler sur différents types de projets pour ses clients. Nous avons mis en place un processus efficace afin de livrer un travail qualitatif dans les délais.",
          'ALL PROJECTS START BY A SIMPLE IDEA, LET US TAKE CARE OF THE REST!':
            'TOUS LES PROJETS COMMENCENT PAR UNE SIMPLE IDÉE. LAISSEZ NOUS PRENDRE SOIN DU RESTE !',
          'Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. ':
            "Falcon Consulting a eu l'opportunité de travailler sur différents types de projets pour ses clients. Nous avons mis en place un processus efficace afin de livrer un travail qualitatif dans les délais.",
          'Software house with a team of experienced developers and project managers':
            'Éditeur de logiciels avec une équipe de développeurs et de chefs de projet expérimentés',
          Software: 'Logiciel',
          SOFTWARE: 'Logiciel',
          Website: 'Site Internet',
          WEBSITE: 'Site Internet',
          All: 'Tout',
          ALL: 'Tout',
          'Mobile Application': 'Application mobile',
          'MOBILE APPLICATION': 'Application mobile',
          'UI/UX': 'UI/UX',
          'Data & Cloud': 'Data & Cloud',
          View: 'Voir',
          VIEW: 'VOIR',
          Construction: 'Construction',
          Education: 'Éducation',
          'Human Resources': 'Ressources humaines',
          Health: 'Santé',
          Gaming: 'Jeux',
          Transport: 'Le transport',
          Business: 'Entreprise',
          Fashion: 'Mode',
          Food: 'Aliments',
          Advertisement: 'Publicité',

          'What is ': "Qu'est-ce que",

          'See more': 'Voir plus',
          'Case Study': 'Étude de cas',

          //   Services
          // Services_Header
          'Skilled Developers for your Projects': "L'extension de votre équipe tech!",
          'We are ready to handle your ambitious projects!':
            'Nous sommes prêts à gérer vos projets ambitieux !',

          'Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !':
            "Avez-vous besoin de développeurs pour des tâches à court ou à long terme ? Notre approche tout compris vous permettra d'obtenir le meilleur match !",
          'More information': "Plus d'information",
          'Get This Service': 'Obtenir ce service',

          // key Features Section
          'Key features': 'Principales caractéristiques',
          'This sounds simple, but it is beneficial to your business success.':
            'La simplicité au service du succès de votre entreprise.',
          // "SMOOTH COMMUNICATION": "SMOOTH COMMUNICATION",
          TECHNOLOGIES: 'TECHNOLOGIES',
          'In-House Team': 'Équipe interne',
          'Product Development': 'Développement produits',
          'PRODUCT DEVELOPMENT': 'Développement produits',
          'FULL FLEXIBILITY': 'FLEXIBILITÉ TOTALE',
          'USER-FOCUSED PROCESS': "PROCESSUS AXÉ SUR L'UTILISATEUR",
          'Ux research': 'Meilleure expérience UX',
          'Many of these business ideas are home-based. While they may not make you a billionaire.':
            'Concrétisons vos projets.',

          // work Process Section
          "We solve clients' projects in a simple & efficient way":
            'Nous résolvons les projets de nos clients de manière simple et efficace',
          'We always follow the standard work process':
            'Nous suivons toujours les meilleurs pratiques.',

          'Project Requirement': 'Exigence du projet',
          Designing: 'Conception',
          Development: 'Développement',
          'Live Testing': 'Tests',
          'We do research and validate the specs before we start any projects':
            'Nous analysons et validons les spécifications avant de commencer tout projet',
          "Designed according to client's requirements": 'Conçu selon les exigences du client',
          'Developed by skilled team developers':
            'Développé par une équipe de développeurs qualifiés',
          'After completing the work, live test is done':
            'Une fois le travail terminé, des tests sont effectués',

          UX: 'UX',
          Wireframing: 'Maquetage',
          'UI Design': "Conception de l'interface utilisateur",
          'Design Review': 'Revue de la conception',
          'Then Wireframing according to requirements': 'Puis maquetage selon les besoins',
          'We do ux research before we start any projects':
            'Nous validons la meilleur expérience UX avant de commencer tout projet',

          // Our Deveopers Section
          'OUR DEVELOPERS ARE': 'NOS DÉVELOPPEURS SONT',
          'OUR DEVELOPERS FOR YOUR PROJECTS': 'NOS DÉVELOPPEURS POUR VOS PROJETS',
          Agile: 'Agile',
          Experienced: 'Expérimenté',
          Trained: 'Qualifié',
          'Dedicated to your projects': 'Dédié à vos projets',
          'We train them in agile management methods so that our partners can take full advantage of them':
            'Nous les formons au développement agile pour que une efficacité de collaboration optimale',
          'We are Flexible in the search for the ideal  profile and we can can offer you very experienced profiles':
            'Nous sommes flexibles dans la recherche du profil idéal et nous pouvons vous proposer des profils très expérimentés',
          'We train our developers ourselves by positioning them on internet internet project in order to ensure that we transmit to them the “soft skills” as well as the hard skills':
            "Nous formons nous-mêmes nos développeurs en les positionnant sur des projets interns afin d'assurer que nous leur transmettions aussi bien les compétences de savoir-faire que le savoir-être.",
          'Our developers work full-time on your projects and our collaborative tools guarantee Transparency regarding the progress of task':
            "Nos développeurs travaillent à plein temps sur vos projets et nos outils collaboratifs vous garantissent une transparence sur l'avancement des tâches",

          // developer work process
          "We solve clients' projects in a simple & efficient way":
            'Nous résolvons les projets de nos clients de manière simple et efficace',
          'We always follow the standard work process':
            'Nous suivons toujours les meilleurs pratiques.',

          'You need developer': "Vous avez besoin d'un développeur",
          "We organize a meeting in order to better understand your needs, as well as the ideal profile sought for your project. If your needs change during this process, don't panic: we take into account any last minute changes!":
            'Nous organisons une rencontre afin de mieux comprendre vos besoins, ainsi que le profil idéal recherché pour votre projet. Si vos besoins évoluent au cours de ce processus, pas de panique : nous prenons en compte tout changement de dernière minute !',
          'Targeting the ideal profile': 'Cibler le profil idéal',
          "For this step, it's up to us! Our HR team searches among a rich and talented pool of developers for the best profiles to offer. We organize HR and technical interviews with these developers, in order to pre-select the best candidates.":
            "Pour cette étape, c'est à nous ! Notre équipe RH recherche parmi un vivier riche et talentueux de développeurs les meilleurs profils à proposer. Nous organisons des entretiens RH et techniques avec ces développeurs, afin de présélectionner les meilleurs candidats.",
          'Proposal from developers': 'Proposition de développeurs',
          'We send you the profile of the pre-selected developers. You can then decide to carry out interviews with them, in order to confirm your choice. When you decide to do an interview with a developer, there is no commitment that binds you: keep your mind free!':
            "Nous vous envoyons le profil des développeurs présélectionnés. Vous pouvez alors décider de réaliser des entretiens avec eux, afin de confirmer votre choix. Lorsque vous décidez de faire un entretien avec un développeur, il n'y a aucun engagement : gardez l'esprit libre !",
          Recruitment: 'Recrutement',
          'Have you found your ideal profile? Congratulation ! We conclude the contract, which is without long-term commitment, so that you retain all your flexibility. The developer works directly on your projects, without going through us.':
            'Avez-vous trouvé votre profil idéal ? Félicitation ! Nous concluons le contrat, qui est sans engagement de temps, afin que vous conserviez toute votre flexibilité. Le développeur travaille directement sur vos projets, sans passer par nous.',
          'Continuous improvement': 'Amélioration continue',
          'We organize at a determined frequency points on our collaboration. The principle is to ensure that the collaboration is optimal, and to target the best potential points of improvement. Once identified, we offer, at our expense, adequate training for our developers in order to constantly increase the quality of the collaboration.':
            "Nous organisons à une fréquence déterminée des points sur notre collaboration. Le principe est de s'assurer que la collaboration est optimale, et de cibler les points d'amélioration potentiels. Une fois identifiés, nous proposons, à nos frais, des formations adéquats à nos développeurs afin d'augmenter constamment la qualité de la collaboration.",

          // Project Details Basic Modal
          // Tilt
          'Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.':
            "Plateforme web et mobile mettant en relation restaurants, entreprises et chauffeurs-livreurs pour des livraisons de repas en masse en Martinique. Ce concept malin permet à chaque client d'économiser sur les frais de livraison, car ils sont partagés entre tous ceux qui passent une commande.",
          'The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.':
            "Un système ingéieux permet aux client de commander des plats mixtes entre plusieurs restaurants d'un même quartier. Ensuite, les clients sont informés de l'état de la commande et peuvent enfin évaluer l'expérience globale.",
          'On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.':
            'Côté restaurant, il est possible de créer et de gérer un menu personnalisé, de voir toutes les commandes entrantes et de changer leur statut.',
          'On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. ':
            "Côté chauffeurs-livreurs, l'application indique les plats à emporter et à livrer, avec toutes les informations de localisation. Le livreur informe automatiquement les utilisateurs de l'avancement de la commande, avec des notifications-push.",
          'The client was happy with the work done, and he specially liked that as a non expert in IT, he told us what he wanted to achieve, and we always found the most efficient solution. Not only developers by experts, advising him on the best ways to build this platform':
            "Le client était content du travail effectué, et il aimait particulièrement qu'en tant que non expert en informatique, il nous dise ce qu'il voulait réaliser, et nous trouvions toujours la solution la plus efficace. Pas seulement des développeurs par des experts, le conseillant sur les meilleurs moyens de construire cette plateforme",
          'Web and mobile platform connecting restaurants, corporate customers, and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. The customers can order food with an ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.On the restaurant side, it is possible to create and manage a customized menu,see all the incoming orders, and change their status.On the delivery side, the application of the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications.':
            "Plateforme web et mobile mettant en relation restaurants, entreprises et chauffeurs-livreurs pour des livraisons de repas en vrac en Martinique. Ce concept intelligent permet à chaque client d'économiser sur les frais de livraison, car ils sont partagés entre tous ceux qui passent une commande. Les clients peuvent commander de la nourriture grâce à un système ingénieux permettant des plats mixtes entre plusieurs restaurants d'un même quartier. Ensuite, ils sont notifiés du statut de la commande, et ils peuvent noter l'expérience globale. Côté restaurant, il est possible de créer et de gérer un menu personnalisé, de voir toutes les commandes entrantes, et de modifier leur statut. Côté livraison , l'application des plats à emporter et à livrer,avec toutes les informations de localisation. Le livreur informe automatiquement les utilisateurs de l'avancement de la commande, avec des notifications push.",
          'Tilt is a French-based platform connecting restaurants with corporate customers. Its front end is developed on React and its back end is on Node JS and the project was completed in 6 months from January 2020 to May 2021':
            'Tilt est une plateforme basée en France qui met en relation des restaurants avec des entreprises clientes. Son front-end est développé sur React et son back-end est sur Node JS et le projet a été réalisé en 6 mois de janvier 2020 à mai 2021',
          'Falcon IT excels at turning your website dreams into reality. We are so proud of the work they have done for us that we have already recommended them to many of Our partners and we are very thankful to them.':
            "Falcon IT excelle à transformer vos rêves de site Web en réalité. Nous sommes tellement fiers du travail qu'ils ont accompli pour nous que nous les avons déjà recommandés à plusieurs de nos partenaires et nous leur en sommes très reconnaissants.",
          'Tilt is a French-based platform connecting restaurants with corporate customers. Its front end is developed on React and its back end is on Node JS and the project was completed in 5 months.':
            'Tilt est une plateforme basée en France qui met en relation des restaurants avec des entreprises clientes. Son front-end est développé sur React et son back-end sur Node JS et le projet a été réalisé en 5 mois.',
          // Issyne
          'Mobile platform for connecting students and teachers. It is an application that stands out for its ability to get in touch with teachers instantly., based on the availabilities. This application has an internal messaging system, with all the features such as sending multimedia files, sending voice messages, etc...':
            "Plate-forme mobile pour connecter les étudiants et les enseignants. Il s'agit d'une application qui se distingue par sa capacité à entrer en contact avec les enseignants instantanément, en fonction de leurs disponibilités. Cette application dispose d'un système de messagerie interne, avec toutes les fonctionnalités telles que l'envoi de fichiers multimédias, l'envoi de messages vocaux, etc.",
          'Students can rate their teacher, and see the history of past classes (via a PDF file generated at the end of the course). ':
            "Les étudiants peuvent noter leur professeur, et voir l'historique des cours passés (via un fichier PDF généré à la fin du cours).",
          'A system of remuneration via tokens has been created.':
            'Un système de rémunération via des tokens a été créé.',

          'The project owner is Salah Didouche, who made a name for himself in the world of startups with the TDP platform (Transporteurs du Pauvre).':
            "Le porteur de projet est Salah Didouche, qui s'est fait un nom dans le monde des startups avec la plateforme TDP (Transporteurs du Pauvre).",
          'Application completed and tested, launch pending owner availability. ':
            'Application terminée et testée, lancement en attente de disponibilité du propriétaire.',

          // Winaa
          'Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. ':
            "Winaa est un job board, sous la forme d'une application mobile et web, de mise en relation entre entreprises et alternants.",
          'A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. ':
            "Un algorithme de matching, basé sur plusieurs critères, calcule automatiquement un pourcentage de compatibilité entre un étudiant et une offre d'emploi. L'expérience utilisateur est similaire à l'application Tinder.",
          'Once the matching is done, a calendar allows the student to book an interview session with the company.':
            "Une fois le matching effectué, un calendrier permet à l'étudiant de réserver une séance d'entretien avec l'entreprise.",
          'The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. ':
            'La plateforme récupère (scrape) automatiquement toutes les offres de sites de référence en France, et les ajoute à la base de données de Winaa.',
          'Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions. ':
            "Les entreprises disposent d'un tableau de bord complet leur permettant de gérer leurs offres, de voir les matchs potentiels et d'accepter les créneaux d'entretien.",
          'Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. Once the matching is done, a calendar allows the student to book an interview session with the company. The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions.':
            "Winaa est un job board, sous la forme d'une application mobile et web, de mise en relation entre entreprises et apprentis. Un algorithme d'appariement, basé sur plusieurs critères, calcule automatiquement un pourcentage de compatibilité entre un étudiant et une offre d'emploi. Le processus de mise en correspondance se fait de la même manière qu'avec l'application Tinder. Une fois le jumelage effectué, un calendrier permet à l'étudiant de réserver une séance d'entretien avec l'entreprise. La plateforme récupère (scrape) automatiquement toutes les offres des sites de référence en France, et les ajoute à la base de données de Winaa. Les entreprises disposent d'un tableau de bord complet leur permettant de gérer leurs offres, de voir les correspondances potentielles et d'accepter les séances d'entretien.",
          'Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices. A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer. The matching process is similarly done as with the Tinder application.Once the matching is done, a calendar allows the student to book an interview session with the company. The platform automatically retrieves (scrapes) all offers from reference websites in France, and adds them to Winaa’s database.Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions.':
            "Winaa est un job board, sous la forme d'une application mobile et web, de mise en relation entre entreprises et apprentis. Un algorithme d'appariement, basé sur plusieurs critères, calcule automatiquement un pourcentage de compatibilité entre un étudiant et une offre d'emploi. Le processus d'appariement se fait de la même manière qu'avec l'application Tinder. Une fois l'appariement effectué, un calendrier permet à l'étudiant de réserver une séance d'entretien avec l'entreprise. La plateforme récupère (scrape) automatiquement toutes les offres des sites de référence en France, et les ajoute à la base de données de Winaa. Les entreprises disposent d'un tableau de bord complet leur permettant de gérer leurs offres, de voir les correspondances potentielles et d'accepter les séances d'entretien.",
          'A French job platform connecting employers and employees for hiring apprenticeship with its website’s front end on React and backend on Node JS.This project was completed in 6 months from January 2021 to June 2021.':
            "Une plateforme d'emploi française connectant employeurs et employés pour l'embauche d'apprentis avec le front-end de son site Web sur React et le backend sur Node JS. Ce projet a été réalisé en 6 mois de janvier 2021 à juin 2021.",
          'Falcon IT has done a great job and we are impressed with the overall services.':
            "Falcon IT a fait un excellent travail et nous sommes impressionnés par l'ensemble des services.",
          'A French job platform connecting employers and employees for hiring apprenticeship with its website’s front end on React and backend on Node JS. This project was completed is still ongoing, in order to be the most adapted to the market':
            "Une plateforme d'emploi française mettant en relation employeurs et employés pour l'embauche d'apprentis avec le front-end de son site Web sur React et le backend sur Node JS. Ce projet a été achevé est toujours en cours, afin d'être le plus adapté au marché",
          // Orgaplan
          'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.':
            'Orgaplan est une plateforme complexe et complète permettant la gestion logistique de grands chantiers, en zones très denses (comme Paris - La Défense, etc...). La plate-forme est actuellement utilisée sur les chantiers de construction de Vinci, afin de faciliter leurs activités logistiques.',
          'Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. ':
            "Disponible en version web et mobile, avec 5 types d'utilisateurs : Super admin / Admin / Entreprise / Agent de traffic / Agent de traffic tampon. Chaque utilisateur a ses propres droits et fonctionnalités, permettant une infinité de scénarios, selon les situations réelles sur site.",
          'Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.':
            "Possibilité de créer et de dessiner le Plan d'Installation de Chantier, ainsi que les bâtiments et les aires de stockage. Possibilité de créer des livraisons et de suivre l'état général du chantier.",
          'Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. ':
            "Falcon Consulting est spécialisé dans les projets de construction numérique, et nous avons aidé notre partenaire à finaliser son cahier des charges afin d'obtenir la meilleure expérience utilisateur.",
          'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, to facilitate very challenging logistic activities. Available in web and mobile versions, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site. Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification to get the best User experience':
            "Orgaplan est une plateforme complexe et complète permettant la gestion logistique de grands chantiers, en zones très denses (comme Paris - La Défense, etc...). La plate-forme est actuellement utilisée sur les chantiers de construction de Vinci, pour faciliter les activités logistiques très exigeantes. Disponible en version web et mobile, avec 5 types d'utilisateurs : Super admin / Admin / Entreprise / Traffic agent / Buffer traffic agent. Chaque utilisateur a ses droits et ses fonctionnalités, permettant une infinité de scénarios, selon les situations réelles sur site. Possibilité de créer et de dessiner le Plan d'Installation du Site, ainsi que les bâtiments et les aires de stockage. Possibilité de créer des livraisons et de suivre l'état général du site. Falcon Consulting est spécialisé dans les projets de construction numériques, et nous avons aidé notre partenaire à finaliser son cahier des charges pour obtenir la meilleure expérience utilisateur",
          'Orgaplan is a Logistics management in France on a large scale and its site is developed on React front end and Node JS backend. This project was delivered in just 7 months':
            'Orgaplan est une gestion logistique en France à grande échelle et son site est développé sur le front end React et le backend Node JS. Ce projet a été livré en seulement 7 mois',
          'Falcon’s website design team far exceeded my expectations on every front as I had very high expectations of them. The end product is a responsive website that embodies who we are as a company.':
            "L'équipe de conception du site Web de Falcon a largement dépassé mes attentes sur tous les fronts, car j'avais des attentes très élevées à leur égard. Le produit final est un site Web réactif qui incarne qui nous sommes en tant qu'entreprise.",
          'Orgaplan is a Logistics management in France on a large scale and its site is developed on React front end and Node JS backend. This project was delivered in just 6 months, which was possible by scalling the team from 2 developers to up to 8 developers.':
            "Orgaplan est une gestion logistique en France à grande échelle et son site est développé sur le front end React et le backend Node JS. Ce projet a été livré en seulement 6 mois, ce qui a été possible en faisant passer l'équipe de 2 développeurs à 8 développeurs.",
          //    Orientator
          'Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.':
            'Orientator est une application web qui permet aux lycéens de faire leur meilleur choix de carrière, après avoir rempli un questionnaire en ligne personnalisé.',
          'The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile.':
            "Le questionnaire se présente sous la forme d'un arbre décisionnel, avec des questions discriminantes et non discriminantes, aidant à comprendre le profil de l'utilisateur.",
          "At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.":
            "À la fin du questionnaire, un algorithme complexe génère une liste de formations et d'écoles post-bac qui correspondent le mieux au profil de l'élève. Cet algorithme calcule un score selon plusieurs critères, comme la distance, la sélectivité ou encore la durée du cours, et un pourcentage de compatibilité en fonction des réponses de l'étudiant.",
          "Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile. At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.":
            "Orientator est une application web qui permet aux lycéens de faire leur meilleur choix de carrière, après avoir rempli un questionnaire en ligne et personnalisé. Le questionnaire se présente sous la forme d'un arbre décisionnel, avec des questions discriminantes et non discriminantes, aidant à comprendre le profil de l'utilisateur. A la fin du questionnaire, un algorithme complexe génère une liste de programmes et d'écoles post-bac qui correspondent le mieux au profil de l'élève. Cet algorithme calcule un score selon plusieurs critères, comme la distance, la sélectivité ou encore la durée du cours, et un pourcentage de compatibilité en fonction des réponses de l'étudiant.",
          'Orientator is a French-based platform for students to decide on their university.This site is developed with the front end on React and the backend on Node JS and the whole project was completed in 5 months':
            "Orientator est une plateforme française permettant aux étudiants de choisir leur université. Ce site est développé avec le front-end sur React et le back-end sur Node JS et l'ensemble du projet a été réalisé en 5 mois",
          'Falcon IT has done a great job of creating exactly what I wanted. Easy to work with and very responsive. They met all of my expectations. Thank you!':
            'Falcon IT a fait un excellent travail en créant exactement ce que je voulais. Travail facile et très réactif. Ils ont répondu à toutes mes attentes. Merci!',
          // Kidcab
          'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.':
            'Kidcab est une application mobile visant à aider les parents à trouver des chauffeurs pour les activités de leurs enfants et à suivre leur emplacement en toute sécurité. Pour notre partenaire, nous avons développé deux applications mobiles et une application web de Gestion des courses',
          'The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. ':
            "L'application mobile Chauffeur permet de recevoir des offres de courses et d'avoir un aperçu des activités à venir et passées. Lors d'un trajet, l'application présente des fonctionnalités similaires à celles d'Uber : suivi en direct du trajet à effectuer, etc...",
          'The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides.':
            "L'application mobile Clients montre l'emplacement en direct du conducteur et permet de suivre tous les trajets passés et à venir.",
          'Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.':
            "Enfin, le site de Gestion des courses est destiné à l'administrateur de Kidcab pour créer, gérer et assigner efficacement les activités de l'entreprise. Un outil de gestion des devis et des factures intégré à l'application a également été créé.",
          'This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. ':
            "Ce projet a nécessité de travailler l'optimisation du code, et surtout tous les appels d'API afin de minimiser les coûts d'exploitation pour les activités de courses en direct.",
          'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs.':
            "Kidcab est une application mobile visant à aider les parents à trouver des chauffeurs pour les activités de leurs enfants et à surveiller leur emplacement en toute sécurité. Pour notre partenaire, nous avons développé deux applications mobiles et une application web Ride Management. Kidcab est une application mobile visant à aider les parents à trouver des chauffeurs pour les activités de leurs enfants et à surveiller leur emplacement en toute sécurité. Pour notre partenaire, nous avons développé deux applications mobiles et une application web Ride Management. L'application mobile Driver leur permet de recevoir des offres de covoiturage et d'avoir un aperçu des activités à venir et passées. Lors d'un trajet, l'application présente des fonctionnalités similaires à celles d'Uber. L'application mobile Parents montre l'emplacement en direct du conducteur et permet de surveiller tous les trajets passés et à venir. Enfin, le site Ride Management est destiné à l'administrateur de Kidcab pour créer, gérer et assigner efficacement les activités de l'entreprise. Un outil de gestion des devis et des factures intégré à l'application a également été créé. Ce projet a nécessité de travailler avec soin l'optimisation du code, et surtout tous les appels d'API afin de minimiser les coûts d'exploitation.",
          'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities and safely monitor their location. For our partner, we developed two mobile applications and a Ride Management web application.The Driver mobile application allows them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features to Uber.The Parent’s mobile application shows the live location of the driver and allows to monitor all the past and upcoming rides.Finally, the Ride Management website is intended for Kidcab administrators to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.':
            "Kidcab est une application mobile visant à aider les parents à trouver des chauffeurs pour les activités de leurs enfants et à surveiller leur emplacement en toute sécurité. Pour notre partenaire, nous avons développé deux applications mobiles et une application web Ride Management. L'application mobile Driver leur permet de recevoir des offres de covoiturage et d'avoir un aperçu des activités à venir et passées. Lors d'un trajet, l'application présente des fonctionnalités similaires à celles d'Uber. L'application mobile du parent affiche l'emplacement en direct du conducteur et permet de surveiller tous les trajets passés et à venir. Enfin, le site Web de gestion des trajets est destiné aux administrateurs de Kidcab pour créer , gérer et répartir efficacement les activités de l'entreprise. Un outil de gestion des devis et des factures intégré à l'application a également été créé.",
          'Expertise and systematic approach to fulfilling client needs. I love the energy and excitement the Falcon IT team exhibits towards the success of my APP.':
            "Expertise et approche systématique pour répondre aux besoins des clients. J'aime l'énergie et l'enthousiasme dont fait preuve l'équipe informatique de Falcon pour le succès de mon application.",
          'Kidcab, a mobile app project was designed for the French market very efficiently as this project required work carefully on the code optimization, and especially all the API calls to minimize the operation costs. The mobile application is developed on React Native and the whole project took 3 months.':
            "Kidcab, un projet d'application mobile a été conçu pour le marché français de manière très efficace car ce projet nécessitait un travail minutieux sur l'optimisation du code, et surtout tous les appels d'API pour minimiser les coûts d'exploitation. L'application mobile est développée sur React Native et l'ensemble du projet a duré 3 mois.",
          // PERMISPOP
          'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.':
            "Permispop est une plateforme web mettant en relation des étudiants, des moniteurs indépendants et des auto-écoles. Chaque type d'utilisateur dispose d'une interface dédiée, lui permettant de gérer efficacement ses activités.",
          'The platform offers several features such as :':
            'La plateforme offre plusieurs fonctionnalités telles que :',

          '- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.':
            '- la possibilité de rechercher un moniteur avec une carte intéractive, et de réserver une séance selon sa disponibilité.',
          '- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;':
            "- La fonction Agenda permet aux auto-écoles et aux moniteurs d'avoir une vue d'ensemble de toutes les activités et de les gérer efficacement",
          '- At the end of each session, the student can rate the instructor and provide feedback to the platform; ':
            "- À la fin de chaque session, l'étudiant peut évaluer l'instructeur et faire part de ses commentaires à la plateforme ;",
          '- An internal messaging system;': '- Une messagerie interne',
          '- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. ':
            "- Un livret de conduite numérique, permettant aux moniteurs d'avoir un aperçu du niveau de chaque élève, et d'ajouter les éventuels progrès réalisés",
          'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.':
            "Permispop est une plateforme web mettant en relation des étudiants, des professeurs de conduite indépendants et des auto-écoles. Chaque type d'utilisateur dispose d'une interface dédiée, lui permettant de gérer efficacement ses activités. La possibilité de rechercher un moniteur grâce à une carte interactive, et de réserver une séance en fonction de ses disponibilités. La fonction de réservation permet aux auto-écoles et aux moniteurs d'avoir une vue d'ensemble de toutes les activités et de les gérer efficacement ; À la fin de chaque session, l'étudiant peut évaluer l'instructeur et faire part de ses commentaires à la plateforme ; Un système de messagerie interne ; Un livret de conduite numérique, permettant aux moniteurs d'avoir un aperçu du niveau de chaque élève, et d'ajouter les éventuels progrès réalisés.",
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself actual teachings of the great explorer of the truth, the master-builder of human happiness.':
            "Mais je dois vous expliquer comment est née toute cette idée erronée de dénoncer le plaisir et de louer la douleur et je vais vous donner un compte rendu complet du système, et exposer les enseignements réels du grand explorateur de la vérité, le maître-bâtisseur de l'humanité. Bonheur. Personne ne rejette, n'aime ou n'évite le plaisir lui-même, les enseignements réels du grand explorateur de la vérité, le maître-bâtisseur du bonheur humain.",
          'Permispop is a web platform and a mobile app connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end  of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.':
            "Permispop est une plateforme web et une application mobile mettant en relation des étudiants, des professeurs de conduite indépendants et des auto-écoles. Chaque type d'utilisateur dispose d'une interface dédiée, lui permettant de gérer efficacement ses activités. La possibilité de rechercher un moniteur grâce à une carte interactive, et de réserver une séance en fonction de ses disponibilités. La fonction de réservation permet aux auto-écoles et aux moniteurs d'avoir une vue d'ensemble de toutes les activités et de les gérer efficacement ; À la fin de chaque session, l'étudiant peut évaluer l'instructeur et faire part de ses commentaires à la plateforme ; Un système de messagerie interne ; Un livret de conduite numérique, permettant aux moniteurs d'avoir un aperçu du niveau de chaque élève, et d'ajouter les éventuels progrès réalisés.",
          'We at Permispop are very impressed with all aspects of our website and mobile app, as it is user-friendly and work efficiently. We would highly recommend Falcon IT to anyone looking to build a website, web app or mobile application.':
            'Chez Permispop, nous sommes très impressionnés par tous les aspects de notre site Web et de notre application mobile, car ils sont conviviaux et fonctionnent efficacement. Nous recommandons vivement Falcon IT à tous ceux qui souhaitent créer un site Web, une application Web ou une application mobile.',
          'A web platform and a mobile app to connect students, independent driving teachers, and driving schools in France. Web’s front end is developed on React and the back end is developed on .Net and the Verson 1 of this website was completed in the duration of 2019 to 2022 and Version 2 was completed in the duration of 2021 to 2022':
            'Une plateforme web et une application mobile pour mettre en relation étudiants, professeurs de conduite indépendants et auto-écoles en France. Le front-end du Web est développé sur React et le back-end est développé sur .Net et la version 1 de ce site Web a été achevée entre 2019 et 2022 et la version 2 a été achevée entre 2021 et 2022',
          'Client was especially happy that we never let him down, always put additional effort to make things happen. He sees us as more than vendor, but friends.​':
            "Le client était particulièrement heureux que nous ne le laissions jamais tomber, que nous déployions toujours des efforts supplémentaires pour faire bouger les choses. Il nous considère comme plus qu'un vendeur, mais comme des amis.​",
          'The idea was to develop a first version of the website, in order to test the market fit. This version was completed within a couple of months, using ReactJS for the frontend, and ASP.NET Core for the backend. We are still continuing the development, which is currently at the V4.':
            "L'idée était de développer une première version du site web, afin de tester l'adéquation avec le marché. Cette version a été achevée en quelques mois, en utilisant ReactJS pour le frontend et ASP.NET Core pour le backend. Nous continuons toujours le développement, qui est actuellement à la V4.",
          'We at Permispop are very impressed with all aspects of our website and mobile app, as it is user-friendly and work efficiently. We would highly recommend Falcon IT Consulting to anyone looking to build a website, web app or mobile application.':
            'Chez Permispop, nous sommes très impressionnés par tous les aspects de notre site Web et de notre application mobile, car ils sont conviviaux et fonctionnent efficacement. Nous recommandons vivement Falcon IT à tous ceux qui souhaitent créer un site Web, une application Web ou une application mobile.',
          // ZypZap
          'ZypZap is a gaming platform by Falcon IT.':
            'ZypZap est une plateforme éducative dans le domaine du gaming.',

          'It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.':
            "Elle est destinée à la fois aux apprenants et aux créateurs, l'objectif étant de permettre d'heberger simplement des contenus éducatifs.",
          '•	For learners, ZypZap helps them to become Pro players.':
            'Pour les apprenants, ZypZap les aide à devenir des joueurs Pro.',
          '•	Full gameplay courses are available on this site.':
            'Des cours de gameplay complets sont disponibles sur ce site.',

          '•	For creators, gamers teach, what they are good at':
            'Pour les créateurs, les joueurs enseignent leur expertise et sont rémunérés en conséquence.',
          '•	Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.':
            'Un éditeur de vidéo complet permet aux créateurs de contenu de concevoir des cours de qualité.',
          'ZypZap is a gaming platform by Falcon IT. It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.':
            'ZypZap est une plateforme de jeu de Falcon IT. Cela fonctionne à la fois pour les apprenants et les créateurs. Comme le contenu lisible crée un désordre pour les utilisateurs ou les apprenants, ce ZypZap sera utile pour que les apprenants apprennent de manière simple et rapide.',
          'ZypZap is a gaming platform by Falcon IT. It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.For learners, ZypZap helps them to become Pro players.Full gameplay courses are available on this site. For creators, gamers teach, what they are good at. Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.':
            'ZypZap est une plateforme de jeu de Falcon IT. Cela fonctionne à la fois pour les apprenants et les créateurs. Comme le contenu lisible crée un gâchis pour les utilisateurs ou les apprenants, ce ZypZap sera utile pour que les apprenants apprennent de manière simple et rapide. Pour les apprenants, ZypZap les aide à devenir des joueurs Pro. Des cours de gameplay complets sont disponibles sur ce site. Pour les créateurs, les joueurs enseignent ce dans quoi ils sont bons. Plus précisément, pour les joueurs qui souhaitent apprendre à jouer et se familiariser rapidement avec le contenu du jeu.',
          'A French-based gaming platform, developed with the front end on React and the backend on Node JS, and the whole project was completed in 10 months':
            "Une plate-forme de jeu basée en France, développée avec le front-end sur React et le back-end sur Node JS, et l'ensemble du projet a été achevé en 10 mois",
          'Quick response to ideas and changes. Falcon always answers the right ways and ideas':
            'Réponse rapide aux idées et aux changements. Falcon répond toujours aux bonnes manières et aux bonnes idées',
          'A French-based gaming platform, developed with the front end on React and the backend on Node JS, and the whole project was completed in 5 months, due to frequent changes in the design to meet the gaming world’s expectation.':
            "Une plate-forme de jeu basée en France, développée avec le front-end sur React et le back-end sur Node JS, et l'ensemble du projet a été achevé en 5 mois, en raison de changements fréquents dans la conception pour répondre aux attentes du monde du jeu.",
          // Quadra Base
          'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.':
            "Quadrabase est une plateforme web permettant aux bureaux d'études de générer automatiquement des documents d'appel d'offres dans le domaine de la construction : Spécification de projet, Estimation des coûts de projet, Modèle d'appel d'offres de projet. La plate-forme dispose d'une base de données bien structurée et à plusieurs niveaux, permettant d'inclure des données adaptés, en fonction des détails du projet.",
          'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. ':
            "Notre client étant un architecte avec plus de 30 ans d'expérience dans le domaine, nous avons dû faire preuve d'une grande capacité d'adaptation pour appréhender correctement le projet, et en comprendre tous les aspects techniques.",
          'This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. ':
            "Ce projet est ambitieux et vise à révolutionner l'approche de la conception dans le domaine de la construction en France.",
          'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details. Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details. Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. This project is ambitious and aims to revolutionize the approach to design in the field of construction in France.':
            "Quadrabase est une plateforme web permettant aux bureaux d'études de générer automatiquement des documents d'appel d'offres dans le domaine de la construction : Spécification de projet, Estimation des coûts de projet, Modèle d'appel d'offres de projet. La plate-forme dispose d'une base de données bien structurée et à plusieurs niveaux, permettant d'inclure les données les plus pertinentes pour chaque projet spécifique, en fonction des détails du projet. Quadrabase est une plateforme web permettant aux bureaux d'études de générer automatiquement des documents d'appel d'offres dans le domaine de la construction : Spécification de projet, Estimation des coûts de projet, Modèle d'appel d'offres de projet. La plate-forme dispose d'une base de données bien structurée et à plusieurs niveaux, permettant d'inclure les données les plus pertinentes pour chaque projet spécifique, en fonction des détails du projet. Notre client étant un chef de projet avec plus de 30 ans d'expérience dans le domaine, nous avons dû faire preuve d'une grande capacité d'adaptation pour appréhender correctement le projet, et en comprendre tous les aspects techniques. Ce projet est ambitieux et vise à révolutionner l'approche du design dans le domaine de la construction en France.",
          'Project is ambitious and aims to revolutionize the approach to design in the field of construction in France. The project is developed on MERN and the timeline was November 2021 to July 2022':
            "Le projet est ambitieux et vise à révolutionner l'approche du design dans le domaine de la construction en France. Le projet est développé sur MERN et le calendrier était de novembre 2021 à juillet 2022",
          'There is no comparison between the first developers and Falcon IT. Professional, Creative, Attentive to detail, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.':
            "Il n'y a pas de comparaison entre les premiers développeurs et Falcon IT. Professionnel, créatif, soucieux du détail et excellente communication avec l'équipe. Si j'avais passé un contrat avec Falcon IT pour la première fois je n'aurais pas eu à le faire deux fois.",
          'The project was released in several modules, so that the client could see the progress on the go. We started by completing and validating the admin panel, then we worked on the Architect interface, and finally on the Manufacturer features. The project took overall 6 months, including all the edits in order to make it very functional.':
            "Le projet a été publié en plusieurs modules, afin que le client puisse voir l'avancement en cours de route. Nous avons commencé par compléter et valider le panel d'administration, puis nous avons travaillé sur l'interface Architecte, et enfin sur les fonctionnalités Constructeur. Le projet a pris au total 6 mois, y compris toutes les modifications afin de le rendre très fonctionnel.",
          'The first development team did not complete 100% the website, which was frustrating. Falcon Consulting took over and redeveloped the website from A to Z. They went the extra mile to make sure all the details were taken into consideration. Professional, Creative, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.':
            "La première équipe de développement n'a pas terminé à 100% le site Web, ce qui était frustrant. Falcon Consulting a repris et redéveloppé le site Web de A à Z. Ils ont fait un effort supplémentaire pour s'assurer que tous les détails étaient pris en considération. Professionnel, créatif et excellente communication avec l'équipe. Si j'avais contracté avec Falcon IT pour la première fois, je n'aurais pas eu à le faire deux fois.",
          'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. This project is ambitious and aims to revolutionize the approach to design in the field of construction in France.':
            "Notre client étant un chef de projet avec plus de 30 ans d'expérience dans le domaine, nous avons dû faire preuve d'une grande capacité d'adaptation pour appréhender correctement le projet, et en comprendre tous les aspects techniques. Ce projet est ambitieux et vise à révolutionner l'approche du design dans le domaine de la construction en France.",
          // Design confection
          'A web app designed to help customers with customized stitching to receive your creation at your home.':
            'Application Web conçue pour aider les clients souhaitant des coutures personnalisées à recevoir leurs créations à domicile. ',
          'User login to register and add information regarding customized dress like color combination, stuff design, etc.':
            "L'expérience utilisateur optimisée permet aux utilisateurs de créer leur vetement personnalisées de façon simple et intuitive : choix du modèle, des tailles, des couleurs, etc...",
          'After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.':
            "Après l'inscription, les consommateurs publient des annonces contenant des idées et plus de 100 confecteurs créatifs envoient les coûts estimés.",
          'Choose your designer with 99% accuracy as design confection brings your ideas to life.':
            "Possibilité d'analyser chaque confecteur et de choisir, puis évaluer celui correspondant le mieux aux attentes.",
          'A web app designed to help customers with customized stitching to receive your creation at your home. User login to register and add information regarding customized dress like color combination, stuff design, etc. After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs, where you can choose your designer with 99% accuracy as design confection brings your ideas to life':
            "Une application Web conçue pour aider les clients avec des coutures personnalisées à recevoir votre création à votre domicile. Connexion de l'utilisateur pour s'inscrire et ajouter des informations concernant une robe personnalisée comme une combinaison de couleurs, un design de trucs, etc. Après l'inscription, les consommateurs publient des annonces contenant des idées et plus de 100 designers créatifs vous envoient les coûts estimés, où vous pouvez choisir votre designer avec une précision de 99 % en tant que design. la confection donne vie à vos idées",
          'I contacted Falcon IT with a basic feel I wanted in a website. They developed the best of Design Confection, the overall website visual layout, and the content too. Falcon’s services are a bargain when you weigh the cost versus the product you received. I will be using them again in future endeavors. Thanks again!':
            "J'ai contacté Falcon IT avec une impression de base que je voulais dans un site Web. Ils ont développé le meilleur de Design Confection, la mise en page visuelle globale du site Web et le contenu également. Les services de Falcon sont une bonne affaire lorsque vous pesez le coût par rapport au produit que vous avez reçu. Je les utiliserai à nouveau dans des projets futurs. Merci encore!",
          'Design confection is a French-based project. It is a platform for tailors and clients for sewing services. The website is developed using MERN stacks, and it was completed in 4 months.':
            "Design confection est un projet basé en France. C'est une plate-forme pour les tailleurs et les clients des services de couture. Le site Web est développé à l'aide de piles MERN et il a été achevé en 4 mois.",
          // Tajweed Made Easy
          'Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.':
            "Tajweed Made Easy est une application développée par Falcon IT. Site Web et application basés sur l'apprentissage du Coran avec les règles appropriées de Tajweed et Makharij.",
          '•	User can signup and start learning Quran with Tajweed.':
            "L'utilisateur peut s'inscrire et commencer à apprendre le Coran avec Tajweed",
          '•	Practice lessons are available.': 'Des cours pratiques sont disponibles.',
          '•	User can repeat the lesson at any time without an internet connection':
            "L'utilisateur peut répéter la leçon à tout moment sans connexion Internet",
          '•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.':
            "Sur le site, des livres sont disponibles dans différentes langues, rendant l'application accessible au plus grand nombre !",
          // EZBoxmedia
          'EZBox media is a platform providing different services':
            'EZBox media est une plate-forme fournissant différents services',
          'EZBox media is a platform providing different services including':
            'EEZBox media est une plate-forme fournissant différents services, notamment',
          Advertising: 'Publicité:',
          '•	Advertising by understanding how a user can react to the advertisement shown to them.':
            'Publicité en analysant le comportement des utilisateurs face au contenu présenté.',
          '•	Target ads based on non-personal criteria.':
            'Annonces ciblées en fonction de critères non personnels.',

          'Product development': 'Développement de produits',
          '•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today.':
            'Le support EZBox aide au développement de produits pour les produits de nouvelle génération.',
          'Chromium Browser': 'Navigateur Chrome',
          '•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. ':
            "EZBoxmedia a travaillé avec les principaux fabricants d'électronique grand public pour concevoir et fournir des solutions clés en main.",
          'EZBox media is a platform providing different services including Advertising Advertising by understanding how a user can react to the advertisement shown to them.Target ads based on non-personal criteria.EZBox media helps Product development for the next generation products with the wide variety of technologies available today.EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions.':
            "EZBox media est une plate-forme fournissant différents services, y compris la publicité publicitaire, en comprenant comment un utilisateur peut réagir à la publicité qui lui est présentée. Ciblez les annonces en fonction de critères non personnels. EZBox media aide au développement de produits pour les produits de nouvelle génération avec une grande variété de technologies disponible aujourd'hui. EZBoxmedia a travaillé avec les principaux fabricants d'électronique grand public pour concevoir et fournir des solutions clés en main.",
          'Falcon IT is a great company to work with as they are always responsive and willing to do what it takes to get the job done right and in a timely manner. They are very reliable and it was very clear during working that they are the right choice. Thank you, Falcon IT!':
            "Falcon IT est une excellente entreprise avec laquelle travailler car ils sont toujours réactifs et prêts à faire ce qu'il faut pour que le travail soit bien fait et en temps opportun. Ils sont très fiables et il était très clair pendant le travail qu'ils étaient le bon choix. Merci, Falcon IT !",
          'A French-based, service-providing website developed on MERN. This effective model took 3 months from January 2022 to March 2022 including all features.':
            'Un site Web de prestation de services basé en français développé sur le MERN. Ce modèle efficace a pris 3 mois de janvier 2022 à mars 2022, y compris toutes les fonctionnalités.',
          // TELEHEALTH PLATFORM
          'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely.':
            "La plateforme de télésanté (nom du projet confidentiel) est une application web et mobile américaine qui permet aux kinésithérapeutes d'analyser à distance les mouvements de leurs patients.",
          'The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not. ':
            "Le patient est filmé en train d'effectuer différents types d'exercices, et l'outil détecte et calcule les angles du corps de celui-ci (tels que ses jambes, ses bras, ses chevilles, sa taille, etc.). Le programme analyse ensuite les données en fonction de règles créées en internes, et en déduit si les mouvements sont correctement réalisés ou non.",
          'The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.':
            "La détection des mouvements se fait à l'aide de la technologie Mediapipe, et nécessite une connaissance pointue en matière de traitement d'images afin d'assurer une fluidité et une précision des résultats finaux.",
          'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc...). The program then analyzes the data based on internal rules and deduces whether the movements are abnormal or not.The detection of the movements is done with the help of a Media pipe and requires advanced knowledge in terms of image processing to ensure fluidity and accuracy of the final results.':
            "La plateforme de télésanté (nom du projet est confidentiel) est une application web et mobile américaine qui permet aux kinésithérapeutes d'analyser à distance les mouvements de leurs patients. Le patient est filmé en train d'effectuer différents types d'exercices, et l'outil détecte et calcule les angles du corps du patient (comme ses jambes, ses bras, son pied, sa taille, etc...). Le programme analyse ensuite les données en fonction de règles internes et en déduit si les mouvements sont anormaux ou non. La détection des mouvements se fait à l'aide d'un Media pipe et nécessite des connaissances avancées en terme de traitement d'image pour assurer la fluidité et la précision de la résultats finaux.",
          'French based mobile application to analyze patient’s movement developed, project was completed in 4 months.':
            "Développement d'une application mobile basée en France pour analyser les mouvements du patient, le projet a été achevé en 4 mois.",
          'Our dream has come true with the efforts of the Falcon team. Great app and they do it in a great manner.':
            "Notre rêve est devenu réalité grâce aux efforts de l'équipe Falcon. Excellente application et ils le font d'une manière formidable.",
          'French based mobile application to analyze patient’s movement developed on ReactJS/NodeJS and Mediapipe technology. The MVP was successfully completed within 3 months.':
            'Application mobile basée en France pour analyser les mouvements du patient développée sur la technologie ReactJS/NodeJS et Mediapipe. Le MVP a été réalisé avec succès en 3 mois.',
          'This was a very challenging project, and to be honest, we were uncertain whether it was even technically possible. In the past, we reached out to another offshore company for a first version, which did cost us more than $100k, even though the final result was not user friendly. When we met with Falcon, they were confident to be able to do a better and more efficient project, as an MVP as a start. It was not an easy project, but they did show a lot of commitment and they finally made it successfully. Great job guys !':
            "C'était un projet très difficile, et pour être honnête, nous n'étions pas sûrs que ce soit même techniquement possible. Dans le passé, nous avons contacté une autre société offshore pour une première version, ce qui nous a coûté plus de 100 000 $, même si le résultat final n'était pas convivial. Lorsque nous avons rencontré Falcon, ils étaient convaincus de pouvoir réaliser un projet meilleur et plus efficace, en tant que MVP pour commencer. Ce n'était pas un projet facile, mais ils ont montré beaucoup d'engagement et ils ont finalement réussi. Super boulot les gars !",
          //Facility management
          'This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status. here is one module in this project is Ticket management system which needs to be create and manage tickets. A Ticket management system is a module where there are two types of users : admin user / Employee user.':
            "Il s'agit de la plate-forme de gestion des immeubles de bureaux. Il est similaire au tableau de bord de type Trello, affichant les tickets et leur statut. Voici un module de ce projet est le système de gestion des tickets qui doit être créé et gérer les tickets. Un système de gestion de tickets est un module où il existe deux types d'utilisateurs : utilisateur admin / utilisateur employé.",
          // Legal Mentions
          'Legal Mentions': 'Mentions Légales',
          Definitions: 'Définitions',
          'Presentation of the website': 'Présentation du site',
          'General conditions of use of the site and the services offered':
            "Conditions générales d'utilisation du site et des services proposés",
          'Description of the services provided': 'Description des services fournis',
          'Contractual limitations on technical data':
            'Limitations contractuelles sur les données techniques',

          'Intellectual property and counterfeits': 'Propriété intellectuelle et contrefaçons',
          'Limitations of liability': 'Limitations de responsabilité',
          'Personal data management': 'Gestion des données personnelles',
          'Incident notification': "Notification d'incident",
          "Hypertext links 'cookies' and internet tags":
            "Liens hypertextes 'cookies' et balises internet",
          'Applicable law and attribution of jurisdiction':
            'Droit applicable et attribution de juridiction'
        }
      }
    },
    fallbackLng: 'fr',
    debug: true,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;
