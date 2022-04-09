import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TurnRightSharpIcon from '@mui/icons-material/TurnRightSharp';
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";

export default function InfoCard() {
  return (
    <Paper
      sx={{
        maxWidth: "92.6%",
        marginBottom: "15px",
        marginLeft: "5px",
        borderRadius: "16px",
      }}
      elevation={6}
    >
      <Card style={{ borderRadius: "16px" }}>
        <div style={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" style={{ fontSize: 14 }}>
                12 Dummy street, NY
              </Typography>
              <Typography
                variant="subtitle1"
                color="green"
                component="div"
                style={{ fontSize: 20 }}
              >
                3 Spots
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" style={{ fontSize: 14 }}>
                <DirectionsWalkIcon />
                12 Km away
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <AttachMoneySharpIcon />
                Free
              </Typography>
            </CardContent>
          </Box>
        </div>

        <Box>
          <CardActions>
            <Button
              size="medium"
              style={{
                backgroundColor: "black",
                color: "white",
                width: "100%",
                borderRadius: "16px",
              }}
            >
              <TurnRightSharpIcon fontSize="small"/> Directions
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Paper>
  );
}
