import React, { useEffect, useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

const TrendCard = ({ item }) => {
  const pct = Math.max(5, Math.min(100, item.demand || 50));
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-lg">{item.role}</h3>
      <p className="text-sm text-gray-500">Top skills: {item.skills?.slice(0,3).join(', ') || 'N/A'}</p>
      <div className="mt-3">
        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
          <div className="h-3 bg-blue-500" style={{ width: `${pct}%` }} />
        </div>
        <div className="text-xs text-gray-600 mt-1">Demand: {pct}%</div>
      </div>
    </div>
  );
};

export default function JobTrendsPage() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/trends')
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setTrends(data.trends || []);
        setLastUpdated(data.timestamp || new Date().toISOString());
      })
      .catch((e) => {
        console.error('trends fetch', e);
      })
      .finally(() => mounted && setLoading(false));

    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    // tailwind v4 typical dark detection via documentElement class
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
    const observer = new MutationObserver(() => {
      const dark = root.classList.contains('dark');
      setTheme(dark ? 'dark' : 'light');
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const palette = useMemo(() => {
    return theme === 'dark'
      ? { bg: 'bg-gray-900', card: 'bg-gray-800', text: 'text-gray-100', sub: 'text-gray-400', grid: '#2d3748', primary: '#60a5fa', secondary: '#34d399' }
      : { bg: 'bg-gray-50', card: 'bg-white', text: 'text-gray-900', sub: 'text-gray-500', grid: '#e5e7eb', primary: '#3b82f6', secondary: '#10b981' };
  }, [theme]);

  const skillsChips = useMemo(() => {
    const set = new Set();
    (trends || []).forEach(t => (t.skills || []).forEach(s => set.add(s)));
    return Array.from(set).slice(0, 8);
  }, [trends]);

  const avgDemand = useMemo(() => {
    if (!trends || trends.length === 0) return 0;
    const sum = trends.reduce((acc, t) => acc + (t.demand || 0), 0);
    return Math.round((sum / trends.length) * 10) / 10;
  }, [trends]);

  // Derive min/median/max salary bands (in K) from demand as a proxy
  const salaryRangesData = useMemo(() => {
    return (trends || []).map(t => {
      const d = Math.max(40, Math.min(100, t.demand || 60));
      const median = Math.round(60 + (d - 40) * 1.2); // 60..180
      const min = Math.max(45, Math.round(median * 0.7));
      const max = Math.max(min + 20, Math.round(median * 1.25));
      return { role: t.role, min, median, max };
    });
  }, [trends]);

  const industryTrends = useMemo(() => {
    const canon = ['AI/ML', 'Cloud Computing', 'DevOps', 'Cybersecurity', 'Big Data'];
    // Light mapping from skills to buckets
    const text = (trends || []).flatMap(t => t.skills || []);
    const lower = text.map(s => (s || '').toLowerCase());
    const has = (k) => lower.some(s => s.includes(k));
    const out = [];
    if (has('ai') || has('machine')) out.push('AI/ML');
    if (has('cloud') || has('aws') || has('azure') || has('gcp')) out.push('Cloud Computing');
    if (has('devops') || has('kubernetes') || has('ci')) out.push('DevOps');
    if (has('security')) out.push('Cybersecurity');
    if (has('data')) out.push('Big Data');
    const uniq = Array.from(new Set(out));
    return uniq.length ? uniq : canon;
  }, [trends]);

  const renderSalaryTooltip = ({ active, payload, label }) => {
    if (!active || !payload || payload.length === 0) return null;
    const datum = payload[0]?.payload || {};
    const bg = theme === 'dark' ? '#111827' : '#ffffff';
    const color = theme === 'dark' ? '#f9fafb' : '#111827';
    const border = palette.grid;
    const line = (title, value) => (
      <div className="text-sm" style={{ lineHeight: 1.4 }}>
        {title}: <span className="font-semibold">${value}K</span>
      </div>
    );
    return (
      <div style={{ background: bg, color, border: `1px solid ${border}`, borderRadius: 8, padding: '10px 12px', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}>
        <div className="text-lg font-semibold mb-2">{datum.role || label}</div>
        {line('Min Salary (k)', datum.min)}
        {line('Median Salary (k)', datum.median)}
        {line('Max Salary (k)', datum.max)}
      </div>
    );
  };

  const renderSkillsTooltip = ({ active, payload }) => {
    if (!active || !payload || payload.length === 0) return null;
    const d = payload[0]?.payload || {};
    const bg = theme === 'dark' ? '#111827' : '#ffffff';
    const color = theme === 'dark' ? '#f9fafb' : '#111827';
    const border = palette.grid;
    return (
      <div style={{ background: bg, color, border: `1px solid ${border}`, borderRadius: 8, padding: '8px 10px', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}>
        <div className="text-sm font-semibold mb-1">{d.skill}</div>
        <div className="text-xs" style={{ opacity: 0.9 }}>Mentions: <span className="font-semibold">{d.count}</span></div>
        <div className="text-xs" style={{ opacity: 0.9 }}>Avg role demand: <span className="font-semibold">{isNaN(d.avgDemand) ? '-' : `${Math.round(d.avgDemand)}%`}</span></div>
      </div>
    );
  };

  const skillsRadarWithLevels = useMemo(() => {
    // Build per-skill aggregates: count and sum of demand of roles mentioning the skill
    const aggregate = new Map();
    (trends || []).forEach(t => {
      const demand = Math.max(0, Math.min(100, t.demand || 0));
      (t.skills || []).forEach(s => {
        const prev = aggregate.get(s) || { count: 0, demandSum: 0 };
        prev.count += 1;
        prev.demandSum += demand;
        aggregate.set(s, prev);
      });
    });
    const entries = Array.from(aggregate.entries()).map(([skill, { count, demandSum }]) => ({
      skill,
      count,
      demandSum,
      avgDemand: count ? demandSum / count : 0,
    }));
    // keep top 8 by count
    entries.sort((a, b) => b.count - a.count);
    const top = entries.slice(0, 8);
    const maxCount = Math.max(1, ...top.map(x => x.count));
    const maxDemandSum = Math.max(1, ...top.map(x => x.demandSum));
    return top.map(x => ({
      skill: x.skill,
      freqPct: Math.round((x.count / maxCount) * 100),
      levelPct: Math.round((x.demandSum / maxDemandSum) * 100),
      count: x.count,
      avgDemand: x.avgDemand,
    }));
  }, [trends]);

  return (
    <div className={`max-w-6xl mx-auto p-6 ${palette.bg} ${palette.text}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Job Trends</h1>
          <p className={`text-sm ${palette.sub}`}>Market signals for roles, demand and skills.</p>
        </div>
        <div className={`text-xs ${palette.sub}`}>Last updated: {lastUpdated ? new Date(lastUpdated).toLocaleString() : new Date().toLocaleString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className={`${palette.card} rounded-xl shadow p-4`}>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${palette.sub}`}>Market Outlook</span>
            <span className="text-green-400">↗</span>
          </div>
        <div className="mt-2 text-2xl font-semibold">{avgDemand >= 65 ? 'POSITIVE' : avgDemand >= 50 ? 'NEUTRAL' : 'NEGATIVE'}</div>
          <div className={`mt-1 text-xs ${palette.sub}`}>Next update within 24h</div>
        </div>
        <div className={`${palette.card} rounded-xl shadow p-4`}>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${palette.sub}`}>Industry Growth</span>
            <span className={`text-xs ${palette.sub}`}>⟰</span>
          </div>
          <div className="mt-2 text-2xl font-semibold">10.0%</div>
          <div className="mt-2 w-full h-2 rounded bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div className="h-2 rounded" style={{ width: '10%', background: palette.primary }} />
          </div>
        </div>
        <div className={`${palette.card} rounded-xl shadow p-4`}>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${palette.sub}`}>Demand Level</span>
            <span className={`text-xs ${palette.sub}`}>💼</span>
          </div>
          <div className="mt-2 text-2xl font-semibold">{avgDemand >= 70 ? 'HIGH' : avgDemand >= 50 ? 'MEDIUM' : 'LOW'}</div>
          <div className="mt-2 w-full h-2 rounded bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div className="h-2 rounded" style={{ width: `${Math.min(100, Math.max(0, avgDemand))}%`, background: '#22c55e' }} />
          </div>
        </div>
        <div className={`${palette.card} rounded-xl shadow p-4`}>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${palette.sub}`}>Top Skills</span>
            <span className={`text-xs ${palette.sub}`}>⚙</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {skillsChips.map((s, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className={`${palette.card} rounded-xl shadow p-6 text-center`}>Loading trends…</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className={`${palette.card} rounded-xl shadow p-4`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Salary Ranges by Role</h3>
                <span className={`text-xs ${palette.sub}`}>Min / Median / Max (in thousands)</span>
              </div>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salaryRangesData} margin={{ top: 8, right: 24, left: 0, bottom: 8 }}>
                    <CartesianGrid stroke={palette.grid} strokeDasharray="3 3" />
                    <XAxis dataKey="role" tick={{ fill: theme==='dark' ? '#e5e7eb' : '#111827', fontSize: 12 }} interval={0} angle={-15} height={80} tickMargin={12} />
                    <YAxis tick={{ fill: theme==='dark' ? '#e5e7eb' : '#111827' }} />
                    <Tooltip content={renderSalaryTooltip} />
                    <Legend />
                    <Bar dataKey="min" name="Min" fill={palette.grid} radius={[4,4,0,0]} />
                    <Bar dataKey="median" name="Median" fill={palette.primary} radius={[4,4,0,0]} />
                    <Bar dataKey="max" name="Max" fill={palette.secondary} radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className={`${palette.card} rounded-xl shadow p-4`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Top Skills Levels</h3>
                <span className={`text-xs ${palette.sub}`}>Mentions vs demand-weighted level</span>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={skillsRadarWithLevels} outerRadius="70%">
                    <PolarGrid stroke={palette.grid} />
                    <PolarAngleAxis dataKey="skill" tick={{ fill: theme==='dark' ? '#e5e7eb' : '#111827', fontSize: 12 }} />
                    <PolarRadiusAxis tick={{ fill: theme==='dark' ? '#e5e7eb' : '#111827' }} domain={[0, 100]} />
                    <Radar dataKey="freqPct" name="Mentions (norm)" stroke={palette.primary} fill={palette.primary} fillOpacity={0.35} />
                    <Radar dataKey="levelPct" name="Demand-weighted" stroke={palette.secondary} fill={palette.secondary} fillOpacity={0.25} />
                    <Legend />
                    <Tooltip content={renderSkillsTooltip} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className={`${palette.card} rounded-xl shadow p-4`}>
              <h3 className="font-semibold mb-3">Key Industry Trends</h3>
              <ul className="space-y-3">
                {industryTrends.map((t, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${palette.card} rounded-xl shadow p-4`}>
              <h3 className="font-semibold mb-3">Recommended Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skillsChips.map((s, i) => (
                  <span key={i} className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
