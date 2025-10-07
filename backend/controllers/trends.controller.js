const { spawn } = require('child_process');
const path = require('path');

function mockTrends() {
  return {
    generated_by: 'mock',
    timestamp: new Date().toISOString(),
    trends: [
      { role: 'Frontend Developer', demand: 92, skills: ['React', 'TypeScript', 'CSS'] },
      { role: 'Data Scientist', demand: 84, skills: ['Python', 'Pandas', 'ML'] },
      { role: 'Backend Developer', demand: 78, skills: ['Node.js', 'Databases', 'APIs'] },
      { role: 'DevOps Engineer', demand: 70, skills: ['Kubernetes', 'CI/CD', 'Terraform'] },
    ],
  };
}

exports.getTrends = async (req, res) => {
  // Try to run the Python LLM helper if available
  const py = path.join(__dirname, '..', 'Chatbot', 'trends_ai.py');
  try {
    const proc = spawn('python', [py], { cwd: path.join(__dirname, '..') });
    let out = '';
    let err = '';
    proc.stdout.on('data', (d) => out += d.toString());
    proc.stderr.on('data', (d) => err += d.toString());
    const timeout = setTimeout(() => {
      proc.kill();
    }, 8000);

    proc.on('close', (code) => {
      clearTimeout(timeout);
      if (err || !out) {
        return res.json(mockTrends());
      }
      try {
        const parsed = JSON.parse(out);
        return res.json(parsed);
      } catch (e) {
        return res.json(mockTrends());
      }
    });
  } catch (e) {
    return res.json(mockTrends());
  }
};
