/* tslint:disable */
/* eslint-disable */
/**
 * Game^3 API
 * Game^3 API
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Term
 */
export interface Term {
    /**
     * タームのID
     * @type {string}
     * @memberof Term
     */
    id?: string;
    /**
     * イベントのslug
     * @type {string}
     * @memberof Term
     */
    eventSlug?: string;
    /**
     * ゲーム登録時に割り当てられるTermならばTrue
     * @type {boolean}
     * @memberof Term
     */
    isDefault?: boolean;
    /**
     * タームが始まる時間
     * @type {Date}
     * @memberof Term
     */
    startAt?: Date;
    /**
     * タームが終わる時間
     * @type {Date}
     * @memberof Term
     */
    endAt?: Date;
}

/**
 * Check if a given object implements the Term interface.
 */
export function instanceOfTerm(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TermFromJSON(json: any): Term {
    return TermFromJSONTyped(json, false);
}

export function TermFromJSONTyped(json: any, ignoreDiscriminator: boolean): Term {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'eventSlug': !exists(json, 'eventSlug') ? undefined : json['eventSlug'],
        'isDefault': !exists(json, 'isDefault') ? undefined : json['isDefault'],
        'startAt': !exists(json, 'startAt') ? undefined : (new Date(json['startAt'])),
        'endAt': !exists(json, 'endAt') ? undefined : (new Date(json['endAt'])),
    };
}

export function TermToJSON(value?: Term | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'eventSlug': value.eventSlug,
        'isDefault': value.isDefault,
        'startAt': value.startAt === undefined ? undefined : (value.startAt.toISOString()),
        'endAt': value.endAt === undefined ? undefined : (value.endAt.toISOString()),
    };
}

