import { injectGlobal } from "styled-components";

const injectGlobalСss = () => injectGlobal`
body {
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #000000;
}
`;
export default injectGlobalСss;
