// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'swarms',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/swarm/completions',
  operationId: 'run_swarm_v1_swarm_completions_post',
};

export const tool: Tool = {
  name: 'run_swarms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRun a swarm with the specified task.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'SwarmCompletion',\n  properties: {\n    description: {\n      type: 'string',\n      title: 'Description',\n      description: 'The description of the swarm.'\n    },\n    execution_time: {\n      type: 'number',\n      title: 'Execution Time',\n      description: 'The execution time of the swarm.'\n    },\n    job_id: {\n      type: 'string',\n      title: 'Job Id',\n      description: 'The unique identifier for the swarm completion.'\n    },\n    number_of_agents: {\n      type: 'integer',\n      title: 'Number Of Agents',\n      description: 'The number of agents in the swarm.'\n    },\n    output: {\n      type: 'object',\n      title: 'Output',\n      description: 'The output of the swarm.'\n    },\n    service_tier: {\n      type: 'string',\n      title: 'Service Tier',\n      description: 'The service tier of the swarm.'\n    },\n    status: {\n      type: 'string',\n      title: 'Status',\n      description: 'The status of the swarm completion.'\n    },\n    swarm_name: {\n      type: 'string',\n      title: 'Swarm Name',\n      description: 'The name of the swarm.'\n    },\n    swarm_type: {\n      type: 'string',\n      title: 'Swarm Type',\n      description: 'The type of the swarm.'\n    },\n    usage: {\n      type: 'object',\n      title: 'Usage',\n      description: 'The usage of the swarm.'\n    }\n  },\n  required: [    'description',\n    'execution_time',\n    'job_id',\n    'number_of_agents',\n    'output',\n    'service_tier',\n    'status',\n    'swarm_name',\n    'swarm_type',\n    'usage'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agents: {
        type: 'array',
        title: 'Agents',
        description: 'A list of agents or specifications that define the agents participating in the swarm.',
        items: {
          $ref: '#/$defs/agent_spec',
        },
      },
      description: {
        type: 'string',
        title: 'Description',
        description:
          "A comprehensive description of the swarm's objectives, capabilities, and intended outcomes.",
      },
      heavy_swarm_loops_per_agent: {
        type: 'integer',
        title: 'Heavy Swarm Loops Per Agent',
        description: 'The number of loops to run per agent in the heavy swarm.',
      },
      heavy_swarm_question_agent_model_name: {
        type: 'string',
        title: 'Heavy Swarm Question Agent Model Name',
        description: 'The model name to use for the question agent in the heavy swarm.',
      },
      heavy_swarm_worker_model_name: {
        type: 'string',
        title: 'Heavy Swarm Worker Model Name',
        description: 'The model name to use for the worker agent in the heavy swarm.',
      },
      img: {
        type: 'string',
        title: 'Img',
        description: "An optional image URL that may be associated with the swarm's task or representation.",
      },
      max_loops: {
        type: 'integer',
        title: 'Max Loops',
        description:
          'The maximum number of execution loops allowed for the swarm, enabling repeated processing if needed.',
      },
      messages: {
        anyOf: [
          {
            type: 'array',
            items: {
              type: 'object',
            },
          },
          {
            type: 'object',
          },
        ],
        title: 'Messages',
        description: 'A list of messages that the swarm should complete.',
      },
      name: {
        type: 'string',
        title: 'Name',
        description:
          'The name of the swarm, which serves as an identifier for the group of agents and their collective task.',
      },
      rearrange_flow: {
        type: 'string',
        title: 'Rearrange Flow',
        description: 'Instructions on how to rearrange the flow of tasks among agents, if applicable.',
      },
      return_history: {
        type: 'boolean',
        title: 'Return History',
        description:
          'A flag indicating whether the swarm should return its execution history along with the final output.',
      },
      rules: {
        type: 'string',
        title: 'Rules',
        description:
          'Guidelines or constraints that govern the behavior and interactions of the agents within the swarm.',
      },
      service_tier: {
        type: 'string',
        title: 'Service Tier',
        description:
          "The service tier to use for processing. Options: 'standard' (default) or 'flex' for lower cost but slower processing.",
      },
      stream: {
        type: 'boolean',
        title: 'Stream',
        description: 'A flag indicating whether the swarm should stream its output.',
      },
      swarm_type: {
        type: 'string',
        title: 'Swarm Type',
        description: 'The classification of the swarm, indicating its operational style and methodology.',
        enum: [
          'AgentRearrange',
          'MixtureOfAgents',
          'SpreadSheetSwarm',
          'SequentialWorkflow',
          'ConcurrentWorkflow',
          'GroupChat',
          'MultiAgentRouter',
          'AutoSwarmBuilder',
          'HiearchicalSwarm',
          'auto',
          'MajorityVoting',
          'MALT',
          'DeepResearchSwarm',
          'CouncilAsAJudge',
          'InteractiveGroupChat',
          'HeavySwarm',
        ],
      },
      task: {
        type: 'string',
        title: 'Task',
        description: 'The specific task or objective that the swarm is designed to accomplish.',
      },
      tasks: {
        type: 'array',
        title: 'Tasks',
        description: 'A list of tasks that the swarm should complete.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      agent_spec: {
        type: 'object',
        title: 'AgentSpec',
        properties: {
          agent_name: {
            type: 'string',
            title: 'Agent Name',
            description:
              'The unique name assigned to the agent, which identifies its role and functionality within the swarm.',
          },
          auto_generate_prompt: {
            type: 'boolean',
            title: 'Auto Generate Prompt',
            description:
              'A flag indicating whether the agent should automatically create prompts based on the task requirements.',
          },
          description: {
            type: 'string',
            title: 'Description',
            description:
              "A detailed explanation of the agent's purpose, capabilities, and any specific tasks it is designed to perform.",
          },
          max_loops: {
            type: 'integer',
            title: 'Max Loops',
            description:
              'The maximum number of times the agent is allowed to repeat its task, enabling iterative processing if necessary.',
          },
          max_tokens: {
            type: 'integer',
            title: 'Max Tokens',
            description:
              'The maximum number of tokens that the agent is allowed to generate in its responses, limiting output length.',
          },
          mcp_url: {
            type: 'string',
            title: 'Mcp Url',
            description: 'The URL of the MCP server that the agent can use to complete its task.',
          },
          model_name: {
            type: 'string',
            title: 'Model Name',
            description:
              'The name of the AI model that the agent will utilize for processing tasks and generating outputs. For example: gpt-4o, gpt-4o-mini, openai/o3-mini',
          },
          role: {
            type: 'string',
            title: 'Role',
            description:
              'The designated role of the agent within the swarm, which influences its behavior and interaction with other agents.',
          },
          streaming_on: {
            type: 'boolean',
            title: 'Streaming On',
            description: 'A flag indicating whether the agent should stream its output.',
          },
          system_prompt: {
            type: 'string',
            title: 'System Prompt',
            description:
              'The initial instruction or context provided to the agent, guiding its behavior and responses during execution.',
          },
          temperature: {
            type: 'number',
            title: 'Temperature',
            description:
              "A parameter that controls the randomness of the agent's output; lower values result in more deterministic responses.",
          },
          tools_list_dictionary: {
            type: 'array',
            title: 'Tools List Dictionary',
            description: 'A dictionary of tools that the agent can use to complete its task.',
            items: {
              type: 'object',
            },
          },
        },
        required: ['agent_name'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.swarms.run(body)));
};

export default { metadata, tool, handler };
