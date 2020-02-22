import React from "react";
import { Team, TabType } from "./Model";
import TeamCards from "./TeamCards";
import {
  Paper,
  createStyles,
  makeStyles,
  Theme,
  Divider,
  Typography,
  Grid
} from "@material-ui/core";

interface ITeamPanelProps {
  teams: Team[];
  selectedTab: TabType;
  onToggleFavorite: (team: Team) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 30
    },
    headerBar: {
      padding: 20
    },
    title: {
      fontWeight: "bold"
    }
  })
);

const TeamPanel: React.SFC<ITeamPanelProps> = props => {
  const classes = useStyles();
  const { selectedTab, teams, onToggleFavorite } = props;
  let filteredTeams;
  switch (selectedTab) {
    case TabType.Favorites:
      filteredTeams = teams.filter(team => team.is_favorited);
      break;
    case TabType.Archived:
      filteredTeams = teams.filter(team => team.is_archived);
      break;
    case TabType.All:
    default:
      filteredTeams = teams;
  }

  const teamCardsProps = {
    teams: filteredTeams,
    onToggleFavorite
  };

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.headerBar} justify="space-between">
        <Typography variant="body1" component="p" className={classes.title}>
          {selectedTab} Teams
        </Typography>
        <Typography variant="subtitle2" component="p" color="textSecondary">
          Showing {filteredTeams.length} out of {teams.length} teams
        </Typography>
      </Grid>
      <Divider />
      <TeamCards {...teamCardsProps} />
    </Paper>
  );
};

export default TeamPanel;
