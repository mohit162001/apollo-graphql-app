const {ApolloServer,gql} = require("apollo-server")

const {products,categories,reviews} = require("./data")

const typeDefs = gql`
    type Query{
        hello: String!
        products(filter: ProductFilter): [Product!]!
        product(id: ID!): Product
        categories: [Category]!
        category(id: ID!): Category
    }

    type Product{
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        isAvailable: Boolean!
        categoryID: String!
        category: Category
        reviewId: String!
        reviews: [Review!]
    }

    type Category{
            id: ID!
            type: String!
            products: [Product!]
    }

    type Review{
        id:ID!
        name: String!
        rating: Int!
        comment: String!
        date: String!
        productId: String!
    }

    input ProductFilter{
        isAvailable: Boolean
        byRating:Int
    }
`

const resolvers = {
    Query:{
        hello:()=>{
            return "Hello World" 
        },
        products:(parent,args,context)=>{
            let filteredProducts = products
            const {filter} = args
            if(filter){
                if(filter.isAvailable === true){
                    filteredProducts = filteredProducts.filter((item)=>(item.isAvailable))
                }else if(filter.isAvailable === false){
                    filteredProducts = filteredProducts.filter((item)=>(!item.isAvailable))
                }
            }
            return filteredProducts
        },
        product:(parent,args,context)=>{
            return products.find((item)=>( item.id === args.id ))
        },
        categories:()=>(categories),
        category:(parent,args,context)=>{
            return categories.find((item)=>(item.id === args.id))
        }
    },
    Product:{
        category:(parent,args,context)=>{
            const categoryId = parent.categoryID
            return categories.find((item)=>(categoryId === item.id))
        },
        reviews:(parent,args,context)=>{
            const productId = parent.id
            return reviews.filter((item)=>(item.productId===productId));
        }
    },
    Category:{
        products:(parent,args,context)=>{
            const {id} = parent
            console.log(parent)
            return products.filter((item)=>(id === item.categoryID))
        }
    } 
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({url})=>(
    console.log('server is running at '+url)
)) 