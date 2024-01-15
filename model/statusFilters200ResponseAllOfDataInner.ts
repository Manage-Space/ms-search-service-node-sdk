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

export class StatusFilters200ResponseAllOfDataInner {
    'available'?: boolean | null;
    'reserved'?: boolean | null;
    'occupied'?: boolean | null;
    'overlocked'?: boolean | null;
    'late'?: boolean | null;
    'auction'?: boolean | null;
    'lien'?: boolean | null;
    'futureBooked'?: boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "boolean"
        },
        {
            "name": "reserved",
            "baseName": "reserved",
            "type": "boolean"
        },
        {
            "name": "occupied",
            "baseName": "occupied",
            "type": "boolean"
        },
        {
            "name": "overlocked",
            "baseName": "overlocked",
            "type": "boolean"
        },
        {
            "name": "late",
            "baseName": "late",
            "type": "boolean"
        },
        {
            "name": "auction",
            "baseName": "auction",
            "type": "boolean"
        },
        {
            "name": "lien",
            "baseName": "lien",
            "type": "boolean"
        },
        {
            "name": "futureBooked",
            "baseName": "futureBooked",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return StatusFilters200ResponseAllOfDataInner.attributeTypeMap;
    }
}
