var XLSX = require("xlsx");
var {
  enqueteExcelParserAgrementsPopulations
} = require("../common/excel-parser");

var HttpError = require("../../../../utils/error/HttpError");
const logger = require("../../../../utils/logger");

const parse = async ({ content }) => {
  const workbook = XLSX.read(content, {
    cellDates: true,
    dateNF: "dd/mm/yyyy",
    locale: "fr-FR",
    type: "base64",
    raw: false
  });

  // vérification du nom des onglets
  checkRequiredTabs(workbook, [
    "page d'accueil",
    "modalites d'exercice",
    "Personnel et formation ", // espace final dans le nom de l'onglet
    // "activité 2018 et flux", // TODO réactiver ce check quand on aura fini les tests, car on utilise des jeux de données de l'an dernier avec l'onglet "activité 2017 et flux"
    "Populations ", // espace final dans le nom de l'onglet
    "Revenus- prestations sociales ", // espace final dans le nom de l'onglet
    "Financement",
    "Données à exporter"
  ]);

  const res = {
    populations: enqueteExcelParserAgrementsPopulations.parse(
      workbook.Sheets["Populations "]
    )
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

const preposeEnqueteExcelParser = {
  parse
};

module.exports = preposeEnqueteExcelParser;
