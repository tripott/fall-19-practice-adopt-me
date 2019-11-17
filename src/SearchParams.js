import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA')
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)

  // this is scheduling a fn to run after the first render
  //  this fn does not happen immediately. it happens async
  // show something immediately before the api response comes back
  // then it runs the effect async and we log the breeds
  //  that came back from the api
  // Once we have the breeds back from the api then we can setBreeds

  // Look at second arg of useEffect.  Need to declare the things
  //  that it depends on: animal and setBreed and setBreeds.
  // if animal, setBreed, or setBreeds change then rerun the effect
  //  otherwise, dont run the effect. So, if location changes,
  //   it wont rerun the effect

  // whenever state changes, React will re-render the UI
  // useState and useEffect work together to manage
  //  state updates and display of state to the ui
  // The second param in useEffect is an array that tells useEffect
  //  when to run the effect. in other words, the effect will only rerun
  //   when the user changes the type of animal in the UI dropdown(ex: cat to dog)
  useEffect(() => {
    setBreeds([])
    setBreed('')
    pet.breeds(animal).then(
      ({ breeds }) => {
        const arrBreedNames = breeds.map(breed => breed.name)
        setBreeds(arrBreedNames)
      },
      err => console.error(err)
    )
  }, [animal, setBreed, setBreeds])

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
