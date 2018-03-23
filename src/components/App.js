import React, { PureComponent } from "react";
import logo from "./logo.svg";

import ListItem from "./list-item";

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <ul>
          <ListItem {...testData} />
        </ul>
      </div>
    );
  }
}

const testData = {
  name: "level 1",
  children: [
    {
      name: "level 2a",
      children: [
        {
          name: "level 3",
          children: [
            {
              name: "level 4"
            }
          ]
        }
      ]
    },
    { name: "level 2b" }
  ]
};
