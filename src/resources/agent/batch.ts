// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentAPI from './agent';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Run a batch of agents with the specified tasks using a thread pool.
   */
  run(params: BatchRunParams, options?: RequestOptions): APIPromise<BatchRunResponse> {
    const { body } = params;
    return this._client.post('/v1/agent/batch/completions', { body: body, ...options });
  }
}

export type BatchRunResponse = { [key: string]: unknown };

export interface BatchRunParams {
  body: Array<AgentAPI.AgentCompletion>;
}

export declare namespace Batch {
  export { type BatchRunResponse as BatchRunResponse, type BatchRunParams as BatchRunParams };
}
