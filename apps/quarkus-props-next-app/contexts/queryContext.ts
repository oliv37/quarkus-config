import { Dispatch, SetStateAction, createContext } from "react";

const DEFAULT_VALUE: [string, Dispatch<SetStateAction<string>>] = [
  "",
  () => {},
];

const QueryContext = createContext(DEFAULT_VALUE);

export default QueryContext;
