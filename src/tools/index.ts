import type { TVShowData } from "../transport";
import type { RouteParamsRaw } from "vue-router";
/**
 * Unfortunately the API may return the data where the image object might be missing.
 * To avoid run time errors, we check each object and fix the missing data
 */
export const fixMissingImages = (show: TVShowData): TVShowData => {
  const copy = { ...show };
  if (!copy.image) {
    copy.image = { medium: "https://undefined" };
  }
  return copy;
};

export const getRouterParamsID = (params: RouteParamsRaw): number => {
  const paramID = Array.isArray(params.id) ? params.id[0] : params.id;
  const id = Number(paramID);
  return id;
};

export const splitInThreeGroups = (shows: TVShowData[]): TVShowData[][] => {
  const groups: TVShowData[][] = [];
  for (let i = 0; i < 3; i++) {
    const length = Math.floor(shows.length / 3);
    groups.push(shows.splice(0, length));
  }
  return groups;
};
