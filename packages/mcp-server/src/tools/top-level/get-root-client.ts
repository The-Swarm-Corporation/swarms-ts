// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'swarms-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Swarms from 'swarms';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/',
  operationId: 'root__get',
};

export const tool: Tool = {
  name: 'get_root_client',
  description: 'Root',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Swarms, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.getRoot()) as object);
};

export default { metadata, tool, handler };
