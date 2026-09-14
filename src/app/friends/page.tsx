"use client";

import { useStore } from "@/store/useStore";
import { Flame, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function FriendsPage() {
  const { friends } = useStore();

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 pb-12">
      
      <header className="space-y-2 border-b border-[var(--color-border)] pb-6">
        <h1 className="text-3xl font-medium tracking-tight text-white">Friends</h1>
        <p className="text-[var(--color-muted-foreground)]">
          Compare progress, streaks, and weekly activity.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Col: Friends List */}
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-[var(--color-muted-foreground)] uppercase tracking-wider">
              Learning Network
            </h2>
            <button className="text-sm text-white hover:underline decoration-[var(--color-border)] underline-offset-4">
              + Invite Friend
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {friends.map((friend, i) => (
              <motion.div 
                key={friend.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group glass-panel rounded-xl overflow-hidden hover:border-[var(--color-accent)] transition-all duration-300"
              >
                <div className="flex items-start justify-between p-5">
                  
                  {/* Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] flex items-center justify-center text-sm font-bold text-white relative shadow-sm">
                        {friend.name.charAt(0)}
                        {friend.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[var(--color-surface)] shadow-sm" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white">{friend.name}</h3>
                      <div className="flex items-center gap-1 text-orange-500 font-medium text-sm ml-2 bg-orange-500/10 px-2 py-0.5 rounded-full">
                        <Flame className="w-3.5 h-3.5" /> {friend.streak} days
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-muted-foreground)] ml-14">
                      {friend.learning_goal}
                    </p>
                  </div>

                  {/* Stats Snippet */}
                  <div className="flex items-center gap-8 text-right">
                    <div className="hidden sm:block">
                      <div className="text-lg font-bold text-white">{friend.hours_studied_this_week}h 40m</div>
                      <div className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider">This week</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[var(--color-accent)]">{friend.weekly_score}</div>
                      <div className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider">Score</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Col: Activity Feed */}
        <div className="space-y-6">
          <h2 className="text-sm font-medium text-[var(--color-muted-foreground)] uppercase tracking-wider">
            Activity Feed
          </h2>
          
          <div className="space-y-4">
            {friends.length > 0 ? (
              friends.slice(0, 5).map((friend, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-px bg-[var(--color-border)] relative my-1 ml-2">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--color-surface-hover)] border border-[var(--color-border)]" />
                  </div>
                  <div className="pb-4">
                    <p className="text-sm text-[var(--color-foreground)]">
                      <span className="font-medium text-white">{friend.name}</span> completed {friend.hours_studied_this_week || 0}h this week
                    </p>
                    <p className="text-xs text-[var(--color-muted-foreground)] mt-1">{i + 1}h ago</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-[var(--color-muted-foreground)]">No recent activity.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
