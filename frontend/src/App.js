import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./components/Homepage"
import Signup from "./components/signup"
import Login from "./components/Login"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },

])
function App() {
  return (
    <div className="flex items-center justify-center h-screen p-4">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
