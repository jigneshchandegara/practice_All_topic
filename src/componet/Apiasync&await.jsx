import React, { useEffect, useRef, useState } from "react";
import {base_url} from '../jsdata/apiasync';
import axios from "axios";

const Asyncawaitdata = () => {

    let [person ,setparson] = useState([]);
    let [updata ,setupdata] = useState({});
    let Name = useRef();
    let Email = useRef();
    let Password =useRef();

    // get adata
    const  getData= async ()=>{
        let  get = await axios.get(base_url)
        setparson(get.data)
    }

   

    //Add data
    const adddata = async () =>{
        let data ={
            Name:Name.current.value,
            Email:Email.current.value,
            Password:Password.current.value
        };
        let Add = await axios.post(base_url,data);
        console.log(Add.data);
        Name.current.value ="";
        Email.current.value="";
        Password.current.value = "";
        setparson([...person , Add.data]);
    }

    // delete data
    const deletedata = async (id) =>{
        let  del = await axios.delete(base_url+`/${id}`);
        console.log(del);
        setparson(person.filter((value) => value.id !== id))
    }

    // updata data
    const viewAll = (index) =>{
        let item = person[index];
        setupdata(item)
        console.log(item);
    }

    const viewupdata =(e) =>{
        setupdata({...updata, [e.target.name]: e.target.value})
      
    }

    const save = async () =>{
        let result = await axios.put(base_url + `/${updata.id}`,updata)
        setparson(person.map((value,index) =>{
            if(value.id == result.data.id){
                return result.data
            }else{
                return value
            }
        }))
    }

    useEffect(() =>{
        getData()
    },[])

    return (
        <>
            <input type="text" placeholder="enter your name" name="Name" ref={Name} />
            <input type="email" placeholder="Enter Your Email" name="Email" ref={Email} />
            <input type="password" placeholder="enter your password" name="Password" ref={Password} />
            <button onClick={adddata}>Add</button>

            <table cellpadding="10px" className="col-12 text-center table-bordered  border-secondary">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Updta</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        person.map((value, index) => {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{value.Name}</td>
                                    <td>{value.Email}</td>
                                    <td>{value.Password}</td>
                                    <td><button onClick={() => deletedata(value.id)}>deletedata</button></td>
                                    <td><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viewAll(index)}>Updata</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" >
                            <input type="text" placeholder="enter your name" name = "Name" value = {updata.Name} onChange={viewupdata}/><br />
                            <input type="email" placeholder="Enter Your Email" name = "Email" value = {updata.Email} onChange={viewupdata}/><br />
                            <input type="password" placeholder="enter your password" name = "Password" value = {updata.Password} onChange={viewupdata}/><br />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={save}>save</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Asyncawaitdata