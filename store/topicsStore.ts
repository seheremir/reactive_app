import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Topic } from '@/types';
import { topics as initialTopics } from '@/data/topics';

interface TopicsState {
  topics: Topic[];
  completedCount: number;
  toggleCompleted: (id: string) => void;
  resetProgress: () => void;
  getTopicsByCategory: (category: string) => Topic[];
  getCompletionPercentage: () => number;
}

export const useTopicsStore = create<TopicsState>()(
  persist(
    (set, get) => ({
      topics: initialTopics,
      completedCount: 0,
      
      toggleCompleted: (id: string) => {
        set((state) => {
          const updatedTopics = state.topics.map((topic) => {
            if (topic.id === id) {
              return { ...topic, completed: !topic.completed };
            }
            return topic;
          });
          
          const completedCount = updatedTopics.filter(topic => topic.completed).length;
          
          return {
            topics: updatedTopics,
            completedCount,
          };
        });
      },
      
      resetProgress: () => {
        set((state) => ({
          topics: state.topics.map(topic => ({ ...topic, completed: false })),
          completedCount: 0,
        }));
      },
      
      getTopicsByCategory: (category: string) => {
        return get().topics.filter(topic => topic.category === category);
      },
      
      getCompletionPercentage: () => {
        const { topics, completedCount } = get();
        return topics.length > 0 ? (completedCount / topics.length) * 100 : 0;
      },
    }),
    {
      name: 'topics-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);