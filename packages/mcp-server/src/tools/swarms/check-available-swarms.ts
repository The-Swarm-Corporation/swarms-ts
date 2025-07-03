// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'swarms-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Swarms from 'swarms';

export const metadata: Metadata = {
  resource: 'swarms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/swarms/available',
  operationId: 'check_swarm_types_v1_swarms_available_get',
};

export const tool: Tool = {
  name: 'check_available_swarms',
  description: 'Check the available swarm types.',
  inputSchema: {
    type: 'object',
    properties: {
      'x-api-key': {
        type: 'string',
        title: 'X-Api-Key',
      },
    },
  },
};

export const handler = async (client: Swarms, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.swarms.checkAvailable(body));
};

export default { metadata, tool, handler };
