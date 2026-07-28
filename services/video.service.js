import api from "./axios";

export const getVideos = () => api.get("/api/videos");

export const getVideo = (id) =>
  api.get(`/api/videos/${id}`);

export const updateVideo = (id, data) =>
  api.put(`/api/videos/${id}`, data);

export const deleteVideo = (id) =>
  api.delete(`/videos/${id}`);