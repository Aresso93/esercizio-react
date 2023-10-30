import './App.css'
import { ChangeEvent, useState } from 'react'
import { FruitList } from './components/fruit-list'
import { FruitSearch } from './components/fruit-search'

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

function App() {

const [input, setInput] = useState('')

function fruitFinder(array: string[], input:string){
  array = fruitArray
  const filteredFruit = fruitArray.filter((fruit) => fruit.includes(input.toLowerCase()))
  console.log('Frutta filtrata', filteredFruit);
  return filteredFruit;

}

  function onChange(event: ChangeEvent<HTMLInputElement>){
    const userInput = event.currentTarget.value;
    setInput(userInput)
    fruitFinder(fruitArray, userInput)
  }


  return (
    <>
      <FruitSearch
      search={onChange}
      print={fruitFinder(fruitArray, input)}
      />

      <FruitList 
      fruitArray={fruitFinder(fruitArray, input)}
      />  
    </>
  )
}

export default App
