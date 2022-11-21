import React, { ReactNode, useState } from "react";

export enum Severity {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    SUCCESS = 'success'
}

interface Alert {
    open: boolean,
    severity: Severity,
    message: string
}

const defaultAlert = {open: false, message: "", severity: Severity.INFO};
export const AlertContext = React.createContext({
    alert: defaultAlert,
    addAlert: (severity: Severity, message: string) => {
    },
    removeAlert: () => {
    },
});

export const AlertProvider = ({children}: { children: ReactNode }) => {
    const [alert, setAlert] = useState<Alert>(defaultAlert);

    const addAlert = (severity: Severity, message: string) => {
        setAlert({open: true, severity, message,});
    };

    const removeAlert = () => {
        setAlert(defaultAlert);
    };

    return (
        <AlertContext.Provider
            value={{
                alert,
                addAlert: (severity: Severity, message: string) => addAlert(severity, message),
                removeAlert: () => removeAlert(),
            }}>
            {children}
        </AlertContext.Provider>
    );
};
