// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'client.auto_swarm_builder',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/auto-swarm-builder/completions',
  operationId: 'auto_swarm_builder_v1_auto_swarm_builder_completions_post',
};

export const tool: Tool = {
  name: 'create_completion_client_auto_swarm_builder',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate and orchestrate agent swarms autonomously using AI-powered swarm composition and task decomposition.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/auto_swarm_builder_create_completion_response',\n  $defs: {\n    auto_swarm_builder_create_completion_response: {\n      type: 'object',\n      title: 'AutoSwarmBuilderResponse',\n      description: 'Schema for the Auto Swarm Builder API response.\\n\\nAttributes:\\n    success (bool): Whether the swarm was built successfully.\\n    job_id (Optional[str]): The job ID of the swarm.\\n    outputs (Optional[dict]): The outputs of the auto swarms builder.\\n    type (Optional[str]): The type of the swarm execution.\\n    timestamp (Optional[str]): The timestamp of the swarm execution.\\n    usage (Optional[dict]): The usage statistics of the swarm execution.',\n      properties: {\n        success: {\n          type: 'boolean',\n          title: 'Success',\n          description: 'Whether the swarm was built successfully.'\n        },\n        job_id: {\n          type: 'string',\n          title: 'Job Id',\n          description: 'The job ID of the swarm.'\n        },\n        outputs: {\n          type: 'object',\n          title: 'Outputs',\n          description: 'The outputs of the auto swarms builder.',\n          additionalProperties: true\n        },\n        timestamp: {\n          type: 'string',\n          title: 'Timestamp',\n          description: 'The timestamp of the swarm execution.'\n        },\n        type: {\n          type: 'string',\n          title: 'Type',\n          description: 'The type of the swarm execution.'\n        },\n        usage: {\n          type: 'object',\n          title: 'Usage',\n          description: 'The usage of the swarm execution.',\n          additionalProperties: true\n        }\n      },\n      required: [        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        title: 'Description',
        description: 'A description of the swarm.',
      },
      execution_type: {
        type: 'string',
        title: 'Execution Type',
        description: 'The type of execution to perform.',
        enum: ['return-agents', 'return-swarm-router-config', 'return-agents-objects'],
      },
      max_loops: {
        type: 'integer',
        title: 'Max Loops',
        description: 'Maximum number of loops to run.',
      },
      max_tokens: {
        type: 'integer',
        title: 'Max Tokens',
        description: 'The maximum number of tokens to use for the swarm.',
      },
      model_name: {
        type: 'string',
        title: 'Model Name',
        description: 'The model name to use for the swarm.',
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'The name of the swarm.',
      },
      task: {
        type: 'string',
        title: 'Task',
        description: 'The task for the swarm, if any.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.client.autoSwarmBuilder.createCompletion(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
