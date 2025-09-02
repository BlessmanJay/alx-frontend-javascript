/// <reference path="./interface.ts" />

import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): RowID;

export function deleteRow(rowID: RowID): void;
export function updateRow(rowID: RowID, row: RowElement): RowID;
declare function insertRow(row: RowElement): number, 
declare function deleteRow(rowId: RowID): void, 
declare function updateRow(rowId: RowID): number, 
