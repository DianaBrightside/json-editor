import { Box, Button } from "@material-ui/core";
import { useSignOut } from "../authorization/hooks";

const LogoutButton = () => {
  const invoke = useSignOut();

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        m: 6,
      }}
    >
      <Button onClick={invoke} variant="contained" size="large" color="primary">
        Log out
      </Button>
    </Box>
  );
};

export default LogoutButton;
