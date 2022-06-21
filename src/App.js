
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[users, setUsers] = useState(false);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      if(res.ok && res.status === 200){
        return res.json()  
      }
    })
    .then(data => setUsers(data))
    .catch(err => console.log(err))

  }, []);

  return (
   
    <ul>
      {users && users.map(user => (
        <li key={user.id}>
            {user.title}
        </li>
      )
      )}
    </ul>
  );
}

export default App;
