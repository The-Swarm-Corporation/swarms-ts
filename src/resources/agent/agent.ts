// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchRunParams, BatchRunResponse } from './batch';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Agent extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Run an agent with the specified task.
   */
  run(body: AgentRunParams, options?: RequestOptions): APIPromise<AgentRunResponse> {
    return this._client.post('/v1/agent/completions', { body, ...options });
  }
}

export interface AgentCompletion {
  /**
   * The configuration of the agent to be completed.
   */
  agent_config?: AgentSpec | null;

  /**
   * The history of the agent's previous tasks and responses. Can be either a
   * dictionary or a list of message objects.
   */
  history?: { [key: string]: unknown } | Array<{ [key: string]: string }> | null;

  /**
   * An optional image URL that may be associated with the agent's task or
   * representation.
   */
  img?: string | null;

  /**
   * A list of image URLs that may be associated with the agent's task or
   * representation.
   */
  imgs?: Array<string> | null;

  /**
   * The task to be completed by the agent.
   */
  task?: string | null;
}

export interface AgentSpec {
  /**
   * The unique name assigned to the agent, which identifies its role and
   * functionality within the swarm.
   */
  agent_name: string | null;

  /**
   * A flag indicating whether the agent should automatically create prompts based on
   * the task requirements.
   */
  auto_generate_prompt?: boolean | null;

  /**
   * A detailed explanation of the agent's purpose, capabilities, and any specific
   * tasks it is designed to perform.
   */
  description?: string | null;

  /**
   * The maximum number of times the agent is allowed to repeat its task, enabling
   * iterative processing if necessary.
   */
  max_loops?: number | null;

  /**
   * The maximum number of tokens that the agent is allowed to generate in its
   * responses, limiting output length.
   */
  max_tokens?: number | null;

  /**
   * The URL of the MCP server that the agent can use to complete its task.
   */
  mcp_url?: string | null;

  /**
   * The name of the AI model that the agent will utilize for processing tasks and
   * generating outputs. For example: gpt-4o, gpt-4o-mini, openai/o3-mini
   */
  model_name?: string | null;

  /**
   * The designated role of the agent within the swarm, which influences its behavior
   * and interaction with other agents.
   */
  role?: string | null;

  /**
   * A flag indicating whether the agent should stream its output.
   */
  streaming_on?: boolean | null;

  /**
   * The initial instruction or context provided to the agent, guiding its behavior
   * and responses during execution.
   */
  system_prompt?: string | null;

  /**
   * A parameter that controls the randomness of the agent's output; lower values
   * result in more deterministic responses.
   */
  temperature?: number | null;

  /**
   * A dictionary of tools that the agent can use to complete its task.
   */
  tools_list_dictionary?: Array<{ [key: string]: unknown }> | null;
}

export type AgentRunResponse = { [key: string]: unknown };

export interface AgentRunParams {
  /**
   * The configuration of the agent to be completed.
   */
  agent_config?: AgentSpec | null;

  /**
   * The history of the agent's previous tasks and responses. Can be either a
   * dictionary or a list of message objects.
   */
  history?: { [key: string]: unknown } | Array<{ [key: string]: string }> | null;

  /**
   * An optional image URL that may be associated with the agent's task or
   * representation.
   */
  img?: string | null;

  /**
   * A list of image URLs that may be associated with the agent's task or
   * representation.
   */
  imgs?: Array<string> | null;

  /**
   * The task to be completed by the agent.
   */
  task?: string | null;
}

Agent.Batch = Batch;

export declare namespace Agent {
  export {
    type AgentCompletion as AgentCompletion,
    type AgentSpec as AgentSpec,
    type AgentRunResponse as AgentRunResponse,
    type AgentRunParams as AgentRunParams,
  };

  export { Batch as Batch, type BatchRunResponse as BatchRunResponse, type BatchRunParams as BatchRunParams };
}
