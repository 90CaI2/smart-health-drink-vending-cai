import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Brain, Activity, ShoppingCart, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: '移动端绑定',
    description: '用户通过APP或小程序绑定健康设备',
    details: ['同步运动手环数据', '记录日常饮食习惯', '个人健康档案管理'],
  },
  {
    icon: Brain,
    title: 'AI智能推荐',
    description: '基于机器学习算法的个性化推荐引擎',
    details: ['分析用户健康数据', '结合购买历史', '实时优化推荐策略'],
  },
  {
    icon: Activity,
    title: '健康评分',
    description: '为每个用户生成动态健康评分',
    details: ['运动量评估', '饮食均衡分析', '个性化健康建议'],
  },
  {
    icon: ShoppingCart,
    title: '智能购物',
    description: '扫码即可查看个性化推荐',
    details: ['营养成分可视化', '健康适配度评分', '一键快速购买'],
  },
  {
    icon: BarChart3,
    title: '数据洞察',
    description: '为运营方提供深度数据分析',
    details: ['销售趋势预测', '库存优化建议', '用户偏好分析'],
  },
  {
    icon: Shield,
    title: '隐私保护',
    description: '严格的数据安全和隐私保护机制',
    details: ['端到端加密', '匿名化处理', '符合GDPR标准'],
  },
];

export default function Solution() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground animate-in slide-in-from-top duration-700">
          智能解决方案
        </h1>
        <p className="text-xl text-muted-foreground animate-in slide-in-from-top duration-700 delay-100">
          融合健康数据与AI算法的创新系统
        </p>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/10 dark:to-green-900/10 border-blue-200 dark:border-blue-800 animate-in slide-in-from-bottom duration-700 delay-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">核心理念</h3>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            通过收集和分析用户的运动数据、饮食习惯、健康指标等信息，
            利用AI算法为每位用户推荐最适合其健康状况的饮品，
            实现「千人千面」的个性化服务，同时帮助运营方提升销售效率
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span className="text-foreground/80">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
