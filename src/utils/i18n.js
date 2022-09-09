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
          // contact us
          'Contact Us': 'Contact Us',
          'Share Your Project/Idea with us!': 'Share Your Project/Idea with us!',
          'Our Team Member will get back to you within 24 hours. ':
            'Our Team Member will get back to you within 24 hours. ',

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
          'We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work. ':
            'We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work. ',
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
        },
      },
      fr: {
        translations: {
          //
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
          'Our aim provide better service': 'Notre objectif fournir un meilleur service',

          'We are a multi-talented web development company.':
            'Nous sommes une société de développement Web aux multiples talents.',
          'Mobile applications are now essential and allow you.':
            'Les applications mobiles sont désormais incontournables et vous le permettent.',
          'MOBILE DEVELOPMENT': 'Développement mobiles',
          'WEB DEVELOPERS': 'Développement de site Web',
          'SOFTWARE DEVELOPERS': 'Développement de logiciels',
          'UI/UX DEVELOPMENT': 'Développement UI/UX',
          'Data Engineering': 'Ingénierie des données',
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
          // contact us
          'Contact Us': 'Nous contacter',
          'Share Your Project/Idea with us!': 'Partagez votre projet avec nous !',
          'Our Team Member will get back to you within 24 hours. ':
            'Un collaborateur vous répondra dans les 24 heures.',

          'Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours.':
            "Vous avez des questions sur un projet concret ? Ou voulez-vous simplement vous renseigner sur le développement offshore et voir s'il peut répondre à vos besoins ? Veuillez remplir le formulaire de contact et nous partagerons gratuitement notre expertise. Un collaborateur vous répondra dans les 24 heures.",
          'Schedule Meeting': 'Planifier une réunion',
          Email: 'Adresse E-mail​',
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
          'We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work. ':
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
          'More information': 'More information',
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
            'Droit applicable et attribution de juridiction',
        },
      },
    },
    fallbackLng: 'fr',
    debug: true,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
