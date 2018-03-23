import React, { Component } from 'react';

export default class Pagination extends Component {

  constructor(){
    super();
    this.state = {
      current: 1
    }
  }

  handleClick = (value) => {
    return()=>{
      this.setState({current: value},()=>{
        this.props.paginationClick(this.state.current);
      });
    }
  }

  render(){
    const { current } = this.state;
    const { total, size } = this.props;
    return(
      <div style={{marginTop: 10, float: 'right'}}>
        {current != 1 && <div className='paginationButton' onClick={this.handleClick(current-1)}>{`<`}</div>}
        <div className='paginationButton'>{current}</div>
        {(total >= current*size) && <div className='paginationButton' onClick={this.handleClick(current+1)}>{`>`}</div>}
      </div>
    )
  }
}
