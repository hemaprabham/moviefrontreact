import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'


const Addmovie = () => {
    const [inputfield,Changeinputfield]=useState(
        {
            
            "name":"",
            "image":"",
            "actor":"",
            "actress":"",
            "director":"",
            "producer":""
            
            
        
        }
        
        )
        const inputhandler=(event)=>{

            Changeinputfield({...inputfield,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
                console.log(inputfield)
                
                    axios.post("http://127.0.0.1:8000/addall/",inputfield).then(
                        (response)=>{
                            alert(response.data.status)
                        }
                    )
                    
               

        }

  return (
    <div>
        <Addheader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
                        <div className="row g-3" >
                        <div class="card">
                            <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label-control">name</label>
                                <input type="text" className="form-control" name='name' value={inputfield.name} onChange={inputhandler} />                            
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label-control">image</label>
                                <input type="text" className="form-control" name='image' value={inputfield.image} onChange={inputhandler} />                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label-control">actor</label>
                                <input type="text" className="form-control" name='actor' value={inputfield.actor} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label-control">actress</label>
                                <input type="text" className="form-control" name='actress' value={inputfield.actress} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label-control">producer</label>
                                <input type="text" className="form-control" name='producer' value={inputfield.producer} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label-control">director</label>
                                <input type="text" className="form-control" name='director' value={inputfield.director} onChange={inputhandler} />
                            </div>
                            
                            
                            
                            <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <button  onClick={readvalue}className="btn btn-warning">Add movie</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}




export default Addmovie