import { Course, Home } from '../pages';
const router = [
   { element: <Home />, path: '/' },
   { element: <Course />, path: '/about' },
   { element: <Course />, path: '/course-stem' },
   { element: <Course />, path: '/course' },
   { element: <Course />, path: '/mentor' },
   { element: <Course />, path: '/blog' },
];

export default router;
