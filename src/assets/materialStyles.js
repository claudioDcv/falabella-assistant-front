import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    position: "fixed",
    top: "0px",
    flexGrow: 1,
    zIndex: 9999,
  },
  toolbar: {
    margin: "0px",
    padding: "0px 0px",
  },
  search: {
    padding: theme.spacing(1, 0),
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100%",
  },
  inputSearch: {
    width: "100%",
    padding: theme.spacing(0, 5, 0, 2),
  },
  searchIcon: {
    zIndex: "9999",
    cursor: "pointer",
    right: "10px",
    top: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
