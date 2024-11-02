export type projectType = {
  title: string
  stacks: string[]
  codeLink?: string | null
  liveLink: string
  isFeatured?: boolean
  imageUrl: string
  desc: string[]
  id: string
  tasks?: string[]
  category?: string
  slug: string
  images: string[]
  highlights?: string[] | undefined
  challenges?: string[] | undefined
  solutions?: string[] | undefined
  conclusion?: string
}

export const projectList: projectType[] = [
  {
    id: '1',
    slug: 'will-be-there',
    title: 'Will be There',
    desc: [
      'An event planning web application designed to streamline the process of organizing events. A hackhathon project worked on my a team of 8.',
      'As part of a team of 8, including a project manager, UI/UX designers, and both frontend and backend developers, I contributed as a frontend developer.'
    ],
    imageUrl: '/projects/willbethere.netlify.app.jpeg',
    images: [
      '/projects/project 1/iPhone-13-PRO-MAX-willbethere.netlify.app.png',
      '/projects/project 1/Galaxy-Tab-S7-willbethere.netlify.app.png',
      '/projects/project 1/Macbook-Air-willbethere.netlify.app.png'
    ],
    isFeatured: true,
    stacks: ['ReactJS', 'Tailwind', 'HTML', 'CSS'],
    liveLink: 'https://willbethere.netlify.app',
    codeLink: 'https://github.com/WillBeThere-24/frontend/',
    tasks: [
      'Authentication and Authorization ',
      'User can cretaed an dupdate event'
    ],
    category: 'web development',
    challenges: [
      'Working under tight deadlines during the hackathon to deliver a fully functional MVP.',
      'Implementing seamless integration between event creation, email invitations, and RSVP tracking.'
    ],
    solutions: [
      'Adopted agile methodologies to prioritize tasks and collaborate efficiently, ensuring all key features were delivered on time.',
      'Leveraged React components and state management to build a responsive and interactive UI within the short timeframe.'
    ],
    highlights: [
      'Collaborated with UI/UX designers to implement an intuitive and responsive interface that enhances user experience.',
      'Developed the frontend functionality for users to create events, customize details, and manage guest lists.',
      'Implemented a feature allowing users to invite attendees via email or share a link, making it easy for guests to RSVP.',
      'Worked closely with backend developers to integrate APIs for real-time event management and RSVP tracking.'
    ],
    conclusion: `The "Will Be There" project was a success, showcasing the power of teamwork and agile development. The web application not only met the hackathon goals but also provided users with an effective tool for event planning and management. My role as a frontend developer was crucial in delivering a polished and user-centric interface. The team emerged 2nd placed in the competition`
  },
  {
    id: '2',
    slug: 'vantage-ai',
    title: 'Vantage AI',
    desc: [
      'Vantage is an AI-driven tool created during a hackathon to help users extract, manipulate, and repurpose content from PDF files.',
      'It provides features like converting PDFs to various formats, generating quizzes, and offering contextual assistance.'
    ],
    imageUrl: '/projects/vantage-ai/vantage.acadeva.xyz hero.png',
    images: [],
    isFeatured: true,
    stacks: ['NextJS', 'Tailwind', 'Supabase', 'Gemini AI', ''],
    liveLink: 'https://vantage.acadeva.xyz',
    codeLink: 'https://willbethere.netlify.app',
    tasks: [
      'Integrated a PDF parsing algorithm with AI-based text extraction.',
      'Built a responsive UI for file uploads, content previews, and download options.'
    ],
    category: 'web development',
    challenges: [
      'Handling large PDF files with complex formatting.',
      'Achieving high accuracy in AI text extraction and formatting.',
      'Building interactive and responsive features under a strict timeline.'
    ],
    solutions: [
      'Optimized file handling to prevent performance bottlenecks. Used 3 google drive storage to provide a max user storage of 200MB',
      'Implemented Tailwind CSS to streamline UI responsiveness and styling.'
    ],
    highlights: [
      'Collaborated with UI/UX designers to implement an intuitive and responsive interface that enhances user experience.',
      'AI-powered contextual assistance for quick information retrieval.'
    ],
    conclusion: `This project showcased the power of AI and efficient parsing, creating a user-friendly, interactive experience for handling PDF content. The project was built by a team of 4, a designer, AI engineer, fullstack engineer and I`
  },
  {
    id: '3',
    slug: 'dev-links',
    title: 'Dev Links',
    desc: [
      'Dev Links is a platform for developers to easily organize, share, and access important resources and links in one place',
      ' Designed with simplicity and efficiency, it ensures easy collaboration and resource tracking.'
    ],
    imageUrl: '/projects/dev-links/dev-links-idighs.vercel.app-hero.png',
    images: [],
    isFeatured: true,
    stacks: ['NextJS', 'Tailwind', 'Firebase'],
    liveLink: 'https://dev-links-idighs.vercel.app',
    codeLink: 'https://willbethere.netlify.app',
    tasks: [
      'Developed a user interface using Next.js and Zustand for state management.',
      'Created a seamless link categorization and tagging system.',
      'Implemented search and filtering capabilities for better link accessibility.',
      'Added user authentication and profile settings for personalized link management.'
    ],
    category: 'web development',
    challenges: [
      'Ensuring secure and reliable user authentication',
      'Optimizing for both desktop and mobile devices',
      'Fetching data properly from firebase and also handling the data'
    ],
    solutions: [
      'Integrated Firebase for secure authentication and real-time data handling and used Nextjs middlewares and server to handle authentication securely',
      'Implemented Tailwind CSS for responsive design, ensuring a consistent user experience across devices.'
    ],
    highlights: [
      'User profiles with personalized settings and secure authentication.',
      'Clean, intuitive UI with responsive design using Tailwind CSS.'
    ],
    conclusion: `Dev Links offers a straightforward yet powerful solution for developers to manage and share resources, with a user-centric interface for streamlined access and collaboration.`
  },
  // {
  //   id: "2",
  //   slug: "selah",
  //   title: "Selah ",
  //   desc: [
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem a rerum corporis fugit dolores!",
  //     "",
  //   ],
  //   imageUrl: "/projects/Selah/selah-timbu-cloud-shop.jpeg",
  //   images: [],
  //   isFeatured: true,
  //   stacks: ["ReactJS", "Tailwind"],
  //   liveLink: "https://timbu-cloud-store-idighs.netlify.app/shop",
  //   codeLink: "https://github.com/Idighekere/Timbu-Cloud-Store",
  //   tasks: [],
  //   category: "frontend",
  //   challenges: [
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  //   ],
  //   solutions: [
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  //   ],
  //   highlights: [
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  //   ],
  //   conclusion:
  //     "In conclusionLorem, ipsum dolor sit amet consectetur adipisicing elit.",
  // },
  // {
  //   id: "3",
  //   slug: "ecommerce-site-0",
  //   title: "ECommerce Site ",
  //   desc: [
  //     "This e-commerce site was developed as part of my learning journey with React.",
  //     "The project focuses on building a functional and user-friendly shopping experience, complete with essential e-commerce features.",
  //   ],
  //   imageUrl: "/projects/willbethere.netlify.app.jpeg",
  //   images: [],
  //   isFeatured: true,
  //   stacks: ["ReactJS", "Tailwind"],
  //   liveLink: "https://willbethere.netlify.app",
  //   codeLink: "https://github.com/Idighekere/eCommerce-Site",
  //   tasks: [],
  //   category: "frontend",
  //   challenges: [
  //     "Handling the dynamic state of the cart as users add, remove, and clear items.",
  //     " Ensuring a smooth and responsive user experience across all devices.",
  //   ],
  //   solutions: [
  //     "Used Context API to efficiently track and update the cart’s contents in real-time.",
  //     "Leveraged React’s component-based architecture to build reusable elements for the cart and product pages.",
  //   ],
  //   highlights: [
  //     " Implemented a feature allowing users to add products to their cart with a single click.",
  //     "Developed functionality to delete individual items or clear the entire cart, giving users full control over their purchases.",
  //     " Created detailed product pages where users can view item descriptions, prices, and images.",
  //   ],
  //   conclusion:
  //     " This project was a valuable learning experience, allowing me to apply React concepts to a real-world scenario. The result is a functional e-commerce site that demonstrates my ability to create dynamic and interactive web applications.",
  // },
  {
    id: '4',
    slug: 'idighekere-udo-v2',
    title: 'Idighekere Udo - My Portfolio',
    desc: [
      'My portfolio provides a detailed view of each project, allowing users to explore the work I’ve done comprehensively.',
      'Each project includes multiple screens, a breakdown of challenges faced, features implemented, solutions to challenges, and share icons for easy sharing.'
    ],
    imageUrl: '/projects/this-portfolio/idighekere-udo.brimble.app.jpeg',
    images: [],
    isFeatured: false,
    stacks: ['ReactJS', 'Tailwind'],
    liveLink: 'https://idighekere-udo-v2.netlify.app',
    codeLink: 'https://github.com/Idighekere/My-Portfolio-V2',
    tasks: [],
    category: 'frontend',
    challenges: [
      'Getting the right color scheme, design of my choice',
      'Configuring the contat form to receive messages',
      'Implementing timeline for the experience and education pages'
    ],
    solutions: [
      "Sourced other developer's portfolio for inspiration",
      'Used an easygoing platform to achieve it (smtpexpress.com)'
    ],
    highlights: [
      'Users can browse through various screens to get a visual overview of the project.',
      'Detailed explanations of the challenges I encountered during development and the strategies I used to overcome them.',
      'A summary of the core features that make each project unique and functional.',
      'Integrated share icons to allow users to easily share my projects on social media platforms.'
    ],
    conclusion:
      ' This portfolio effectively showcases my development process, providing a transparent and comprehensive view of my work. The detailed project pages enable users to understand the scope of each project and the problem-solving approaches I’ve employed.'
  },
  {
    id: '5',
    slug: 'joshua-udom-portfolio',
    title: "Joshua Udom's Portfolio",
    desc: [
      'I developed a portfolio website for a graphic designer, showcasing their work in an organized and visually appealing manner. ',
      ' The site was designed to highlight the designer’s creativity and professionalism.'
    ],
    imageUrl: '/projects/joshua-udom/joshua-udom.brimble.app.jpeg',
    images: [],
    isFeatured: false,
    stacks: ['ReactJS', 'Tailwind'],
    liveLink: 'https://joshua-udom.brimble.app',
    codeLink: 'https://github.com/Idighekere/Joshua-Udom',
    tasks: [],
    category: 'frontend',
    challenges: [
      'Ensuring that the portfolio was easy to navigate while effectively displaying a wide range of design categories.',
      ' Creating an intuitive and engaging user experience with the lightbox functionality.'
    ],
    solutions: [
      'Used React to build dynamic tabs that filter designs based on category, providing a seamless browsing experience.',
      'Integrated a lightbox feature to enhance user interaction, allowing for detailed viewing of each design.'
    ],
    highlights: [
      'Implemented tabs to organize the designer’s work by category, making it easy for visitors to browse specific types of designs.',
      'Added a lightbox to each design image, allowing users to view larger versions of the designs without leaving the page.'
    ],
    conclusion:
      'The graphic designer portfolio successfully showcases the artist’s work in an organized and user-friendly manner. The categorized tabs and lightbox features provide a professional and interactive platform for potential clients to explore the designer’s portfolio.'
  },
  {
    id: '6',
    slug: 'npfl-update-6',
    title: 'NPFL Updates Sports Blog',
    desc: [
      'A comprehensive wordPress site for a sport organization, NPFL Updates,',
      ' a sports organization focused on providing up-to-date news and updates on the Nigerian Professional Football League (NPFL).',
      'The site serves as a central hub for fans and stakeholders to access the latest news, match results, and team information.'
    ],
    imageUrl: '/projects/npflupdates.com.jpeg',
    images: [],
    isFeatured: false,
    stacks: ['Wordpress'],
    liveLink: 'https://www.npflupdates.com',
    // codeLink: "https://willbethere.netlify.app",

    tasks: [],
    category: 'wordpress-design',
    challenges: [
      'Addressing and troubleshooting occasional site errors to ensure continuous availability.'
    ],
    solutions: ['Regurlary checking sites for possible error'],
    highlights: [
      'Ensured the site is fully responsive, providing an optimal viewing experience across devices.',
      'Created a visually engaging and user-friendly design that reflects the dynamic nature of sports.'
    ],
    conclusion: `The project resulted in a high-performance website that effectively meets NPFL Updates' needs. It provides timely NPFL updates and engages users, serving as a valuable resource for sports news.`
  },
  {
    id: '7',
    slug: 'chirp-landing-page-clone',
    title: 'Chirp - Twitter Analytics',
    desc: [
      'I cloned the Chirp landing page, which offers advanced Twitter analytics.',
      'The design highlights the platform’s ability to provide deep insights into user engagement and trends.'
    ],
    imageUrl: '/projects/chirp/chirp-landing-page-idighs.netlify.app.jpeg',
    images: [],
    isFeatured: false,
    stacks: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://chirp-landing-page-idighs.netlify.app/',
    codeLink: 'https://github.com/Idighekere/Chirp-Landing-Page-Clone',

    tasks: [],
    category: 'landing-page',
    challenges: [
      'Recreating complex UI elements while maintaining pixel-perfect accuracy.',
      'Making images responsive on all devices'
    ],
    solutions: [
      'Utilized CSS Grid and Flexbox to achieve the precise layout and responsiveness.',
      'Used percentage sizes with max and min rather than fixed pixelated values'
    ],
    highlights: [
      'Focused on responsive design to ensure seamless performance across devices.'
    ],
    conclusion: 'This is https://codewell.cc challenge'
  },
  {
    id: '8',
    slug: 'snipper-landing-page-clone',
    title: 'Snipper - Customize Code Snippets',
    desc: [
      'The Snipper landing page clone is all about customizing and sharing code snippets. ',
      'The design is minimalistic yet powerful, emphasizing'
    ],
    imageUrl: '/projects/snipper/snipper-landing-page-clone.netlify.app.jpeg',
    images: [],
    isFeatured: false,
    stacks: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://snipper-landing-page-clone.netlify.app/',
    codeLink: 'https://github.com/Idighekere/Snipper-Landing-Page',

    tasks: [],
    category: 'landing-page',

    highlights: [
      'Focused on creating a streamlined user experience that mirrors the simplicity of the product.',
      'Focused on responsive design to ensure seamless performance across devices.'
    ],
    conclusion: 'This is https://codewell.cc challenge'
  },
  {
    id: '9',
    slug: 'time-now-landing-page-clone',
    title: 'Time Now',
    desc: [
      'I cloned the Time Now landing page, which is focused on helping users post content when their audience is most active. ',
      'The design emphasizes time management and user engagement.'
    ],
    imageUrl: '/projects/time now/timenow-clone-idighs.netlify.app.jpeg',
    images: [],
    isFeatured: false,
    stacks: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://timenow-clone-idighs.netlify.app/',
    codeLink: 'https://github.com/Idighekere/Time-Now-Clone',

    tasks: [],
    category: 'landing-page',

    highlights: [
      'Ensured the design is both informative and visually engaging.',
      'Focused on responsive design to ensure seamless performance across devices.'
    ],
    conclusion:
      ' Created an engaging and informative clone that effectively communicates the importance of timing in social media posts.'
  }
]
