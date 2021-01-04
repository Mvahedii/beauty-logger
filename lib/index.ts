import {
  infoStyle,
  dangerStyle,
  warningStyle,
  successStyle,
  darkStyle,
} from "./styles";

type LoggerType = {
  info: (props: string) => void;
  danger: (props: string) => void;
  warning: (props: string) => void;
  success: (props: string) => void;
  dark: (props: string) => void;
};

export const Logger: LoggerType = {
  info: (props) => console.log(`%c${props.toString()}`, infoStyle),
  danger: (props) => console.log(`%c${props.toString()}`, dangerStyle),
  warning: (props) => console.log(`%c${props.toString()}`, warningStyle),
  success: (props) => console.log(`%c${props.toString()}`, successStyle),
  dark: (props) => console.log(`%c${props.toString()}`, darkStyle),
};
