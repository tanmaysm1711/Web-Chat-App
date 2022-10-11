import React, { Children, createContext, useContext } from 'react';
import { ThemeProvider, createTheme } from "@material-ui/core"

export const TemplateContext = createContext(null)
const TemplateProvider = ({ children }) => {
    const theme = createTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    height: '95%',
                    top: 17,
                    width: '27.9%',
                    left: 61.25,
                    boxShadow: 'none'
                }
            },
            MuiBackdrop: {
                root: {
                    backgroundColor: 'unset'
                }
            }
        }
    })
    
    return (
        <TemplateContext.Provider value={{}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider;