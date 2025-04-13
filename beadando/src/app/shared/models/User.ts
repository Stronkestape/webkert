import { Appointment } from "./Appointment";
import { Passport } from "./Passport";

export interface User {
    name: string;
    password: string;
    email : string;
    passports : Passport[];
    appointments : Appointment[];

  }