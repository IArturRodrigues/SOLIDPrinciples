import { Readjustment } from "./Readjustment";

export class Consent implements Readjustment {
   private _value: number;
   private _date: Date;

   constructor(value: number) {
      this._value = value;
      this._date = new Date();
   }

   value(): number {
      return this._value;
   }

   date(): Date {
      return this._date;
   }

   // taxValue(): number {
   //    return 0;
   // }

}