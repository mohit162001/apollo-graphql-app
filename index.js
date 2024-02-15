const { ApolloServer, gql } = require("apollo-server");

const { products, categories, reviews } = require("./data");
const { v1: uuid } = require("uuid");

const typeDefs = gql`
  type Query {
    hello: String!
    products(filter: ProductFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
  }

  type Product {
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

  type Category {
    id: ID!
    type: String!
    products: [Product!]
  }

  type Review {
    id: ID!
    name: String!
    rating: Int!
    comment: String!
    date: String!
    productId: String!
  }

  input ProductFilter {
    isAvailable: Boolean
    byRating: Int
  }

#   mutation schemas
  input AddCategoryInput {
    type: String!
  }

  input AddProductInput {
    name: String!
    price: Float!
    description: String!
    quantity: Int!
    image: String!
    isAvailable: Boolean!
    categoryID: String!
  }

  input AddReviewInput {
    comment: String!
    name: String!
    date: String!
    rating: Int!
    productId: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    products: (parent, args, context) => {
      let filteredProducts = products;
      const { filter } = args;
      if (filter) {
        if (filter.isAvailable === true) {
          filteredProducts = filteredProducts.filter(
            (item) => item.isAvailable
          );
        } else if (filter.isAvailable === false) {
          filteredProducts = filteredProducts.filter(
            (item) => !item.isAvailable
          );
        }
      }
      return filteredProducts;
    },
    product: (parent, args, context) => {
      return products.find((item) => item.id === args.id);
    },
    categories: () => categories,
    category: (parent, args, context) => {
      return categories.find((item) => item.id === args.id);
    },
  },
  ///////////////////////mutaton////////////////////////////
  Mutation: {
    addCategory: (parent, args, context) => {
      const { type } = args.input;
      const newCategory = {
        id: uuid(),
        type,
      };
      categories.push(newCategory);
      return newCategory;
    },
    addProduct(parent, args, context) {
      const {
        name,
        description,
        price,
        quantity,
        image,
        isAvailable,
        categoryID,
      } = args.input;
      const newProduct = {
        id: uuid(),
        name,
        description,
        price,
        quantity,
        image,
        isAvailable,
        categoryID,
      };

      products.push(newProduct);
      return newProduct;
    },
    addReview: (parent, args, context) => {
      const { name, comment, date, rating, productId } = args.input;
      const newReview = {id:uuid(), name, comment, date, rating, productId };
      reviews.push(newReview);
      return newReview;
    },
  },
  Product: {
    category: (parent, args, context) => {
      const categoryId = parent.categoryID;
      return categories.find((item) => categoryId === item.id);
    },
    reviews: (parent, args, context) => {
      const productId = parent.id;
      return reviews.filter((item) => item.productId === productId);
    },
  },
  Category: {
    products: (parent, args, context) => {
      const { id } = parent;
      console.log(parent);
      return products.filter((item) => id === item.categoryID);
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log("server is running at " + url));
