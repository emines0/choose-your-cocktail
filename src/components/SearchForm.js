import { React, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])
  /*
   * in the moment app renders focus to the search form input
   */

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  /*
   * when the user press Enter app is not refreshing
   */

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
          {/*
           * every time when user type something invoke the setSearchTerm which firing the fetchDrink function
           * during the onChange event run the searchCocktail function where setSearchTerm to the current input value
           */}
        </div>
      </form>
    </section>
  )
}

export default SearchForm
