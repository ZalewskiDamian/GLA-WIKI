import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/root-layout";
import HomePage from "./pages/home-page";
import Marineford from "./pages/marineford";
import Skypia from "./pages/skypia";

//MARINEFORD
import Tashigi from "./pages/marineford/tashigi";
import Jango from "./pages/marineford/jango";
import Hina from "./pages/marineford/hina";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="marineford" element={<Marineford />} />
        <Route path="marineford/tashigi" element={<Tashigi />} />
        <Route path="marineford/jango" element={<Jango />} />
        <Route path="marineford/hina" element={<Hina />} />
        <Route path="skypia" element={<Skypia />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
