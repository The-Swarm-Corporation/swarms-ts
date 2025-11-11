// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SwarmsClient from 'swarms-ts';

const client = new SwarmsClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.client.advancedResearch.batch.createCompletion({
      input_schemas: [{ config: {}, task: 'task' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.client.advancedResearch.batch.createCompletion({
      input_schemas: [
        {
          config: {
            description: 'description',
            director_agent_name: 'director_agent_name',
            director_max_loops: 0,
            director_max_tokens: 0,
            director_model_name: 'director_model_name',
            exa_search_max_characters: 0,
            exa_search_num_results: 0,
            max_loops: 0,
            name: 'name',
            worker_model_name: 'worker_model_name',
          },
          task: 'task',
          img: 'img',
        },
      ],
    });
  });
});
