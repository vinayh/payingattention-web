import { AttentionHeads } from "circuitsvis"
import { AttnPatternRes } from "./App"
import { Tabs } from "@mantine/core"

export default function AttentionPattern({ attnPatternRes }: { attnPatternRes: AttnPatternRes | null }) {
    if (attnPatternRes != null) {
        return <>
            <Tabs orientation="vertical" variant="pills" radius="md">
                <Tabs.List>
                    {attnPatternRes.patterns.map((p) => (
                        <Tabs.Tab value={p.layer.toString()}>Layer {p.layer}</Tabs.Tab>
                    ))}
                </Tabs.List>

                {attnPatternRes.patterns.map((p) => (
                    <Tabs.Panel value={p.layer.toString()} p={30}>
                        <AttentionHeads key={p.layer} attention={p.pattern[0]} tokens={attnPatternRes.tokens} />
                    </Tabs.Panel>
                ))}
            </Tabs>
        </>
    }
}