import React from 'react';
import styled from 'styled-components'

const StyledImg = styled.img`
  display: inline-block;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
`

const Styles = styled.div`
  background-color: red;
`
//display: inline-block;

const StyleSelector = ( {styles} ) => {
  return (
    <Styles>
      <div key={styles.styles_id}>
        {styles.map((style) => {
          return (
            <StyledImg key={style.style_id} src={style.photos[0].thumbnail_url}></StyledImg>
          )
        })}
      </div>
    </Styles>
    // <Styles>
    //   {styles.results.map((style) => {
    //     return (
    //       <div key={style.style_id}>
    //         <Styledname>Styles</Styledname>
    //         {style.name}
    //         <br/>
    //         <button>Select a Style</button>
    //         <label>
    //           size
    //           <select>
    //             {Object.entries(style.skus).map((sku) => {
    //               return (
    //                 <option key={sku[0]}>{sku[1].size}</option>
    //               )
    //             })}
    //           </select>
    //         </label>
    //       </div>
    //     )
    //   })}
    // </Styles>
  )
}


export default StyleSelector;