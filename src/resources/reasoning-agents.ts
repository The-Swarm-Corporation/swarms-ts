// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ReasoningAgents extends APIResource {
  /**
   * Run a reasoning agent with the specified task.
   */
  createCompletion(
    body: ReasoningAgentCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ReasoningAgentCreateCompletionResponse> {
    return this._client.post('/v1/reasoning-agent/completions', { body, ...options });
  }

  /**
   * Get the types of reasoning agents available.
   */
  listTypes(options?: RequestOptions): APIPromise<ReasoningAgentListTypesResponse> {
    return this._client.get('/v1/reasoning-agent/types', options);
  }
}

export type ReasoningAgentCreateCompletionResponse = { [key: string]: unknown };

export type ReasoningAgentListTypesResponse = { [key: string]: unknown };

export interface ReasoningAgentCreateCompletionParams {
  /**
   * The unique name assigned to the reasoning agent.
   */
  agent_name?: string | null;

  /**
   * A detailed explanation of the reasoning agent's purpose and capabilities.
   */
  description?: string | null;

  /**
   * The maximum number of times the reasoning agent is allowed to repeat its task.
   */
  max_loops?: number | null;

  /**
   * The memory capacity for the reasoning agent.
   */
  memory_capacity?: number | null;

  /**
   * The name of the AI model that the reasoning agent will utilize.
   */
  model_name?: string | null;

  /**
   * The number of knowledge items to use for the reasoning agent.
   */
  num_knowledge_items?: number | null;

  /**
   * The number of samples to generate for the reasoning agent.
   */
  num_samples?: number | null;

  /**
   * The type of output format for the reasoning agent.
   */
  output_type?:
    | 'list'
    | 'dict'
    | 'dictionary'
    | 'string'
    | 'str'
    | 'final'
    | 'last'
    | 'json'
    | 'all'
    | 'yaml'
    | 'xml'
    | 'dict-all-except-first'
    | 'str-all-except-first'
    | 'basemodel'
    | 'dict-final'
    | 'list-final'
    | null;

  /**
   * The type of reasoning swarm to use (e.g., reasoning duo, self-consistency, IRE).
   */
  swarm_type?:
    | 'reasoning-duo'
    | 'self-consistency'
    | 'ire'
    | 'reasoning-agent'
    | 'consistency-agent'
    | 'ire-agent'
    | 'ReflexionAgent'
    | 'GKPAgent'
    | 'AgentJudge'
    | null;

  /**
   * The initial instruction or context provided to the reasoning agent.
   */
  system_prompt?: string | null;

  /**
   * The task to be completed by the reasoning agent.
   */
  task?: string | null;
}

export declare namespace ReasoningAgents {
  export {
    type ReasoningAgentCreateCompletionResponse as ReasoningAgentCreateCompletionResponse,
    type ReasoningAgentListTypesResponse as ReasoningAgentListTypesResponse,
    type ReasoningAgentCreateCompletionParams as ReasoningAgentCreateCompletionParams,
  };
}
