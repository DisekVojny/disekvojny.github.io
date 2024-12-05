import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger
} from "../ui/alert-dialog"

import { applyChanges, usedWords, words } from '../../logic';
import { createSignal, For } from "solid-js";
import styles from "./options.module.scss"
import settings from "./settings.png"

export default function Options(props: {fn(): void}) {
    let [selected, setSelected] = createSignal(new Set(Object.keys(usedWords)))
    const [open, setOpen] = createSignal(false)
    
    function handleClick(el: string){
        let set = selected();
        if(set.has(el)) {
            set.delete(el);
        } else {
            set.add(el)
        }
        applyChanges(set)
        setSelected(set)
        props.fn()
        return
        
    }

    return (
<AlertDialog open={open()} onOpenChange={setOpen}>
  <AlertDialogTrigger class={styles.settings}><img src={settings}/></AlertDialogTrigger>
  <AlertDialogContent class={styles.modal}>
    <AlertDialogTitle class={styles.title}>Select words to use</AlertDialogTitle>
    <AlertDialogDescription>
        <For each={Object.keys(words)}>
            {(el) => (<div class={styles.li}><input type="checkbox" checked={selected().has(el)} onchange={ev => handleClick(ev.target.value)} value={el}/>{el}</div>)}
        </For>
        <div class={styles.buttonRow}>
            <button class={styles.close} onClick={() => setOpen(false)}>Close</button>
        </div>
    </AlertDialogDescription>
  </AlertDialogContent>
</AlertDialog>
    )
}