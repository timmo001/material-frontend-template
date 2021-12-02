import React, { ReactElement } from "react";
import Link from "next/link";
import { List, ListItem, Button, Tooltip } from "@mui/material";
import { mdiInformation } from "@mdi/js";
import { useTheme } from "@mui/material/styles";
// eslint-disable-next-line import/no-named-as-default
import Icon from "@mdi/react";
import clsx from "clsx";

import useStyles from "assets/jss/components/headerLinks";

function HeaderLinks(): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/about">
          <Button variant="text" className={classes.navLink}>
            <span className={classes.listItemText}>About</span>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={clsx(classes.listItem, classes.divider)} />
      <ListItem className={classes.listItem}>
        <Tooltip title="GitHub" classes={{ tooltip: classes.tooltip }}>
          <Button
            variant="text"
            className={classes.navLink}
            href="https://github.com/timmo001/material-frontend-template"
            target="_blank"
          >
            <Icon
              path={mdiInformation}
              color={theme.palette.text.primary}
              size={1}
            />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default HeaderLinks;
