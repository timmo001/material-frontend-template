import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import useStyles from "../assets/jss/components/layout";

interface HomeProps {}

function Home(props: HomeProps): ReactElement {
  const classes = useStyles();

  return (
    <Layout
      {...props}
      classes={classes}
      title="Home"
      url="https://admin-frontend.timmo.dev"
      description="A frontend written using Next.js/React in TypeScript.">
      <Container
        className={classes.mainRaised}
        component="article"
        maxWidth="xl">
        <Card>
          <CardContent>
            <Typography
              className={clsx("welcome-message", classes.welcomeMessage)}
              align="center"
              color="textPrimary"
              component="div"
              variant="h4">
              <Markdown source="# Admin Frontend" escapeHtml={false} />
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1,
  };
};

export default Home;
