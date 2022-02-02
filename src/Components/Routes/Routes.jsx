
import AllCourses from "../Pages/AllCourses/AllCourses";
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
        path:'/all-courses',
        element:<AllCourses />,
        isPrivate:false
    }
   
];

export default routes;