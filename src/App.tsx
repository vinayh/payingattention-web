import { useState } from "react"
import { theme } from "./theme"
import "@mantine/core/styles.css"
import { MantineProvider, AppShell, Stack, Box } from "@mantine/core"

import AttentionPattern from "./AttentionPattern.tsx"
import { Navbar } from "./Navbar.tsx"
import { Form } from "./Form.tsx"

type LayerRes = { layer: number; pattern: number[][][][] }
export type AttnPatternRes = {
    prompt: string
    n_layers: number
    tokens: string[]
    patterns: LayerRes[]
}

export default function App() {
    const [attnPatternRes, setAttnPatternRes] = useState<AttnPatternRes | null>(
        null
    )

    return (
        <MantineProvider theme={theme}>
            <AppShell header={{ height: 60 }} padding="md">
                <AppShell.Header>
                    <div>Paying Attention</div>
                </AppShell.Header>

                <AppShell.Navbar p="md" w={200}>
                    <Navbar />
                </AppShell.Navbar>

                <AppShell.Main>
                    <Box maw={1300} pt={50} pl={200} mx="auto">
                        <Stack>
                            <Form setAttnPatternRes={setAttnPatternRes} />
                            <AttentionPattern attnPatternRes={attnPatternRes} />
                        </Stack>
                    </Box>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    )
}
