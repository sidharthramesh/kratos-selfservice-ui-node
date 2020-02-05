/**
 * Ory Kratos
 * Welcome to the ORY Kratos HTTP API documentation!
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RegistrationRequestMethodConfig } from './registrationRequestMethodConfig';

export class RegistrationRequestMethod {
    'config'?: RegistrationRequestMethodConfig;
    /**
    * and so on.
    */
    'method'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "RegistrationRequestMethodConfig"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RegistrationRequestMethod.attributeTypeMap;
    }
}
