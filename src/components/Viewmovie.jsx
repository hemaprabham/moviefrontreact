import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'


const Viewmovie = () => {
    const [data,ChangeData]=useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/").then(
            (response)=>{
                ChangeData(response.data)
            }
        )
        
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Addheader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {data.map((value,index)=>{
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">
                                <div class="card" width="200%" >
                                    
                                    <img src={value.image} class="img-thumbnail" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title">{value.name}</h5>
                                    <p class="card-text">{value.actor}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{value.actress}</li>
                                    <li class="list-group-item">{value.producer}</li>
                                    <li class="list-group-item">{value.director}</li>
                                    </ul>
                                    </div>
                                </div>
                           
                            
                            })}
                         
                            </div>
                            
                        </div>
                    </div>
                </div>


    </div>
  )
}
export default Viewmovie