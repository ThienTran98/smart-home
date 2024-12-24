import { base_URL } from "./ConfigURL";

export let getAllData = () => {
  return base_URL.get("/api/all-data");
};
export let postCreateData = (data) => {
  return base_URL.post("/api/create-iotData", data);
};

//   {postCreateData
//     "temperature": 25.3,
//     "humidity": 60.5,
//     "timestamp": "2024-12-07T08:00:00Z"
// }
export let updateData = (data) => {
  return base_URL.update("/api/update-iotData", data);
};
export let deleteData = (data) => {
  return base_URL.delete("/api/delete-iotData", data);
};

//   {
//     "id": 3,
//     "tds": 1050,
//     "temperature": 22,
//     "pH": 6,
//     "humidity": 65,
//     "packet_no": 104
//   }
