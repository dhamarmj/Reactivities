import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5000/api/activities").then((r) => {
      setActivities(r.data);
    });
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleFormOpen = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };
  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleCreateorEditActivity = (activity: Activity) => {
    const newItem = activity.id
      ? [...activities.filter((x) => x.id !== activity.id), activity]
      : [...activities, { ...activity, id: uuid() }];
    setActivities(newItem);
    setEditMode(false);
    setSelectedActivity(activity);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter((x) => x.id !== id));
  };

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateorEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
}

export default App;