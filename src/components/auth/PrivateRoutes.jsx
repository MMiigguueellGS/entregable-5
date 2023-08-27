import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes = () => {

  const {name} = useSelector((store) => store.trainer)
  
  if(name) return <Outlet />;
  
  return <Navigate to="/"/>;
}