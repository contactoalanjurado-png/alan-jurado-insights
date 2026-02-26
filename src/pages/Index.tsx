import { Search, Plus, Menu, Calendar, ArrowRight, Mic } from "lucide-react";
import VisaCard from "@/components/dashboard/VisaCard";
import TotalIncomeCard from "@/components/dashboard/TotalIncomeCard";
import SystemLockCard from "@/components/dashboard/SystemLockCard";
import TimerCard from "@/components/dashboard/TimerCard";
import GrowthCard from "@/components/dashboard/GrowthCard";
import StocksCard from "@/components/dashboard/StocksCard";
import AnnualProfitsCard from "@/components/dashboard/AnnualProfitsCard";
import ActivityManager from "@/components/dashboard/ActivityManager";
import ReviewRating from "@/components/dashboard/ReviewRating";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button className="text-muted-foreground hover:text-foreground">
            <Menu size={20} />
          </button>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            AJ
          </div>
          <div>
            <h1 className="text-base font-semibold text-foreground">Alan Jurado</h1>
            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
            <Plus size={16} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-secondary overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/40 to-warning/40 rounded-full" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground">Dwayne Tatum</p>
              <p className="text-xs text-muted-foreground">CEO Assistant</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-secondary/60 rounded-full px-4 py-2">
            <Search size={14} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Start searching here..."
              className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground w-40"
            />
          </div>
        </div>
      </header>

      {/* Date bar + Help */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="card-surface flex items-center gap-3 !p-3">
            <span className="text-2xl font-bold text-foreground">19</span>
            <div>
              <p className="text-xs text-muted-foreground">Tue,</p>
              <p className="text-sm font-medium text-foreground">December</p>
            </div>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
            Show my Tasks <ArrowRight size={16} />
          </button>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
            <Calendar size={16} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Hey, Need help?👋
            </h2>
            <p className="text-muted-foreground text-base">Just ask me anything!</p>
          </div>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
            <Mic size={16} />
          </button>
        </div>
      </div>

      {/* Main grid - top row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-4">
        <div className="lg:col-span-3">
          <VisaCard />
        </div>
        <div className="lg:col-span-3">
          <TotalIncomeCard />
        </div>
        <div className="lg:col-span-2">
          <SystemLockCard />
        </div>
        <div className="lg:col-span-2">
          <TimerCard />
        </div>
        <div className="lg:col-span-2">
          <GrowthCard />
        </div>
      </div>

      {/* Stocks row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        <div className="lg:col-span-12">
          <StocksCard />
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <AnnualProfitsCard />
        </div>
        <div className="lg:col-span-5">
          <ActivityManager />
        </div>
        <div className="lg:col-span-3">
          <ReviewRating />
        </div>
      </div>
    </div>
  );
};

export default Index;
