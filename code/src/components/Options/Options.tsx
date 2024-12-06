import { applyChanges, usedWords, words } from '../../logic';
import { createSignal, For } from "solid-js";
import styles from "./options.module.scss"
import settings from "./settings.png"
import Modal from "../Modal/Modal";

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
<>
    <div class={styles.settings} onclick={() => setOpen(true)}><img src={settings}/></div>
    <Modal title="Select words to use" isOpen={open()} setOpen={setOpen}>
        <For each={Object.keys(words)}>
            {(el) => (<div class={styles.li}><input type="checkbox" checked={selected().has(el)} onchange={ev => handleClick(ev.target.value)} value={el}/>{el}</div>)}
        </For>
    </Modal>
</>
        
    )
}
