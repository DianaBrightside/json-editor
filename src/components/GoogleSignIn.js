import { useGoogleAuth } from "../authentication/hooks";
import { Button } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleSignIn = () => {
  const invoke = useGoogleAuth();
  return (
    <Button onClick={invoke} variant="contained" color="primary">
      <GoogleIcon fontSize="large" />
    </Button>
  );
};

export default GoogleSignIn;
