import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTopicsStore } from '@/store/topicsStore';
import ProgressBar from '@/components/ProgressBar';
import Colors from '@/constants/colors';
import { categories } from '@/data/topics';
import { BarChart, Award, RotateCcw } from 'lucide-react-native';

export default function ProgressScreen() {
  const { topics, completedCount, getCompletionPercentage, resetProgress, getTopicsByCategory } = useTopicsStore();
  const completionPercentage = getCompletionPercentage();
  
  const handleResetProgress = () => {
    Alert.alert(
      "Reset Progress",
      "Are you sure you want to reset all your progress? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Reset", 
          onPress: () => resetProgress(),
          style: "destructive"
        }
      ]
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Your Learning Progress</Text>
        </View>
        
        <View style={styles.overviewCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{completedCount}</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{topics.length - completedCount}</Text>
              <Text style={styles.statLabel}>Remaining</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{topics.length}</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
          </View>
          
          <View style={styles.progressContainer}>
            <ProgressBar progress={completionPercentage} height={12} />
          </View>
          
          {completionPercentage === 100 && (
            <View style={styles.completionBadge}>
              <Award size={24} color={Colors.success} style={styles.badgeIcon} />
              <Text style={styles.completionText}>
                Congratulations! You've completed all topics!
              </Text>
            </View>
          )}
        </View>
        
        <Text style={styles.sectionTitle}>Progress by Category</Text>
        
        {categories.map((category) => {
          const categoryTopics = getTopicsByCategory(category.id);
          const completedCategoryTopics = categoryTopics.filter(topic => topic.completed);
          const categoryProgress = categoryTopics.length > 0 
            ? (completedCategoryTopics.length / categoryTopics.length) * 100 
            : 0;
          
          return (
            <View key={category.id} style={styles.categoryProgressCard}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryCount}>
                  {completedCategoryTopics.length}/{categoryTopics.length}
                </Text>
              </View>
              <ProgressBar 
                progress={categoryProgress} 
                height={8} 
                showPercentage={false} 
              />
            </View>
          );
        })}
        
        <View style={styles.resetContainer}>
          <TouchableOpacity 
            style={styles.resetButton} 
            onPress={handleResetProgress}
            activeOpacity={0.7}
          >
            <RotateCcw size={16} color={Colors.secondary} style={styles.resetIcon} />
            <Text style={styles.resetText}>Reset Progress</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  overviewCard: {
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.border,
  },
  progressContainer: {
    marginBottom: 8,
  },
  completionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.success}15`,
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  badgeIcon: {
    marginRight: 8,
  },
  completionText: {
    color: Colors.success,
    fontWeight: '500',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  categoryProgressCard: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  categoryCount: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  resetContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: `${Colors.secondary}15`,
  },
  resetIcon: {
    marginRight: 8,
  },
  resetText: {
    color: Colors.secondary,
    fontWeight: '500',
  },
});