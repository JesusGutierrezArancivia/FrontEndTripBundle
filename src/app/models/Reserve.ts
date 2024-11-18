import { City } from './City';
import { Activity } from './Activity';
export class Reserve {
    idReserve: number = 0;
    dateReserve: Date = new Date(Date.now());
    descriptionReserve: number = 0;
    hourReserve: string = "";
    activity:Activity=new Activity();
    city:City=new City();
}