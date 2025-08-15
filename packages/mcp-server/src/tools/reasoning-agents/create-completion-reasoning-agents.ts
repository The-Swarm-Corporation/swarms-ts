// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'reasoning_agents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/reasoning-agent/completions',
  operationId: 'run_reasoning_agent_completions_v1_reasoning_agent_completions_post',
};

export const tool: Tool = {
  name: 'create_completion_reasoning_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRun a reasoning agent with the specified task.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response Run Reasoning Agent Completions V1 Reasoning Agent Completions Post',\n  additionalProperties: true\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agent_name: {
        type: 'string',
        title: 'Agent Name',
        description: 'The unique name assigned to the reasoning agent.',
      },
      description: {
        type: 'string',
        title: 'Description',
        description: "A detailed explanation of the reasoning agent's purpose and capabilities.",
      },
      max_loops: {
        type: 'integer',
        title: 'Max Loops',
        description: 'The maximum number of times the reasoning agent is allowed to repeat its task.',
      },
      memory_capacity: {
        type: 'integer',
        title: 'Memory Capacity',
        description: 'The memory capacity for the reasoning agent.',
      },
      model_name: {
        type: 'string',
        title: 'Model Name',
        description: 'The name of the AI model that the reasoning agent will utilize.',
      },
      num_knowledge_items: {
        type: 'integer',
        title: 'Num Knowledge Items',
        description: 'The number of knowledge items to use for the reasoning agent.',
      },
      num_samples: {
        type: 'integer',
        title: 'Num Samples',
        description: 'The number of samples to generate for the reasoning agent.',
      },
      output_type: {
        type: 'string',
        title: 'Output Type',
        description: 'The type of output format for the reasoning agent.',
        enum: [
          'list',
          'dict',
          'dictionary',
          'string',
          'str',
          'final',
          'last',
          'json',
          'all',
          'yaml',
          'xml',
          'dict-all-except-first',
          'str-all-except-first',
          'basemodel',
          'dict-final',
          'list-final',
        ],
      },
      swarm_type: {
        type: 'string',
        title: 'Swarm Type',
        description: 'The type of reasoning swarm to use (e.g., reasoning duo, self-consistency, IRE).',
        enum: [
          'reasoning-duo',
          'self-consistency',
          'ire',
          'reasoning-agent',
          'consistency-agent',
          'ire-agent',
          'ReflexionAgent',
          'GKPAgent',
          'AgentJudge',
        ],
      },
      system_prompt: {
        type: 'string',
        title: 'System Prompt',
        description: 'The initial instruction or context provided to the reasoning agent.',
      },
      task: {
        type: 'string',
        title: 'Task',
        description: 'The task to be completed by the reasoning agent.',
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.reasoningAgents.createCompletion(body)),
  );
};

export default { metadata, tool, handler };
