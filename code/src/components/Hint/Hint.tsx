import { createSignal, onMount } from "solid-js"
import styles from "./hint.module.scss"
import Modal from "../Modal/Modal"

export default function Hint(props: {answer: string}) {
    const [open, setOpen] = createSignal(false)

    onMount(() => {
        document.addEventListener("keydown", ev => {
            if(ev.ctrlKey && ev.key == " ") setOpen(true)
        })
    })

    return (
<>
    <button class={styles.hintButton} onClick={() => setOpen(true)}>Hint</button>
    <Modal title={props.answer} isOpen={open()} setOpen={setOpen} for="hint"/>
</>

)
}