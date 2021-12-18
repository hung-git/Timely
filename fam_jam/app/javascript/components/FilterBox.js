import React from 'react'

function FilterBox({ handleReminderFilter, handleCompletedFilter }) {
    return (
      <div className="filter-box">
        <div className="filter-box-header">
          <h3>Filters</h3>
        </div>
        <div className="filter-box-form">
          <div className="">
            <input className="filter-box-form-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="filter-box-form-label" htmlFor="flexCheckDefault">
              Important
            </label>
          </div>
          <div className="">
            <input className="filter-box-form-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleReminderFilter} />
            <label className="filter-box-form-label" htmlFor="flexCheckDefault">
              Reminders
            </label>
          </div>
          <div className="">
            <input className="filter-box-form-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleCompletedFilter} />
            <label className="filter-box-form-label" htmlFor="flexCheckDefault">
              Completed
            </label>
          </div>
        </div>
      </div>
    )
}

export default FilterBox
