import gql from "graphql-tag";

export const DEPARTEMENTS = gql`
  {
    departements {
      id
      code
      nom
    }
  }
`;

export const SERVICE = gql`
  query service($id: Int) {
    services(where: { id: { _eq: $id } }) {
      id
      mesures_awaiting
      mesures_in_progress
      service_antennes {
        id
        mesures_awaiting
        mesures_in_progress
      }
    }
  }
`;
