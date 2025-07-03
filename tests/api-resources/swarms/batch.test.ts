// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SwarmsClient from 'swarms';

const client = new SwarmsClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // skipped: tests are disabled for the time being
  test.skip('run: only required params', async () => {
    const responsePromise = client.swarms.batch.run({ body: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('run: required and optional params', async () => {
    const response = await client.swarms.batch.run({
      body: [
        {
          agents: [
            {
              agent_name: 'agent_name',
              auto_generate_prompt: true,
              description: 'description',
              max_loops: 0,
              max_tokens: 0,
              mcp_url: 'mcp_url',
              model_name: 'model_name',
              role: 'role',
              streaming_on: true,
              system_prompt: 'system_prompt',
              temperature: 0,
              tools_list_dictionary: [{ foo: 'bar' }],
            },
          ],
          description: 'description',
          img: 'img',
          max_loops: 0,
          messages: [{ foo: 'bar' }],
          name: 'name',
          rearrange_flow: 'rearrange_flow',
          return_history: true,
          rules: 'rules',
          service_tier: 'service_tier',
          stream: true,
          swarm_type: 'AgentRearrange',
          task: 'task',
          tasks: ['string'],
        },
      ],
    });
  });
});
