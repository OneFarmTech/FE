/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';

const ProductItem = ({ data, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      let token = sessionStorage.getItem("token");
      const axiosInstance = axios.create({
        baseURL: 'https://api.onefarmtech.com/api',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
       await axiosInstance.delete(`/products/${data.id}/delete`);
      

      onDelete(data.id);
  
      Swal.fire({
        title: 'Deleted',
        text: `You have successfully deleted ${data.name} from your products list on One-Farm!`,
        imageUrl: '/src/assets/images/sweetcheck.png',
        imageHeight: 200,
        imageWidth: 200,
        imageAlt: 'success Icon',
        showCloseButton: false,
        allowOutsideClick: false,
        focusConfirm: true,
        confirmButtonText: 'Okay',
      });
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `There was an error Deleting ${data.name} from your product list. Please try again.`,
        confirmButtonText: 'okay',
        showCancelButton: true,
      });
    }finally {
      setIsDeleting(false);
    }
  };
  const confirmDelete = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5baa60',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });
  
    if (result.isConfirmed) {
      handleDelete(); // Call the delete function if the user confirms
    }
  };

  const displayCost = () => {
    // Check the product class to determine the cost display format
    if (data.name === 'Strawberry') {
      return `${Number(data.cost).toLocaleString()}/kg`;
    } else if (data.name === 'Irish Potato') {
      return `${Number(data.cost).toLocaleString()}/bag`;
    } else {
      return `${Number(data.cost).toLocaleString()}/unit`; // Default display if no product class is specified
    }
  };

  return (
    <div className="rounded-md shadow-md p-3 bg-white flex flex-col gap-4 lg:w-72">
    <figure className="w-[90%] lg:w-[68%] h-32 bg-black-15 self-center">
      <img src={data.images[0].image || ''} alt={data.name} loading="lazy"/>

      </figure>
      <div className="pl-6 flex flex-col gap-3">
      <h2>{data.name}</h2>
      
      <h2 className="text-green-30 naira-sign">{displayCost()}</h2>
      {/*<p className="text-black-50 text-sm">{data.description}</p> */}
      </div>
      <button className="bg-green-30 text-white py-3"> <a href={`updateproduct/${data.id}`} >
       Edit Product
       </a></button>
      
      <button className="border border-red-50 text-red-50 py-3" onClick={confirmDelete}>Delete Product</button>
      </div>
  )
};

export default ProductItem;
