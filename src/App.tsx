import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Hello } from "circuitsvis"
import Form from "./Form.tsx"

export default function App() {
  return <MantineProvider theme={theme}>
    <Form />
    <Hello name="John" />
  </MantineProvider>;
}
