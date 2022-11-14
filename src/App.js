import { createElement } from 'react';
import './tailwind.css'
import Button from './components/Button'



function App() {
  
  const name = 'Çağatay';
  const todos = ['todo1', 'todo2', 'todo3']
  /*
  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
  const h1 = createElement('h1', null, 'vmblockchain') 
  const button = createElement(Button, {
    text: 'Button text'
  }, null)
  
  return createElement('main', {
    className: 'test',
    id: 'main'
  }, h1, ul, button); 

 /*
 const searchFuntion = () => {
  alert('kutucuga bas');
 }
 */

 const searchFuntion = () => {
  alert('hello');
 }

  return (
      <>
      <Button text="buton ornegi" />
      <main id="main" className="test">
      <h1 tabIndex="3" style={{color: 'red', backgroundColor: 'yellow' }}>VM BLOCKCHAIN</h1>
      <label htmlFor='search' tabIndex="2" onClick={() => alert('kutucuga bas')}>Arama</label>
      <input type="text" id="search" tabIndex="1" />
      <ul>    
        {name}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} 
          </li>
        ))}
      </ul>
    </main>
    </>
  );
  }
  
  export default App;
