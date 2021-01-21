import { Hopital } from "./Hopital";
import { Patient } from "./Patient";
import { Service } from "./Service";

export class RendezVous {
    id?:       number;
    
    dateRdv?: Date;
    heureRdv?: string;

    dateCreation?: Date;

    statut?: string;


    patient?: Patient;
    service?: Service;

    hopital?: Hopital;

}