import{r as t,j as e}from"./index-2EmHN0jp.js";var n,s,o,i,a,r;(s=n||(n={})).STRING="string",s.NUMBER="number",s.INTEGER="integer",s.BOOLEAN="boolean",s.ARRAY="array",s.OBJECT="object",(i=o||(o={})).LANGUAGE_UNSPECIFIED="language_unspecified",i.PYTHON="python",(r=a||(a={})).OUTCOME_UNSPECIFIED="outcome_unspecified",r.OUTCOME_OK="outcome_ok",r.OUTCOME_FAILED="outcome_failed",r.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=["user","model","function","system"];var l,d,u,h,f,g,p,m,E,C,y,O,v,_,I,N;(d=l||(l={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",d.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",d.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",d.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",d.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(h=u||(u={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",h.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",h.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",h.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",h.BLOCK_NONE="BLOCK_NONE",(g=f||(f={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",g.NEGLIGIBLE="NEGLIGIBLE",g.LOW="LOW",g.MEDIUM="MEDIUM",g.HIGH="HIGH",(m=p||(p={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",m.SAFETY="SAFETY",m.OTHER="OTHER",(C=E||(E={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",C.STOP="STOP",C.MAX_TOKENS="MAX_TOKENS",C.SAFETY="SAFETY",C.RECITATION="RECITATION",C.LANGUAGE="LANGUAGE",C.OTHER="OTHER",(O=y||(y={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",O.RETRIEVAL_QUERY="RETRIEVAL_QUERY",O.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",O.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",O.CLASSIFICATION="CLASSIFICATION",O.CLUSTERING="CLUSTERING",(_=v||(v={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",_.AUTO="AUTO",_.ANY="ANY",_.NONE="NONE",(N=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",N.MODE_DYNAMIC="MODE_DYNAMIC";
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class b extends w{constructor(t,e){super(t),this.response=e}}class A extends w{constructor(t,e,n,s){super(t),this.status=e,this.statusText=n,this.errorDetails=s}}class S extends w{}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T,R;(R=T||(T={})).GENERATE_CONTENT="generateContent",R.STREAM_GENERATE_CONTENT="streamGenerateContent",R.COUNT_TOKENS="countTokens",R.EMBED_CONTENT="embedContent",R.BATCH_EMBED_CONTENTS="batchEmbedContents";class x{constructor(t,e,n,s,o){this.model=t,this.task=e,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var t,e;const n=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta";let s=`${(null===(e=this.requestOptions)||void 0===e?void 0:e.baseUrl)||"https://generativelanguage.googleapis.com"}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function M(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(t){const e=[];return(null==t?void 0:t.apiClient)&&e.push(t.apiClient),e.push("genai-js/0.21.0"),e.join(" ")}(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=null===(e=t.requestOptions)||void 0===e?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new S(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[t,e]of s.entries()){if("x-goog-api-key"===t)throw new S(`Cannot set reserved header name ${t}`);if("x-goog-api-client"===t)throw new S(`Header name ${t} can only be set using the apiClient field`);n.append(t,e)}}return n}async function j(t,e,n,s,o,i={},a=fetch){const{url:r,fetchOptions:c}=await async function(t,e,n,s,o,i){const a=new x(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},D(i)),{method:"POST",headers:await M(a),body:o})}}(t,e,n,s,o,i);return async function(t,e,n=fetch){let s;try{s=await n(t,e)}catch(o){!function(t,e){let n=t;t instanceof A||t instanceof S||(n=new w(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack);throw n}(o,t)}s.ok||await async function(t,e){let n,s="";try{const e=await t.json();s=e.error.message,e.error.details&&(s+=` ${JSON.stringify(e.error.details)}`,n=e.error.details)}catch(o){}throw new A(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${s}`,t.status,t.statusText,n)}(s,t);return s}(r,c,a)}function D(t){const e={};if(void 0!==(null==t?void 0:t.signal)||(null==t?void 0:t.timeout)>=0){const n=new AbortController;(null==t?void 0:t.timeout)>=0&&setTimeout((()=>n.abort()),t.timeout),(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",(()=>{n.abort()})),e.signal=n.signal}return e}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),P(t.candidates[0]))throw new b(`${k(t)}`,t);return function(t){var e,n,s,o;const i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(const a of null===(o=null===(s=t.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+"\n"+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(t)}if(t.promptFeedback)throw new b(`Text not available. ${k(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),P(t.candidates[0]))throw new b(`${k(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),H(t)[0]}if(t.promptFeedback)throw new b(`Function call not available. ${k(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),P(t.candidates[0]))throw new b(`${k(t)}`,t);return H(t)}if(t.promptFeedback)throw new b(`Function call not available. ${k(t)}`,t)},t}function H(t){var e,n,s,o;const i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(const a of null===(o=null===(s=t.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)a.functionCall&&i.push(a.functionCall);return i.length>0?i:void 0}const U=[E.RECITATION,E.SAFETY,E.LANGUAGE];function P(t){return!!t.finishReason&&U.includes(t.finishReason)}function k(t){var e,n,s;let o="";if(t.candidates&&0!==t.candidates.length||!t.promptFeedback){if(null===(s=t.candidates)||void 0===s?void 0:s[0]){const e=t.candidates[0];P(e)&&(o+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(o+=`: ${e.finishMessage}`))}}else o+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(o+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);return o}function F(t){return this instanceof F?(this.v=t,this):new F(t)}function G(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(t,e||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(t){o[t]&&(s[t]=function(e){return new Promise((function(n,s){i.push([t,e,n,s])>1||r(t,e)}))})}function r(t,e){try{(n=o[t](e)).value instanceof F?Promise.resolve(n.value.v).then(c,l):d(i[0][2],n)}catch(s){d(i[0][3],s)}var n}function c(t){r("next",t)}function l(t){r("throw",t)}function d(t,e){t(e),i.shift(),i.length&&r(i[0][0],i[0][1])}}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function K(t){const e=function(t){const e=t.getReader();return new ReadableStream({start(t){let n="";return s();function s(){return e.read().then((({value:e,done:o})=>{if(o)return n.trim()?void t.error(new w("Failed to parse stream")):void t.close();n+=e;let i,a=n.match($);for(;a;){try{i=JSON.parse(a[1])}catch(r){return void t.error(new w(`Error parsing JSON response: "${a[1]}"`))}t.enqueue(i),n=n.substring(a[0].length),a=n.match($)}return s()}))}}})}(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,s]=e.tee();return{stream:B(n),response:Y(s)}}async function Y(t){const e=[],n=t.getReader();for(;;){const{done:t,value:s}=await n.read();if(t)return L(q(e));e.push(s)}}function B(t){return G(this,arguments,(function*(){const e=t.getReader();for(;;){const{value:t,done:n}=yield F(e.read());if(n)break;yield yield F(L(t))}}))}function q(t){const e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(const s of t){if(s.candidates)for(const t of s.candidates){const e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].groundingMetadata=t.groundingMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});const s={};for(const o of t.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[e].content.parts.push(s)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e,n,s){return K(await j(e,T.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s))}async function V(t,e,n,s){const o=await j(e,T.GENERATE_CONTENT,t,!1,JSON.stringify(n),s);return{response:L(await o.json())}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){if(null!=t)return"string"==typeof t?{role:"system",parts:[{text:t}]}:t.text?{role:"system",parts:[t]}:t.parts?t.role?t:{role:"system",parts:t.parts}:void 0}function X(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(const n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new w("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new w("No content is provided for sending chat message.");if(s)return e;return n}(e)}function z(t){let e;if(t.contents)e=t;else{e={contents:[X(t)]}}return t.systemInstruction&&(e.systemInstruction=W(t.systemInstruction)),e}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Z={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tt="SILENT_ERROR";class et{constructor(t,e,n,s={}){this.model=e,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==n?void 0:n.history)&&(!function(t){let e=!1;for(const n of t){const{role:t,parts:s}=n;if(!e&&"user"!==t)throw new w(`First content should be with role 'user', got ${t}`);if(!c.includes(t))throw new w(`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(c)}`);if(!Array.isArray(s))throw new w("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new w("Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const e of s)for(const t of Q)t in e&&(o[t]+=1);const i=Z[t];for(const e of Q)if(!i.includes(e)&&o[e]>0)throw new w(`Content with role '${t}' can't contain '${e}' part`);e=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e={}){var n,s,o,i,a,r;await this._sendPromise;const c=X(t),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),e);let u;return this._sendPromise=this._sendPromise.then((()=>V(this._apiKey,this.model,l,d))).then((t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(c);const n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{const e=k(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}u=t})),await this._sendPromise,u}async sendMessageStream(t,e={}){var n,s,o,i,a,r;await this._sendPromise;const c=X(t),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),e),u=J(this._apiKey,this.model,l,d);return this._sendPromise=this._sendPromise.then((()=>u)).catch((t=>{throw new Error(tt)})).then((t=>t.response)).then((t=>{if(t.candidates&&t.candidates.length>0){this._history.push(c);const e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{const e=k(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}})).catch((t=>{t.message!==tt&&console.error(t)})),u}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(t,e,n={}){this.apiKey=t,this._requestOptions=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=W(e.systemInstruction),this.cachedContent=e.cachedContent}async generateContent(t,e={}){var n;const s=z(t),o=Object.assign(Object.assign({},this._requestOptions),e);return V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(t,e={}){var n;const s=z(t),o=Object.assign(Object.assign({},this._requestOptions),e);return J(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(t){var e;return new et(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(e=this.cachedContent)||void 0===e?void 0:e.name},t),this._requestOptions)}async countTokens(t,e={}){const n=function(t,e){var n;let s={model:null==e?void 0:e.model,generationConfig:null==e?void 0:e.generationConfig,safetySettings:null==e?void 0:e.safetySettings,tools:null==e?void 0:e.tools,toolConfig:null==e?void 0:e.toolConfig,systemInstruction:null==e?void 0:e.systemInstruction,cachedContent:null===(n=null==e?void 0:e.cachedContent)||void 0===n?void 0:n.name,contents:[]};const o=null!=t.generateContentRequest;if(t.contents){if(o)throw new S("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{const e=X(t);s.contents=[e]}return{generateContentRequest:s}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,s){return(await j(e,T.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.apiKey,this.model,n,s)}async embedContent(t,e={}){const n=function(t){if("string"==typeof t||Array.isArray(t))return{content:X(t)};return t}(t),s=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,s){return(await j(e,T.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}(this.apiKey,this.model,n,s)}async batchEmbedContents(t,e={}){const n=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,s){const o=n.requests.map((t=>Object.assign(Object.assign({},t),{model:e})));return(await j(e,T.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}(this.apiKey,this.model,t,n)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new class{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new w("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new nt(this.apiKey,t,e)}getGenerativeModelFromCachedContent(t,e,n){if(!t.name)throw new S("Cached content must contain a `name` field.");if(!t.model)throw new S("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const i of s)if((null==e?void 0:e[i])&&t[i]&&(null==e?void 0:e[i])!==t[i]){if("model"===i){if((e.model.startsWith("models/")?e.model.replace("models/",""):e.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue}throw new S(`Different value for "${i}" specified in modelParams (${e[i]}) and cachedContent (${t[i]})`)}const o=Object.assign(Object.assign({},e),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new nt(this.apiKey,o,n)}}("AIzaSyAoEVxYdKfjAMDrhQjgE522xYLf621uk0w").getGenerativeModel({model:"gemini-pro"}),ot=()=>{const[n,s]=t.useState(!1),[o,i]=t.useState([]),[a,r]=t.useState(""),[c,l]=t.useState(!1),d=t.useRef(null);t.useEffect((()=>{var t;null==(t=d.current)||t.scrollIntoView({behavior:"smooth"})}),[o,c]);const u=()=>s(!n),h=async()=>{if(!a.trim())return;const t={sender:"user",text:a};i((e=>[...e,t])),r(""),l(!0);try{const t={sender:"bot",text:(await st.generateContent({contents:[{role:"user",parts:[{text:`\nYou are Akili, an AI assistant representing Akiliedge Solution, a Kenyan company dedicated to 'Building Sustainable Solutions' and 'Empowering African communities through tech solutions.' Our focus areas include:\n- Software development\n- IoT systems\n- product design\n- AI solutions\n- Community empowerment through technology\nOur email is steve.devakiliedge@gmail.com\nPhone number is +254703373810\n\nPlease answer in a friendly, professional, and confident tone, reflecting our values. Offer partnerships and mention our contact info if relevant. User's question: ${a}\n              `}]}]})).response.text()};i((e=>[...e,t]))}catch(e){console.error(e),i((t=>[...t,{sender:"bot",text:"Oops! Something went wrong. Please try again later."}]))}l(!1)};return e.jsxs("div",{children:[e.jsx("button",{className:"fixed bottom-6 right-6 bg-[#972326] text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-110 z-[9999]",onClick:u,children:"💬"}),n&&e.jsxs("div",{className:"fixed bottom-20 right-4 left-4 sm:right-6 sm:left-auto bg-white w-auto sm:w-96 h-[32rem] rounded-lg shadow-lg border flex flex-col z-[9999]",children:[e.jsxs("div",{className:"bg-[#fed90f] text-black p-3 flex justify-between items-center font-bold rounded-t-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:"/assets/appstorechat-h5oo5jYO.png",alt:"Akiliedge Logo",className:"h-10 w-10 rounded-full object-cover"}),e.jsx("span",{children:"Chat with Akili"})]}),e.jsx("button",{onClick:u,className:"text-black text-2xl",children:"×"})]}),e.jsxs("div",{className:"flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50",children:[o.map(((t,n)=>e.jsx("div",{className:"p-3 rounded-lg max-w-[95%] break-words "+("user"===t.sender?"bg-blue-100 self-end ml-auto":"bg-gray-200 self-start"),children:t.text},n))),c&&e.jsx("div",{className:"bg-gray-200 p-3 rounded-lg max-w-[95%] self-start",children:"Akili is typing..."}),e.jsx("div",{ref:d})]}),e.jsxs("div",{className:"p-3 border-t bg-white flex items-center gap-2",children:[e.jsx("input",{type:"text",className:"flex-grow border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#972326]",placeholder:"Ask anything...",value:a,onChange:t=>r(t.target.value),onKeyDown:t=>"Enter"===t.key&&h()}),e.jsx("button",{className:"bg-[#972326] text-white px-4 py-2 rounded-lg hover:bg-[#7d1c1f] disabled:opacity-50",onClick:h,disabled:c,children:"Send"})]})]})]})};export{ot as default};
//# sourceMappingURL=Chatbot-Dc6vKRJr.js.map
