import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Wrapper from "./Wrapper";
import Paragraph from "./Paragraph";

const useStyles = makeStyles({
  root: {
    height: 365,
    width: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 10px 10px -5px",
  },
  media: {
    height: 100,
  },
});

function SubItem({ name, concept, label, link }) {
  return (
    <Paragraph fontSize="s12" color="darkgray">
      {concept || name} {link && <a href={link}>{label}</a>}
    </Paragraph>
  );
}

function SubSection({ name, subitems }) {
  return (
    <Wrapper padding="0" flexDirection="column">
      <Paragraph fontSize="s13" color="darkblue">
        {name}
      </Paragraph>
      <Wrapper padding="0 0 0 10px" flexDirection="column">
        {Array.isArray(subitems) &&
          subitems.length > 0 &&
          subitems.map((item, idx) => <SubItem key={idx} {...item} />)}
      </Wrapper>
    </Wrapper>
  );
}

export default function CourseGroupCard({
  name,
  image_url,
  image_style,
  schedule,
  requirements,
  teachers,
  attachments,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        style={image_style}
        className={classes.media}
        image={image_url}
        title={name}
      />
      <CardContent>
        <Wrapper flexDirection="column">
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Wrapper padding="0 0 0 10px" flexDirection="column">
            {Array.isArray(schedule) &&
              schedule.length > 0 &&
              schedule.map((item, idx) => (
                <Paragraph key={idx} fontSize="s12" color="darkgray">
                  {item}
                </Paragraph>
              ))}
            <SubSection name="Requisitos" subitems={requirements} />
            <SubSection name="Profesores" subitems={teachers} />
            <SubSection name="Adjuntos" subitems={attachments} />
          </Wrapper>
        </Wrapper>
      </CardContent>
    </Card>
  );
}
