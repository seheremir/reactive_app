import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTopicsStore } from '@/store/topicsStore';
import TopicCard from '@/components/TopicCard';
import ProgressBar from '@/components/ProgressBar';
import Colors from '@/constants/colors';
import { categories } from '@/data/topics';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const getTopicsByCategory = useTopicsStore(state => state.getTopicsByCategory);
  
  const category = categories.find(c => c.id === id);
  const topics = getTopicsByCategory(id || '');
  const completedCount = topics.filter(topic => topic.completed).length;
  const progress = topics.length > 0 ? (completedCount / topics.length) * 100 : 0;
  
  if (!category) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Category not found</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: category.title,
          headerTintColor: Colors.primary,
        }} 
      />
      <StatusBar style="auto" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{category.title}</Text>
          <Text style={styles.description}>{category.description}</Text>
        </View>
        
        <View style={styles.progressSection}>
          <Text style={styles.progressTitle}>Your Progress</Text>
          <ProgressBar progress={progress} />
          <Text style={styles.progressStats}>
            {completedCount} of {topics.length} topics completed
          </Text>
        </View>
        
        <Text style={styles.sectionTitle}>Topics</Text>
        
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  progressSection: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  progressStats: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: Colors.textSecondary,
  },
});