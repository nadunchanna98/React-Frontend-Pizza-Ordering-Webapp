import React , { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../App.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AWS from 'aws-sdk';


function AddItem() {

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({

        itemName: Yup.string().required('Name is required'),
        itemDescription: Yup.string().required('Description is required'),
        itemPrice: Yup.number().required('Price is required'),
        itemImage: Yup.string().required('Image is required'),

    });

    const formik = useFormik({

        initialValues: {
            itemName: '',
            itemDescription: '',
            itemPrice: '',
            itemImage: null,
            itemType: ''
        },
        validationSchema,


        onSubmit: async (data) => {

            const s3 = new AWS.S3({
                accessKeyId: 'AKIAX7UBDMLVGJPU3KO6',
                secretAccessKey: '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',
                region: 'ap-south-1'
            });

            const file = data.itemImage;
            const fileName = file.name;
            const fileType = file.type;

            const params = {
                Bucket: 'pizza-web-app-ganc1218',
                Key: fileName,
                Body: file,
                ContentType: fileType
            };

            s3.upload(params, (err, data1) => {
                if (err) {
                    console.log("error : ",err);
                    return;
                }
                console.log(`File uploaded successfully. ${data1.Location}`);


            const newData = {
                itemName: data.itemName,
                itemDescription: data.itemDescription,
                itemPrice: data.itemPrice,
                itemImage: data1.Location,
                itemType: data.itemType

            }


             axios.post("http://localhost:8080/item,", newData).then((response) => {
                console.log("Item added successfully")
                // navigate("/", { state: { email: newData.email } });
                alert("Item added successfully ")
                formik.handleReset();

            }).catch((error) => {
                console.log("Adding Error ")
            });
        });
    },
});

const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
            formik.setFieldValue('itemImage', file);
        } else {
            setPreviewImage(null);
            formik.setFieldValue('itemImage', null);
        }
    };



    return (
        <div className="Registration-n">

            <form onSubmit={formik.handleSubmit}>

                <div className="header-wraper-n">

                    <h1 className='Topic-n' >Add new Item</h1>

                    {/* //itemType */}
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <label htmlFor="itemType">Pizza or Appetizers & Others</label>

                        <select name="itemType" placeholder='Select Item Type' className="form-control" onChange={formik.handleChange} value={formik.values.itemType}>
                            <option value="">Select Item Type</option>
                            <option value="pizza">Pizza</option>
                            <option value="other">Appetizers & Others</option>
                        </select>

                        <div div className="invalid-feedback">
                            {formik.errors.itemType && formik.touched.itemType ? formik.errors.itemType : null}
                        </div>
                    </div>

                    {/* //itemName */} 
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <label htmlFor="itemName">Item Name</label>
                        <input
                            name="itemName"
                            type="text"
                            placeholder=" Bbq Chicken Pizza"

                            className={
                                'form-control' +
                                (formik.errors.itemName && formik.touched.itemName
                                    ? ' is-invalid'
                                    : '')
                            }
                            onChange={formik.handleChange}
                            value={formik.values.itemName}
                        />
                        <div className="invalid-feedback">
                            {formik.errors.itemName && formik.touched.itemName
                                ? formik.errors.itemName
                                : null}
                        </div>
                    </div>

                    {/* //item Description */}
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <label htmlFor="itemDescription">Item Description</label>
                        <input
                            name="itemDescription"
                            type="text"
                            placeholder="Leonardo DiCaprio"

                            className={
                                'form-control' +
                                (formik.errors.itemDescription && formik.touched.itemDescription
                                    ? ' is-invalid'
                                    : '')
                            }
                            onChange={formik.handleChange}
                            value={formik.values.itemDescription}
                        />
                        <div className="invalid-feedback">
                            {formik.errors.itemDescription && formik.touched.itemDescription
                                ? formik.errors.itemDescription
                                : null}
                        </div>
                    </div>



                    {/* //item Price */}
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <label htmlFor="itemPrice"> Item Price </label>
                        <input
                            name="itemPrice"
                            type="text"
                            placeholder="Rs. 1000"
                            className={
                                'form-control' +
                                (formik.errors.itemPrice && formik.touched.itemPrice
                                    ? ' is-invalid'
                                    : '')
                            }
                            onChange={formik.handleChange}
                            value={formik.values.itemPrice}
                        />
                        <div className="invalid-feedback">
                            {formik.errors.itemPrice && formik.touched.itemPrice
                                ? formik.errors.itemPrice
                                : null}
                        </div>
                    </div>


                    {/* //Image */}
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <label htmlFor="itemImage"> Image </label>
                        <input
                            name="itemImage"
                            type="file"
                            accept="image/*"
                            className={
                                'form-control' +
                                (formik.errors.itemImage && formik.touched.itemImage
                                    ? ' is-invalid'
                                    : '')
                            }
                            onChange={handleImageChange}
                        />
                        {previewImage && (
                            <img src={previewImage} alt="Preview" className="mt-2" style={{ maxHeight: "200px" }} />
                        )}
                        <div className="invalid-feedback">
                            {formik.errors.itemImage && formik.touched.itemImage
                                ? formik.errors.itemImage
                                : null}
                        </div>
                    </div>



                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                        <button type="submit" className="btn btn-outline-primary mx-2">
                            Register
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-warning float-right mx-2"
                            onClick={formik.handleReset}
                        >
                            Reset
                        </button>

                    </div>

                </div>

            </form>
        </div>
    );
}

export default AddItem;

