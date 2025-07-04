import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashBoard from "../pages/client/DashBoard";
const router=[{
    path:'/',
    element:<Login/>
},{
    path:'/register',
    element:<Register/>
},{
    path:'/dashboard',
    element:<DashBoard />
}]
export default router;