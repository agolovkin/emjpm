var XLSX = require("xlsx");
var parserAgrementsFormations = require("./enqueteExcelParserAgrementsFormations");
var parserInformationsMandataire = require("./enqueteExcelParserInformationsMandataire");
var HttpError = require("../../../../utils/error/HttpError");
const logger = require("../../../../utils/logger");

const parse = async ({ base64str }) => {
  const workbook = XLSX.read(base64str, {
    cellDates: true,
    dateNF: "dd/mm/yyyy",
    locale: "fr-FR",
    type: "base64",
    raw: false
  });

  // vérification du nom des onglets
  checkRequiredTabs(workbook, [
    "page d'accueil",
    "info mandataire-exerc. activité",
    // "activité 2018 et flux", // TODO réactiver ce check quand on aura fini les tests, car on utilise des jeux de données de l'an dernier avec l'onglet "activité 2017 et flux"
    "Populations ", // espace final dans le nom de l'onglet
    "Prestations sociales ", // espace final dans le nom de l'onglet
    "Données à exporter"
  ]);

  const worksheet = workbook.Sheets["Données à exporter"];

  const res = {
    informationsMandataire: parserInformationsMandataire.parse(worksheet),
    agrementsFormations: parserAgrementsFormations.parse(worksheet)
  };

  logger.info(
    "[IMPORT ENQUETE] parsed data:",
    JSON.stringify(res, undefined, 2)
  );
  return res;
};

function checkRequiredTabs(workbook, tabNames) {
  tabNames.forEach(tabName => {
    if (!workbook.Sheets[tabName]) {
      logger.warn(
        `[IMPORT ENQUETE] Onglet "${tabName}" manquant - onglets présents: ${Object.keys(
          workbook.Sheets
        ).map(x => `"${x}"`)}`
      );

      throw new HttpError(422, `Onglet "${tabName}" manquant`);
    }
  });
}

const enqueteExcelParser = {
  parse
};

module.exports = enqueteExcelParser;