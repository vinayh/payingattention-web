import { theme } from "./theme"
import { MantineProvider, AppShell, Stack, Box } from "@mantine/core"
import "@mantine/core/styles.css"

import AttentionPattern from "./AttentionPattern.tsx"
import Navbar from "./Navbar.tsx"
import Form from "./Form.tsx"

export default function App() {
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
                            <Form />
                            <AttentionPattern />
                        </Stack>
                    </Box>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    )
}
