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
import { Document } from './document';
import { LeaseType } from './leaseType';

export class Lease {
    'leaseId': string;
    'contactId': string;
    'signedOn': Date;
    'expiresAt': Date;
    'unitId': string;
    'leaseTypeId': number;
    'leaseType': LeaseType;
    'document': Document;
    'intendedMoveOutDate': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "leaseId",
            "baseName": "leaseId",
            "type": "string"
        },
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "string"
        },
        {
            "name": "signedOn",
            "baseName": "signedOn",
            "type": "Date"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        },
        {
            "name": "unitId",
            "baseName": "unitId",
            "type": "string"
        },
        {
            "name": "leaseTypeId",
            "baseName": "leaseTypeId",
            "type": "number"
        },
        {
            "name": "leaseType",
            "baseName": "leaseType",
            "type": "LeaseType"
        },
        {
            "name": "document",
            "baseName": "document",
            "type": "Document"
        },
        {
            "name": "intendedMoveOutDate",
            "baseName": "intendedMoveOutDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Lease.attributeTypeMap;
    }
}

