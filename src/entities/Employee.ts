import { PersonalInformations } from "@shared/classes/PersonalInformations";
import { Responsibility } from "./Responsibility";

export class Employee {
   private personalInformations: PersonalInformations;
   private lastReadjustmentDate: Date;

   constructor(name: string, cpf: string, responsibility: Responsibility, salary: number) {
      this.personalInformations = new PersonalInformations({
         name: name,
         cpf: cpf,
         responsibility: responsibility,
         salary: salary
      });
   }

   updateSalary(newSalary: number) {
      this.personalInformations.setSalary = newSalary;
      this.lastReadjustmentDate = new Date();
   }

   promote(newResponsibility: Responsibility): void {
      this.personalInformations.setResponsibility = newResponsibility;
   }

   get getResponsibility(): Responsibility {
      return this.personalInformations.getResponsibility;
   }

   get getSalary(): number {
      return this.personalInformations.getSalary;
   }

   get getLastReadjustmentDate(): Date {
      return this.lastReadjustmentDate;
   }

}
