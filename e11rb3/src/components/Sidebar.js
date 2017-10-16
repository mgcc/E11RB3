import React, { Component } from 'react';
import '../styles/Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <ul>
        {
          this.props.links.map(link =>
            <li className="link" key={link.url}><a href={link.url}>{link.text}</a></li>
            )
        }
        </ul>
      </div>
    );
  }
}

export default Sidebar;