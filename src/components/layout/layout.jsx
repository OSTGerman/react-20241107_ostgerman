import { ProgressBar } from "../progress/progressBar";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
