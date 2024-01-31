import { useState, ReactNode } from "react"
import { AttentionHeads } from "circuitsvis"
import { AttnPatternRes } from "./App"
import { Tabs } from "@mantine/core"

export default function AttentionPattern({ attnPatternRes }: { attnPatternRes: AttnPatternRes | null }) {
    const [activeLayer, setActiveLayer] = useState<ReactNode>()
    if (attnPatternRes != null) {
        return <>
            <Tabs orientation="vertical" onChange={(idx) => setActiveLayer(<AttentionHeads attention={attnPatternRes.patterns[Number(idx)].pattern[0]} tokens={attnPatternRes.tokens} />)}>
                <Tabs.List>
                    {attnPatternRes.patterns.map((p) => (
                        <Tabs.Tab value={p.layer.toString()}>Layer {p.layer}</Tabs.Tab>
                    ))}
                </Tabs.List>

                {attnPatternRes.patterns.map((p) => (
                    <Tabs.Panel value={p.layer.toString()} p={30}>
                        {activeLayer}
                    </Tabs.Panel>
                ))}
            </Tabs>
        </>
    }
}