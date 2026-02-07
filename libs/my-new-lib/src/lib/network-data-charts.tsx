'use client';

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';


const throughputData = [
  { time: '00:00', mbps: 42, packets: 1200 },
  { time: '04:00', mbps: 38, packets: 980 },
  { time: '08:00', mbps: 95, packets: 2100 },
  { time: '12:00', mbps: 88, packets: 1950 },
  { time: '16:00', mbps: 72, packets: 1650 },
  { time: '20:00', mbps: 110, packets: 2400 },
  { time: '24:00', mbps: 65, packets: 1400 },
];

const latencyData = [
  { time: '00:00', ms: 12, jitter: 2 },
  { time: '04:00', ms: 18, jitter: 4 },
  { time: '08:00', ms: 8, jitter: 1 },
  { time: '12:00', ms: 22, jitter: 5 },
  { time: '16:00', ms: 15, jitter: 3 },
  { time: '20:00', ms: 9, jitter: 2 },
  { time: '24:00', ms: 14, jitter: 3 },
];

const trafficByType = [
  { name: 'HTTP', value: 45, color: '#3b82f6' },
  { name: 'HTTPS', value: 35, color: '#22c55e' },
  { name: 'DNS', value: 10, color: '#eab308' },
  { name: 'Other', value: 10, color: '#94a3b8' },
];

export function NetworkDataCharts() {
  return (
    <div style={{ padding: '1.5rem', maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 600 }}>
        Network Data (dummy)
      </h2>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        
        <div style={{ background: '#f8fafc', borderRadius: 8, padding: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
            Throughput &amp; packets
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={throughputData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="mbps"
                name="Mbps"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.4}
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="packets"
                name="Packets/s"
                stroke="#22c55e"
                fill="#22c55e"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        
        <div style={{ background: '#f8fafc', borderRadius: 8, padding: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
            Latency &amp; jitter (ms)
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={latencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ms" name="Latency (ms)" stroke="#8b5cf6" strokeWidth={2} />
              <Line type="monotone" dataKey="jitter" name="Jitter (ms)" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: '1rem' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
              Traffic by type (Mbps)
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={trafficByType} layout="vertical" margin={{ left: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={50} />
                <Tooltip />
                <Bar dataKey="value" name="Mbps" radius={[0, 4, 4, 0]}>
                  {trafficByType.map((entry, index) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: '1rem' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
              Traffic share (%)
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={trafficByType}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {trafficByType.map((entry, index) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkDataCharts;
