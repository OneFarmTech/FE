import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useOutletContext } from "react-router-dom";
import Swal from 'sweetalert2';
import QueryClient from "../js/QueryClient";
import  '../../public/sweetcheck.png'

const ProductUpdate = () => {
  const { id } = useParams();
  const productImages = useRef(null);
  const [classSelected, setClassSelected] = useState(false); 
  const [productDetails, setDetails] = useState({
    name: "",
    cost: "",
    images: [],
    desc: "",
    class: "",
    costLabel: "",
  });
  const [changeHeading, resetHeading] = useOutletContext();
  const navigate = useNavigate();

  
  useEffect(() => {
    changeHeading("Update Product");
    
    let authToken = sessionStorage.getItem('token');
    const client = new QueryClient(authToken);

    client.get(`products/${id}/find`)
    .then((data) => {
      if (Array.isArray(data)) {
        // Assuming the response is an array
        setDetails(data[0]);
      } else {
        setDetails(data);
      }
    })
      .catch((error) => {
        console.error('Error fetching product data:', error);
  
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There was an error fetching the product details. Please try again.',
          confirmButtonText: 'Retry',
          showCancelButton: true,
          cancelButtonText: 'Go Back',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate('/dashboard/marketplace');
          }
        });
      });

    return () => {
      resetHeading();
    };
  }, [changeHeading, resetHeading, id, navigate]);

 

  const handleChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    setDetails((state) => ({ ...state, [newKey]: val }));

    if (newKey === "class") {
      // Dynamically update the cost label based on the selected product class
      const costLabel = val === "Fruit" ? "per kg" : "per Bag";
      setDetails((state) => ({ ...state, costLabel }));
      setClassSelected(true);
    }
  };

  const clickRedirect = (e) => {
    e.preventDefault();
    productImages.current?.click();
  };

  const changeImages = (e) => {
    const files = e.currentTarget.files;

    if (files) {
      const imagesArray = Array.from(files);

      const imagesPromiseArray = imagesArray.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();

          reader.onload = (event) => {
            const image = new Image();
            image.src = reader.result;

            image.onload = () => {
              const canvas = document.createElement("canvas");
              const maxImageSize = 300;

              let width = image.width;
              let height = image.height;

              if (width > maxImageSize || height > maxImageSize) {
                if (width > height) {
                  height = (maxImageSize * height) / width;
                  width = maxImageSize;
                } else {
                  width = (maxImageSize * width) / height;
                  height = maxImageSize;
                }
              }
              canvas.width = width;
              canvas.height = height;

              const ctx = canvas.getContext("2d");
              ctx.drawImage(image, 0, 0, width, height);

              const resizedBase64 = canvas.toDataURL("image/jpeg");
              resolve(resizedBase64);
            };
          };

          reader.readAsDataURL(file);
        });
      });

      Promise.all(imagesPromiseArray).then((resizedImages) => {
        setDetails((state) => ({ ...state, images: resizedImages }));
      });
    }
  };
console.log(productDetails);

  const handleProductUpdate = async (e) => {
    e.preventDefault();
    const { name, id } = productDetails;
    
    try {
      let authToken = sessionStorage.getItem("token");
      const client = new QueryClient(authToken);
      const productData = {
        name: productDetails.name,
        cost: productDetails.cost,
        images: productDetails.images,
        description: productDetails.description,
        class:productDetails.class,
        costLabel:productDetails.costLabel,
      }

     let response = await client.post(`/products/${id}/update`, productData);
     console.log(response);
  
     
      Swal.fire({
        title: 'GREAT',
        text: `Product "${name}" has been updated successfully!`,
        imageUrl: '/public/sweetcheck.png',
        imageHeight: 200,
        imageWidth: 200,
        imageAlt: 'success Icon',
        showCloseButton: false,
        allowOutsideClick: false,
        focusConfirm: true,
        confirmButtonText: 'Okay',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/dashboard/marketplace');
        }
      });
    } catch (error) {
      console.error('Error updating product:', error);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was an error updating the product. Please try again.',
        confirmButtonText: 'Retry',
        showCancelButton: true,
        cancelButtonText: 'Go Back',

      }).then((result) => {
  if (result.isConfirmed) {
    
    console.log('Retry button clicked');
  } else if (result.dismiss === Swal.DismissReason.cancel) {
   
    navigate('/dashboard/marketplace');
  }
});
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleProductUpdate}
        className="flex flex-col gap-16 bg-transparent px-[4%] py-4 w-full h-full"
      >

<div className="flex flex-col gap-5 lg:gap-9 lg:flex-row w-full">
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="name" className="font-bold text-lg">
              Name of Product
            </label>
            <div className="bg-white p-4 rounded-md shadow-md flex w-full">
              <input
                className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full"
                type="text"
                required
                id="name"
                name="name"
                placeholder="Enter Name of Product"
                value={productDetails.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
          <label htmlFor="class" className="font-bold text-lg">
            Product Class
          </label>
          <div className="bg-white p-4 rounded-md shadow-md flex w-full">
            <select
              className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full"
              required
              id="class"
              name="class"
              value={productDetails.class}
              onChange={handleChange}
            >
              <option value="" disabled>Select Product Class</option>
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
        <label htmlFor="cost" className="font-bold text-lg">
       Cost {productDetails.costLabel}
        </label>
        <div className="bg-white p-4 rounded-md shadow-md flex w-full">
          <input
            className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full"
            type="text"
            required
            id="cost"
            name="cost"
            placeholder={`Enter Cost ${productDetails.costLabel}`} 
            value={productDetails.cost}
            onChange={handleChange}
            disabled={!productDetails.class}
            />
          </div>
          {!classSelected && (
              <p className="text-red-500 mt-2">
                Please select a product class before filling the cost field.
              </p>
            )}
      </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="images" className="font-bold text-lg">
            Product Images
          </label>
          <div className="bg-white p-10 rounded-md shadow-md flex flex-col items-center gap-5 w-full">
        <div className="flex gap-5">
  {productDetails.images &&
    productDetails.images.map((imageObj, index) => (
      <figure key={index}>
        <img
          src={imageObj.image ? imageObj.image : ''}
          alt={`Product Image ${index + 1}`}
        />
      </figure>
    ))}
</div>
            <input
              ref={productImages}
              type="file"
              hidden
              accept="image/*"
              multiple
              onChange={changeImages}
            />
            <button
              onClick={clickRedirect}
              className="bg-white text-green-30 border border-green-30 px-20 py-2 font-bold text-sm"
            >
              Update product images
            </button>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="description" className="font-bold text-lg">
              Product Description
            </label>
            <div className="bg-white p-4 rounded-md shadow-md flex w-full">
              <textarea
                name="description"
                id="description"
                className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full h-60"
                placeholder="What is your product about?"
                value={productDetails.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit"
          className="bg-green-30 px-20 md:px-32 py-5 self-center font-bold text-xl text-white disabled:bg-black-50"
          disabled={
            productDetails.name == "" ||
            productDetails.class == "" ||
            productDetails.cost == "" ||
            productDetails.description == "" ||
            productDetails.images == []
          }
        >
          Update Product
        </button>
      </form>
    </>
  );
};

export default ProductUpdate;
