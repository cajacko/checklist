import * as React from "react";
import Input from "./Input";
import { Set } from "../hooks/useCommit";

interface IProps {
  setMessage: Set;
}

const Step = (props: IProps) => (
  <Input
    title="Title"
    suggestions={["1", "2", "3", "4"]}
    onChangeValue={value => {
      props.setMessage("title", value);
    }}
  />
);

export default Step;
