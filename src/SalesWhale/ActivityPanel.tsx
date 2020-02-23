import React, { ReactElement } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { Activity } from "./Model";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 30
    },
    inline: {
      display: "inline"
    },
    listHeader: {
      padding: 20
    }
  })
);

interface IActivityPanelProps {
  activities: Activity[];
}

const ActivityPanel: React.SFC<IActivityPanelProps> = props => {
  const classes = useStyles();
  const { activities } = props;

  const actionMapping: {
    [action: string]: (person: string, target: string) => ReactElement;
  } = {
    archived_team: (person, target) => (
      <div>
        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
          {person}
        </Typography>{" "}
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textSecondary"
        >
          archived the team
        </Typography>{" "}
        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
          {target}.
        </Typography>
      </div>
    ),
    added_leads: (person, target) => (
      <div>
        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
          {person}
        </Typography>{" "}
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textSecondary"
        >
          added new leads to
        </Typography>{" "}
        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
          {target}.
        </Typography>
      </div>
    ),
    increased_quota: (person, target) => (
      <div>
        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
          {person}
        </Typography>{" "}
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textSecondary"
        >
          increased
        </Typography>{" "}
        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
          {target}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textSecondary"
        >
          's quota.
        </Typography>
      </div>
    )
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" color="textPrimary" className={classes.listHeader}>
        Activity
      </Typography>
      {activities.map(activity => (
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={activity.person.name} src={activity.person.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={actionMapping[activity.action](activity.person.name, activity.target)}
              secondary={<div>{activity.created_at}</div>}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </Paper>
  );
};

export default ActivityPanel;
