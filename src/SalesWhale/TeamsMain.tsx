import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import data from "./data.json";
import { Team, TabType } from "./Model";
import TeamPanel from "./TeamPanel";
import ActivityPanel from "./ActivityPanel";
import { Grid, Typography, Button, Divider, Avatar, Badge, TextField } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GroupIcon from "@material-ui/icons/Group";
import AddIcon from "@material-ui/icons/Add";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";

interface ITeamTabsProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      backgroundColor: "#F1F4F8"
    },
    alignIconText: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle"
    },
    icon: {
      padding: 10
    },
    userIcon: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      padding: 10
    },
    notificationBadge: {
      marginRight: 20
    },
    gridTheme: {
      padding: 10
    },
    searchField: {
      marginBottom: 15,
      marginRight: 15
    }
  })
);

const TeamTabs: React.SFC<ITeamTabsProps> = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState<TabType>(TabType.All);
  const [teams, setTeams] = useState<Team[]>(data.teams);

  const handleChange = (event: React.ChangeEvent<{}>, newTabType: TabType) => {
    setSelectedTab(newTabType);
  };

  const onToggleFavorite = (team: Team) => {
    setTeams(teams => {
      const teamCopy = teams.slice();
      const matchIndex = teamCopy.findIndex(x => x.id === team.id);
      if (matchIndex >= 0) {
        teamCopy[matchIndex].is_favorited = !team.is_favorited;
      }
      return teamCopy;
    });
  };

  return (
    <div>
      <Grid container direction="column">
        <Grid container item className={classes.gridTheme}>
          <Grid item xs={1}>
            <Typography variant="h6" component="p" color="textSecondary">
              NARWHAL
            </Typography>
          </Grid>
          <Grid item justify="space-between" container xs={11}>
            <Grid item>
              <Typography variant="h6" component="p">
                Teams
              </Typography>
            </Grid>
            <Grid item className={classes.alignIconText}>
              <Badge badgeContent={4} color="primary" className={classes.notificationBadge}>
                <NotificationsIcon />
              </Badge>
              <Typography variant="subtitle1" component="p" color="textSecondary">
                Hello, {data.current_user.name}
              </Typography>
              <Avatar className={classes.userIcon} src={data.current_user.avatar} />
              <ArrowDropDownIcon color="disabled" />
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid justify="space-between" container className={classes.gridTheme} alignItems="center">
          <Grid item className={classes.alignIconText}>
            <GroupIcon className={classes.icon} fontSize="large" />
            <Typography variant="h5" component="p">
              Teams
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.icon}
              startIcon={<AddIcon />}
            >
              Create New Team
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Grid item>
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab label={TabType.All} value={TabType.All} id={TabType.All} />
              <Tab label={TabType.Favorites} value={TabType.Favorites} id={TabType.Favorites} />
              <Tab label={TabType.Archived} value={TabType.Archived} id={TabType.Archived} />
            </Tabs>
          </Grid>
          <Grid item className={classes.alignIconText}>
            <SearchIcon className={classes.icon} />
            <TextField className={classes.searchField} label="Search team name ..." />
          </Grid>
        </Grid>
        <Grid container item className={classes.contentContainer}>
          <Grid item xs={9}>
            <TeamPanel
              selectedTab={selectedTab}
              teams={teams}
              onToggleFavorite={onToggleFavorite}
            />
          </Grid>
          <Grid item xs={3}>
            <ActivityPanel activities={data.activities} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamTabs;
