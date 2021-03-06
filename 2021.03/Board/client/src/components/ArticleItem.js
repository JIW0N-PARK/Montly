import React from 'react';
import { Paper } from '@material-ui/core';

export default function ArticleItem(item) {
  return(
    <> 
      <div>
        <Paper>{item.title}</Paper>
      </div>
    </>
  );
}