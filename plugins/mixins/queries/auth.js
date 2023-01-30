import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation (
    $email: String!,
    $username: String!,
    $password1: String!,
    $password2: String!,
    $first_name: String!,
    $last_name: String!
  ) {
  register(
    email: $email,
    username: $username,
    password1: $password1,
    password2: $password2,
    first_name: $first_name,
    last_name: $last_name
  ) {
    success,
    errors
  }
}`

export const VERIFY_ACCOUNT = gql`
  mutation (
    $token: String!
  ) {
  verify_account(
    token: $token
  ) {
    success,
    errors
  }
}`
