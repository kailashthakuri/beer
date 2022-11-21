import { useContext } from "react";
import { AlertContext } from "../context/alertContext";

const useAlert = () => {
    const {alert, addAlert, removeAlert} = useContext(AlertContext);
    return {alert, addAlert, removeAlert};
}

export default useAlert;
