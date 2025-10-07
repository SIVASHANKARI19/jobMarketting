import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashBoard from "../pages/client/DashBoard";
import SkillGapAnalyzer from "../pages/skillGapAnalyser/skill_gap";
const router=[{
    path:'/',
    element:<Login/>
},{
    path:'/register',
    element:<Register/>
},{
    path:'/skill-gap-analyzer',
    element:<SkillGapAnalyzer/>
},{
    path:'/dashboard',
    element:<DashBoard />
},]
export default router;