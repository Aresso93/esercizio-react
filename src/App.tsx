import './App.css'
import { ChangeEvent, useState } from 'react'
import { FruitList } from './components/fruit-list'
import { FruitSearch } from './components/fruit-search'
import { listFunctions } from './components/hooks/list-functions';

function App() {

  const fruitArray = [
    'apple', 
    'orange', 
    'banana', 
    'mango', 
    'grapefruit', 
    'coconut', 
    'strawberry', 
    'blueberry',
    'walnut'
]

function fruitFinder(input:string){

  fruitArray.forEach(fruit => {
      if (fruit.includes(input.toLowerCase())) {
          console.log(fruit);               
          return fruit
                
      }  
  });

}

  function onChange(event: ChangeEvent<HTMLInputElement>){
    const userInput = event.currentTarget.value;
    setInput(userInput)
    //listMethods.actions.fruitFinder(input)
  }

  const [input, setInput] = useState('')



  return (
    <>
      <FruitSearch
      search={onChange}
      print={fruitFinder(input)}
      />

      <FruitList 
      fruitArray={fruitArray}/>  
      
    </>
  )
}

export default App
