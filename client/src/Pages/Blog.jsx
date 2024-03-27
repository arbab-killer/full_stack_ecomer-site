import Bloge from "../Components/Bloge";

const Blog = () => {
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

  {blog.map((bloge  ) => (
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
