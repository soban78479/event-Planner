import React from "react";
import UseAddProduct from "../../customHooks/sellPropertyHook";

const sellProperty = () => {
    const { title,
         location,
         description,
         date,
         time,
         image,
        imageUrl, 
        handleTitleChange, 
        handleSubmit,
        handleDescriptionChange,
        handleDateChange,
         handleTimeChange,
        handleImageChange,
        handleLocationChange
    
        } = UseAddProduct();
   
    return (
        <div id="add-event">
            <h1>Add your Event
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Title</label>
                    <input type="text" onChange={handleTitleChange} value={title} placeholder="Enter Title..." className="form-control" id="formGroupExampleInput" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Location</label>
                    <input type="text" onChange={handleLocationChange} value={location} placeholder="Enter Location..." className="form-control" id="formGroupExampleInput2" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Date</label>
                    <input type="text" onChange={handleDateChange} value={date} placeholder="Enter Date..." className="form-control" id="formGroupExampleInput2" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Time</label>
                    <input type="text" onChange={handleTimeChange} value={time} placeholder="Enter Time..." className="form-control" id="formGroupExampleInput2" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput3">Description</label>
                    <input type="text" onChange={handleDescriptionChange} value={description} placeholder="Enter description..." className="form-control" id="formGroupExampleInput2" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput4">Pick Image</label>
                    <input type="file" onChange={handleImageChange}  className="form-control" id="formGroupExampleInput4" />
                    {imageUrl && <img src={imageUrl} alt="Preview" style={{ maxWidth: "100px" }} />}
                </div><br /><br />
                <div>
                    <button  >Send</button>
                </div>
            </form>
        </div>
    )
}
export default sellProperty