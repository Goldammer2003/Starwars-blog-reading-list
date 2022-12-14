import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Characters } from "./views/characters";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./views/planet";
import { Vehicles } from "./views/vehicles";
import {IndividualpageinformationCharacters} from "./views/detailsCharacters";
import { IndividualpageinformationforPlanets } from "./views/detailsPlanets";
import {IndividualpageinformationforVehicles } from "./views/detailsVehicles";
import { Home } from "./views/home";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/learnMore/characters/:theid">
              <IndividualpageinformationCharacters/>
            </Route>
            <Route exact path="/learnMore/planets/:theid">
              <IndividualpageinformationforPlanets/>
            </Route>


            <Route exact path="/learnMore/vehicles/:theid">
              <IndividualpageinformationforVehicles/>
            </Route>

            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
