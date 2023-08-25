import{ useState, useEffect , useContext} from 'react'
import './Style.css'
import Box from '../Multi/Box';
import firebase, { app, database, storage, auth } from '../firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MyContext } from '../AppProvider';
import { options } from '../Data/Categories'
import axios from 'axios';
import Modal from 'react-modal';
import SuccessModal from './Modal';



const Store = () => {
const { ProductNumber, setProductNumber} = useContext(MyContext)
const [successModalOpen, setSuccessModalOpen] = useState(false);
const [isLoading, setIsLoading] = useState(false);
    const storage = getStorage();


    const [TitleFields, setTitleFields] = useState('');
    const [descriptionFields, setdescriptionFields] = useState('');
    const [priceFields, setpriceFields] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [subselectedOption, setSubselectedOption] = useState('');
    const [downloadUrls, setDownloadUrls] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isButtonClicked, setButtonClicked] = useState(false);



    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    const closeSuccessModal = () => {
        setSuccessModalOpen(false);
      };


  

    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        if (name === 'selectedOption') {
            setSelectedOption(value);
            setSubselectedOption('');
        } else if (name === 'subselectedOption') {
            setSubselectedOption(value);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)

        const requestData = {
            selectedOption,
            subselectedOption,
            descriptionFields,
            TitleFields,
            priceFields,
            downloadUrls,
        };

        try {
            const response = await axios.post("https://charming-cod-gaiters.cyclic.app/upload_Categories", requestData);
            console.log('Request was successful:', response.data);
            setSelectedOption('');
            setTitleFields('')
            setdescriptionFields('')
            setpriceFields('')
            setSubselectedOption('')
            setDownloadUrls([])
            setSuccessModalOpen(true);
            setIsLoading(false)
            // setProductNumber(ProductNumber+1)
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const selectedOptions = options[selectedOption];
    const subOptions = selectedOptions ? selectedOptions.subOptions : {};


    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    //     setsubselectedOption(event.target.value)
    // };



    const handleFileUpload = async (event) => {
        const files = event.target.files;
        const newUrls = [];
        setButtonClicked(true);

        const uploadPromises = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const metadata = {
                contentType: file.type,
            };

            const storageRef = ref(storage, 'images/' + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            const uploadPromise = new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    },
                    (error) => {
                        console.error('Error uploading file:', error);
                        reject(error);
                    },
                    async () => {
                        try {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            console.log('File available at', downloadURL);
                            newUrls.push(downloadURL);
                            resolve();
                        } catch (error) {
                            reject(error);
                        }
                    }
                );
            });

            uploadPromises.push(uploadPromise);

        }

        try {
            await Promise.all(uploadPromises);
            setDownloadUrls([...downloadUrls, ...newUrls]);
            setButtonClicked(false);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };







    return (
        <main>

            <Box  ProductNumber={ProductNumber}/>

            <div className="form-container">
                <label htmlFor="categories">
                    Select an option:
                    <select name="selectedOption" value={selectedOption} onChange={handleOptionChange} className="form-control"  >
                        <option value="">Categories*</option>
                        {Object.keys(options).map((value) => (
                            <option key={value} value={value}>
                                {options[value].label}
                            </option>
                        ))}
                    </select>
                </label>

                {Object.keys(subOptions).length > 0 && (
                    <label htmlFor="subCategories">
                        Select a sub option:
                        <select
                            name="subselectedOption" value={subselectedOption} onChange={handleOptionChange} className="form-control"  >
                            <option value="">Subcategories*</option>
                            {Object.keys(subOptions).map((value) => (
                                <option key={value} value={value}>
                                    {subOptions[value]}
                                </option>
                            ))}
                        </select>
                    </label>
                )}



                <div className="mb-3" style={{ marginTop: 10 }}>
                    <label htmlFor="formFileLg" className="form-label">Title*</label>
                    <input className="form-control form-control-lg" id="formFileLg" onChange={(e) => setTitleFields(e.target.value)} type="text" placeholder='Enter Title*' />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Description</label>
                    <input className="form-control" type="text" onChange={(e) => setdescriptionFields(e.target.value)} id="formFile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Price</label>
                    <input className="form-control" type="text" id="formFile" placeholder='Price*' onChange={(e) => setpriceFields(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple onChange={handleFileUpload} />
                    {/* {downloadUrls.length > 0 && (
                        <div>
                            <h2>Uploaded Images:</h2>
                            <ul style={{ display: 'flex', gap: 10 }}>
                                {downloadUrls.map((url, index) => (
                                    <li key={index}>
                                        <img src={url} alt={`Image ${index}`}  />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )} */}
                    {downloadUrls.length > 0 && (
                        <div>
                            <h2>Uploaded Images:</h2>
                            <ul className="image-list">
                                {downloadUrls.map((url, index) => (
                                    <li key={index} onClick={() => openModal(url)}>
                                        <img src={url} alt={`Image ${index}`} style={{ maxWidth: '50px', maxHeight: '100px' }} />
                                    </li>
                                ))}
                            </ul>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Image Modal"
                                className="modal"
                                overlayClassName="modal-overlay"
                            >
                                {selectedImage && <img src={selectedImage} alt="Enlarged" className="enlarged-image" />}
                            </Modal>
                        </div>
                    )}
                </div>


                <button className="btn btn-primary my-3" onClick={handleSubmit} disabled={isButtonClicked}>
                    {isButtonClicked ? 'Uploaded...' : 'Post Ads'}
                </button>
            </div>
            <SuccessModal isOpen={successModalOpen} onClose={closeSuccessModal} isLoading={isLoading}  />

        </main>
    )
}

export default Store