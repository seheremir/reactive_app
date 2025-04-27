import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { categories } from '@/data/topics';
import CategoryCard from '@/components/CategoryCard';
import ProgressBar from '@/components/ProgressBar';
import { useTopicsStore } from '@/store/topicsStore';
import Colors from '@/constants/colors';

export default function RoadMapScreen() {
  const { topics, completedCount, getCompletionPercentage } = useTopicsStore();
  const completionPercentage = getCompletionPercentage();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>React Native Learning Tracker</Text>
          <Text style={styles.subtitle}>
            Track your progress learning React Native concepts
          </Text>
        </View>
        
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          <ProgressBar progress={completionPercentage} />
          <Text style={styles.progressStats}>
            {completedCount} of {topics.length} topics completed
          </Text>
        </View>
        
        <Text style={styles.sectionTitle}>Learning Categories</Text>
        
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
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
  subtitle: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  progressStats: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
});