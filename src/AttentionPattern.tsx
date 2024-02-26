import { useState } from "react"
import { Container, ScrollArea, Tabs } from "@mantine/core"
import { AttentionHeads } from "circuitsvis"
import { useAttentionState } from "./store"

export default function AttentionPattern() {
    const [activeTab, setActiveTab] = useState<string | null>(null)
    const { attnPattern, setPrompt } = useAttentionState()
    const p = attnPattern?.patterns[parseInt(activeTab ?? "0")]

    if (p) {
        return (
            <>
                <Tabs
                    orientation="vertical"
                    value={activeTab}
                    variant="pills"
                    onChange={setActiveTab}
                    radius="md"
                >
                    <Tabs.List>
                        {attnPattern.patterns.map(p => (
                            <Tabs.Tab key={p.layer} value={p.layer.toString()}>
                                Layer {p.layer}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>

                    <Container fluid>
                        <ScrollArea h={1000} p={20}>
                            <AttentionHeads
                                key={p.layer}
                                attention={p.pattern[0]}
                                tokens={attnPattern.tokens}
                            />
                        </ScrollArea>
                    </Container>
                </Tabs>
            </>
        )
    }
}
