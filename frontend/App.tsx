import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HomePage from './pages/HomePage';
import UserPainPoints from './pages/UserPainPoints';
import UserPersona from './pages/UserPersona';
import Solution from './pages/Solution';
import DataAnalysis from './pages/DataAnalysis';
import TechArchitecture from './pages/TechArchitecture';
import FutureOutlook from './pages/FutureOutlook';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pages = [
  { id: 'home', title: '项目概览', component: HomePage },
  { id: 'pain', title: '用户痛点', component: UserPainPoints },
  { id: 'persona', title: '用户画像', component: UserPersona },
  { id: 'solution', title: '解决方案', component: Solution },
  { id: 'data', title: '数据分析', component: DataAnalysis },
  { id: 'tech', title: '技术架构', component: TechArchitecture },
  { id: 'future', title: '未来展望', component: FutureOutlook },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => setCurrentPage(index)}
            className="group relative"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Card className="px-3 py-1 text-sm bg-white/90 backdrop-blur shadow-lg">
                {page.title}
              </Card>
            </div>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <CurrentComponent onNext={nextPage} />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          onClick={prevPage}
          disabled={currentPage === 0}
          variant="outline"
          size="lg"
          className="gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          上一页
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          size="lg"
          className="gap-2 bg-blue-600 hover:bg-blue-700"
        >
          下一页
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Page Indicator */}
      <div className="fixed bottom-8 right-8 text-sm text-muted-foreground">
        {currentPage + 1} / {pages.length}
      </div>
    </div>
  );
}
