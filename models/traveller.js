const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

// Cinema.prototype.filmTitles = function () {
//   return this.films.map((film) => {
//     return film.title;
//   });
// };

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

// Cinema.prototype.filmsByGenre = function (genre) {
//   return this.films.filter((film) => {
//     return film.genre === genre;
//   });
// };

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })

};
//
// Cinema.prototype.areAllFilmsOfMinLength = function (length) {
//   return this.films.every((film) => {
//     return film.length >= length;
//   });
// };

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce(function(totalDistance, journey) {
    return totalDistance + journey.distance;
  },0)
};

// Cinema.prototype.totalRunningTime = function () {
//   return this.films.reduce((total, film) => {
//     return total += film.length;
//   }, 0);
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.find(function(transport) {
    return [transport];
  })
};

// var found = array1.find(function(element) {
//   return element > 10;
// });

module.exports = Traveller;
