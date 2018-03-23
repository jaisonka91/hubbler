import React, { Component } from 'react';
import Table from './table';

export default class WrapTable extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      limit: 5,
      sort: false,
      field: ''
    };
  }

  propCall = () => {
    const { search, limit, sort, field, error } = this.state;
    this.props.search({name: search, limit: limit, field: field, sort: sort});
  }

  handleSearch = e => {
    this.setState({ search: e.target.value}, () => {
      this.propCall();
    });
  };

  handleSort = (status, field) =>{
    this.setState({sort: status, field: field},()=>{
      this.propCall();
    });
  }

  pagination = (page) => {
    const { limit } = this.state;
    this.setState({limit: limit*page},()=>{
      this.propCall();
    });
  }

  render() {
    const { data, loading, total, error } = this.props;
    const columns = [
      {
        title: 'Name',
        field: 'name',
        sort: true
      },{
        title: 'Diameter',
        field: 'diameter',
        sort: true
      },{
        title: 'Rotation Period',
        field: 'rotation_period',
        sort: true
      }
    ];
    return (
      <div className='container'>
        <div style={{textAlign: 'center'}}>
          <input
            placeholder="Search"
            value={this.state.search}
            onChange={this.handleSearch}
          />
        </div>
        {
          !error && this.state.search.length > 0 &&
          <Table columns={columns} data={data} sortClick={this.handleSort} pagination={this.pagination} size={5} total={total}/>
        }{
          error && <div style={{textAlign: 'center', marginTop: 20}}>
            <span>Network error !!!</span>
          </div>
        }
        {
          this.state.search.length == 0 &&
          <div style={{textAlign: 'center', marginTop: 20}}>
            {!error && <span>Search for Planets</span>}
          </div>
        }
      </div>
    );
  }
}
