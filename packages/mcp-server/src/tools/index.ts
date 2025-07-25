// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import get_root_client from './top-level/get-root-client';
import check_health from './health/check-health';
import run_agent from './agent/run-agent';
import run_agent_batch from './agent/batch/run-agent-batch';
import list_available_models from './models/list-available-models';
import check_available_swarms from './swarms/check-available-swarms';
import get_logs_swarms from './swarms/get-logs-swarms';
import run_swarms from './swarms/run-swarms';
import run_swarms_batch from './swarms/batch/run-swarms-batch';
import create_completion_reasoning_agents from './reasoning-agents/create-completion-reasoning-agents';
import list_types_reasoning_agents from './reasoning-agents/list-types-reasoning-agents';
import get_limits_client_rate from './client/rate/get-limits-client-rate';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(get_root_client);
addEndpoint(check_health);
addEndpoint(run_agent);
addEndpoint(run_agent_batch);
addEndpoint(list_available_models);
addEndpoint(check_available_swarms);
addEndpoint(get_logs_swarms);
addEndpoint(run_swarms);
addEndpoint(run_swarms_batch);
addEndpoint(create_completion_reasoning_agents);
addEndpoint(list_types_reasoning_agents);
addEndpoint(get_limits_client_rate);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
