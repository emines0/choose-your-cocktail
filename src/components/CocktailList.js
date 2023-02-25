import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  /*
   * if loading true show loading component
   */
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no coctails matched your search criteria
      </h2>
    )
  }
  /*
   * if the length of the coctails array is < 1 then show the message
   */

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
