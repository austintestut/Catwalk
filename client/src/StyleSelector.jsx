import React from 'react';

const StyleSelector = ( {styles} ) => {
  return (
    <div>
      {styles.results.map((style) => {
        return (
          <div key={style.style_id}>
            <h1>Styles</h1>
            {style.name}
            <br/>
            <button>Select a Style</button>
          </div>
        )
      })}
    </div>
  )
}

export default StyleSelector;