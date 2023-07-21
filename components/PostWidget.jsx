import React from 'react';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
 
export default async function PostWidget({post})  {


  // const data = relatedPosts?.posts?.title
  let posts2 = cats?.categories


  return (

    <div className="">


    <div  className= ' flex  bg items-center  gap-4'>

      {/* {console.log(data)} */}
      {/* {console.log(posts2)} */}

      {/* <img src={featuredImage.url} className="align-middle rounded-full h-12 w-12 object-cover"  alt="" /> */}
               
      {/* <img  src={featuredImage.url} alt={title} /> */}
      <div>
       Recent Posts 
        {/* <h2> {post.name}</h2> */}
      {/* <p className="text-blue-100 font-xs">{moment(createdAt).format('MMM DD, YYYY')}</p> */}
      {/* <h2>{title}</h2> */}
      
      </div>
      {/* You can add more elements to display other post details */}
    </div>
    </div>
  );
};

 



const { cats } = await fetch( graphqlAPI , {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
    query MyQuery {
      categories {
        id
        name
      }
    }
`,
  }),
  next: { revalidate: 10 },
}).then((res) => res.json());
 