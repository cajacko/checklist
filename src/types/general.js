// @flow

export type ReactRouter = {
  history: {
    push: string => void,
    goBack: () => void,
  },
  match: {
    params: {
      [string]: string,
    },
  },
};
