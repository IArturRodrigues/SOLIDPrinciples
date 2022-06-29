import { Readjustment, ReadjustmentWithTaxes } from "./Readjustment";

export class Promotion implements Readjustment, ReadjustmentWithTaxes {
   private _value: number;
   private _date: Date;

   constructor(value: number, date: Date) {
      this._value = value;
      this._date = date;
   }

   value(): number {
      return this._value;
   }
   
   date(): Date {
      return this._date;
   }

   taxValue(): number {
      return this._value * 0.1;
   }
}