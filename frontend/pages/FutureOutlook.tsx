import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Target, Sparkles, Globe, TrendingUp, Users } from 'lucide-react';

const roadmap = [
  {
    phase: 'Q1 2024',
    title: '试点阶段',
    items: ['在3-5个重点城市部署', '收集用户反馈', '优化算法模型'],
  },
  {
    phase: 'Q2 2024',
    title: '规模化推广',
    items: ['覆盖20+城市', '接入更多健康设备', '上线会员系统'],
  },
  {
    phase: 'Q3-Q4 2024',
    title: '生态建设',
    items: ['开放API平台', '商家入驻系统', '数据分析SaaS'],
  },
];

const visions = [
  {
    icon: Target,
    title: '精准营销',
    description: '基于AI的千人千面营销策略，提升ROI',
  },
  {
    icon: Sparkles,
    title: '体验升级',
    description: '打造智能化、人性化的购物体验',
  },
  {
    icon: Globe,
    title: '生态扩展',
    description: '连接更多健康生态，打造健康消费平台',
  },
  {
    icon: TrendingUp,
    title: '商业价值',
    description: '帮助品牌实现数字化转型和增长',
  },
];

export default function FutureOutlook() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 animate-in slide-in-from-top duration-700">
          <Rocket className="w-12 h-12 text-blue-600" />
          <h1 className="text-5xl font-bold text-foreground">未来展望</h1>
        </div>
        <p className="text-xl text-muted-foreground animate-in slide-in-from-top duration-700 delay-100">
          构建智能健康消费新生态
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {roadmap.map((phase, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          >
            <CardHeader>
              <div className="text-sm font-semibold text-blue-600 mb-2">{phase.phase}</div>
              <CardTitle className="text-2xl">{phase.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 border-blue-200 dark:border-blue-800 mt-12 animate-in slide-in-from-bottom duration-700 delay-500">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">长期愿景</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {visions.map((vision, index) => {
              const Icon = vision.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{vision.title}</h4>
                    <p className="text-muted-foreground">{vision.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 border-green-200 dark:border-green-800 animate-in slide-in-from-bottom duration-700 delay-700">
        <CardContent className="p-12 text-center space-y-6">
          <Users className="w-16 h-16 mx-auto text-green-600" />
          <h3 className="text-3xl font-bold text-foreground">
            让每一次消费都更健康
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            通过技术创新和数据洞察，我们致力于为用户提供更个性化、更健康的消费选择，
            同时帮助品牌实现可持续增长
          </p>
          <div className="pt-6">
            <div className="inline-flex items-center gap-4 text-2xl font-semibold">
              <span className="text-blue-600">智能</span>
              <span className="text-gray-400">×</span>
              <span className="text-green-600">健康</span>
              <span className="text-gray-400">×</span>
              <span className="text-purple-600">未来</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
