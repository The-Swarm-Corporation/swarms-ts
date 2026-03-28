// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get_root',
    endpoint: '/',
    httpMethod: 'get',
    summary: 'Root',
    description: 'Root',
    stainlessPath: '(resource) $client > (method) get_root',
    qualified: 'client.getRoot',
    response: 'object',
    markdown:
      "## get_root\n\n`client.getRoot(): object`\n\n**get** `/`\n\nRoot\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.getRoot();\n\nconsole.log(response);\n```",
  },
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'Health',
    description: 'Health',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: '{ status?: string; }',
    markdown:
      "## check\n\n`client.health.check(): { status?: string; }`\n\n**get** `/health`\n\nHealth\n\n### Returns\n\n- `{ status?: string; }`\n\n  - `status?: string`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/agents/list',
    httpMethod: 'get',
    summary: 'List Agents',
    description:
      'Get all unique agent configurations that the user has created or used, without task details. Allows users to reuse agent configs with new tasks.',
    stainlessPath: '(resource) agent > (method) list',
    qualified: 'client.agent.list',
    response: 'object',
    markdown:
      "## list\n\n`client.agent.list(): object`\n\n**get** `/v1/agents/list`\n\nGet all unique agent configurations that the user has created or used, without task details. Allows users to reuse agent configs with new tasks.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst agents = await client.agent.list();\n\nconsole.log(agents);\n```",
  },
  {
    name: 'run',
    endpoint: '/v1/agent/completions',
    httpMethod: 'post',
    summary: 'Run Agent',
    description: 'Run an agent with the specified task. Supports streaming when stream=True.',
    stainlessPath: '(resource) agent > (method) run',
    qualified: 'client.agent.run',
    params: [
      'agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; };',
      'history?: object | object[];',
      'img?: string;',
      'imgs?: string[];',
      'task?: string;',
      'tools_enabled?: string[];',
    ],
    response:
      '{ description?: string; job_id?: string; name?: string; outputs?: object; success?: boolean; temperature?: number; timestamp?: string; usage?: object; }',
    markdown:
      "## run\n\n`client.agent.run(agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }, history?: object | object[], img?: string, imgs?: string[], task?: string, tools_enabled?: string[]): { description?: string; job_id?: string; name?: string; outputs?: object; success?: boolean; temperature?: number; timestamp?: string; usage?: object; }`\n\n**post** `/v1/agent/completions`\n\nRun an agent with the specified task. Supports streaming when stream=True.\n\n### Parameters\n\n- `agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }`\n  The configuration of the agent to be completed.\n  - `agent_name: string`\n    The unique name assigned to the agent, which identifies its role and functionality within the swarm.\n  - `auto_generate_prompt?: boolean`\n    A flag indicating whether the agent should automatically create prompts based on the task requirements.\n  - `description?: string`\n    A detailed explanation of the agent's purpose, capabilities, and any specific tasks it is designed to perform.\n  - `dynamic_temperature_enabled?: boolean`\n    A flag indicating whether the agent should dynamically adjust its temperature based on the task.\n  - `llm_args?: object`\n    Additional arguments to pass to the LLM such as top_p, frequency_penalty, presence_penalty, etc.\n  - `max_loops?: number`\n    The maximum number of times the agent is allowed to repeat its task, enabling iterative processing if necessary.\n  - `max_tokens?: number`\n    The maximum number of tokens that the agent is allowed to generate in its responses, limiting output length.\n  - `mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }`\n    The MCP connection to use for the agent.\n  - `mcp_configs?: { connections: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }[]; }`\n    The MCP connections to use for the agent. This is a list of MCP connections. Includes multiple MCP connections.\n  - `mcp_url?: string`\n    The URL of the MCP server that the agent can use to complete its task.\n  - `model_name?: string`\n    The name of the AI model that the agent will utilize for processing tasks and generating outputs. For example: gpt-4o, gpt-4o-mini, openai/o3-mini\n  - `reasoning_effort?: string`\n    The effort to put into reasoning.\n  - `reasoning_enabled?: boolean`\n    A parameter enabling an agent to use reasoning.\n  - `role?: string`\n    The designated role of the agent within the swarm, which influences its behavior and interaction with other agents.\n  - `streaming_on?: boolean`\n    A flag indicating whether the agent should stream its output.\n  - `system_prompt?: string`\n    The initial instruction or context provided to the agent, guiding its behavior and responses during execution.\n  - `temperature?: number`\n    A parameter that controls the randomness of the agent's output; lower values result in more deterministic responses.\n  - `thinking_tokens?: number`\n    The number of tokens to use for thinking.\n  - `tool_call_summary?: boolean`\n    A parameter enabling an agent to summarize tool calls.\n  - `tools_list_dictionary?: object[]`\n    A dictionary of tools that the agent can use to complete its task.\n\n- `history?: object | object[]`\n  The history of the agent's previous tasks and responses. Can be either a dictionary or a list of message objects.\n\n- `img?: string`\n  An optional image URL that may be associated with the agent's task or representation.\n\n- `imgs?: string[]`\n  A list of image URLs that may be associated with the agent's task or representation.\n\n- `task?: string`\n  The task to be completed by the agent.\n\n- `tools_enabled?: string[]`\n  A list of tools that the agent should use to complete its task.\n\n### Returns\n\n- `{ description?: string; job_id?: string; name?: string; outputs?: object; success?: boolean; temperature?: number; timestamp?: string; usage?: object; }`\n\n  - `description?: string`\n  - `job_id?: string`\n  - `name?: string`\n  - `outputs?: object`\n  - `success?: boolean`\n  - `temperature?: number`\n  - `timestamp?: string`\n  - `usage?: object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.agent.run();\n\nconsole.log(response);\n```",
  },
  {
    name: 'run',
    endpoint: '/v1/agent/batch/completions',
    httpMethod: 'post',
    summary: 'Run Agent Batch',
    description: 'Run a batch of agents with the specified tasks using a thread pool.',
    stainlessPath: '(resource) agent.batch > (method) run',
    qualified: 'client.agent.batch.run',
    params: [
      'body: { agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }; history?: object | object[]; img?: string; imgs?: string[]; task?: string; tools_enabled?: string[]; }[];',
    ],
    response:
      '{ batch_id?: string; execution_time?: number; results?: object; timestamp?: string; total_requests?: number; }',
    markdown:
      "## run\n\n`client.agent.batch.run(body: { agent_config?: agent_spec; history?: object | object[]; img?: string; imgs?: string[]; task?: string; tools_enabled?: string[]; }[]): { batch_id?: string; execution_time?: number; results?: object; timestamp?: string; total_requests?: number; }`\n\n**post** `/v1/agent/batch/completions`\n\nRun a batch of agents with the specified tasks using a thread pool.\n\n### Parameters\n\n- `body: { agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }; history?: object | object[]; img?: string; imgs?: string[]; task?: string; tools_enabled?: string[]; }[]`\n\n### Returns\n\n- `{ batch_id?: string; execution_time?: number; results?: object; timestamp?: string; total_requests?: number; }`\n\n  - `batch_id?: string`\n  - `execution_time?: number`\n  - `results?: object`\n  - `timestamp?: string`\n  - `total_requests?: number`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.agent.batch.run({ body: [{}] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_available',
    endpoint: '/v1/models/available',
    httpMethod: 'get',
    summary: 'Get Available Models',
    description: 'Get all available models.',
    stainlessPath: '(resource) models > (method) list_available',
    qualified: 'client.models.listAvailable',
    response: '{ models?: object; success?: boolean; }',
    markdown:
      "## list_available\n\n`client.models.listAvailable(): { models?: object; success?: boolean; }`\n\n**get** `/v1/models/available`\n\nGet all available models.\n\n### Returns\n\n- `{ models?: object; success?: boolean; }`\n\n  - `models?: object`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.models.listAvailable();\n\nconsole.log(response);\n```",
  },
  {
    name: 'check_available',
    endpoint: '/v1/swarms/available',
    httpMethod: 'get',
    summary: 'Check Swarm Types',
    description: 'Check the available swarm types.',
    stainlessPath: '(resource) swarms > (method) check_available',
    qualified: 'client.swarms.checkAvailable',
    response: '{ success?: boolean; swarm_types?: string[]; }',
    markdown:
      "## check_available\n\n`client.swarms.checkAvailable(): { success?: boolean; swarm_types?: string[]; }`\n\n**get** `/v1/swarms/available`\n\nCheck the available swarm types.\n\n### Returns\n\n- `{ success?: boolean; swarm_types?: string[]; }`\n\n  - `success?: boolean`\n  - `swarm_types?: string[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.swarms.checkAvailable();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_logs',
    endpoint: '/v1/swarm/logs',
    httpMethod: 'get',
    summary: 'Get Logs',
    description:
      'Get all API request logs for all API keys associated with the user identified by the provided API key, excluding any logs that contain a client_ip field in their data.',
    stainlessPath: '(resource) swarms > (method) get_logs',
    qualified: 'client.swarms.getLogs',
    response: '{ count?: number; logs?: object; status?: string; timestamp?: string; }',
    markdown:
      "## get_logs\n\n`client.swarms.getLogs(): { count?: number; logs?: object; status?: string; timestamp?: string; }`\n\n**get** `/v1/swarm/logs`\n\nGet all API request logs for all API keys associated with the user identified by the provided API key, excluding any logs that contain a client_ip field in their data.\n\n### Returns\n\n- `{ count?: number; logs?: object; status?: string; timestamp?: string; }`\n\n  - `count?: number`\n  - `logs?: object`\n  - `status?: string`\n  - `timestamp?: string`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.swarms.getLogs();\n\nconsole.log(response);\n```",
  },
  {
    name: 'run',
    endpoint: '/v1/swarm/completions',
    httpMethod: 'post',
    summary: 'Run Swarm',
    description: 'Run a swarm with the specified task. Supports streaming when stream=True.',
    stainlessPath: '(resource) swarms > (method) run',
    qualified: 'client.swarms.run',
    params: [
      'agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[];',
      'description?: string;',
      'heavy_swarm_loops_per_agent?: number;',
      'heavy_swarm_question_agent_model_name?: string;',
      'heavy_swarm_worker_model_name?: string;',
      'img?: string;',
      'max_loops?: number;',
      'messages?: object[] | object;',
      'name?: string;',
      'rearrange_flow?: string;',
      'rules?: string;',
      'service_tier?: string;',
      'stream?: boolean;',
      'swarm_type?: string;',
      'task?: string;',
      'tasks?: string[];',
    ],
    response:
      '{ description: string; execution_time: number; job_id: string; number_of_agents: number; output: object; service_tier: string; status: string; swarm_name: string; swarm_type: string; usage: object; }',
    markdown:
      "## run\n\n`client.swarms.run(agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[], description?: string, heavy_swarm_loops_per_agent?: number, heavy_swarm_question_agent_model_name?: string, heavy_swarm_worker_model_name?: string, img?: string, max_loops?: number, messages?: object[] | object, name?: string, rearrange_flow?: string, rules?: string, service_tier?: string, stream?: boolean, swarm_type?: string, task?: string, tasks?: string[]): { description: string; execution_time: number; job_id: string; number_of_agents: number; output: object; service_tier: string; status: string; swarm_name: string; swarm_type: string; usage: object; }`\n\n**post** `/v1/swarm/completions`\n\nRun a swarm with the specified task. Supports streaming when stream=True.\n\n### Parameters\n\n- `agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]`\n  A list of agents or specifications that define the agents participating in the swarm.\n\n- `description?: string`\n  A comprehensive description of the swarm's objectives, capabilities, and intended outcomes.\n\n- `heavy_swarm_loops_per_agent?: number`\n  The number of loops to run per agent in the heavy swarm.\n\n- `heavy_swarm_question_agent_model_name?: string`\n  The model name to use for the question agent in the heavy swarm.\n\n- `heavy_swarm_worker_model_name?: string`\n  The model name to use for the worker agent in the heavy swarm.\n\n- `img?: string`\n  An optional image URL that may be associated with the swarm's task or representation.\n\n- `max_loops?: number`\n  The maximum number of execution loops allowed for the swarm, enabling repeated processing if needed.\n\n- `messages?: object[] | object`\n  A list of messages that the swarm should complete.\n\n- `name?: string`\n  The name of the swarm, which serves as an identifier for the group of agents and their collective task.\n\n- `rearrange_flow?: string`\n  Instructions on how to rearrange the flow of tasks among agents, if applicable.\n\n- `rules?: string`\n  Guidelines or constraints that govern the behavior and interactions of the agents within the swarm.\n\n- `service_tier?: string`\n  The service tier to use for processing. Options: 'standard' (default) or 'flex' for lower cost but slower processing.\n\n- `stream?: boolean`\n  A flag indicating whether the swarm should stream its output.\n\n- `swarm_type?: string`\n  The classification of the swarm, indicating its operational style and methodology.\n\n- `task?: string`\n  The specific task or objective that the swarm is designed to accomplish.\n\n- `tasks?: string[]`\n  A list of tasks that the swarm should complete.\n\n### Returns\n\n- `{ description: string; execution_time: number; job_id: string; number_of_agents: number; output: object; service_tier: string; status: string; swarm_name: string; swarm_type: string; usage: object; }`\n\n  - `description: string`\n  - `execution_time: number`\n  - `job_id: string`\n  - `number_of_agents: number`\n  - `output: object`\n  - `service_tier: string`\n  - `status: string`\n  - `swarm_name: string`\n  - `swarm_type: string`\n  - `usage: object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.swarms.run();\n\nconsole.log(response);\n```",
  },
  {
    name: 'run',
    endpoint: '/v1/swarm/batch/completions',
    httpMethod: 'post',
    summary: 'Run Batch Completions',
    description: 'Run a batch of swarms with the specified tasks using a thread pool.',
    stainlessPath: '(resource) swarms.batch > (method) run',
    qualified: 'client.swarms.batch.run',
    params: [
      'body: { agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]; description?: string; heavy_swarm_loops_per_agent?: number; heavy_swarm_question_agent_model_name?: string; heavy_swarm_worker_model_name?: string; img?: string; max_loops?: number; messages?: object[] | object; name?: string; rearrange_flow?: string; rules?: string; service_tier?: string; stream?: boolean; swarm_type?: string; task?: string; tasks?: string[]; }[];',
    ],
    response: 'object[]',
    markdown:
      "## run\n\n`client.swarms.batch.run(body: { agents?: agent_spec[]; description?: string; heavy_swarm_loops_per_agent?: number; heavy_swarm_question_agent_model_name?: string; heavy_swarm_worker_model_name?: string; img?: string; max_loops?: number; messages?: object[] | object; name?: string; rearrange_flow?: string; rules?: string; service_tier?: string; stream?: boolean; swarm_type?: string; task?: string; tasks?: string[]; }[]): object[]`\n\n**post** `/v1/swarm/batch/completions`\n\nRun a batch of swarms with the specified tasks using a thread pool.\n\n### Parameters\n\n- `body: { agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]; description?: string; heavy_swarm_loops_per_agent?: number; heavy_swarm_question_agent_model_name?: string; heavy_swarm_worker_model_name?: string; img?: string; max_loops?: number; messages?: object[] | object; name?: string; rearrange_flow?: string; rules?: string; service_tier?: string; stream?: boolean; swarm_type?: string; task?: string; tasks?: string[]; }[]`\n\n### Returns\n\n- `object[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.swarms.batch.run({ body: [{}] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_completion',
    endpoint: '/v1/reasoning-agent/completions',
    httpMethod: 'post',
    summary: 'Run Reasoning Agent Completions',
    description: 'Run a reasoning agent with the specified task.',
    stainlessPath: '(resource) reasoning_agents > (method) create_completion',
    qualified: 'client.reasoningAgents.createCompletion',
    params: [
      'agent_name?: string;',
      'description?: string;',
      'max_loops?: number;',
      'memory_capacity?: number;',
      'model_name?: string;',
      'num_knowledge_items?: number;',
      'num_samples?: number;',
      'output_type?: string;',
      'swarm_type?: string;',
      'system_prompt?: string;',
      'task?: string;',
    ],
    response: 'object',
    markdown:
      "## create_completion\n\n`client.reasoningAgents.createCompletion(agent_name?: string, description?: string, max_loops?: number, memory_capacity?: number, model_name?: string, num_knowledge_items?: number, num_samples?: number, output_type?: string, swarm_type?: string, system_prompt?: string, task?: string): object`\n\n**post** `/v1/reasoning-agent/completions`\n\nRun a reasoning agent with the specified task.\n\n### Parameters\n\n- `agent_name?: string`\n  The unique name assigned to the reasoning agent.\n\n- `description?: string`\n  A detailed explanation of the reasoning agent's purpose and capabilities.\n\n- `max_loops?: number`\n  The maximum number of times the reasoning agent is allowed to repeat its task.\n\n- `memory_capacity?: number`\n  The memory capacity for the reasoning agent.\n\n- `model_name?: string`\n  The name of the AI model that the reasoning agent will utilize.\n\n- `num_knowledge_items?: number`\n  The number of knowledge items to use for the reasoning agent.\n\n- `num_samples?: number`\n  The number of samples to generate for the reasoning agent.\n\n- `output_type?: string`\n  The type of output format for the reasoning agent.\n\n- `swarm_type?: string`\n  The type of reasoning swarm to use (e.g., reasoning duo, self-consistency, IRE).\n\n- `system_prompt?: string`\n  The initial instruction or context provided to the reasoning agent.\n\n- `task?: string`\n  The task to be completed by the reasoning agent.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.reasoningAgents.createCompletion();\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_types',
    endpoint: '/v1/reasoning-agent/types',
    httpMethod: 'get',
    summary: 'Get Reasoning Agent Types',
    description: 'Get the types of reasoning agents available.',
    stainlessPath: '(resource) reasoning_agents > (method) list_types',
    qualified: 'client.reasoningAgents.listTypes',
    response: 'object',
    markdown:
      "## list_types\n\n`client.reasoningAgents.listTypes(): object`\n\n**get** `/v1/reasoning-agent/types`\n\nGet the types of reasoning agents available.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.reasoningAgents.listTypes();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_limits',
    endpoint: '/v1/rate/limits',
    httpMethod: 'get',
    summary: 'Get Rate Limits',
    description: 'Get the rate limits and current usage for the user associated with the provided API key.',
    stainlessPath: '(resource) client.rate > (method) get_limits',
    qualified: 'client.client.rate.getLimits',
    response:
      '{ limits: { maximum_requests_per_day: number; maximum_requests_per_hour: number; maximum_requests_per_minute: number; tokens_per_agent: number; }; rate_limits: { day: object; hour: object; minute: object; }; tier: string; timestamp: string; success?: boolean; }',
    markdown:
      "## get_limits\n\n`client.client.rate.getLimits(): { limits: object; rate_limits: object; tier: string; timestamp: string; success?: boolean; }`\n\n**get** `/v1/rate/limits`\n\nGet the rate limits and current usage for the user associated with the provided API key.\n\n### Returns\n\n- `{ limits: { maximum_requests_per_day: number; maximum_requests_per_hour: number; maximum_requests_per_minute: number; tokens_per_agent: number; }; rate_limits: { day: object; hour: object; minute: object; }; tier: string; timestamp: string; success?: boolean; }`\n\n  - `limits: { maximum_requests_per_day: number; maximum_requests_per_hour: number; maximum_requests_per_minute: number; tokens_per_agent: number; }`\n  - `rate_limits: { day: { count: number; exceeded: boolean; limit: number; remaining: number; reset_time: string; }; hour: { count: number; exceeded: boolean; limit: number; remaining: number; reset_time: string; }; minute: { count: number; exceeded: boolean; limit: number; remaining: number; reset_time: string; }; }`\n  - `tier: string`\n  - `timestamp: string`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.rate.getLimits();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_completion',
    endpoint: '/v1/auto-swarm-builder/completions',
    httpMethod: 'post',
    summary: 'Auto-Generate Agent Swarm',
    description:
      'Generate and orchestrate agent swarms autonomously using AI-powered swarm composition and task decomposition.',
    stainlessPath: '(resource) client.auto_swarm_builder > (method) create_completion',
    qualified: 'client.client.autoSwarmBuilder.createCompletion',
    params: [
      'description?: string;',
      "execution_type?: 'return-agents' | 'return-swarm-router-config' | 'return-agents-objects';",
      'max_loops?: number;',
      'max_tokens?: number;',
      'model_name?: string;',
      'name?: string;',
      'task?: string;',
    ],
    response:
      '{ success: boolean; job_id?: string; outputs?: object; timestamp?: string; type?: string; usage?: object; }',
    markdown:
      "## create_completion\n\n`client.client.autoSwarmBuilder.createCompletion(description?: string, execution_type?: 'return-agents' | 'return-swarm-router-config' | 'return-agents-objects', max_loops?: number, max_tokens?: number, model_name?: string, name?: string, task?: string): { success: boolean; job_id?: string; outputs?: object; timestamp?: string; type?: string; usage?: object; }`\n\n**post** `/v1/auto-swarm-builder/completions`\n\nGenerate and orchestrate agent swarms autonomously using AI-powered swarm composition and task decomposition.\n\n### Parameters\n\n- `description?: string`\n  A description of the swarm.\n\n- `execution_type?: 'return-agents' | 'return-swarm-router-config' | 'return-agents-objects'`\n  The type of execution to perform.\n\n- `max_loops?: number`\n  Maximum number of loops to run.\n\n- `max_tokens?: number`\n  The maximum number of tokens to use for the swarm.\n\n- `model_name?: string`\n  The model name to use for the swarm.\n\n- `name?: string`\n  The name of the swarm.\n\n- `task?: string`\n  The task for the swarm, if any.\n\n### Returns\n\n- `{ success: boolean; job_id?: string; outputs?: object; timestamp?: string; type?: string; usage?: object; }`\n  Schema for the Auto Swarm Builder API response.\n\nAttributes:\n    success (bool): Whether the swarm was built successfully.\n    job_id (Optional[str]): The job ID of the swarm.\n    outputs (Optional[dict]): The outputs of the auto swarms builder.\n    type (Optional[str]): The type of the swarm execution.\n    timestamp (Optional[str]): The timestamp of the swarm execution.\n    usage (Optional[dict]): The usage statistics of the swarm execution.\n\n  - `success: boolean`\n  - `job_id?: string`\n  - `outputs?: object`\n  - `timestamp?: string`\n  - `type?: string`\n  - `usage?: object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.autoSwarmBuilder.createCompletion();\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_execution_types',
    endpoint: '/v1/auto-swarm-builder/execution-types',
    httpMethod: 'get',
    summary: 'Get Auto Swarm Builder Execution Types',
    description:
      'Retrieve all available execution types and return formats for the Auto Swarm Builder endpoint.',
    stainlessPath: '(resource) client.auto_swarm_builder > (method) list_execution_types',
    qualified: 'client.client.autoSwarmBuilder.listExecutionTypes',
    response: 'string[]',
    markdown:
      "## list_execution_types\n\n`client.client.autoSwarmBuilder.listExecutionTypes(): string[]`\n\n**get** `/v1/auto-swarm-builder/execution-types`\n\nRetrieve all available execution types and return formats for the Auto Swarm Builder endpoint.\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.autoSwarmBuilder.listExecutionTypes();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_completion',
    endpoint: '/v1/advanced-research/completions',
    httpMethod: 'post',
    summary: 'Execute Advanced Research Session',
    description:
      'Execute comprehensive research sessions with multi-source data collection, analysis, and synthesis capabilities.',
    stainlessPath: '(resource) client.advanced_research > (method) create_completion',
    qualified: 'client.client.advancedResearch.createCompletion',
    params: [
      'config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; };',
      'task: string;',
      'img?: string;',
    ],
    response:
      '{ id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }',
    markdown:
      "## create_completion\n\n`client.client.advancedResearch.createCompletion(config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }, task: string, img?: string): { id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }`\n\n**post** `/v1/advanced-research/completions`\n\nExecute comprehensive research sessions with multi-source data collection, analysis, and synthesis capabilities.\n\n### Parameters\n\n- `config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }`\n  The configuration for the advanced research\n  - `description?: string`\n    Description of the advanced research session\n  - `director_agent_name?: string`\n    Name of the director agent\n  - `director_max_loops?: number`\n    Maximum loops for the director agent\n  - `director_max_tokens?: number`\n    Maximum tokens for the director agent's output\n  - `director_model_name?: string`\n    Model name for the director agent\n  - `exa_search_max_characters?: number`\n    Maximum characters to return from the Exa search tool\n  - `exa_search_num_results?: number`\n    Number of results to return from the Exa search tool\n  - `max_loops?: number`\n    Number of research loops to run\n  - `name?: string`\n    Name of the advanced research session\n  - `worker_model_name?: string`\n    Model name for worker agents\n\n- `task: string`\n  The task to be completed\n\n- `img?: string`\n  The image to be used for the advanced research\n\n### Returns\n\n- `{ id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }`\n\n  - `id: string`\n  - `characters_per_source: number`\n  - `description: string`\n  - `name: string`\n  - `outputs: object`\n  - `sources: number`\n  - `timestamp: string`\n  - `usage: object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.advancedResearch.createCompletion({\n  config: {},\n  task: 'task',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_completion',
    endpoint: '/v1/advanced-research/batch/completions',
    httpMethod: 'post',
    summary: 'Execute Batch of Research Sessions',
    description:
      'Execute multiple advanced research sessions concurrently with independent configurations for high-throughput research workflows.',
    stainlessPath: '(resource) client.advanced_research.batch > (method) create_completion',
    qualified: 'client.client.advancedResearch.batch.createCompletion',
    params: [
      'input_schemas: { config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }; task: string; img?: string; }[];',
    ],
    response:
      '{ id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }[]',
    markdown:
      "## create_completion\n\n`client.client.advancedResearch.batch.createCompletion(input_schemas: { config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }; task: string; img?: string; }[]): { id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }[]`\n\n**post** `/v1/advanced-research/batch/completions`\n\nExecute multiple advanced research sessions concurrently with independent configurations for high-throughput research workflows.\n\n### Parameters\n\n- `input_schemas: { config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }; task: string; img?: string; }[]`\n  The input schemas for the advanced research\n\n### Returns\n\n- `{ id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.advancedResearch.batch.createCompletion({ input_schemas: [{\n  config: {},\n  task: 'task',\n}] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_available',
    endpoint: '/v1/tools/available',
    httpMethod: 'get',
    summary: 'Get Available API Tools',
    description:
      'Retrieve comprehensive information about all available tools and capabilities supported by the Swarms API.',
    stainlessPath: '(resource) client.tools > (method) list_available',
    qualified: 'client.client.tools.listAvailable',
    response: '{ status?: string; tools?: string[]; }',
    markdown:
      "## list_available\n\n`client.client.tools.listAvailable(): { status?: string; tools?: string[]; }`\n\n**get** `/v1/tools/available`\n\nRetrieve comprehensive information about all available tools and capabilities supported by the Swarms API.\n\n### Returns\n\n- `{ status?: string; tools?: string[]; }`\n\n  - `status?: string`\n  - `tools?: string[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.tools.listAvailable();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_agent',
    endpoint: '/v1/marketplace/agents',
    httpMethod: 'post',
    summary: 'Get Marketplace Agents',
    description: 'Retrieve free agents from the marketplace.',
    stainlessPath: '(resource) client.marketplace > (method) create_agent',
    qualified: 'client.client.marketplace.createAgent',
    params: ['number_of_items?: number;'],
    response:
      '{ prompts: { id: string; created_at: string; user_id: string; category?: string | string[]; description?: string; links?: object[] | string[]; name?: string; prompt?: string; status?: string; tags?: string; use_cases?: object | object[]; }[]; total_count: number; status?: string; timestamp?: string; }',
    markdown:
      "## create_agent\n\n`client.client.marketplace.createAgent(number_of_items?: number): { prompts: object[]; total_count: number; status?: string; timestamp?: string; }`\n\n**post** `/v1/marketplace/agents`\n\nRetrieve free agents from the marketplace.\n\n### Parameters\n\n- `number_of_items?: number`\n  Number of items to return\n\n### Returns\n\n- `{ prompts: { id: string; created_at: string; user_id: string; category?: string | string[]; description?: string; links?: object[] | string[]; name?: string; prompt?: string; status?: string; tags?: string; use_cases?: object | object[]; }[]; total_count: number; status?: string; timestamp?: string; }`\n  Response schema for marketplace prompts endpoint.\n\n  - `prompts: { id: string; created_at: string; user_id: string; category?: string | string[]; description?: string; links?: object[] | string[]; name?: string; prompt?: string; status?: string; tags?: string; use_cases?: object | object[]; }[]`\n  - `total_count: number`\n  - `status?: string`\n  - `timestamp?: string`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.marketplace.createAgent();\n\nconsole.log(response);\n```",
  },
  {
    name: 'complete_workflow',
    endpoint: '/v1/batched-grid-workflow/completions',
    httpMethod: 'post',
    summary: 'Complete Batched Grid Workflow',
    description:
      'Complete a batched grid workflow with the specified input data. Enables you to run a grid workflow with multiple agents and tasks in a single request.',
    stainlessPath: '(resource) client.batched_grid_workflow > (method) complete_workflow',
    qualified: 'client.client.batchedGridWorkflow.completeWorkflow',
    params: [
      'agent_completions?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[];',
      'description?: string;',
      'imgs?: string[];',
      'max_loops?: number;',
      'name?: string;',
      'tasks?: string[];',
    ],
    response:
      '{ description: string; job_id: string; name: string; outputs: object; status: string; timestamp: string; usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }; }',
    markdown:
      "## complete_workflow\n\n`client.client.batchedGridWorkflow.completeWorkflow(agent_completions?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[], description?: string, imgs?: string[], max_loops?: number, name?: string, tasks?: string[]): { description: string; job_id: string; name: string; outputs: object; status: string; timestamp: string; usage: object; }`\n\n**post** `/v1/batched-grid-workflow/completions`\n\nComplete a batched grid workflow with the specified input data. Enables you to run a grid workflow with multiple agents and tasks in a single request.\n\n### Parameters\n\n- `agent_completions?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]`\n  The agent completions to be completed by the batched grid workflow.\n\n- `description?: string`\n  The description of the batched grid workflow.\n\n- `imgs?: string[]`\n  The images to be used by the batched grid workflow.\n\n- `max_loops?: number`\n  The maximum number of loops to be completed by the batched grid workflow.\n\n- `name?: string`\n  The name of the batched grid workflow.\n\n- `tasks?: string[]`\n  The tasks to be completed by the batched grid workflow.\n\n### Returns\n\n- `{ description: string; job_id: string; name: string; outputs: object; status: string; timestamp: string; usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }; }`\n\n  - `description: string`\n  - `job_id: string`\n  - `name: string`\n  - `outputs: object`\n  - `status: string`\n  - `timestamp: string`\n  - `usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.batchedGridWorkflow.completeWorkflow();\n\nconsole.log(response);\n```",
  },
  {
    name: 'execute_workflow',
    endpoint: '/v1/graph-workflow/completions',
    httpMethod: 'post',
    summary: 'Execute Graph Workflow',
    description:
      'Execute a graph workflow with directed agent nodes and edges. Enables complex multi-agent collaboration with parallel execution, automatic compilation, and comprehensive workflow orchestration.',
    stainlessPath: '(resource) client.graph_workflow > (method) execute_workflow',
    qualified: 'client.client.graphWorkflow.executeWorkflow',
    params: [
      'agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[];',
      'auto_compile?: boolean;',
      'description?: string;',
      'edges?: { source: string; target: string; metadata?: object; } | object[];',
      'end_points?: string[];',
      'entry_points?: string[];',
      'img?: string;',
      'max_loops?: number;',
      'name?: string;',
      'task?: string;',
      'verbose?: boolean;',
    ],
    response:
      '{ job_id: string; outputs: object; status: string; timestamp: string; usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }; description?: string; name?: string; }',
    markdown:
      "## execute_workflow\n\n`client.client.graphWorkflow.executeWorkflow(agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[], auto_compile?: boolean, description?: string, edges?: { source: string; target: string; metadata?: object; } | object[], end_points?: string[], entry_points?: string[], img?: string, max_loops?: number, name?: string, task?: string, verbose?: boolean): { job_id: string; outputs: object; status: string; timestamp: string; usage: object; description?: string; name?: string; }`\n\n**post** `/v1/graph-workflow/completions`\n\nExecute a graph workflow with directed agent nodes and edges. Enables complex multi-agent collaboration with parallel execution, automatic compilation, and comprehensive workflow orchestration.\n\n### Parameters\n\n- `agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]`\n  List of agent specifications to be used as nodes in the workflow graph.\n\n- `auto_compile?: boolean`\n  Whether to automatically compile the workflow for optimization.\n\n- `description?: string`\n  The description of the graph workflow.\n\n- `edges?: { source: string; target: string; metadata?: object; } | object[]`\n  List of edges connecting nodes. Can be EdgeSpec objects or dictionaries with 'source' and 'target' keys.\n\n- `end_points?: string[]`\n  List of node IDs that serve as ending points for the workflow.\n\n- `entry_points?: string[]`\n  List of node IDs that serve as starting points for the workflow.\n\n- `img?: string`\n  Optional image path for vision-enabled agents.\n\n- `max_loops?: number`\n  The maximum number of execution loops for the workflow.\n\n- `name?: string`\n  The name of the graph workflow.\n\n- `task?: string`\n  The task to be executed by the workflow.\n\n- `verbose?: boolean`\n  Whether to enable detailed logging.\n\n### Returns\n\n- `{ job_id: string; outputs: object; status: string; timestamp: string; usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }; description?: string; name?: string; }`\n  Output schema for GraphWorkflow completion responses.\n\n  - `job_id: string`\n  - `outputs: object`\n  - `status: string`\n  - `timestamp: string`\n  - `usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }`\n  - `description?: string`\n  - `name?: string`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.graphWorkflow.executeWorkflow();\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
