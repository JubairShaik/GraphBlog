import React from 'react'


// import { data } from "/services";
import PostDetail from '/components/PostDetail';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

const page = ({posts}) => {

  let blog = data?.postsConnection?.edges;


  return(
     <>
     <div>
      {/* <h2>
        {}
      </h2> */}

      {console.log(blog)}
      
        {blog.map((post, index) => (
          <PostDetail  post={post.node}/>
        ))}    

     </div>
     </>
  )

  
}

export default page



  
const { data } = await fetch( graphqlAPI , {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
    } 
`,
  }),
  next: { revalidate: 10 },
}).then((res) => res.json());



