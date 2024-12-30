import { base_URL } from "./ConfigURL";

export let getAllData = () => {
  return base_URL.get("/api/all-data");
};
export let postCreateData = (data) => {
  return base_URL.post("/api/create-iotData", data);
};

export let updateData = (data) => {
  return base_URL.update("/api/update-iotData", data);
};
export let deleteData = (data) => {
  return base_URL.delete("/api/delete-iotData", data);
};

export let getSuggestTemperature = () => {
  return base_URL.get("/api/suggest-temperature");
};

export let postTurnOffOrOffAirConditioner = (data) => {
  return base_URL.post("/api/control", data);
};
