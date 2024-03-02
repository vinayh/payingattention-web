import { useState } from "react"
import { Container, ScrollArea, Tabs } from "@mantine/core"
import { AttentionHeads } from "circuitsvis"

import { LayerRes, useAttentionState } from "./store"

export default function AttentionPattern() {
    const [activeTab, setActiveTab] = useState<string | null>(null)
    const { attnPattern } = useAttentionState()

    const renderPattern = (pattern: LayerRes, tokens: string[]) => {
        return (
            <AttentionHeads
                key={pattern.layer}
                attention={pattern.pattern[0]}
                tokens={tokens}
            />
        )
    }

    if (attnPattern) {
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
                            {renderPattern(
                                attnPattern.patterns[
                                    parseInt(activeTab ?? "0")
                                ],
                                attnPattern.tokens
                            )}
                        </ScrollArea>
                    </Container>
                </Tabs>
            </>
        )
    }
}
