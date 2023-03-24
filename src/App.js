import { useEffect, useState } from 'react';
import './App.css';
import { botao } from './components/botao';

function App() {
  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    setLista([]);
  }, []
  );

  return (
    <>
    <div className='back'>
      <h1 id='title'>ToDo List</h1>
      <hr></hr>

      <input id='Campo' placeholder='Digite sua tarefa' value={novoItem} onChange={value => setNovoItem(value.target.value)} type='text'
      />
        
      <button id='ADD' onClick={() => adicionarNovoItem()}>+</button>

      <ul className='todolist'>
        {lista.map((item, index) => (<li className='item' key={index}>
          {item}
          <button id='ADD2' onClick={() => deletarItem(index)}>-</button>
          </li>))}
      </ul>
    </div>
    </>
  );
  function adicionarNovoItem() {
    if (novoItem.length <= 0){
      alert("Digite algo no compa Tarefa");
      return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if (itemIndex >= 0) {
      alert("Tarefa repetida");
      return;
    }


    setLista([...lista, novoItem]);
    setNovoItem("");
  }

  function deletarItem(index){
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);
    setLista(tmpArray);
  }

}

export default App;
