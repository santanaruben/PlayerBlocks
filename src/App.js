import React, { useEffect, Suspense, lazy } from "react";
import MyErrorBoundary from "./components/Errors/MyErrorBoundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./themes/theme";
import TopNav from "./components/Layout/TopNav";
import Pagina from "./components/Layout/Pagina";
import Footer from "./components/Layout/Footer";
import Spinner from "./helpers/Spinner";
import ScrollToTop from "react-scroll-to-top";
import { KeyboardArrowUp } from "@material-ui/icons";
import i18next from "i18next";
import moment from "moment";
moment.locale("es-us");

const HomeParallax = lazy(() => import("./components/Home/HomeParallax"));
const NotFound = lazy(() => import("./components/Errors/NotFound"));
// const Login = lazy(() => import("./components/Login"));
// const Sign = lazy(() => import("./components/Sign"));
const Acceptance = lazy(() => import("./components/Acceptance"));
const AxieInfinity = lazy(() => import("./components/AxieInfinity"));
const Leaderboard = lazy(() => import("./components/Leaderboard"));
// const Prueba = lazy(() => import("./components/Prueba"));
const About = lazy(() => import("./components/About"));
const Register = lazy(() => import("./components/Register"));

function App() {
  useEffect(() => {
    moment.locale(i18next.language);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <Router>
          <TopNav />
          <Pagina>
            <MyErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Switch>
                  <Route exact path="/" component={HomeParallax} />
                  <Route path="/acceptance" component={Acceptance} />
                  <Route path="/axie-infinity" component={AxieInfinity} />
                  {/* <Route path="/services" component={Services} /> */}
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/about" component={About} />
                  {/* <Route path="/prueba" component={Prueba} /> */}
                  {/* <Route path="/sign" component={Sign} />
                  <Route path="/login" component={Login} /> */}
                  <Route path="/register" component={Register} />
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </MyErrorBoundary>
          </Pagina>
        </Router>
        <Footer />
        <ScrollToTop smooth component={<KeyboardArrowUp />} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
