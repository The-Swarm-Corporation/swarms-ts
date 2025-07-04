// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'swarms-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'swarms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/swarm/logs',
  operationId: 'get_logs_v1_swarm_logs_get',
};

export const tool: Tool = {
  name: 'get_logs_swarms',
  description:
    'Get all API request logs for the user associated with the provided API key, excluding any logs that contain a client_ip field in their data.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.swarms.getLogs());
};

export default { metadata, tool, handler };
