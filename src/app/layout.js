import "../index.css";
import { AuthContextProvider } from "../components/authContext/authContextProvider";
import { Layout } from "../components/layout/layout";
import { ThemeContextProvider } from "../components/themeContext/themeContextProvider";
import { ReduxProvider } from "../data/redux/provider";

export const metadata = {
  title: "Restaurants React",
  description: "Restaurants React Next Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <div id="root">
          <ReduxProvider>
            <ThemeContextProvider>
              <AuthContextProvider>
                <Layout>{children}</Layout>
              </AuthContextProvider>
            </ThemeContextProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
