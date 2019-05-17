import * as React from "react";

const ARROW_UP = "\u001B[A";
const ARROW_DOWN = "\u001B[B";
const ENTER = "\r";

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

        default:
          setSelectedSuggestion(0);
          break;
      }
    };

    stdin.on("data", handleInput);

    if (onChangeValue) onChangeValue(displayValue);

    return () => {
      mounted = false;
      stdin.removeListener("data", handleInput);
      if (setRawMode) setRawMode(false);
    };
  });

  return {
    value: displayValue,
    suggestions,
    selectedSuggestion,
    setValue,
    onSubmit
  };
};

export default useInput;
