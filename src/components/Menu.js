import React from 'react'
import recipes from '../recipes'
import Swal from 'sweetalert2'
export const Menu = () => {
    const handleOrder=(id)=>{
        console.log(id);
        Swal.fire({
            title: 'Do you want to confirm order?',
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your item is being ordered.",
                icon: "success"
              });
            }
          });
    }
  return (
    <div className="menu-container">
        <div className='menu-header'>
            <h2>This Week's Specials!!</h2>
            <button>Online Menu</button>
        </div>
        <div className='cards'>
            {
                recipes.map((recipe)=>(
                    <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>$ {recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn' onClick={()=>handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>

                ))
            }
        </div>
    </div>
  )
}
