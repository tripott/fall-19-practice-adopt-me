import React from 'react'

const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  )
}
export default Pet

// Another way to export a function named Pet
// export default function Pet({ name, animal, breed }) {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, name),
//     React.createElement('h2', {}, animal),
//     React.createElement('h2', {}, breed)
//   ])
// }

// Yet another way to export anonymous function
// export default ({ name, animal, breed }) => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, name),
//     React.createElement('h2', {}, animal),
//     React.createElement('h2', {}, breed)
//   ])
// }
