import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashBoard from "../pages/client/DashBoard";
import Home from "../pages/Home";
const router=[{
    path:'/',
    element:<Home/>
},{
    path:'/register',
    element:<Register/>
},{
    path:'/dashboard',
    element:<DashBoard />
},
 {
    path: '/',
    element: (
      <MainLayout
        currentUser={currentUser}
        onRoleChange={handleRoleChange}
        onLogout={handleLogout}
      >
        <Home />
      </MainLayout>
    ),
  },
]
export default router;