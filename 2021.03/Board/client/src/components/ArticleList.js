import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ArticleItem from './ArticleItem';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ArticleList() {
  const classes = useStyles();
  const articles = useSelector(state => state.articles);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid key={article.id} item xs={12}>
            <ArticleItem item={article}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}