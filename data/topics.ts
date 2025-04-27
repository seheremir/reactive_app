import { Topic, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'basics',
    title: 'Basics',
    description: 'Fundamental concepts of React Native',
    icon: 'code',
  },
  {
    id: 'components',
    title: 'Components',
    description: 'Core and custom components',
    icon: 'layers',
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: 'Navigating between screens',
    icon: 'navigation',
  },
  {
    id: 'styling',
    title: 'Styling',
    description: 'Styling and layout in React Native',
    icon: 'palette',
  },
  {
    id: 'state',
    title: 'State Management',
    description: 'Managing application state',
    icon: 'database',
  },
  {
    id: 'apis',
    title: 'APIs & Data',
    description: 'Working with APIs and data',
    icon: 'server',
  },
  {
    id: 'advanced',
    title: 'Advanced Topics',
    description: 'Advanced concepts and techniques',
    icon: 'zap',
  },
];

export const topics: Topic[] = [
  // Basics
  {
    id: 'intro',
    title: 'Introduction to React Native',
    description: 'Learn what React Native is and how it works. Understand the core philosophy of "learn once, write anywhere" and how React Native differs from other cross-platform solutions.',
    completed: false,
    category: 'basics',
    difficulty: 'beginner',
    resources: [
      {
        title: 'Official Documentation',
        url: 'https://reactnative.dev/docs/getting-started',
      },
    ],
  },
  {
    id: 'setup',
    title: 'Setting Up Your Environment',
    description: 'Set up your development environment for React Native development. Learn about the required tools and dependencies.',
    completed: false,
    category: 'basics',
    difficulty: 'beginner',
    resources: [
      {
        title: 'Environment Setup',
        url: 'https://reactnative.dev/docs/environment-setup',
      },
    ],
  },
  {
    id: 'jsx',
    title: 'JSX Syntax',
    description: 'Understand JSX syntax and how it works in React Native. Learn how to write JSX expressions and embed JavaScript in your markup.',
    completed: false,
    category: 'basics',
    difficulty: 'beginner',
  },
  
  // Components
  {
    id: 'core-components',
    title: 'Core Components',
    description: 'Explore the core components provided by React Native such as View, Text, Image, ScrollView, and more.',
    completed: false,
    category: 'components',
    difficulty: 'beginner',
    resources: [
      {
        title: 'Core Components and APIs',
        url: 'https://reactnative.dev/docs/components-and-apis',
      },
    ],
  },
  {
    id: 'custom-components',
    title: 'Creating Custom Components',
    description: 'Learn how to create reusable custom components in React Native. Understand component composition and props.',
    completed: false,
    category: 'components',
    difficulty: 'beginner',
  },
  {
    id: 'functional-components',
    title: 'Functional Components',
    description: 'Understand functional components and how they differ from class components. Learn about the benefits of using functional components.',
    completed: false,
    category: 'components',
    difficulty: 'intermediate',
  },
  
  // Navigation
  {
    id: 'react-navigation',
    title: 'React Navigation',
    description: 'Learn about React Navigation, the most popular navigation library for React Native. Understand different types of navigators.',
    completed: false,
    category: 'navigation',
    difficulty: 'intermediate',
    resources: [
      {
        title: 'React Navigation Docs',
        url: 'https://reactnavigation.org/docs/getting-started',
      },
    ],
  },
  {
    id: 'stack-navigation',
    title: 'Stack Navigation',
    description: 'Implement stack navigation in your React Native app. Learn how to navigate between screens and pass parameters.',
    completed: false,
    category: 'navigation',
    difficulty: 'intermediate',
  },
  {
    id: 'tab-navigation',
    title: 'Tab Navigation',
    description: 'Implement tab navigation in your React Native app. Learn how to create a tab-based interface.',
    completed: false,
    category: 'navigation',
    difficulty: 'intermediate',
  },
  
  // Styling
  {
    id: 'stylesheet',
    title: 'StyleSheet API',
    description: 'Learn how to use the StyleSheet API to style your React Native components. Understand the benefits of using StyleSheet over inline styles.',
    completed: false,
    category: 'styling',
    difficulty: 'beginner',
    resources: [
      {
        title: 'Style Guide',
        url: 'https://reactnative.dev/docs/style',
      },
    ],
  },
  {
    id: 'flexbox',
    title: 'Flexbox Layout',
    description: 'Master Flexbox layout in React Native. Learn how to create responsive layouts using Flexbox properties.',
    completed: false,
    category: 'styling',
    difficulty: 'intermediate',
    resources: [
      {
        title: 'Layout with Flexbox',
        url: 'https://reactnative.dev/docs/flexbox',
      },
    ],
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Implement responsive design in your React Native app. Learn how to adapt your UI for different screen sizes and orientations.',
    completed: false,
    category: 'styling',
    difficulty: 'intermediate',
  },
  
  // State Management
  {
    id: 'useState',
    title: 'useState Hook',
    description: 'Learn how to manage component state using the useState hook. Understand how to update state and handle state changes.',
    completed: false,
    category: 'state',
    difficulty: 'beginner',
  },
  {
    id: 'useEffect',
    title: 'useEffect Hook',
    description: 'Master the useEffect hook for handling side effects in your React Native app. Learn how to fetch data, subscribe to events, and clean up resources.',
    completed: false,
    category: 'state',
    difficulty: 'intermediate',
  },
  {
    id: 'context-api',
    title: 'Context API',
    description: 'Use the Context API to share state across your React Native app. Learn how to create and consume context.',
    completed: false,
    category: 'state',
    difficulty: 'intermediate',
  },
  {
    id: 'redux',
    title: 'Redux',
    description: 'Implement Redux for state management in your React Native app. Understand actions, reducers, and the store.',
    completed: false,
    category: 'state',
    difficulty: 'advanced',
    resources: [
      {
        title: 'Redux Documentation',
        url: 'https://redux.js.org/introduction/getting-started',
      },
    ],
  },
  
  // APIs & Data
  {
    id: 'fetch-api',
    title: 'Fetch API',
    description: 'Learn how to use the Fetch API to make network requests in React Native. Understand how to handle responses and errors.',
    completed: false,
    category: 'apis',
    difficulty: 'intermediate',
  },
  {
    id: 'async-await',
    title: 'Async/Await',
    description: 'Master async/await for handling asynchronous operations in React Native. Learn how to write clean, readable asynchronous code.',
    completed: false,
    category: 'apis',
    difficulty: 'intermediate',
  },
  {
    id: 'local-storage',
    title: 'Local Storage',
    description: 'Implement local storage in your React Native app using AsyncStorage. Learn how to persist data across app restarts.',
    completed: false,
    category: 'apis',
    difficulty: 'intermediate',
    resources: [
      {
        title: 'AsyncStorage Documentation',
        url: 'https://reactnative.dev/docs/asyncstorage',
      },
    ],
  },
  
  // Advanced Topics
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Learn techniques for optimizing the performance of your React Native app. Understand how to identify and fix performance issues.',
    completed: false,
    category: 'advanced',
    difficulty: 'advanced',
  },
  {
    id: 'native-modules',
    title: 'Native Modules',
    description: 'Create native modules to extend the functionality of your React Native app. Learn how to bridge JavaScript and native code.',
    completed: false,
    category: 'advanced',
    difficulty: 'advanced',
    resources: [
      {
        title: 'Native Modules',
        url: 'https://reactnative.dev/docs/native-modules-intro',
      },
    ],
  },
  {
    id: 'animations',
    title: 'Animations',
    description: 'Implement animations in your React Native app using the Animated API. Learn how to create smooth, performant animations.',
    completed: false,
    category: 'advanced',
    difficulty: 'advanced',
    resources: [
      {
        title: 'Animations Guide',
        url: 'https://reactnative.dev/docs/animations',
      },
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    description: 'Learn how to test your React Native app. Understand different testing strategies and tools.',
    completed: false,
    category: 'advanced',
    difficulty: 'advanced',
    resources: [
      {
        title: 'Testing Guide',
        url: 'https://reactnative.dev/docs/testing-overview',
      },
    ],
  },
];