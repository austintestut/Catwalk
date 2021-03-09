import React from 'react';
import styled from 'styled-components'

const StyledBtn = styled.button`
  border-radius: 50%;
  height: 65px;
  width: 65px;
  cursor: pointer;
  margin-bottom: 5px;
`

const Styles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`
const SelectorContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 21%;
`

const styleName = (styles, id) => {
  for (let i = 0; i < styles.length; i++) {
    console.log(styles[i])
    if (styles[i].style_id === Number(id)) {
      return (styles[i].name)
    }
  }
}

const StyleSelector = ( {styles, selected, handleSelect} ) => {

  return (
    <Styles>
        {styles.map((style) => {

          let styles={
            backgroundImage: `url(${style.photos[0].thumbnail_url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }

          return (
            <SelectorContainer
              key={style.style_id}
              value={style.style_id}
            >
              <StyledBtn
                style={styles}
                onClick={handleSelect}
                key={style.style_id}
                value={style.style_id}
              >
              </StyledBtn>
            </SelectorContainer>
          )
        })}
    </Styles>
  )
}


export default StyleSelector;