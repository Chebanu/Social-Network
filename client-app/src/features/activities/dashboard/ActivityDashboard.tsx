import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActvityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
  activities: Activity[];

  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default observer(function ActivityDashboard({
  activities,
  createOrEdit,
  deleteActivity,
  submitting,
}: Props) {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          deleteActivity={deleteActivity}
          submitting={submitting}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && (
          <ActivityForm submitting={submitting} createOrEdit={createOrEdit} />
        )}
      </Grid.Column>
    </Grid>
  );
});
