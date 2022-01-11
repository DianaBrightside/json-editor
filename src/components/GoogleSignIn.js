import { Button } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";

import { useGoogleAuth } from "../authorization/hooks";

const GoogleSignIn = () => {
  const invoke = useGoogleAuth();
  return (
    <Button onClick={invoke} variant="contained" color="primary">
      <GoogleIcon fontSize="large" />
    </Button>
  );
};

export default GoogleSignIn;
