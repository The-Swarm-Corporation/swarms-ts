// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentAPI from '../agent/agent';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BatchedGridWorkflow extends APIResource {
  /**
   * Complete a batched grid workflow with the specified input data. Enables you to
   * run a grid workflow with multiple agents and tasks in a single request.
   */
  completeWorkflow(
    body: BatchedGridWorkflowCompleteWorkflowParams,
    options?: RequestOptions,
  ): APIPromise<BatchedGridWorkflowCompleteWorkflowResponse> {
    return this._client.post('/v1/batched-grid-workflow/completions', { body, ...options });
  }
}

export interface BatchedGridWorkflowCompleteWorkflowResponse {
  /**
   * The description of the batched grid workflow.
   */
  description: string;

  /**
   * The job ID of the batched grid workflow.
   */
  job_id: string;

  /**
   * The name of the batched grid workflow.
   */
  name: string;

  /**
   * The outputs of the batched grid workflow.
   */
  outputs: unknown;

  /**
   * The status of the batched grid workflow.
   */
  status: string;

  /**
   * The timestamp of the batched grid workflow.
   */
  timestamp: string;

  /**
   * The usage of the batched grid workflow.
   */
  usage: BatchedGridWorkflowCompleteWorkflowResponse.Usage;
}

export namespace BatchedGridWorkflowCompleteWorkflowResponse {
  /**
   * The usage of the batched grid workflow.
   */
  export interface Usage {
    /**
     * The cost in credits for the agents.
     */
    cost_per_agent: number;

    /**
     * The number of input tokens.
     */
    input_tokens: number;

    /**
     * The number of output tokens.
     */
    output_tokens: number;

    /**
     * The cost in credits for the tokens.
     */
    token_cost: number;

    /**
     * The total number of tokens.
     */
    total_tokens: number;
  }
}

export interface BatchedGridWorkflowCompleteWorkflowParams {
  /**
   * The agent completions to be completed by the batched grid workflow.
   */
  agent_completions?: Array<AgentAPI.AgentSpec> | null;

  /**
   * The description of the batched grid workflow.
   */
  description?: string | null;

  /**
   * The images to be used by the batched grid workflow.
   */
  imgs?: Array<string> | null;

  /**
   * The maximum number of loops to be completed by the batched grid workflow.
   */
  max_loops?: number | null;

  /**
   * The name of the batched grid workflow.
   */
  name?: string | null;

  /**
   * The tasks to be completed by the batched grid workflow.
   */
  tasks?: Array<string> | null;
}

export declare namespace BatchedGridWorkflow {
  export {
    type BatchedGridWorkflowCompleteWorkflowResponse as BatchedGridWorkflowCompleteWorkflowResponse,
    type BatchedGridWorkflowCompleteWorkflowParams as BatchedGridWorkflowCompleteWorkflowParams,
  };
}
