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

import {
  getAbout,
  getApiMediaUrl,
  getArticles,
  getCategories,
  getGeneral,
  getHomepage,
} from "../lib/api";
import {
  AboutType,
  ArticleType,
  CategoryType,
  GeneralType,
  HomepageType,
} from "../components/Types";
import Articles from "../components/Articles";
import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import Parallax from "../components/Parallax";
import Slider from "../components/Slider";
import useStyles from "../assets/jss/components/layout";

interface HomeProps {
  about: AboutType;
  articles: ArticleType[];
  categories: CategoryType[];
  general: GeneralType;
  homepage: HomepageType;
}

function Home(props: HomeProps): ReactElement {
  const classes = useStyles();

  return (
    <Layout
      {...props}
      classes={classes}
      title="Home"
      url="https://admin-frontend.timmo.dev"
      description={`${props.about.profile_name} - ${props.about.profile_subtitle}`}>
      <Parallax
        small
        filter
        image={getApiMediaUrl(
          props.homepage.header_media
            ? props.homepage.header_media.url
            : props.general.header_media?.url
        )}
      />
      <Container
        className={classes.mainRaised}
        component="article"
        maxWidth="xl">
        {props.homepage.welcome_message ? (
          <Card>
            <CardContent>
              <Typography
                className={clsx("welcome-message", classes.welcomeMessage)}
                align="center"
                color="textPrimary"
                component="div"
                variant="h4">
                <Markdown
                  source={props.homepage.welcome_message}
                  escapeHtml={false}
                />
              </Typography>
            </CardContent>
          </Card>
        ) : (
          ""
        )}
        {props.homepage.showcase_media.length > 0 ? (
          <Card>
            <CardContent>
              {props.homepage.showcase_heading ? (
                <Typography
                  className={classes.title}
                  align="center"
                  color="textPrimary"
                  variant="h3"
                  gutterBottom>
                  {props.homepage.showcase_heading}
                </Typography>
              ) : (
                ""
              )}
              <Slider
                media={props.homepage.showcase_media}
                slides={props.homepage.showcase_slides}
              />
            </CardContent>
          </Card>
        ) : (
          ""
        )}
        <Card>
          <CardContent>
            <Typography align="center" variant="h3" gutterBottom>
              {props.homepage.articles_heading}
            </Typography>
            <Articles articles={props.articles.slice(0, 9)} />
          </CardContent>
          <CardActions>
            <Link href={{ pathname: "/articles", query: { page: 1 } }}>
              <Button
                disabled={props.articles.length <= 9}
                color="primary"
                size="large"
                variant="text">
                Older Articles
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const about = await getAbout();
  const articles = (await getArticles()) || [];
  const categories = (await getCategories()) || [];
  const general = await getGeneral();
  const homepage = await getHomepage();
  return {
    props: { about, articles, categories, general, homepage },
    revalidate: 1,
  };
};

export default Home;
