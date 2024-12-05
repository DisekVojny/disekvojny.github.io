import { createSignal } from "solid-js"
import styles from "./hint.module.scss"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ui/alert-dialog"

export default function Hint(props: {answer: string}) {
    const [open, setOpen] = createSignal(false)

    return (


    <AlertDialog open={open()} onOpenChange={setOpen}>
        <AlertDialogTrigger class="hintButton dark">Hint</AlertDialogTrigger>
        <AlertDialogContent class={styles.dialog}>
        <AlertDialogTitle class={styles.title}>{props.answer}</AlertDialogTitle>
        <AlertDialogDescription class={styles.buttonRow}>
            <button class={styles.close} onClick={() => setOpen(false)}>Close</button>
        </AlertDialogDescription>
        </AlertDialogContent>
    </AlertDialog>
)
}
