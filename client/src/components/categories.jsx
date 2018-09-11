import styled, { css } from 'styled-components';
import React from 'react'

const CategoriesStyledComponent = styled.div`
display: inline;
`
class Categories extends React.Component {
  constructor(props){
    super (props)
  }


  render(){
    console.log("category props", this.props.categories);
    let categories = []
    if (this.props.categories !== undefined){
      for (let i = 0; i < this.props.categories.length; i++){
        categories.push(this.props.categories[i].childCategory)
      }
      categories = categories.join(", ")
    }

    return(
      <CategoriesStyledComponent>Categories Component <a href="#">{categories}</a></CategoriesStyledComponent>
    )
  }

}
export default Categories;