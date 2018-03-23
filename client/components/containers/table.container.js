import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../redux/actions.js';
import { bindActionCreators } from 'redux';
import TableWrap from '../wrapTable';

const mapStateToProps = (state) =>{
  return {
    data: state.tableData.data,
    loading: state.tableData.loading,
    total: state.tableData.total,
    error: state.tableData.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ search }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWrap);
