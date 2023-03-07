import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

// layouts and pages
import Dashboard, { cursosLoader } from "./pages/Dashboard";
import RootLayout from "./layouts/RootLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// router and routes
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} loader={cursosLoader} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
