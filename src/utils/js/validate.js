const regex = {
  email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
};
// Takes input text and a type and returns true if it matches, false otherwise.
// Valid input types:
//  - "email"
export default (type = "", input = "") => (type ? regex[type].test(input) : false);
