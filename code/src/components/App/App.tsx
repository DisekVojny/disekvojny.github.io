import { createSignal } from 'solid-js';
import styles from './App.module.scss';
import { getPair } from '../../logic';
import Hint from '../Hint/Hint';
import Options from '../Options/Options';


export default function App() {
  const [qa, setQA] = createSignal<[string, string]>(getPair());
  let inputRef: HTMLInputElement | undefined;

  function check(str: string) {
    if (str === qa()[1]) setAnswer();
  }

  function setAnswer(){
    setQA(getPair());
    if (inputRef) inputRef.value = ''; 
  }

  return (
    <div class={styles.container}>
      <Options fn={setAnswer}/>
      <div class={styles.info}>{qa()[0]}</div>
      <div class={styles.buttons}>
        <input
          type="text"
          placeholder="Answer..."
          ref={(el) => (inputRef = el)}
          onInput={(ev) => check((ev.target as HTMLInputElement).value)}
        />
        <Hint answer={qa()[1]}/>
      </div>
    </div>
  );
}