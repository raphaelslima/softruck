import { Gps } from "./gps";
export interface Course {
    start_at: string;
    end_at: string;
    distance: number;
    duration: number;
    gps: Gps[];
}
