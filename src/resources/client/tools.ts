// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Tools extends APIResource {
  /**
   * Retrieve comprehensive information about all available tools and capabilities
   * supported by the Swarms API.
   */
  listAvailable(options?: RequestOptions): APIPromise<ToolListAvailableResponse> {
    return this._client.get('/v1/tools/available', options);
  }
}

export interface ToolListAvailableResponse {
  /**
   * The status of the available tools.
   */
  status?: string | null;

  /**
   * The list of available tools.
   */
  tools?: Array<string> | null;
}

export declare namespace Tools {
  export { type ToolListAvailableResponse as ToolListAvailableResponse };
}
