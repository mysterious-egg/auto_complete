
// import './App.css'
// import data from '../resources/countryData.json'
// import { useState } from 'react'

// function App() {
//   const[search,setsearch]=useState('')
//   const[toggle,settoggle]=useState(true)

//   function handlesearch(e){
//     setsearch(e.target.value)
//   }

//   function handleKeyDown(e) {
//     if (e.keyCode === 27) {
//       settoggle(!toggle)
//     }
//   }
//   console.log(toggle)

//   console.log(search)
//   return (
//     <>
//       <input type="text" onChange={(e)=>handlesearch(e)} onKeyDown={(e)=>handleKeyDown(e)}/>
//       <div>
//       {data
//     .filter((item) =>item.name.toLowerCase().includes(search))
//     .map((searchname) => (
//       <p key={searchname.code}>{toggle?searchname.name:''}</p>
      
//     ))}
//       </div>
//     </>
//   )
// }

// export default App
import './App.css'
import data from '../resources/countryData.json'
import { useState } from 'react'

function App() {
  const [search, setsearch] = useState('')
  const [toggle, settoggle] = useState(true)

  function handlesearch(e) {
    setsearch(e.target.value)
  }

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      settoggle(!toggle)
    }
  }

  return (
    <>
      <input 
        type="text" 
        onChange={(e) => handlesearch(e)} 
        onKeyDown={(e) => handleKeyDown(e)} 
        value={search}
      />
      <div>
        {search && data
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((searchname) => (
            <p key={searchname.code}>{toggle ? searchname.name : ''}</p>
          ))}
      </div>
    </>
  )
}

export default App
