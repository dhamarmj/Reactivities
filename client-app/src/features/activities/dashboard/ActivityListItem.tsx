import React from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { format } from "date-fns";
//import { useStore } from "../../../app/stores/store";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  //const { activityStore } = useStore();
  // const [target, setTarget] = useState("");
  const { id, title, date, description, venue } = activity;

  // const handleActivityDelete = (
  //   e: SyntheticEvent<HTMLButtonElement>,
  //   id: string
  // ) => {
  //   setTarget(e.currentTarget.name);
  //   activityStore.deleteActivity(id);
  // };

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`activities/${id}`}>
                {title}
              </Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <i className="clock icon" />
          {format(date!, "dd MMMM yyyy h:mm aa")}
          <i className="map marker icon" /> {venue}
        </span>
      </Segment>
      <Segment secondary>Attendees go Here</Segment>
      <Segment clearing>
        <span>{description}</span>
        <Button
          as={Link}
          to={`activities/${id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
