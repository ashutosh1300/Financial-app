import "./AddCategory.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function AddCategory()
{ 
  const [file,setFile] = useState();
  const [catName, setCatName] = useState();
  const [output, setOutput] = useState();

   const handlechange = (event)=>{
    setFile(event.target.file[0])
   }

   const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_categoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });
  }
   return(
   <div className="what_we_do_section layout_padding">
        {/*Adminhome section start */}
      <div className="container">
        <h1 className="what_taital">WELCOME TO Add Category</h1>
       <font color="blue">{output}</font>
       <form onSubmit={handleSubmit}>
       <label>
        Category Name:  
        <input type="text" value={catName} onChange={e => setCatName(e.target.value)} />
       </label>
       <br/><br/>

       <input type="submit" value="Add Category" />

       </form>
      </div>
      {/* <Navigate to ="/service" /> */}
       {/*Adminhome section end */}
    </div>
 )
}
 export default AddCategory;