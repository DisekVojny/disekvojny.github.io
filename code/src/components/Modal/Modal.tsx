import { Show } from "solid-js";
import styles from "./modal.module.scss"
type props = {
    title: string,
    isOpen: boolean,
    children?: any,
    setOpen: (a: boolean) => void,
    for?: string,
}



export default function Modal(props: props) {

    function closeModalBd(ev: any){
        if(ev.target.id !== "bd") return;
        props.setOpen(false)
    }

    function closeModal(){
        props.setOpen(false)
    }

    document.addEventListener("keydown", ev => {
        if(ev.key == "Escape") closeModal()
    })

    return (
<div id="bd" class={`${styles.container} ${props.isOpen ? styles.active : ""}`} onclick={closeModalBd}>

<div class={`${styles.modal} ${props.for == "hint" ? styles.hint : styles.options}`}>
    <div class={styles.title}>{props.title}</div>
    <Show when={props.children}>
        <div class={styles.content}>
            {props.children}
        </div>
    </Show>
    <div class={styles.buttonRow}>
        <button class={styles.close} onClick={closeModal}>Close</button>
    </div>
</div>
</div>

    )
}
