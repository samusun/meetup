export interface Props {
  eventName: string;
  date: number;
  time: string;
  place: string;
  description: string;
  participants: number;
  participantsMax: number;
  rating: number[];
  previous: boolean;
  comments: { user: string; comment: string }[];
  searchWords: string;
}
