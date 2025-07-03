// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentAPI from '../agent/agent';
import * as BatchAPI from './batch';
import { Batch, BatchRunParams, BatchRunResponse } from './batch';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class SwarmsResource extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Check the available swarm types.
   */
  checkAvailable(
    params: SwarmCheckAvailableParams,
    options?: RequestOptions,
  ): APIPromise<SwarmCheckAvailableResponse> {
    const { 'x-api-key': xAPIKey } = params;
    return this._client.get('/v1/swarms/available', {
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * Get all API request logs for the user associated with the provided API key,
   * excluding any logs that contain a client_ip field in their data.
   */
  getLogs(params: SwarmGetLogsParams, options?: RequestOptions): APIPromise<SwarmGetLogsResponse> {
    const { 'x-api-key': xAPIKey } = params;
    return this._client.get('/v1/swarm/logs', {
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * Run a swarm with the specified task.
   */
  run(params: SwarmRunParams, options?: RequestOptions): APIPromise<SwarmRunResponse> {
    const { 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post('/v1/swarm/completions', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
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
   * A flag indicating whether the swarm should return its execution history along
   * with the final output.
   */
  return_history?: boolean | null;

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

export type SwarmCheckAvailableResponse = { [key: string]: unknown };

export type SwarmGetLogsResponse = { [key: string]: unknown };

export type SwarmRunResponse = { [key: string]: unknown };

export interface SwarmCheckAvailableParams {
  'x-api-key': string;
}

export interface SwarmGetLogsParams {
  'x-api-key': string;
}

export interface SwarmRunParams {
  /**
   * Header param:
   */
  'x-api-key': string;

  /**
   * Body param: A list of agents or specifications that define the agents
   * participating in the swarm.
   */
  agents?: Array<AgentAPI.AgentSpec> | null;

  /**
   * Body param: A comprehensive description of the swarm's objectives, capabilities,
   * and intended outcomes.
   */
  description?: string | null;

  /**
   * Body param: An optional image URL that may be associated with the swarm's task
   * or representation.
   */
  img?: string | null;

  /**
   * Body param: The maximum number of execution loops allowed for the swarm,
   * enabling repeated processing if needed.
   */
  max_loops?: number | null;

  /**
   * Body param: A list of messages that the swarm should complete.
   */
  messages?: Array<{ [key: string]: unknown }> | { [key: string]: unknown } | null;

  /**
   * Body param: The name of the swarm, which serves as an identifier for the group
   * of agents and their collective task.
   */
  name?: string | null;

  /**
   * Body param: Instructions on how to rearrange the flow of tasks among agents, if
   * applicable.
   */
  rearrange_flow?: string | null;

  /**
   * Body param: A flag indicating whether the swarm should return its execution
   * history along with the final output.
   */
  return_history?: boolean | null;

  /**
   * Body param: Guidelines or constraints that govern the behavior and interactions
   * of the agents within the swarm.
   */
  rules?: string | null;

  /**
   * Body param: The service tier to use for processing. Options: 'standard'
   * (default) or 'flex' for lower cost but slower processing.
   */
  service_tier?: string | null;

  /**
   * Body param: A flag indicating whether the swarm should stream its output.
   */
  stream?: boolean | null;

  /**
   * Body param: The classification of the swarm, indicating its operational style
   * and methodology.
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
    | null;

  /**
   * Body param: The specific task or objective that the swarm is designed to
   * accomplish.
   */
  task?: string | null;

  /**
   * Body param: A list of tasks that the swarm should complete.
   */
  tasks?: Array<string> | null;
}

SwarmsResource.Batch = Batch;

export declare namespace SwarmsResource {
  export {
    type SwarmSpec as SwarmSpec,
    type SwarmCheckAvailableResponse as SwarmCheckAvailableResponse,
    type SwarmGetLogsResponse as SwarmGetLogsResponse,
    type SwarmRunResponse as SwarmRunResponse,
    type SwarmCheckAvailableParams as SwarmCheckAvailableParams,
    type SwarmGetLogsParams as SwarmGetLogsParams,
    type SwarmRunParams as SwarmRunParams,
  };

  export { Batch as Batch, type BatchRunResponse as BatchRunResponse, type BatchRunParams as BatchRunParams };
}
