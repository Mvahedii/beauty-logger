import { colors } from "./colors";

const addStyle = (color: string) => {
  return `
    background-color: ${color};
    font-weight: bold;
    color:white;
    `;
};

const infoStyle = addStyle(colors.blue);
const dangerStyle = addStyle(colors.red);
const warningStyle = addStyle(colors.yellow);
const successStyle = addStyle(colors.green);
const darkStyle = addStyle(colors.green);

export { infoStyle, dangerStyle, warningStyle, successStyle, darkStyle };
