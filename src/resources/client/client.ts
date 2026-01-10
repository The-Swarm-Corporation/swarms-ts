// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutoSwarmBuilderAPI from './auto-swarm-builder';
import {
  AutoSwarmBuilder,
  AutoSwarmBuilderCreateCompletionParams,
  AutoSwarmBuilderCreateCompletionResponse,
  AutoSwarmBuilderListExecutionTypesResponse,
} from './auto-swarm-builder';
import * as BatchedGridWorkflowAPI from './batched-grid-workflow';
import {
  BatchedGridWorkflow,
  BatchedGridWorkflowCompleteWorkflowParams,
  BatchedGridWorkflowCompleteWorkflowResponse,
} from './batched-grid-workflow';
import * as MarketplaceAPI from './marketplace';
import { Marketplace } from './marketplace';
import * as RateAPI from './rate';
import { Rate, RateGetLimitsResponse, RateLimitWindow } from './rate';
import * as ToolsAPI from './tools';
import { ToolListAvailableResponse, Tools } from './tools';
import * as AdvancedResearchAPI from './advanced-research/advanced-research';
import {
  AdvancedResearch,
  AdvancedResearchCreateCompletionParams,
  AdvancedResearchCreateCompletionResponse,
} from './advanced-research/advanced-research';

export class Client extends APIResource {
  rate: RateAPI.Rate = new RateAPI.Rate(this._client);
  autoSwarmBuilder: AutoSwarmBuilderAPI.AutoSwarmBuilder = new AutoSwarmBuilderAPI.AutoSwarmBuilder(
    this._client,
  );
  advancedResearch: AdvancedResearchAPI.AdvancedResearch = new AdvancedResearchAPI.AdvancedResearch(
    this._client,
  );
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  marketplace: MarketplaceAPI.Marketplace = new MarketplaceAPI.Marketplace(this._client);
  batchedGridWorkflow: BatchedGridWorkflowAPI.BatchedGridWorkflow =
    new BatchedGridWorkflowAPI.BatchedGridWorkflow(this._client);
}

Client.Rate = Rate;
Client.AutoSwarmBuilder = AutoSwarmBuilder;
Client.AdvancedResearch = AdvancedResearch;
Client.Tools = Tools;
Client.Marketplace = Marketplace;
Client.BatchedGridWorkflow = BatchedGridWorkflow;

export declare namespace Client {
  export {
    Rate as Rate,
    type RateLimitWindow as RateLimitWindow,
    type RateGetLimitsResponse as RateGetLimitsResponse,
  };

  export {
    AutoSwarmBuilder as AutoSwarmBuilder,
    type AutoSwarmBuilderCreateCompletionResponse as AutoSwarmBuilderCreateCompletionResponse,
    type AutoSwarmBuilderListExecutionTypesResponse as AutoSwarmBuilderListExecutionTypesResponse,
    type AutoSwarmBuilderCreateCompletionParams as AutoSwarmBuilderCreateCompletionParams,
  };

  export {
    AdvancedResearch as AdvancedResearch,
    type AdvancedResearchCreateCompletionResponse as AdvancedResearchCreateCompletionResponse,
    type AdvancedResearchCreateCompletionParams as AdvancedResearchCreateCompletionParams,
  };

  export { Tools as Tools, type ToolListAvailableResponse as ToolListAvailableResponse };

  export { Marketplace as Marketplace };

  export {
    BatchedGridWorkflow as BatchedGridWorkflow,
    type BatchedGridWorkflowCompleteWorkflowResponse as BatchedGridWorkflowCompleteWorkflowResponse,
    type BatchedGridWorkflowCompleteWorkflowParams as BatchedGridWorkflowCompleteWorkflowParams,
  };
}
