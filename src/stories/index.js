import React from "react";
import { storiesOf, linkTo } from "@storybook/react";

import App from "../components/App";

storiesOf("App", module).add("eventBubbling", () => (
  <App showApp={linkTo("Button")} />
));
