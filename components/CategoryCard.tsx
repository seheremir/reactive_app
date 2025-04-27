import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Category } from '@/types';
import Colors from '@/constants/colors';
import { useTopicsStore } from '@/store/topicsStore';
import * as Icons from 'lucide-react-native';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const router = useRouter();
  const getTopicsByCategory = useTopicsStore(state => state.getTopicsByCategory);
  
  const topics = getTopicsByCategory(category.id);
  const completedCount = topics.filter(topic => topic.completed).length;
  const progress = topics.length > 0 ? (completedCount / topics.length) * 100 : 0;
  
  // Dynamically get the icon component
  const IconComponent = Icons[category.icon as keyof typeof Icons] || Icons.Layers;
  
  const handlePress = () => {
    router.push(`/category/${category.id}`);
  };
  
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <IconComponent size={24} color={Colors.primary} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {category.description}
        </Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${progress}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {completedCount}/{topics.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: `${Colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: Colors.progressBackground,
    borderRadius: 3,
    marginRight: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});