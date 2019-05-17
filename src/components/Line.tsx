import * as React from "react";
import { Box } from "ink";

interface IProps {
  length: number;
  direction: "x" | "y";
  marginX?: number;
  marginY?: number;
  marginBottom?: number;
  marginTop?: number;
}

const isX = (direction: IProps["direction"]) => direction === "x";

const VerticalLine = ({ length, direction, ...props }: IProps) => (
  <Box flexDirection={isX(direction) ? "row" : "column"} {...props}>
    {Array.apply(null, Array(length)).map((item: any, i: number) => (
      <Box key={i}>{isX(direction) ? "-" : "|"}</Box>
    ))}
  </Box>
);

export default VerticalLine;
