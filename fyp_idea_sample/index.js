
// // node-ner code
// import node_ner from 'node-ner';

// var ner = new node_ner({
//     install_path: 'C:\\Users\\Hassan\\Downloads\\Compressed\\stanford-ner-2014-10-26'
// });

// ner.fromFile('test.txt', function (entities) {
//     console.log(entities);
// })

// // anonymize-nlp code
// import { AnonymizeNlp } from 'anonymize-nlp';

// const anonymizer = new AnonymizeNlp();
// const anonymizedText = anonymizer.anonymize(
//     "Dr. Emily Rodriguez from the Boston office located at 742 Evergreen Terrace, Springfield, IL 62704, will be handling your case. You can also reach her assistant, Ms. Sarah Jones, at her email: sarah.obrien@healthcare-clinic.org or at contact: +44-20-7946-0958. Your insurance provider, BlueCross-ID: BC-9283746, has pre-approved the procedure.");

// console.log('Anonymized text:');
// console.log(anonymizedText);
// console.log('---\n');

// console.log('De-anonymized text:');
// const originalText = anonymizer.deAnonymize(anonymizedText);
// console.log(originalText);

// // redis code
// import { createClient } from "redis";

// const client = await createClient()
//   .on("error", (err) => console.log("Redis Client Error", err))
//   .connect();

// await client.set("name", "Hassan");
// const value = await client.get("name");
// client.quit();

// // http-proxy-middleware code
// import express from 'express';
// import { createProxyMiddleware } from 'http-proxy-middleware';

// const app = express();

// const llmProxyMiddleware = createProxyMiddleware({
//     target: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.0-flash-preview/',
//     changeOrigin: true,
//     on: {
//         proxyReq: (proxyReq, req, res) => {
//             //  attaching the anonymized user query to the request body
//         }
//     }
// });

// app.use('/api/secure-llm', llmProxyMiddleware);

// app.listen(3000, () => {
//     console.log('Running on port 3000');
// });

// wink-nlp-utils code
import winkUtils from 'wink-nlp-utils';


// assuming an uploaded enterprise knowledge base doc
const enterpriseDoc = `
  Project   FALCON is led   by Dr. Ahmed Karimi at HQ-Islamabad.
  All API keys   for FALCON-CORE   must be rotated via SecureVault.
  Contact: a.karimi@dassoft.internal   Ref Code: DSS-2024-PRJ-009
`;

function preprocessText(text) {
    // lowercase the text
  let normalized = winkUtils.string.lowerCase(text);

  // removing extra whitespace and newlines
  normalized = winkUtils.string.removeExtraSpaces(normalized);

  // tokenizing into individual terms
  const tokens = winkUtils.string.tokenize0(normalized);

  // removing generic stopwords 
  const domainTokens = winkUtils.tokens.removeWords(tokens);

  console.log('Domain Tokens for Entity Registration:', domainTokens);

  return domainTokens;
}

const orgEntities = preprocessText(enterpriseDoc);