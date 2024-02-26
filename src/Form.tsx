import { useForm } from "@mantine/form"
import { TextInput, Button, Grid } from "@mantine/core"
import { SetStateAction, Dispatch } from "react"

import { AttnPatternRes } from "./App"

export function Form() {
    const ATTN_PATTERN_ENDPOINT =
        "http://127.0.0.1:8000/attentionPatterns?prompt="
    const form = useForm({
        initialValues: { prompt: "" },
        validate: {
            prompt: (prompt: string) =>
                prompt.length > 0 ? null : "Prompt field must not be empty.",
        },
    })
    // const fetchAttnPattern = ({ prompt }: { prompt: string }) => {
    //     console.log(prompt)
    //     fetch(ATTN_PATTERN_ENDPOINT + prompt)
    //         .then(res => {
    //             if (!res.ok) {
    //                 form.setErrors({ submit: "Server error" })
    //                 throw new Error(
    //                     `Error in API response ${res.status}, ${res.text}`
    //                 )
    //             }
    //             return res
    //         })
    //         .then(res => res.json())
    //         .then(res => {
    //             setAttnPatternRes(res)
    //         })
    //         .catch(e =>
    //             form.setFieldError(
    //                 "prompt",
    //                 `Error fetching attention patterns: ${e.message}`
    //             )
    //         )
    // }

    return (
        <form onSubmit={form.onSubmit(values => fetchAttnPattern(values))}>
            <Grid gutter={{ base: 5 }}>
                <Grid.Col span="auto">
                    <TextInput
                        name="prompt"
                        placeholder="Enter your prompt here..."
                        {...form.getInputProps("prompt")}
                    />
                </Grid.Col>

                <Grid.Col span={1.5} miw={90}>
                    <Button name="submit" fullWidth type="submit">
                        Submit
                    </Button>
                </Grid.Col>
            </Grid>
        </form>
    )
}
