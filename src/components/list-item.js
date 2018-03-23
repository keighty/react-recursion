import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ListItem extends PureComponent {
  state = {
    showChildren: true
  };

  onClick = e => {
    e.stopPropagation();
    this.setState({ showChildren: !this.state.showChildren });
  };

  renderChildren = arr => {
    return <ul>{arr.map(this.renderChild)}</ul>;
  };

  renderChild = item => <ListItem {...item} />;

  render() {
    const { name, children } = this.props;
    const { showChildren } = this.state;
    return (
      <li onClick={this.onClick}>
        {name}
        {children && showChildren && this.renderChildren(children)}
      </li>
    );
  }
}
