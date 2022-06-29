import { Responsibility } from './Responsibility';
import { PersonalInformations } from "@shared/classes/PersonalInformations";

type OutsourcedProps = {
   name: string;
   cpf: string;
   responsibility: Responsibility;
   salary: number;
}

export class Outsourced {
   private personalInformations: PersonalInformations
   private company: string;

   constructor(props: OutsourcedProps) {
      Object.assign(this, props);
   }

   get getCompany() {
      return this.company;
   }

   set setCompany(newCompany: string) {
      this.company = newCompany;
   }

}