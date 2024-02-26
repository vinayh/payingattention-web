import { create } from "zustand"

const ATTN_PATTERN_ENDPOINT = "http://127.0.0.1:8000/attentionPatterns?prompt="

type LayerRes = { layer: number; pattern: number[][][][] }
export type AttnPatternRes = {
    prompt: string
    n_layers: number
    tokens: string[]
    patterns: LayerRes[]
}

interface AttentionState {
    prompt: string | null
    attnPattern: AttnPatternRes | null
    setPrompt: (prompt: string) => void
    fetchAttnPattern: () => Promise<AttnPatternRes>
}

export const useAttentionState = create<AttentionState>(set => {
    return {
        prompt: null,
        attnPattern: null,
        setPrompt: (prompt: string) => {
            set({ prompt: prompt })
        },
        fetchAttnPattern: async () => {
            if (!prompt) {
                throw new Error("No prompt set")
            }
            const fetchedPattern = await fetch(ATTN_PATTERN_ENDPOINT + prompt)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(
                            `Error in API response: ${res.status}, ${res.text}`
                        )
                    }
                    return res
                })
                .then(res => res.json())
                .then(res => res as AttnPatternRes)
                .catch(e => {
                    throw new Error(
                        `Error fetching attention patterns: ${e.message}`
                    )
                })
            set({ attnPattern: fetchedPattern })
            return fetchedPattern
        },
    }
})
