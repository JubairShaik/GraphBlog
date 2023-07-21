import React from "react"; 
import { Postcard,PostWidget,Categories } from '/components';


// import { data , getPostDetails } from "/services";


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT


// Demo Array is The Best 


export default async function page() {



  let blog = data?.postsConnection?.edges


  let categories = cats?.postsConnection?.edges 

 


 
  return (
    <div className="container mx-auto px-10 mb-8">
      

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
            
        
       {blog.map((post, index) => (
          <Postcard  post={post.node}  />
        ))}    

        {/* {console.log(posts2)} */}


        </div>
         <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">

          {/* {categories.map((post, index) => (


          <PostWidget  post={post.node}  />

        ))}     */}

            
            {console.log(categories)}

 
             <PostWidget/>


            <Categories />

          </div>
        </div>
      </div>
    </div>
  );
};


 







  
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





  

const { relateddata } = await fetch( graphqlAPI , {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
    query Authors {
      posts {
        title
        updatedAt
        slug
        featuredImage {
          url
          createdBy {
            documentInStages {
              name
              picture
            }
          }
        }
      }
    }
`,
  }),
  next: { revalidate: 10 },
}).then((res) => res.json());






const { cats } = await fetch( graphqlAPI , {
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
            categories {
              id
              name
            }
          }
        }
      }
    }    
`,
  }),
  next: { revalidate: 10 },
}).then((res) => res.json());


