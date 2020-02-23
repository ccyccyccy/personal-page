import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import TeamsMain from "./TeamsMain";
import GroupIcon from "@material-ui/icons/Group";
import BathtubIcon from "@material-ui/icons/Bathtub";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      width: 60
    },
    drawerClose: {
      width: theme.spacing(8),
      background: "#042235",
      overflow: "hidden"
    },
    icon: {
      color: "gray",
      marginTop: 10,
      marginBottom: 10
    },
    topIcon: {
      color: "white",
      marginTop: 10,
      marginBottom: 10
    },
    footerIcon: {
      color: "white"
    },
    footer: {
      bottom: 0,
      position: "fixed",
      marginBottom: 10
    }
  })
);

export default function MiniDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerClose
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <BathtubIcon fontSize="large" className={classes.topIcon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GroupIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <RecentActorsIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InsertChartIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.footer}>
            <ListItemIcon>
              <HelpIcon className={classes.footerIcon} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <TeamsMain />
    </div>
  );
}
