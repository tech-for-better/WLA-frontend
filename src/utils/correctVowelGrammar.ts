export default function correctVowelGrammar(job) {
  const casedJob = job.toLowerCase();
  return [`a`, `e`, `i`, `o`, `u`].includes(casedJob[0]) ? `an ${casedJob}` : `a ${casedJob}`;
}
