const projects = [
  {
    id: 1,
    title: 'Life Insurance Management Platform',
    description:
      'A comprehensive life insurance management platform built with the MERN stack. It includes features like policy management, claims processing, and user authentication. The platform is designed to be user-friendly and efficient, with a focus on security and data integrity.',
    images: [
      'https://picsum.photos/id/10/800/600',
      'https://picsum.photos/id/11/800/600',
      'https://picsum.photos/id/12/800/600',
    ],
    liveDemo: 'https://example.com/life-insurance-demo',
    github: 'https://github.com/your-username/life-insurance-platform',
    mainTechnology: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    challenges: 'One of the main challenges was to implement the real-time notification system. I had to use WebSockets to achieve this, which was a new technology for me. I also had to ensure that the platform is secure and scalable.',
    futurePlans: 'I am planning to add a mobile app for the platform. I also want to add more features like policy comparison and online payment.',
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description:
      'A feature-rich e-commerce website developed using React, Node.js, and MongoDB. It includes product catalog, shopping cart, checkout process, and payment gateway integration. The website is designed to be responsive and scalable, providing a seamless shopping experience.',
    images: [
      'https://picsum.photos/id/20/800/600',
      'https://picsum.photos/id/21/80um/600',
      'https://picsum.photos/id/22/800/600',
    ],
    liveDemo: 'https://example.com/ecommerce-demo',
    github: 'https://github.com/your-username/ecommerce-website',
    mainTechnology: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    challenges: 'The main challenge was to integrate the Stripe payment gateway. I had to read the Stripe documentation carefully and implement the payment flow. I also had to ensure that the website is secure and can handle a large number of transactions.',
    futurePlans: 'I am planning to add a recommendation engine to the website. I also want to add more payment options and improve the user experience.',
  },
  {
    id: 3,
    title: 'Task Management App',
    description:
      'A task management application built with React and Firebase. It allows users to create, assign, and track tasks, with real-time updates and notifications. The app is designed to be intuitive and easy to use, helping teams to stay organized and productive.',
    images: [
        'https://picsum.photos/id/30/800/600',
        'https://picsum.photos/id/31/800/600',
        'https://picsum.photos/id/32/800/600',
    ],
    liveDemo: 'https://example.com/task-management-demo',
    github: 'https://github.com/your-username/task-management-app',
    mainTechnology: ['React', 'Firebase', 'Tailwind CSS'],
    challenges: 'The main challenge was to implement the real-time updates using Firebase. I had to learn how to use the Firebase Realtime Database and Cloud Firestore. I also had to ensure that the app is responsive and works well on all devices.',
    futurePlans: 'I am planning to add more features like subtasks, comments, and file attachments. I also want to add more integrations with other apps like Slack and Google Calendar.',
  },
];

export default projects;