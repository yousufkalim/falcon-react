import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ["fr", "en"],
    // we init with resources
    resources: {
      en: {
        translations: {
          //Home
          // Home_Header
          "WE PROVIDE GREAT SERVICES AT THE BEST PRICE.":
            "WE PROVIDE GREAT SERVICES AT THE BEST PRICE.",
          "Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners. ":
            "Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners. ",
          "GET A FREE QUOTE": "GET A FREE QUOTE",

          //   service Provided section
          "our aim provide better service": "our aim provide better service",
          "Services We Provide": "Services We Provide",
          "Mobile Application Development": "Mobile Application Development",
          "Website Development": "Website Development",
          "Software Development": "Software Development",
          "On Demand Developers": "On Demand Developers",
          "UI/UX Development": "UI/UX Development",
          "Get Details": "Get Details",

          //   latest projects section
          "a project offers a challenge": "a project offers a challenge",
          "Latest Projects": "Latest Projects",
          "Years of Excellence": "Years of Excellence",
          "Project Completed": "Project Completed",
          "Customer Satisfaction": "Customer Satisfaction",

          //   aboutus Section
          "your work is our priority": "your work is our priority",
          "Why choose Falcon Consulting?": "Why choose Falcon Consulting?",
          "Years of Experience": "Years of Experience",
          "Number of Employees": "Number of Employees",
          "Successfull Projects": "Successfull Projects",
          "Number of Offices": "Number of Offices",
          "External Tools Built": "External Tools Built",
          "Improvement and Customer focused":
            "Improvement and Customer focused",
          "We believe that talent and skills do not have borders":
            "We believe that talent and skills do not have borders",
          "We are a human-oriented company, investing in providing  healthy work atmosphere and cooperative management to make sure our employees reach their full potential, and personally develop through their work. Our team is sensitized every day about the importance of quality management, and we strive to implement a continuous improvement process for our partners.":
            "We are a human-oriented company, investing in providing  healthy work atmosphere and cooperative management to make sure our employees reach their full potential, and personally develop through their work. Our team is sensitized every day about the importance of quality management, and we strive to implement a continuous improvement process for our partners.",
          "READ MORE": "READ MORE",

          //   partners section
          "SINCERELY YOURS": "SINCERELY YOURS",
          "Some Amazing Partners We Worked With":
            "Some Amazing Partners We Worked With",

          // review section
          "your feedback matters": "your feedback matters",
          "Client Reviews": "Client Reviews",
          "We were looking for a team who could take on our project and finish the job, Falcon IT Consulting Completed all work as asked. Gladly I found them":
            "We were looking for a team who could take on our project and finish the job, Falcon IT Consulting Completed all work as asked. Gladly I found them",
          "Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure":
            "Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure",
          "They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!":
            "They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!",
          "We had a problem with our AWS configuration and suddenly all our apps and websites shut down. We were in a panic and Falcon IT Consulting came to our rescue. They did a terrific job and quickly got our apps and websites up and running again. Their team is clear in communications and very responsive. We really enjoyed working with them":
            "We had a problem with our AWS configuration and suddenly all our apps and websites shut down. We were in a panic and Falcon IT Consulting came to our rescue. They did a terrific job and quickly got our apps and websites up and running again. Their team is clear in communications and very responsive. We really enjoyed working with them",
          "Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you":
            "Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you",
          //   blog section
          "With lots of unique blogs": "With lots of unique blogs",
          "Read our blog": "Read our blog",
          "A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021":
            "A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021",
          "What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?":
            "What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?",

          // contact us
          "Contact Us": "Contact Us",
          "Share Your Project/Idea with us!":
            "Share Your Project/Idea with us!",
          "Our Team Member will get back to you within 24 hours. ":
            "Our Team Member will get back to you within 24 hours. ",
          "Do you have any question on any concrete project? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours. ":
            "Do you have any question on any concrete project? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours. ",
          "Schedule Meeting": "Schedule Meeting",
          Email: "Email",
          "Your Name": "Your Name",
          Phone: "Phone",
          Budget: "Budget",
          "Type Your Message": "Type Your Message",
          Send: "Send",
          "Click and join link": "Click and join link",

          //   footer
          Overview: "Overview",
          Solutions: "Solutions",
          "WHERE YOU CAN MEET": "WHERE YOU CAN MEET",
          "Our Offices": "Our Offices",
          "The services are provided at a flat rate, or according to a determined daily rate, based on your preference. In both cases, we guarantee you a quality service at a very competitive price.":
            "The services are provided at a flat rate, or according to a determined daily rate, based on your preference. In both cases, we guarantee you a quality service at a very competitive price.",
          Pages: "Pages",
          About: "About",
          Services: "Services",
          "Our projects": "Our projects",
          Contact: "Contact",
          Privacy: "Privacy",
          "Terms of Service": "Terms of Service",
          Cookies: "Cookies",
          "All Rights Reserved": "All Rights Reserved",

          //   About US
          //   About_Heaader
          "Our Goal Is To Exceed Your Expectations ":
            "Our Goal Is To Exceed Your Expectations ",
          "Healthy, skilled and ambitious team":
            "Healthy, skilled and ambitious team",

          //   About comapny Section
          "BEST company": "BEST company",
          "About Falcon Consulting": "About Falcon Consulting",
          "Falcon Consulting is a development agency that specializes in web application development and consultancy in the field of new technologies. We combine rigor, quality of work and optimized production costs. Founded in 2015, Falcon Consulting started out as a consulting company which worked with large companies such as Microsoft, Canon and Accor. In 2017, Falcon Consulting took off and became a development agency, bringing together over 10 years of experience in application development and project management in its team. Established in France, United States and Pakistan, the company is providing development services worldwide.":
            "Falcon Consulting is a development agency that specializes in web application development and consultancy in the field of new technologies. We combine rigor, quality of work and optimized production costs. Founded in 2015, Falcon Consulting started out as a consulting company which worked with large companies such as Microsoft, Canon and Accor. In 2017, Falcon Consulting took off and became a development agency, bringing together over 10 years of experience in application development and project management in its team. Established in France, United States and Pakistan, the company is providing development services worldwide.",

          // Modern Agency Section
          "We Are A Modern IT Agency": "We Are A Modern IT Agency",
          "Accessible price, with no compromise on the Quality!":
            "Accessible price, with no compromise on the Quality!",
          "Office Loocations": "Office Loocations",
          "Years of Excellence": "Years of Excellence",
          "Successfull Projects": "Successfull Projects",
          "Client satisfication": "Client satisfication",

          // our vision section
          "We believe our vision": "We believe our vision",
          "Our Vision": "Our Vision",
          "We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work. ":
            "We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work. ",
          "IN-HOUSE TEAM": "IN-HOUSE TEAM",
          TECHNOLOGIES: "TECHNOLOGIES",
          "USER-FOCUSED PROCESS": "USER-FOCUSED PROCESS",
          "SMOOTH COMMUNICATION": "SMOOTH COMMUNICATION",
          "8 YEARS' EXPERIENCE": "8 YEARS' EXPERIENCE",
          "FULL FLEXIBILITY": "FULL FLEXIBILITY",
          "HIGH QUALITY CODE": "HIGH QUALITY CODE",
          TRANSPARENCY: "TRANSPARENCY",

          //   Blogs
          // Blog_Header
          "FALCON BLOG": "FALCON BLOG",
          "Always looking into improving ourselves.":
            "Always looking into improving ourselves.",
          "The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects.":
            "The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects.",
          "Your Email": "Your Email",
          SUBSCRIBE: "SUBSCRIBE",

          //   Our Projects
          // Projects_Header
          "ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!":
            "ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!",
          "Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. ":
            "Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. ",
          "Software house with a team of experienced developers and project managers":
            "Software house with a team of experienced developers and project managers",
          Software: "Software",
          SOFTWARE: "SOFTWARE",
          Website: "Website",
          WEBSITE: "WEBSITE",
          All: "All",
          ALL: "ALL",
          "Mobile Application": "Mobile Application",
          "MOBILE APPLICATION": "MOBILE APPLICATION",
          "UI/UX": "UI/UX",
          "Data & Cloud": "Data & Cloud",
          View: "View",
          VIEW: "VIEW",
          "See more": "See more",

          //   Services
          // Services_Header
          "Skilled Developers for your Projects":
            "Skilled Developers for your Projects",
          "We are ready to handle your ambitious projects!":
            "We are ready to handle your ambitious projects!",
          "Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !":
            "Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !",
          "More information": "More information",
          "Get This Service": "Get This Service",

          // key Features Section
          "Key features": "Key features",
          "This sounds simple, but it is beneficial to your business success.":
            "This sounds simple, but it is beneficial to your business success.",
          // "SMOOTH COMMUNICATION": "SMOOTH COMMUNICATION",
          TECHNOLOGIES: "TECHNOLOGIES",
          "In-House Team": "In-House Team",
          "Product Development": "Product Development",
          "FULL FLEXIBILITY": "FULL FLEXIBILITY",
          "USER-FOCUSED PROCESS": "USER-FOCUSED PROCESS",
          "Ux research": "Ux research",
          "Many of these business ideas are home-based. While they may not make you a billionaire.":
            "Many of these business ideas are home-based. While they may not make you a billionaire.",

          // work Process Section
          "We solve clients' projects in a simple & efficient way":
            "We solve clients' projects in a simple & efficient way",
          "We always follow the standard work process":
            "We always follow the standard work process",
          "Project Requirement": "Project Requirement",
          Designing: "Designing",
          Development: "Development",
          "Live Testing": "Live Testing",
          "We do research and validate the specs before we start any projects":
            "We do research and validate the specs before we start any projects",
          "Designed according to client's requirements":
            "Designed according to client's requirements",
          "Developed by skilled team developers":
            "Developed by skilled team developers",
          "After completing the work, live test is done":
            "After completing the work, live test is done",
          UX: "UX",
          Wireframing: "Wireframing",
          "UI Design": "UI Design",
          "Design Review": "Design Review",
          "Then Wireframing according to requirements":
            "Then Wireframing according to requirements",
          "We do ux research before we start any projects":
            "We do ux research before we start any projects",

          // Our Deveopers Section
          "OUR DEVELOPERS ARE": "OUR DEVELOPERS ARE",
          "OUR DEVELOPERS FOR YOUR PROJECTS":
            "OUR DEVELOPERS FOR YOUR PROJECTS",
          Agile: "Agile",
          Experienced: "Experienced",
          Trained: "Trained",
          "Dedicated to your projects": "Dedicated to your projects",
          "We train them in agile management methods so that our partners can take full advantage of them":
            "We train them in agile management methods so that our partners can take full advantage of them",
          "We are Flexible in the search for the ideal  profile and we can can offer you very experienced profiles":
            "We are Flexible in the search for the ideal  profile and we can can offer you very experienced profiles",
          "We train our developers ourselves by positioning them on internet internet project in order to ensure that we transmit to them the “soft skills” as well as the hard skills":
            "We train our developers ourselves by positioning them on internet internet project in order to ensure that we transmit to them the “soft skills” as well as the hard skills",
          "Our developers work full-time on your projects and our collaborative tools guarantee Transparency regarding the progress of task":
            "Our developers work full-time on your projects and our collaborative tools guarantee Transparency regarding the progress of task",

          // developer work process
          "We solve clients' projects in a simple & efficient way":
            "We solve clients' projects in a simple & efficient way",
          "We always follow the standard work process":
            "We always follow the standard work process",
          "You need developer": "You need developer",
          "We organize a meeting in order to better understand your needs, as well as the ideal profile sought for your project. If your needs change during this process, don't panic: we take into account any last minute changes!":
            "We organize a meeting in order to better understand your needs, as well as the ideal profile sought for your project. If your needs change during this process, don't panic: we take into account any last minute changes!",
          "Targeting the ideal profile": "Targeting the ideal profile",
          "For this step, it's up to us! Our HR team searches among a rich and talented pool of developers for the best profiles to offer. We organize HR and technical interviews with these developers, in order to pre-select the best candidates.":
            "For this step, it's up to us! Our HR team searches among a rich and talented pool of developers for the best profiles to offer. We organize HR and technical interviews with these developers, in order to pre-select the best candidates.",
          "Proposal from developers": "Proposal from developers",
          "We send you the profile of the pre-selected developers. You can then decide to carry out interviews with them, in order to confirm your choice. When you decide to do an interview with a developer, there is no commitment that binds you: keep your mind free!":
            "We send you the profile of the pre-selected developers. You can then decide to carry out interviews with them, in order to confirm your choice. When you decide to do an interview with a developer, there is no commitment that binds you: keep your mind free!",
          Recruitment: "Recruitment",
          "Have you found your ideal profile? Congratulation ! We conclude the contract, which is without long-term commitment, so that you retain all your flexibility. The developer works directly on your projects, without going through us.":
            "Have you found your ideal profile? Congratulation ! We conclude the contract, which is without long-term commitment, so that you retain all your flexibility. The developer works directly on your projects, without going through us.",
          "Continuous improvement": "Continuous improvement",
          "We organize at a determined frequency points on our collaboration. The principle is to ensure that the collaboration is optimal, and to target the best potential points of improvement. Once identified, we offer, at our expense, adequate training for our developers in order to constantly increase the quality of the collaboration.":
            "We organize at a determined frequency points on our collaboration. The principle is to ensure that the collaboration is optimal, and to target the best potential points of improvement. Once identified, we offer, at our expense, adequate training for our developers in order to constantly increase the quality of the collaboration.",

          // Project Details Basic Modal
          // Tilt
          "Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.":
            "Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.",
          "The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.":
            "The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.",
          "On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.":
            "On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.",
          "On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. ":
            "On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. ",

          // Issyne
          "Mobile platform for connecting students and teachers. It is an application that stands out for its ability to get in touch with teachers instantly., based on the availabilities. This application has an internal messaging system, with all the features such as sending multimedia files, sending voice messages, etc...":
            "Mobile platform for connecting students and teachers. It is an application that stands out for its ability to get in touch with teachers instantly., based on the availabilities. This application has an internal messaging system, with all the features such as sending multimedia files, sending voice messages, etc...",
          "Students can rate their teacher, and see the history of past classes (via a PDF file generated at the end of the course). ":
            "Students can rate their teacher, and see the history of past classes (via a PDF file generated at the end of the course). ",
          "A system of remuneration via tokens has been created.":
            "A system of remuneration via tokens has been created.",
          "The project owner is Salah Didouche, who made a name for himself in the world of startups with the TDP platform (Transporteurs du Pauvre).":
            "The project owner is Salah Didouche, who made a name for himself in the world of startups with the TDP platform (Transporteurs du Pauvre).",
          "Application completed and tested, launch pending owner availability. ":
            "Application completed and tested, launch pending owner availability. ",

          // Winaa
          "Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. ":
            "Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. ",
          "A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. ":
            "A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. ",
          "Once the matching is done, a calendar allows the student to book an interview session with the company.":
            "Once the matching is done, a calendar allows the student to book an interview session with the company.",
          "The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. ":
            "The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. ",
          "Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions. ":
            "Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions. ",

          // Orgaplan
          "Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.":
            "Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.",
          "Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. ":
            "Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. ",
          "Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.":
            "Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.",
          "Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. ":
            "Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. ",
          //    Orientator
          "Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire. ":
            "Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire. ",
          "The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile. ":
            "The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile. ",
          "At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.  ":
            "At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.  ",

          // Kidcab
          "Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.":
            "Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.",
          "The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. ":
            "The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. ",
          "The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides.":
            "The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides.",
          "Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.":
            "Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.",
          "This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. ":
            "This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. ",

          // PERMISPOP
          "Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.":
            "Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.",
          "The platform offers several features such as :":
            "The platform offers several features such as :",
          "- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.":
            "- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.",
          "- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;":
            "- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;",
          "- At the end of each session, the student can rate the instructor and provide feedback to the platform; ":
            "- At the end of each session, the student can rate the instructor and provide feedback to the platform; ",
          "- An internal messaging system;": "- An internal messaging system;",
          "- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. ":
            "- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. ",

          // ZypZap
          "ZypZap is a gaming platform by Falcon IT.":
            "ZypZap is a gaming platform by Falcon IT.",
          "It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.":
            "It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.",
          "•	For learners, ZypZap helps them to become Pro players.":
            "•	For learners, ZypZap helps them to become Pro players.",
          "•	Full gameplay courses are available on this site.":
            "•	Full gameplay courses are available on this site.",
          "•	For creators, gamers teach, what they are good at":
            "•	For creators, gamers teach, what they are good at",
          "•	Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.":
            "•	Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.",

          // Quadra Base
          "Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.":
            "Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.",
          "Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. ":
            "Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. ",
          "This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. ":
            "This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. ",

          // Design confection
          "A web app designed to help customers with customized stitching to receive your creation at your home.":
            "A web app designed to help customers with customized stitching to receive your creation at your home.",
          "User login to register and add information regarding customized dress like color combination, stuff design, etc.":
            "User login to register and add information regarding customized dress like color combination, stuff design, etc.",
          "After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.":
            "After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.",
          "Choose your designer with 99% accuracy as design confection brings your ideas to life.":
            "Choose your designer with 99% accuracy as design confection brings your ideas to life.",

          // Tajweed Made Easy
          "Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.":
            "Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.",
          "•	User can signup and start learning Quran with Tajweed.":
            "•	User can signup and start learning Quran with Tajweed.",
          "•	Practice lessons are available.":
            "•	Practice lessons are available.",
          "•	User can repeat the lesson at any time without an internet connection":
            "•	User can repeat the lesson at any time without an internet connection",
          "•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.":
            "•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.",

          // EZBoxmedia
          "EZBox media is a platform providing different services including":
            "EZBox media is a platform providing different services including",
          Advertising: "Advertising",
          "•	Advertising by understanding how a user can react to the advertisement shown to them.":
            "•	Advertising by understanding how a user can react to the advertisement shown to them.",
          "•	Target ads based on non-personal criteria.":
            "•	Target ads based on non-personal criteria.",
          "Product development": "Product development ",
          "•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today.":
            "•	EZBox media helps Product development for the next generation products with the wide variety of technologies available to",
          "Chromium Browser": "Chromium Browser",
          "•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. ":
            "•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. ",

          // TELEHEALTH PLATFORM
          "Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely.":
            "Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely.",
          "The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not. ":
            "The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not. ",
          "The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.":
            "The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.",

          // menu
          "Changer de langue en": "Changer de langue en",
          Français: "Français",

          // Legal Mentions
          "Legal Mentions": "Legal Mentions",
          Definitions: "Definitions",
          "Presentation of the website": "Presentation of the website",
          "General conditions of use of the site and the services offered":
            "General conditions of use of the site and the services offered",
          "Description of the services provided":
            "Description of the services provided",
          "Contractual limitations on technical data":
            "Contractual limitations on technical data",
          "Intellectual property and counterfeits":
            "Intellectual property and counterfeits",
          "Limitations of liability": "Limitations of liability",
          "Personal data management": "Personal data management",
          "Incident notification": "Incident notification",
          "Hypertext links 'cookies' and internet tags":
            "Hypertext links 'cookies' and internet tags",
          "Applicable law and attribution of jurisdiction":
            "Applicable law and attribution of jurisdiction",
        },
      },
      fr: {
        translations: {
          // menu
          "Changer de langue en": "Change the language to",
          Français: "English",

          //Home
          // Home_Header
          "WE PROVIDE GREAT SERVICES AT THE BEST PRICE.":
            "L'EXCELLENCE À TOUT PRIX",
          "Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners. ":
            "Agence informatique avec une équipe de développeurs et de chefs de projet expérimentés, priviligiant la qualité avant tout. ",
          "GET A FREE QUOTE": "OBTENIR UN DEVIS GRATUIT",

          //   service Provided section
          "our aim provide better service":
            "NOTRE OBJECTIF : LA SATISFACTION CLIENT",
          "Services We Provide": "Services que nous fournissons",
          "Mobile Application Development":
            "Développement d'applications mobiles",
          "Website Development": "Développement de site Web",
          "Software Development": "Développement de logiciels",
          "On Demand Developers": "Développeurs à la demande",
          "UI/UX Development": "Développement UI/UX",
          "Get Details": "Plus de détails",

          //   latest projects section
          "A Project offers a challenge": "CHAQUE PROJET EST UN NOUVEAU DÉFI",
          "Latest Projects": "Dernier projets",
          "Years of Excellence": "Années d'Excellence",
          "Project Completed": "Projets terminés",
          "Customer Satisfaction": "Clients Satisfaits",
          "View More": "Voir plus",

          //   aboutus Section
          "your work is our priority": "Votre projet est notre priorité",
          "Why choose Falcon Consulting?":
            "Pourquoi choisir Falcon Consulting ?",
          "Years of Experience": "Années d'Excellence",
          "Number of Employees": "Nombre d'employés",
          "Successfull Projects": "Projets réussis",
          "Number of Offices": "Nombre de bureaux",
          "External Tools Built": "Outils externes construits",
          "Improvement and Customer focused":
            "Amélioration continue et satisfaction client",
          "We believe that talent and skills do not have borders":
            "Nous sommes convaincus que le talent et les compétences n'ont pas de frontières",
          "We are a human-oriented company, investing in training healthy atmosphere and cooperative management to make sure our employees reach their full potential, and personally develop through their work. Our team is sensitized every day about the importance of quality management, and we strive to put in place a continuous improvement process internally":
            "Falcon Consulting est axée sur l'humain, permettant à ses collaborateurs de travailler dans un environnement sain, afin qu'ils atteignent leur plein potentiel et se développent personnellement grâce à leur travail. Notre équipe est sensibilisée chaque jour à l'importance de la gestion de la qualité, et nous nous efforçons de mettre en place une démarche d'amélioration continue pour nos partenaires.",
          "READ MORE": "LIRE LA SUITE",

          //   partners section
          "SINCERELY YOURS": "À VOTRE SERVICE",
          "Some Amazing Partners We Worked With": "Quelques partenaires",

          // review section
          "your feedback matters":
            "Vos retours d'expérience nous permettent de grandir",
          "Client Reviews": "Avis clients",
          "We were looking for a team who could take on our project and finish the job, Falcon IT Consulting Completed all work as asked. Gladly I found them":
            "Nous recherchions une équipe qui pourrait prendre en charge notre projet et terminer le travail, Falcon IT Consulting a terminé tous les travaux comme demandé. Avec plaisir je les ai trouvé",
          "Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure":
            "Falcon Consulting était un plaisir de travailler avec. L'équipe de développement d'applications mobiles maîtrise très bien React et React Native, garantissant une livraison et un dévouement rapides. Je les considérerai pour l'avenir à coup sûr",
          "They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!":
            "Ils ont une très bonne équipe de développement. Réactif et fiable. Nous travaillons avec eux sur d'autres projets. Hautement recommandé!",
          "We had a problem with our AWS configuration and suddenly all our apps and websites shut down. We were in a panic and Falcon IT Consulting came to our rescue. They did a terrific job and quickly got our apps and websites up and running again. Their team is clear in communications and very responsive. We really enjoyed working with them":
            "Nous avons eu un problème avec notre configuration AWS et soudainement toutes nos applications et nos sites Web se sont arrêtés. Nous étions en panique et Falcon IT Consulting est venu à notre secours. Ils ont fait un travail formidable et ont rapidement remis en marche nos applications et nos sites Web. Leur équipe est claire dans les communications et très réactive. Nous avons vraiment apprécié travailler avec eux",
          "Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you":
            "Falcon Consulting a fait un excellent travail. Je suis heureux de travailler avec eux. Ils ont de grandes compétences dans la pile MERN. N'étant pas si féru de technologie, j'avais mes propres défis, mais leur équipe commerciale m'a aidé à chaque étape du voyage. J'espère que nous travaillerons très bientôt dans un avenir proche. Merci",

          //   blog section
          "With lots of unique blogs": "La soif de connaissance",
          "Read our blog": "Lire notre blog",
          "A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021":
            "Une tradition des Fêtes : les prolongations d'impôt devraient expirer à la fin de 2021",
          "What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?":
            "Que signifient les règles fiscales minimales mondiales pour les politiques fiscales des entreprises ?",

          // contact us
          "Contact Us": "Nous contacter",
          "Share Your Project/Idea with us!":
            "Partagez votre projet avec nous !",
          "Our Team Member will get back to you within 24 hours. ":
            "Un collaborateur vous répondra dans les 24 heures.",
          "Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours.":
            "Vous avez des questions sur un projet concret ? Ou voulez-vous simplement vous renseigner sur le développement offshore et voir s'il peut répondre à vos besoins ? Veuillez remplir le formulaire de contact et nous partagerons gratuitement notre expertise. Un collaborateur vous répondra dans les 24 heures.",
          "Schedule Meeting": "Planifier une réunion",
          Email: "E-mail",
          "Your Name": "votre nom",
          Phone: "Téléphoner",
          Budget: "Budget",
          "Type Your Message": "Votre message",
          Send: "Envoyer",
          "Click and join link": "Cliquez",

          //   footer
          Overview: "Aperçu",
          Solutions: "Solutions",
          "WHERE YOU CAN MEET": "OÙ NOUS SOMMES",
          "Our Offices": "Nos bureaux",
          "The services are provided at a flat rate, or according to a determined daily rate, based on your preference. In both cases, we guarantee you a quality service at a very competitive price.":
            "Les services sont fournis à un tarif forfaitaire, ou selon un tarif journalier déterminé, en fonction de votre préférence. Dans les deux cas, nous vous garantissons un service de qualité à un prix très compétitif.",
          Pages: "Pages",
          About: "À propos de",
          Services: "Prestations de service",
          "Our projects": "Nos projets",
          Contact: "Contact",
          Privacy: "Politique de Confidentialité",
          "Terms of Service": "Conditions d'utilisation",
          Cookies: "Cookies",
          "All Rights Reserved": "Tous droits réservés",

          //   About US
          //   About_Heaader
          "Our Goal Is To Exceed Your Expectations ":
            "Notre objectif est de dépasser vos attentes",
          "Healthy, skilled and ambitious team":
            "Une équipe saine, compétente et ambitieuse",

          //   About comapny Section
          "BEST company": "Votre partenaire idéal",
          "About Falcon Consulting": "À propos de Falcon Consulting",
          "Falcon Consulting is a development agency that specializes in web application development and consultancy in the field of new technologies. We combine rigor, quality of work and optimized production costs. Founded in 2015, Falcon Consulting started out as a consulting company which worked with large companies such as Microsoft, Canon and Accor. In 2017, Falcon Consulting took off and became a development agency, bringing together over 10 years of experience in application development and project management in its team. Established in France, United States and Pakistan, the company is providing development services worldwide.":
            "Falcon Consulting est une agence de développement spécialisée dans le développement d'applications web et le conseil dans le domaine des nouvelles technologies. Nous allions rigueur, qualité de travail et coûts de production optimisés. Fondée en 2015, Falcon Consulting a commencé comme une société de conseil qui a travaillé avec de grandes entreprises telles que Microsoft, Canon et Accor. En 2017, Falcon Consulting prend son envol et devient une agence de développement, rassemblant plus de 10 ans d'expérience dans le développement d'applications et la gestion de projets dans son équipe. Implantée en France, aux États-Unis, au Pakistan et aux UAE, la société fournit des services de développement dans le monde entier.",
          // Modern Agency Section
          "We Are A Modern IT Agency": "Agence informatique moderne",
          "Accessible price, with no compromise on the Quality!":
            "Prix ​​accessible, sans compromis sur la Qualité !",
          "Office Loocations": "Bureaux",
          "Years of Excellence": "Années d'excellence",
          "Successfull Projects": "Projets réussis",
          "Client satisfication": "Satisfaction client",

          // our vision section
          "We believe our vision": "Qui nous sommes",
          "Our Vision": "Notre vision",
          "We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work. ":
            "Nous croyons fermement que le talent et les compétences n'ont pas de frontière. En offrant un excellent environnement de travail dans nos locaux, nous permettons à nos partenaires de bénéficier de prix compétitifs avec un travail qualitatif.",
          "IN-HOUSE TEAM": "ÉQUIPE INTERNE",
          TECHNOLOGIES: "TECHNOLOGIES",
          "USER-FOCUSED PROCESS": "MEILLEUR EXPÉRIENCE UTILISATEUR",
          "SMOOTH COMMUNICATION": "COMMUNICATION FLUIDE",
          "8 YEARS' EXPERIENCE": "8 ANS D'EXPÉRIENCE",
          "FULL FLEXIBILITY": "FLEXIBILITÉ TOTALE",
          "HIGH QUALITY CODE": "CODE DE HAUTE QUALITÉ",
          TRANSPARENCY: "TRANSPARENCE",

          //   Blogs
          // Blog_Header
          "FALCON BLOG": "BLOG FALCON",
          "Always looking into improving ourselves.":
            "La recherche de l'amélioration en permanence",
          "The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects.":
            "Les articles rédigés ci-dessous par notre équipe reflètent nos valeurs et notre expertise en matière de collaboration dans des projets de moyenne et grande envergure",
          "Your Email": "Votre e-mail",
          SUBSCRIBE: "S'ABONNER",

          //   Our Projects
          // Projects_Header
          "ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!":
            "TOUS LES PROJETS COMMENCENT PAR UNE SIMPLE IDÉE. LAISSEZ NOUS PRENDRE SOIN DU RESTE !",
          "Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. ":
            "Falcon Consulting a eu l'opportunité de travailler sur différents types de projets pour ses clients. Nous avons mis en place un processus efficace afin de livrer un travail qualitatif dans les délais.",
          "Software house with a team of experienced developers and project managers":
            "Éditeur de logiciels avec une équipe de développeurs et de chefs de projet expérimentés",
          Software: "Logiciel",
          SOFTWARE: "Logiciel",
          Website: "Site Internet",
          WEBSITE: "Site Internet",
          All: "Tout",
          ALL: "Tout",
          "Mobile Application": "Application mobile",
          "MOBILE APPLICATION": "Application mobile",
          "UI/UX": "UI/UX",
          "Data & Cloud": "Data & Cloud",
          View: "Voir",
          VIEW: "VOIR",

          "See more": "Voir plus",

          //   Services
          // Services_Header
          "Skilled Developers for your Projects":
            "L'extension de votre équipe tech !",
          "We are ready to handle your ambitious projects!":
            "Nous sommes prêts à gérer vos projets ambitieux !",
          "Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !":
            "Avez-vous besoin de développeurs pour des tâches à court ou à long terme ? Notre approche tout compris vous permettra d'obtenir le meilleur match !",
          "More information": "More information",
          "Get This Service": "Obtenir ce service",

          // key Features Section
          "Key features": "Principales caractéristiques",
          "This sounds simple, but it is beneficial to your business success.":
            "La simplicité au service du succès de votre entreprise.",
          // "SMOOTH COMMUNICATION": "SMOOTH COMMUNICATION",
          TECHNOLOGIES: "TECHNOLOGIES",
          "In-House Team": "Équipe interne",
          "Product Development": "Développement produits",
          "FULL FLEXIBILITY": "FLEXIBILITÉ TOTALE",
          "USER-FOCUSED PROCESS": "PROCESSUS AXÉ SUR L'UTILISATEUR",
          "Ux research": "Meilleure expérience UX",
          "Many of these business ideas are home-based. While they may not make you a billionaire.":
            "Concrétisons vos projets.",

          // work Process Section
          "We solve clients' projects in a simple & efficient way":
            "Nous résolvons les projets de nos clients de manière simple et efficace",
          "We always follow the standard work process":
            "Nous suivons toujours les meilleurs pratiques.",
          "Project Requirement": "Exigence du projet",
          Designing: "Conception",
          Development: "Développement",
          "Live Testing": "Tests",
          "We do research and validate the specs before we start any projects":
            "Nous analysons et validons les spécifications avant de commencer tout projet",
          "Designed according to client's requirements":
            "Conçu selon les exigences du client",
          "Developed by skilled team developers":
            "Développé par une équipe de développeurs qualifiés",
          "After completing the work, live test is done":
            "Une fois le travail terminé, des tests sont effectués",
          UX: "UX",
          Wireframing: "Maquetage",
          "UI Design": "Conception de l'interface utilisateur",
          "Design Review": "Revue de la conception",
          "Then Wireframing according to requirements":
            "Puis maquetage selon les besoins",
          "We do ux research before we start any projects":
            "Nous validons la meilleur expérience UX avant de commencer tout projet",

          // Our Deveopers Section
          "OUR DEVELOPERS ARE": "NOS DÉVELOPPEURS SONT",
          "OUR DEVELOPERS FOR YOUR PROJECTS":
            "NOS DÉVELOPPEURS POUR VOS PROJETS",
          Agile: "Agile",
          Experienced: "Expérimenté",
          Trained: "Qualifié",
          "Dedicated to your projects": "Dédié à vos projets",
          "We train them in agile management methods so that our partners can take full advantage of them":
            "Nous les formons au développement agile pour que une efficacité de collaboration optimale",
          "We are Flexible in the search for the ideal  profile and we can can offer you very experienced profiles":
            "Nous sommes flexibles dans la recherche du profil idéal et nous pouvons vous proposer des profils très expérimentés",
          "We train our developers ourselves by positioning them on internet internet project in order to ensure that we transmit to them the “soft skills” as well as the hard skills":
            "Nous formons nous-mêmes nos développeurs en les positionnant sur des projets interns afin d'assurer que nous leur transmettions aussi bien les compétences de savoir-faire que le savoir-être.",
          "Our developers work full-time on your projects and our collaborative tools guarantee Transparency regarding the progress of task":
            "Nos développeurs travaillent à plein temps sur vos projets et nos outils collaboratifs vous garantissent une transparence sur l'avancement des tâches",

          // developer work process
          "We solve clients' projects in a simple & efficient way":
            "Nous résolvons les projets de nos clients de manière simple et efficace",
          "We always follow the standard work process":
            "Nous suivons toujours les meilleurs pratiques.",
          "You need developer": "Vous avez besoin d'un développeur",
          "We organize a meeting in order to better understand your needs, as well as the ideal profile sought for your project. If your needs change during this process, don't panic: we take into account any last minute changes!":
            "Nous organisons une rencontre afin de mieux comprendre vos besoins, ainsi que le profil idéal recherché pour votre projet. Si vos besoins évoluent au cours de ce processus, pas de panique : nous prenons en compte tout changement de dernière minute !",
          "Targeting the ideal profile": "Cibler le profil idéal",
          "For this step, it's up to us! Our HR team searches among a rich and talented pool of developers for the best profiles to offer. We organize HR and technical interviews with these developers, in order to pre-select the best candidates.":
            "Pour cette étape, c'est à nous ! Notre équipe RH recherche parmi un vivier riche et talentueux de développeurs les meilleurs profils à proposer. Nous organisons des entretiens RH et techniques avec ces développeurs, afin de présélectionner les meilleurs candidats.",
          "Proposal from developers": "Proposition de développeurs",
          "We send you the profile of the pre-selected developers. You can then decide to carry out interviews with them, in order to confirm your choice. When you decide to do an interview with a developer, there is no commitment that binds you: keep your mind free!":
            "Nous vous envoyons le profil des développeurs présélectionnés. Vous pouvez alors décider de réaliser des entretiens avec eux, afin de confirmer votre choix. Lorsque vous décidez de faire un entretien avec un développeur, il n'y a aucun engagement : gardez l'esprit libre !",
          Recruitment: "Recrutement",
          "Have you found your ideal profile? Congratulation ! We conclude the contract, which is without long-term commitment, so that you retain all your flexibility. The developer works directly on your projects, without going through us.":
            "Avez-vous trouvé votre profil idéal ? Félicitation ! Nous concluons le contrat, qui est sans engagement de temps, afin que vous conserviez toute votre flexibilité. Le développeur travaille directement sur vos projets, sans passer par nous.",
          "Continuous improvement": "Amélioration continue",
          "We organize at a determined frequency points on our collaboration. The principle is to ensure that the collaboration is optimal, and to target the best potential points of improvement. Once identified, we offer, at our expense, adequate training for our developers in order to constantly increase the quality of the collaboration.":
            "Nous organisons à une fréquence déterminée des points sur notre collaboration. Le principe est de s'assurer que la collaboration est optimale, et de cibler les points d'amélioration potentiels. Une fois identifiés, nous proposons, à nos frais, des formations adéquats à nos développeurs afin d'augmenter constamment la qualité de la collaboration.",

          // Project Details Basic Modal
          // Tilt
          "Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.":
            "Plateforme web et mobile mettant en relation restaurants, entreprises et chauffeurs-livreurs pour des livraisons de repas en masse en Martinique. Ce concept malin permet à chaque client d'économiser sur les frais de livraison, car ils sont partagés entre tous ceux qui passent une commande.",
          "The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.":
            "Un système ingéieux permet aux client de commander des plats mixtes entre plusieurs restaurants d'un même quartier. Ensuite, les clients sont informés de l'état de la commande et peuvent enfin évaluer l'expérience globale.",
          "On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.":
            "Côté restaurant, il est possible de créer et de gérer un menu personnalisé, de voir toutes les commandes entrantes et de changer leur statut.",
          "On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. ":
            "Côté chauffeurs-livreurs, l'application indique les plats à emporter et à livrer, avec toutes les informations de localisation. Le livreur informe automatiquement les utilisateurs de l'avancement de la commande, avec des notifications-push.",

          // Issyne
          "Mobile platform for connecting students and teachers. It is an application that stands out for its ability to get in touch with teachers instantly., based on the availabilities. This application has an internal messaging system, with all the features such as sending multimedia files, sending voice messages, etc...":
            "Plate-forme mobile pour connecter les étudiants et les enseignants. Il s'agit d'une application qui se distingue par sa capacité à entrer en contact avec les enseignants instantanément, en fonction de leurs disponibilités. Cette application dispose d'un système de messagerie interne, avec toutes les fonctionnalités telles que l'envoi de fichiers multimédias, l'envoi de messages vocaux, etc.",
          "Students can rate their teacher, and see the history of past classes (via a PDF file generated at the end of the course). ":
            "Les étudiants peuvent noter leur professeur, et voir l'historique des cours passés (via un fichier PDF généré à la fin du cours).",
          "A system of remuneration via tokens has been created.":
            "Un système de rémunération via des tokens a été créé.",
          "The project owner is Salah Didouche, who made a name for himself in the world of startups with the TDP platform (Transporteurs du Pauvre).":
            "Le porteur de projet est Salah Didouche, qui s'est fait un nom dans le monde des startups avec la plateforme TDP (Transporteurs du Pauvre).",
          "Application completed and tested, launch pending owner availability. ":
            "Application terminée et testée, lancement en attente de disponibilité du propriétaire.",

          // Winaa
          "Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. ":
            "Winaa est un job board, sous la forme d'une application mobile et web, de mise en relation entre entreprises et alternants.",
          "A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. ":
            "Un algorithme de matching, basé sur plusieurs critères, calcule automatiquement un pourcentage de compatibilité entre un étudiant et une offre d'emploi. L'expérience utilisateur est similaire à l'application Tinder.",
          "Once the matching is done, a calendar allows the student to book an interview session with the company.":
            "Une fois le matching effectué, un calendrier permet à l'étudiant de réserver une séance d'entretien avec l'entreprise.",
          "The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. ":
            "La plateforme récupère (scrape) automatiquement toutes les offres de sites de référence en France, et les ajoute à la base de données de Winaa.",
          "Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions. ":
            "Les entreprises disposent d'un tableau de bord complet leur permettant de gérer leurs offres, de voir les matchs potentiels et d'accepter les créneaux d'entretien.",

          // Orgaplan
          "Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.":
            "Orgaplan est une plateforme complexe et complète permettant la gestion logistique de grands chantiers, en zones très denses (comme Paris - La Défense, etc...). La plate-forme est actuellement utilisée sur les chantiers de construction de Vinci, afin de faciliter leurs activités logistiques.",
          "Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. ":
            "Disponible en version web et mobile, avec 5 types d'utilisateurs : Super admin / Admin / Entreprise / Agent de traffic / Agent de traffic tampon. Chaque utilisateur a ses propres droits et fonctionnalités, permettant une infinité de scénarios, selon les situations réelles sur site.",
          "Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.":
            "Possibilité de créer et de dessiner le Plan d'Installation de Chantier, ainsi que les bâtiments et les aires de stockage. Possibilité de créer des livraisons et de suivre l'état général du chantier.",
          "Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. ":
            "Falcon Consulting est spécialisé dans les projets de construction numérique, et nous avons aidé notre partenaire à finaliser son cahier des charges afin d'obtenir la meilleure expérience utilisateur.",

          //    Orientator
          "Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire. ":
            "Orientator est une application web qui permet aux lycéens de faire leur meilleur choix de carrière, après avoir rempli un questionnaire en ligne personnalisé.",
          "The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile. ":
            "Le questionnaire se présente sous la forme d'un arbre décisionnel, avec des questions discriminantes et non discriminantes, aidant à comprendre le profil de l'utilisateur.",
          "At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers.  ":
            "À la fin du questionnaire, un algorithme complexe génère une liste de formations et d'écoles post-bac qui correspondent le mieux au profil de l'élève. Cet algorithme calcule un score selon plusieurs critères, comme la distance, la sélectivité ou encore la durée du cours, et un pourcentage de compatibilité en fonction des réponses de l'étudiant.",

          // Kidcab
          "Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.":
            "Kidcab est une application mobile visant à aider les parents à trouver des chauffeurs pour les activités de leurs enfants et à suivre leur emplacement en toute sécurité. Pour notre partenaire, nous avons développé deux applications mobiles et une application web de Gestion des courses",
          "The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. ":
            "L'application mobile Chauffeur permet de recevoir des offres de courses et d'avoir un aperçu des activités à venir et passées. Lors d'un trajet, l'application présente des fonctionnalités similaires à celles d'Uber : suivi en direct du trajet à effectuer, etc...",
          "The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides.":
            "L'application mobile Clients montre l'emplacement en direct du conducteur et permet de suivre tous les trajets passés et à venir.",
          "Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.":
            "Enfin, le site de Gestion des courses est destiné à l'administrateur de Kidcab pour créer, gérer et assigner efficacement les activités de l'entreprise. Un outil de gestion des devis et des factures intégré à l'application a également été créé.",
          "This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. ":
            "Ce projet a nécessité de travailler l'optimisation du code, et surtout tous les appels d'API afin de minimiser les coûts d'exploitation pour les activités de courses en direct.",

          // PERMISPOP
          "Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.":
            "Permispop est une plateforme web mettant en relation des étudiants, des moniteurs indépendants et des auto-écoles. Chaque type d'utilisateur dispose d'une interface dédiée, lui permettant de gérer efficacement ses activités.",
          "The platform offers several features such as :":
            "La plateforme offre plusieurs fonctionnalités telles que :",
          "- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.":
            "- la possibilité de rechercher un moniteur avec une carte intéractive, et de réserver une séance selon sa disponibilité.",
          "- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;":
            "- La fonction Agenda permet aux auto-écoles et aux moniteurs d'avoir une vue d'ensemble de toutes les activités et de les gérer efficacement",
          "- At the end of each session, the student can rate the instructor and provide feedback to the platform; ":
            "- À la fin de chaque session, l'étudiant peut évaluer l'instructeur et faire part de ses commentaires à la plateforme ;",
          "- An internal messaging system;": "- Une messagerie interne",
          "- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. ":
            "- Un livret de conduite numérique, permettant aux moniteurs d'avoir un aperçu du niveau de chaque élève, et d'ajouter les éventuels progrès réalisés",

          // ZypZap
          "ZypZap is a gaming platform by Falcon IT.":
            "ZypZap est une plateforme éducative dans le domaine du gaming.",
          "It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.":
            "Elle est destinée à la fois aux apprenants et aux créateurs, l'objectif étant de permettre d'heberger simplement des contenus éducatifs.",
          "•	For learners, ZypZap helps them to become Pro players.":
            "Pour les apprenants, ZypZap les aide à devenir des joueurs Pro.",
          "•	Full gameplay courses are available on this site.":
            "Des cours de gameplay complets sont disponibles sur ce site.",
          "•	For creators, gamers teach, what they are good at":
            "Pour les créateurs, les joueurs enseignent leur expertise et sont rémunérés en conséquence.",
          "•	Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.":
            "Un éditeur de vidéo complet permet aux créateurs de contenu de concevoir des cours de qualité.",

          // Quadra Base
          "Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.":
            "Quadrabase est une plateforme web permettant aux bureaux d'études de générer automatiquement des documents d'appel d'offres dans le domaine de la construction : Spécification de projet, Estimation des coûts de projet, Modèle d'appel d'offres de projet. La plate-forme dispose d'une base de données bien structurée et à plusieurs niveaux, permettant d'inclure des données adaptés, en fonction des détails du projet.",
          "Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. ":
            "Notre client étant un architecte avec plus de 30 ans d'expérience dans le domaine, nous avons dû faire preuve d'une grande capacité d'adaptation pour appréhender correctement le projet, et en comprendre tous les aspects techniques.",
          "This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. ":
            "Ce projet est ambitieux et vise à révolutionner l'approche de la conception dans le domaine de la construction en France.",

          // Design confection
          "A web app designed to help customers with customized stitching to receive your creation at your home.":
            "Application Web conçue pour aider les clients souhaitant des coutures personnalisées à recevoir leurs créations à domicile. ",
          "User login to register and add information regarding customized dress like color combination, stuff design, etc.":
            "L'expérience utilisateur optimisée permet aux utilisateurs de créer leur vetement personnalisées de façon simple et intuitive : choix du modèle, des tailles, des couleurs, etc...",
          "After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.":
            "Après l'inscription, les consommateurs publient des annonces contenant des idées et plus de 100 confecteurs créatifs envoient les coûts estimés.",
          "Choose your designer with 99% accuracy as design confection brings your ideas to life.":
            "Possibilité d'analyser chaque confecteur et de choisir, puis évaluer celui correspondant le mieux aux attentes.",

          // Tajweed Made Easy
          "Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.":
            "Tajweed Made Easy est une application développée par Falcon IT. Site Web et application basés sur l'apprentissage du Coran avec les règles appropriées de Tajweed et Makharij.",
          "•	User can signup and start learning Quran with Tajweed.":
            "L'utilisateur peut s'inscrire et commencer à apprendre le Coran avec Tajweed",
          "•	Practice lessons are available.":
            "Des cours pratiques sont disponibles.",
          "•	User can repeat the lesson at any time without an internet connection":
            "L'utilisateur peut répéter la leçon à tout moment sans connexion Internet",
          "•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.":
            "Sur le site, des livres sont disponibles dans différentes langues, rendant l'application accessible au plus grand nombre !",
          // EZBoxmedia
          "EZBox media is a platform providing different services including":
            "EZBox media est une plate-forme fournissant différents services, notamment",
          Advertising: "Publicité:",
          "•	Advertising by understanding how a user can react to the advertisement shown to them.":
            "Publicité en analysant le comportement des utilisateurs face au contenu présenté.",
          "•	Target ads based on non-personal criteria.":
            "Annonces ciblées en fonction de critères non personnels.",
          "Product development": "Développement de produits",
          "•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today.":
            "Le support EZBox aide au développement de produits pour les produits de nouvelle génération.",
          "Chromium Browser": "Navigateur Chrome",
          "•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. ":
            "EZBoxmedia a travaillé avec les principaux fabricants d'électronique grand public pour concevoir et fournir des solutions clés en main.",

          // TELEHEALTH PLATFORM
          "Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely.":
            "La plateforme de télésanté (nom du projet confidentiel) est une application web et mobile américaine qui permet aux kinésithérapeutes d'analyser à distance les mouvements de leurs patients.",
          "The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not. ":
            "Le patient est filmé en train d'effectuer différents types d'exercices, et l'outil détecte et calcule les angles du corps de celui-ci (tels que ses jambes, ses bras, ses chevilles, sa taille, etc.). Le programme analyse ensuite les données en fonction de règles créées en internes, et en déduit si les mouvements sont correctement réalisés ou non.",
          "The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.":
            "La détection des mouvements se fait à l'aide de la technologie Mediapipe, et nécessite une connaissance pointue en matière de traitement d'images afin d'assurer une fluidité et une précision des résultats finaux.",

          // Legal Mentions
          "Legal Mentions": "Mentions Légales",
          Definitions: "Définitions",
          "Presentation of the website": "Présentation du site",
          "General conditions of use of the site and the services offered":
            "Conditions générales d'utilisation du site et des services proposés",
          "Description of the services provided":
            "Description des services fournis",
          "Contractual limitations on technical data":
            "Limitations contractuelles sur les données techniques",
          "Intellectual property and counterfeits":
            "Propriété intellectuelle et contrefaçons",
          "Limitations of liability": "Limitations de responsabilité",
          "Personal data management": "Gestion des données personnelles",
          "Incident notification": "Notification d'incident",
          "Hypertext links 'cookies' and internet tags":
            "Liens hypertextes 'cookies' et balises internet",
          "Applicable law and attribution of jurisdiction":
            "Droit applicable et attribution de juridiction",
        },
      },
    },
    fallbackLng: "fr",
    debug: true,
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
