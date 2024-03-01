import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductItem = ({ data }) => {


  const handleDelete = async () => {
    try {
      
      const token = sessionStorage.getItem("token");
      await axios.delete(`/api/products/${data.id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
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
      })
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

  return (
    <div className="rounded-md shadow-md p-3 bg-white flex flex-col gap-4 w-80">
      <figure className="w-[60%] h-32 bg-black-15 self-center">
      <img src={data.images[0].image || ''} alt={data.name} />

      </figure>

      <div className="font-bold flex justify-between items-center text-base">
        <h2>{data.name}</h2>
        <h2 className="text-green-30">N{data.cost}</h2>
      </div>

      <p className="text-black-50 text-sm">{data.description}</p> 

      <button className="bg-green-30 text-white py-3"> <a href={`updateproduct/${data.id}`} >
       Edit Product
       </a></button>
      
      <button className="border border-red-50 text-red-50 py-3"onClick={confirmDelete}>Delete Product</button>
      </div>
  )
};

export default ProductItem;
