import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import { Container, Card, CardContent, Typography } from "@mui/material";

import Layout from "components/Layout";
import Markdown from "components/Markdown";
import useStyles from "assets/jss/components/layout";

function Home(): ReactElement {
  const classes = useStyles();

  return (
    <Layout
      classes={classes}
      title="Home"
      url="https://material-frontend-template.timmo.dev"
      description="A Frontend Template written using Material UI Next.js/React in TypeScript."
    >
      <Container className={classes.main} component="article" maxWidth="xl">
        <Card>
          <CardContent>
            <Typography color="textPrimary" component="div">
              <Markdown source="## Frontend" />
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
