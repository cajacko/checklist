import * as React from "react";
import { Box, StdinContext } from "ink";
import TextInput from "ink-text-input";
import useInput from "../hooks/useInput";

interface IProps {
  suggestions: string[];
  onSubmit?: (value: string | null) => void;
  onChangeValue?: (value: string | null) => void;
  title: string;
  helpText?: string;
}

interface IStdinProps {
  stdin: NodeJS.ReadStream;
  setRawMode: NodeJS.ReadStream["setRawMode"];
}

interface IAllProps extends IProps, IStdinProps {}

const Input = ({ stdin, setRawMode, title, helpText, ...props }: IAllProps) => {
  const { value, suggestions, selectedSuggestion, setValue } = useInput(
    stdin,
    setRawMode,
    props
  );

  return (
    <Box flexDirection="column">
      <Box>{title}</Box>
      {helpText && <Box>{helpText}</Box>}
      <Box marginTop={1}>
        > <TextInput value={value} onChange={setValue} />
      </Box>
      {!!suggestions && suggestions.length > 1 && (
        <Box flexDirection="column" marginTop={1}>
          <Box>Suggestions:</Box>

          {suggestions.map((suggestion, i) => (
            <Box key={suggestion || "null"}>
              {i === selectedSuggestion ? (
                <Box marginRight={1}>></Box>
              ) : (
                <Box marginRight={2} />
              )}
              <Box marginLeft={1}>{suggestion || "-"}</Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default (props: IProps) => (
  <StdinContext.Consumer>
    {({ stdin, setRawMode }) => (
      <Input {...props} stdin={stdin} setRawMode={setRawMode} />
    )}
  </StdinContext.Consumer>
);
