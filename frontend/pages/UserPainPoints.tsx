import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, TrendingDown, Users, Package } from 'lucide-react';

interface PainPoint {
  icon: React.ElementType;
  title: string;
  description: string;
  impact: string;
}

const painPoints: PainPoint[] = [
  {
    icon: Users,
    title: '用户需求不明确',
    description: '售卖机无法了解用户的真实需求和健康状况',
    impact: '导致购买决策困难，流失潜在客户',
  },
  {
    icon: TrendingDown,
    title: '转化率低',
    description: '传统售卖机只能被动展示商品，缺乏个性化推荐',
    impact: '用户浏览后不购买，销售转化率仅15-20%',
  },
  {
    icon: Package,
    title: '库存管理困难',
    description: '无法预测不同地点、时间的产品需求',
    impact: '热门产品缺货，冷门产品积压，增加运营成本',
  },
  {
    icon: AlertCircle,
    title: '健康意识提升',
    description: '消费者越来越关注饮品的健康属性',
    impact: '传统售卖机无法提供健康建议，不符合市场趋势',
  },
];

export default function UserPainPoints() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground animate-in slide-in-from-top duration-700">
          当前面临的挑战
        </h1>
        <p className="text-xl text-muted-foreground animate-in slide-in-from-top duration-700 delay-100">
          传统售卖机存在的核心问题
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{point.title}</CardTitle>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm font-medium text-red-900 dark:text-red-100">
                    <span className="font-semibold">影响：</span> {point.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 border-red-200 dark:border-red-800 animate-in slide-in-from-bottom duration-700 delay-600">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            市场机会
          </h3>
          <p className="text-lg text-muted-foreground">
            智能化、个性化的售卖解决方案将成为行业新趋势
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
