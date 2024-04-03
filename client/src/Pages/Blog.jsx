import { useEffect, useState } from "react";
import Bloge from "../Components/Bloge";
import { useContext } from "react";
import { Context } from "../Context";

const Blog = () => {
  const { token, settoken } = useContext(Context);
  const [isverfy, setisverfy] = useState(false);
  useEffect(() => {
   if (
    token ){
setisverfy(true)
    }
  },[token, settoken])

  let blog = [
    {
      title: "Blog 1",
      body: "This is blog 1",
      imgurl: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      navgat: "/blog1",
      createdat: "10-10-2022"

    },
    

  ]
  return(
<div>

  {isverfy&& blog.map((bloge  ) => (
    <Bloge key={bloge.index}
      title={bloge.title}
      body={bloge.body}
      imgurl={bloge.imgurl}
      navgat={bloge.navgat}
      createdat={bloge.createdat}
    />
  ))}
</div>

  )
};

export default Blog;
