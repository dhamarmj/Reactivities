import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activity,
  selectActivity,
  deleteActivity,
}: Props) {
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
                  onClick={() => selectActivity(id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={() => deleteActivity(id)}
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
}
