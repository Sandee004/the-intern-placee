import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "@/pages/home";
import JobPage from "@/pages/job-page";
import Signin from "@/pages/signin";
import Signup from "@/pages/signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs/:jobId" element={<JobPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
