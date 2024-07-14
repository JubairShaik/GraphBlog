import moment from "moment";
import Link from "next/link";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const data = await fetch(graphqlAPI, {
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

              
              author {
                posts(orderBy: publishedAt_ASC, last: 3) {
                  id
                  title
                  featuredImage {
                    url
                  }
                  createdAt
                  slug
                }
              }
              
            }
          }
        }
      } 
      `,
  }),
  next: { revalidate: 10 },
}).then((res) => res.json());
 


import React from "react";

export default async function Postcard({ post }) {
  
  let blog = data?.postsConnection?.edges;

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
        <div className="relative overflow-hidden object-contain h-full  shadow-md pb-50 mb-6">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-conatin absolute  h-full w-full object-cover  shadow-lg 
            rounded-t-lg lg:rounded-lg"
          />
        </div>


        <h1 className="transition duration-700 text-center my-8  text-blue-600 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
 

        <div className="flex items-center justify-center gap-10">
          <div className=" flex items-center ">
            <img
              src={post?.author?.photo?.url}
              className="w-12 h-12 rounded-full  "
              alt="imaage"
            />

            <p className="inline align-middle text-gray-700 ml-2 font-medium  text-[1rem] text-lg">
              {post.author.name}
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <span className="align-middle  text-slate-700 ">
              Published on : {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        
        </div>
        <p className="text-center text-lg text-gray-700 mt-4 font-normal px-4 lg:px-20 mb-8">
          {post.excerpt}
        </p>

        <div className="text-center">
          <Link href={`/post/`+ post?.slug }>
            <span
              className="transition duration-500 ease transform  hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium  rounded-full text-white px-8 py-3 cursor-pointer"
            >
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
