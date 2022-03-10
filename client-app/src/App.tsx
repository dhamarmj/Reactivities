import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((r) => {
      setActivities(r.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List divided relaxed>
        {activities.map((x: any) => {
          const { id, title } = x;
          return (
            <List.Item key={id}>
              <List.Content>
                <List.Header> {title}</List.Header>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default App;
