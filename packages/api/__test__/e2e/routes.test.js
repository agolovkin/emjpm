const { shouldBeProtected } = require("./utils");

const knex = require("@emjpm/api/db/knex");

afterAll(async () => {
  await knex.destroy();
});

const accessChecks = [
  {
    method: "PUT",
    url: "/api/v1/mandataires/1/mesures/1",
    type: ["mandataire", "ti"]
  },
  {
    method: "POST",
    url: "/api/v1/mandataires/1/mesure-reservation",
    type: ["ti"]
  },
  {
    method: "POST",
    url: "/api/v1/mandataires/1/mesures",
    type: ["mandataire", "ti", "service"]
  },
  { method: "DELETE", url: "/api/v1/mandataires/1/commentaires/1", type: "ti" },
  { method: "GET", url: "/api/v1/mandataires/1/commentaires", type: "ti" },
  { method: "POST", url: "/api/v1/mandataires/1/commentaires", type: "ti" },
  {
    method: "POST",
    url: "/api/v1/mandataires/mesures/bulk",
    type: "mandataire"
  },
  {
    method: "GET",
    url: "/api/v1/mandataires/1/mesures",
    type: ["mandataire", "service"]
  },
  {
    method: "GET",
    url: "/api/v1/mandataires/1/mesuresForMaps",
    type: ["mandataire", "service"]
  },
  {
    method: "GET",
    url: "/api/v1/mandataires/1/mesures/attente",
    type: ["mandataire", "service"]
  },
  {
    method: "GET",
    url: "/api/v1/mandataires/1/mesures/Eteinte",
    type: ["mandataire", "service"]
  },
  {
    method: "GET",
    url: "/api/v1/mandataires",
    type: "ti"
  },
  {
    method: "GET",
    url: "/api/v1/mandataires/1",
    type: ["mandataire", "service"]
  },
  {
    method: "PUT",
    url: "/api/v1/mandataires/1",
    type: ["mandataire", "service"]
  },
  {
    method: "POST",
    url: "/api/v1/mandataires/filters",
    type: "ti"
  },
  {
    method: "GET",
    url: "/api/v1/mandataires/services",
    type: "ti"
  },
  {
    method: "GET",
    url: "/api/v1/mandataires/services",
    type: "ti"
  },
  {
    method: "PUT",
    url: "/api/v1/mandataires/1/capacite",
    type: ["mandataire", "service"]
  },
  {
    method: "PUT",
    url: "/api/v1/mandataires/1/mesures-en-attente",
    type: ["mandataire", "ti"]
  }
];

accessChecks.forEach(access =>
  shouldBeProtected(access.method, access.url, { type: access.type })
);