// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentAPI from '../agent/agent';
import * as BatchAPI from './batch';
import { Batch, BatchRunParams, BatchRunResponse } from './batch';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Swarms extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Check the available swarm types.
   */
  checkAvailable(options?: RequestOptions): APIPromise<SwarmCheckAvailableResponse> {
    return this._client.get('/v1/swarms/available', options);
  }

  /**
   * Get all API request logs for all API keys associated with the user identified by
   * the provided API key, excluding any logs that contain a client_ip field in their
   * data.
   */
  getLogs(options?: RequestOptions): APIPromise<SwarmGetLogsResponse> {
    return this._client.get('/v1/swarm/logs', options);
  }

  /**
   * Run a swarm with the specified task.
   */
  run(body: SwarmRunParams, options?: RequestOptions): APIPromise<SwarmRunResponse> {
    return this._client.post('/v1/swarm/completions', { body, ...options });
  }
}

export interface SwarmSpec {
  /**
   * A list of agents or specifications that define the agents participating in the
   * swarm.
   */
  agents?: Array<AgentAPI.AgentSpec> | null;

  /**
   * A comprehensive description of the swarm's objectives, capabilities, and
   * intended outcomes.
   */
  description?: string | null;

  /**
   * The number of loops to run per agent in the heavy swarm.
   */
  heavy_swarm_loops_per_agent?: number | null;

  /**
   * The model name to use for the question agent in the heavy swarm.
   */
  heavy_swarm_question_agent_model_name?: string | null;

  /**
   * The model name to use for the worker agent in the heavy swarm.
   */
  heavy_swarm_worker_model_name?: string | null;

  /**
   * An optional image URL that may be associated with the swarm's task or
   * representation.
   */
  img?: string | null;

  /**
   * The maximum number of execution loops allowed for the swarm, enabling repeated
   * processing if needed.
   */
  max_loops?: number | null;

  /**
   * A list of messages that the swarm should complete.
   */
  messages?: Array<{ [key: string]: unknown }> | { [key: string]: unknown } | null;

  /**
   * The name of the swarm, which serves as an identifier for the group of agents and
   * their collective task.
   */
  name?: string | null;

  /**
   * Instructions on how to rearrange the flow of tasks among agents, if applicable.
   */
  rearrange_flow?: string | null;

  /**
   * Guidelines or constraints that govern the behavior and interactions of the
   * agents within the swarm.
   */
  rules?: string | null;

  /**
   * The service tier to use for processing. Options: 'standard' (default) or 'flex'
   * for lower cost but slower processing.
   */
  service_tier?: string | null;

  /**
   * A flag indicating whether the swarm should stream its output.
   */
  stream?: boolean | null;

  /**
   * The classification of the swarm, indicating its operational style and
   * methodology.
   */
  swarm_type?:
    | 'AgentRearrange'
    | 'MixtureOfAgents'
    | 'SpreadSheetSwarm'
    | 'SequentialWorkflow'
    | 'ConcurrentWorkflow'
    | 'GroupChat'
    | 'MultiAgentRouter'
    | 'AutoSwarmBuilder'
    | 'HiearchicalSwarm'
    | 'auto'
    | 'MajorityVoting'
    | 'MALT'
    | 'DeepResearchSwarm'
    | 'CouncilAsAJudge'
    | 'InteractiveGroupChat'
    | 'HeavySwarm'
    | null;

  /**
   * The specific task or objective that the swarm is designed to accomplish.
   */
  task?: string | null;

  /**
   * A list of tasks that the swarm should complete.
   */
  tasks?: Array<string> | null;
}

export interface SwarmCheckAvailableResponse {
  success?: boolean | null;

  swarm_types?: unknown;
}

export interface SwarmGetLogsResponse {
  count?: number | null;

  logs?: unknown;

  status?: string | null;

  timestamp?: string | null;
}

export interface SwarmRunResponse {
  /**
   * The description of the swarm.
   */
  description: string | null;

  /**
   * The execution time of the swarm.
   */
  execution_time: number | null;

  /**
   * The unique identifier for the swarm completion.
   */
  job_id: string | null;

  /**
   * The number of agents in the swarm.
   */
  number_of_agents: number | null;

  /**
   * The output of the swarm.
   */
  output: unknown;

  /**
   * The service tier of the swarm.
   */
  service_tier: string | null;

  /**
   * The status of the swarm completion.
   */
  status: string | null;

  /**
   * The name of the swarm.
   */
  swarm_name: string | null;

  /**
   * The type of the swarm.
   */
  swarm_type: string | null;

  /**
   * The usage of the swarm.
   */
  usage: { [key: string]: unknown } | null;
}

export interface SwarmRunParams {
  /**
   * A list of agents or specifications that define the agents participating in the
   * swarm.
   */
  agents?: Array<AgentAPI.AgentSpec> | null;

  /**
   * A comprehensive description of the swarm's objectives, capabilities, and
   * intended outcomes.
   */
  description?: string | null;

  /**
   * The number of loops to run per agent in the heavy swarm.
   */
  heavy_swarm_loops_per_agent?: number | null;

  /**
   * The model name to use for the question agent in the heavy swarm.
   */
  heavy_swarm_question_agent_model_name?: string | null;

  /**
   * The model name to use for the worker agent in the heavy swarm.
   */
  heavy_swarm_worker_model_name?: string | null;

  /**
   * An optional image URL that may be associated with the swarm's task or
   * representation.
   */
  img?: string | null;

  /**
   * The maximum number of execution loops allowed for the swarm, enabling repeated
   * processing if needed.
   */
  max_loops?: number | null;

  /**
   * A list of messages that the swarm should complete.
   */
  messages?: Array<{ [key: string]: unknown }> | { [key: string]: unknown } | null;

  /**
   * The name of the swarm, which serves as an identifier for the group of agents and
   * their collective task.
   */
  name?: string | null;

  /**
   * Instructions on how to rearrange the flow of tasks among agents, if applicable.
   */
  rearrange_flow?: string | null;

  /**
   * Guidelines or constraints that govern the behavior and interactions of the
   * agents within the swarm.
   */
  rules?: string | null;

  /**
   * The service tier to use for processing. Options: 'standard' (default) or 'flex'
   * for lower cost but slower processing.
   */
  service_tier?: string | null;

  /**
   * A flag indicating whether the swarm should stream its output.
   */
  stream?: boolean | null;

  /**
   * The classification of the swarm, indicating its operational style and
   * methodology.
   */
  swarm_type?:
    | 'AgentRearrange'
    | 'MixtureOfAgents'
    | 'SpreadSheetSwarm'
    | 'SequentialWorkflow'
    | 'ConcurrentWorkflow'
    | 'GroupChat'
    | 'MultiAgentRouter'
    | 'AutoSwarmBuilder'
    | 'HiearchicalSwarm'
    | 'auto'
    | 'MajorityVoting'
    | 'MALT'
    | 'DeepResearchSwarm'
    | 'CouncilAsAJudge'
    | 'InteractiveGroupChat'
    | 'HeavySwarm'
    | null;

  /**
   * The specific task or objective that the swarm is designed to accomplish.
   */
  task?: string | null;

  /**
   * A list of tasks that the swarm should complete.
   */
  tasks?: Array<string> | null;
}

Swarms.Batch = Batch;

export declare namespace Swarms {
  export {
    type SwarmSpec as SwarmSpec,
    type SwarmCheckAvailableResponse as SwarmCheckAvailableResponse,
    type SwarmGetLogsResponse as SwarmGetLogsResponse,
    type SwarmRunResponse as SwarmRunResponse,
    type SwarmRunParams as SwarmRunParams,
  };

  export { Batch as Batch, type BatchRunResponse as BatchRunResponse, type BatchRunParams as BatchRunParams };
}
