const yup = require("yup");

const informationsGeneralesMandataireSchema = yup.object().shape({
  benevole: yup.boolean().required(),
  anciennete: yup.string().required(),
  estimation_etp: yup.string().required(),
  secretaire_specialise_etp: yup.string(),
  local_professionnel: yup.string().required()
});

const informationsAgrementsMandataireSchema = yup.object().shape({
  annee_agrement: yup
    .number()
    .min(1900)
    .required(),
  nb_departements: yup
    .number()
    .required()
    .positive()
    .integer()
});

const informationsFormationMandataireSchema = yup.object().shape({
  cnc_mjpm_annee_obtention: yup
    .number()
    .required()
    .positive()
    .integer(),
  cnc_mjpm_heure_formation: yup
    .number()
    .required()
    .positive()
    .integer(),
  cnc_maj_annee_obtention: yup
    .number()
    .required()
    .positive()
    .integer(),
  cnc_dpf_annee_obtention: yup
    .number()
    .required()
    .positive()
    .integer(),
  niveau_qualification: yup
    .number()
    .required()
    .min(1)
    .max(5)
    .integer(),
  niveau_qualification_secretaire_spe: yup
    .number()
    .required()
    .min(1)
    .max(5)
    .integer()
});

// TODO
const activiteSchema = yup.object({});

// TODO
const prestationsSocialesSchema = yup.object({});

// TODO
const formationsSchema = yup.object({});

// TODO
const populationsSchema = yup.object({});

module.exports = {
  informationsGeneralesMandataireSchema,
  informationsAgrementsMandataireSchema,
  informationsFormationMandataireSchema,
  activiteSchema,
  prestationsSocialesSchema,
  formationsSchema,
  populationsSchema
};
