/**
 * ManageSpace Search API
 * ManageSpace Search API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Account } from './account';

export class UnitReservation {
    'unitReservationId': string;
    'createdAt': Date;
    'createdBy': string;
    'account': Account;
    'expiresAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "unitReservationId",
            "baseName": "unitReservationId",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "Account"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return UnitReservation.attributeTypeMap;
    }
}

