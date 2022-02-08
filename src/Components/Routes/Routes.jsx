
import AllCourses from "../Pages/AllCourses/AllCourses";
import CourseVideoSection from "../Pages/CourseVideo/CourseVideoSection";
import Home from "../Pages/Home/Home";


const routes = [
    {
        path: '/',
        element: <Home/>,
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
        path:'/coursevideo',
        element:<CourseVideoSection />,
        isPrivate:false
    }
];

export default routes;