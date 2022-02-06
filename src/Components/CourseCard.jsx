import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Wrapper from "./Wrapper";
import CourseGroupCard from "./CourseGroupCard";
import VirtualizedList from "./VirtualizedList";

const useStyles = makeStyles({
  root: {
    minHeight: "365px",
    maxWidth: 345,
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 200,
  },
});

function Line({ concept, value, styleValue }) {
  return (
    <Wrapper
      width="100%"
      margin="15px 0 5px 0"
      padding="0"
      justifyContent="space-between"
    >
      <Typography variant="body2" color="textSecondary" component="p">
        {concept}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={styleValue}
      >
        {value}
      </Typography>
    </Wrapper>
  );
}

export default function CourseCard({ course }) {
  const classes = useStyles();
  const {
    name,
    image_url,
    image_style,
    content_description,
    transmission_medium,
    start_at,
    button_title,
    cost,
    groups,
  } = course;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={image_style}
          className={classes.media}
          image={image_url}
          title={name}
        />
        {/* CONTENT */}
        <CardContent>
          {/* TITLE */}
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {/* DESCRIPTION */}
          <Typography variant="body2" color="textSecondary" component="p">
            {content_description}
          </Typography>

          {start_at && (
            <Wrapper width="100%" padding="5px" flexDirection="column">
              {/* START AT */}
              <Line concept="Inicio" value={start_at} />
              {/* TRANSMISSION MEDIUM */}
              <Line concept="Medio" value={transmission_medium} />
              {/* COST */}
              <Line
                concept="Costo"
                value={cost}
                styleValue={{
                  color: "black",
                  fontSize: "15px",
                }}
              />
              {/* GROUPS */}
              <Wrapper
                margin="15px 0 5px 0"
                padding="0"
                justifyContent="space-between"
                // boxShadow="0 10px 10px -5px"
              >
                <Typography variant="body2" color="textSecondary" component="p">
                  Grupos
                </Typography>
                <Wrapper width="100%" padding="10px" flexDirection="column">
                  {/* GROUPS */}
                  {Array.isArray(groups) && groups.length > 0 && (
                    <VirtualizedList
                      CardRenderer={CourseGroupCard}
                      listStyle={{
                        height: 380,
                        width: document.documentElement.clientWidth,
                      }}
                      rowHeight={380}
                      spinTitle="Consultando registros..."
                      rows={groups}
                      customProps={{}}
                    />
                  )}
                </Wrapper>
              </Wrapper>
            </Wrapper>
          )}
        </CardContent>
      </CardActionArea>
      {typeof button_title === "string" && button_title.length > 0 && (
        <CardActions>
          <Button size="small" color="primary" onClick={() => {}}>
            {button_title}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
