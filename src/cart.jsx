import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";
// import { useEffect } from "react";


  const Cart =({openModal, setOpen}) => {
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state)=> state.cart.totalPrice);

    // useEffect(() => {
    //   window.localStorage.setItem('arrow',JSON.stringify(cart))
    // })

    const dispatch = useDispatch();
  return (
    <div>
    {cart.length > 0 ? (
      <Fragment> 
      <Dialog
      className="border-0 outline-0"
      open={openModal}
      handler={() => setOpen(false)}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 }
      }}
    >
      <DialogHeader>Shopping Bag</DialogHeader>
      <DialogBody 
       divider
      className="flex flex-col justify-center items-start">

      {cart.map((item, index) => {
      return (
      <div key={index}>
        <div className="grid grid-cols-2 py-4">
          <div>
            <img 
      className="h-[125px] rounded-md " 
      src={item.img} 
      alt={item.name}>
      </img>

      <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>

                        <div className="max-w-xs">
                          <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div>
                        </div>

                        <div>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Amount: <p className="ml-2">{item.amount}</p>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Single Item Price:{" "}
                          <p className="ml-2">{item.price}$</p>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Total Item Prices:{" "}
                          <p className="ml-2">{item.totalPrice}$</p>
                        </p>

                        <Button
                        className="redbutton"
                        onClick={() => dispatch(removeFromCart(item))}
                        size="sm"
                        color="red"
                        ripple={true}
                        variant="filled"
                      >
                        Remove
                      </Button>
                        </div>
                    </div>
      </div> 

  );
})}
      </DialogBody>
      <DialogFooter className="flex justify-start items-center">
      <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
        Total Price of All Products:{" "}
        <p className="ml-2">{totalPrice}$</p>
      </p>
    </DialogFooter>
    </Dialog>
  </Fragment>

  ) : (

  <Fragment> <Dialog
  open={openModal}
  handler={() => setOpen(false)}
  animate={{
    mount: { scale: 1, y: 0 },
    unmount: { scale: 0.9, y: -100 },
  }}
>
  <DialogHeader>Your bag is empty.</DialogHeader>
  <DialogBody divider>
  Add some products
  </DialogBody>
{/* <DialogFooter></DialogFooter>*/}
</Dialog>
</Fragment> 
  )}
  </div>
  );
};

export default Cart;