import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

interface Props {
  activity: Activity;
}

export default observer(function ActivityList({ activity }: Props) {
  const { activityStore } = useStore();
  const [target, setTarget] = useState("");

  const handleActivityDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(e.currentTarget.name);
    activityStore.deleteActivity(id);
  };

  const { id, title, date, description, city, venue, category } = activity;
  return (
    <Segment>
      <Item.Group divided>
        <Item key={id}>
          <Item.Content>
            <Item.Header as="a">{title}</Item.Header>
            <Item.Meta>{date}</Item.Meta>
            <Item.Description>
              <div>{description}</div>
              <div>
                {city}, {venue}
              </div>
              <Item.Extra>
                <Button
                  as={Link}
                  to={`/activities/${id}`}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={(e) => handleActivityDelete(e, id)}
                  name={id}
                  loading={activityStore.loading && target === id}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={category} />
              </Item.Extra>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
});
