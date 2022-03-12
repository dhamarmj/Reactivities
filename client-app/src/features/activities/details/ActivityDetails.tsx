import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity } = activityStore;

  if (!selectedActivity) return <></>;

  const { id, title, date, description, category } = selectedActivity;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${category}.jpg`} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{date}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
          <Button
            onClick={() => activityStore.openForm(id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={activityStore.cancelSelectedActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
