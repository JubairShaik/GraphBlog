import { request, gql } from "graphql-request";
 

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

// const graphqlAPI = "https://api-ap-south-1.hygraph.com/v2/clk8fij5r1g6q01ur3hbi2pp7/master"

export const data = await fetch(graphqlAPI, {
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
      
      // const result = await request(graphAPI ,query)
      // return  result?.postsConnection?.edges 

  }),
  next: { revalidate: 10 },
}).then((res) => res.json());





export const { getPostDetails  } = await fetch( graphqlAPI , {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
    query getPostDetails {
      postsConnection {
       edges {
         node {
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





export const {  relatedPosts  } = await fetch( graphqlAPI , {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
    query Authors {
      posts(orderBy: publishedAt_DESC, first: 3, stage: PUBLISHED) {

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




// export const { getSimilarPosts  } = await fetch( graphqlAPI , {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     query: `
//     query gerPostDetails(){
//       posts(
//         orderBy:createAt_ASC
//         last:3
//       ){
//         title
//         freaturedImage{
//           url
//         }
//         createdAt
//         slug
//       }
//     }
  
// `,
//   }),
//   next: { revalidate: 10 },
// }).then((res) => res.json());







// postsConnection {
//   edges {
//     node {
      
//       author {
      
//         posts(orderBy: publishedAt_ASC, last: 3) {
//           id
//           title
//           featuredImage {
//             url
//           }
//           createdAt
//           slug
//         }
//       }
//     }
//   }
// }









  // query MyQuery {
    //     postsConnection {
    //       edges {
    //         node {
    //           author {
    //             bio
    //             name
    //             id
    //             photo {
    //               url
    //             }
    //           }
    //           createdAt
    //           slug
    //           title
    //           excerpt
    //           featuredImage {
    //             url
    //           }
    //           categories {
    //             name
    //             slug
    //           }
    //         }
    //       }
    //     }
    // } 




// const { data } = await fetch( API, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     query: `
//     query MyQuery {
//         postsConnection {
//           edges {
//             node {
//               author {
//                 bio
//                 name
//                 id
//                 photo {
//                   url
//                 }
//               }
//               createdAt
//               slug
//               title
//               excerpt
//               featuredImage {
//                 url
//               }
//               categories {
//                 name
//                 slug
//               }
//             }
//           }
//         }
//     } 
// `,
//   }),
//   next: { revalidate: 10 },
// }).then((res) => res.json());








// Lets Create a GraphQL Function

// export const getPosts = async () => {
    
//   const query = gql`
//     query MyQuery {
//       postsConnection {
//         edges {
//           node {
//             author {
//               bio
//               name
//               id
//               photo {
//                 url
//               }
//             }
//             createdAt
//             slug
//             title
//             excerpt
//             featuredImage {
//               url
//             }
//             categories {
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `;

// //   const result = await request (  "https://api-ap-south-1.hygraph.com/v2/clk8fij5r1g6q01ur3hbi2pp7/master" ,query )

//   const result = await request ( graphqlAPI ,query )

//   return result.postsConnection.edges ;

// };







// This Data is Generated with the help of GraphCMS

// "data": {
//     "postsConnection": {
//       "edges": [
//         {
//           "node": {
//             "author": {
//               "bio": "i Have this Car",
//               "name": "Jubair Ahmed",
//               "id": "clk8g88x40vef0bpkvyxulzaz",
//               "photo": {
//                 "url": "https://media.graphassets.com/O2OGVSAbQUuwcKsNgC1N"
//               }
//             },
//             "createdAt": "2023-07-18T15:33:26.988411+00:00",
//             "slug": "cars",
//             "title": "this is a cars Website",
//             "excerpt": "this is The Website Build Using TailwincCSS and NEXTJS\n",
//             "featuredImage": {
//               "url": "https://media.graphassets.com/VDYU3mCSNOMZuHsAHhpq"
//             },
//             "categories": [
//               {
//                 "name": "Cars",
//                 "slug": "cars"
//               }
//             ]
//           }
//         }
//       ]
//     }
//   }

// query MyQuery {
//     postsConnection {
//       edges {
//         node {
//           author {
//             bio
//             name
//             id
//             photo {
//               url
//             }
//           }
//           createdAt
//           slug
//           title
//           excerpt
//           featuredImage {
//             url
//           }
//           categories {
//             name
//             slug
//           }
//         }
//       }
//     }
//   }
