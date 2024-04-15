import {
  setDataToFile,
  getDataFromFile,
  updateDataInFile,
  deleteDataInFile,
  changeTaskStatus,
} from "../model/repository.js";

export function insertData(req, res) {
  setDataToFile(req.body);
  res.send("Data set");
}

export function getData(req, res) {
  res.send(200, getDataFromFile(), "application/json");
}

export function updateData(req, res) {
  updateDataInFile(req.params.id, req.body);
  res.send(200, "data updated", "text/plain");
}

export function deleteData(req, res) {
  deleteDataInFile(req.params.id);
  res.send(200, "data deleted", "text/plain");
}

export function toggleStatus(req, res) {
  changeTaskStatus(req.params.id, req.body);
  res.send(200, "status changed", "text/plain");
}
