import gql from "graphql-tag";

export const ADD_MESURE = gql`
  mutation addMesure(
    $date_ouverture: date!
    $department_id: Int
    $type: String!
    $residence: String!
    $code_postal: String
    $ville: String
    $civilite: String!
    $annee: String!
    $numero_dossier: String!
    $numero_rg: String!
    $ti_id: Int!
    $mandataireId: Int!
    $latitude: Float
    $longitude: Float
    $pays: String!
    $cabinet: String
  ) {
    insert_mesures(
      objects: {
        department_id: $department_id
        date_ouverture: $date_ouverture
        type: $type
        ti_id: $ti_id
        residence: $residence
        code_postal: $code_postal
        ville: $ville
        civilite: $civilite
        annee: $annee
        numero_dossier: $numero_dossier
        numero_rg: $numero_rg
        status: "Mesure en cours"
        mandataire_id: $mandataireId
        latitude: $latitude
        longitude: $longitude
        pays: $pays
        cabinet: $cabinet
      }
    ) {
      returning {
        id
        annee
        antenne_id
        cabinet
        civilite
        code_postal
        created_at
        date_ouverture
        department_id
        etablissement
        etablissement_id
        extinction
        is_urgent
        judgment_date
        mandataire_id
        numero_dossier
        numero_rg
        reason_extinction
        residence
        service_id
        status
        ti_id
        type
        ville
        latitude
        longitude
        pays
        cabinet
        departement {
          id
          nom
          region {
            id
            nom
          }
        }
        ti {
          id
          etablissement
        }
      }
    }
  }
`;

export const RECALCULATE_MANDATAIRE_MESURES = gql`
  mutation update_mandataire_mesures($mandataire_id: Int!) {
    recalculateMandataireMesuresCount(mandataireId: $mandataire_id) {
      success
      updatedRows
    }
  }
`;
