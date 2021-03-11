import React from 'react';
import styled from 'styled-components'
import checkmark from '../../../images/checkmark.png';

const StyleSelector = ( {styles, selected, handleSelect} ) => {

  return (
    <Styles>

        {styles.map((style) => {

          let styles={
            backgroundImage: `url(${style.photos[0].thumbnail_url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }
          if (style.style_id === Number(selected)){
          return (
            <SelectorContainer
              key={style.style_id}
              value={style.style_id}
            >
              <StyledCheck src={checkmark}/>
              <StyledBtn
                style={styles}
                onClick={handleSelect}
                key={style.style_id}
                value={style.style_id}
              >
              </StyledBtn>
            </SelectorContainer>
          )
          } else {
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
          }
        })}
    </Styles>
  )
}

const StyledBtn = styled.button`
  border-radius: 50%;
  height: 65px;
  width: 65px;
  cursor: pointer;
  margin-bottom: 5px;
  ${StyledBtn}:hover {
    border: 2px solid red;
  }
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
const StyledCheck = styled.img`
  height: 15px;
  width: 15px;
  border-radius: 50%;
`

export default StyleSelector;