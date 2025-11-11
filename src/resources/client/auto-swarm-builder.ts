// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AutoSwarmBuilder extends APIResource {
  /**
   * Generate and orchestrate agent swarms autonomously using AI-powered swarm
   * composition and task decomposition.
   */
  createCompletion(
    body: AutoSwarmBuilderCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<AutoSwarmBuilderCreateCompletionResponse> {
    return this._client.post('/v1/auto-swarm-builder/completions', { body, ...options });
  }

  /**
   * Retrieve all available execution types and return formats for the Auto Swarm
   * Builder endpoint.
   */
  listExecutionTypes(options?: RequestOptions): APIPromise<AutoSwarmBuilderListExecutionTypesResponse> {
    return this._client.get('/v1/auto-swarm-builder/execution-types', options);
  }
}

/**
 * Schema for the Auto Swarm Builder API response.
 *
 * Attributes: success (bool): Whether the swarm was built successfully. job_id
 * (Optional[str]): The job ID of the swarm. outputs (Optional[dict]): The outputs
 * of the auto swarms builder. type (Optional[str]): The type of the swarm
 * execution. timestamp (Optional[str]): The timestamp of the swarm execution.
 * usage (Optional[dict]): The usage statistics of the swarm execution.
 */
export interface AutoSwarmBuilderCreateCompletionResponse {
  /**
   * Whether the swarm was built successfully.
   */
  success: boolean;

  /**
   * The job ID of the swarm.
   */
  job_id?: string | null;

  /**
   * The outputs of the auto swarms builder.
   */
  outputs?: { [key: string]: unknown } | null;

  /**
   * The timestamp of the swarm execution.
   */
  timestamp?: string | null;

  /**
   * The type of the swarm execution.
   */
  type?: string | null;

  /**
   * The usage of the swarm execution.
   */
  usage?: { [key: string]: unknown } | null;
}

export type AutoSwarmBuilderListExecutionTypesResponse = Array<string>;

export interface AutoSwarmBuilderCreateCompletionParams {
  /**
   * A description of the swarm.
   */
  description?: string | null;

  /**
   * The type of execution to perform.
   */
  execution_type?: Array<unknown> | null;

  /**
   * Maximum number of loops to run.
   */
  max_loops?: number | null;

  /**
   * The maximum number of tokens to use for the swarm.
   */
  max_tokens?: number | null;

  /**
   * The model name to use for the swarm.
   */
  model_name?: string | null;

  /**
   * The name of the swarm.
   */
  name?: string | null;

  /**
   * The task for the swarm, if any.
   */
  task?: string | null;
}

export declare namespace AutoSwarmBuilder {
  export {
    type AutoSwarmBuilderCreateCompletionResponse as AutoSwarmBuilderCreateCompletionResponse,
    type AutoSwarmBuilderListExecutionTypesResponse as AutoSwarmBuilderListExecutionTypesResponse,
    type AutoSwarmBuilderCreateCompletionParams as AutoSwarmBuilderCreateCompletionParams,
  };
}
