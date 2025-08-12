const projects = [
  {
    id: 1,
    title: 'AssuredLife - Insurance Platform',
    description:
      'AssuredLife is a modern, full-stack web application designed to streamline the process of purchasing and managing life insurance policies. It provides a secure, responsive, and role-based platform for customers, agents, and administrators.',
    images: [
      'https://i.ibb.co/Qjttxxz5/blog-image-4.jpg',
      'https://i.ibb.co/fd6NfcC5/blog-image-5.jpg',
      'https://i.ibb.co/qYL3bxMv/blog-image-3.jpg',
    ],
    liveDemo: 'https://assured-life.web.app/',
    github: 'https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-ronnie012',
    mainTechnology: ['React', 'React Router', 'Tailwind CSS', 'Daisy UI', 'Firebase', 'Express.js', 'MongoDB', 'Stripe'],
    challenges: 'One of the main challenges was to implement the Stripe payment gateway. I had to thoroughly read the official documentation to achieve this, which was a new technology for me. I also had to ensure that the platform is secure and scalable.',
    futurePlans: 'I am planning to add a mobile app for the platform. I also want to add more features like policy comparison and online payment options.',
  },
  {
    id: 2,
    title: 'TourZen - Tour Package Platform',
    description:
      'TourZen is a full-stack tour package booking platform designed to connect users with exciting travel experiences. It allows public users to explore available packages, authenticated users to book tours, and designated guides to add and manage their own tour offerings.',
    images: [
      'https://i.ibb.co/DPFtxwQX/Alpine-Hiking-Glacier-Tour.jpg',
      'https://i.ibb.co/b5Lp7RtQ/Arctic-Northern-Lights-Tour.jpg',
      'https://i.ibb.co/nqrbJM4d/Historical-City-Tour.jpg',
    ],
    liveDemo: 'https://tour-zen-012-upgraded.web.app/',
    github: 'https://github.com/ronnie012/b11a11-client-side-ronnie012',
    mainTechnology: ['Vite', 'React', 'React Router', 'Tailwind CSS', 'Daisy UI', 'Firebase', 'Express.js', 'MongoDB'],
    challenges: 'The main challenges was to successfully implement firebase authentication, backend verification, configuring Express.js server and connecting to MongoDB Database. I had to read the official documentations carefully and implement all the essentials. I also had to ensure that the website will be secure and can handle a large number of traffic.',
    futurePlans: 'I am planning to add a recommendation engine to the website. I also want to add payment options and improve the user experience.',
  },
  {
    id: 3,
    title: 'GigConnect - Freelance Marketplace',
    description:
      'Welcome to the client-side of GigConnect! This application provides the user interface for a freelance task marketplace, enabling users to post tasks, find work, and connect with skilled professionals. It is built with modern web technologies like React, Vite, TailwindCSS, and DaisyUI.',
    images: [
        'https://i.ibb.co/0pwJ9hYz/banner-1.jpg',
        'https://i.ibb.co/BHsBVKvG/banner-2.jpg',
        'https://i.ibb.co/xtZr9m2F/banner-3.jpg',
    ],
    liveDemo: 'https://gig-connect-012-upgraded.web.app/',
    github: 'https://github.com/ronnie012/b11a10-client-side-ronnie012',
    mainTechnology: ['Vite', 'React', 'React Router', 'Tailwind CSS', 'Daisy UI', 'Firebase', 'Express.js', 'MongoDB'],
    challenges: 'The main challenge was to implement the real-time updates using Firebase. I had to learn how to use the Firebase Realtime Database and Cloud Firestore. I also had to ensure that the app is responsive and works well on all devices.',
    futurePlans: 'I am planning to add more features like subtasks, comments, and file attachments. I also want to add more integrations with other apps like Slack and Google Calendar.',
  },
];

export default projects;