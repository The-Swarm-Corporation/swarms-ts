// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SwarmsAPI from './swarms';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Run a batch of swarms with the specified tasks using a thread pool.
   */
  run(params: BatchRunParams, options?: RequestOptions): APIPromise<BatchRunResponse> {
    const { body } = params;
    return this._client.post('/v1/swarm/batch/completions', { body: body, ...options });
  }
}

export type BatchRunResponse = Array<{ [key: string]: unknown }>;

export interface BatchRunParams {
  body: Array<SwarmsAPI.SwarmSpec>;
}

export declare namespace Batch {
  export { type BatchRunResponse as BatchRunResponse, type BatchRunParams as BatchRunParams };
}
