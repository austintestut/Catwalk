import React from 'react';
import styled from 'styled-components'

const Styledname = styled.h1`
  font-size: 1.5em;
  color: red;
`

const Styles = styled.div`
  background-color: red;
`
//display: inline-block;

const StyleSelector = ( {styles} ) => {
  //console.log('SS', styles);
  return (
    <Styles>
      {styles.results.map((style) => {
        return (
          <div key={style.style_id}>
            <Styledname>Styles</Styledname>
            {style.name}
            <br/>
            <button>Select a Style</button>
            <label>
              size
              <select>
                {Object.entries(style.skus).map((sku) => {
                  return (
                    <option key={sku[0]}>{sku[1].size}</option>
                  )
                })}
              </select>
            </label>
          </div>
        )
      })}
    </Styles>
  )
}

export default StyleSelector;