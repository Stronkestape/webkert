import { City } from "./City";


export interface Appointment {
    id : number;
    date : Date;
    expired : boolean;
    city : City;
    purpose : string;
}
