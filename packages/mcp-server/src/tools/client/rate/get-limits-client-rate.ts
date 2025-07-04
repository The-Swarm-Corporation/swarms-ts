// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'swarms-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'client.rate',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rate/limits',
  operationId: 'get_rate_limits_v1_rate_limits_get',
};

export const tool: Tool = {
  name: 'get_limits_client_rate',
  description: 'Get the rate limits and current usage for the user associated with the provided API key.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.client.rate.getLimits());
};

export default { metadata, tool, handler };
