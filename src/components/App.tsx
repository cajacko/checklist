import * as React from "react";
import Message from "./Message";
import Step from "./Step";
import Toolbar from "./Toolbar";
import Layout from "./Layout";
import useCommit from "../hooks/useCommit";

// TODO: Shows the whole commit, and tab through it, with side bar to pick?

const App = () => {
  const { message, set } = useCommit();

  return (
    <Layout
      leftComponent={<Message text={message} />}
      rightComponent={<Step setMessage={set} />}
      bottomComponent={<Toolbar />}
    />
  );
};

export default App;
