// enum-like-class
// export class Responsibility {
//    public static ASSISTENTE = new Responsibility("Assistente");

//    constructor(name: string) {
//       this.name = name;
//    }

//    readonly name;
// }

// const enum (?)
export enum Responsibility {
   ASSISTANT,
   ANALYST,
   SPECIALIST,
   ADMINISTRATOR,
}

export function getNextResponsibility(responsibility: Responsibility): Responsibility {
   switch(responsibility) {
      case Responsibility.ASSISTANT:
         return Responsibility.ANALYST;
         
      case Responsibility.ANALYST:
         return Responsibility.SPECIALIST;
      
      case Responsibility.SPECIALIST:
         return Responsibility.ADMINISTRATOR;
      
      case Responsibility.ADMINISTRATOR:
         return Responsibility.ADMINISTRATOR;
   }
}

// export const Responsibility = {
//    ASSISTENTE: () => {},
//    ANALISTA: () => {},
//    ESPECIALISTA: () => {},
//    GERENTE: () => {},
// };

// export const Responsibility = {
//    ASSISTENTE: () => {},
//    ANALISTA: () => {},
//    ESPECIALISTA: () => {},
//    GERENTE: () => {},
// } as const;

// export interface Responsibility {
//    ASSISTENTE: Responsibility.ASSISTENTE;
//    ANALISTA: Responsibility.ANALISTA;
//    ESPECIALISTA: Responsibility.ESPECIALISTA;
//    GERENTE: Responsibility.GERENTE;
// }

// export namespace Responsibility {
//    abstract class ResponsibilityFunctions {
//       abstract newMethod(): void;
//    }

//    export class ASSISTENTE extends ResponsibilityFunctions {
//       newMethod(): void {
//          throw new Error("Method not implemented.");
//       }
//    }

//    export class ANALISTA extends ResponsibilityFunctions {
//       newMethod(): void {
//          throw new Error("Method not implemented.");
//       }
//    }

//    export class ESPECIALISTA extends ResponsibilityFunctions {
//       newMethod(): void {
//          throw new Error("Method not implemented.");
//       }
//    }

//    export class GERENTE extends ResponsibilityFunctions {
//       newMethod(): void {
//          throw new Error("Method not implemented.");
//       }
//    }
// }