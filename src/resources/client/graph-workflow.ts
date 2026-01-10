// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentAPI from '../agent/agent';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class GraphWorkflow extends APIResource {
  /**
   * Execute a graph workflow with directed agent nodes and edges. Enables complex
   * multi-agent collaboration with parallel execution, automatic compilation, and
   * comprehensive workflow orchestration.
   */
  executeWorkflow(
    body: GraphWorkflowExecuteWorkflowParams,
    options?: RequestOptions,
  ): APIPromise<GraphWorkflowExecuteWorkflowResponse> {
    return this._client.post('/v1/graph-workflow/completions', { body, ...options });
  }
}

/**
 * Output schema for GraphWorkflow completion responses.
 */
export interface GraphWorkflowExecuteWorkflowResponse {
  /**
   * The job ID of the graph workflow.
   */
  job_id: string;

  /**
   * The outputs of the graph workflow.
   */
  outputs: unknown;

  /**
   * The status of the graph workflow.
   */
  status: string;

  /**
   * The timestamp of the graph workflow execution.
   */
  timestamp: string;

  /**
   * The usage statistics of the workflow.
   */
  usage: GraphWorkflowExecuteWorkflowResponse.Usage;

  /**
   * The description of the graph workflow.
   */
  description?: string | null;

  /**
   * The name of the graph workflow.
   */
  name?: string | null;
}

export namespace GraphWorkflowExecuteWorkflowResponse {
  /**
   * The usage statistics of the workflow.
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

export interface GraphWorkflowExecuteWorkflowParams {
  /**
   * List of agent specifications to be used as nodes in the workflow graph.
   */
  agents?: Array<AgentAPI.AgentSpec> | null;

  /**
   * Whether to automatically compile the workflow for optimization.
   */
  auto_compile?: boolean | null;

  /**
   * The description of the graph workflow.
   */
  description?: string | null;

  /**
   * List of edges connecting nodes. Can be EdgeSpec objects or dictionaries with
   * 'source' and 'target' keys.
   */
  edges?: Array<GraphWorkflowExecuteWorkflowParams.EdgeSpec | { [key: string]: unknown }> | null;

  /**
   * List of node IDs that serve as ending points for the workflow.
   */
  end_points?: Array<string> | null;

  /**
   * List of node IDs that serve as starting points for the workflow.
   */
  entry_points?: Array<string> | null;

  /**
   * Optional image path for vision-enabled agents.
   */
  img?: string | null;

  /**
   * The maximum number of execution loops for the workflow.
   */
  max_loops?: number | null;

  /**
   * The name of the graph workflow.
   */
  name?: string | null;

  /**
   * The task to be executed by the workflow.
   */
  task?: string | null;

  /**
   * Whether to enable detailed logging.
   */
  verbose?: boolean | null;
}

export namespace GraphWorkflowExecuteWorkflowParams {
  /**
   * Schema for defining an edge between nodes in the workflow graph.
   */
  export interface EdgeSpec {
    /**
     * The source node ID.
     */
    source: string;

    /**
     * The target node ID.
     */
    target: string;

    /**
     * Optional metadata for the edge.
     */
    metadata?: { [key: string]: unknown } | null;
  }
}

export declare namespace GraphWorkflow {
  export {
    type GraphWorkflowExecuteWorkflowResponse as GraphWorkflowExecuteWorkflowResponse,
    type GraphWorkflowExecuteWorkflowParams as GraphWorkflowExecuteWorkflowParams,
  };
}
