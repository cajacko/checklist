import * as React from "react";

const ARROW_UP = "\u001B[A";
const ARROW_DOWN = "\u001B[B";
const ENTER = "\r";

interface IProps {
  suggestions?: string[];
  onSubmit?: (value: string | null) => void;
  onChangeValue?: (value: string | null) => void;
}

const useInput = (
  stdin: NodeJS.ReadStream,
  setRawMode: NodeJS.ReadStream["setRawMode"],
  { onSubmit, onChangeValue, ...props }: IProps
) => {
  const [value] = React.useState("");
  const [selectedSuggestion, setSelectedSuggestion] = React.useState(0);

  let suggestions: Array<null | string> | null = props.suggestions
    ? [null]
    : null;

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
      switch (String(data)) {
        case "k":
        case ARROW_UP: {
          if (!suggestions) break;

          let newSelection = selectedSuggestion - 1;
          if (newSelection < 0) newSelection = suggestions.length - 1;

          setSelectedSuggestion(newSelection);
          break;
        }

        case "j":
        case ARROW_DOWN: {
          if (!suggestions) break;

          let newSelection = selectedSuggestion + 1;
          if (newSelection >= suggestions.length) newSelection = 0;

          setSelectedSuggestion(newSelection);
          break;
        }

        case ENTER:
          if (onSubmit) onSubmit(displayValue);
          break;

        default:
          if (mounted) setSelectedSuggestion(0);
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
