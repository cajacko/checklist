import { useState } from 'react';

const MIN_MESSAGE_LENGTH = 10;

interface IReference {
  key: 'Related To' | 'Fixes' | 'Original Branch' | string;
  value: string;
}

const buildMessage = (
  emoji: string | null,
  type: string | null,
  scope: string | null,
  title: string | null,
  description: string | null,
  references: IReference[]
): string => {
  let message = '';

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
  const [emoji] = useState('🐛');
  const [type] = useState('feat');
  const [scope] = useState('lerna');
  const [title] = useState('Do something fun');
  const [description] = useState('Oh yeah buddy');
  const [references] = useState([
    {
      key: 'Original Branch',
      value: 'master'
    },
    {
      key: 'Related To',
      value: '#GEN-123'
    }
  ]);

  const set = () => {};

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
