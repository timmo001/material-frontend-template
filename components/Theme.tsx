import {
  createTheme,
  responsiveFontSizes,
  adaptV4Theme,
} from "@mui/material/styles";
import { teal, indigo } from "@mui/material/colors";

let theme = createTheme(
  adaptV4Theme({
    palette: {
      mode: "dark",
      primary: teal,
      secondary: indigo,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    overrides: {
      MuiCard: {
        root: {
          margin: 8,
        },
      },
      MuiCardContent: {
        root: {
          padding: "24px 32px",
          "&:last-child": {
            paddingBottom: 16,
          },
        },
      },
      MuiChip: {
        root: {
          margin: 4,
        },
      },
      MuiCardActions: {
        root: {
          justifyContent: "flex-end",
        },
      },
    },
  })
);
theme = responsiveFontSizes(theme);

export default theme;
