import * as React from "react";
import { Box } from "ink";

const COMMIT_MSG_MAX_LINE_LENGTH = 80;

interface IProps {
  text: string;
}

const Message = ({ text }: IProps) => (
  <Box width={COMMIT_MSG_MAX_LINE_LENGTH}>{text}</Box>
);

export default Message;
