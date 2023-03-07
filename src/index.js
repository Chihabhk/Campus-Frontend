import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fonts = {
    body: "Tahoma",
    heading: "Courier New",
};

const theme = extendTheme({ fonts });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </React.StrictMode>
    </ChakraProvider>
);
