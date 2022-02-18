import React, { Component, PropTypes } from 'react'

const SORT = [
  {
    id: 'rl',
    value: 'relevance',
    title: 'relevance',
  },
  {
    id: 'nw',
    value: 'newest',
    title: 'newest',
  },
];

class header extends Component {
    render () {
        return (
          <div>
            <h4>Search for books</h4>
            <input type='text' />
            <div>
              <label htmlFor='categories'>Categories</label>
              <select name='' id='categories'></select>
              <label htmlFor='sorting'>Sorting by</label>
                    <select name='' id='sorting'>
                        {SORT.map(({ id, value, title }) => (
                            <option key={id} value={value}>{title}</option>
                        ) )}
              </select>
            </div>
          </div>
        );
    }
}

header.propTypes = {

}

export default header