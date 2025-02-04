import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu >
        <Menu.Item 
          name="home"
          active={activeItem === "home"}
          content="Home"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="events"
          active={activeItem === "events"}
          content="Events"
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
