import {
  Box,
  Button,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import logo from "./assets/logo.svg";
import data from "./fakedata.json";
import Table from "./Table";

const styles = {
  button: { padding: "1em" },
  buttonSelected: { backgroundColor: "#907DFF", color: "#FFF" },
};
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          margin: "1em",
          borderRadius: 10,
          paddingLeft: "2em",
          paddingRight: "2em",
          color: "#9793AE",
          backgroundColor: "#ECEBF2",
        },
      },
      backgroundColor: "pink",
    },
  },
  typography: {
    fontSize: 18,
  },
});

function App() {
  const [selectedYear, setSelectedYear] = useState(1);
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ p: "2em" }}>
        <img src={logo} />
        <Box>
          <Button
            variant="contained"
            style={selectedYear === 1 ? styles.buttonSelected : null}
            onClick={() => setSelectedYear(1)}
          >
            1학년
          </Button>
          <Button
            variant="contained"
            style={selectedYear === 2 ? styles.buttonSelected : null}
            onClick={() => setSelectedYear(2)}
          >
            2학년
          </Button>
          <Button
            variant="contained"
            style={selectedYear === 3 ? styles.buttonSelected : null}
            onClick={() => setSelectedYear(3)}
          >
            3학년
          </Button>
        </Box>
        <Container sx={{ padding: "3em" }}>
          <Typography variant="h5">본문</Typography>
          <Table data={data[`year${selectedYear}`].type1} />
        </Container>
        <Container sx={{ padding: "3em" }}>
          <Typography variant="h5">모의고사 지문</Typography>
          <Table data={data[`year${selectedYear}`].type2} />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
