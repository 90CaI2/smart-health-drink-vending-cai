import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Heart, Brain, ChevronDown } from 'lucide-react';

interface HomePageProps {
  onNext: () => void;
}

export default function HomePage({ onNext }: HomePageProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-6">
        <div className="inline-block">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700">
            元气森林
          </div>
          <div className="text-3xl font-semibold text-foreground/80 mt-2 animate-in slide-in-from-bottom duration-700 delay-100">
            智能售卖机系统
          </div>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700 delay-200">
          基于用户健康数据的智能饮品推荐系统
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-300">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">智能推荐</h3>
            <p className="text-muted-foreground">
              结合用户健康数据，AI算法精准推荐最适合的饮品
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-400">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">健康导向</h3>
            <p className="text-muted-foreground">
              根据用户运动量、饮食习惯等数据提供个性化健康建议
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-500">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold">提升销量</h3>
            <p className="text-muted-foreground">
              精准营销提高转化率，优化库存管理降低运营成本
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12 animate-in slide-in-from-bottom duration-700 delay-600">
        <Button onClick={onNext} size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          开始了解
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </Button>
      </div>
    </div>
  );
}
