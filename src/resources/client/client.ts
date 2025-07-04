// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RateAPI from './rate';
import { Rate, RateGetLimitsResponse } from './rate';

export class Client extends APIResource {
  rate: RateAPI.Rate = new RateAPI.Rate(this._client);
}

Client.Rate = Rate;

export declare namespace Client {
  export { Rate as Rate, type RateGetLimitsResponse as RateGetLimitsResponse };
}
