import './sass/App.scss'
import { Button,Form, Header, Products, Modal} from './components'
import React from 'react';
import useModal from './hooks/useModal'

function App() {
    
    const {isShowing, toggle} = useModal();

  return (
    <div className="App">
        <div className='header'>
            <Header/>
        </div>
        <div className='button'>
            <Modal isShowing={isShowing} hide={toggle}/>
        </div>
        <div className='products'>
            <Products/>
        </div>
        <div className='form'>
            <Form/>
        </div>
        <div className='button' >
            <Button toggle={toggle}/>
        </div>
    </div>
);
}

export default App;
