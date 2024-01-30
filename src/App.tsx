import { useState, Dispatch } from "react"
import { theme } from "./theme";
import "@mantine/core/styles.css";
import { MantineProvider, AppShell, Container, Button, Stack } from "@mantine/core";

import AttentionPattern from "./AttentionPattern.tsx"
import Form from "./Form.tsx"

type LayerRes = {layer: number, pattern: number[][][][]}
export type AttnPatternRes = { prompt: string, n_layers: number, tokens: string[], patterns: LayerRes[]}

export default function App() {
  const [attnPatternRes, setAttnPatternRes] = useState<AttnPatternRes>()

  return <MantineProvider theme={theme}>
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <div>Logo</div>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">
        Options here
      </AppShell.Navbar> */}

      <AppShell.Main>
        <Container bg="var(--mantine-color-gray-light)" px={20} py={40}>
          <Stack>
            <Form setAttnPatternRes={setAttnPatternRes} />
            <AttentionPattern />
          </Stack>
        </Container>
      </AppShell.Main>

    </AppShell>
  </MantineProvider>;
}
