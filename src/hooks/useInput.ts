import * as React from "react";

const ARROW_UP = "\u001B[A";
const ARROW_DOWN = "\u001B[B";
const ARROW_LEFT = "\u001B[D";
const ARROW_RIGHT = "\u001B[C";
const ENTER = "\r";
const CTRL_C = "\x03";
const BACKSPACE = "\x08";
const DELETE = "\x7F";

interface IProps {
  suggestions?: string[];
  onSubmit?: (value: string | null) => void;
  onChangeValue?: (value: string | null) => void;
}

type Suggestions = Array<null | string> | null;

const useInput = (
  stdin: NodeJS.ReadStream,
  setRawMode: NodeJS.ReadStream["setRawMode"],
  { onSubmit, onChangeValue, ...props }: IProps
) => {
  const [value, setValue] = React.useState("");
  const [selectedSuggestion, setSelectedSuggestion] = React.useState(0);

  let suggestions: Suggestions = props.suggestions ? [null] : null;

  let displayValue = value;

  if (suggestions && props.suggestions) {
    suggestions = suggestions.concat(props.suggestions);
    const suggestion = suggestions[selectedSuggestion] || null;

    if (suggestion) displayValue = suggestion;
  }

  let mounted = true;

  React.useEffect(() => {
    if (setRawMode) setRawMode(true);

    const handleInput = (data: any) => {
      if (!mounted) return;

      const s = String(data);

      switch (s) {
        case ARROW_UP: {
          if (!suggestions) return;

          setSelectedSuggestion(prev => {
            if (!suggestions) return prev;

            let newSelection = prev - 1;
            if (newSelection < 0) newSelection = suggestions.length - 1;

            return newSelection;
          });

          break;
        }

        case ARROW_DOWN: {
          if (!suggestions) return;

          setSelectedSuggestion(prev => {
            if (!suggestions) return prev;

            let newSelection = prev + 1;
            if (newSelection >= suggestions.length) newSelection = 0;

            return newSelection;
          });

          break;
        }

        case ENTER:
          if (onSubmit) onSubmit(displayValue);
          break;

        case BACKSPACE:
        case DELETE:
          setValue(prevValue => prevValue.substr(0, prevValue.length - 1));
          break;

        case CTRL_C:
          break;

        default:
          setSelectedSuggestion(0);
          setValue(prevValue => prevValue + s);
          break;
      }
    };

    stdin.on("data", handleInput);

    return () => {
      mounted = false;
      stdin.removeListener("data", handleInput);
      if (setRawMode) setRawMode(false);
    };
  });

  return {
    value: displayValue,
    suggestions,
    selectedSuggestion
  };
};

export default useInput;
