import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#383838",
  
  
};

export const darkTheme = {
  body: "#383838",
  fontColor: "white",
  
};

export const GlobalStyles = createGlobalStyle`
	body {
        font-family: 'Poppins';
		background-color: ${(props) => props.theme.body};
    }
    .card {
        color: #383838
    }
    .card-body{
      color: 
    }
    
`;