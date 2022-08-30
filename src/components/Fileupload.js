import React, { useState } from 'react'
import axios from 'axios'

const Fileupload = () => {
    const [myfile, setmyfile] = useState('')
    const [myImage, setmyImage] = useState('')
    const endpoint = 'http://localhost:5000/user/upload'
    const uploadfile =()=>{
      axios.post(endpoint,{myfile}).then((response)=>{
          console.log(response);
          console.log(response.data);
          setmyImage(response.data.image)
        })
    }
    const convertToString=(e)=>{
    let myImage = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(myImage)
    reader.onload=()=>{
        setmyfile(reader.result)
    }

    }
  return (
    <>
        <input type="file" onChange={(e)=>convertToString(e)}/>
        <button onClick={uploadfile}>Submit</button>

    </>
  )
}

export default Fileupload