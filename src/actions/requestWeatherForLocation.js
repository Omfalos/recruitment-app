export const WEATHER_FOR_LOCATION_REQUEST = "WEATHER_FOR_LOCATION_REQUEST";
export const WEATHER_FOR_LOCATION_REQUEST_FAILED =
  "WEATHER_FOR_LOCATION_REQUEST_FAILED";
export const WEATHER_FOR_LOCATION_REQUEST_SUCCESS =
  "WEATHER_FOR_LOCATION_REQUEST_SUCCESS";
export const WEATHER_FOR_LOCATION_REQUEST_IN_PROGRESS =
  "WEATHER_FOR_LOCATION_REQUEST_IN_PROGRESS";

export const requestWeatherForLocation = payload => ({
  type: WEATHER_FOR_LOCATION_REQUEST,
  payload: payload
});
