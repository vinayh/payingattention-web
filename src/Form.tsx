import { useForm } from "@mantine/form"
import { TextInput, Button, Grid } from "@mantine/core"
import { useAttentionState } from "./store"

export default function Form() {
    const { prompt, setPrompt, fetchAttnPattern } = useAttentionState()
    const form = useForm({
        initialValues: { prompt: prompt },
        validate: {
            prompt: (prompt: string) =>
                prompt.length > 0 ? null : "Prompt field must not be empty.",
        },
    })
    
    const onSubmitPrompt = (values: { prompt: string }) => {
        console.log("Setting prompt: " + values.prompt)
        setPrompt(values.prompt)
        fetchAttnPattern()
    }

    return (
        <form onSubmit={form.onSubmit(onSubmitPrompt)}>
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
