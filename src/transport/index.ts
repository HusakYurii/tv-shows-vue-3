import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";
const ALL_SHOWS_URL = `${BASE_URL}/shows`;
const SEARCH_SHOWS_URL = `${BASE_URL}/search/shows?q=`;

export const getFallbackTVShowData = () => ({
  id: -1,
  name: "Not found",
  genres: [],
  image: { medium: "https://undefined" },
  rating: { average: 0 },
  summary: "",
  language: "",
  url: "",
});

export type TVShowData = {
  id: number;
  name: string;
  genres: string[];
  image: { medium: string };
  rating: { average: number };
  summary: string;
  language: string;
  url: string;
};

export type TVShowSearchResult = {
  score: number;
  show: TVShowData;
};

export const getAllShows = async (): Promise<TVShowData[]> => {
  try {
    const { data } = await axios.get<TVShowData[]>(ALL_SHOWS_URL);
    return data;
  } catch (error) {
    return [];
  }
};

export const searchByName = async (
  query: string
): Promise<TVShowSearchResult[]> => {
  try {
    const { data } = await axios.get<TVShowSearchResult[]>(
      `${SEARCH_SHOWS_URL}${query}`
    );
    return data;
  } catch (error) {
    return [];
  }
};

export const searchByID = async (id: number): Promise<TVShowData | null> => {
  try {
    const { data } = await axios.get<TVShowData>(`${ALL_SHOWS_URL}/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};
