import React from 'react'

const Search = ({ onSearchChange, onSearchSubmit, isLoading }) => {
  const buttonClassName = isLoading ? 'button is-primary is-loading' : 'button is-primary'
  return (
    <div>
      <div className="field">
        <label className="label">Amazon Product Info</label>
        <div className="control">
          <input className="input" onChange={onSearchChange} type="text" placeholder="Please Enter ASIN Number" />
        </div>
      </div>
      <div className="control">
        <button className={buttonClassName} onClick={onSearchSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Search