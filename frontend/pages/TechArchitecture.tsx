import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Cloud, Cpu, Smartphone, Lock, Zap } from 'lucide-react';

const techStack = [
  {
    icon: Smartphone,
    title: '前端层',
    items: ['React Native APP', '微信小程序', '响应式Web界面'],
  },
  {
    icon: Cloud,
    title: '应用层',
    items: ['RESTful API', 'GraphQL接口', 'WebSocket实时通信'],
  },
  {
    icon: Cpu,
    title: 'AI引擎',
    items: ['推荐算法模型', '用户画像分析', '销量预测系统'],
  },
  {
    icon: Database,
    title: '数据层',
    items: ['用户健康数据库', '商品库存系统', '订单交易记录'],
  },
  {
    icon: Lock,
    title: '安全层',
    items: ['数据加密传输', '隐私保护机制', '身份认证系统'],
  },
  {
    icon: Zap,
    title: '硬件层',
    items: ['智能售卖机', '健康设备对接', 'IoT传感器'],
  },
];

export default function TechArchitecture() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground animate-in slide-in-from-top duration-700">
          技术架构
        </h1>
        <p className="text-xl text-muted-foreground animate-in slide-in-from-top duration-700 delay-100">
          稳定可靠的系统设计
        </p>
      </div>

      <div className="relative">
        {/* Architecture Flow */}
        <div className="grid md:grid-cols-3 gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-center text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tech.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">▸</span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 border-blue-200 dark:border-blue-800 mt-12 animate-in slide-in-from-bottom duration-700 delay-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">核心技术优势</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-blue-600">可扩展性</h4>
              <p className="text-muted-foreground">
                微服务架构设计，支持横向扩展，轻松应对业务增长
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-purple-600">高可用性</h4>
              <p className="text-muted-foreground">
                分布式部署，99.9%服务可用性保障
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-green-600">实时性</h4>
              <p className="text-muted-foreground">
                毫秒级响应速度，实时同步用户数据和库存信息
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-pink-600">智能化</h4>
              <p className="text-muted-foreground">
                深度学习算法持续优化，推荐准确率不断提升
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
