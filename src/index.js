import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './navbar';

var MasterPage = React.createClass({

  render: function () {

    return <NavBar/>

  }

});

ReactDOM.render(<MasterPage/>, document.getElementById('root'));
