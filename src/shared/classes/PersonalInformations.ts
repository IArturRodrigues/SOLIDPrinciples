import { Responsibility } from "./Responsibility";

type PersonalInformationsProps = {
   name: string;
   cpf: string;
   responsibility: Responsibility;
   salary: number;
}

export class PersonalInformations {
   private name: string;
   private cpf: string;
   private responsibility: Responsibility;
   private salary: number;

   constructor(props: PersonalInformationsProps) {
      Object.assign(this, props);
   }

   get getName(): string {
      return this.name;
   }

   set setName(newName: string) {
      this.name = newName;
   }
   
   get getCpf(): string {
      return this.cpf;
   }

   set setCpf(newCpf: string) {
      this.cpf = newCpf;
   }
   
   get getResponsibility(): Responsibility {
      return this.responsibility;
   }

   set setResponsibility(newResponsibility: Responsibility) {
      this.responsibility = newResponsibility;
   }
   
   get getSalary(): number {
      return this.salary;
   }

   set setSalary(newSalary: number) {
      this.salary = newSalary;
   }
}