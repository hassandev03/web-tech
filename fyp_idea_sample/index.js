
// // node-ner code
// import node_ner from 'node-ner';

// var ner = new node_ner({
//     install_path: 'C:\\Users\\Hassan\\Downloads\\Compressed\\stanford-ner-2014-10-26'
// });

// ner.fromFile('test.txt', function (entities) {
//     console.log(entities);
// })

// anonymize-nlp code
import { AnonymizeNlp } from 'anonymize-nlp';

const anonymizer = new AnonymizeNlp();
const anonymizedText = anonymizer.anonymize(
    `Dr. Emily Rodriguez from the Boston office located at 742 Evergreen Terrace, Springfield, IL 62704 
will be handling your case. You can also reach her assistant, Sarah Jones, at sarah.obrien@healthcare-clinic.org 
or at +44-20-7946-0958. Your insurance provider, BlueCross ID: BC-9283746, has pre-approved the procedure.`);

console.log('Anonymized text:');
console.log(anonymizedText);
console.log('---\n');

console.log('De-anonymized text:');
const originalText = anonymizer.deAnonymize(anonymizedText);
console.log(originalText);