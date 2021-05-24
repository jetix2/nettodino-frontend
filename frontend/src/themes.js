import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#383838",
  
  
};

export const darkTheme = {
  body: "#383838",
  fontColor: "red",
  
};

export const GlobalStyles = createGlobalStyle`
	body {
        font-family: 'Shippori Mincho', serif;
		background-color: ${(props) => props.theme.body};
    }
    .card {
        color: #383838
    }
    .card-body{
      color: 
    }
    
`;