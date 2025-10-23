import React, { useState, useEffect } from 'react';
import { ResumeAnalysisService } from './services/resumeAnalysisService.js';

const TestIntegration = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testDataLoading = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await ResumeAnalysisService.getAnalysisResults();
      setData(result);
      console.log('Data loaded successfully:', result);
    } catch (err) {
      setError(err.message);
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testDataLoading();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Integration Test</h1>
      
      <button onClick={testDataLoading} disabled={loading}>
        {loading ? 'Loading...' : 'Test Data Loading'}
      </button>

      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Error: {error}
        </div>
      )}

      {data && (
        <div style={{ marginTop: '20px' }}>
          <h2>Loaded Data:</h2>
          <pre style={{ background: '#f5f5f5', padding: '10px', overflow: 'auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TestIntegration;
