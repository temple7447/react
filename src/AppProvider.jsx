import { createContext,  useState, useEffect } from "react";
import axios from 'axios';


export const MyContext = createContext();





export const MyContextProvider = ({ children }) => {
    const [isClassAdded, setIsClassAdded] = useState(false);
    const [ProductNumber, setProductNumber] = useState(0)


    useEffect(() => {

        axios.get('https://charming-cod-gaiters.cyclic.app/upload_Categories')
            .then((res) => { 
                console.log(res.data)
                setProductNumber(res.data.length)
             })
            .catch((error) => console.log(error))
    }, [ProductNumber])



    return (
        <MyContext.Provider value={{ isClassAdded, setIsClassAdded, ProductNumber ,setProductNumber}}>
            {children}
        </MyContext.Provider>
    );
};
