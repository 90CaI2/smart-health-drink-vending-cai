import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Users, Dumbbell, Briefcase, GraduationCap } from 'lucide-react';

const ageData = [
  { name: '18-25岁', value: 35, color: '#3b82f6' },
  { name: '26-35岁', value: 45, color: '#8b5cf6' },
  { name: '36-45岁', value: 15, color: '#ec4899' },
  { name: '45岁以上', value: 5, color: '#f59e0b' },
];

const locationData = [
  { name: '健身房', value: 30, color: '#10b981' },
  { name: '办公楼', value: 35, color: '#3b82f6' },
  { name: '学校', value: 20, color: '#f59e0b' },
  { name: '商场', value: 15, color: '#ec4899' },
];

const personas = [
  {
    icon: Dumbbell,
    name: '健身爱好者',
    age: '25-35岁',
    needs: '低糖、高蛋白、补充电解质',
    behavior: '运动后购买，关注营养成分',
    percentage: '35%',
  },
  {
    icon: Briefcase,
    name: '白领上班族',
    age: '26-40岁',
    needs: '提神、低卡、健康',
    behavior: '下午茶时间购买，追求便捷',
    percentage: '40%',
  },
  {
    icon: GraduationCap,
    name: '学生群体',
    age: '18-25岁',
    needs: '口味多样、价格适中',
    behavior: '课间购买，喜欢尝试新品',
    percentage: '25%',
  },
];

export default function UserPersona() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground animate-in slide-in-from-top duration-700">
          目标用户画像
        </h1>
        <p className="text-xl text-muted-foreground animate-in slide-in-from-top duration-700 delay-100">
          深入了解我们的核心用户群体
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card className="animate-in slide-in-from-left duration-700 delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              年龄分布
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-right duration-700 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-green-600" />
              场景分布
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={locationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {locationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {personas.map((persona, index) => {
          const Icon = persona.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">{persona.name}</CardTitle>
                <p className="text-center text-2xl font-bold text-blue-600">{persona.percentage}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">年龄段</p>
                  <p className="text-foreground">{persona.age}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">核心需求</p>
                  <p className="text-foreground">{persona.needs}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">购买行为</p>
                  <p className="text-foreground">{persona.behavior}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
