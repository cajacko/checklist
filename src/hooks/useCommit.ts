import { useState } from "react";

const MIN_MESSAGE_LENGTH = 10;

interface IReference {
  key: "Related To" | "Fixes" | "Original Branch" | string;
  value: string;
}

type Params =
  | ["emoji" | "type" | "scope" | "title" | "description", string | null]
  | ["references", IReference[]];

export type Set = (...params: Params) => void;

const buildMessage = (
  emoji: string | null,
  type: string | null,
  scope: string | null,
  title: string | null,
  description: string | null,
  references: IReference[]
): string => {
  let message = "";

  if (emoji) message = `${emoji} ${message}`;
  if (type) message = `${message}${type}`;
  if (scope) message = `${message}(${scope}):`;
  if (title) message = `${message} ${title}\n`;

  if (description) message = `${message}\n${description}\n`;

  if (references && references.length) {
    references.forEach(({ key, value }) => {
      message = `${message}\n- ${key}: ${value}`;
    });
  }

  return message.trim();
};

const getError = (
  message: string,
  parts: {
    emoji: string | null;
    type: string | null;
    scope: string | null;
    title: string | null;
    description: string | null;
    references: IReference[];
  }
): null | string => {
  if (message.length < MIN_MESSAGE_LENGTH) {
    return `Message must be longer than ${MIN_MESSAGE_LENGTH} characters`;
  }

  return null;
};

const useCommit = () => {
  const [emoji, setEmoji] = useState<string | null>("🐛");
  const [type, setType] = useState<string | null>("feat");
  const [scope, setScope] = useState<string | null>("lerna");
  const [title, setTitle] = useState<string | null>("Do something fun");
  const [description, setDescription] = useState<string | null>(
    "Oh yeah buddy"
  );
  const [references, setReferences] = useState<IReference[]>([
    {
      key: "Original Branch",
      value: "master"
    },
    {
      key: "Related To",
      value: "#GEN-123"
    }
  ]);

  const set: Set = (key, value: any) => {
    switch (key) {
      case "description":
        setDescription(value);
        break;
      case "emoji":
        setEmoji(value);
        break;
      case "type":
        setType(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "scope":
        setScope(value);
        break;
      case "references":
        setReferences(value);
        break;
      default:
        break;
    }
  };

  const message = buildMessage(
    emoji,
    type,
    scope,
    title,
    description,
    references
  );

  return {
    error: getError(message, {
      emoji,
      type,
      scope,
      title,
      description,
      references
    }),
    message,
    set
  };
};

export default useCommit;
