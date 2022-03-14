import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path="/" component={HomePage} />
      {/* to show the home page before anything */}
      <Route
        path={"/(.+)"}
        // this path means everything after this
        render={() => {
          return (
            <>
              <NavBar />
              <Container style={{ marginTop: "7em" }}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/activities" component={ActivityDashboard} />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key} //change the index so that react creates the component again
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
              </Container>
            </>
          );
        }}
      />
    </>
  );
}

export default observer(App);
