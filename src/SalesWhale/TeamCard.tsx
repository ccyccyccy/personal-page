import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderIcon from "@material-ui/icons/StarBorderRounded";
import Avatar from "@material-ui/core/Avatar";
import { Team } from "./Model";
import Divider from "@material-ui/core/Divider";
import { IconButton, Grid } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      fontSize: 14,
      height: 50,
      overflow: "auto"
    },
    footer: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      "& .footerIcon": {
        marginRight: 5,
        marginLeft: 15
      }
    }
  })
);

export interface ITeamCardProp {
  team: Team;
  onToggleFavorite: (team: Team) => void;
}

const TeamCard: React.SFC<ITeamCardProp> = props => {
  const classes = useStyles();
  const { team, onToggleFavorite } = props;

  return (
    <Card variant="outlined">
      <CardHeader
        title={team.name}
        subheader={team.created_at ? `Created ${team.created_at}` : ""}
        avatar={<Avatar src={team.image} />}
        action={
          <IconButton size="small" onClick={() => onToggleFavorite(team)}>
            {team.is_favorited ? (
              <StarRoundedIcon htmlColor="#F8CE43" />
            ) : (
              <StarBorderIcon color="disabled" />
            )}
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" component="p" className={classes.description}>
          {team.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.footer}>
          <ForumIcon className="footerIcon" />
          {team.campaigns_count} Campaigns
          <PeopleIcon className="footerIcon" />
          {team.leads_count} Leads
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
