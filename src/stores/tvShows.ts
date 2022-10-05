import { defineStore } from "pinia";
import type { DefineStoreOptions } from "pinia";

import type { TVShowData } from "../transport";

type TVShowStore = DefineStoreOptions<
  string,
  {
    allShows: Readonly<TVShowData[][]>;
  },
  {},
  {
    setAllShows: (data: TVShowData[][]) => void;
  }
>;

const tvShowStore: TVShowStore = {
  id: "tvShows",
  state() {
    return {
      allShows: [],
    };
  },
  getters: {},
  actions: {
    setAllShows(data: TVShowData[][]) {
      this.allShows = data;
    },
  },
};

export const useTVShowsStore = defineStore(tvShowStore);
