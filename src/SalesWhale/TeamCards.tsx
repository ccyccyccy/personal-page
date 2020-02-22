import React from "react";
import TeamCard from "./TeamCard";
import { Grid, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Team } from "./Model";

interface ITeamCardsProps {
  teams: Team[];
  onToggleFavorite: (team: Team) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 20
    }
  })
);

const TeamCards: React.SFC<ITeamCardsProps> = props => {
  const { teams, onToggleFavorite } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {teams.map(team => (
        <Grid item key={team.id} xs={12} sm={6} md={4}>
          <TeamCard team={team} onToggleFavorite={onToggleFavorite} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamCards;
