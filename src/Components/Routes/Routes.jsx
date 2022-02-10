import React from 'react';
import AllCourses from "../Pages/AllCourses/AllCourses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";



const routes = [
    {
        path: '/',
        element: <Home />,
        isPrivate: false
    },
    // {
    //     path: '/about',
    //     element: <About />,
    //     isPrivate: false
    // },
    {
        path:'/allcourses',
        element:<AllCourses />,
        isPrivate:false
    },
    {
        path:'/coursedetails',
        element:<CourseDetails />,
        isPrivate:false
    }
];

export default routes;