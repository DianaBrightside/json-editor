import {
    createTheme
} from "@material-ui/core";

export const theme = createTheme({
    overrides: {
        MuiGrid: {
            "grid-xs-12": {
                flexBasis: 0
            }
        },
    },

})