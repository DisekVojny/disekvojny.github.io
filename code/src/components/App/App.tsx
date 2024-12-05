import { createSignal } from 'solid-js';
import './App.module.scss';
import { getPair } from '../../logic';
import Hint from '../Hint/Hint';
import Options from '../Options/Options';


function App() {
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
    <div class="container">
      <Options fn={setAnswer}/>
      <div class="info">{qa()[0]}</div>
      <div class="buttons">
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

export default App;
