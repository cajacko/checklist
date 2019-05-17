import * as React from "react";
import { Box } from "ink";
import Line from "./Line";

interface IProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  bottomComponent: React.ReactNode;
}

const width = 200;
const containerProps = { margin: 1 };

const Layout = ({ leftComponent, rightComponent, bottomComponent }: IProps) => (
  <Box width="100%" marginY={1} flexDirection="column">
    <Line direction="x" length={width} />
    <Box width="100%" flexDirection="row">
      <Box {...containerProps}>{leftComponent}</Box>
      <Line direction="y" length={10} marginX={2} />
      <Box {...containerProps}>{rightComponent}</Box>
    </Box>
    <Line direction="x" length={width} />
    <Box {...containerProps}>{bottomComponent}</Box>
    <Line direction="x" length={width} />
  </Box>
);

export default Layout;
