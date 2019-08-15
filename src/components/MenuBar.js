import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu >
        <Menu.Item className ="menuItem"
          name="editorials"
          active={activeItem === "editorials"}
          content="Home"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          content="Events"
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
