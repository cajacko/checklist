import * as React from "react";
import Input from "./Input";

interface IProps {
  setMessage: () => void;
}

const onSubmit = (value: string) => {
  console.log(value);
};

const Step = (props: IProps) => (
  <Input title="Title" suggestions={["1", "2", "3", "4"]} onSubmit={onSubmit} />
);

export default Step;
