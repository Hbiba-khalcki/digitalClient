import { Axe } from "./axe.model";

export interface Question{
    id:number;
    contenu:string;
    pourcentage:string;
    axe:Axe;
    nbrReponse:number;
}
