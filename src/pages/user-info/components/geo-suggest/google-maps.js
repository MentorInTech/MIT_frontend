// @flow

const GoogleMaps = {
  /**
   * Predicts city name based on input.
   *
   * @param value The value to search for
   * @param limit Limit number of results
   */
  getCityPrediction(value: string, limit: number = 5): Promise<Object> {
    const request = { input: value, types: ['(cities)'] };
    const { AutocompleteService, PlacesServiceStatus } = window.google.maps.places;

    return new Promise((resolve, reject) => {
      new AutocompleteService().getPlacePredictions(
          request,
          (predictions, status) => {
            if (status !== PlacesServiceStatus.OK) {
              reject(new Error(`Cannot access Google Maps Places service: ${status}`));
            } else {
              const matchData = predictions.slice(0, limit)
                  .map(prediction => prediction.structured_formatting)
                  .map(matchedCities => ({
                    city: matchedCities.main_text,
                    secondary: matchedCities.secondary_text
                  }))
                  .map(matched => ({ label: `${matched.city}, ${matched.secondary}` }));

              resolve(matchData);
            }
          }
      );
    });
  }
};

export default GoogleMaps;
