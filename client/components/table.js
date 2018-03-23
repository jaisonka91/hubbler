import React, { Component } from 'react';
import Pagination from './pagination';

export default class Table extends Component {

  constructor(){
    super()
    this.state = {
      sorted: false,
      page: 1
    }
  }

  handleSort = (status, item) =>{
    return()=>{
      this.setState({sorted: status},()=>{
        this.props.sortClick(status, item);
      });
    }
  }

  handlePagination = (page) => {
    this.setState({page: page}, ()=>{
      this.props.pagination(page);
    });
  }

  renderTableHead = (columns) => {
    let colSize = 100/columns.length;
    return(
      <div className='tableHeadWrap'>
        {columns.map((item, key)=>{
          return (
            <div key={key} className='tableHead' style={{width: colSize+'%'}}>
              {item.title}
              {item.sort && <span className="tableSort" onClick={this.handleSort(!this.state.sorted, item.field)}>&#8597;</span>}
            </div>
          )
        })}
      </div>
    )
  }

  renderTableBody = (columns, data) =>{
    let colSize = 100/columns.length;
    const { page } = this.state;
    let  newData = [];
    while (data.length > 0){
      newData.push(data.splice(0, 5));
    }
    return(
      <div className='tableBodyWrap'>
        {columns.map((colItem, colKey)=>{
          return (
            <div key={colKey} className='tableBody' style={{width: colSize+'%'}}>
              {
                newData[page-1].map((datItem, datKey)=>{
                  return(
                    <div key={datKey} className='tableBodyItem'>
                      {datItem[colItem.field]}
                    </div>
                  )
                })
              }
            </div>
          )
        })}
      </div>
    )
  }

  render(){
    const { columns, data, total, size } = this.props;
    if(!columns || columns.length == 0){
      return <div />
    }
    return(
      <div>
        <div className='table'>
          {this.renderTableHead(columns)}
          {!data || !data.length && <div style={{textAlign: 'center', padding: 5}}><span>no data available!!!</span></div>}
          {data && data.length > 0 && this.renderTableBody(columns, data)}
        </div>
        <Pagination paginationClick={this.handlePagination} total={total} size={size}/>
      </div>
    )
  }
}
