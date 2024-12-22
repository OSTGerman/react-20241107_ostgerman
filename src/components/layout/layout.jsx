import { ProgressBar } from "../progress/progressBar";
import { Footer } from "./footer";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <ProgressBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
