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
import Bastille from "./pages/marineford/bastille";
import Dalmatian from "./pages/marineford/dalmatian";
import Smoker from "./pages/marineford/smoker";
import Moria from "./pages/marineford/moria";
import Brannew from "./pages/marineford/brannew";
import Kizaru from "./pages/marineford/kizaru";
import Aokiji from "./pages/marineford/aokiji";
import Akainu from "./pages/marineford/akainu";
import Doflamingo from "./pages/marineford/doflamingo";
import Mihawk from "./pages/marineford/mihawk";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="marineford" element={<Marineford />} />
        <Route path="marineford/tashigi" element={<Tashigi />} />
        <Route path="marineford/jango" element={<Jango />} />
        <Route path="marineford/hina" element={<Hina />} />
        <Route path="marineford/bastille" element={<Bastille />} />
        <Route path="marineford/dalmatian" element={<Dalmatian />} />
        <Route path="marineford/smoker" element={<Smoker />} />
        <Route path="marineford/moria" element={<Moria />} />
        <Route path="marineford/brannew" element={<Brannew />} />
        <Route path="marineford/kizaru" element={<Kizaru />} />
        <Route path="marineford/aokiji" element={<Aokiji />} />
        <Route path="marineford/akainu" element={<Akainu />} />
        <Route
          path="marineford/doflamingo"
          element={<Doflamingo />}
        />
        <Route path="marineford/mihawk" element={<Mihawk />} />
        <Route path="skypia" element={<Skypia />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
