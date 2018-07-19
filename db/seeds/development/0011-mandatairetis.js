exports.seed = function(knex, Promise) {
  return knex("mandataire_tis")
    .del() // Deletes ALL existing entries
    .then(function() {
      // Inserts seed entries one by one in series
      return knex("mandataire_tis").insert({
        ti_id: 4,
        mandataire_id: 1
      });
    })
    .then(function() {
      // Inserts seed entries one by one in series
      return knex("mandataire_tis").insert({
        ti_id: 4,
        mandataire_id: 2
      });
    });
};
