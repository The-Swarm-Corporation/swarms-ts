// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchRunParams, BatchRunResponse } from './batch';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Agent extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Get all unique agent configurations that the user has created or used, without
   * task details. Allows users to reuse agent configs with new tasks.
   */
  list(options?: RequestOptions): APIPromise<AgentListResponse> {
    return this._client.get('/v1/agents/list', options);
  }

  /**
   * Run an agent with the specified task. Supports streaming when stream=True.
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

  /**
   * A list of tools that the agent should use to complete its task.
   */
  tools_enabled?: Array<string> | null;
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
   * A flag indicating whether the agent should dynamically adjust its temperature
   * based on the task.
   */
  dynamic_temperature_enabled?: boolean | null;

  /**
   * Additional arguments to pass to the LLM such as top_p, frequency_penalty,
   * presence_penalty, etc.
   */
  llm_args?: { [key: string]: unknown } | null;

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
   * The MCP connection to use for the agent.
   */
  mcp_config?: AgentSpec.McpConfig | null;

  /**
   * The MCP connections to use for the agent. This is a list of MCP connections.
   * Includes multiple MCP connections.
   */
  mcp_configs?: AgentSpec.McpConfigs | null;

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
   * The effort to put into reasoning.
   */
  reasoning_effort?: string | null;

  /**
   * A parameter enabling an agent to use reasoning.
   */
  reasoning_enabled?: boolean | null;

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
   * The number of tokens to use for thinking.
   */
  thinking_tokens?: number | null;

  /**
   * A parameter enabling an agent to summarize tool calls.
   */
  tool_call_summary?: boolean | null;

  /**
   * A dictionary of tools that the agent can use to complete its task.
   */
  tools_list_dictionary?: Array<{ [key: string]: unknown }> | null;
}

export namespace AgentSpec {
  /**
   * The MCP connection to use for the agent.
   */
  export interface McpConfig {
    /**
     * Authentication token for accessing the MCP server
     */
    authorization_token?: string | null;

    /**
     * Headers to send to the MCP server
     */
    headers?: { [key: string]: string } | null;

    /**
     * Timeout for the MCP server
     */
    timeout?: number | null;

    /**
     * Dictionary containing configuration settings for MCP tools
     */
    tool_configurations?: { [key: string]: unknown } | null;

    /**
     * The transport protocol to use for the MCP server
     */
    transport?: string | null;

    /**
     * The type of connection, defaults to 'mcp'
     */
    type?: string | null;

    /**
     * The URL endpoint for the MCP server
     */
    url?: string | null;

    [k: string]: unknown;
  }

  /**
   * The MCP connections to use for the agent. This is a list of MCP connections.
   * Includes multiple MCP connections.
   */
  export interface McpConfigs {
    /**
     * List of MCP connections
     */
    connections: Array<McpConfigs.Connection>;
  }

  export namespace McpConfigs {
    export interface Connection {
      /**
       * Authentication token for accessing the MCP server
       */
      authorization_token?: string | null;

      /**
       * Headers to send to the MCP server
       */
      headers?: { [key: string]: string } | null;

      /**
       * Timeout for the MCP server
       */
      timeout?: number | null;

      /**
       * Dictionary containing configuration settings for MCP tools
       */
      tool_configurations?: { [key: string]: unknown } | null;

      /**
       * The transport protocol to use for the MCP server
       */
      transport?: string | null;

      /**
       * The type of connection, defaults to 'mcp'
       */
      type?: string | null;

      /**
       * The URL endpoint for the MCP server
       */
      url?: string | null;

      [k: string]: unknown;
    }
  }
}

export type AgentListResponse = { [key: string]: unknown };

export interface AgentRunResponse {
  /**
   * A description of the agent or completion.
   */
  description?: string | null;

  /**
   * The unique identifier for the agent completion.
   */
  job_id?: string | null;

  /**
   * The name of the agent.
   */
  name?: string | null;

  /**
   * The outputs generated by the agent.
   */
  outputs?: unknown;

  /**
   * Indicates whether the agent completion was successful.
   */
  success?: boolean | null;

  /**
   * The temperature setting used for the agent's response generation.
   */
  temperature?: number | null;

  /**
   * The timestamp when the agent completion was created.
   */
  timestamp?: string | null;

  /**
   * Usage statistics or metadata for the agent completion.
   */
  usage?: { [key: string]: unknown } | null;
}

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

  /**
   * A list of tools that the agent should use to complete its task.
   */
  tools_enabled?: Array<string> | null;
}

Agent.Batch = Batch;

export declare namespace Agent {
  export {
    type AgentCompletion as AgentCompletion,
    type AgentSpec as AgentSpec,
    type AgentListResponse as AgentListResponse,
    type AgentRunResponse as AgentRunResponse,
    type AgentRunParams as AgentRunParams,
  };

  export { Batch as Batch, type BatchRunResponse as BatchRunResponse, type BatchRunParams as BatchRunParams };
}
