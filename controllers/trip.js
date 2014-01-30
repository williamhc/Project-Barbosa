/**
 * GET /trips/create
 * New trip page.
 */

exports.create = function(req, res) {
  res.render('trip/create', {
    title: 'Create new Trip'
  });
};
