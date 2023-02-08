import { createTheme, ThemeProvider } from "@mui/material";
import Counter from "./counter";

export default function App() {
    const theme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Counter />
        </ThemeProvider>
    );
}