import EngineeringIcon from '@mui/icons-material/Engineering';
import SourceIcon from '@mui/icons-material/Source';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import NextJSIntroCert from '../assets/certs/next-js-intro-cert.png';
import NextJSAICert from '../assets/certs/nextjs-ai-cert.png';
import VanillaJSCert from '../assets/certs/vanilla-js-cert.png';
import CSSIcon from '../assets/skills/css.svg';
import DockerIcon from '../assets/skills/docker.svg';
import ExpressIcon from '../assets/skills/express.svg';
import FirebaseIcon from '../assets/skills/firebase.svg';
import GCPIcon from '../assets/skills/gcp.svg';
import GitIcon from '../assets/skills/git.svg';
import GitHubIcon from '../assets/skills/github.svg';
import GraphQLIcon from '../assets/skills/graphql.svg';
import HTMLIcon from '../assets/skills/html.svg';
import JSIcon from '../assets/skills/js.svg';
import MailChimpIcon from '../assets/skills/mailchimp.svg';
import MailgunIcon from '../assets/skills/mailgun.svg';
import MongoDBIcon from '../assets/skills/mongodb.svg';
import MaterialUIIcon from '../assets/skills/mui.svg';
import MySQLIcon from '../assets/skills/mysql.svg';
import NextJSIcon from '../assets/skills/nextjs.svg';
import { default as NodeIcon, default as NodeJsIcon } from '../assets/skills/nodejs.svg';
import OpenAIIcon from '../assets/skills/openai.svg';
import PostgreSQLIcon from '../assets/skills/postgresql.svg';
import ReactNativeIcon from '../assets/skills/react-native.svg';
import ReactQueryIcon from '../assets/skills/react-query.svg';
import ReactIcon from '../assets/skills/react.svg';
import RedisIcon from '../assets/skills/redis.svg';
import ReduxIcon from '../assets/skills/redux.svg';
import StripeIcon from '../assets/skills/stripe.svg';
import TailwindIcon from '../assets/skills/tailwind.svg';
import TSIcon from '../assets/skills/ts.svg';

import MoodAIPreview1 from '../assets/projects/moodai/preview1.png';
import MoodAIPreview2 from '../assets/projects/moodai/preview2.png';
import MoodAIPreview3 from '../assets/projects/moodai/preview3.png';
import MoodAIPreview4 from '../assets/projects/moodai/preview4.png';
import WhitelabelPreview1 from '../assets/projects/whitelabel/preview1.png';
import TripAdmitThrivePreview1 from '../assets/projects/tripadmit/preview1.png';
import TipDirectPreview1 from '../assets/projects/tipdirect/preview1.png';
import HealthcarePreview1 from '../assets/projects/healthcare/preview1.png';
import HealthcarePreview2 from '../assets/projects/healthcare/preview2.png';
import HealthcarePreview3 from '../assets/projects/healthcare/preview3.png';
import HealthcarePreview4 from '../assets/projects/healthcare/preview4.png';

export const InfoItems = [
  { label: 'Years of Experience', value: '4+', icon: EngineeringIcon },
  { label: 'Certificates', value: '5', icon: WorkspacePremiumIcon },
  { label: 'Projects Completed', value: '4', icon: SourceIcon },
];

export const StackItems = [
  { name: 'JavaScript', icon: JSIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: NodeJsIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
];

export const certificates = [
  {
    label: 'NestJS',
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-19567fba-09ab-4a78-acd9-73a5e9122159.jpg?v=1650488179000',
  },
  {
    label: 'Docker',
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-6704e13d-63d0-48fb-a518-a4e3cf5ca4c5.jpg?v=1682263609000',
  },
  { label: 'Vanilla JS', url: VanillaJSCert },
  { label: 'NextJS Introduction', url: NextJSIntroCert },
  { label: 'NextJS AI', url: NextJSAICert },
];

export const projects = [
  {
    id: 1,
    label: 'Tip Direct Mobile & Web',
    description: 'Innovative digital tipping solution',
    url: TipDirectPreview1,
  },
  {
    id: 2,
    label: 'TripAdmit Thrive',
    description: 'Cloud-based online booking solution',
    url: TripAdmitThrivePreview1,
  },
  {
    id: 3,
    label: 'Whitelabel',
    description: 'Ready-to-go website to roll out experiences',
    url: WhitelabelPreview1,
  },
  {
    id: 4,
    label: 'Mood AI',
    description: 'The journal app for tracking your mood with the help of AI. Make records every day, track your mood, change your life.',
    url: MoodAIPreview1,
  },
  {
    id: 5,
    label: 'HealthCare',
    description: 'The HealthCare app helps users to stay healthy. This application allows you to choose your family doctor, create appointments, check your medical history and be in touch with your doctor always and everywhere.',
    url: HealthcarePreview1,
  }
];

export const projectDetails = [
  {
    id: 1,
    label: 'Tip Direct Mobile & Web Application',
    description:
      'TipDirect App is a digital tipping and review solution built specifically for tour guides. The app provides a simple and intuitive way for guests to leave tips and feedback after their tour experience. By eliminating barriers like app installations or logins, TipDirect ensures that guides receive recognition and appreciation with minimal friction. The platform focuses on enhancing the guest-to-guide connection while supporting guides in building their professional reputation.',
    achievements: [
      'Implemented the app from scratch with a team, including the backend and frontend',
      'Implemented payment processing using Stripe',
      'Implemented notification system using Firebase',
      'Implemented a review system to allow users to leave feedback using AI assistant',
      'Added Google Wallet integration to allow users to add tipping cards to their wallet',
    ],
    technologiesMobile: [
      'React Native',
      'Firebase',
      'Stripe',
      'Expo',
      'React Query',
      'React Native Paper',
      'React Hook Form',
    ],
    technologiesWeb: [
      'JavaScript',
      'React',
      'Redux',
      'Redux Saga',
      'Firebase',
      'Stripe',
      'Material UI',
      'Webpack'
    ],
    technologiesBackend: [
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'OpenAI API',
      'Firebase',
      'Langchain',
      'Mailgun',
      'Cloudinary',
    ],
    images: [
      { url: TipDirectPreview1 },
    ],
  },
  {
    id: 2,
    label: 'TripAdmit Thrive',
    description: `TripAdmit Thrive is a cloud-based online booking solution designed for tour operators, activity providers, and venue guides that helps manage office inventory, track sales and distribute activity information across many channels. Event scheduling, promotions management, group reservations, inventory management, and other capabilities are some of TripAdmit Thrive's key functions.
      Customers can view tour performance, add numerous tours to their preferred channels, and see sales rise as tours reach a larger audience by using a central dashboard`,
    achievements: [
      'Implemented Promotions and Discounts functionality',
      'Integrated Gift Card and Vouchers functionality',
      'Implemented a large feature: Channel Manager, which allows users to publish their tours to multiple channels, including Viator, GetYourGuide, and others',
      'Added analytics to track user behavior and improve the product',
    ],
    technologies: [
      'Typescript',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux',
      'Material UI',
      'fp-ts'
    ],
    images: [
      { url: TripAdmitThrivePreview1 },
    ],
  },
  {
    id: 3,
    label: 'Whitelabel',
    description: `As part of this project, I worked on developing and integrating a white-label eCommerce solution designed for rapid deployment. The goal was to enable clients to offer a customizable online experience to their customers with minimal setup.
      I contributed to building a high-converting platform that supports various branding levels—white label, co-branded, and fully customized interfaces. The system was engineered for quick integration with existing websites, requiring little involvement from client-side tech teams.
      My focus included optimizing conversion flows, maintaining modular architecture, and ensuring scalability.`,
    achievements: [
      'Implemented most parts of the project from scratch, including the backend and frontend',
      'Designed and implemented a fully customized API integration to support end-to-end booking flows, including experience discovery, availability search, and transaction handling',
      'Improved performance of the existing search functionality',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Material UI',
      'Formik',
      'Redux'
    ],
    images: [
      { url: WhitelabelPreview1 },
    ],
  },
  {
    id: 4,
    label: 'Mood AI',
    description: 'The journal app for tracking your mood with the help of AI. Make records every day, track your mood, change your life.',
    achievements: [
      'Pet project based on the passed course',
    ],
    technologies: [
      'NextJS',
      'Tailwind CSS',
      'Prisma',
      'Supabase',
      'OpenAI',
      'Langchain',
      'React',
    ],
    images: [
      { url: MoodAIPreview1 },
      { url: MoodAIPreview2 },
      { url: MoodAIPreview3 },
      { url: MoodAIPreview4 },
    ],
    url: 'https://mood-ai-five-sepia.vercel.app/'
  },
  {
    id: 5,
    label: 'HealthCare',
    description: 'The HealthCare app helps users to stay healthy. This application allows you to choose your family doctor, create appointments, check your medical history and be in touch with your doctor always and everywhere.',
    achievements: [
      'Implemented the app from scratch with a team, including the backend and frontend',
    ],
    technologiesWeb: [
      'Typescript',
      'React',
      'Redux Toolkit',
      'Sass',
      'React Hook Form'
    ],
    technologiesBackend: [
      'Node.js',
      'Express',
      'jsonwebtoken',
      'yup',
      'Typescript',
      'Passport.js',
      "Sequelize",
      "PostgreSQL",
    ],
    images: [
      { url: HealthcarePreview1 },
      { url: HealthcarePreview2 },
      { url: HealthcarePreview3 },
      { url: HealthcarePreview4 },
    ],
  }
];

export const PortfolioTabs = {
  Projects: 'Projects',
  Certificates: 'Certificates',
};

export const skills = {
  primary: [
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
    { name: 'JavaScript', icon: JSIcon },
    { name: 'TypeScript', icon: TSIcon },
    { name: 'Material UI', icon: MaterialUIIcon },
    { name: 'Stripe', icon: StripeIcon },
    { name: 'Redux', icon: ReduxIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'Express', icon: ExpressIcon },
    { name: 'MongoDB', icon: MongoDBIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'React Native', icon: ReactNativeIcon },
  ],
  previous: [
    { name: 'PostgreSQL', icon: PostgreSQLIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Redis', icon: RedisIcon },
    { name: 'OpenAI', icon: OpenAIIcon },
    { name: 'Firebase', icon: FirebaseIcon },
    { name: 'GCP(Google Cloud Platform)', icon: GCPIcon },
    { name: 'React Query', icon: ReactQueryIcon },
  ],
  explored: [
    { name: 'MySQL', icon: MySQLIcon },
    { name: 'GraphQL', icon: GraphQLIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Next.js', icon: NextJSIcon },
    { name: 'Mailgun', icon: MailgunIcon },
    { name: 'MailChimp', icon: MailChimpIcon },
  ],
};
