import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import TeamCard from "./TeamCard";
import TeamCards from "./TeamCards";
import data from "./data.json";
import { Team, TabType } from "./Model";
import TeamPanel from "./TeamPanel";
import ActivityPanel from "./ActivityPanel";
import { Grid } from "@material-ui/core";

interface ITeamTabsProps {}

interface ITeamTabsState {
  selectedTab: TabType;
  teams: Team[];
}

class TeamTabs extends React.Component<ITeamTabsProps, ITeamTabsState> {
  state: ITeamTabsState = {
    selectedTab: TabType.All,
    teams: data.teams
  };

  handleChange = (event: React.ChangeEvent<{}>, newTabType: TabType) => {
    console.log(newTabType);
    this.setState((state, prop) => {
      return { ...state, selectedTab: newTabType };
    });
  };

  onToggleFavorite = (team: Team) => {
    this.setState((state, prop) => {
      const teamCopy = state.teams.slice();
      const matchIndex = teamCopy.findIndex(x => x.id === team.id);
      if (matchIndex >= 0) {
        teamCopy[matchIndex].is_favorited = !team.is_favorited;
      }
      return {
        ...state,
        teams: teamCopy
      };
    });
  };

  render() {
    const { selectedTab, teams } = this.state;

    return (
      <div>
        <Tabs value={selectedTab} onChange={this.handleChange}>
          <Tab label={TabType.All} value={TabType.All} id={TabType.All} />
          <Tab label={TabType.Favorites} value={TabType.Favorites} id={TabType.Favorites} />
          <Tab label={TabType.Archived} value={TabType.Archived} id={TabType.Archived} />
        </Tabs>
        <Grid container>
          <Grid item xs={9}>
            <TeamPanel
              selectedTab={selectedTab}
              teams={teams}
              onToggleFavorite={this.onToggleFavorite}
            />
          </Grid>
          <Grid item xs={3}>
            <ActivityPanel />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TeamTabs;
