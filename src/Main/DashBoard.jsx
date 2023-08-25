import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {

    const [order, setOrder ] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://charming-cod-gaiters.cyclic.app/Profile0rders")
        .then((res)=>{
            // console.log(res.data)
            setOrder(res.data)
        
        })
        .catch((err)=> console.log(err))

    },[])


    const HandleCheck = (ele)=>{
        // alert("")
        console.log(ele)
        navigate('/Order', { state: { data: ele } });
    }

    const renderOrders = order?.map((ele, index) => {
        const { firstName, lastName } = ele;
        const inputDate = new Date(ele.createdAt);
        const formattedDate = `${("0" + (inputDate.getMonth() + 1)).slice(-2)}-${(
          "0" + inputDate.getDate()
        ).slice(-2)}-${inputDate.getFullYear()}`;
      
        return (
          <tr onClick={() => HandleCheck(ele?.orders)} key={index}>
            <td>
              <img src="img/people.png" alt="Person" />
              <p>
                {firstName} {lastName}
              </p>
            </td>
            <td>{formattedDate}</td>
            <td>
              <span className="status completed">Completed</span>
            </td>
          </tr>
        );
      });
      


    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li><i className='bx bx-chevron-right' ></i></li>
                        <li>
                            <a className="active" href="#">Home</a>
                        </li>
                    </ul>
                </div>
                <a href="#" className="btn-download">
                    <i className='bx bxs-cloud-download' ></i>
                    <span className="text">Download PDF</span>
                </a>
            </div>

            <ul className="box-info">
                <li>
                    <i className='bx bxs-calendar-check' ></i>
                    <span className="text">
                        <h3>1020</h3>
                        <p>New Order</p>
                    </span>
                </li>
                <li>
                    <i className='bx bxs-group' ></i>
                    <span className="text">
                        <h3>2834</h3>
                        <p>Visitors</p>
                    </span>
                </li>
                <li>
                    <i className='bx bxs-dollar-circle' ></i>
                    <span className="text">
                        <h3>$2543</h3>
                        <p>Total Sales</p>
                    </span>
                </li>
            </ul>


            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Recent Orders</h3>
                        <i className='bx bx-search' ></i>
                        <i className='bx bx-filter' ></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Date Order</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                          {renderOrders}
                         
                        
                          
                        
                        </tbody>
                    </table>
                </div>
                <div className="todo">
                    <div className="head">
                        <h3>Todos</h3>
                        <i className='bx bx-plus' ></i>
                        <i className='bx bx-filter' ></i>
                    </div>
                    <ul className="todo-list">
                        <li className="completed">
                            <p>Todo List</p>
                            <i className='bx bx-dots-vertical-rounded' ></i>
                        </li>
                        <li className="completed">
                            <p>Todo List</p>
                            <i className='bx bx-dots-vertical-rounded' ></i>
                        </li>
                        <li className="not-completed">
                            <p>Todo List</p>
                            <i className='bx bx-dots-vertical-rounded' ></i>
                        </li>
                        <li className="completed">
                            <p>Todo List</p>
                            <i className='bx bx-dots-vertical-rounded' ></i>
                        </li>
                        <li className="not-completed">
                            <p>Todo List</p>
                            <i className='bx bx-dots-vertical-rounded' ></i>
                        </li>
                    </ul>
                </div>
            </div>
        </main>

    )
}

export default DashBoard