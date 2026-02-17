
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
    `Dear Mr. James Sullivan, this is a reminder about your appointment on March 15th. 
Please contact us at support@healthcare-clinic.org or call 555-867-5309 if you need to reschedule. 
Your account number is 4532-7890-1234-5678 and your SSN ending in 6789 is on file. 
Dr. Emily Rodriguez from the Boston office located at 742 Evergreen Terrace, Springfield, IL 62704 
will be handling your case. You can also reach her assistant, Sarah O'Brien, at sarah.obrien@healthcare-clinic.org 
or at +44-20-7946-0958. Your insurance provider, BlueCross ID: BC-9283746, has pre-approved the procedure. 
Meeting notes were sent to james.sullivan92@gmail.com and CC'd to his wife, Margaret Sullivan, 
at meg.sullivan@yahoo.co.uk. The IP address 192.168.1.105 was logged during your last portal visit on 01/28/2024.`);

console.log('Anonymized text:');
console.log(anonymizedText);
console.log('---\n');

console.log('De-anonymized text:');
const originalText = anonymizer.deAnonymize(anonymizedText);
console.log(originalText);