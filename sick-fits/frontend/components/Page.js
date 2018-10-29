import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

class Page extends Comment {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Page