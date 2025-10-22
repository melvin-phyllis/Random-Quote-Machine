import type { Dispatch, SetStateAction } from "react";

export type Quote = {
  quote: string;
  author: string;
};

// (Optionnel) Props pour un composant qui reçoit la liste et son setter
export type QuoteListProps = {
  list: Quote[];
  setList: Dispatch<SetStateAction<Quote[]>>;
};