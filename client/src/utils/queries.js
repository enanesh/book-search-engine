import { gql } from '@apollo/client';


export const GET_ME = gql`
  query me {
  me {
    _id
    bookCount
    email
    password
    savedBooks {
      title
      link
      forSale
      bookId
      authors
    }
  }
}
`;