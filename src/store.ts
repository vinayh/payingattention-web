import { create } from "zustand"

const ATTN_PATTERN_ENDPOINT = "http://127.0.0.1:8000/attentionPatterns?prompt="

export type LayerRes = { layer: number; pattern: number[][][][] }
export type AttnPatternRes = {
    prompt: string
    n_layers: number
    tokens: string[]
    patterns: LayerRes[]
}

interface AttentionState {
    prompt: string
    attnPattern: AttnPatternRes | null
    setPrompt: (prompt: string) => void
    fetchAttnPattern: () => Promise<AttnPatternRes>
}

export const useAttentionState = create<AttentionState>((set, get) => {
    return {
        prompt: "",
        attnPattern: null,
        setPrompt: (prompt: string) => {
            console.log("prompt input is: " + prompt)
            set(() => ({ prompt: prompt }))
        },
        fetchAttnPattern: async () => {
            const prompt = get().prompt
            if (!prompt) {
                throw new Error("No prompt set")
            }
            console.log("Fetching for prompt with URL: " + ATTN_PATTERN_ENDPOINT + prompt)
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
