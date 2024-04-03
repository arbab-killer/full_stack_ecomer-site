import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
const Wishlist = () => {
  const { token, settoken } = useContext(Context);
  const [isverfy, setisverfy] = useState(false);
  useEffect(() => {
   if (
    token ){
setisverfy(true)
    }
  },[token, settoken])

  return (
    <>
    {
      isverfy && <div>Wishlist</div>
    }
    </>
   
  )
}

export default Wishlist