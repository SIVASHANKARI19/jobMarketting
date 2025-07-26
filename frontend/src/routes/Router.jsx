import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashBoard from "../pages/client/DashBoard";
import JobFeed from "../pages/JobFeed";
const router=[{
    path:'/',
    element:<Login/>
},{
    path:'/register',
    element:<Register/>
},{
    path:'/dashboard',
    element:<DashBoard />
},{
    path: '/jobfeed',
    element: <JobFeed/>
}]
export default router;