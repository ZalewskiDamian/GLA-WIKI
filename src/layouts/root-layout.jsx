import { Outlet } from "react-router-dom";
import Header from "@/components/header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main className="container max-w-[1280px] mx-auto px-4 pb-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
