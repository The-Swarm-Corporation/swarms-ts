# Changelog

## 0.1.0-alpha.34 (2026-02-14)

Full Changelog: [v0.1.0-alpha.33...v0.1.0-alpha.34](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.33...v0.1.0-alpha.34)

### Features

* **mcp:** add initial server instructions ([de11a14](https://github.com/The-Swarm-Corporation/swarms-ts/commit/de11a149cda979160238d04a2974e29501d9cedb))


### Bug Fixes

* **client:** avoid removing abort listener too early ([489bcf3](https://github.com/The-Swarm-Corporation/swarms-ts/commit/489bcf39ccf8b60460afa1486c4b2e4eff34d730))


### Chores

* **client:** restructure abort controller binding ([6848c8d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/6848c8d90813a713e1d400dcdd28247a4e7d3589))
* **internal:** add health check to MCP server when running in HTTP mode ([2324f75](https://github.com/The-Swarm-Corporation/swarms-ts/commit/2324f75b221b0ff396c32c8b4ee8c548e77d5a9c))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([1198eb5](https://github.com/The-Swarm-Corporation/swarms-ts/commit/1198eb52b96f5bd0e930d00e20dc464169932ee4))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([5c76cdf](https://github.com/The-Swarm-Corporation/swarms-ts/commit/5c76cdf88f16fc1cd8f47b01b2f7f7d83b077602))
* **internal:** avoid type checking errors with ts-reset ([d0be2c7](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d0be2c7448cfcc3bcdd2064e977ef2d0cb13bb17))
* **internal:** improve layout of generated MCP server files ([e9d66ff](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e9d66ff9f68bbcc1891d2d73cdccf37285acb5ac))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([fe01dd1](https://github.com/The-Swarm-Corporation/swarms-ts/commit/fe01dd137602088d5804be88a619b68857ba535e))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([274aa94](https://github.com/The-Swarm-Corporation/swarms-ts/commit/274aa94ca377a5cb41857d1478d00a017f05131e))

## 0.1.0-alpha.33 (2026-02-03)

Full Changelog: [v0.1.0-alpha.32...v0.1.0-alpha.33](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.32...v0.1.0-alpha.33)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([50897c2](https://github.com/The-Swarm-Corporation/swarms-ts/commit/50897c2e2710d3050d4da501225528459c951397))


### Chores

* **client:** do not parse responses with empty content-length ([dcfe07d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/dcfe07d9db4605418799c6ac73bc7ab5eb301ce3))
* **internal:** support oauth authorization code flow for MCP servers ([84da563](https://github.com/The-Swarm-Corporation/swarms-ts/commit/84da563ee1dc748a9e7ba8de177b9cd9345f049a))

## 0.1.0-alpha.32 (2026-01-31)

Full Changelog: [v0.1.0-alpha.31...v0.1.0-alpha.32](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.31...v0.1.0-alpha.32)

### Bug Fixes

* **docs:** fix mcp installation instructions for remote servers ([bd64f10](https://github.com/The-Swarm-Corporation/swarms-ts/commit/bd64f10bd631d7213b9a1aa206e9272e808741bc))
* **mcp:** allow falling back for required env variables ([c2fb06e](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c2fb06e3ab3009fac4f7243147c498e6987adb41))
* **mcp:** do not fallback on baseUrl if environment env variable is set ([009decd](https://github.com/The-Swarm-Corporation/swarms-ts/commit/009decdb9f224fb7d7f250026ad94e9366736363))


### Chores

* **ci:** upgrade `actions/github-script` ([9bc2abf](https://github.com/The-Swarm-Corporation/swarms-ts/commit/9bc2abf355f00fbaab132b1871a044c6da17e2c9))
* **internal:** codegen related update ([f31664a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/f31664aefe2c472febf5d272d26ab81c55568d76))
* **internal:** update lock file ([ba2e7fa](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ba2e7faf0f5ac6ca70f77d7794477f6e1f9ea58b))
* **mcp:** up tsconfig lib version to es2022 ([90608b1](https://github.com/The-Swarm-Corporation/swarms-ts/commit/90608b1bafed5e1303da6f2e4313272123ec15a2))

## 0.1.0-alpha.31 (2026-01-17)

Full Changelog: [v0.1.0-alpha.30...v0.1.0-alpha.31](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.30...v0.1.0-alpha.31)

### Chores

* **internal:** update `actions/checkout` version ([0da5f89](https://github.com/The-Swarm-Corporation/swarms-ts/commit/0da5f8968260eed512ad38af9ca609c9bcd5ae94))

## 0.1.0-alpha.30 (2026-01-15)

Full Changelog: [v0.1.0-alpha.29...v0.1.0-alpha.30](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.29...v0.1.0-alpha.30)

### Chores

* **internal:** codegen related update ([bc889f0](https://github.com/The-Swarm-Corporation/swarms-ts/commit/bc889f0ba5db2a1e3002cd9abca9da00ef68a034))
* **internal:** codegen related update ([0db45b9](https://github.com/The-Swarm-Corporation/swarms-ts/commit/0db45b9d2ee6fe5bf81b621a58eaec1169bd3421))
* **internal:** codegen related update ([dbf176e](https://github.com/The-Swarm-Corporation/swarms-ts/commit/dbf176e7ffaf4b21fc2c13805d95a49421d155ea))
* **internal:** codegen related update ([c9ccb22](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c9ccb223aa0c5baa2fb50456ea61699a88c6a10e))
* **internal:** upgrade babel, qs, js-yaml ([2e2f0d8](https://github.com/The-Swarm-Corporation/swarms-ts/commit/2e2f0d869d9f8b4c07f4387d7d5f61daf755c6c7))
* **mcp:** add intent param to execute tool ([e1c067c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e1c067cab63b405c3851f16c2de49e5adf05e768))
* **mcp:** pass intent param to execute handler ([dfeba6a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/dfeba6ab7af10d044f83d33d624254b2b64ff470))
* **mcp:** upgrade dependencies ([bf220b8](https://github.com/The-Swarm-Corporation/swarms-ts/commit/bf220b8e4c32e8f917e0e642b9608e7e78ff5295))

## 0.1.0-alpha.29 (2026-01-10)

Full Changelog: [v0.1.0-alpha.28...v0.1.0-alpha.29](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.28...v0.1.0-alpha.29)

### Features

* **api:** manual updates ([19d9029](https://github.com/The-Swarm-Corporation/swarms-ts/commit/19d90297994291e40a2e03412f3c2f6c3fe7de48))
* **api:** manual updates ([977d931](https://github.com/The-Swarm-Corporation/swarms-ts/commit/977d93182084833833af7de6e293c640889530c2))

## 0.1.0-alpha.28 (2026-01-10)

Full Changelog: [v0.1.0-alpha.27...v0.1.0-alpha.28](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.27...v0.1.0-alpha.28)

### Chores

* **internal:** configure MCP Server hosting ([0f8d6e8](https://github.com/The-Swarm-Corporation/swarms-ts/commit/0f8d6e8a3ed3c6476c0bcea46396d7e0ffd0579f))

## 0.1.0-alpha.27 (2026-01-09)

Full Changelog: [v0.1.0-alpha.26...v0.1.0-alpha.27](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.26...v0.1.0-alpha.27)

### Bug Fixes

* **mcp:** correct code tool api output types ([57fd661](https://github.com/The-Swarm-Corporation/swarms-ts/commit/57fd661ba9e4d5f8994694862ddb54f0f43a88dd))
* **mcp:** fix options parsing ([28a7b62](https://github.com/The-Swarm-Corporation/swarms-ts/commit/28a7b62cf625b65d39415dbcc729cfa068ed50ed))
* **mcp:** update code tool prompt ([f7bcbe1](https://github.com/The-Swarm-Corporation/swarms-ts/commit/f7bcbe1b845d0fb2038c5a8c556b947d2f011e7f))


### Chores

* break long lines in snippets into multiline ([587ab3a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/587ab3a49595d9505bb4f9481cd3af3a1982f5a9))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([a79764f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/a79764fc41fb04e5b9031e9e76d410d0cf6ac5c4))

## 0.1.0-alpha.26 (2025-12-19)

Full Changelog: [v0.1.0-alpha.25...v0.1.0-alpha.26](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.25...v0.1.0-alpha.26)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** api update ([bbe24b1](https://github.com/The-Swarm-Corporation/swarms-ts/commit/bbe24b1298319560358af43d591d7058d2804ec1))
* **api:** api update ([cd544e2](https://github.com/The-Swarm-Corporation/swarms-ts/commit/cd544e2f43936f5a6e276aec638d29a36734fa2e))
* **api:** api update ([9c74447](https://github.com/The-Swarm-Corporation/swarms-ts/commit/9c744479bb5d9ca9e1baeb32bed43eb528c5d067))
* **mcp:** add detail field to docs search tool ([40d224f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/40d224fa5dd1d5b214fa64a3a5c0d1d8afd1240d))
* **mcp:** add typescript check to code execution tool ([4cc4764](https://github.com/The-Swarm-Corporation/swarms-ts/commit/4cc4764b1cda04fd91a007c23b88f23442e5d630))
* **mcp:** handle code mode calls in the Stainless API ([a4745f7](https://github.com/The-Swarm-Corporation/swarms-ts/commit/a4745f720ac3f900115e3fe9279094c44af394ee))
* **mcp:** return logs on code tool errors ([24f00d7](https://github.com/The-Swarm-Corporation/swarms-ts/commit/24f00d7b8ab6faa659124d278ffa1a41513b7536))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([0997665](https://github.com/The-Swarm-Corporation/swarms-ts/commit/09976658c735a400970f7e373fbc233c870ef075))
* **mcp:** correct code tool API endpoint ([560414e](https://github.com/The-Swarm-Corporation/swarms-ts/commit/560414e021ac9a151f7d132f5a1accf96c901ea5))
* **mcp:** pass base url to code tool ([58aaa2b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/58aaa2bcd683c0b10c1aeb61ff2df77135f91466))
* **mcp:** return correct lines on typescript errors ([e3caf34](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e3caf34714d818ce6cb74d847f5bab7222c4fe52))
* **mcp:** return tool execution error on api error ([5fa89a5](https://github.com/The-Swarm-Corporation/swarms-ts/commit/5fa89a5b0c177ce94781239dcc88bfcf2f46cc5a))
* **mcp:** return tool execution error on jq failure ([b7ae080](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b7ae08081606c28a6a77d036067d233a66ec7d33))


### Chores

* **client:** fix logger property type ([d01341c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d01341c7b24f6c108a6080c1b454733c0f268caa))
* **internal:** codegen related update ([28d09b2](https://github.com/The-Swarm-Corporation/swarms-ts/commit/28d09b2fcd3f4e1414714a9ebe396122d4baf084))
* **internal:** codegen related update ([20c19fc](https://github.com/The-Swarm-Corporation/swarms-ts/commit/20c19fc1c086878fc010d199b75d0d7cd6eff054))
* **internal:** upgrade eslint ([7687527](https://github.com/The-Swarm-Corporation/swarms-ts/commit/7687527a48675a0f8ec6798b2286e40be44a9c9c))
* **mcp:** remove deprecated tool schemes ([a30114c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/a30114ced923d511e6be029f517b98d03152967e))
* **mcp:** update lockfile ([5ba212b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/5ba212bf1780ef65a7feef519d1831b70ce90122))
* **mcp:** upgrade jq-web ([bc3159d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/bc3159dd6864baceaa268992bc37b1680999e120))
* use latest @modelcontextprotocol/sdk ([4900793](https://github.com/The-Swarm-Corporation/swarms-ts/commit/4900793f22a7b645f62c8701421ee0c6acb2e034))

## 0.1.0-alpha.25 (2025-11-11)

Full Changelog: [v0.1.0-alpha.24...v0.1.0-alpha.25](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.24...v0.1.0-alpha.25)

### Features

* **api:** manual updates ([be12330](https://github.com/The-Swarm-Corporation/swarms-ts/commit/be1233077074eb81fe55a22c485abeaede5178f0))

## 0.1.0-alpha.24 (2025-11-11)

Full Changelog: [v0.1.0-alpha.23...v0.1.0-alpha.24](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.23...v0.1.0-alpha.24)

### Features

* **api:** manual updates to stainless config ([227a187](https://github.com/The-Swarm-Corporation/swarms-ts/commit/227a1870467f49b6add897b752c21103533c1070))

## 0.1.0-alpha.23 (2025-11-10)

Full Changelog: [v0.1.0-alpha.22...v0.1.0-alpha.23](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.22...v0.1.0-alpha.23)

### Features

* **mcp:** enable optional code execution tool on http mcp servers ([ffdc755](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ffdc755733f06731b4e51d327851140839ed1332))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([a0d9be7](https://github.com/The-Swarm-Corporation/swarms-ts/commit/a0d9be7898604b68f16ba584faa295a387c7a414))


### Chores

* **internal:** codegen related update ([c855e6d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c855e6d5a9daf2daf598c498cce1977ec9e514e8))
* **internal:** codegen related update ([8884acc](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8884acc712540a12cce58806fd00143c5e9b5754))
* **internal:** grammar fix (it's -&gt; its) ([eebf853](https://github.com/The-Swarm-Corporation/swarms-ts/commit/eebf85349daeb159caebcec0b8a7335d6a5e60dd))
* mcp code tool explicit error message when missing a run function ([b73f155](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b73f15525388bfd58f8134b3264c895df6de3058))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([6f59e26](https://github.com/The-Swarm-Corporation/swarms-ts/commit/6f59e262b94ca7567ff4d0da4b1d8993952d0111))
* **mcp:** add line numbers to code tool errors ([411d27f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/411d27f2bcbe2e9c73d91ce6287fb98ce537723f))
* use structured error when code execution tool errors ([2ae090d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/2ae090d461bf2597c24c4c8fd4867d7c16c42756))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([3df8fff](https://github.com/The-Swarm-Corporation/swarms-ts/commit/3df8fff5575169d0e284f61bda4ee4aa1873b80a))
* **mcp:** add a README link to add server to VS Code or Claude Code ([dcb86a5](https://github.com/The-Swarm-Corporation/swarms-ts/commit/dcb86a5b53b62830d6345c6960a0bb73a7842407))

## 0.1.0-alpha.22 (2025-10-21)

Full Changelog: [v0.1.0-alpha.21...v0.1.0-alpha.22](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.21...v0.1.0-alpha.22)

### Features

* **api:** api update ([72b4d2d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/72b4d2d9273ab6a68bf875419df5d308b5601cce))


### Chores

* extract some types in mcp docs ([e3c0e41](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e3c0e41c6beaea55f16a7e9de451ac8515cd00e9))
* **internal:** use npm pack for build uploads ([e73802c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e73802ca8c9a0951b2ce40b7c80c3b663e96d422))

## 0.1.0-alpha.21 (2025-10-04)

Full Changelog: [v0.1.0-alpha.20...v0.1.0-alpha.21](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.20...v0.1.0-alpha.21)

### Bug Fixes

* **mcp:** fix cli argument parsing logic ([7fb25a1](https://github.com/The-Swarm-Corporation/swarms-ts/commit/7fb25a191dbcb886eb7f28927d92475aeb697fe3))
* **mcp:** resolve a linting issue in server code ([a9a6a06](https://github.com/The-Swarm-Corporation/swarms-ts/commit/a9a6a0683f29798464b48f4b909170b2d5109908))


### Chores

* **internal:** codegen related update ([78f92e5](https://github.com/The-Swarm-Corporation/swarms-ts/commit/78f92e55ea8af4e093b9064417b5cf472282ac8f))
* **internal:** fix incremental formatting in some cases ([c786bde](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c786bde35586b2905046dcc4b23c93b5bbad171c))
* **internal:** ignore .eslintcache ([16c6615](https://github.com/The-Swarm-Corporation/swarms-ts/commit/16c66150ef3a09ec96e74bea74531d8d725f8c94))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([5097275](https://github.com/The-Swarm-Corporation/swarms-ts/commit/509727551960275f9ef38495b1fb1d8b4c577f8a))
* **mcp:** allow pointing `docs_search` tool at other URLs ([395e6f5](https://github.com/The-Swarm-Corporation/swarms-ts/commit/395e6f57e5b24adbf6edbcd8ae1c4b9c938f7bc6))
* update lockfile ([76538f5](https://github.com/The-Swarm-Corporation/swarms-ts/commit/76538f59c205d0da64bfec5f16fa81e0e075ac0d))

## 0.1.0-alpha.20 (2025-09-27)

Full Changelog: [v0.1.0-alpha.19...v0.1.0-alpha.20](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.19...v0.1.0-alpha.20)

### Features

* **mcp:** add docs search tool ([81f1f9e](https://github.com/The-Swarm-Corporation/swarms-ts/commit/81f1f9ec92c8578efda61274947f2c878b8afb30))
* **mcp:** add option for including docs tools ([3efcce0](https://github.com/The-Swarm-Corporation/swarms-ts/commit/3efcce04d641a7e1628311ac8466094dfffd08bc))
* **mcp:** enable experimental docs search tool ([008b5f7](https://github.com/The-Swarm-Corporation/swarms-ts/commit/008b5f7466296d0d09a4da13215955309d4d3fa1))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([5443a74](https://github.com/The-Swarm-Corporation/swarms-ts/commit/5443a74cb3de11241011bae1a8137f91438a6a73))
* coerce nullable values to undefined ([a753115](https://github.com/The-Swarm-Corporation/swarms-ts/commit/a753115fe4b3376e4fdf9c2bd10147f5b7be242a))
* **mcp:** fix uploading dxt release assets ([62e102e](https://github.com/The-Swarm-Corporation/swarms-ts/commit/62e102e7620b6b71186e226ec7bbaca40d687c80))


### Performance Improvements

* faster formatting ([8a472ed](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8a472edb6bc4240a087b023767e679e809916575))


### Chores

* **codegen:** internal codegen update ([e186555](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e18655505e2c3e9350f6b1347582947bc13c0112))
* do not install brew dependencies in ./scripts/bootstrap by default ([345e57b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/345e57bc9c0babe15a8198fd477dfd0bcc42eee5))
* **internal:** gitignore .mcpb files ([68eed9e](https://github.com/The-Swarm-Corporation/swarms-ts/commit/68eed9eea6e495c5d2c5059c3aae00c6f3eec32b))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([84a1a8f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/84a1a8f0de45732f72a44820f5bb8ff75b4ea431))
* **mcp:** rename dxt to mcpb ([4365973](https://github.com/The-Swarm-Corporation/swarms-ts/commit/43659734052f3ed0653bc0ea987d114cc4307dbf))
* **mcp:** upload dxt as release asset ([e0028f9](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e0028f97d8307819e4a01880e1a0b4def05cd66d))

## 0.1.0-alpha.19 (2025-09-06)

Full Changelog: [v0.1.0-alpha.18...v0.1.0-alpha.19](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.18...v0.1.0-alpha.19)

### Bug Fixes

* **mcp:** fix query options parsing ([b8301f9](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b8301f9f790d51b13de5279787f9b7d39366d236))


### Chores

* ci build action ([c4650fa](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c4650fa23c2b520d02e892b6c5459c7af0b1388e))
* **internal:** codegen related update ([c0bcc33](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c0bcc33004d7d00ee9a6b07c5811fd9ed1fce38e))

## 0.1.0-alpha.18 (2025-09-03)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### Features

* **api:** api update ([d5442c2](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d5442c282ee679bfd83efa19529bea8c4b685ebd))
* **mcp:** allow setting logging level ([96d0ca9](https://github.com/The-Swarm-Corporation/swarms-ts/commit/96d0ca9f609e88eb7e1581d9a30cb081b1758c14))
* **mcp:** expose client options in `streamableHTTPApp` ([ea1fe0c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ea1fe0c46c786eb8a302af43b582a133c33eb17d))


### Chores

* **internal:** codegen related update ([b87258c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b87258c02c0880c6158db3083585fc32f6d19c46))

## 0.1.0-alpha.17 (2025-08-29)

Full Changelog: [v0.1.0-alpha.16...v0.1.0-alpha.17](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.16...v0.1.0-alpha.17)

### Chores

* **internal:** codegen related update ([5f4ca86](https://github.com/The-Swarm-Corporation/swarms-ts/commit/5f4ca86825fc755fcfb8ef3efffe17a629963810))
* **internal:** update global Error reference ([fa33640](https://github.com/The-Swarm-Corporation/swarms-ts/commit/fa33640576d321cdee383d45be10996921ff9aee))

## 0.1.0-alpha.16 (2025-08-23)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### Features

* **mcp:** add code execution tool ([2e20f5d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/2e20f5d3d827fdd78233806a6b43a9bf6f660edf))
* **mcp:** add option to infer mcp client ([9c2fe43](https://github.com/The-Swarm-Corporation/swarms-ts/commit/9c2fe43d9921db0651b602a874d98a5851a34d6d))
* **mcp:** parse query string as mcp client options in mcp server ([49456a4](https://github.com/The-Swarm-Corporation/swarms-ts/commit/49456a4135170d3b3dfd0a937497bbe290d6f0e6))


### Chores

* add package to package.json ([358e26f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/358e26f7cd00884d8142b078285f3aa9214a43d9))
* **client:** qualify global Blob ([c58fbd4](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c58fbd46bc9cda5f8e54fc1937adf98e4a1806cb))
* **internal:** codegen related update ([9e351d9](https://github.com/The-Swarm-Corporation/swarms-ts/commit/9e351d9c42bd59691d05548d6897baacae80c999))
* **internal:** make mcp-server publishing public by defaut ([1649d7c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/1649d7ce5bc7e9db5bcbd68798d02c55661bbf5e))
* **internal:** refactor array check ([72b6a69](https://github.com/The-Swarm-Corporation/swarms-ts/commit/72b6a69b683015fe752789fae36b261fb40c68dd))
* **mcp:** add cors to oauth metadata route ([e4e357a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e4e357a9ffe016657281bead9271b898de9cc1ce))
* **mcp:** update package.json ([a7b824d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/a7b824df03caa800b0dbcfd32e1d807a96db1efc))
* **mcp:** update types ([8ac11a0](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8ac11a00a4da6ee8013f80b68b78bc5e719663ea))
* update CI script ([4175aaf](https://github.com/The-Swarm-Corporation/swarms-ts/commit/4175aaf9ce1200e7291140dad625b563c5c7ebca))

## 0.1.0-alpha.15 (2025-08-18)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Features

* **api:** api update ([b341986](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b341986c4dc8c3e13e99b5547abb920f8ef955dc))


### Chores

* **deps:** update dependency @types/node to v20.17.58 ([c5353d4](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c5353d4d5ab504a241e5d231f069862318eb9146))
* **internal:** formatting change ([430f553](https://github.com/The-Swarm-Corporation/swarms-ts/commit/430f55362cbfa2c7fd8977f6931a3fa5e2cf412e))
* **mcp:** update README ([b5644de](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b5644deb280032d294ef303725d68cc03485a086))

## 0.1.0-alpha.14 (2025-08-15)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Bug Fixes

* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([8aa1e16](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8aa1e16fb39ef3f4d2dd90afafd34c27f89f1c49))


### Chores

* **mcp:** document remote server in README.md ([b6604ab](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b6604abe86b52d25cd0289623675e5997bd7273d))

## 0.1.0-alpha.13 (2025-08-14)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Chores

* **internal:** codegen related update ([d3d14ad](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d3d14ada57dd8ba3a95ce40353fb9c382e76d88b))
* **internal:** update comment in script ([f19ae0a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/f19ae0a2094d02d60fd719bcb4ecf520ea14cff1))
* **mcp:** minor cleanup of types and package.json ([92cdd26](https://github.com/The-Swarm-Corporation/swarms-ts/commit/92cdd268ca0385a45c8a090cf0c46b709d9ad9c7))
* update @stainless-api/prism-cli to v5.15.0 ([c17ec1b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c17ec1b64ce80e09e065ad0ad601aeaf5fb1f5af))

## 0.1.0-alpha.12 (2025-08-07)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* **mcp:** add unix socket option for remote MCP ([8cd0005](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8cd00054e8b97bcc9ffc589194100bf306f3ff6e))


### Chores

* **internal:** move publish config ([12185ea](https://github.com/The-Swarm-Corporation/swarms-ts/commit/12185eaf9b42ac61c5ede965ec6c9667ee04b4c5))
* **mcp:** refactor streamable http transport ([5f419b2](https://github.com/The-Swarm-Corporation/swarms-ts/commit/5f419b2958428a7a1567f592f3612e394d311e5d))

## 0.1.0-alpha.11 (2025-08-07)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** api update ([1417d70](https://github.com/The-Swarm-Corporation/swarms-ts/commit/1417d709e2fa836a2aba31446ccd8c389f4bb6de))
* **mcp:** add logging when environment variable is set ([d179735](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d179735c0a127f21f36405c48084edb5c9663738))
* **mcp:** remote server with passthru auth ([333179b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/333179b3aef774a13c3be3d45f52cb783823065c))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([6171ff7](https://github.com/The-Swarm-Corporation/swarms-ts/commit/6171ff7b4b19c59b22a6ae49ca3c7c72c1c860e1))
* **mcp:** reverse validJson capability option and limit scope ([dc46938](https://github.com/The-Swarm-Corporation/swarms-ts/commit/dc469388055f43f8ce7cb5649797977db4efb5cd))

## 0.1.0-alpha.10 (2025-07-31)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** api update ([ff8e98a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ff8e98aa73376d09fd892b9bfe2f7b29a2de19c5))


### Chores

* **internal:** codegen related update ([e7de2c6](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e7de2c6bdaa9578d3470e806b334dd86130f94f7))
* **internal:** remove redundant imports config ([ee4d808](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ee4d8085908e9760be213a08d9147b00e689c1b4))

## 0.1.0-alpha.9 (2025-07-22)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** api update ([f76eb8e](https://github.com/The-Swarm-Corporation/swarms-ts/commit/f76eb8ed355c392df4c0b4e1d02f424a868734bd))
* **api:** api update ([0cd265f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/0cd265f96b218a1cfbfacf974b4c938bcd2ab87a))

## 0.1.0-alpha.8 (2025-07-22)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** api update ([8776bf0](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8776bf08f48a0b823f70a93320fe6f0c3f9ccb5b))

## 0.1.0-alpha.7 (2025-07-21)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** add reasoning agent endpoints and gitbook docs ([c562a25](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c562a25cb94f029148c5c575dc87fa79d62da3c8))
* **api:** add reasoning agent endpoints and gitbook docs ([c562a25](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c562a25cb94f029148c5c575dc87fa79d62da3c8))

## 0.1.0-alpha.6 (2025-07-19)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** api update ([e18ca03](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e18ca03d152d72a874a8a37db1e79de2b3603cd9))
* **api:** api update ([e05e1df](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e05e1df0db53466e635175fc1e192dea85cbae84))


### Bug Fixes

* **mcp:** include required section for top-level properties and support naming transformations ([d42ad10](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d42ad10771ffe30d9e40dc745ff76a350272e5b1))

## 0.1.0-alpha.5 (2025-07-17)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Bug Fixes

* **mcp:** support jq filtering on cloudflare workers ([cc4b887](https://github.com/The-Swarm-Corporation/swarms-ts/commit/cc4b887bfc708f1e9cceba8e19d4832071eae54d))


### Chores

* **mcp:** rework imports in tools ([0ba5e12](https://github.com/The-Swarm-Corporation/swarms-ts/commit/0ba5e12a2c80ed217d7c72d981c478ad38ed12dc))
* **ts:** reorder package.json imports ([aa154ba](https://github.com/The-Swarm-Corporation/swarms-ts/commit/aa154ba7459134db42a61874292ff7f8219db9c1))

## 0.1.0-alpha.4 (2025-07-13)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** api update ([ab28e3f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ab28e3f50e4d19257b36c4ed1e0e607a8736df3f))

## 0.1.0-alpha.3 (2025-07-13)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** api update ([195c9c8](https://github.com/The-Swarm-Corporation/swarms-ts/commit/195c9c892fd61f774f7bd52c4fa4ea5d4fa78f00))
* **mcp:** support filtering tool results by a jq expression ([923a99d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/923a99d07701aa4de781d705f9ac0dcf5690727f))


### Bug Fixes

* **mcp:** relax input type for asTextContextResult ([ab4e258](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ab4e2588ede32268fd4a20f17ec2ce8d08066136))


### Chores

* configure new SDK language ([62776ed](https://github.com/The-Swarm-Corporation/swarms-ts/commit/62776ed936ecc03de7299cc1f5311dedeef5ff26))
* make some internal functions async ([c67b3ac](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c67b3acb8de7db8d518b08cbba9b9dd6930f6f8a))

## 0.1.0-alpha.2 (2025-07-04)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** /v1/ratelimits ([ee5c969](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ee5c969e55ca921189724aec5faec05d1755ed62))
* **api:** api update ([3867501](https://github.com/The-Swarm-Corporation/swarms-ts/commit/3867501cbaa71760e991beb9358c4d91d79ca99f))

## 0.1.0-alpha.1 (2025-07-03)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** api key fix ([eabd42c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/eabd42c654eacb41ca3b2c2ee6b8dd2a5edcac06))


### Chores

* configure new SDK language ([6fa4396](https://github.com/The-Swarm-Corporation/swarms-ts/commit/6fa43962eaf9e34848a93361a25be09b8e916eae))
* update SDK settings ([72ec44b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/72ec44b6f0c32eed9adb9d1c08f2ed80c0b3c060))
* update SDK settings ([f9e3c1d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/f9e3c1dd6507a78aa95c3422973869b31cf03795))
