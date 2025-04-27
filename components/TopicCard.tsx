import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Topic } from '@/types';
import Colors from '@/constants/colors';
import { CheckCircle, Circle } from 'lucide-react-native';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const router = useRouter();
  
  const handlePress = () => {
    router.push(`/topic/${topic.id}`);
  };
  
  const difficultyColor = {
    beginner: '#68D391', // Green
    intermediate: '#F6AD55', // Orange
    advanced: '#F56565', // Red
  }[topic.difficulty];
  
  return (
    <TouchableOpacity 
      style={[
        styles.card, 
        topic.completed && styles.completedCard
      ]} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{topic.title}</Text>
          <View style={[styles.difficultyBadge, { backgroundColor: `${difficultyColor}20` }]}>
            <Text style={[styles.difficultyText, { color: difficultyColor }]}>
              {topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1)}
            </Text>
          </View>
        </View>
        {topic.completed ? (
          <CheckCircle size={22} color={Colors.success} />
        ) : (
          <Circle size={22} color={Colors.pending} />
        )}
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {topic.description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: Colors.pending,
  },
  completedCard: {
    borderLeftColor: Colors.success,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
    marginRight: 12,
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
  },
  difficultyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '500',
  },
});