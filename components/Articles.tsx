import React, { ReactElement } from "react";
import Grid from "@material-ui/core/Grid";

import { ArticleType } from "./Types";
import Card from "./Card";

interface ArticlesProps {
  articles: ArticleType[];
}

function Articles({ articles }: ArticlesProps): ReactElement {
  return (
    <Grid container direction="row" alignItems="stretch" justify="space-around">
      {articles.map((article: ArticleType, index: number) => (
        <Grid key={index} item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card article={article} key={`article__${article.id}`} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Articles;
