import{ useState, useEffect , useContext} from 'react'
import './Style.css'
import Box from '../Multi/Box';
import firebase, { app, database, storage, auth } from '../../firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MyContext } from '../AppProvider';
import { options } from '../Data/Categories'
import axios from 'axios';
import Modal from 'react-modal';
import SuccessModal from './Modal';
import EcommerceCard from './StoredCard';



const StoreData = () => {
const { ProductNumber} = useContext(MyContext)
const [storedData, setStoredData] = useState([])



useEffect(() => {

    axios.get('https://charming-cod-gaiters.cyclic.app/upload_Categories')
        .then((res) => { 
            console.log(res.data)
            setStoredData(res.data)
         })
        .catch((error) => console.log(error))
}, [ProductNumber])
  


const render = storedData?.map((items,index)=>{
    return (
        <EcommerceCard key={index} storedData={items} />
    )
})







    return (
        <main >

            <Box  ProductNumber={ProductNumber}/>
            <div className=' ' style={{ display:'flex', flexWrap:'wrap', marginTop:20}}>
            {render}
            </div>

        </main>
    )
}

export default StoreData