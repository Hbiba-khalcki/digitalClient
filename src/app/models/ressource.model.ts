import { Axe } from "./axe.model";

export interface Ressource{
    id:number;
    nom:string;
    secteur:string;
    entite:string;
    lien:string;
    ref_document:string;
    axe:Axe;
}