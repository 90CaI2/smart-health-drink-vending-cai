import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp } from 'lucide-react';

const salesData = [
  { month: '1月', traditional: 820, smart: 920 },
  { month: '2月', traditional: 850, smart: 1100 },
  { month: '3月', traditional: 880, smart: 1350 },
  { month: '4月', traditional: 900, smart: 1680 },
  { month: '5月', traditional: 920, smart: 2050 },
  { month: '6月', traditional: 950, smart: 2500 },
];

const conversionData = [
  { name: '传统模式', value: 18 },
  { name: '智能推荐', value: 42 },
];

const drinkPreference = [
  { category: '气泡水', sales: 4200 },
  { category: '乳茶', sales: 3800 },
  { category: '果汁', sales: 3200 },
  { category: '功能饮料', sales: 2800 },
  { category: '咖啡', sales: 2400 },
];

const timeDistribution = [
  { time: '8:00', value: 120 },
  { time: '10:00', value: 280 },
  { time: '12:00', value: 450 },
  { time: '14:00', value: 520 },
  { time: '16:00', value: 680 },
  { time: '18:00', value: 420 },
  { time: '20:00', value: 180 },
];

export default function DataAnalysis() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground animate-in slide-in-from-top duration-700">
          数据分析与预期
        </h1>
        <p className="text-xl text-muted-foreground animate-in slide-in-from-top duration-700 delay-100">
          智能系统带来的显著提升
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="animate-in slide-in-from-left duration-700 delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              销售额对比（月度）
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="traditional"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  name="传统售卖机"
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="smart"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="智能推荐系统"
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              智能系统6个月销售增长 <span className="text-green-600 font-semibold">163%</span>
            </p>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-right duration-700 delay-300">
          <CardHeader>
            <CardTitle>转化率提升</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              转化率提升 <span className="text-green-600 font-semibold">133%</span>
            </p>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-left duration-700 delay-400">
          <CardHeader>
            <CardTitle>品类偏好分析</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={drinkPreference} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="category" type="category" width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="sales" fill="#10b981" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-right duration-700 delay-500">
          <CardHeader>
            <CardTitle>购买时段分布</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={timeDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              下午 14:00-16:00 为销售高峰期
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 border-green-200 dark:border-green-800 animate-in slide-in-from-bottom duration-700 delay-600">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">+163%</p>
              <p className="text-muted-foreground">销售额提升</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">+133%</p>
              <p className="text-muted-foreground">转化率提升</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">-25%</p>
              <p className="text-muted-foreground">库存成本降低</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
